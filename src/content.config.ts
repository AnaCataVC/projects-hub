import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    githubUrl: z.string().optional(),
    liveAppUrl: z.string().optional(),
    websiteUrl: z.string().optional(),
    isLiveApp: z.boolean().default(false),
    technologies: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    // Nuevos campos estandarizados para Fichas
    problem: z.string().optional(),
    solution: z.string().optional(),
    status: z.enum(["En Desarrollo", "Archivado", "Activo", "In Development", "Archived", "Active"]).default("Activo"),
    type: z.enum(["desktop", "mobile", "web", "ai", "data-science"]).default("desktop"),
    learnings: z.array(z.string()).default([]),
    websiteActionText: z.string().optional(),
    lastUpdated: z.coerce.date().optional(),
    // End-user product landing, served on the project's own subdomain; independent from the case-study fields above
    product: z.object({
      tagline: z.string(),
      intro: z.string(),
      features: z.array(z.object({
        icon: z.string(), // lucide-static export name, e.g. "BellRing"
        title: z.string(),
        text: z.string(),
      })).min(1),
      screenshots: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
      faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
      platforms: z.array(z.string()).default([]),
      downloadUrl: z.string().optional(),
      downloadLabel: z.string().optional(),
      links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
      notice: z.object({ title: z.string(), text: z.string() }).optional(),
      catalog: z.object({
        title: z.string(),
        items: z.array(z.object({ title: z.string(), description: z.string(), tags: z.array(z.string()).default([]) })),
      }).optional(),
      codeSnippets: z.array(z.object({ title: z.string(), language: z.string(), code: z.string() })).default([]),
    }).optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
