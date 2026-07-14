# TASC KSA Landing Pages Rulebook

This is a static Vercel site for TASC KSA landing pages. Treat it as a multi-page live site, not as a single landing-page export.

Each live landing page has one folder at the project root:

```text
page-folder/
  index.html
  assets/
```

The public URL must match the folder name:

```text
https://lp.tascoutsourcing.sa/page-folder/
```

For example, a folder named `saudi-tax-guide/` should go live at:

```text
https://lp.tascoutsourcing.sa/saudi-tax-guide/
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

- `index.html` is the landing-page hub and homepage.
- `vercel.json` tells Vercel how to serve each folder URL.
- `.vercelignore` keeps drafts, exports, and junk out of deployments.
- `.gitignore` keeps local machine files out of Git.
- `START_HERE_LIVE_PAGES.md` is the quick editing guide.

## First Step For Any Work

Before editing or creating a landing page, inspect the existing project structure and understand what is already live:

1. Read `README.md`.
2. Read `START_HERE_LIVE_PAGES.md`.
3. Check the current live page folders.
4. Check root `index.html`.
5. Check `vercel.json`.

Then ask the user whether they want to:

1. Edit an existing landing page.
2. Create a new landing page.

Do not start editing until the requested page or new page name is clear.

## Rules For Editing Existing Landing Pages

- Edit only the requested landing page folder.
- Do not touch other landing page folders unless the user explicitly asks.
- Do not delete, move, rename, or replace existing folders or assets unless the user explicitly asks.
- Keep that page's assets inside that page's own `assets/` folder.
- Keep the page's `<title>` and `<meta name="description">` unique and relevant.
- If the edit requires root hub or routing changes, explain that before touching `index.html` or `vercel.json`.

## Rules For Creating New Landing Pages

- Use a lowercase, URL-safe, hyphenated folder name, such as `saudi-tax-guide/`.
- Create the new page as a root folder only when it is intended to become a live page.
- The new page must have its own `index.html`.
- The new page must keep images, CSS, JavaScript, PDFs, and other page files inside its own `assets/` folder.
- The new page must have a unique `<title>`.
- The new page must have a unique `<meta name="description">`.
- The final live URL should be `https://lp.tascoutsourcing.sa/page-folder/`.

Before building a new page, check whether source files or assets already exist inside the requested new page folder.

- If source files/assets exist, build from those files.
- If source files/assets do not exist, ask the user to upload them into the new page folder.
- If the user does not have source files and only has a Figma file, ask the user for full-page screenshots from Figma before building. The screenshots should show the full landing page so the layout, content, visual direction, and intended design can be understood before development starts.

## Root Protection Rules

The root is the top-level folder and files that Vercel serves from. Protect it carefully.

- Do not overwrite root `index.html` with a single landing page.
- Do not replace the root with one landing page folder.
- Do not deploy only one landing page folder in a way that removes the others.
- Do not remove existing routes from `vercel.json` unless the user explicitly asks.
- Do not remove existing live page links from the root hub unless the user explicitly asks.
- Keep all live landing pages available from the root hub.
- When a new page becomes live, update the root `index.html` hub to include it.

If deployment only includes one landing page folder, the other existing landing pages can disappear from the live site and return 404 errors. Avoid this.

## Routing Rules

- `vercel.json` must preserve all existing live page routes.
- Add new routes for new live pages.
- Keep both slash and no-slash routes when following the current project pattern.
- The route destination should point to that page's `index.html`.

Example:

```json
{
  "source": "/new-campaign",
  "destination": "/new-campaign/index.html"
}
```

## GTM And Form Rules

Before a landing page is considered ready for final live deployment, check whether the user has provided:

- GTM code or GTM container ID, usually like `GTM-XXXXXXX`.
- Form embed code, form endpoint, or form integration details.

If either GTM or form code is missing, ask the user for it.

The page may be built or staged with placeholders if needed, but do not mark it ready for final live deployment until GTM and form code have either been added or the user has explicitly approved going live without them.

## Do Not Add These To The Root

- Draft folders
- Source-export folders
- Legacy folders
- Zip files
- `node_modules`
- Build folders like `dist`
- Random image, CSS, JavaScript, or PDF files that belong inside a page's `assets/` folder

If a page is not live, keep it outside this repo or ask before adding it.

## Pre-Live Checklist

Before telling the user a page is ready to push live, confirm:

- The correct page folder was edited or created.
- No unrelated landing page folders were changed.
- Root `index.html` was not overwritten.
- Existing root hub links were preserved.
- `vercel.json` still preserves existing live routes.
- New pages have been added to root `index.html` and `vercel.json`.
- All page assets are inside that page's own `assets/` folder.
- The page has a unique `<title>`.
- The page has a unique `<meta name="description">`.
- GTM has been added, or the user approved proceeding without it.
- Form code/integration has been added, or the user approved proceeding without it.
- The page has been opened and checked locally or as a static page.
- Important links, assets, forms, and calls to action have been checked.

## Go-Live Process

1. Build or edit the landing page.
2. Complete the pre-live checklist.
3. Tell the user the page is ready to be pushed to Git.
4. Push the complete repository state to Git, not just one landing page folder.
5. Let Vercel deploy from Git.
6. Confirm the final URL follows this pattern:

```text
https://lp.tascoutsourcing.sa/page-folder/
```

Vercel redeploys the site automatically after changes are pushed to the connected branch.
