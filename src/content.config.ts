import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    descriptionEn: z.string().optional(),
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
    type: z.enum(["desktop", "mobile", "web", "ai"]).default("desktop"),
    learnings: z.array(z.string()).default([]),
    websiteActionText: z.string().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
