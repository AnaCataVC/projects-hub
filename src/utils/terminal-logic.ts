/**
 * Pure utility functions extracted from the terminal console (index.astro).
 * These are isolated from the DOM so they can be unit-tested.
 */

export interface RawProject {
  id: string;
  status: string;
  type: string;
}

export interface MappedProject extends RawProject {
  baseId: string;
}

export interface MenuNode {
  id?: string;
  title: string;
  desc?: string;
  type: "folder" | "action" | "text";
  color?: string;
  expanded?: boolean;
  children?: MenuNode[];
  action?: () => void;
  isBack?: boolean;
  searchTitle?: string;
  lineage?: MenuNode[];
}

export interface SearchResult extends MenuNode {
  searchTitle: string;
  lineage: MenuNode[];
}

// ---------------------------------------------------------------------------
// HTML helpers
// ---------------------------------------------------------------------------

/** Strips all HTML tags from a string. */
export function stripHtml(str: string): string {
  return str.replace(/<[^>]*>?/gm, "");
}

// ---------------------------------------------------------------------------
// Project filtering helpers
// ---------------------------------------------------------------------------

/** Separates raw projects by language prefix (es/ vs en/). */
export function splitProjectsByLang(rawProjects: RawProject[]): {
  esProjects: MappedProject[];
  enProjects: MappedProject[];
} {
  const esProjects = rawProjects
    .filter((p) => p.id.startsWith("es/"))
    .map((p) => ({ ...p, baseId: p.id.replace("es/", "") }));

  const enProjects = rawProjects
    .filter((p) => p.id.startsWith("en/"))
    .map((p) => ({ ...p, baseId: p.id.replace("en/", "") }));

  return { esProjects, enProjects };
}

/** Returns true if a project is considered archived. */
export function isArchived(project: RawProject): boolean {
  return project.status === "Archivado" || project.status === "Archived";
}

/**
 * Groups projects into category buckets:
 * data-science | ai | software-engineering | archived
 */
export function categorizeProjects(projects: MappedProject[]): {
  dataScienceProjects: MappedProject[];
  aiProjects: MappedProject[];
  seProjects: MappedProject[];
  archivedProjects: MappedProject[];
} {
  const activeProjects = projects.filter((p) => !isArchived(p));
  const archivedProjects = projects.filter((p) => isArchived(p));

  const dataScienceProjects = activeProjects.filter((p) => p.type === "data-science");
  const aiProjects = activeProjects.filter((p) => p.type === "ai");
  const seProjects = activeProjects.filter((p) =>
    ["desktop", "mobile", "web"].includes(p.type)
  );

  return { dataScienceProjects, aiProjects, seProjects, archivedProjects };
}

/**
 * Resolves the icon emoji for a software-engineering project based on its type.
 */
export function resolveSeIcon(type: string): string {
  if (type === "desktop") return "💻";
  if (type === "mobile") return "📱";
  if (type === "web") return "🌐";
  return "⚡";
}

// ---------------------------------------------------------------------------
// Search logic
// ---------------------------------------------------------------------------

/**
 * Recursively searches the menu tree for nodes matching the query string.
 * Mirrors the searchNodes() function inside index.astro.
 */
export function searchNodes(
  nodes: MenuNode[],
  query: string,
  currentLineage: MenuNode[] = []
): SearchResult[] {
  const lowerQuery = query.toLowerCase();
  const results: SearchResult[] = [];

  for (const node of nodes) {
    const rawTitle = stripHtml(node.title);
    const cleanTitle = rawTitle.replace("~/", "");
    const matchTitle = cleanTitle.toLowerCase().includes(lowerQuery);
    const matchDesc = !!node.desc && node.desc.toLowerCase().includes(lowerQuery);
    const matchChildText =
      !!node.children &&
      node.children.some(
        (child) =>
          child.type === "text" && stripHtml(child.title).toLowerCase().includes(lowerQuery)
      );

    const newLineage = [...currentLineage, node];

    if (node.type !== "text") {
      if (matchTitle || matchDesc || matchChildText) {
        const pathHtml = currentLineage
          .map((n) => {
            const nTitle = n.title
              .replace("~/", "")
              .replace("[es] ", "")
              .replace("[en] ", "")
              .replace("[☀] ", "")
              .replace("[☾] ", "");
            if (n.color) {
              return `<span class="${n.color}">${nTitle}</span>`;
            }
            return nTitle;
          })
          .join(' <span class="opacity-50">/</span> ');

        results.push({
          ...node,
          searchTitle: pathHtml
            ? `${pathHtml} <span class="opacity-50">/</span> ${cleanTitle}`
            : cleanTitle,
          lineage: newLineage,
        });
      }
    }

    if (node.children) {
      results.push(...searchNodes(node.children, query, newLineage));
    }
  }

  return results;
}

// ---------------------------------------------------------------------------
// selectedIndex navigation helpers
// ---------------------------------------------------------------------------

/**
 * Moves selectedIndex downward, skipping "text" nodes.
 * Returns the new index (clamped to list bounds).
 */
export function nextSelectableIndex(flatList: MenuNode[], currentIndex: number): number {
  let idx = currentIndex;
  while (idx < flatList.length - 1) {
    idx++;
    if (flatList[idx].type !== "text") return idx;
  }
  return currentIndex;
}

/**
 * Moves selectedIndex upward, skipping "text" nodes.
 * Returns the new index (clamped to list bounds).
 */
export function prevSelectableIndex(flatList: MenuNode[], currentIndex: number): number {
  let idx = currentIndex;
  while (idx > 0) {
    idx--;
    if (flatList[idx].type !== "text") return idx;
  }
  return currentIndex;
}

/**
 * Clamps selectedIndex within the valid range [0, flatList.length - 1].
 */
export function clampIndex(flatList: MenuNode[], index: number): number {
  if (flatList.length === 0) return 0;
  if (index >= flatList.length) return flatList.length - 1;
  if (index < 0) return 0;
  return index;
}
