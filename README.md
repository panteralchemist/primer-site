# David Primer — personal site

Astro + Tailwind. Single-page portfolio with sections: Hero, About, Experience, Publications, Contact.

## Local development

```bash
npm install      # already done; reruns are idempotent
npm run dev      # serves at http://localhost:4321
npm run build    # production build → dist/
npm run preview  # serve dist/ locally to spot-check
```

## Editing content

All text comes from `src/data/cv.ts`. Edit that file, save, dev server hot-reloads.

To swap the CV PDF, replace `public/cv.pdf` (the Download CV button serves that path).

## Deploying

### Netlify (recommended — contact form works out of the box)

1. Push this repo to GitHub.
2. In Netlify: New Site → Import from Git → pick the repo. Build command `npm run build`, publish directory `dist`.
3. Site → Forms → confirm the `contact` form is being detected. Set up a notification email under Forms → Settings.

### Vercel

Vercel doesn't have built-in form handling. Replace the form submission in `src/components/Contact.astro` with a POST to a serverless function (`api/contact.ts`), or use a third-party like Formspree / Web3Forms.

For static deploy: `npm run build` then drag `dist/` into the Vercel dashboard, or connect via Git with build command `npm run build` and output `dist`.

## Updating the domain

Set `site:` in `astro.config.mjs` to the production URL. Drives canonical/OG metadata.
