# Tables and Lists

## Simple Table

| Feature           | Default       | Description             |
| ----------------- | ------------- | ----------------------- |
| Theme controls    | `dark_toggle` | Bottom-right UI         |
| Sidebar indicator | `true`        | Vertical bar in sidebar |
| Header depth      | `3`           | Levels shown in sidebar |
| Top nav           | `true`        | Horizontal folder bar   |
| Hamburger         | `false`       | Sidebar toggle button   |
| GitHub corner     | `false`       | Repo ribbon             |

## Wider Table

| Config Key                         | Type   | Default       | Description                              |
| ---------------------------------- | ------ | ------------- | ---------------------------------------- |
| `theme_controls`                   | string | `dark_toggle` | `none`, `dark_toggle`, or `theme_picker` |
| `document_inline_sidebar_selector` | bool   | `true`        | Bar indicator tracks your position       |
| `top_level_folders_as_top_control` | bool   | `true`        | Horizontal nav bar at top                |
| `hamburger_menu`                   | bool   | `false`       | Toggle button for sidebar                |
| `github_corner`                    | bool   | `false`       | Corner ribbon links to repo              |

## Data Table

| Theme         | Accent Color | Background | Mood              |
| ------------- | ------------ | ---------- | ----------------- |
| Parchment     | `#4a6591`    | `#f7f6f3`  | Warm, traditional |
| Pylab         | `#d35400`    | `#faf9f7`  | Bold, scientific  |
| Blossom       | `#7e57c2`    | `#faf8fc`  | Soft, lavender    |
| Near-Midnight | `#7cafc2`    | `#1a1d23`  | Cool, dark        |

## Definition-Style Lists

Using bold terms with descriptions:

- **`build_sidebar(docs_folder, top_level_folders_only, content_folder)`** —
  Generates sidebar markdown from the filesystem. Returns the content as a
  string.
- **`write_sidebar(docs_folder, top_level_folders_only, content_folder)`** —
  Writes `_sidebar.md` to the content folder. Returns the file path.
- **`load_config(docs_folder)`** — Reads `bruha.yaml` and returns the config
  dict with defaults applied.
- **`generate_config_js(docs_folder)`** — Writes the generated JS config file.
  Returns the output path.

## Nested Task Lists

- [x] Create YAML config schema
- [x] Build Python config generator
- [x] Wire up pre-commit hook
- [x] Add color themes
  - [x] Parchment (warm light)
  - [x] Pylab (Eclipse-inspired)
  - [x] Blossom (lavender pastel)
  - [x] Near-Midnight (soft dark)
- [x] Add code block theme selector
  - [x] Implement theme switching
  - [x] Classic and vivid code styles
