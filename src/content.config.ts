import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().nullable(),
    note: z.string().optional(),
  }),
});

const volunteering = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/volunteering' }),
  schema: z.object({
    organization: z.string(),
    role: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().nullable(),
    cause: z.string().optional(),
  }),
});

export const collections = { experience, volunteering };
