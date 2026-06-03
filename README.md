# Saul Dugan Portfolio

A static personal portfolio site for Saul Dugan, built with Astro, TypeScript, and Tailwind CSS.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Static output only, no backend
- Deployable to Cloudflare Pages

## Project Structure

```text
/
├── public/
│   └── resume.pdf             # TODO: add final resume PDF
├── src/
│   ├── components/
│   ├── data/
│   │   ├── projects.ts        # Central project data
│   │   └── skills.ts          # Central skills data
│   ├── layouts/
│   └── pages/
│       ├── index.astro
│       ├── resume.astro
│       └── projects/
│           ├── index.astro
│           └── [slug].astro
├── astro.config.mjs
└── package.json
```

## Local Development

Install dependencies:

```sh
npm install
```

Start the local dev server:

```sh
npm run dev
```

Build the static site:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Cloudflare Pages

Use these settings when creating the Cloudflare Pages project:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Node version: `22.12.0` or newer

The site is static and does not require a backend or server runtime.

## Editing Notes

- Add or edit projects in `src/data/projects.ts`.
- Add or edit skill groups in `src/data/skills.ts`.
- Add screenshots or diagrams under `public/` and reference them from project pages when ready.
- Replace all `TODO` contact/profile placeholders before publishing.
- Put the final resume PDF at `public/resume.pdf`.
