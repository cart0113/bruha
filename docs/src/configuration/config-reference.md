# Configuration Reference

All bruha settings live in `docs/bruha.yaml`. Every key has a default — you only
need to include the keys you want to override.

## Example Config

A minimal config that only overrides a few defaults:

```yaml
light_theme: blossom
dark_theme: near-midnight
theme_controls: theme_picker
github_corner: true
social_links:
  github: https://github.com/yourname/yourrepo
```

## Keys

### light_theme

**Type:** string  
**Default:** `parchment`

Theme for light mode. Options: `parchment`, `pylab` (Eclipse-inspired),
`blossom` (lavender pastel), `near-midnight` (soft dark).

### dark_theme

**Type:** string  
**Default:** value of `light_theme`

Theme for dark mode. When set to a different theme than `light_theme`, toggling
dark mode also switches the color theme. Only applies in `dark_toggle` and
`none` modes — `theme_picker` lets the user override via the palette panel.

### theme_controls

**Type:** string  
**Default:** `dark_toggle`

Bottom-right UI controls. Options:

- `none` — no controls
- `dark_toggle` — moon/sun button for light/dark switching
- `theme_picker` — palette button opening a panel with theme swatches, dark mode
  toggle, and vivid code toggle

### dark_mode_default

**Type:** boolean  
**Default:** `false`

Start in dark mode. Every theme has a dark variant.

### code_highlighter

**Type:** string  
**Default:** `vivid`

Syntax coloring style. Options: `classic` (muted), `vivid` (high-saturation).

### document_inline_sidebar_selector

**Type:** boolean  
**Default:** `true`

Show a vertical bar indicator in the sidebar that spans the current document's
section. The bar highlights which heading you're currently viewing.

### document_header_depth

**Type:** integer  
**Default:** `3`

How many heading levels appear in the sidebar for the active document. A value
of `3` shows the document title, h2 headings, and h3 headings. Maps directly to
docsify's `subMaxLevel`.

### top_level_folders_as_top_control

**Type:** boolean  
**Default:** `true`

Top-level folders become buttons in a horizontal navigation bar at the top of
the page. The sidebar shows only the active folder's children. When enabled, the
sidebar builder validates that all top-level items are folders.

### hamburger_menu

**Type:** boolean  
**Default:** `false`

Show docsify's default sidebar toggle button (hamburger icon).

### github_corner

**Type:** boolean  
**Default:** `false`

Show the GitHub corner ribbon linking to the repo.

### content_folder

**Type:** string  
**Default:** `src`

Subdirectory of `docs/` containing markdown content. Keeps content separate from
themes, config, and docsify infrastructure.

### folder_chevron

**Type:** boolean  
**Default:** `true`

Show collapse chevron arrows on folder headers in the sidebar.

### page_section_collapsible

**Type:** boolean  
**Default:** `true`

Allow collapsing page sub-sections by re-clicking the active page header in the
sidebar.

### search_style

**Type:** string  
**Default:** `magnify-glass`

Style of the search control in the top nav bar. Options:

- `magnify-glass` — icon button that opens a search overlay
- `box` — always-visible input field

### sidebar_indent

**Type:** string  
**Default:** `1em`

CSS value for sidebar indentation depth. Sets the `--t-sidebar-indent` custom
property.

### site_icon

**Type:** string  
**Default:** `""` (empty — no icon)

Path to an SVG icon displayed in the top nav bar and mobile header.

### social_links

**Type:** object  
**Default:** `{}` (empty — no links)

Social media links shown in the top nav bar and mobile drawer. Keys are platform
names, values are URLs. Supported platforms: `github`, `facebook`, `x` (or
`twitter`), `instagram`, `threads`, `bluesky`.

```yaml
social_links:
  github: https://github.com/yourname/yourrepo
  bluesky: https://bsky.app/profile/yourhandle
```
