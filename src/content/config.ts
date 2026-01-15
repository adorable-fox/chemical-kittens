import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
    type: 'content',
    // Type-check frontmatter using a schema
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        publishDate: z.coerce.date().optional(),
        image: image().optional(),
        ingredients: z.union([
            z.array(z.string()),
            z.record(z.string(), z.array(z.string()))
        ]),
        // tags: z.array(z.string()).optional(), // Deprecated
        recipeType: z.string().optional(),
        mainIngredient: z.string().optional(),
        country: z.string().optional(),
    }),
});

export const collections = { recipes };
