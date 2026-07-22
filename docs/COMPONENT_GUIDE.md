# Component Guide

## Philosophy
The UI follows an atomic design principle. Components must be stateless where possible, fully responsive, and support RTL (Right-to-Left) rendering seamlessly.

## Layout & Structure
- **RootLayout**: The main wrapper. Provides Header and Footer.
- **Section Wrappers**: Always use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for standard containment.

## Styling Rules (Tailwind)
- **Colors**:
  - `primary`: Gold/Yellow accents. Use `primary-500` for main elements, `primary-600` for hover states.
  - `graphite`: The main monochromatic scale. `graphite-950` for dark backgrounds, `graphite-50` for light backgrounds.
- **RTL Support**: Use logical properties or Tailwind's `rtl:` variants (e.g., `rtl:-translate-x-1`, `ltr:translate-x-1`, `pr-4 rtl:pr-0 rtl:pl-4`). Do NOT use hardcoded `margin-left` or `padding-right` if it affects RTL layouts.

## Animations
- **Framer Motion**: Used for entry animations. 
- Standard transition: `transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}` (Custom bezier curve for a premium feel).
- Use `whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}` for scroll-triggered animations.

## Core Components
### SEO (`/src/components/seo/SEO.tsx`)
Must be included on EVERY page. Accepts a complete SEO data object.

### Future Reusable Components (To Be Extracted)
- `Button`: Unified button component supporting variants (solid, outline, ghost) and sizes.
- `Card`: Standardized card wrappers for projects and services.
- `SectionHeader`: Standardized title and subtitle block used across pages.
