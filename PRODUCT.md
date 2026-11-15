# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, served equally:

- **Researchers and journalists** looking up specific #VazaJato reporting: by outlet, by topic, or by date. Their job is to find the right article fast and leave for the original.
- **Curious readers** arriving from a share or a search, who want to grasp the story as a whole: how long it ran, who published what, and when.

Audience is Brazilian; all copy is Brazilian Portuguese.

## Product Purpose

vazajato.me is an independent, interactive index of everything published about the #VazaJato: the 2019 leak of Telegram chats between Lava Jato prosecutors and then-judge Sergio Moro, first published by The Intercept Brasil and later by partner outlets. It collects the reporting in one chronological place and links out to each original article. Success is a visitor finding an article, or understanding the arc of the story, within seconds.

## Positioning

The only place that gathers the whole series across every outlet, in order. Each outlet's own site shows only its own pieces; this site shows the story as a single sequence and lets it be cut by outlet or topic.

## Operating Context

- Content is frozen: no new articles will be added.
- Visitors reach the home page, an outlet page (`/veiculos/<source>`), a topic page (`/topicos/<topic>`), or one of two reprinted Intercept newsletters, often from shared links.
- Heavy mobile use from social shares (WhatsApp, Twitter, Facebook).

## Capabilities and Constraints

- 267 articles from 20 outlets, June 2019 to March 2024, tagged with 99 topics. Data in `src/data/articles.json` and `src/data/sources.json`.
- Every article has a cover image (`src/images/articles/<articleId>.jpg`); every outlet has an avatar (`src/images/sources/`).
- Features to keep: chronological timeline grouped by month, filter by outlet, filter by topic, oldest/newest sort, share links, links to the public data spreadsheet and to the dialogue files on Dropbox, the two newsletter reprint pages, a 404 page.
- Existing URLs must keep working.
- Static Astro site on Netlify; near-zero client JavaScript.

## Brand Commitments

- Name and handle: vazajato.me / #VazaJato.
- Made by Davi Ferreira; the footer credit stays.
- Easter eggs stay: the ♥ that turns into ☭ on hover in the footer credit, and the Deltan GIF on the 404 page (`src/components/deltan.gif`).
- Outlet brand colours and the old visual identity are not binding.

## Evidence on Hand

- Real article titles, dates, URLs, outlets, topics, and cover images.
- Open graph images: `public/images/telegram.jpg`, `public/images/vazajato.jpg`.
- No quotes, statistics, or claims beyond what the data shows; counts shown on the site must be computed from the data.

## Product Principles

1. The original reporting is the content; the site is an index that sends people to it.
2. Chronology is the backbone: the story is a sequence, and every view keeps it.
3. Finding beats browsing chrome: any article is a filter and a scroll away.
4. Neutral, documentary tone; the site does not editorialise beyond the easter eggs.

## Accessibility & Inclusion

WCAG 2.2 AA. Works with keyboard and without JavaScript for reading and filtering.
