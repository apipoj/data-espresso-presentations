# Data-Espresso Presentations

Multi-presentation Slidev workspace for Data-Espresso.

## Included decks

- `ai-trends-2026`
- `customer-os`
- `ai-workshop-starter`

## Local development

```bash
npm install
npm run dev
```

## Build all presentations

```bash
npm run build
```

This builds each deck into its own route under `dist/`:

- `/ai-trends-2026/`
- `/customer-os/`
- `/ai-workshop-starter/`

It also generates a branded root homepage at `/`.

## Add a new presentation

1. Create a new markdown file in `decks/`
2. Add it to `decks.json`
3. Use the Data-Espresso theme in frontmatter:

```md
---
theme: ../theme/data-espresso-theme
---
```

4. Run `npm run build`

## Brand system

This project uses a local Slidev theme based on the `data-espresso-brand-guidelines` skill.
