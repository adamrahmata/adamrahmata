# Alam Energy — Design System

**PT. ATW Alam Hijau, trading as Alam Energy by Shizen Energy Group.**
An Indonesian renewable-energy developer that finances, builds, operates and maintains
rooftop solar PV for Commercial & Industrial (C&I) customers — with no upfront investment
from the customer. Alam Energy is a five-way collaboration between **Shizen Energy,
Alamport, NiX, EBH and Kanematsu**, and delivers several of Indonesia's successful
Japanese **JCM (Joint Crediting Mechanism) Model Projects**.

Positioning line: *"Kami bertindak demi planet biru"* — we act for the blue planet.

## Sources used

| Source | Notes |
| --- | --- |
| https://alamenergy.co.id/id/ | Homepage — hero rotator, vision statements, partner line |
| https://alamenergy.co.id/id/tentang-kami/ | About |
| https://alamenergy.co.id/id/layanan-kami/ | Services + JCM explainer + JCM project table |
| https://alamenergy.co.id/id/proyek-kami/ | Project index (Indonesia + international) |
| https://alamenergy.co.id/id/kontak/ | Contact form fields |
| https://www.shizeninternational.com | Parent group |

No codebase, Figma file, brand-guideline PDF or slide deck was provided. The live site
runs on **WordPress + Elementor 3.15.2**, whose compiled CSS was not reachable from this
environment, so **exact brand hex values could not be read** — the palette below is
derived from the brand's stated identity (blue planet / nature) and the site's visual
character. **Please supply the official brand guideline so the ramps can be corrected.**

## Products / surfaces

1. **Marketing website** (`ui_kits/website/`) — trilingual (ID / EN / JA) corporate site.
   This is the only public product surface Alam Energy operates; there is no app,
   dashboard or docs site to recreate.

---

## CONTENT FUNDAMENTALS

**Language.** Indonesian first, with English and Japanese mirrors. Every page is written
in Indonesian; the *contact form field labels stay in English* even on the Indonesian page
("First Name", "Company Name", "Your Message", "Submit Form") — keep that quirk.

**Voice: collective first person, never "I".** Copy opens with **"Kami…"** (we) with
striking consistency: *"Kami bertindak demi planet biru."* · *"Kami menyediakan energi
bersih yang andal bagi pelanggan kami di Indonesia."* · *"Kami sangat meyakini potensi
Indonesia…"* The reader is addressed formally as **"Anda"** or, more often, as
**"pelanggan kami"** (our customers) — the tone is B2B, respectful and slightly formal,
never chummy.

**Sentence shape.** Long, flowing, comma-jointed sentences with a soft idealistic close:
*"…dalam menjaga kelestarian dan mewariskan planet biru ini kepada generasi mendatang."*
Headlines are frequently set as two balanced lines rather than one. Claims are paired
with a concrete second half — *"mengatasi tantangan satu demi satu"* (solving challenges
one by one).

**Casing.** Sentence case everywhere. Title Case appears only in nav labels and formal
programme names ("Proyek Model JCM", "Mekanisme Kredit Bersama"). The **only uppercase**
is the small green overline above section headings. No ALL-CAPS headlines.

**Numbers.** Indonesian formatting — **"." is the thousands separator, "," the decimal**:
`1.218 kWp`, `11,5 MWp`. Capacity is always stated in **kWp** and attached to a named
customer site. Numbers are used to prove track record, never as decoration.

**CTAs.** Verb-first and literal, often echoing the destination in parentheses:
*"Lihat (Tentang Kami)"*, *"Lihat rekam jejak kami"*, *"Hubungi Kami"*, *"Submit Form"*.

**Quotations.** Vision and customer-promise lines are set inside curly quotes and treated
as display type: *"Masa depan yang lebih cerah bagi generasi mendatang dengan energi
terbarukan."* (Visi Kami) and *"Bergerak bersama demi langit biru dan alam kita."*

**Emoji: never.** Not in nav, not in body, not in CTAs. The register is corporate-
environmental, and emoji would undercut it. Unicode is used only for typographic
punctuation (curly quotes, ampersand in "Berita & Media", "C&I").

**Vibe.** Earnest, civic, quietly optimistic. Nature and future generations are the
emotional anchor; economics ("tanpa investasi", "menghemat biaya listrik") is the
rational one. The two are always presented together.

---

## VISUAL FOUNDATIONS

**Colour.** Two axes. **Blue** (`--blue-500 #0067B1`, deepening to `--blue-900 #04223F`)
is the primary — it stands for sky, water and the "planet biru" idea, and it carries all
interactive meaning. **Green** (`--green-600 #4C9A3C`) is the nature/renewables axis and
appears in small doses: section overlines, active underlines, "on" states, success. A
**sun accent** (`--sun-500 #F5A623`) exists for solar call-outs and is used sparingly —
never as a background for body text. Neutrals are cool-leaning greys mixed toward blue;
**pure black is never used** (darkest text is `#04223F`). Maximum two background colours
per layout: white/near-white and the deep-blue band.

**Typography.** `Gotham Black` for every headline, figure and wordmark — heavy geometric
sans, `-0.02em` tracking, `1.08–1.25` leading, sentence case. `Galvji` for everything
else at 17px / 1.55, rising to 20px / 1.75 for leads. The single overline style is 12px
Galvji Bold, uppercase, `0.14em` tracking, green. No third typeface, no italics except
photo credits.

**Spacing & layout.** 4px base scale, 8px rhythm above `--space-2`. Sections are padded
**96px** vertically (`--section-y`), content is capped at **1200px** with a 24px gutter,
prose at 760px. Grids are honest 3- and 4-column; the header is **sticky**, the footer is
not. Nothing else is fixed-positioned.

**Backgrounds.** Full-bleed **photography** for heroes; flat white or `--surface-subtle`
(#F7FAFC) for content; one deep-blue band (`--surface-inverse`) per page for vision or
statistics. **No gradients as decoration** — the only gradients in the system are the two
photo protection scrims. No patterns, no textures, no hand-drawn illustration.

**Imagery.** Real Indonesian landscape (Lake Toba) and real installed rooftop arrays.
Cool daylight, natural saturation, wide horizons, no grain, no duotone, no filters.
Project photos are cropped **4:3**; heroes are full-bleed. People rarely appear.

**Protection.** Text over photography always sits on a scrim, never a capsule:
`--scrim-hero` (a top-and-bottom deep-blue veil for centred hero copy) or
`--scrim-bottom` (bottom-weighted for captions). Buttons on photography use the
`inverse` variant (solid white) rather than a translucent capsule.

**Cards.** White, **1px `--border-subtle` hairline**, **8px radius**, and a blue-tinted
shadow (`rgba(4,34,63,…)` — never neutral black). Media inside a card is flush to the
card edge, clipped by `overflow:hidden`. **No coloured left-border accent cards.**

**Radii.** Restrained: 0 for full-bleed bands, **4px** for controls and inputs, **8px**
for cards and media, 12px for modals, pill only for badges/tags/chips, circle for
icon buttons.

**Elevation.** Five steps, all blue-tinted: `xs` hairline lift for static cards, `sm`
default, `md` on hover and for overlays, `lg` for modals, `hero` for large floating
imagery. Inner shadows are not used.

**Motion.** Calm and short. `--dur-fast 160ms` for control state changes,
`--dur-base 240ms` for card hovers, `--dur-slow 420ms` for image scale, `--dur-hero 900ms`
for hero cross-fades. Easing is `cubic-bezier(.4,0,.2,1)` standard and a soft
`cubic-bezier(.16,1,.3,1)` for entrances. **No bounce, no spring, no parallax.**

**Hover states.** Filled buttons darken one ramp step (blue-500 → blue-600); outline and
ghost buttons fill with `--surface-brand-soft`; cards lift **3px** and deepen to
`--shadow-md`; project images scale to **1.05** inside their clip; links pick up an
underline at 3px offset. **Press states** translate **1px down** — no colour flash, no
scale-down.

**Focus.** 2px `--focus-ring` outline at 2px offset on every interactive element; inputs
additionally take `--ring-focus` (a 3px translucent blue halo) and a blue border.

**Transparency & blur.** Used in exactly two places: the modal scrim
(`rgba(4,34,63,.55)` + `blur(3px)`) and inverse controls on photography
(`rgba(255,255,255,.16–.18)`). Nowhere else — no frosted nav, no glass cards.

---

## ICONOGRAPHY

The live site is icon-light: navigation, headings and CTAs are pure type, and the only
graphics in the chrome are the logo, the Shizen Energy Group lockup, and small
**country-flag SVGs** used as the language switcher. No icon font, sprite sheet or SVG
icon set was recoverable from the published pages (Elementor's asset bundle was not
reachable), and **emoji are never used**.

**Substitution (flagged):** the system standardises on **Lucide** (2px stroke, round caps,
24px grid) loaded from the `lucide-static` CDN and rendered through the `Icon` component
as a CSS mask, so glyphs inherit `currentColor`. Icons are decorative supports only —
never the sole carrier of meaning, always paired with a label. The flag icons are
deliberately **not** reproduced: `LanguageSwitcher` uses the text codes ID / EN / JA,
which is more accessible and avoids conflating language with nationality.

If Alam Energy has an official icon library, supply it and it will replace Lucide.

---

## Intentional additions

Nothing in the sources defines a component inventory, so the standard primitive set was
authored. Two additions are brand-specific rather than generic:

- **`LanguageSwitcher`** — every Alam Energy surface is trilingual; this is a required
  chrome element, not a nice-to-have.
- **`Icon`** — a wrapper over the substituted Lucide set, so the substitution can be
  swapped in one place later.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link (imports only)
- `readme.md` — this guide
- `SKILL.md` — Agent Skills wrapper
- `thumbnail.html` — homepage tile

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`,
`elevation.css`, `motion.css`, `base.css`

**`guidelines/`** — 20 specimen cards feeding the Design System tab (Colors, Type,
Spacing, Brand)

**`assets/`** — `data.js` (project list + image URLs), `logo-alam-energy.png` (official
Alam Energy mark, supplied by the user), `logo-visi-mandiri-aulia.png` (training
organiser). The Shizen Energy Group lockup and a vector version of the Alam Energy mark
are still outstanding; nothing was drawn or reconstructed.

**Components**

| Group | Components |
| --- | --- |
| `components/core/` | **Button**, **IconButton**, **Icon**, **Badge**, **Tag**, **Card** |
| `components/forms/` | **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch** |
| `components/content/` | **SectionHeading**, **HeroBanner**, **FeatureRow**, **ProjectCard**, **StatTile**, **Quote** |
| `components/navigation/` | **NavBar**, **Tabs**, **Breadcrumb**, **LanguageSwitcher** |
| `components/feedback/` | **Dialog**, **Alert**, **Tooltip** |

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard`
showcase HTML.

**UI kits**
- `ui_kits/website/` — click-through recreation of alamenergy.co.id (Beranda, Tentang
  Kami, Layanan, Proyek, Kontak). See its `README.md` for the file map and known gaps.

## Known gaps

1. **Fonts substituted.** Gotham Black → Montserrat 900; Galvji → Mulish. Supply
   `.woff2` binaries and replace the `@font-face` block in `tokens/fonts.css`.
2. **Colours are inferred**, not read from brand assets. Confirm against the guideline.
3. **Logo supplied.** `assets/logo-alam-energy.png` is the official Alam Energy mark (blue on transparent), provided by the user. A vector version and the Shizen Energy Group lockup are still outstanding.
4. **Imagery is hotlinked** from alamenergy.co.id; download originals before production.
5. **Icons substituted** with Lucide.
6. **"Berita & Media"** was not recreated — no article content was retrievable.
