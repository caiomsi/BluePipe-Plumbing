# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## What this is

BluePipe Plumbing — an **agency demo** (fictional plumbing company), bold-industrial
design direction. Static HTML/CSS/JS, no build step. See the root `../CLAUDE.md` for
shared conventions (preview/deploy commands, SEO expectations, image guidelines).

## Structure

`index.html` at root, `css/style.css`, `js/main.js`, photos in `images/` (see
`images/README.md`). Deployed via GitHub Pages at `bluepipe.caiomsi.com`
(Cloudflare DNS, see `CNAME`).

## Design language

Bold industrial-blue palette: `--accent #2b7fe0` with a bright/deep gradient
(`--accent-grad`), plus a gold accent (`--gold #e0a83e`) used for star ratings.
Design tokens are at the top of `css/style.css`.

## Contact form — placeholder only

The contact form still posts to a **Formspree placeholder** (`formspree.io/f/XXXX` /
`.../your`) — not a real, working endpoint. Before launch, either fill in a real
Formspree form ID or rewire it to the shared `MSI-Forms` backend like the other
wired sites (see root `CLAUDE.md`); add this site's origin to `ALLOWED_ORIGINS` in
`MSI-Forms/api/submit.js` if you choose the latter.
