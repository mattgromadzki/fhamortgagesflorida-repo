# FHA Mortgages Florida — Astro + Sveltia CMS

Your full website (145 pages) rebuilt on **Astro** with a free, built-in **content manager (CMS)** at `/admin`.
Same design, same URLs, same SEO — but now you can edit everything from a friendly admin panel, and it stays
free to host on **Cloudflare Pages**.

---

## What you can edit (in the CMS)

- **Site Settings** — phone number, NMLS #, contact email, and your **Web3Forms key** (the one thing that makes
  the lead forms actually deliver to you). Change these once and they update across **all 145 pages** automatically.
- **Blog Posts** — write new articles in a simple editor (markdown). Add FAQs and related links.
- **City Pages / County Pages / Guide Pages / About pages** — edit titles, descriptions, and page content.

---

## How publishing works (the simple version)

You edit in the admin panel → it saves to your GitHub repository → Cloudflare automatically rebuilds and your
live site updates in about a minute. You never touch code.

---

## One-time setup to go live

You'll do this once. Take it step by step.

### 1. Put the project on GitHub
1. Create a free account at **github.com**.
2. Install **GitHub Desktop** (desktop.github.com) — easiest for non-developers.
3. Create a new repository named `fhamortgagesflorida`.
4. Copy all the files from this folder into the repository folder, then **Commit** and **Push**.
   (You do *not* need to include `node_modules` or `dist` — they rebuild automatically.)

### 2. Connect Cloudflare Pages (free hosting)
1. Go to **dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git**.
2. Pick your `fhamortgagesflorida` repo.
3. Settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. In ~2 minutes your site is live at `your-project.pages.dev`.

### 3. Turn on the CMS login (one-time)
The admin panel logs in through your GitHub account. This needs a tiny free "auth helper" on Cloudflare:
1. Deploy the **sveltia-cms-auth** Worker — full instructions:
   **https://github.com/sveltia/sveltia-cms-auth** (it has a one-click deploy and tells you exactly what to enter).
2. During that, you'll create a **GitHub OAuth App** (GitHub → Settings → Developer settings → OAuth Apps).
   The Worker's README tells you the exact callback URL to use.
3. Open `public/admin/config.yml` in this project and change two lines:
   - `repo:` → `your-github-username/fhamortgagesflorida`
   - `base_url:` → your Worker URL (e.g. `https://fha-cms-auth.your-name.workers.dev`)
   Commit/push the change.

### 4. Start editing
Go to **your-project.pages.dev/admin**, log in with GitHub, and edit away. Every save publishes automatically.

---

## ⚠️ Before you connect your real domain / go public

These are the same items flagged throughout the build — handle them in the CMS first:

1. **Web3Forms key** (Site Settings) — *until this is set, the forms show "success" but NO leads reach you.*
   Get a free key at **web3forms.com**.
2. **Phone number + NMLS #** (Site Settings) — required on mortgage advertising.
3. **Loan officer name, NMLS, photo, bio** — edit the **About**, **Meet the Team**, and **Author** pages.
4. **High-cost county limits** — pages currently say "Above floor — verify with HUD." Replace with exact 2026
   figures from **entp.hud.gov** when you have them.
5. **Compliance review** of your disclosures.

Only add your custom domain (in Cloudflare Pages → Custom domains) **after** the above are done — that keeps
incomplete pages from getting indexed.

---

## Good to know (v1 notes)

- **Adding a brand-new city or county:** create the new page in the CMS, then also add a link to it on the
  matching hub page (`Cities` / `Counties` hub) so visitors can find it. (The blog hub updates automatically;
  the city/county hubs are curated lists.)
- **Page content fields** show as an editor that accepts HTML for the location/guide pages (they're rarely
  edited). Blog posts use clean, simple formatting.
- The `Advanced` fields (JSON-LD schema, page script) on a page are for SEO/structured data — leave them alone
  unless you know what they do.

## Optional: preview on your own computer
Install Node.js 18+ (nodejs.org), then in this folder run:
```
npm install
npm run dev
```
Open the local address it prints. (Not required for going live.)
