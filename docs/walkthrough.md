# Walkthrough - Astro Recipe Website

I have successfully built the recipe website using the **Astro** framework. The site is minimalistic, fast, and easy to update by simply adding Markdown files.

**Repository:** [github.com/adorable-fox/chemical-kittens](https://github.com/adorable-fox/chemical-kittens)

## Deployment Guide (Cloudflare Pages)
Since your code is on GitHub, deploying to Cloudflare Pages is automated and free.

1.  **Log in** to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  Go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3.  Select your repository: `adorable-fox/chemical-kittens`.
4.  **Build Settings** (Cloudflare usually detects these automatically):
    *   **Framework Preset**: `Astro`
    *   **Build command**: `npm run build`
    *   **Build output directory**: `dist`
5.  Click **Save and Deploy**.

Cloudflare will now build your site. Any time you `git push` changes to `main`, it will automatically redeploy!

## Changes
### Core Framework
- Initialized a new Astro project.
- Configured **Astro Assets** for automatic image optimization (WebP/AVIF generation, lazy loading).
- Configured **Content Collections** for type-safe recipe management.

### Features
| Feature | Description |
| :--- | :--- |
| **Recipe Storage** | Recipes are stored as Markdown files in `src/content/recipes/`. |
| **Home Page** | Lists recipes in a **3-column grid** with **Pagination** (9 items per page), sorted **Alphabetically**. |
| **Search** | **Instant search box** in the header to filter recipes by title or tags. |
| **Filters** | **Dropdowns** in the header, aligned directly **below the search box**. |
| **Dark Mode** | **Toggle button (🌙/☀️)** aligned **perfectly** with search (both 44px height). |
| **Images** | **Optimized Assets**: Images are stored in `src/assets/images/` and automatically resized/compressed by Astro. |
| **Categories** | Tags are split into **color-coded categories**: **Type**, **Ingredient**, **Country**. |
| **Tag Navigation** | **Clickable tags** lead to pages filtering all recipes by that category (e.g., `/tags/italy`). |
| **Ingredient Groups** | recipes can have ingredients split into subgroups (e.g. "Main", "Spices") for clarity. |
| **Checklists** | **Interactive ingredient lists** with persistent state (saved in LocalStorage). |
| **Print View** | **Optimization for printing**: Hides navigation and images, focusing on content. |
| **Cooking Mode** | **Screen Wake Lock**: Prevents screen sleep while viewing a recipe. |
| **Typography** | **Inter** (Primary) + **System UI**. Clean and readable. |

### Files Implemented
- `src/layouts/Layout.astro`: Dark mode toggle, theme logic, and search.
- `src/pages/recipes/[...slug].astro`: Cooking mode button, Wake Lock logic, and persistent checkboxes.
- `src/styles/global.css`: CSS Variables for theming and print styles.

## How to Add a Recipe
1. **Add Image**: Save your photo to `src/assets/images/`.
2. **Create File**: Create a new markdown file in `src/content/recipes/` (e.g., `pasta.md`).
3. **Frontmatter**:
   ```yaml
   ---
   title: "My Recipe"
   image: "../../assets/images/my-photo.jpg"
   ingredients:
     - "Item 1"
   ---
   ```
4. **Instructions**: Write steps below the dashes.

## Verification
- **Build**: Run `npm run build` to generate the static site.
- **Preview**: Run `npm run preview` to see the production build locally.
