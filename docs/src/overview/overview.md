# Overview

A set of [docsify](https://docsify.js.org/) extensions that add structure,
config, and theming. bruha is not a fork of docsify -- docsify is loaded via
CDN. bruha layers plugins and a build tool on top.

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

- **Collapsible sidebar folders** -- click to expand/collapse sections
- **Sidebar bar indicator** -- a vertical line shows your position within a
  document
- **Code enhancements** -- line numbers and copy-to-clipboard on all code blocks
- **Search** -- full-text search across all pages

## How It Works

1. Organize docs under `docs/src/` using `_order` files for ordering
2. Edit `bruha.yaml` to override any defaults you want to change
3. Run the build to generate `_sidebar.md` and the JS config
4. Serve with any static server (`docsify serve docs`, `python -m http.server`)

## Quick Start

```bash
bin/build.sh
bin/serve.sh
```

Or manually:

```bash
cd docs
python-main -c "
import bruha.sidebar_builder as sb
import bruha.docsify_ext_config as cfg
config = cfg.load_config('.')
sb.write_sidebar('.', config['top_level_folders_as_top_control'], config['content_folder'])
cfg.generate_config_js('.')
"
```

Then open `docs/index.html` in a browser or run `docsify serve docs`.
