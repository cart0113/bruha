---
description: Architecture — how config flows from YAML through Python to JS runtime
---

# Architecture

## Config Flow: YAML -> Python -> JS

1. User edits `docs/docsify-ext.yaml` (single source of truth)
2. On commit, pre-commit hook runs Python:
   - `docsify_ext_config.load_config()` reads and validates the YAML
   - `docsify_ext_config.generate_config_js()` writes `docs/themes/docsify-ext-config.js`
   - `sidebar_builder.write_sidebar()` receives `top_level_folders_only` flag from config
3. Generated JS file is loaded first in `<head>`:
   - Sets `window.__docsifyExtConfig` object
   - Applies CSS classes to `<html>` before docsify renders
4. `docs/index.html` reads config to set docsify options and conditionally load plugins

## CSS Classes Applied by Config

- `ext-no-hamburger` — hides sidebar toggle
- `ext-no-github-corner` — hides repo ribbon
- `ext-has-top-nav` — shifts sidebar/content down for top nav bar

## Plugin Loading

All plugins are docsify plugins registered in the `plugins` array.
Conditional loading uses `.filter(Boolean)`:

| Plugin | File | Config Gate |
|--------|------|-------------|
| `codeEnhancementsPlugin` | `code-enhancements.js` | Always active |
| `collapsibleFoldersPlugin` | `collapsible-folders.js` | Always active |
| `themePickerPlugin` | `theme-picker.js` | `theme_picker` |
| `sidebarNavPlugin` | `sidebar-nav.js` | `document_inline_sidebar_selector` |
| `topNavPlugin` | `top-nav.js` | `top_level_folders_as_top_control` |

## CSS Layers

1. `vue.css` — docsify base layout (CDN)
2. `code-one.css` — bruha theme (colors, typography, layout)
3. `color-themes.css` — palette overrides via `.palette-*` classes
4. `docsify-ext.css` — extension styles (indicator, folders, top nav, toggles)
