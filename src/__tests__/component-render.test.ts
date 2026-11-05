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
    expect(result).toContain('id="global-theme-toggle"');
    expect(result).toContain('hreflang="es"');
    expect(result).toContain('hreflang="en"');
  });

  it("formats inline code backticks, bolds learning titles, and applies websiteActionText to liveAppUrl", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ProjectLayout, {
      props: {
        title: "Live App Test",
        description: "Testing live app CTA and inline formatting.",
        isLiveApp: true,
        liveAppUrl: "https://example.com",
        githubUrl: "https://github.com/example/repo",
        websiteActionText: "Ver Portafolio en Vivo",
        solution: "Built with `tasks.py` and `verify_ecosystem.py`.",
        learnings: [
          "Clean Architecture: Isolated domain logic with `SharedPreferences.OnSharedPreferenceChangeListener`.",
        ],
      },
    });

    expect(result).toContain("Ver Portafolio en Vivo");
    expect(result).toContain("<code");
    expect(result).toContain("tasks.py</code>");
    expect(result).toContain('<strong class="font-semibold text-slate-900 dark:text-white">Clean Architecture:</strong>');
    expect(result).toContain("[overflow-wrap:anywhere]");
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

describe("ProductLayout.astro", () => {
  it("renders the product hero with kicker, tagline split and features grid", async () => {
    // Dynamic import to avoid eager layout loading if container creates first
    const ProductLayout = (await import("../layouts/ProductLayout.astro")).default;
    const container = await AstroContainer.create();
    const mockEntry = {
      id: "es/windows-icons-admin",
      data: {
        title: "Windows Icons Admin",
        description: "Utilidad de personalización",
        icon: "/project-icons/windows-icons-admin-icon.png",
        githubUrl: "https://github.com/AnaCataVC/windows-icons-admin",
        product: {
          tagline: "Ponle orden y estilo a tus carpetas en Windows",
          intro: "Cambia y organiza los iconos de tus carpetas fácilmente.",
          features: [
            { icon: "FolderTree", title: "Personalización Masiva", text: "Asigna iconos individuales." },
          ],
          platforms: ["Windows 10", "Windows 11"],
          downloadUrl: "https://example.com/download",
          links: [],
          faq: [],
          screenshots: [],
          codeSnippets: [
            { title: "PowerShell", language: "powershell", code: "winget install ..." },
          ],
        },
      },
    };

    const result = await container.renderToString(ProductLayout, {
      props: {
        entry: mockEntry,
        lang: "es",
        slug: "windows-icons-admin",
      },
    });

    expect(result).toContain("Windows Icons Admin");
    expect(result).toContain("Ponle orden y estilo a tus carpetas en Windows");
    expect(result).toContain("text-purple-950");
    expect(result).toContain("dark:text-brand-purple-light");
    expect(result).toContain("Personalización Masiva");
    expect(result).toContain("terminal — Windows Icons Admin");
  });
});
