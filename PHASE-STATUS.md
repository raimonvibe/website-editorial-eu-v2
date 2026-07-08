# Redesign phase tracker

> Work through phases in order. Image filenames are locked — replace files in `public/images/` subfolders only.

| Phase | Status | What |
|---|---|---|
| **1** | ✅ Done | Tokens, fonts, dark mode, `SiteShell`, `SiteNav`, `BentoGrid`, all pages migrated |
| **2** | ✅ Done | Folder structure + placeholder WebP files at final names (`npm run images:placeholders`) |
| **3** | ✅ Done | Homepage, about, contact — hero mosaic, organic masks, copy, form polish |
| **4** | ✅ Done | Projects, scripture, nigeria grids — accent palettes, stat row, card variants |
| **5** | ✅ Done | Services, clients, opportunities, certificates, apps, legal, resume polish |
| **6** | ✅ Done | Models polish, legacy CSS removed, manifest/OG/favicon, 404 page |
| **7** | ✅ Done | QA — dark mode SSR, a11y, mobile touch targets, alt text, Lighthouse, legacy cleanup |

## Phase 7 QA summary

- **Dark mode:** `class="dark"` on `<html>` for SSR; `color-scheme: light dark`; viewport `themeColor` tokens
- **Accessibility:** skip-to-content link, `:focus-visible` rings, form `aria-label`, touch-target utilities (44px)
- **Alt text:** about portrait, certificates, 3D models — descriptive alts per image brief
- **Build fix:** removed `cleanup-build.js` from build (was deleting RSC `.txt` files → broken client nav + console errors)
- **Lighthouse (mobile homepage):** A11y **100**, Best Practices **100**, SEO **100**
- **Legacy removed:** `Header.tsx`, `Sidebar.tsx`, `SidebarProjects.tsx`, `useSidebar.ts`, `public/js/*`

## Replace images (designer)

1. Export WebP at sizes in `IMAGE-BRIEF-FOR-DESIGNER.md`
2. Overwrite the matching file under `public/images/`
3. No code changes needed if filename matches

## Commands

```bash
node scripts/setup-image-placeholders.mjs   # re-seed from old assets
npm run build                               # verify (Node 20+)
```
