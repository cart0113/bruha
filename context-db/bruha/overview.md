---
description:
  What bruha is — a docsify extension theme for LLM documentation generation,
  features, structure, and how it works
---

# bruha

A [docsify](https://docsify.js.org/) extension theme designed for LLM
documentation generation.

- **Auto-generated sidebar from filesystem**: just add folders and markdown
  files to a `docs/src` directory. Then a provided `build.sh` script (designed
  to be used as a commit hook) will generate all necessary files, such as the
  `index.html` and `_sidebar.md`. This was designed so that an LLM does not need
  to remember to update ancillary files when updating core documentation.
- **Optional ordering control**: an optional `_order.md` can be maintained to
  control content tab and sidebar ordering.
- **Top navigation tabs from folder structure**: a default option allows
  top-level folders to automatically become a horizontal tab bar (like PyData
  Sphinx or Read the Docs).
- **Single JSON config with defaults**: one `bruha.json` controls everything
  (themes, sidebar behavior, nav layout, code blocks). Currently, there are four
  color themes with light/dark variants, code highlighting, and a theme picker
  UI.
- **Multiple content widgets**: 8 callout types (`note`, `tip`, `important`,
  `warning`, `success`, `danger`, `example`, `quote`), table style variants
  (striped, bordered, compact, borderless — combinable), inline badges, keyboard
  key styling, and collapsible sections. See the
  [examples](https://cart0113.github.io/bruha/#/examples/callouts).
- **LaTeX math equations**: opt-in KaTeX support for inline and display math.
  Set `katex: true` in `bruha.json` to render `$...$` and `$$...$$` syntax. See
  the
  [math equations example](https://cart0113.github.io/bruha/#/examples/math-equations).
- **Copy-based install**: to use `bruha`, copy `docs/themes/` and `docs/bin/`
  into your project. Currently, the process is manual and you need to check back
  for updates and recopy assets when necessary.
- **Context-db files provided** — this project uses
  [context-db](https://cart0113.github.io/context-db) and provides
  `context-db/using-bruha/` context files. In addition, a `templates/` directory
  provides a sample `AGENTS.md` and a `using-bruha/SKILL.md` you can incorporate
  into your project.

## How It Works

1. Organize docs under `docs/src/` using optional `_order.md` files for ordering
2. Edit `bruha.json` to override any defaults you want to change
3. Run `build.sh` to generate `index.html`, `_sidebar.md`, and the JS config —
   intended to be put in a git commit hook.
4. Use `serve.sh` to build docs and run a local server for development.

## Structure

```
docs/
  index.html            ← Auto generated main page.
  bruha.json            ← Config (override defaults here)
  src/                  ← Markdown content and auto generated _sidebar.md.
    examples/           ← Syntax reference for all content features.
  themes/               ← CSS + JS plugins
  bin/                  ← build.sh and serve.sh scripts
templates/              ← Sample AGENTS.md and skills on how to write bruha docs.
```

For syntax and examples of all content features (callouts, table styles, badges,
etc.), see `docs/src/examples/` or the live docs.

Full docs: https://cart0113.github.io/bruha/
