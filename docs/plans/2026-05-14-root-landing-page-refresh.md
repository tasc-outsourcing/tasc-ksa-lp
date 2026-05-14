# Root Landing Page Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refresh the root TASC landing-page hub and remove old sample landing pages from the repo.

**Architecture:** This is a static Vercel project. The root `index.html` is a directory page, and each landing-page folder maps directly to a URL under `lp.tascoutsourcing.sa/<folder>/`.

**Tech Stack:** Static HTML, inline CSS, Vercel static hosting, GitHub-triggered production deployment.

---

### Task 1: Update Root Directory Page

**Files:**
- Modify: `index.html`

**Step 1: Replace the current sample directory UI**

Create a polished TASC-branded static page with:

- A header identifying this as the TASC landing-page hub.
- A short explanation that these are active campaign and service landing pages.
- Cards linking to:
  - `/saudi-business-visa/`
  - `/Saudi%20Business%20Visa/`
  - `/saudi-business-setup/`
  - `/book-keeping-ksa/`
  - `/test-landing-page/`
- A small note that the page is maintained by TASC Marketing.

**Step 2: Verify manually**

Run: open or inspect `index.html` locally.

Expected: only approved real landing pages are visible.

### Task 2: Update Documentation

**Files:**
- Modify: `README.md`

**Step 1: Replace old sample list**

Document the active page URLs and note that old sample pages have been removed.

**Step 2: Verify**

Run: `sed -n '1,220p' README.md`

Expected: README lists the active pages only.

### Task 3: Remove Sample Folders

**Files:**
- Delete folders:
  - `manufacturing`
  - `logistics`
  - `healthcare`
  - `technology`
  - `construction`
  - `Saudi Business Setup (1)`
  - `AmaanText AI Landing Page (2)`

**Step 1: Remove folders**

Use a safe delete command for only the approved paths.

**Step 2: Verify**

Run: `find . -maxdepth 2 -type f -name index.html`

Expected: active pages remain; removed folders no longer appear.

### Task 4: Final Verification

**Files:**
- Inspect: `index.html`
- Inspect: `README.md`
- Inspect: `git status --short`

**Step 1: Check repo status**

Run: `git status --short`

Expected: root page and README modified, sample folders deleted, plan docs added.

**Step 2: Check links**

Run: `rg -n "href=" index.html`

Expected: links point only to approved active landing pages.
