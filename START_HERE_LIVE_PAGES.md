# Start Here

Use this file when you are not sure what to edit. For the full rulebook, read `README.md`.

## First Ask

Before making changes, ask the user whether they want to:

1. Edit an existing landing page.
2. Create a new landing page.

If they want to edit an existing page, edit only that page folder. Do not touch other landing pages unless they explicitly ask.

If they want to create a new page, first check whether the requested new page folder already contains source files or assets. If it does not, ask the user to upload them. If the user only has Figma, ask for full-page screenshots from Figma before building.

## Edit Live Pages Here

- `book-keeping-ksa/`
- `defence/`
- `overview/`
- `saudi-business-setup/`
- `saudi-business-visa/`
- `saudi-retail/`
- `saudization/`
- `test-landing-page/`

## Archived Pages

- `_legacy/ksa-mining/` (not deployed)

Each page folder should contain its own `index.html` and, when needed, its own `assets/` folder.

## Root Files

- `index.html` controls the landing-page hub.
- `vercel.json` controls URL routing on Vercel.
- `README.md` explains the project rules.
- `.gitignore` and `.vercelignore` keep junk out of Git and deployments.

## Root Protection

Do not overwrite root `index.html` with a single landing page.

Do not deploy only one landing page folder in a way that removes the others. If the root is overwritten or existing folders/routes are missing, existing live pages can disappear from the site and show 404 errors.

For new live pages, preserve the existing root hub and `vercel.json`, then add the new page to both.

## New Page URL Rule

Use lowercase, hyphenated folder names. The live URL should end with the page folder name:

```text
https://lp.tascoutsourcing.sa/page-name/
```

## Required Before Final Go-Live

- Unique `<title>`
- Unique `<meta name="description">`
- GTM code or explicit user approval to go live without GTM
- Form code/integration or explicit user approval to go live without it
- Page added to root `index.html` hub when it is a new live page
- Page route added to `vercel.json` when it is a new live page
- Confirmation that existing live page routes were preserved

Once the landing page is created, developed, and staged, tell the user it is ready to be pushed to Git. Deployment should happen from Git to Vercel with the correct landing page URL.

## Do Not Add These To The Root

- Draft folders
- Source-export folders
- Legacy folders
- Zip files
- `node_modules`
- Build folders like `dist`
