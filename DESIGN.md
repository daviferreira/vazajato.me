---
name: vazajato.me
description: Linha do tempo da Vaza Jato, every month dealt as a row of cards on a neutral charcoal table.
colors:
  gold: 'oklch(0.82 0.15 84)'
  gold-ink: 'oklch(0.24 0.04 84)'
  charcoal-ground: 'oklch(0.22 0 0)'
  card-face: 'oklch(0.25 0 0)'
  raised-control: 'oklch(0.28 0 0)'
  hairline: 'oklch(0.93 0 0 / 0.16)'
  hairline-strong: 'oklch(0.93 0 0 / 0.42)'
  ink: 'oklch(0.94 0 0)'
  body-ink: 'oklch(0.86 0 0)'
  muted-ink: 'oklch(0.74 0 0)'
  scrollbar-thumb: 'oklch(0.42 0 0)'
  paper-gold: 'oklch(0.6 0.13 84)'
  paper-gold-ink: 'oklch(0.15 0.02 84)'
  paper-ground: 'oklch(0.965 0 0)'
  paper-card-face: 'oklch(1 0 0)'
  paper-raised-control: 'oklch(0.93 0 0)'
  paper-hairline: 'oklch(0.2 0 0 / 0.14)'
  paper-hairline-strong: 'oklch(0.2 0 0 / 0.4)'
  paper-ink: 'oklch(0.2 0 0)'
  paper-body-ink: 'oklch(0.3 0 0)'
  paper-muted-ink: 'oklch(0.47 0 0)'
  paper-scrollbar-thumb: 'oklch(0.75 0 0)'
  easter-egg-red: 'oklch(0.65 0.22 25)'
  photo-scrim: 'oklch(0 0 0 / 0.45)'
typography:
  display:
    fontFamily: "'Apfel Grotezk', system-ui, sans-serif"
    fontSize: 'clamp(2.25rem, 1.4rem + 3.6vw, 4.25rem)'
    fontWeight: 600
    lineHeight: 1
    letterSpacing: '-0.035em'
  page-title:
    fontFamily: "'Apfel Grotezk', system-ui, sans-serif"
    fontSize: 'clamp(2rem, 1.4rem + 2.6vw, 3.25rem)'
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: '-0.03em'
  headline:
    fontFamily: "'Apfel Grotezk', system-ui, sans-serif"
    fontSize: 'clamp(1.375rem, 1.1rem + 1vw, 1.75rem)'
    fontWeight: 600
    letterSpacing: '-0.02em'
  title:
    fontFamily: "'Ronzino', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: '1.0625rem'
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: '-0.005em'
  body:
    fontFamily: "'Ronzino', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.5
  prose:
    fontFamily: "'Ronzino', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: '1.125rem'
    fontWeight: 400
    lineHeight: 1.7
  caption:
    fontFamily: "'Ronzino', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: '0.875rem'
    fontWeight: 400
  control:
    fontFamily: "'Ronzino', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: '0.9375rem'
    fontWeight: 500
  wordmark:
    fontFamily: "'Necto Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: '1rem'
    fontWeight: 400
    letterSpacing: '0.04em'
  label:
    fontFamily: "'Necto Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: '0.6875rem'
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: '0.14em'
rounded:
  sm: '4px'
  md: '6px'
  lg: '8px'
  pill: '999px'
  circle: '50%'
spacing:
  xs: '6px'
  sm: '8px'
  md: '14px'
  lg: '20px'
  xl: '24px'
  xxl: '48px'
  gutter: 'clamp(16px, 4vw, 64px)'
components:
  card:
    backgroundColor: '{colors.card-face}'
    textColor: '{colors.body-ink}'
    rounded: '{rounded.lg}'
    padding: '16px 18px 18px'
    width: 'min(340px, 78vw)'
  card-title:
    textColor: '{colors.ink}'
    typography: '{typography.title}'
  tag:
    textColor: '{colors.muted-ink}'
    typography: '{typography.label}'
    rounded: '{rounded.sm}'
    padding: '4px 7px'
  tag-date:
    textColor: '{colors.ink}'
    typography: '{typography.label}'
    rounded: '{rounded.sm}'
    padding: '4px 7px'
  filter-control:
    backgroundColor: '{colors.raised-control}'
    textColor: '{colors.ink}'
    typography: '{typography.control}'
    rounded: '{rounded.md}'
    padding: '0 14px'
    height: '44px'
    width: '260px'
  menu:
    backgroundColor: '{colors.card-face}'
    rounded: '{rounded.lg}'
    padding: '6px'
    width: '300px'
  menu-item:
    textColor: '{colors.body-ink}'
    rounded: '{rounded.sm}'
    padding: '8px 10px'
  menu-item-hover:
    backgroundColor: '{colors.raised-control}'
    textColor: '{colors.ink}'
  round-icon-button:
    backgroundColor: '{colors.raised-control}'
    textColor: '{colors.ink}'
    rounded: '{rounded.circle}'
    size: '40px'
  theme-toggle:
    backgroundColor: '{colors.card-face}'
    rounded: '{rounded.pill}'
    width: '60px'
    height: '32px'
  theme-toggle-ball:
    backgroundColor: '{colors.gold}'
    rounded: '{rounded.circle}'
    size: '24px'
  button-gold:
    backgroundColor: '{colors.gold}'
    textColor: '{colors.gold-ink}'
    rounded: '{rounded.md}'
    padding: '12px 18px'
---

# Design System: vazajato.me

## Overview

**Creative North Star: "The Dealt Archive"**

The archive is a hand of cards dealt on a plain charcoal table. Every month is one horizontal row of cards laid left to right, and the months stack in order down the page, so chronology reads twice: across a row and down the page. Cards sit square and rise when the pointer or focus reaches them. The table is quiet so the reporting, its cover images and its outlets, carries the colour.

The material is neutral and documentary: an achromatic ground, card faces one lightness step above it, hairline borders, a grotesk for headings and a quiet sans for everything a person reads, and small tracked monospace capitals for data (dates, counts, topic tags). There is exactly one accent, a warm gold, and it is rationed to state: focus, the active filter, the current menu item, the hovered control, the theme toggle's ball, the wordmark's cursor, and the 404 page's single action. Density is moderate: generous gutters, cards sized for a cover and a three-line title, rows that bleed off the right edge to show they scroll.

Two themes ship and share every token name. Dark (charcoal) is the default and is used whenever the system prefers dark or gives no preference; light (paper) is used when the system prefers light or the reader picks it with the toggle, which remembers the choice.

**Key Characteristics:**

- Achromatic charcoal or paper ground; card faces one step off the ground; hairline borders instead of fills.
- One gold accent, spent only on state and on a few small marks.
- Apfel Grotezk for headings, Ronzino for reading; tracked mono capitals only for data attached to content.
- Month rows of fixed-width cards that scroll horizontally with snap.
- Flat at rest; lift and shadow appear only in response to hover, focus or an open menu.
- Light and dark are equal citizens with the same token names.

## Colors

A colourless table with one warm light on it: every neutral is pure grey (chroma 0) and the only hue in the system is gold at 84 degrees.

### Primary

- **Dealer's Gold** (`gold` dark, `paper-gold` light): focus outline (2px, 3px offset), the active filter's double border, the current-item dot in menus, hovered round button and toggle borders, the toggle ball, text selection, the wordmark's blinking cursor, the newsletter link underline, and the fill of the 404 return button. Light theme uses a deeper gold so the focus ring keeps 3:1 against paper.
- **Gold Ink** (`gold-ink` / `paper-gold-ink`): text and glyphs set on gold (selection text, the toggle's active icon, the 404 button label).

### Neutral

- **Charcoal Ground / Paper Ground** (`charcoal-ground` / `paper-ground`): page background; also the browser theme colour (#1b1b1b / #f3f3f3).
- **Card Face** (`card-face` / `paper-card-face`): card bodies, dropdown menus, the theme toggle track.
- **Raised Control** (`raised-control` / `paper-raised-control`): filter controls, round icon buttons, cover image placeholder, menu item hover.
- **Hairline** (`hairline` / `paper-hairline`): card borders, cover divider, menu border, section rules, quiet tag outlines.
- **Strong Hairline** (`hairline-strong` / `paper-hairline-strong`): borders of interactive controls and of the date tag, so actionable things read one notch firmer than containers.
- **Ink** (`ink` / `paper-ink`): headings, control labels, the wordmark, emphasised text.
- **Body Ink** (`body-ink` / `paper-body-ink`): running text and card text.
- **Muted Ink** (`muted-ink` / `paper-muted-ink`): outlet names, counts, topic tags, header links, footer, bylines, chevrons.
- **Scrollbar Thumb** (`scrollbar-thumb` / `paper-scrollbar-thumb`): page scrollbar only; month rows hide theirs.

### One-offs

- **Outlet colours** (`color` in `src/data/sources.json`): each card's cover sits on its outlet's colour while it loads, and a 3px strip in that colour runs under the cover. The only per-outlet colour; it comes from data, not tokens.
- **Easter Egg Red** (`easter-egg-red`): the footer heart and the ☭ it turns into on hover. Used nowhere else, in either theme.
- **Photo Scrim** (`photo-scrim`): the dark wash over the Deltan GIF on the 404 page, keeping its white title legible. Used nowhere else.

### Named Rules

**The Rationed Gold Rule.** Gold marks state, never structure: something is focused, active, current, under the pointer, or the single action on a page. A surface at rest never wears gold; the only gold fills are the toggle ball and, at most, one primary action per page.

**The Same Names Rule.** Both themes redefine the same custom properties (`--bg`, `--surface`, `--raised`, `--line`, `--line-strong`, `--text`, `--body`, `--muted`, `--gold`, `--gold-ink`, `--scrollbar`). Components reference only these names, never a theme-specific value.

## Typography

**Display Font:** Apfel Grotezk (Collletttivo, OFL; Regular, Mittel, Fett), falling back to system-ui
**Body Font:** Ronzino (Collletttivo, OFL; Regular, Oblique, Medium, Bold), falling back to the system sans
**Label/Mono Font:** Necto Mono (Collletttivo, OFL; Regular), falling back to ui-monospace

**Character:** Three free Collletttivo faces. Apfel Grotezk sets the display, page-title and month headings (`h1`, `h2` via `--display`); Ronzino does all the reading and controls, carried by weight (600 for headings, 500 for controls) and tight negative tracking at size; a small, widely tracked mono capital sets data apart as data.

### Hierarchy

- **Display** (600, clamp 2.25rem to 4.25rem, line-height 1, -0.035em, max 18ch): the page title only.
- **Page Title** (600, clamp 2rem to 3.25rem, line-height 1.05, -0.03em): the newsletter and 404 titles, a step below Display.
- **Headline** (600, clamp 1.375rem to 1.75rem, -0.02em): month headings above each row.
- **Title** (600, 1.0625rem, 1.35, -0.005em): card titles.
- **Body** (400, 1rem, 1.5): default text; the intro lede steps to clamp 1rem to 1.125rem at max 62ch. Secondary lines (summary, byline) sit at 0.9375rem in muted ink.
- **Prose** (400, 1.125rem, 1.7, max 68ch): newsletter reprints.
- **Caption** (400, 0.875rem): outlet names on cards, header links, the footer, the back link, and filter controls on phones.
- **Control** (500, 0.9375rem): filter controls and menu items.
- **Wordmark** (mono, 1rem, 0.04em, lowercase): `#vazajato_` in the top bar, the one mono use that is not data.
- **Label** (mono, 0.6875rem, 0.14em, uppercase): dates, article counts, topic tags.

### Named Rules

**The Data Wears Mono Rule.** Monospace capitals are reserved for values that belong to content: a date, a count, a topic. They never introduce or label a heading.

## Layout

The page is full-bleed with a fluid side gutter (`spacing.gutter`, 16px to 64px). The top bar, intro, month headings and footer all align to that gutter; month rows scroll edge to edge while their first card snaps to the gutter (`scroll-padding-inline`).

- **Intro:** a stack of title, lede, computed summary and filters. From 1100px it becomes two columns, title left and a column of up to 760px right, top-aligned with a 48px gap. Padding clamps 32px to 88px above and 24px to 56px below.
- **Month section:** heading, mono count and, when the row overflows, previous/next round buttons pushed to the right. Below it the row: fixed-width cards (`min(340px, 78vw)`) with a 20px gap, padded 16px above and 24px below, horizontal scroll with mandatory start snap and a hidden scrollbar. Arrow buttons page by 85% of the row width.
- **Rhythm:** 6, 8, 14, 20, 24 and 48px recur (`spacing` scale); 14px is the default stack gap in intro and card bodies.
- **Mobile (640px and below):** filters become a three-column grid (outlet, topic, square sort button); filter labels shorten; the month heading becomes a two-row grid with arrows spanning both rows; header links wrap onto their own line below the wordmark and toggle.
- **Reading pages:** newsletter articles are a centred 68ch column under a back link.

## Elevation & Depth

Flat by default. Depth comes from tone: the ground, a card face one step off it, and a raised control one step further, all edged by hairlines. Shadows exist only as a response to state.

### Shadow Vocabulary

- **Lifted card** (`box-shadow: 0 14px 30px -12px oklch(0 0 0 / 0.45)`): a hovered or focused card, together with a 4px rise.
- **Open menu** (`box-shadow: 0 12px 32px oklch(0 0 0 / 0.28)`): dropdown menus while open.
- **Active ring** (`box-shadow: inset 0 0 0 1px gold`): doubles the gold border of an active filter control. Not depth; a weight cue.

### Named Rules

**The Flat-At-Rest Rule.** Nothing casts a shadow until the reader acts on it: hover, focus, or opening a menu.

## Shapes

Small, firm corners on a three-step scale: 4px for tags, menu items and the clear button; 6px (`--radius`) for filter controls and the gold button; 8px for cards, menus and embedded frames. Round shapes are reserved for circular things: 40px icon buttons, outlet avatars (20px circles), the toggle's pill track and ball, the current-item dot. Borders are 1px hairlines everywhere.

## Components

### Cards (article)

The signature unit: a card that links to the original article in a new tab.

- **Corner Style:** 8px, overflow hidden.
- **Background:** card face, body ink text; title in ink.
- **Structure:** 2:1 cover image over a 3px strip in the outlet's colour (outlet colour also fills the cover while it loads); body padded 16px 18px 18px with 14px gaps: title, outlet (20px round avatar and name in muted ink, pushed to the bottom), then tags.
- **Border:** 1px hairline in every state.
- **States:** hover and focus rise 4px and take the lifted shadow (0.45s, expo-out ease); focus also shows the gold outline.

### Tags

- **Style:** mono label, 4px 7px padding, 4px corners, 1px hairline, muted ink.
- **Date tag:** always first; strong hairline and ink text so the date leads.

### Filter controls (outlet and topic menus, sort)

- **Shape:** 6px corners, 44px minimum height, 260px wide on desktop and full cell width on mobile.
- **Default:** raised background, strong hairline, ink text at control size, muted chevron on the right that rotates 180deg when open.
- **Hover:** border goes to ink.
- **Active (a filter is applied):** gold border doubled by an inset gold ring; the chevron is replaced by a 30px clear (x) button.
- **Menu:** native `details` disclosure; a card-face panel with hairline border, 8px corners, 6px padding, open-menu shadow, 300px minimum width, scrolls past 60vh; drops in 6px over 0.22s. Items are 8px 10px with 4px corners, raised on hover; the current item is ink, 600 weight, with a 7px gold dot at the right.
- **Sort:** same control shape with a sort glyph; collapses to a 44px square on mobile.

### Round icon buttons

Month previous/next and footer share links. 40px circles, raised background, strong hairline, ink glyph; border turns gold on hover; disabled at 35% opacity.

### Theme toggle

A pill switch after the Astro error overlay's toggle: 60px by 32px track in card face with a strong hairline, sun and moon stroke glyphs at either end, and a 24px gold ball that slides under the active glyph (0.45s, expo-out). The glyph over the ball is gold ink; the other is muted. Border turns gold on hover. Exposed as a switch; hidden until its script runs; uses the system highlight colour in forced-colours mode.

### Navigation (top bar)

Wordmark left (`#vazajato` in Necto Mono and ink, followed by a gold `_` cursor that blinks every 1.1s and holds still with reduced motion), file links right in muted ink that turn ink and underline on hover, toggle at the far right. Padding 20px by the gutter.

### Icons

One stroke family on a 24px grid at 1.75 stroke, round caps and joins, inheriting text colour (chevron, left, right, close, sort, sun, moon). Brand marks (WhatsApp, Twitter, Facebook) are filled.

### Gold button

Used once, on the 404 page: gold fill, gold ink label at 600, 12px 18px padding, 6px corners.

## Do's and Don'ts

### Do:

- **Do** reference the shared custom properties so every surface works in both themes without extra rules.
- **Do** keep gold to state and single actions: focus, active, current, hover, the toggle ball, one gold button per page at most.
- **Do** edge surfaces with 1px hairlines; use the strong hairline for anything interactive.
- **Do** set dates, counts and topics in the mono label style, and give the date the firmer treatment.
- **Do** lay new collections of articles out as month rows of 340px cards, scrolling horizontally with snap.
- **Do** honour reduced motion: keep colour changes, drop rises, slides and drop-in animations.
- **Do** keep targets at least 40px (44px for filter controls).

### Don't:

- **Don't** fill large areas, panels or headings with gold, or use it at rest to decorate.
- **Don't** add a second accent hue; the only other colour on the page comes from cover images, outlet avatars and outlet colour strips.
- **Don't** put shadows on surfaces at rest.
- **Don't** tilt or rotate cards.
- **Don't** use mono capitals as eyebrow labels or kickers above headings.
- **Don't** replace month rows with a uniform grid of identical boxes or a single centre-line timeline.
