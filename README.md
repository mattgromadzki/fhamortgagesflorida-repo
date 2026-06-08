# FHA Mortgages Florida

Static marketing & lead-generation website for **fhamortgagesflorida.com**.
Pure HTML5 + CSS3 + vanilla JS. No build step, no dependencies.

## Repo structure
- `public/` — the deployable website (everything Cloudflare Pages serves)
- `docs/` — internal docs (SEO blueprint). NOT published to the live site.

## Deploy: Cloudflare Pages (Git)
1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Select this repo, then set:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `public`
4. **Save and Deploy.** You'll get a free `*.pages.dev` URL.
5. Add the custom domain under **Custom domains** once you're ready to go live.

Every push to the main branch auto-redeploys.

## ⚠️ Before connecting the custom domain / submitting to Google
Replace these placeholders (search across `public/`):
- `YOUR-WEB3FORMS-ACCESS-KEY` — your Web3Forms key (until set, forms show success but deliver nothing)
- `(888) 555-0142` / `+18885550142` — real phone number
- `#XXXXXXX` — real NMLS number
- `[Loan Officer Name]` and related bio/photo placeholders — about-us, meet-the-team, author, licensing-disclosures
- High-cost county limits currently read "verify with HUD" — add exact HUD figures when available

## Editing content
Edit the file in `public/`, commit, and push — Cloudflare redeploys automatically.
