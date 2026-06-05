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
│   ├── c-tensor-library/
│   ├── cloud-trading-webhook-server/
│   ├── macro-event-risk-filter/
│   ├── opsin-photoreception-lab/
│   └── pine-to-ninjatrader/
├── images/
│   └── project screenshots
└── public/
    ├── favicon.ico
    └── favicon.svg
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
- Store project screenshots in `images/` and reference them from the project pages.
- Bump the `styles.css` query-string version in the HTML files after major style changes so browsers fetch fresh CSS.
