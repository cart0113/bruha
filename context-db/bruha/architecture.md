---
description: Architecture — how config flows from YAML through Python to JS runtime
---

# Architecture

## Config Flow: YAML -> Python -> JS

1. User edits `docs/docsify-ext.yaml` (single source of truth)
2. `bin/build.sh` runs Python:
   - `docsify_ext_config.load_config()` reads and validates the YAML
   - `docsify_ext_config.generate_config_js()` writes `docs/themes/docsify-ext-config.js`
   - `sidebar_builder.write_sidebar()` reads `_order` files and generates `_sidebar.md`
3. `bin/build.sh` runs prettier on all JS, CSS, and MD files
4. Generated JS file is loaded first in `<head>`:
   - Sets `window.__docsifyExtConfig` object
   - Applies CSS classes to `<html>` before docsify renders
5. `docs/index.html` reads config to set docsify options and conditionally load plugins

## CSS Classes Applied by Config

- `theme-<name>` — active color theme (e.g. `theme-parchment`, `theme-pylab`)
- `dark-mode` — dark variant of the active theme (toggled by user or config)
- `ext-no-hamburger` — hides sidebar toggle
- `ext-no-github-corner` — hides repo ribbon
- `ext-has-top-nav` — shifts sidebar/content down for top nav bar
- `ext-folder-chevron` — shows collapse chevron on folder headers
- `ext-inline-sidebar` — enables the sidebar bar indicator styles

## Plugin Loading

All plugins are docsify plugins registered in the `plugins` array.
Conditional loading uses `.filter(Boolean)`:

| Plugin | File | Config Gate |
|--------|------|-------------|
| `codeEnhancementsPlugin` | `code-enhancements.js` | Always active |
| `collapsibleFoldersPlugin` | `collapsible-folders.js` | Always active |
| `darkTogglePlugin` | `dark-toggle.js` | `theme_controls` !== `none` |
| `sidebarNavPlugin` | `sidebar-nav.js` | `document_inline_sidebar_selector` or `page_section_collapsible` |
| `topNavPlugin` | `top-nav.js` | `top_level_folders_as_top_control` |

## CSS Layers

1. `vue.css` — docsify base layout (CDN)
2. `code-one.css` — bruha base theme (Parchment light defaults, typography, layout)
3. `color-themes.css` — 4 themes × 2 modes via `.theme-*` and `.dark-mode` classes
4. `docsify-ext.css` — extension styles (indicator, folders, top nav, toggles)

## Build and Formatting

- Python: `python-main`, formatted with `ruff-main`
- JS/CSS/MD: formatted with prettier (config in `.prettierrc`)
- `bin/build.sh` — rebuild sidebar + config, run prettier
- `bin/format.sh` — run prettier only
- `bin/serve.sh` — build + launch docsify dev server
