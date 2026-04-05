---
description: YAML config schema — all keys, types, defaults, and what they control
---

# Config Schema

The config file lives at `docs/bruha.yaml`. All keys have sensible defaults —
users only need to include keys they want to override. The Python config
generator merges user YAML on top of defaults.

## Keys

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `light_theme` | string | `parchment` | Theme for light mode: `parchment`, `pylab` (Eclipse-inspired), `blossom` (lavender pastel), or `near-midnight` (soft dark) |
| `dark_theme` | string | `light_theme` | Theme for dark mode (defaults to `light_theme` if not set). Set to a different theme to swap themes when toggling dark mode |
| `theme_controls` | string | `dark_toggle` | Bottom-right UI: `none`, `dark_toggle` (moon/sun), or `theme_picker` (palette panel with swatches, dark toggle, vivid code toggle) |
| `dark_mode_default` | bool | `false` | Start in dark mode (every theme has light + dark variants) |
| `code_highlighter` | string | `vivid` | Syntax coloring: `classic` (muted) or `vivid` (high-saturation) |
| `document_inline_sidebar_selector` | bool | `true` | Show the sidebar bar indicator for document sections |
| `document_header_depth` | int | `3` | How many heading levels to show in sidebar (3 = title + h2 + h3) |
| `top_level_folders_as_top_control` | bool | `true` | Render top-level folders as a horizontal nav bar at page top |
| `hamburger_menu` | bool | `false` | Show the docsify sidebar toggle button |
| `github_corner` | bool | `false` | Show the GitHub corner link |
| `content_folder` | string | `src` | Subdirectory of docs/ containing markdown content |
| `folder_chevron` | bool | `true` | Show collapse chevron on folder headers |
| `page_section_collapsible` | bool | `true` | Allow collapsing page sub-sections by re-clicking the page header |
| `search_style` | string | `magnify-glass` | Style of the search control in the top nav bar |
| `sidebar_indent` | string | `1em` | CSS value for sidebar indentation depth (sets `--t-sidebar-indent`) |
| `site_icon` | string | `""` | Path to SVG icon displayed in the top nav bar |
| `social_links` | dict | `{}` | Social media links in top nav (keys: platform names, values: URLs) |

## Validation

When `top_level_folders_as_top_control` is true, the sidebar builder
enforces that all top-level items in the content folder are directories.
No loose `.md` files are allowed at the root level. Violation raises
`SidebarError`.
