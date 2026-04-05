# Overview

A personal set of docsify extensions that make documentation pages look the way
I want.

Built on top of [docsify](https://docsify.js.org/), bruha adds:

- **YAML-driven configuration** — a single `docsify-ext.yaml` controls all
  features
- **Top navigation bar** — top-level folders become a horizontal nav (like
  PyData Sphinx theme)
- **Collapsible sidebar folders** — click to expand/collapse sections
- **Sidebar bar indicator** — a vertical line shows your position within a
  document
- **Color theme picker** — 10 palettes to choose from
- **Code enhancements** — line numbers and copy-to-clipboard on all code blocks
- **Auto-generated sidebar** — Python tool builds `_sidebar.md` from numbered
  filesystem

## How It Works

1. Organize docs in numbered folders: `0_overview/`, `1_config/`, etc.
2. Edit `docsify-ext.yaml` to toggle features on/off
3. Run the sidebar builder to generate `_sidebar.md` and the JS config
4. Serve with any static server (`docsify serve docs`, `python -m http.server`)

## Quick Start

```bash
cd docs
python-main -c "
import bruha.sidebar_builder as sb
import bruha.docsify_ext_config as cfg
config = cfg.load_config('.')
sb.write_sidebar('.', config['top_level_folders_as_top_control'])
cfg.generate_config_js('.')
"
```

Then open `docs/index.html` in a browser or run `docsify serve docs`.
