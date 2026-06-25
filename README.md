# TASC KSA Landing Pages

This is a static Vercel site for TASC KSA landing pages.

Each live landing page has one folder at the project root:

```text
page-folder/
  index.html
  assets/
```

The public URL matches the folder name:

```text
https://lp.tascoutsourcing.sa/page-folder/
```

## Live Landing Pages

- `book-keeping-ksa/` -> Bookkeeping & ZATCA Compliance
- `defence/` -> Defence & Aerospace Workforce Intelligence
- `ksa-mining/` -> KSA Mining Playbook
- `overview/` -> Landing Page Overview
- `saudi-business-setup/` -> Saudi Business Setup
- `saudi-business-visa/` -> Saudi Business Visa
- `saudi-retail/` -> Saudi Retail Execution Governance
- `saudization/` -> Saudization Strategy
- `test-landing-page/` -> Saudization Radar 2026

## Root Files

- `index.html` is the landing-page hub.
- `vercel.json` tells Vercel how to serve each folder URL.
- `.vercelignore` keeps drafts, exports, and junk out of deployments.
- `.gitignore` keeps local machine files out of Git.
- `START_HERE_LIVE_PAGES.md` is the quick editing guide.

## Rules

- Keep only live pages as root folders.
- Keep each page's assets inside that page's own `assets/` folder.
- Do not add source exports, drafts, old builds, zip files, or `node_modules` to the root.
- If a page is not live, keep it outside this repo or ask before adding it.
- Every page should have a unique `<title>` and `<meta name="description">`.

## Add A New Live Page

1. Create a new folder at the root, for example `new-campaign/`.
2. Add `new-campaign/index.html`.
3. Put page images, CSS, and JS in `new-campaign/assets/`.
4. Add the route to `vercel.json`.
5. Add the page to the root `index.html` hub.
6. Commit and push to `main`.

Vercel redeploys the site automatically after changes are pushed.
