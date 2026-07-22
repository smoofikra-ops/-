# Architecture Overview

This project is built to scale beyond a simple marketing website into a fully functional enterprise portal.

## Core Technologies
- **React (Vite)**: Fast, modern, module-based bundler.
- **TypeScript**: Strict typing for data models and API integration.
- **Tailwind CSS**: Utility-first CSS, configured with a robust design token system (graphite/primary scale).
- **Framer Motion**: Standardized layout animations and page transitions.
- **React Router**: Client-side routing.
- **i18n**: Custom Context-based internationalization (Arabic/English) supporting LTR/RTL out of the box.

## Folder Structure
- `/src/components`: Reusable UI modules (buttons, cards, headers, footers).
- `/src/pages`: Top-level route components.
- `/src/sections`: Page-specific sections (e.g., home sections).
- `/src/types`: **Core Domain Models** (Projects, Services, Categories, etc.).
- `/src/i18n`: Translations and language context.
- `/src/data`: Mock CMS data.
- `/docs`: Technical documentation.

## Scalability Principles
1. **CMS Ready**: All data (services, projects) is decoupled into `/data/index.ts` and strictly typed in `/types/index.ts`. Integrating a Headless CMS (Sanity, Strapi, Contentful) will only require swapping `/data` with API calls.
2. **Modular Components**: Avoid monolithic components. Shared UI (like buttons, image galleries) must go into `/components/ui`.
3. **SEO Ready**: An `<SEO>` component manages all meta tags dynamically per page.
4. **Theme Tokens**: Colors (Primary, Graphite) and spacing are centralized in Tailwind configuration, making white-labeling or dark-mode expansion trivial.
