# Future Roadmap

This document outlines the strategic roadmap for transforming the current digital presence into a comprehensive enterprise platform.

## Phase 1: Dynamic Data (CMS Integration)
- Connect `/data` to a Headless CMS (e.g., Strapi, Sanity).
- Migrate all images to a CDN (e.g., Cloudinary, AWS S3).
- Implement dynamic SEO meta tags across all pages using the CMS data.

## Phase 2: Client & Supplier Portals
- **Client Portal**: Secure login area for clients to track project progress (using `status` and `constructionImages` fields), view invoices, and communicate with project managers.
- **Supplier Portal**: Tender request submissions, vendor registration, and document uploads.

## Phase 3: Media & Knowledge Center
- **Blog / News**: Publish company updates, industry insights, and press releases.
- **Media Library**: High-quality downloadable assets for press and partners.
- **Investor Relations**: Financial reports and corporate governance documents.

## Phase 4: HR & Career Portal
- Activate the `CareerOpportunity` model.
- Job listings, online application forms, and resume uploads.

## Phase 5: Advanced Analytics & Optimization
- Integrate A/B testing on CTA sections.
- Add advanced telemetry (Google Analytics 4, Hotjar, Mixpanel) for user behavior tracking.
- Implement server-side rendering (SSR) or Static Site Generation (SSG) for maximum SEO performance if moving to Next.js.
