# Content Structure

This project uses a strictly typed data model to ensure future CMS compatibility. All content models are defined in `/src/types/index.ts`.

## Core Models

### 1. Project
Represents a portfolio item (e.g., Fuel Station Construction).
- Supports dual language (ar/en).
- Includes status (`planning`, `in-progress`, `completed`).
- Contains `heroImage`, `gallery`, `beforeImages`, `afterImages`.
- Links to `categoryId` and `serviceIds`.
- Contains SEO overrides.

### 2. Service
Represents a business offering.
- Supports icon and hero image.
- Includes related FAQs and `relatedProjectIds`.
- Internal linking capabilities.

### 3. Company Info
Global configuration for the company.
- Vision, Mission, About text.
- Contact details (phones, emails, locations with coordinates).
- Social links.

### 4. Career Opportunities
Future-proof model for HR portal.
- Department, location, job type (full-time, part-time).
- Requirements list.

## Adding a CMS
When a CMS is integrated, follow this data flow:
1. Fetch data from CMS API in a React `useEffect` or via Next.js/Remix loaders (if migrated).
2. Map CMS response to the existing TypeScript models.
3. Pass models to the current components.
No UI changes will be required.
