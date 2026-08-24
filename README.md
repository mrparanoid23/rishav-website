# Rishav G C — Personal Website

Personal portfolio site for Rishav G C (Digital Marketing & SEO Specialist · Data Analyst · Founder & CEO), built with Astro + Tailwind CSS, deployed on Netlify.

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Editing content

All personal content lives in plain data files — edit these, not the components or pages:

- `src/data/site.ts` — name, tagline, social links, resume/avatar paths
- `src/data/bio.ts` — About page summary, long-form bio paragraphs, homepage stats
- `src/data/experience.ts` — work history timeline
- `src/data/skills.ts` — skill categories and proficiency levels
- `src/data/education.ts` — education entries
- `src/data/certifications.ts` — certification cards (title/issuer/PDF path)
- `src/content/projects/*.md` — one Markdown file per project (frontmatter = card/case-study fields, body = extra write-up)

Assets (avatar, banner, resume, certificate PDFs) live in `public/images/`, `public/resume.pdf`, and `public/certs/`.

## Before going live

1. **Domain**: buy a `.com` (Cloudflare Registrar or Namecheap recommended), point its nameservers to Netlify.
2. Update the placeholder domain `https://rishavgc.com` in `astro.config.mjs` (`SITE_URL`) and `public/robots.txt` to the real domain.
3. **Netlify**: push this repo to GitHub, then in Netlify choose "Import an existing project" → connect the repo. Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).
4. Attach the custom domain in Netlify → Domain management, and enable "Force HTTPS" once the certificate issues.
5. **SEO**: after the domain is live, submit `sitemap-index.xml` to Google Search Console and request indexing for `/` and `/about`. Add the site URL to your LinkedIn "Contact info" and GitHub profile website field so Google associates all three as the same entity.
6. The `/contact` form uses Netlify Forms — submissions will appear under Netlify → Forms automatically once deployed (no setup needed beyond the deploy itself).

## Stack

Astro (static output) · Tailwind CSS v4 · `@astrojs/sitemap` · Netlify Forms — no backend/serverless functions required.
