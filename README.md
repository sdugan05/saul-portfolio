# Saul Dugan Portfolio

A plain static personal portfolio site for Saul Dugan, built with HTML, CSS, and vanilla JavaScript.

## Stack

- HTML
- CSS
- Vanilla JavaScript
- Static files only, no backend
- No build step
- Deployable to Cloudflare Pages

## Project Structure

```text
/
├── index.html
├── resume/
│   └── index.html
├── 404.html
├── styles.css
├── script.js
├── projects/
│   ├── index.html
│   ├── aem-strategy-research-os/
│   ├── futures-backtesting-framework/
│   ├── pine-to-ninjatrader/
│   ├── remote-trading-monitor/
│   ├── c-tensor-library/
│   └── macro-event-risk-filter/
└── public/
    ├── favicon.ico
    ├── favicon.svg
    └── resume.pdf             # TODO: add final resume PDF
```

## Local Development

Because this is plain static HTML, you can open `index.html` directly in a browser.

For cleaner local routing, run any simple static file server from the repo root:

```sh
python3 -m http.server 4321
```

Then open:

```text
http://127.0.0.1:4321/
```

## Cloudflare Pages

Use these settings for this branch:

- Framework preset: `None`
- Build command: leave blank
- Build output directory: `/` or leave blank if Cloudflare allows it for direct static upload
- Root directory: repo root

This branch intentionally does not include Astro, Tailwind, package dependencies, or a build step.

## Editing Notes

- Edit page content directly in the `.html` files.
- Edit visual styles in `styles.css`.
- Edit the mobile menu behavior in `script.js`.
- Add screenshots or diagrams under `public/` and reference them from the project pages.
- Replace all `TODO` contact/profile placeholders before publishing.
- Put the final resume PDF at `public/resume.pdf`, then turn the visible resume TODO placeholders into links.
