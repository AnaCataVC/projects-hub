import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

/**
 * Keeps vercel.json host rewrites, product landings and archived entries consistent:
 * a subdomain must never rewrite to a page that isn't built, and archived projects
 * must not link to sites that no longer exist.
 */
const root = path.resolve(__dirname, "../..");
const contentDir = path.join(root, "src/content/projects");
const langs = ["es", "en"] as const;

function frontMatter(lang: string, slug: string): string {
  const file = path.join(contentDir, lang, `${slug}.md`);
  if (!fs.existsSync(file)) return "";
  return fs.readFileSync(file, "utf-8").split(/^---\s*$/m)[1] ?? "";
}

const slugs = fs.readdirSync(path.join(contentDir, "es")).map((f) => f.replace(/\.md$/, ""));
const isArchived = (fm: string) => /^status:\s*["']?(Archivado|Archived)["']?\s*$/m.test(fm);
const hasProduct = (fm: string) => /^product:\s*$/m.test(fm);

const vercelConfig = JSON.parse(fs.readFileSync(path.join(root, "vercel.json"), "utf-8"));
const rewrittenSlugs = new Set<string>(
  vercelConfig.rewrites
    .map((r: { destination: string }) => r.destination.match(/^\/p\/([^/]+)\//)?.[1])
    .filter(Boolean),
);

describe("product pages", () => {
  it.each([...rewrittenSlugs])("subdomain %s rewrites to a built, bilingual product page", (slug) => {
    for (const lang of langs) {
      const fm = frontMatter(lang, slug);
      expect(hasProduct(fm), `${lang}/${slug}.md needs a product block`).toBe(true);
      expect(isArchived(fm), `${lang}/${slug}.md is archived`).toBe(false);
    }
  });

  it.each(slugs.filter((s) => hasProduct(frontMatter("es", s))))("%s product block has a call to action", (slug) => {
    for (const lang of langs) {
      expect(frontMatter(lang, slug)).toMatch(/^\s+downloadUrl:\s*\S+/m);
    }
  });

  it.each(slugs.filter((s) => isArchived(frontMatter("es", s))))("archived %s links to no live site", (slug) => {
    for (const lang of langs) {
      expect(frontMatter(lang, slug)).not.toMatch(/^(websiteUrl|liveAppUrl):/m);
    }
  });
});
