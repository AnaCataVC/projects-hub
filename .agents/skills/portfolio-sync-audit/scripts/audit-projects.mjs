#!/usr/bin/env node

/**
 * audit-projects.mjs
 *
 * Dynamically audits sibling local repositories and remote GitHub repositories
 * against the Projects Hub portfolio (src/content/projects/{es,en}/*.md).
 *
 * ZERO HARDCODED PATHS: All paths are dynamically resolved relative to process.cwd()
 * or the optional REPOS_DIR environment variable.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const CWD = process.cwd();
const REPOS_DIR = process.env.REPOS_DIR ? path.resolve(process.env.REPOS_DIR) : path.resolve(CWD, '..');
const PROJECTS_ES_DIR = path.join(CWD, 'src', 'content', 'projects', 'es');
const PROJECTS_EN_DIR = path.join(CWD, 'src', 'content', 'projects', 'en');

// Repositories that should not be indexed as standalone showcase projects
const IGNORED_REPOS = new Set([
  'projects-hub',         // Portfolio itself
  'anacatalina-homepage', // Root personal domain (ana-catalina.com)
  'antigravity-config',   // Machine environment configuration
  'munder-difflin',       // Third-party fork
]);

// Mappings for repositories that map to a differently named markdown file
const REPO_TO_PROJECT_MAP = {
  'prima-focus-showcase': 'prima-focus',
};

// Parse CLI arguments
const args = process.argv.slice(2);
const outputJson = args.includes('--json');
const sinceIndex = args.indexOf('--since');
const sinceFilter = sinceIndex !== -1 && args[sinceIndex + 1] ? new Date(args[sinceIndex + 1]) : null;

function getExistingProjects() {
  if (!fs.existsSync(PROJECTS_ES_DIR)) {
    return new Set();
  }
  return new Set(
    fs.readdirSync(PROJECTS_ES_DIR)
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace(/\.md$/, ''))
  );
}

function getLocalRepos() {
  const repos = [];
  if (!fs.existsSync(REPOS_DIR)) {
    return repos;
  }

  const entries = fs.readdirSync(REPOS_DIR, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const repoName = entry.name;
    if (IGNORED_REPOS.has(repoName)) continue;

    const repoPath = path.join(REPOS_DIR, repoName);
    const gitDir = path.join(repoPath, '.git');
    if (!fs.existsSync(gitDir)) continue;

    try {
      const gitLog = execSync('git log -1 --format="%cd|%h|%s" --date=iso', {
        cwd: repoPath,
        encoding: 'utf-8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();

      const [dateStr, commitHash, commitMsg] = gitLog.split('|');
      const lastCommitDate = dateStr ? new Date(dateStr) : null;

      repos.push({
        name: repoName,
        lastCommitDate,
        commitHash: commitHash || '',
        commitMsg: commitMsg || '',
        isLocal: true,
      });
    } catch {
      repos.push({
        name: repoName,
        lastCommitDate: null,
        commitHash: '',
        commitMsg: '',
        isLocal: true,
      });
    }
  }
  return repos;
}

function getGitHubRepos() {
  const repos = [];
  try {
    const rawOutput = execSync(
      'gh repo list --limit 100 --json name,description,updatedAt,pushedAt,isPrivate,isFork',
      { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'ignore'] }
    );
    const parsed = JSON.parse(rawOutput || '[]');
    for (const r of parsed) {
      if (r.isFork) continue; // Always ignore third-party forks
      if (IGNORED_REPOS.has(r.name)) continue;

      repos.push({
        name: r.name,
        description: r.description || '',
        pushedAt: r.pushedAt ? new Date(r.pushedAt) : null,
        isPrivate: r.isPrivate,
        isRemote: true,
      });
    }
  } catch {
    // GitHub CLI might not be installed, authenticated, or offline
  }
  return repos;
}

function runAudit() {
  const existingProjects = getExistingProjects();
  const localRepos = getLocalRepos();
  const ghRepos = getGitHubRepos();

  // Combine repos by name
  const repoMap = new Map();

  for (const r of localRepos) {
    repoMap.set(r.name, { ...r });
  }

  for (const r of ghRepos) {
    if (repoMap.has(r.name)) {
      const existing = repoMap.get(r.name);
      existing.ghPushedAt = r.pushedAt;
      existing.description = r.description;
      existing.isPrivate = r.isPrivate;
    } else {
      repoMap.set(r.name, {
        name: r.name,
        lastCommitDate: r.pushedAt,
        ghPushedAt: r.pushedAt,
        commitHash: '',
        commitMsg: '',
        description: r.description,
        isPrivate: r.isPrivate,
        isLocal: false,
      });
    }
  }

  const results = {
    newProjects: [],
    pendingUpdates: [],
    upToDate: [],
  };

  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

  for (const [repoName, info] of repoMap.entries()) {
    const targetProjectName = REPO_TO_PROJECT_MAP[repoName] || repoName;
    const existsInPortfolio = existingProjects.has(targetProjectName);

    if (!existsInPortfolio) {
      results.newProjects.push({
        repo: repoName,
        isPrivate: info.isPrivate ?? false,
        lastCommit: info.lastCommitDate?.toISOString().split('T')[0] || 'Unknown',
        message: info.commitMsg || info.description || '',
      });
      continue;
    }

    // Check if repo has recent updates
    const esFile = path.join(PROJECTS_ES_DIR, `${targetProjectName}.md`);
    let fileModTime = null;
    if (fs.existsSync(esFile)) {
      const stat = fs.statSync(esFile);
      fileModTime = stat.mtime;
    }

    const latestActivity = info.lastCommitDate || info.ghPushedAt;
    const isRecent = latestActivity && (
      (sinceFilter && latestActivity >= sinceFilter) ||
      (!sinceFilter && latestActivity >= fourteenDaysAgo)
    );

    if (isRecent) {
      results.pendingUpdates.push({
        repo: repoName,
        projectFile: `${targetProjectName}.md`,
        lastCommit: latestActivity.toISOString().split('T')[0],
        commitMsg: info.commitMsg || '',
      });
    } else {
      results.upToDate.push({
        repo: repoName,
        projectFile: `${targetProjectName}.md`,
        lastCommit: latestActivity ? latestActivity.toISOString().split('T')[0] : 'N/A',
      });
    }
  }

  if (outputJson) {
    console.log(JSON.stringify(results, null, 2));
    return;
  }

  // CLI Pretty Print
  console.log('\n======================================================');
  console.log('   Projects Hub — Repository Synchronization Audit    ');
  console.log('======================================================');
  console.log(`Scan Location: ${path.relative(CWD, REPOS_DIR) || '.'}`);
  console.log(`Portfolio Dir: ./src/content/projects/es\n`);

  if (results.newProjects.length > 0) {
    console.log('🌟 NEW PROJECTS DETECTED (Missing from portfolio):');
    for (const p of results.newProjects) {
      console.log(`  • ${p.repo.padEnd(25)} [${p.lastCommit}] ${p.message}`);
    }
    console.log('');
  } else {
    console.log('🌟 NEW PROJECTS: None detected.\n');
  }

  if (results.pendingUpdates.length > 0) {
    console.log('🔄 PENDING UPDATES (Recent activity detected):');
    for (const p of results.pendingUpdates) {
      console.log(`  • ${p.repo.padEnd(25)} [${p.lastCommit}] -> ${p.projectFile} (${p.commitMsg})`);
    }
    console.log('');
  } else {
    console.log('🔄 PENDING UPDATES: None detected.\n');
  }

  console.log(`✅ UP TO DATE PROJECTS: ${results.upToDate.length} projects synchronized.`);
  console.log('======================================================\n');
}

runAudit();
