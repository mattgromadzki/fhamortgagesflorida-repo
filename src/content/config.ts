import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string().default(''),
    keywords: z.string().default(''),
    type: z.string().default('page'),
    ogImage: z.string().default('og-image.jpg'),
    schema: z.array(z.string()).default([]),
    bodyHtml: z.string().default(''),
    pageJs: z.string().default(''),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    keywords: z.string().default(''),
    ogImage: z.string().default('og-image.jpg'),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    related: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { pages, blog };
