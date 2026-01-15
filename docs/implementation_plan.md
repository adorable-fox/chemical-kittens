# Implementation Plan - Image Optimization

We will migrate from using raw images in `public/` to Astro's optimized assets in `src/assets/`.

## User Review Required
> [!NOTE]
> This change moves images to `src/assets`. Markdown files will be updated to reference images via relative paths.

## Proposed Changes

### Configuration
#### [MODIFY] [config.ts](file:///home/jakub/Documents/chemical-kittens/src/content/config.ts)
- Update schema to use `image()` helper.

### Content
#### [MODIFY] [Recipes](file:///home/jakub/Documents/chemical-kittens/src/content/recipes)
- Update frontmatter `image` paths from `/images/foo.jpg` to `../../assets/images/foo.jpg`.

### Components
#### [MODIFY] [Layout.astro](file:///home/jakub/Documents/chemical-kittens/src/layouts/Layout.astro)
- No changes expected here unless we use images in layout.

#### [MODIFY] [[...page].astro](file:///home/jakub/Documents/chemical-kittens/src/pages/[...page].astro)
- Import `Image` from `astro:assets`.
- Replace `<img>` with `<Image />`.

#### [MODIFY] [[...slug].astro](file:///home/jakub/Documents/chemical-kittens/src/pages/recipes/[...slug].astro)
- Import `Image` from `astro:assets`.
- Replace `<img>` with `<Image />`.

#### [MODIFY] [[tag].astro](file:///home/jakub/Documents/chemical-kittens/src/pages/tags/[tag].astro)
- Import `Image` from `astro:assets`.
- Replace `<img>` with `<Image />`.

## Verification Plan
### Automated Tests
- Run `npm run build` to ensure all image paths resolve correctly.
- Check console for any missing image errors.

### Manual Verification
- Visual check of home page, recipe detail, and tag pages.
- Visual check of home page, recipe detail, and tag pages.
- Inspcet `img` source to verify optimized path (e.g., `/_astro/...`).

### Mobile Layout Fix
#### [MODIFY] [global.css](file:///home/jakub/Documents/chemical-kittens/src/styles/global.css)
- Change `.search-container` and `.filters` from fixed `width` to `max-width`.
- Add `@media (max-width: 768px)` block.
- Stack `header` elements vertically (`flex-direction: column`).
- Ensure full width for search and filters on mobile.

### Header Refinement (Desktop)
#### [MODIFY] [Layout.astro](file:///home/jakub/Documents/chemical-kittens/src/layouts/Layout.astro)
- Rename "Recipe Type" option to "Type".
- Restructure HTML: Group Toggle + Search in `.top-row`. Move `.filters` outside/below `.top-row`.

#### [MODIFY] [global.css](file:///home/jakub/Documents/chemical-kittens/src/styles/global.css)
- Update `.header-right` to `flex-direction: column`.
- Ensure `.filters` has `width: 100%` (matching the width of `.top-row`).


