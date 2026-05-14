# TASC KSA Landing Pages

This project is a static Vercel site for TASC KSA landing pages.

Each folder at the project root becomes a page at:

`lp.tascoutsourcing.sa/<folder-name>/`

## Active landing pages

- `/saudi-business-visa/` - Saudi Business Visa
- `/Saudi%20Business%20Visa/` - Saudi Business Visa original build
- `/saudi-business-setup/` - Saudi Business Setup
- `/book-keeping-ksa/` - Bookkeeping & ZATCA Compliance
- `/test-landing-page/` - Saudization Radar 2026

## Root page

The root `index.html` is a TASC-branded directory for active landing pages only.

## Add a new landing page

1. Create a new folder at the project root, for example `retail`.
2. Add an `index.html` inside that folder.
3. Commit and push to `main`.
4. Vercel will redeploy the site automatically.

The page will be available at:

`lp.tascoutsourcing.sa/retail/`

## SEO rule

Every landing page should include:

- A unique `<title>`
- A unique `<meta name="description">`

## Notes

- Old sample landing pages have been removed from the active repo.
- GitHub repo: `tasc-outsourcing/tasc-ksa-lp`
- Vercel project: `tasc-marketing/tasc-ksa-landing-pages`
