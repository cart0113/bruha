---
description:
  What bruha is — a docsify extension theme for LLM documentation generation,
  with sub-100ms auto-generated sidebar, tab navigation, JSON config, content
  widgets, and copy-based install
---

# bruha

A docsify extension theme designed for LLM documentation generation.

## Key Features

- **Auto-generated sidebar** from filesystem — add folders and markdown files to
  `docs/src/`, then `build.sh` generates `index.html`, `_sidebar.md`, and the JS
  config. The build runs in under 100ms even on large sites (150+ pages), so it
  adds no friction as a commit hook. Agents just edit markdown and commit.
- **Optional ordering** via `_order.md` files for sidebar and tab control.
- **Tab navigation** from folder structure — top-level folders become a
  horizontal tab bar.
- **Single JSON config** — `bruha.json` controls themes, sidebar behavior, nav
  layout, code blocks. Four color themes with light/dark variants.
- **Content widgets** — 8 callout types, table style variants (combinable),
  inline badges, keyboard key styling, collapsible sections.
- **LaTeX math** — opt-in KaTeX support (`katex: true` in bruha.json).
- **Copy-based install** — copy `docs/themes/` and `docs/bin/` into your
  project. Manual process, check back for updates.

## How It Works

1. Organize docs under `docs/src/` with optional `_order.md` files for ordering.
2. Edit `bruha.json` to override defaults.
3. Run `build.sh` to generate `index.html`, `_sidebar.md`, and JS config.
4. Use `serve.sh` for local development.

## Structure

```
docs/
  index.html            ← Auto generated main page
  bruha.json            ← Config (override defaults here)
  src/                  ← Markdown content
    overview/           ← Project overview (synced w/ README)
    examples/           ← Syntax reference for all features
  themes/               ← CSS + JS plugins
  bin/                  ← build.sh and serve.sh scripts
context-db/
  bruha-project/        ← Project-specific knowledge
    writing-docs/       ← Rules for this project's docs
  coding-standards/     ← Symlinked shared standards
templates/              ← Sample AGENTS.md and skills
```

Full docs: https://cart0113.github.io/bruha/
