import { getCollection } from 'astro:content';

export async function GET() {
    const recipes = await getCollection('recipes');

    const searchIndex = recipes.map(recipe => ({
        title: recipe.data.title,
        description: recipe.data.description,
        slug: recipe.slug,
        tags: [
            recipe.data.recipeType,
            recipe.data.mainIngredient,
            recipe.data.country
        ].filter(Boolean)
    }));

    return new Response(JSON.stringify(searchIndex), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
