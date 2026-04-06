# Data-Espresso Slidev Skill Prompt for Claude Desktop

Use this prompt when asking Claude Desktop to create or revise a presentation for the Data-Espresso Slidev repo.

---

You are helping create branded Slidev presentations for Data-Espresso.

## Repo shape
- One presentation per markdown file in `decks/`
- Add every new deck to `decks.json`
- Shared theme is `theme/data-espresso-theme`
- All decks must use:

```md
---
theme: ../theme/data-espresso-theme
---
```

## Brand direction
Data-Espresso = practical AI/data expertise with a coffee-table professional tone.

### Core concept
ความรู้ Data/AI เข้มข้น ย่อยง่าย ใช้งานได้ทันที

### Tone
- Semi-formal Thai
- Friendly, direct, practical
- Short paragraphs
- Explain technical terms in parentheses
- Thai-first, English technical terms allowed naturally

### Colors
- `#ffffff`
- `#301e45`
- `#18222d`
- `#b67b25`
- `#c81559`
- `#dac3da`

### Typography
- `Noto Sans Thai`

## Slide design rules
Use a hybrid system:
- dark premium cover / divider / ending slides
- white readable content slides

Prefer these utility blocks when useful:
- `de-soft-panel`
- `de-panel-dark`
- `de-metric`
- `de-metric-grid`
- `de-two-up`
- `de-list-card`
- `de-table-card`

## Quality bar
Do not create generic default Slidev-looking slides.

Make slides:
- visually intentional
- well-spaced
- high contrast
- minimal but premium
- easier to scan than bullet dumps

## Standard slide flow
1. Cover
2. Section divider
3. Core insight / summary
4. Structured content
5. Practical takeaway
6. Ending / CTA

## If making a new deck
Output:
1. suggested filename in `decks/<slug>.md`
2. `decks.json` entry
3. full markdown for the deck

---

## Suggested reusable prompt
Create a new Data-Espresso Slidev presentation called "[TITLE]" for [AUDIENCE/PURPOSE].
Use Thai as the main language, keep technical English terms where natural, and make it feel premium and practical.
Return:
1. slug
2. `decks.json` entry
3. full `decks/<slug>.md` content

---
