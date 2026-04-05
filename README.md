# bruha

A personal set of [docsify](https://docsify.js.org/) extensions. Not a fork --
docsify is loaded via CDN. bruha adds YAML-driven config, custom themes, sidebar
plugins, and a Python sidebar builder on top.

## Features

- **YAML config** -- single `bruha.yaml` controls all settings, with sensible
  defaults for everything
- **4 color themes** -- parchment, pylab, blossom, near-midnight (each with
  light + dark variants)
- **Top navigation bar** -- top-level folders as horizontal tabs
- **Collapsible sidebar** -- folders and page sections collapse/expand
- **Sidebar bar indicator** -- vertical line tracks your position in a document
- **Code enhancements** -- line numbers and copy-to-clipboard on all code blocks
- **Sidebar builder** -- Python tool generates `_sidebar.md` from filesystem
  with `_order` files for ordering

## Quick Start

```bash
bin/build.sh   # generate sidebar + config, run prettier
bin/serve.sh   # build + launch dev server at http://localhost:3000
```

## Structure

```
docs/
  bruha.yaml            Config (override defaults here)
  src/                  Markdown content
  themes/               CSS + JS plugins
  index.html            Docsify entry point
src/bruha/              Python tools (sidebar builder, config generator)
bin/                    Build, format, serve scripts
```

## Documentation

Full docs are served by the project itself. Run `bin/serve.sh` and open
http://localhost:3000, or visit https://cart0113.github.io/bruha/.
