# Data-Espresso Slidev Instructions for Claude Code

Use this repo to create and edit Data-Espresso presentations.

## Goal
Create branded Slidev presentations that match the Data-Espresso identity:
- professional but approachable
- Thai-first, with English technical terms where natural
- practical, not academic
- visually premium, not generic template-looking

## Brand rules
### Core concept
ความรู้ Data/AI เข้มข้น ย่อยง่าย ใช้งานได้ทันที

### Tone
- Semi-formal Thai
- Clear, direct, compact
- Explain technical terms in parentheses when needed
- Use short paragraphs and concrete examples
- Use personal insight style sparingly with 💡

### Colors
- White: `#ffffff`
- Russian Violet: `#301e45`
- Rich Black: `#18222d`
- Copper: `#b67b25`
- Rose Red: `#c81559`
- Thistle: `#dac3da`

### Typography
- Primary font: `Noto Sans Thai`

## Slide system
This repo uses one shared theme:
- `theme/data-espresso-theme`

Preferred structure:
- slide 1: `cover`
- slide 2: `section`
- content slides: use branded utility blocks
- final slide: `end`

## Utility blocks to prefer
- `de-soft-panel`
- `de-panel-dark`
- `de-metric`
- `de-metric-grid`
- `de-two-up`
- `de-list-card`
- `de-table-card`

## File structure
- `decks/` → one markdown file per presentation
- `decks.json` → registry of all presentations for homepage/build
- `theme/data-espresso-theme/` → shared theme
- `scripts/build.mjs` → builds all presentations and homepage

## How to add a new presentation
1. Create a new file under `decks/<slug>.md`
2. Add an entry to `decks.json`
3. Use this frontmatter:

```md
---
theme: ../theme/data-espresso-theme
title: My Deck
layout: cover
background: '#101010'
---
```

4. Build locally:

```bash
npm run build
```

## Visual quality bar
Do NOT make slides look like default Slidev templates.

Aim for:
- strong hierarchy
- bold cover composition
- premium spacing
- readable tables
- high-contrast dark panels
- fewer bullets, better composition

## When improving slides
Prefer:
- statement slide
- two-column compare slide
- metric cards
- branded quote/insight panel
- table wrapped in `de-table-card`

Avoid:
- long bullet dumps
- plain unstyled tables
- dark panels with low-contrast text
- weak empty title slides

## Output expectation
Whenever asked to create a deck:
- create/edit the markdown file in `decks/`
- update `decks.json`
- keep styling inside existing theme unless a shared upgrade is needed
- preserve brand consistency across all decks

## Ending rule
- Avoid salesy ending CTA.
- Do not end slides with phrases like "ถ้าต้องการ..." or service upsell language.
- End with one of: concise summary, key takeaway, reflection, or practical next step for the learner.
