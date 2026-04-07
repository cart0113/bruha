# Configuration Reference

All settings live in `docs/bruha.json`. Every key has a default — you only need
to include the keys you want to override.

## Example

A typical config that overrides a few defaults:

```json
{
  "site_name": "my-project",
  "light_theme": "blossom",
  "dark_theme": "near-midnight",
  "theme_controls": "theme_picker",
  "github_corner": true,
  "social_links": {
    "github": "https://github.com/yourname/yourrepo"
  }
}
```

## Full Config with Defaults

Every available key, with its default value. Comments describe what bruha uses
when the key is omitted.

```json
{
  "light_theme": "parchment",
  "dark_theme": null,
  "dark_mode_default": false,
  "code_highlighter": "vivid",
  "theme_controls": "dark_toggle",
  "style": "code-one",

  "top_level_folders_as_top_control": true,
  "content_folder": "src",
  "document_header_depth": 3,
  "document_inline_sidebar_selector": true,
  "folder_chevron": true,
  "page_section_collapsible": true,
  "hamburger_sidebar_toggle": true,
  "sidebar_indent": "1em",
  "search_style": "magnify-glass",

  "site_name": "",
  "site_description": "",
  "og_image": "assets/og-image.svg",
  "home_path": "overview/overview",
  "site_icon": "",
  "github_corner": false,
  "katex": false,

  "social_links": {
    "github": "",
    "facebook": "",
    "x": "",
    "instagram": "",
    "threads": "",
    "bluesky": ""
  },

  "prism_languages": [
    "python",
    "bash",
    "markdown",
    "yaml",
    "javascript",
    "json"
  ]
}
```

## Theme & Display

| Key                 | Default                | Description                                                                            |
| ------------------- | ---------------------- | -------------------------------------------------------------------------------------- |
| `light_theme`       | `parchment`            | Light mode theme. Options: `parchment`, `pylab`, `blossom`, `near-midnight`            |
| `dark_theme`        | value of `light_theme` | Dark mode theme. In `dark_toggle`/`none` modes, toggling dark mode also switches theme |
| `dark_mode_default` | `false`                | Start in dark mode                                                                     |
| `code_highlighter`  | `vivid`                | Syntax coloring. Options: `classic` (muted), `vivid` (high-saturation)                 |
| `theme_controls`    | `dark_toggle`          | Bottom-right UI. Options: `none`, `dark_toggle`, `theme_picker`                        |
| `style`             | `code-one`             | Base style variant                                                                     |

## Navigation & Sidebar

| Key                                | Default         | Description                                          |
| ---------------------------------- | --------------- | ---------------------------------------------------- |
| `top_level_folders_as_top_control` | `true`          | Top-level folders become horizontal nav bar buttons  |
| `content_folder`                   | `src`           | Subdirectory of `docs/` containing markdown content  |
| `document_header_depth`            | `3`             | Heading levels shown in sidebar for active document  |
| `document_inline_sidebar_selector` | `true`          | Vertical bar indicator showing current section       |
| `folder_chevron`                   | `true`          | Collapse arrows on folder headers                    |
| `page_section_collapsible`         | `true`          | Allow collapsing page sub-sections in sidebar        |
| `hamburger_sidebar_toggle`         | `true`          | Show sidebar toggle button in the top nav brand area |
| `sidebar_indent`                   | `1em`           | CSS indentation depth for sidebar nesting            |
| `search_style`                     | `magnify-glass` | Search UI. Options: `magnify-glass`, `box`           |

## Metadata & Links

| Key                | Default               | Description                                                                                 |
| ------------------ | --------------------- | ------------------------------------------------------------------------------------------- |
| `site_name`        | `""`                  | Browser tab title and OG tags                                                               |
| `site_description` | `""`                  | OG description for social sharing                                                           |
| `og_image`         | `assets/og-image.svg` | Social share image (relative to docs/)                                                      |
| `home_path`        | `overview/overview`   | Landing page hash route                                                                     |
| `site_icon`        | `""`                  | Path to SVG icon for nav bar and mobile header                                              |
| `github_corner`    | `false`               | Show GitHub corner ribbon                                                                   |
| `katex`            | `false`               | Enable LaTeX math rendering via KaTeX                                                       |
| `social_links`     | `{}`                  | Social links in nav bar. Keys: `github`, `facebook`, `x`, `instagram`, `threads`, `bluesky` |
| `prism_languages`  | `[python, bash, ...]` | Syntax highlighting languages loaded from CDN                                               |
