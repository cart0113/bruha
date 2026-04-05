---
description: YAML config schema — all keys, types, and what they control
---

# Config Schema

The config file lives at `docs/docsify-ext.yaml`. All keys are required
(no defaults). The Python config generator validates this on every build.

## Keys

| Key | Type | Description |
|-----|------|-------------|
| `theme_name` | string | Color theme: `parchment`, `pylab`, `blossom`, or `midnight` |
| `theme_controls` | string | Bottom-right UI: `none`, `dark_toggle` (moon/sun), or `theme_picker` (palette panel with swatches + dark toggle) |
| `dark_mode_default` | bool | Start in dark mode (every theme has light + dark variants) |
| `document_inline_sidebar_selector` | bool | Show the sidebar bar indicator for document sections |
| `document_header_depth` | int | How many heading levels to show in sidebar (3 = title + h1 + h2) |
| `top_level_folders_as_top_control` | bool | Render top-level folders as a horizontal nav bar at page top |
| `hamburger_menu` | bool | Show the docsify sidebar toggle button |
| `github_corner` | bool | Show the GitHub corner link |
| `content_folder` | string | Subdirectory of docs/ containing markdown content (default: `src`) |
| `folder_chevron` | bool | Show collapse chevron on folder headers |
| `page_section_collapsible` | bool | Allow collapsing page sub-sections by re-clicking the page header |

## Validation

When `top_level_folders_as_top_control` is true, the sidebar builder
enforces that all top-level items in `docs/` are directories. No loose
`.md` files are allowed at the root level. Violation raises `SidebarError`.
