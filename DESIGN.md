---
name: vazajato.me
description: Linha do tempo da Vaza Jato, every month dealt as a row of cards on a neutral charcoal table.
colors:
  accent: 'oklch(0.74 0.13 235)'
  accent-ink: 'oklch(0.2 0.04 235)'
  charcoal-ground: 'oklch(0.22 0 0)'
  card-face: 'oklch(0.25 0 0)'
  raised-control: 'oklch(0.28 0 0)'
  hairline: 'oklch(0.93 0 0 / 0.16)'
  hairline-strong: 'oklch(0.93 0 0 / 0.42)'
  ink: 'oklch(0.94 0 0)'
  body-ink: 'oklch(0.86 0 0)'
  muted-ink: 'oklch(0.74 0 0)'
  scrollbar-thumb: 'oklch(0.42 0 0)'
  paper-accent: 'oklch(0.52 0.12 240)'
  paper-accent-ink: 'oklch(0.99 0.01 240)'
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
  sm: '0'
  md: '0'
  lg: '0'
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
    backgroundColor: '{colors.accent}'
    rounded: '{rounded.circle}'
    size: '24px'
  button-accent:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.accent-ink}'
    rounded: '{rounded.md}'
    padding: '12px 18px'
---

# Design System: vazajato.me

## Overview

**Creative North Star: "The Dealt Archive"**

The archive is a hand of cards dealt on a plain charcoal table. Every month is one horizontal row of cards laid left to right, and the months stack in order down the page, so chronology reads twice: across a row and down the page. Entries sit square on the page, divided by rules; a row fades out at any edge with more to scroll. The table is quiet so the reporting, its cover images and its outlets, carries the colour.

The material is neutral and documentary: an achromatic ground, hairline rules instead of boxes, square corners, a grotesk for headings and a quiet sans for everything a person reads, set like a newspaper index rather than an app. There is exactly one accent, Telegram blue (the app the chats leaked from), and it is rationed to state: focus, the active filter, the current menu item, the hovered control, the theme toggle's ball, the wordmark's cursor, and the 404 page's single action. Density is moderate: generous gutters, cards sized for a cover and a three-line title, rows that bleed off the right edge to show they scroll.

Two themes ship and share every token name. Dark (charcoal) is the default and is used whenever the system prefers dark or gives no preference; light (paper) is used when the system prefers light or the reader picks it with the toggle, which remembers the choice.

**Key Characteristics:**

- Achromatic charcoal or paper ground; entries sit straight on it, divided by column and section rules; corners are square.
- One blue accent, spent only on state and on a few small marks.
- Apfel Grotezk for headings, Ronzino for reading; mono only in the wordmark.
- Month rows of fixed-width cards that scroll horizontally with snap.
- Flat at rest; lift and shadow appear only in response to hover, focus or an open menu.
- Light and dark are equal citizens with the same token names.

## Colors

A colourless table with one blue light on it: every neutral is pure grey (chroma 0) and the only hue in the system is Telegram blue at 235 to 240 degrees.

### Primary

- **Telegram Blue** (`accent` dark, `paper-accent` light): focus outline (2px, 3px offset), the active filter's double border, the current-item dot in menus, hovered round button and toggle borders, the toggle ball, text selection, the wordmark's blinking cursor, the newsletter link underline, and the fill of the 404 return button. Dark blue is #47b7f1 (7.7:1 on the ground); light theme uses a deeper #0070a6 (4.9:1 on paper) so the focus ring and fills keep contrast.
- **Accent Ink** (`accent-ink` / `paper-accent-ink`): text and glyphs set on blue: near-black in dark (8.0:1), white in light (5.3:1) (selection text, the toggle's active icon, the 404 button label).

### Neutral

- **Charcoal Ground / Paper Ground** (`charcoal-ground` / `paper-ground`): page background; also the browser theme colour (#1b1b1b / #f3f3f3).
- **Card Face** (`card-face` / `paper-card-face`): card bodies, dropdown menus, the theme toggle track.
- **Raised Control** (`raised-control` / `paper-raised-control`): filter controls, round icon buttons, cover image placeholder, menu item hover.
- **Hairline** (`hairline` / `paper-hairline`): card borders, cover divider, menu border, section rules, quiet tag outlines.
- **Strong Hairline** (`hairline-strong` / `paper-hairline-strong`): borders of interactive controls and the month section rules, so actionable things read one notch firmer than containers.
- **Ink** (`ink` / `paper-ink`): headings, control labels, the wordmark, emphasised text.
- **Body Ink** (`body-ink` / `paper-body-ink`): running text and card text.
- **Muted Ink** (`muted-ink` / `paper-muted-ink`): outlet names, counts, kickers in the table, header links, footer, bylines, chevrons.
- **Scrollbar Thumb** (`scrollbar-thumb` / `paper-scrollbar-thumb`): page scrollbar only; month rows hide theirs.

### One-offs

- **Outlet colours** (`color` in `src/data/sources.json`): each card's cover sits on its outlet's colour while it loads, and a 3px strip in that colour runs under the cover. The only per-outlet colour; it comes from data, not tokens.
- **Easter Egg Red** (`easter-egg-red`): the footer heart and the ☭ it turns into on hover. Used nowhere else, in either theme.
- **Photo Scrim** (`photo-scrim`): the dark wash over the Deltan GIF on the 404 page, keeping its white title legible. Used nowhere else.

### Named Rules

**The Rationed Accent Rule.** Blue marks state, never structure: something is focused, active, current, under the pointer, or the single action on a page. A surface at rest never wears blue; the only blue fills are the toggle ball and, at most, one primary action per page.

**The Same Names Rule.** Both themes redefine the same custom properties (`--bg`, `--surface`, `--raised`, `--line`, `--line-strong`, `--text`, `--body`, `--muted`, `--accent`, `--accent-ink`, `--scrollbar`). Components reference only these names, never a theme-specific value.

## Typography

**Display Font:** Apfel Grotezk (Collletttivo, OFL; Regular, Mittel, Fett), falling back to system-ui
**Body Font:** Ronzino (Collletttivo, OFL; Regular, Oblique, Medium, Bold), falling back to the system sans
**Mono Font:** Necto Mono (Collletttivo, OFL; Regular), falling back to ui-monospace; wordmark only

**Character:** Three free Collletttivo faces. Apfel Grotezk sets the display, page-title and month headings (`h1`, `h2` via `--display`); Ronzino does all the reading and controls, carried by weight (600 for headings, 500 for controls) and tight negative tracking at size. Dates and counts use tabular figures in the body face.

### Hierarchy

- **Display** (600, clamp 2.25rem to 4.25rem, line-height 1, -0.035em, max 18ch): the page title only.
- **Page Title** (600, clamp 2rem to 3.25rem, line-height 1.05, -0.03em): the newsletter and 404 titles, a step below Display.
- **Headline** (600, clamp 1.375rem to 1.75rem, -0.02em): month headings above each row.
- **Title** (600, 1.0625rem, 1.35, -0.005em): card titles.
- **Body** (400, 1rem, 1.5): default text; the intro lede steps to clamp 1rem to 1.125rem at max 62ch. Secondary lines (summary, byline) sit at 0.9375rem in muted ink.
- **Prose** (400, 1.125rem, 1.7, max 68ch): newsletter reprints.
- **Caption** (400, 0.875rem): outlet names on cards, header links, the footer, the back link, and filter controls on phones.
- **Control** (500, 0.9375rem): filter controls and menu items.
- **Wordmark** (mono, 1rem, 0.04em, lowercase): `#vazajato_` in the top bar, the only mono on the page.
- **Kicker** (500, 0.8125rem, body ink): the topics above a headline, joined by middots.
- **Byline** (400, 0.8125rem, muted, tabular figures): avatar, outlet, em dash, date.

### Named Rules

**The Newspaper Index Rule.** Entries are set like a printed index: kicker, headline, byline, with vertical column rules between entries in a row and generous space, not horizontal rules, between sections. No boxes around stories, no tracked mono capitals, no app chrome inside the content.

## Layout

The page is full-bleed with a fluid side gutter (`spacing.gutter`, 16px to 64px). The top bar, intro, month headings and footer all align to that gutter; month rows scroll edge to edge while their first card snaps to the gutter (`scroll-padding-inline`).

- **Intro:** title, lede and computed summary. From 1100px it becomes two columns, title left and a column of up to 760px right with a 48px gap, aligned on their last baselines so the summary line sits on the title's last line. Padding clamps 28px to 64px above and 24px to 40px below.
- **Toolbar:** a full-width row under the intro (12px vertical padding, ground background; a hairline below only while pinned): filters and sort on the left, the view toggle on the right; wraps on narrow screens. From 641px it sticks to the top of the viewport while scrolling; phones leave it in flow. While pinned (`data-stuck`, set by an IntersectionObserver on a 1px sentinel) it compacts: 8px padding, 36px filter controls at 0.875rem and 210px wide, and the view toggle drops to icons (labels stay for screen readers, `title` gives a tooltip).
- **Month section:** separated by space alone (clamp 32px to 56px above, no rule): heading, count (0.875rem, tabular) and, when the row overflows, previous/next round buttons pushed to the right. Below it the row: entries `min(320px, 74vw)` wide as columns with 28px padding either side of a 1px hairline column rule (none before the first), padded 24px above and 32px below, horizontal scroll with mandatory start snap and a hidden scrollbar; the scrollport fades out (gutter + 64px) on any side with more cards. The right fade is present from the first paint and cleared for rows that fit; the 0.3s easing only starts after the first measurement, so nothing animates in on load. Arrow buttons page by 85% of the row width.
- **Rhythm:** 6, 8, 14, 20, 24 and 48px recur (`spacing` scale); 14px is the default stack gap in intro and card bodies.
- **Mobile (640px and below):** filters become a three-column grid (outlet, topic, square sort button); filter labels shorten; the month heading becomes a two-row grid with arrows spanning both rows; header links wrap onto their own line below the wordmark and toggle.
- **Reading pages:** newsletter articles are a centred 68ch column under a back link.

## Elevation & Depth

Flat. Stories sit straight on the ground, separated by rules; only controls take a raised tone. The one shadow is the open menu.

### Shadow Vocabulary

- **Open menu** (`box-shadow: 0 12px 32px oklch(0 0 0 / 0.28)`): dropdown menus while open.
- **Active ring** (`box-shadow: inset 0 0 0 1px blue`): doubles the blue border of an active filter control. Not depth; a weight cue.

### Named Rules

**The Flat-At-Rest Rule.** Nothing casts a shadow except an open menu.

## Shapes

Square corners everywhere (`--radius: 0`): covers, controls, menus, the view toggle, buttons and embedded frames, as on a printed page. Round shapes are reserved for circular things: the month arrows and share buttons, outlet avatars (20px circles), the current-item dot. The theme toggle is square like the view toggle. Borders are 1px hairlines everywhere.

## Components

### Cards (article)

The signature unit: a card whose title link covers the whole card (`.stretched`) and opens the original article in a new tab. The list view uses the same pattern. Only the table links outlet and topics to their filtered timelines.

- **No box:** no background, border or corner; the row's column rules separate entries.
- **Structure:** square 2:1 cover over a 3px strip in the outlet's colour (outlet colour also fills the cover while it loads), then 18px below, at 10px gaps: the topics as a kicker, the title as an Apfel Grotezk headline (700, 1.25rem, line-height 1.15), and a byline pushed to the bottom (18px avatar, outlet, em dash, date).
- **States:** hover and focus zoom the cover 3% (0.45s, expo-out); focus also draws the blue outline round the entry. Reduced motion drops the zoom.

### View toggle

Text options at the right of the toolbar: Galeria (the month rows), Lista, Tabela, each a muted stroke icon plus label, no track or border. The pressed option is ink with a 2px accent underline that slides between options (0.45s, expo-out); the others are muted and turn ink on hover. The choice is stored and restored before paint on `<html data-view>`; without JS only cards show and the toggle stays hidden. Only the gallery is in each page's HTML: the list and table are static fragments (`/vistas/lista/…`, `/vistas/tabela/…`, noindex and out of the sitemap) fetched the first time their view is shown, styled by `src/styles/views.css` and brought into the current sort order on arrival. Meanwhile a skeleton shaped like the view (a month bar and story rows for the list, a header and ten rows for the table; raised-tone bones pulsing at 1.1s, still with reduced motion, at least a viewport tall so the footer stays below) holds the place, with "Carregando…" announced to screen readers. Full width on phones.

### List view (news feed)

Month sections separated by space, no rules; each story is a full-width row: a 2:1 cover up to 480px on the left (outlet colour behind it, square, 3% zoom on hover), then the topics as a kicker in body ink, the title as an Apfel Grotezk headline (700, clamp 1.375rem to 2rem, line-height 1.12, balanced), and a byline of avatar, outlet and date in muted ink. Stories are spaced 32px apart with a 36px gutter between cover and text, no rules between them; the cover stacks above the text under 760px.

### Table view

One table of every story: Data (tabular figures, body ink), Título (500, ink, blue underline on hover), Veículo (avatar and name, no wrap), Tópicos (0.875rem, muted, joined by middots). Column heads in 500 weight, 0.8125rem, muted, over a strong hairline, hairline rows, baseline-aligned cells, 24px column gaps, row hover in card face. From 960px the header row sticks just below the pinned toolbar (its live height is exposed as `--toolbar-h`); narrower, the table scrolls sideways inside its own region and the header scrolls with it. Data, Título and Veículo heads are sort buttons: click sorts ascending, again descending (pt-BR collation, punctuation ignored); the sorted head turns ink with an up or down arrow and carries `aria-sort`, idle heads preview the arrow on hover. The toolbar sort button re-sorts the table by date in its direction.

### Highlighter

The accent's second job: a blue marker swipe (`.highlight` / `mark`, `--highlight` = accent at 62% over the ground) under the lower half of words, with slightly ragged ends. Used on an applied filter's value and for text selection. It marks what a reader would mark; never a whole paragraph.

### Title scramble

The page title's key words ("Vaza Jato" on the home page, the outlet or topic name elsewhere) unscramble on load: each letter flickers through random lowercase letters and symbols in the accent colour, then settles to the real letter in ink, left to right (first at 250ms, then every 55ms, glyphs change every 50ms). Each glyph is drawn centred in its own letter's slot while the real letter is transparent, so the line never moves. Screen readers get the plain words from a visually hidden copy; without JS or with reduced motion the title is static.

### Filter controls (outlet and topic menus, sort)

Set as type, like a newspaper's section navigation, not as app controls.

- **Shape:** no box, background or border; 44px minimum height for touch (36px while pinned), 28px between controls; values truncate at 240px.
- **Default:** ink text at 0.9375rem, 500 weight, muted chevron that rotates 180deg when open.
- **Hover:** the value underlines (1px, 4px offset).
- **Active (a filter is applied):** the value carries the blue highlighter (`.highlight`, the same swipe as the title); the chevron is replaced by a 28px muted clear (x).
- **Menu:** native `details` disclosure; a card-face panel with hairline border, square corners, 6px padding, open-menu shadow, 300px minimum width, scrolls past 60vh; drops in 6px over 0.22s. Items are 8px 10px, square, raised on hover; the current item is ink, 600 weight, with a 7px blue dot at the right.
- **Sort:** same text style in body ink with a muted sort glyph; on phones the label is visually hidden and only the glyph shows.

### Round icon buttons

Footer share links: 40px circles, raised background, strong hairline, ink glyph; border turns blue on hover.

Month previous/next: 44px solid ink circles with a 2px blue border and a ground-coloured 20px chevron, so the way through a row is hard to miss; hover fills them blue with accent-ink glyph, press scales to 94%; at the end of a row the button drops to a strong-hairline outline with a muted glyph at 60% opacity.

### Theme toggle

A square switch after the Astro error overlay's toggle: 60px by 32px track in card face with a strong hairline, sun and moon stroke glyphs at either end, and a 24px blue square that slides under the active glyph (0.45s, expo-out). The glyph over the ball is blue ink; the other is muted. Border turns blue on hover. Exposed as a switch; hidden until its script runs; uses the system highlight colour in forced-colours mode.

### Navigation (top bar)

Wordmark left (`#vazajato` in Necto Mono and ink, followed by a blue `_` cursor that blinks every 1.1s and holds still with reduced motion), file links right in muted ink that turn ink and underline on hover, toggle at the far right. Padding 20px by the gutter.

### Icons

One stroke family on a 24px grid at 1.75 stroke, round caps and joins, inheriting text colour (chevron, left, right, close, sort, sun, moon). Brand marks (WhatsApp, Twitter, Facebook) are filled.

### Accent button

Used once, on the 404 page: blue fill, accent-ink label at 600, 12px 18px padding, square corners.

## Do's and Don'ts

### Do:

- **Do** reference the shared custom properties so every surface works in both themes without extra rules.
- **Do** keep blue to state and single actions: focus, active, current, hover, the toggle ball, one blue button per page at most.
- **Do** divide with 1px rules; use the strong hairline for controls and section heads.
- **Do** set entries as kicker, headline and byline, with dates and counts in tabular body figures.
- **Do** lay new collections of articles out as month rows of ruled columns, scrolling horizontally with snap.
- **Do** honour reduced motion: keep colour changes, drop rises, slides and drop-in animations.
- **Do** keep targets at least 40px (44px for filter controls).

### Don't:

- **Don't** fill large areas, panels or headings with blue, or use it at rest to decorate.
- **Don't** add a second accent hue; the only other colour on the page comes from cover images, outlet avatars and outlet colour strips.
- **Don't** put shadows on surfaces at rest.
- **Don't** tilt or rotate cards.
- **Don't** box stories, round corners, or bring back tracked mono capitals for data.
- **Don't** replace month rows with a uniform grid of identical boxes or a single centre-line timeline.
