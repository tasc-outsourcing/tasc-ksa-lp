# TASC Outsourcing Landing Pages

This project is structured as a static site for Vercel. Each folder becomes a landing page at:

`lp.tascoutsourcing.sa/<folder-name>/`

## Sample landing pages
- /manufacturing/
- /logistics/
- /healthcare/
- /technology/
- /construction/

## Add a new landing page
1. Create a new folder at the project root (example: `retail`).
2. Add an `index.html` inside that folder.
3. Deploy to Vercel. The page will be available at:

`lp.tascoutsourcing.sa/retail/`

## SEO rule (apply to every landing page)
- Include a unique `<title>` and a `<meta name="description">` that reflect the page content.

## Notes
- `index.html` at the root is a directory of all landing pages.
- Vercel will serve this as a static site without any build step.
