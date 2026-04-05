# bruha

A set of [docsify](https://docsify.js.org/) extensions. Not a fork -- docsify is
loaded via CDN. bruha adds structure, config, and theming on top.

## Features

- **Auto-generated sidebar from filesystem** -- add folders and markdown files,
  run build, and the sidebar updates automatically. No hand-editing
  `_sidebar.md`. Optional `_order` files control sequencing.
- **Top navigation tabs from folder structure** -- top-level folders
  automatically become a horizontal tab bar (like PyData Sphinx or Read the
  Docs). Vanilla docsify has no concept of this.
- **Single YAML config with defaults** -- one `bruha.yaml` controls everything
  (themes, sidebar behavior, nav layout, code blocks). Every key has a sensible
  default. Vanilla docsify requires wiring up each feature individually in
  JavaScript.
- **Coordinated theme system** -- 4 color themes with light/dark variants, vivid
  code highlighting, and a theme picker UI, all toggled from one config. Vanilla
  docsify gives you one static theme with no switching mechanism.

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
  index.html            Docsify entry point
  bin/                  Build, format, serve scripts
src/bruha/              Python tools (sidebar builder, config generator)
```

## Documentation

Full docs are served by the project itself. Run `docs/bin/serve.sh` and open
http://localhost:3000, or visit https://cart0113.github.io/bruha/.
