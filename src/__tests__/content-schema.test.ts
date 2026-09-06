import { describe, it, expect } from "vitest";
import { z } from "zod";

/**
 * Re-declares the Zod schema from content.config.ts to validate it independently.
 * This ensures the schema contract is tested without requiring Astro internals.
 */
const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
  githubUrl: z.string().optional(),
  liveAppUrl: z.string().optional(),
  websiteUrl: z.string().optional(),
  isLiveApp: z.boolean().default(false),
  technologies: z.array(z.string()).default([]),
  categories: z.array(z.string()).default([]),
  problem: z.string().optional(),
  solution: z.string().optional(),
  status: z
    .enum(["En Desarrollo", "Archivado", "Activo", "In Development", "Archived", "Active"])
    .default("Activo"),
  type: z
    .enum(["desktop", "mobile", "web", "ai", "data-science"])
    .default("desktop"),
  learnings: z.array(z.string()).default([]),
  websiteActionText: z.string().optional(),
});

const minimalValid = {
  title: "My Project",
  description: "A short description.",
};

// ---------------------------------------------------------------------------
// Required fields
// ---------------------------------------------------------------------------
describe("content schema — required fields", () => {
  it("accepts a minimal valid entry (only title + description)", () => {
    const result = projectSchema.safeParse(minimalValid);
    expect(result.success).toBe(true);
  });

  it("rejects entries missing title", () => {
    const result = projectSchema.safeParse({ description: "oops" });
    expect(result.success).toBe(false);
  });

  it("rejects entries missing description", () => {
    const result = projectSchema.safeParse({ title: "oops" });
    expect(result.success).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Default values
// ---------------------------------------------------------------------------
describe("content schema — default values", () => {
  it("defaults isLiveApp to false", () => {
    const result = projectSchema.safeParse(minimalValid);
    expect(result.success && result.data.isLiveApp).toBe(false);
  });

  it("defaults technologies to empty array", () => {
    const result = projectSchema.safeParse(minimalValid);
    expect(result.success && result.data.technologies).toEqual([]);
  });

  it("defaults learnings to empty array", () => {
    const result = projectSchema.safeParse(minimalValid);
    expect(result.success && result.data.learnings).toEqual([]);
  });

  it("defaults status to Activo", () => {
    const result = projectSchema.safeParse(minimalValid);
    expect(result.success && result.data.status).toBe("Activo");
  });

  it("defaults type to desktop", () => {
    const result = projectSchema.safeParse(minimalValid);
    expect(result.success && result.data.type).toBe("desktop");
  });
});

// ---------------------------------------------------------------------------
// Status enum
// ---------------------------------------------------------------------------
describe("content schema — status enum", () => {
  const validStatuses = [
    "En Desarrollo",
    "Archivado",
    "Activo",
    "In Development",
    "Archived",
    "Active",
  ];

  validStatuses.forEach((status) => {
    it(`accepts valid status: "${status}"`, () => {
      const result = projectSchema.safeParse({ ...minimalValid, status });
      expect(result.success).toBe(true);
    });
  });

  it("rejects an invalid status value", () => {
    const result = projectSchema.safeParse({ ...minimalValid, status: "Dormido" });
    expect(result.success).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Type enum
// ---------------------------------------------------------------------------
describe("content schema — type enum", () => {
  const validTypes = ["desktop", "mobile", "web", "ai", "data-science"];

  validTypes.forEach((type) => {
    it(`accepts valid type: "${type}"`, () => {
      const result = projectSchema.safeParse({ ...minimalValid, type });
      expect(result.success).toBe(true);
    });
  });

  it("rejects an invalid type value", () => {
    const result = projectSchema.safeParse({ ...minimalValid, type: "blockchain" });
    expect(result.success).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Optional fields
// ---------------------------------------------------------------------------
describe("content schema — optional fields", () => {
  it("accepts githubUrl when provided", () => {
    const result = projectSchema.safeParse({
      ...minimalValid,
      githubUrl: "https://github.com/example/repo",
    });
    expect(result.success).toBe(true);
  });

  it("accepts a full entry with all optional fields", () => {
    const full = {
      ...minimalValid,
      icon: "🚀",
      githubUrl: "https://github.com/x/y",
      liveAppUrl: "https://example.com/app",
      websiteUrl: "https://example.com",
      isLiveApp: true,
      technologies: ["React", "TypeScript"],
      categories: ["web", "portfolio"],
      problem: "A real problem.",
      solution: "A clean solution.",
      status: "Active" as const,
      type: "web" as const,
      learnings: ["Learned X", "Learned Y"],
      websiteActionText: "View Live",
    };
    const result = projectSchema.safeParse(full);
    expect(result.success).toBe(true);
  });
});
