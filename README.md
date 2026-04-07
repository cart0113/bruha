# bruha

A [docsify](https://docsify.js.org/) extension theme designed for LLM
documentation generation. Not a fork -- docsify is loaded via CDN. bruha adds
structure, config, and theming on top.

## Features

- **Auto-generated sidebar from filesystem** -- add folders and markdown files to
  `docs/src/`, run `build.sh`, and the sidebar updates. No hand-editing
  `_sidebar.md`. Designed so an LLM does not need to update ancillary files.
- **Optional ordering control** -- `_order.md` files control content tab and
  sidebar ordering.
- **Top navigation tabs from folder structure** -- top-level folders automatically
  become a horizontal tab bar (like PyData Sphinx or Read the Docs).
- **Single YAML config with defaults** -- one `bruha.yaml` controls everything
  (themes, sidebar behavior, nav layout, code blocks). Four color themes with
  light/dark variants, code highlighting, and a theme picker UI.
- **Copy-based install** -- copy `docs/themes/` and `docs/bin/` into your
  project.
- **Context-db files provided** -- includes `context-db/using-bruha/` and
  `templates/` with a sample `AGENTS.md` and `using-bruha/SKILLS.md` you can
  incorporate into your project.

## How It Works

1. Organize docs under `docs/src/` using optional `_order.md` files for ordering
2. Edit `bruha.yaml` to override any defaults you want to change
3. Run `build.sh` to generate `index.html`, `_sidebar.md`, and the JS config

## Quick Start

```bash
docs/bin/build.sh              # generate sidebar + config, run prettier
docs/bin/serve.sh              # build + launch dev server at localhost:3000
docs/bin/serve.sh --port 4000  # custom port
```

## Structure

```
docs/
  bruha.yaml            Config (override defaults here)
  src/                  Markdown content
  themes/               CSS + JS plugins
  bin/                  Build, format, serve scripts
src/bruha/              Python tools (sidebar builder, config generator)
templates/              Sample AGENTS.md and skills for adopting projects
context-db/             Project knowledge database (context-db format)
```

## Documentation

Full docs: https://cart0113.github.io/bruha/
