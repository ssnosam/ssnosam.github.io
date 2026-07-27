# Shelby Mason — Portfolio

Personal portfolio site built with [Astro](https://astro.build), deployed to GitHub Pages at `shelby-mason.com`.

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build the production site to `./dist/`        |
| `npm run preview`   | Preview the production build locally          |

## Before going live

1. **Resume PDF** — `public/resume.pdf` is currently a placeholder. Replace it with an up-to-date resume that reflects the Optro role.
2. **Contact form** — create a free form at [formspree.io](https://formspree.io), verify `hello@shelby-mason.com` as the receiving address, then set `formspreeFormId` in `src/data/site.config.ts` to the resulting form ID.
3. **Career timeline dates** — double check the exact Measurabl end date / Optro start date in `src/content/experience/04-measurabl.md` and `05-auditboard-optro.md`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. One-time setup in the GitHub repo:

1. Settings → Pages → Build and deployment → Source → **GitHub Actions**.
2. Settings → Pages → Custom domain → `shelby-mason.com` (the `public/CNAME` file already contains this).
3. At your domain registrar, point DNS at GitHub Pages:
   - Apex (`@`) A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` CNAME → `ssnosam.github.io.`
4. Once DNS propagates, enable "Enforce HTTPS" in the Pages settings.
