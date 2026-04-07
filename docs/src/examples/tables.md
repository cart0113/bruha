# Tables

## Default Table

```markdown
| Theme     | Accent    | Mood              |
| --------- | --------- | ----------------- |
| Parchment | `#4a6591` | Warm, traditional |
| Pylab     | `#d35400` | Bold, scientific  |
| Blossom   | `#7e57c2` | Soft, lavender    |
```

| Theme     | Accent    | Mood              |
| --------- | --------- | ----------------- |
| Parchment | `#4a6591` | Warm, traditional |
| Pylab     | `#d35400` | Bold, scientific  |
| Blossom   | `#7e57c2` | Soft, lavender    |

## Wider Table

```markdown
| Config Key                         | Type   | Default       | Description                              |
| ---------------------------------- | ------ | ------------- | ---------------------------------------- |
| `theme_controls`                   | string | `dark_toggle` | `none`, `dark_toggle`, or `theme_picker` |
| `document_inline_sidebar_selector` | bool   | `true`        | Bar indicator tracks your position       |
| `top_level_folders_as_top_control` | bool   | `true`        | Horizontal nav bar at top                |
| `hamburger_sidebar_toggle`         | bool   | `true`        | Toggle button for sidebar                |
| `github_corner`                    | bool   | `false`       | Corner ribbon links to repo              |
```

| Config Key                         | Type   | Default       | Description                              |
| ---------------------------------- | ------ | ------------- | ---------------------------------------- |
| `theme_controls`                   | string | `dark_toggle` | `none`, `dark_toggle`, or `theme_picker` |
| `document_inline_sidebar_selector` | bool   | `true`        | Bar indicator tracks your position       |
| `top_level_folders_as_top_control` | bool   | `true`        | Horizontal nav bar at top                |
| `hamburger_sidebar_toggle`         | bool   | `true`        | Toggle button for sidebar                |
| `github_corner`                    | bool   | `false`       | Corner ribbon links to repo              |

## Striped Table

```markdown
<!-- table-striped -->

| Feature        | Default       | Description            |
| -------------- | ------------- | ---------------------- |
| Theme controls | `dark_toggle` | Bottom-right UI        |
| Sidebar bar    | `true`        | Vertical position bar  |
| Header depth   | `3`           | Heading levels shown   |
| Top nav        | `true`        | Horizontal folder tabs |
| Hamburger      | `true`        | Sidebar toggle button  |
| GitHub corner  | `false`       | Repo ribbon            |
```

<!-- table-striped -->

| Feature        | Default       | Description            |
| -------------- | ------------- | ---------------------- |
| Theme controls | `dark_toggle` | Bottom-right UI        |
| Sidebar bar    | `true`        | Vertical position bar  |
| Header depth   | `3`           | Heading levels shown   |
| Top nav        | `true`        | Horizontal folder tabs |
| Hamburger      | `true`        | Sidebar toggle button  |
| GitHub corner  | `false`       | Repo ribbon            |

## Bordered Table

```markdown
<!-- table-bordered -->

| Status  | Code | Meaning               |
| ------- | ---- | --------------------- |
| OK      | 200  | Request succeeded     |
| Created | 201  | Resource created      |
| Bad     | 400  | Malformed request     |
| Error   | 500  | Internal server error |
```

<!-- table-bordered -->

| Status  | Code | Meaning               |
| ------- | ---- | --------------------- |
| OK      | 200  | Request succeeded     |
| Created | 201  | Resource created      |
| Bad     | 400  | Malformed request     |
| Error   | 500  | Internal server error |

## Compact Table

```markdown
<!-- table-compact -->

| Key           | Type   | Default     |
| ------------- | ------ | ----------- |
| `light_theme` | string | `parchment` |
| `dark_theme`  | string | (inherits)  |
| `style`       | string | `code-one`  |
| `katex`       | bool   | `false`     |
| `site_name`   | string | `""`        |
| `og_image`    | string | `og.svg`    |
```

<!-- table-compact -->

| Key           | Type   | Default     |
| ------------- | ------ | ----------- |
| `light_theme` | string | `parchment` |
| `dark_theme`  | string | (inherits)  |
| `style`       | string | `code-one`  |
| `katex`       | bool   | `false`     |
| `site_name`   | string | `""`        |
| `og_image`    | string | `og.svg`    |

## Borderless Table

```markdown
<!-- table-borderless -->

| Shortcut          | Action         |
| ----------------- | -------------- |
| <kbd>Ctrl+K</kbd> | Search docs    |
| <kbd>Ctrl+/</kbd> | Toggle sidebar |
| <kbd>Escape</kbd> | Close overlay  |
```

<!-- table-borderless -->

| Shortcut          | Action         |
| ----------------- | -------------- |
| <kbd>Ctrl+K</kbd> | Search docs    |
| <kbd>Ctrl+/</kbd> | Toggle sidebar |
| <kbd>Escape</kbd> | Close overlay  |

## Combined: Striped + Bordered

```markdown
<!-- table-striped table-bordered -->

| Language   | Extension | Prism ID     |
| ---------- | --------- | ------------ |
| Python     | `.py`     | `python`     |
| JavaScript | `.js`     | `javascript` |
| Bash       | `.sh`     | `bash`       |
| YAML       | `.yaml`   | `yaml`       |
| CSS        | `.css`    | `css`        |
| JSON       | `.json`   | `json`       |
```

<!-- table-striped table-bordered -->

| Language   | Extension | Prism ID     |
| ---------- | --------- | ------------ |
| Python     | `.py`     | `python`     |
| JavaScript | `.js`     | `javascript` |
| Bash       | `.sh`     | `bash`       |
| YAML       | `.yaml`   | `yaml`       |
| CSS        | `.css`    | `css`        |
| JSON       | `.json`   | `json`       |

## Combined: Compact + Striped

```markdown
<!-- table-compact table-striped -->

| Var              | Light     | Dark      |
| ---------------- | --------- | --------- |
| `--t-bg`         | `#f7f6f3` | `#1a1d23` |
| `--t-text`       | `#2a2e38` | `#c8ccd4` |
| `--t-accent`     | `#4a6591` | `#7cafc2` |
| `--t-border`     | `#c8c2b8` | `#3a3e48` |
| `--t-sidebar-bg` | `#edeae3` | `#15171c` |
| `--t-code-bg`    | `#e9eaed` | `#1e2230` |
```

<!-- table-compact table-striped -->

| Var              | Light     | Dark      |
| ---------------- | --------- | --------- |
| `--t-bg`         | `#f7f6f3` | `#1a1d23` |
| `--t-text`       | `#2a2e38` | `#c8ccd4` |
| `--t-accent`     | `#4a6591` | `#7cafc2` |
| `--t-border`     | `#c8c2b8` | `#3a3e48` |
| `--t-sidebar-bg` | `#edeae3` | `#15171c` |
| `--t-code-bg`    | `#e9eaed` | `#1e2230` |

## Data Table

```markdown
<!-- table-striped table-bordered -->

| Theme         | Accent Color | Background | Mood              |
| ------------- | ------------ | ---------- | ----------------- |
| Parchment     | `#4a6591`    | `#f7f6f3`  | Warm, traditional |
| Pylab         | `#d35400`    | `#faf9f7`  | Bold, scientific  |
| Blossom       | `#7e57c2`    | `#faf8fc`  | Soft, lavender    |
| Near-Midnight | `#7cafc2`    | `#1a1d23`  | Cool, dark        |
```

<!-- table-striped table-bordered -->

| Theme         | Accent Color | Background | Mood              |
| ------------- | ------------ | ---------- | ----------------- |
| Parchment     | `#4a6591`    | `#f7f6f3`  | Warm, traditional |
| Pylab         | `#d35400`    | `#faf9f7`  | Bold, scientific  |
| Blossom       | `#7e57c2`    | `#faf8fc`  | Soft, lavender    |
| Near-Midnight | `#7cafc2`    | `#1a1d23`  | Cool, dark        |
