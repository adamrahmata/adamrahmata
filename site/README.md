# adamrahmata.com

Production implementation of the Claude Design handoff in `../project`, built with
[Astro](https://astro.build). Nine static pages, no backend.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
npm run check    # astro check (TypeScript + template diagnostics)
```

`dist/` is plain static output — deploy it to Netlify, Vercel, Cloudflare Pages, GitHub
Pages, or any shared host. No environment variables or server runtime required.

## Pages

| Route | Source prototype |
| --- | --- |
| `/` | `Adam Rahmat Agung.dc.html` |
| `/jasa/` | `Jasa.dc.html` |
| `/training/` | `Training.dc.html` |
| `/konsultasi/` | `Konsultasi.dc.html` |
| `/audit/` | `Audit.dc.html` |
| `/rekam-jejak/` | `Rekam Jejak.dc.html` |
| `/klien/` | `Klien.dc.html` |
| `/artikel/` | `Artikel.dc.html` |
| `/kontak/` | `Kontak.dc.html` |

## Layout of the source

```
src/
  data/          Content and datasets (see below)
  styles/        Design tokens + global stylesheet
  scripts/       Client behaviour, one module per concern
  components/    Shared UI; home/ holds the homepage sections
  layouts/       Layout.astro — head, header, footer, script bootstrap
  pages/         One file per route
public/img/      Photos and the 101 client/partner logos
```

### Where the content lives

Everything editable is data, not markup:

- `data/site.ts` — WhatsApp number, email, social links, nav, headline figures.
  **Change the WhatsApp number here and it updates on every page.**
- `data/timeline.ts` — the corporate career timeline.
- `data/career.json` — 43 training titles, 33 consulting projects, 9 audit assignments
  (grouped), powering the homepage role panels.
- `data/assignments.json` — the 286 individual manday assignments behind Rekam Jejak.
- `data/clients.json` / `data/partners.json` — logo wall entries.
- `data/dictionary.json` — the Indonesian → English dictionary (317 entries).

## Design system

Tokens are copied verbatim from the Alam Energy design system in the handoff bundle
(`src/styles/tokens/`). Colours, spacing, radii, type scale and motion curves all come
from those files — components reference `var(--…)` rather than literal values.

Brand fonts (Gotham Black / Galvji) are not redistributable, so the token file falls back
to Montserrat 900 and Mulish from Google Fonts, exactly as the design system specifies.
To use the real fonts, drop the `.woff2` files into `public/fonts/`, replace the
`@font-face` block in `src/styles/tokens/fonts.css`, and remove the Google Fonts `<link>`
in `src/layouts/Layout.astro`.

## Bilingual (ID | EN)

Indonesian is what's authored in the templates and what ships in the HTML. English is
applied client-side by `src/scripts/i18n.ts`:

- Put `data-t` on any element whose **text is translatable**. The Indonesian text already
  in the element is the dictionary key, so there's nothing to keep in sync.
  Only use it on elements whose content is plain text — an element containing nested
  markup would be flattened.
- `data-t-placeholder` and `data-t-aria` do the same for those attributes.
- Add the translation to `src/data/dictionary.json`. A missing key falls back to the
  Indonesian text, so untranslated strings degrade quietly.

The prototype's `i18n.js` scanned every text node and kept a MutationObserver running,
which is what froze the preview during design. This version walks a fixed, explicit set of
elements once per switch and writes each at most once — no observer, no polling.

The choice persists in `localStorage` under `ara_lang`.

## Animation

Animated elements start hidden in CSS and `src/scripts/reveal.ts` adds `.is-in` when they
scroll into view. The CSS owns every visual state, so:

- Without JS, a `<noscript>` block shows everything in its final pose.
- With `prefers-reduced-motion: reduce`, animations are disabled and counters snap to
  their final values.

Reveal hooks, all driven by that one class:

| Attribute | Effect |
| --- | --- |
| `data-reveal` | Fade + rise. Variants: `left`, `right`, `scale`, `grow-x` |
| `data-stagger` | Child released after its parent, offset by `--stagger-delay` |
| `data-anim="…"` | Keyframe entrance: `deal`, `stamp`, `rise`, `swing`, `flip`, `slide-left`, `slide-right`, `zoom-blur`, `pop` |
| `data-wipe` | Text wipes in from the right |
| `data-count-to` | Count-up, Indonesian number formatting |

Each service page keeps its own signature entrance, as decided during the design chats:
Jasa flips up, Training slides in alternately, Konsultasi zooms out of a blur, Audit
swings in like a door.

## Photos

The prototype used `<image-slot>`, a design-tool control for dragging photos in. In its
place, `components/PhotoBand.astro` renders a branded gradient band with a topic glyph.
Give it a `src` pointing at a file under `public/img/` and the photo replaces the
placeholder at exactly the same height, so filling these in later shifts nothing.

Currently filled: the three career timeline photos and two article cards. The
training/consulting/audit cards on the homepage are placeholders awaiting real photos.

## Notes on fidelity

Two things worth a decision from you — both left as the prototype had them:

1. **Two role cards show the same initial.** The badges take the first letter of the card
   title, so after "Praktisi" was renamed "Karir Korporasi" both it and "Konsultan" show
   **K**. The original spec had P / T / K / A. Fix by setting an explicit initial in the
   `roles` array in `components/home/Roles.astro`.
2. **ISO 19011:2026** is used throughout the audit page because that is what was asked
   for. The published edition is ISO 19011:2018 — the Jasa page's standards card already
   says 2018, so the two pages disagree.

One deliberate deviation: the homepage "Lembaga mitra" statistic uses the revised wording
("Lembaga training dan konsultan seperti PJK3, TUK, Lembaga independen lainnya…") that was
requested in the final chat. The exported HTML still carried the older sentence, but the
translation dictionary had already been updated to the new one.
