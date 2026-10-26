import { describe, it, expect } from "vitest";
import {
  stripHtml,
  splitProjectsByLang,
  isArchived,
  categorizeProjects,
  resolveSeIcon,
  searchNodes,
  nextSelectableIndex,
  prevSelectableIndex,
  clampIndex,
  resolvePathFromIds,
  serializePathIds,
} from "../utils/terminal-logic";
import type { MenuNode, RawProject, MappedProject } from "../utils/terminal-logic";

// ---------------------------------------------------------------------------
// stripHtml
// ---------------------------------------------------------------------------
describe("stripHtml", () => {
  it("removes simple HTML tags", () => {
    expect(stripHtml("<b>hello</b>")).toBe("hello");
  });

  it("removes nested HTML tags", () => {
    expect(stripHtml('<span class="foo"><em>hi</em></span>')).toBe("hi");
  });

  it("leaves plain text unchanged", () => {
    expect(stripHtml("no html here")).toBe("no html here");
  });

  it("handles empty string", () => {
    expect(stripHtml("")).toBe("");
  });

  it("strips tags but keeps inner text when multiple siblings", () => {
    expect(stripHtml("<a>foo</a> / <a>bar</a>")).toBe("foo / bar");
  });
});

// ---------------------------------------------------------------------------
// splitProjectsByLang
// ---------------------------------------------------------------------------
describe("splitProjectsByLang", () => {
  const rawProjects: RawProject[] = [
    { id: "es/life-tracker", status: "Activo", type: "web" },
    { id: "en/life-tracker", status: "Active", type: "web" },
    { id: "es/rest-eyes", status: "Activo", type: "desktop" },
  ];

  it("correctly separates ES projects", () => {
    const { esProjects } = splitProjectsByLang(rawProjects);
    expect(esProjects).toHaveLength(2);
    expect(esProjects.every((p) => p.id.startsWith("es/"))).toBe(true);
  });

  it("correctly separates EN projects", () => {
    const { enProjects } = splitProjectsByLang(rawProjects);
    expect(enProjects).toHaveLength(1);
    expect(enProjects[0].id).toBe("en/life-tracker");
  });

  it("strips the language prefix from baseId", () => {
    const { esProjects } = splitProjectsByLang(rawProjects);
    expect(esProjects[0].baseId).toBe("life-tracker");
  });

  it("returns empty arrays for empty input", () => {
    const { esProjects, enProjects } = splitProjectsByLang([]);
    expect(esProjects).toHaveLength(0);
    expect(enProjects).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// isArchived
// ---------------------------------------------------------------------------
describe("isArchived", () => {
  it("returns true for Spanish archived status", () => {
    expect(isArchived({ id: "x", status: "Archivado", type: "web" })).toBe(true);
  });

  it("returns true for English archived status", () => {
    expect(isArchived({ id: "x", status: "Archived", type: "web" })).toBe(true);
  });

  it("returns false for active project", () => {
    expect(isArchived({ id: "x", status: "Activo", type: "web" })).toBe(false);
  });

  it("returns false for in-development project", () => {
    expect(isArchived({ id: "x", status: "En Desarrollo", type: "desktop" })).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// categorizeProjects
// ---------------------------------------------------------------------------
describe("categorizeProjects", () => {
  const makeProject = (
    type: string,
    status = "Activo",
    id = "es/p"
  ): MappedProject => ({ id, status, type, baseId: id.replace("es/", "") });

  it("puts data-science projects in correct bucket", () => {
    const { dataScienceProjects } = categorizeProjects([makeProject("data-science")]);
    expect(dataScienceProjects).toHaveLength(1);
  });

  it("puts ai projects in correct bucket", () => {
    const { aiProjects } = categorizeProjects([makeProject("ai")]);
    expect(aiProjects).toHaveLength(1);
  });

  it("puts desktop/mobile/web into seProjects", () => {
    const projects = [
      makeProject("desktop"),
      makeProject("mobile"),
      makeProject("web"),
    ];
    const { seProjects, desktopProjects, mobileProjects, webProjects } =
      categorizeProjects(projects);
    expect(seProjects).toHaveLength(3);
    expect(desktopProjects).toHaveLength(1);
    expect(mobileProjects).toHaveLength(1);
    expect(webProjects).toHaveLength(1);
  });

  it("separates archived projects from active ones", () => {
    const projects = [
      makeProject("web", "Activo"),
      makeProject("desktop", "Archivado"),
      makeProject("mobile", "Archived"),
    ];
    const { archivedProjects, seProjects, webProjects } = categorizeProjects(projects);
    expect(archivedProjects).toHaveLength(2);
    expect(seProjects).toHaveLength(1);
    expect(webProjects).toHaveLength(1);
  });

  it("returns empty buckets when all projects are archived", () => {
    const {
      dataScienceProjects,
      aiProjects,
      seProjects,
      desktopProjects,
      mobileProjects,
      webProjects,
    } = categorizeProjects([makeProject("web", "Archivado")]);
    expect(dataScienceProjects).toHaveLength(0);
    expect(aiProjects).toHaveLength(0);
    expect(seProjects).toHaveLength(0);
    expect(desktopProjects).toHaveLength(0);
    expect(mobileProjects).toHaveLength(0);
    expect(webProjects).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// resolveSeIcon
// ---------------------------------------------------------------------------
describe("resolveSeIcon", () => {
  it("returns laptop icon for desktop", () => {
    expect(resolveSeIcon("desktop")).toBe("💻");
  });

  it("returns phone icon for mobile", () => {
    expect(resolveSeIcon("mobile")).toBe("📱");
  });

  it("returns globe icon for web", () => {
    expect(resolveSeIcon("web")).toBe("🌐");
  });

  it("returns lightning icon as default fallback", () => {
    expect(resolveSeIcon("unknown")).toBe("⚡");
    expect(resolveSeIcon("")).toBe("⚡");
  });
});

// ---------------------------------------------------------------------------
// searchNodes
// ---------------------------------------------------------------------------
describe("searchNodes", () => {
  const tree: MenuNode[] = [
    {
      title: "~/help",
      type: "folder",
      desc: "# Help and commands",
      color: "text-pink-600",
      children: [{ title: "Use arrow keys to navigate", type: "text" }],
    },
    {
      title: "~/proyectos",
      type: "folder",
      desc: "# Portfolio projects",
      color: "text-emerald-600",
      children: [
        {
          title: "data-science",
          type: "folder",
          children: [
            { title: "📊 ./life-tracker.sh", type: "action" },
          ],
        },
        { title: "⚡ ./rest-eyes.sh", type: "action" },
      ],
    },
  ];

  it("finds a top-level folder by title", () => {
    const results = searchNodes(tree, "help");
    expect(results.some((r) => r.title === "~/help")).toBe(true);
  });

  it("finds a nested action node by title", () => {
    const results = searchNodes(tree, "rest-eyes");
    expect(results.some((r) => stripHtml(r.title).includes("rest-eyes"))).toBe(true);
  });

  it("returns empty array when nothing matches", () => {
    const results = searchNodes(tree, "zzznomatch");
    expect(results).toHaveLength(0);
  });

  it("does NOT include text nodes in results", () => {
    const results = searchNodes(tree, "arrow keys");
    expect(results.every((r) => r.type !== "text")).toBe(true);
  });

  it("matches by desc field", () => {
    const results = searchNodes(tree, "portfolio projects");
    expect(results.some((r) => r.title === "~/proyectos")).toBe(true);
  });

  it("is case-insensitive", () => {
    const upper = searchNodes(tree, "HELP");
    const lower = searchNodes(tree, "help");
    expect(upper.length).toBe(lower.length);
  });

  it("sets searchTitle with lineage path for nested nodes", () => {
    const results = searchNodes(tree, "life-tracker");
    const match = results.find((r) => stripHtml(r.searchTitle || "").includes("life-tracker"));
    expect(match).toBeDefined();
    expect(match?.searchTitle).toContain("proyectos");
  });
});

// ---------------------------------------------------------------------------
// nextSelectableIndex
// ---------------------------------------------------------------------------
describe("nextSelectableIndex", () => {
  const list: MenuNode[] = [
    { title: "A", type: "action" },
    { title: "B", type: "text" },
    { title: "C", type: "folder" },
    { title: "D", type: "action" },
  ];

  it("moves to the next selectable (non-text) node", () => {
    expect(nextSelectableIndex(list, 0)).toBe(2); // skips index 1 (text)
  });

  it("does not move past the end of the list", () => {
    expect(nextSelectableIndex(list, 3)).toBe(3);
  });

  it("skips consecutive text nodes", () => {
    const listWithGap: MenuNode[] = [
      { title: "A", type: "action" },
      { title: "T1", type: "text" },
      { title: "T2", type: "text" },
      { title: "B", type: "folder" },
    ];
    expect(nextSelectableIndex(listWithGap, 0)).toBe(3);
  });
});

// ---------------------------------------------------------------------------
// prevSelectableIndex
// ---------------------------------------------------------------------------
describe("prevSelectableIndex", () => {
  const list: MenuNode[] = [
    { title: "A", type: "action" },
    { title: "B", type: "text" },
    { title: "C", type: "folder" },
  ];

  it("moves to the previous selectable node, skipping text", () => {
    expect(prevSelectableIndex(list, 2)).toBe(0); // skips index 1 (text)
  });

  it("stays at 0 when already at the top", () => {
    expect(prevSelectableIndex(list, 0)).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// clampIndex
// ---------------------------------------------------------------------------
describe("clampIndex", () => {
  const list: MenuNode[] = [
    { title: "A", type: "action" },
    { title: "B", type: "action" },
  ];

  it("clamps index above the list length to last valid index", () => {
    expect(clampIndex(list, 99)).toBe(1);
  });

  it("clamps negative index to 0", () => {
    expect(clampIndex(list, -5)).toBe(0);
  });

  it("returns 0 for an empty list", () => {
    expect(clampIndex([], 3)).toBe(0);
  });

  it("leaves a valid index unchanged", () => {
    expect(clampIndex(list, 1)).toBe(1);
  });
});

// ---------------------------------------------------------------------------
// resolvePathFromIds & serializePathIds
// ---------------------------------------------------------------------------
describe("resolvePathFromIds & serializePathIds", () => {
  const tree: MenuNode[] = [
    { id: "help", title: "~/help", type: "folder", children: [] },
    { id: "about", title: "~/about", type: "folder", children: [] },
    {
      id: "proyectos",
      title: "~/proyectos",
      type: "folder",
      children: [
        {
          id: "software-engineering",
          title: "software-engineering",
          type: "folder",
          children: [
            { id: "desktop", title: "desktop", type: "folder", children: [] },
            { id: "mobile", title: "mobile", type: "folder", children: [] },
          ],
        },
        { id: "data-science", title: "data-science", type: "folder", children: [] },
      ],
    },
  ];

  it("resolves nested folder hierarchy accurately", () => {
    const path = resolvePathFromIds(["proyectos", "software-engineering", "desktop"], tree);
    expect(path).toHaveLength(3);
    expect(path[0].id).toBe("proyectos");
    expect(path[1].id).toBe("software-engineering");
    expect(path[2].id).toBe("desktop");
  });

  it("handles bilingual root synonyms ('projects' matching 'proyectos')", () => {
    const path = resolvePathFromIds(["projects", "software-engineering"], tree);
    expect(path).toHaveLength(2);
    expect(path[0].id).toBe("proyectos");
    expect(path[1].id).toBe("software-engineering");
  });

  it("handles bilingual root synonyms in reverse ('proyectos' matching 'projects')", () => {
    const enTree: MenuNode[] = [
      { id: "projects", title: "~/projects", type: "folder", children: [] },
    ];
    const path = resolvePathFromIds(["proyectos"], enTree);
    expect(path).toHaveLength(1);
    expect(path[0].id).toBe("projects");
  });

  it("stops resolving when a non-existent child id is encountered", () => {
    const path = resolvePathFromIds(["proyectos", "non-existent"], tree);
    expect(path).toHaveLength(1);
    expect(path[0].id).toBe("proyectos");
  });

  it("returns empty array for empty ids", () => {
    const path = resolvePathFromIds([], tree);
    expect(path).toHaveLength(0);
  });

  it("serializes a resolved MenuNode path into an array of string identifiers", () => {
    const path = resolvePathFromIds(["proyectos", "software-engineering", "desktop"], tree);
    const serialized = serializePathIds(path);
    expect(serialized).toEqual(["proyectos", "software-engineering", "desktop"]);
  });

  it("serializes nodes using clean title if id is absent", () => {
    const customNodes: MenuNode[] = [
      { title: "~/custom-folder", type: "folder" },
    ];
    const serialized = serializePathIds(customNodes);
    expect(serialized).toEqual(["custom-folder"]);
  });
});

