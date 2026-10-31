import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

/**
 * Portfolio Integrity & Ecosystem Invariant Tests:
 * 1. Exact 1:1 bilingual file parity between src/content/projects/es/ and src/content/projects/en/
 * 2. Zero Country Flags Rule across all Markdown entries and UI components
 * 3. Physical existence of all referenced project icons and product screenshots under public/
 * 4. Path privacy invariant (zero leaked local absolute paths like C:\Users\ or /home/)
 */
const root = path.resolve(__dirname, "../..");
const contentDir = path.join(root, "src/content/projects");
const publicDir = path.join(root, "public");

const esFiles = fs
  .readdirSync(path.join(contentDir, "es"))
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.replace(/\.md$/, ""))
  .sort();

const enFiles = fs
  .readdirSync(path.join(contentDir, "en"))
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.replace(/\.md$/, ""))
  .sort();

// Regional indicator symbol pairs (country flag emojis: U+1F1E6 to U+1F1FF)
const COUNTRY_FLAG_REGEX = /[\u{1F1E6}-\u{1F1FF}]{2}/u;
// Local filesystem path leak detector
const LOCAL_PATH_LEAK_REGEX = /(?:[A-Za-z]:\\Users\\|\/Users\/[A-Za-z0-9_-]+\/|\/home\/[A-Za-z0-9_-]+\/)/;

describe("portfolio bilingual & asset integrity", () => {
  it("maintains strict 1:1 slug parity between Spanish (es) and English (en)", () => {
    expect(esFiles).toEqual(enFiles);
    expect(esFiles.length).toBeGreaterThan(0);
  });

  it.each(esFiles)("entry '%s' satisfies Zero Flags, Path Privacy, and Icon Asset existence in both languages", (slug) => {
    for (const lang of ["es", "en"] as const) {
      const filePath = path.join(contentDir, lang, `${slug}.md`);
      const content = fs.readFileSync(filePath, "utf-8");

      // 1. Zero Country Flags invariant
      expect(
        COUNTRY_FLAG_REGEX.test(content),
        `${lang}/${slug}.md contains a forbidden country flag emoji`,
      ).toBe(false);

      // 2. Path Privacy invariant
      expect(
        LOCAL_PATH_LEAK_REGEX.test(content),
        `${lang}/${slug}.md leaks a local user filesystem path`,
      ).toBe(false);

      // 3. Icon physical existence check (if icon is a relative public path starting with /)
      const iconMatch = content.match(/^icon:\s*["']?(\/[^"'\s]+)["']?\s*$/m);
      if (iconMatch) {
        const iconPublicPath = path.join(publicDir, iconMatch[1]);
        expect(
          fs.existsSync(iconPublicPath),
          `${lang}/${slug}.md references missing icon asset: public${iconMatch[1]}`,
        ).toBe(true);
      }

      // 4. Product screenshots physical existence check
      const screenshotMatches = [...content.matchAll(/^\s*-\s*src:\s*["']?(\/[^"'\s]+)["']?\s*$/gm)];
      for (const match of screenshotMatches) {
        const screenshotPublicPath = path.join(publicDir, match[1]);
        expect(
          fs.existsSync(screenshotPublicPath),
          `${lang}/${slug}.md references missing product screenshot: public${match[1]}`,
        ).toBe(true);
      }
    }
  });
});
