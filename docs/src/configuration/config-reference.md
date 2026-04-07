# Configuration Reference

All settings live in `docs/bruha.yaml`. Every key has a default -- you only need
to include the keys you want to override.

## Example

```yaml
light_theme: blossom
dark_theme: near-midnight
theme_controls: theme_picker
github_corner: true
social_links:
  github: https://github.com/yourname/yourrepo
```

## Theme & Display

| Key                 | Default                | Description                                                                            |
| ------------------- | ---------------------- | -------------------------------------------------------------------------------------- |
| `light_theme`       | `parchment`            | Light mode theme. Options: `parchment`, `pylab`, `blossom`, `near-midnight`            |
| `dark_theme`        | value of `light_theme` | Dark mode theme. In `dark_toggle`/`none` modes, toggling dark mode also switches theme |
| `dark_mode_default` | `false`                | Start in dark mode                                                                     |
| `code_highlighter`  | `vivid`                | Syntax coloring. Options: `classic` (muted), `vivid` (high-saturation)                 |
| `theme_controls`    | `dark_toggle`          | Bottom-right UI. Options: `none`, `dark_toggle`, `theme_picker`                        |

## Navigation & Sidebar

| Key                                | Default         | Description                                                                                            |
| ---------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| `top_level_folders_as_top_control` | `true`          | Top-level folders become horizontal nav bar buttons. When enabled, all top-level items must be folders |
| `content_folder`                   | `src`           | Subdirectory of `docs/` containing markdown content                                                    |
| `document_header_depth`            | `3`             | Heading levels shown in sidebar for active document                                                    |
| `document_inline_sidebar_selector` | `true`          | Vertical bar indicator showing current section                                                         |
| `folder_chevron`                   | `true`          | Collapse arrows on folder headers                                                                      |
| `page_section_collapsible`         | `true`          | Allow collapsing page sub-sections in sidebar                                                          |
| `hamburger_menu`                   | `false`         | Show docsify's default sidebar toggle button                                                           |
| `sidebar_indent`                   | `1em`           | CSS indentation depth for sidebar nesting                                                              |
| `search_style`                     | `magnify-glass` | Search UI. Options: `magnify-glass`, `box`                                                             |

## Metadata & Links

| Key             | Default | Description                                                                                 |
| --------------- | ------- | ------------------------------------------------------------------------------------------- |
| `site_icon`     | `""`    | Path to SVG icon for nav bar and mobile header                                              |
| `github_corner` | `false` | Show GitHub corner ribbon                                                                   |
| `social_links`  | `{}`    | Social links in nav bar. Keys: `github`, `facebook`, `x`, `instagram`, `threads`, `bluesky` |
