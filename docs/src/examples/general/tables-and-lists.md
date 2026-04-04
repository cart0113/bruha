# Tables and Lists

## Simple Table

| Feature           | Default | Description             |
| ----------------- | ------- | ----------------------- |
| Theme picker      | `true`  | Floating palette button |
| Sidebar indicator | `true`  | Vertical bar in sidebar |
| Header depth      | `3`     | Levels shown in sidebar |
| Top nav           | `true`  | Horizontal folder bar   |
| Hamburger         | `false` | Sidebar toggle button   |
| GitHub corner     | `false` | Repo ribbon             |

## Wider Table

| Config Key                         | Type | When True                                  | When False                       |
| ---------------------------------- | ---- | ------------------------------------------ | -------------------------------- |
| `theme_picker`                     | bool | Shows color palette picker in bottom-right | No picker, current palette stays |
| `document_inline_sidebar_selector` | bool | Bar indicator tracks your position         | Plain sidebar links              |
| `top_level_folders_as_top_control` | bool | Horizontal nav bar at top                  | Standard vertical sidebar        |
| `hamburger_menu`                   | bool | Toggle button for sidebar                  | Sidebar always visible           |
| `github_corner`                    | bool | Corner ribbon links to repo                | Clean top-right corner           |

## Data Table

| Palette   | Accent Color | Background | Mood              |
| --------- | ------------ | ---------- | ----------------- |
| Parchment | `#4a6591`    | `#f7f6f3`  | Warm, traditional |
| Arctic    | `#2563eb`    | `#f8fafc`  | Cool, modern      |
| Forest    | `#3d7a4a`    | `#f6f7f4`  | Natural, earthy   |
| Ocean     | `#0d7377`    | `#f5f9fa`  | Coastal, calm     |
| Mint      | `#2a9e70`    | `#f5faf8`  | Fresh, clean      |
| Sand      | `#a07840`    | `#faf8f5`  | Warm, desert      |
| Copper    | `#b85c2a`    | `#faf7f4`  | Bold, amber       |
| Plum      | `#882244`    | `#faf6f8`  | Rich, deep        |
| Dusk      | `#7c4d8a`    | `#faf7f8`  | Soft, evening     |
| Slate     | `#333333`    | `#fafafa`  | Neutral, minimal  |

## Definition-Style Lists

Using bold terms with descriptions:

- **`build_sidebar(docs_folder, top_level_folders_only)`** — Generates sidebar
  markdown from the filesystem. Returns the content as a string.
- **`write_sidebar(docs_folder, top_level_folders_only)`** — Writes
  `_sidebar.md` to the docs folder. Returns the file path.
- **`load_config(docs_folder)`** — Reads `docsify-ext.yaml` and returns the
  config dict.
- **`generate_config_js(docs_folder)`** — Writes the generated JS config file.
  Returns the output path.

## Nested Task Lists

- [x] Create YAML config schema
- [x] Build Python config generator
- [x] Wire up pre-commit hook
- [ ] Add more color palettes
  - [ ] Midnight (dark theme)
  - [ ] Ivory (high contrast light)
- [ ] Add code block theme selector
  - [x] Implement palette switching
  - [ ] Separate code palette from page palette
