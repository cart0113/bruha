# Overview

A personal set of [docsify](https://docsify.js.org/) extensions that make
documentation pages look the way I want. bruha is not a fork of docsify —
docsify is loaded via CDN. bruha layers config, themes, and plugins on top.

Built on top of docsify, bruha adds:

- **YAML-driven configuration** — a single `bruha.yaml` controls all features;
  every key has a sensible default
- **Top navigation bar** — top-level folders become a horizontal nav (like
  PyData Sphinx theme)
- **Collapsible sidebar folders** — click to expand/collapse sections
- **Sidebar bar indicator** — a vertical line shows your position within a
  document
- **4 color themes** — parchment, pylab, blossom, near-midnight (each with light
  and dark variants)
- **Code enhancements** — line numbers and copy-to-clipboard on all code blocks
- **Auto-generated sidebar** — Python tool builds `_sidebar.md` from filesystem
  using `_order` files for ordering

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
