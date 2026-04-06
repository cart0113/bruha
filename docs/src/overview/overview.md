# Overview

A set of [docsify](https://docsify.js.org/) extensions that add structure,
config, and theming. bruha is not a fork of docsify -- docsify is loaded via
CDN. bruha layers plugins and a build tool on top.

## Features

- **Auto-generated sidebar from filesystem** -- just add folders and markdown
  files, run build (usually as commit hook), and the sidebar updates
  automatically. No hand-editing `_sidebar.md`. This was designed so that an LLM
  generating documentation never needs to update a separate sidebar file.
  Optional `_order.md` files control sequencing.
- **Top navigation tabs from folder structure** -- top-level folders
  automatically become a horizontal tab bar (like PyData Sphinx or Read the
  Docs).
- **Single YAML config with defaults** -- one `bruha.yaml` controls everything
  (themes, sidebar behavior, nav layout, code blocks). Every key has a sensible
  default. Vanilla docsify requires wiring up each feature individually in
  JavaScript.
- **Coordinated theme system** -- 4 color themes with light/dark variants, vivid
  code highlighting, and a theme picker UI, all toggled from one config. Vanilla
  docsify gives you one static theme with no switching mechanism.

- **Collapsible sidebar folders** -- click to expand/collapse sections
- **Sidebar bar indicator** -- a vertical line shows your position within a
  document
- **Code enhancements** -- line numbers and copy-to-clipboard on all code blocks
- **Search** -- full-text search across all pages
- **Copy-based install** -- no CDN or package manager. Copy `docs/themes/` and
  `docs/bin/` into your project. `docs/bin/serve.sh` with `--port` flag for
  one-command local preview

## How It Works

1. Organize docs under `docs/src/` using optional `_order.md` files for ordering
2. Edit `bruha.yaml` to override any defaults you want to change
3. Run the build to generate `_sidebar.md` and the JS config
4. Use `docs/bin/serve.sh` or use any static server (`docsify serve docs`,
   `python -m http.server`)

## Viewing Docs Locally

```bash
docs/bin/build.sh
docs/bin/serve.sh              # default port 3000
docs/bin/serve.sh --port 4000  # custom port
```
