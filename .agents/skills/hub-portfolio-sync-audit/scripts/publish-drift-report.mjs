#!/usr/bin/env node

/**
 * publish-drift-report.mjs
 *
 * Consumes audit-report.json and landings-report.json to:
 * 1. Generate GitHub Actions step summary ($GITHUB_STEP_SUMMARY).
 * 2. Manage an automated GitHub Issue (label: portfolio-drift) tracking pending updates.
 */

import fs from 'node:fs';
import { execSync } from 'node:child_process';

const AUDIT_REPORT_PATH = 'audit-report.json';
const LANDINGS_REPORT_PATH = 'landings-report.json';

function readJsonDefensive(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const buf = fs.readFileSync(filePath);
  let text;
  if (buf.length >= 2 && buf[0] === 0xff && buf[1] === 0xfe) {
    text = buf.toString('utf16le');
  } else {
    text = buf.toString('utf8');
  }
  return JSON.parse(text.replace(/^\uFEFF/, '').trim());
}

function run() {
  if (!fs.existsSync(AUDIT_REPORT_PATH)) {
    console.error(`Audit report not found at ${AUDIT_REPORT_PATH}`);
    process.exit(1);
  }

  const report = readJsonDefensive(AUDIT_REPORT_PATH);

  let landings = { issues: [], warnings: [], passing: [] };
  if (fs.existsSync(LANDINGS_REPORT_PATH)) {
    try {
      landings = readJsonDefensive(LANDINGS_REPORT_PATH) || landings;
    } catch (e) {
      console.warn('Could not parse landings-report.json:', e.message);
    }
  }

  const hasUpdates = Array.isArray(report.pendingUpdates) && report.pendingUpdates.length > 0;
  const hasNew = Array.isArray(report.newProjects) && report.newProjects.length > 0;
  const hasProductIssues = Array.isArray(landings.issues) && landings.issues.length > 0;
  const hasDrift = hasUpdates || hasNew || hasProductIssues;

  // 1. Build Step Summary
  const summaryLines = [
    '## 📊 Projects Hub — Weekly Drift Audit Summary',
    '',
    `- **Up-to-date projects:** ${report.upToDate?.length ?? 0}`,
    `- **Pending updates:** ${report.pendingUpdates?.length ?? 0}`,
    `- **New unindexed projects:** ${report.newProjects?.length ?? 0}`,
    `- **Archived (frozen):** ${report.notMonitored?.length ?? 0}`,
    `- **Product landings checked:** ${landings.passing?.length ?? 0} passing, ${landings.issues?.length ?? 0} blocking issues, ${landings.warnings?.length ?? 0} SEO suggestions`,
    '',
  ];

  if (hasNew) {
    summaryLines.push('### 🌟 New Unindexed Repositories');
    summaryLines.push('| Repository | Last Commit | Description |');
    summaryLines.push('| :--- | :--- | :--- |');
    for (const p of report.newProjects) {
      summaryLines.push(`| \`${p.repo}\` | ${p.lastCommit} | ${p.message || '—'} |`);
    }
    summaryLines.push('');
  }

  if (hasUpdates) {
    summaryLines.push('### 🔄 Pending Portfolio Updates');
    summaryLines.push('| Repository | Entry File | Last Commit | Reviewed At | Diff |');
    summaryLines.push('| :--- | :--- | :--- | :--- | :--- |');
    for (const p of report.pendingUpdates) {
      const diff = p.diffUrl ? `[Compare](${p.diffUrl})` : '—';
      summaryLines.push(`| \`${p.repo}\` | \`${p.projectFile}\` | ${p.lastCommit} | ${p.reviewedAt} | ${diff} |`);
    }
    summaryLines.push('');
  }

  if (hasProductIssues || (report.productAlerts && report.productAlerts.length > 0)) {
    summaryLines.push('### 🏷️ Product Landing & SEO Alerts');
    if (report.productAlerts && report.productAlerts.length > 0) {
      for (const a of report.productAlerts) {
        summaryLines.push(`- **\`${a.repo}\`**: ${a.issue}`);
      }
    }
    for (const iss of landings.issues) {
      summaryLines.push(`- **\`${iss.slug}\`** (\`${iss.category}\`): ${iss.message}`);
    }
    summaryLines.push('');
  }

  if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summaryLines.join('\n') + '\n', 'utf8');
    console.log('✅ Appended summary to GITHUB_STEP_SUMMARY.');
  }

  // 2. Manage GitHub Issue Lifecycle (only if GH_TOKEN or GITHUB_TOKEN is present)
  const ghToken = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
  if (!ghToken) {
    console.log('ℹ️  No GH_TOKEN detected; skipping GitHub Issue synchronization.');
    return;
  }

  // Ensure label exists in repository
  try {
    execSync('gh label create portfolio-drift --description "Weekly portfolio synchronization drift" --color d93f0b --force', { stdio: 'ignore' });
  } catch {
    // Ignore if already exists or permission restricted
  }

  // Find existing open drift issue
  let existingIssue = null;
  try {
    const openIssuesRaw = execSync('gh issue list --label portfolio-drift --state open --json number', { encoding: 'utf8' });
    const openIssues = JSON.parse(openIssuesRaw || '[]');
    if (openIssues.length > 0) {
      existingIssue = openIssues[0].number;
    }
  } catch (err) {
    console.warn('Could not inspect open issues:', err.message);
  }

  if (hasDrift) {
    const issueLines = [
      '## 🔄 Weekly Portfolio Drift Report',
      '',
      'The automated weekly audit has detected unindexed repositories or upstream updates requiring synchronization with Projects Hub.',
      '',
      '### 📋 Action Checklist',
    ];

    if (hasUpdates) {
      issueLines.push('\n#### 📦 Pending Upstream Updates');
      for (const p of report.pendingUpdates) {
        const diff = p.diffUrl ? ` ([View Diff](${p.diffUrl}))` : '';
        issueLines.push(`- [ ] \`${p.repo}\` — upstream commit on \`${p.lastCommit}\` (reviewed: \`${p.reviewedAt}\`)${diff}`);
      }
    }

    if (hasNew) {
      issueLines.push('\n#### 🌟 New Repositories to Index');
      for (const p of report.newProjects) {
        issueLines.push(`- [ ] \`${p.repo}\` — *${p.message || 'No description provided'}*`);
      }
    }

    if (hasProductIssues) {
      issueLines.push('\n#### 🏷️ Product Landing & SEO Blocking Issues');
      for (const iss of landings.issues) {
        issueLines.push(`- [ ] \`${iss.slug}\` [${iss.category}]: ${iss.message}`);
      }
    }

    issueLines.push(
      '',
      '---',
      '> 🤖 **Automated Resolution Instructions:**',
      '> 1. Open Google Antigravity and dispatch the `hub-portfolio-auditor` subagent, or',
      '> 2. Run locally in your terminal: `npm run audit:projects` and `npm run audit:landings`.',
      '> 3. Once changes are committed and pushed, this issue will close automatically during the next audit.'
    );

    const issueBody = issueLines.join('\n') + '\n';
    fs.writeFileSync('drift_issue_body.md', issueBody, 'utf8');

    if (existingIssue) {
      console.log(`Updating existing open issue #${existingIssue}...`);
      execSync(`gh issue edit ${existingIssue} --body-file drift_issue_body.md`);
      console.log(`✅ Issue #${existingIssue} updated successfully.`);
    } else {
      console.log('Creating new drift tracking issue...');
      const out = execSync('gh issue create --title "🔄 Weekly Portfolio Drift Report" --body-file drift_issue_body.md --label portfolio-drift --assignee AnaCataVC', { encoding: 'utf8' });
      console.log(`✅ New issue created: ${out.trim()}`);
    }

    // Clean up temporary file
    try {
      fs.unlinkSync('drift_issue_body.md');
    } catch {}
  } else {
    console.log('✨ No portfolio drift detected.');
    if (existingIssue) {
      console.log(`Closing resolved issue #${existingIssue}...`);
      execSync(`gh issue close ${existingIssue} --comment "✅ All portfolio entries and product landing pages are fully synchronized with their upstream repositories."`);
      console.log(`✅ Issue #${existingIssue} closed successfully.`);
    }
  }
}

run();
