// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
  //  Make the image a string if not a object
    image: z.string().optional().default(''),
    imageAlt: z.string().optional().default('Blog Image'),
    body: z.string().optional(),
    publishDate: z.string().transform((str: string | number | Date) => new Date(str)) ,
    author: z.string().default('KnightTimes'),
    category: z.string().default('News').optional(),
    tags: z.array(z.string()).default([]).optional(),
  }),
});

// const teamCollection = defineCollection({
//   schema: z.object({
//     draft: z.boolean(),
//     name: z.string(),
//     title: z.string(),
//     avatar: z.object({
//       src: z.string(),
//       alt: z.string(),
//     }),
//     publishDate: z.string().transform((str: string | number | Date) => new Date(str)),
//   }),
// });

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  // 'team': teamCollection,
};