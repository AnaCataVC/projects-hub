import { describe, it, expect } from "vitest";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import ProjectLayout from "../layouts/ProjectLayout.astro";
import PoppyBackground from "../components/PoppyBackground.astro";
import IndexPage from "../pages/index.astro";

describe("ProjectLayout.astro", () => {
  it("renders the project title, categories and technologies", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ProjectLayout, {
      props: {
        title: "Test Project",
        description: "A test project description.",
        categories: ["Web"],
        technologies: ["Astro"],
      },
    });

    expect(result).toContain("Test Project");
    expect(result).toContain("Web");
    expect(result).toContain("Astro");
    expect(result).toContain('id="console-window"');
  });
});

describe("PoppyBackground.astro", () => {
  it("renders without throwing", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(PoppyBackground);

    expect(result).toContain("-bottom-10 -right-10");
  });
});

describe("index.astro", () => {
  it("renders the terminal console shell without throwing", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(IndexPage);

    expect(result).toContain('id="console-window"');
    expect(result).toContain('id="projects-data"');
  });
});
