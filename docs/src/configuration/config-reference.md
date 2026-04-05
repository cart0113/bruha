# Configuration Reference

All bruha settings live in `docs/docsify-ext.yaml`. Every key is required —
there are no defaults.

## Example Config

```yaml
theme_name: code-one
theme_picker: true
document_inline_sidebar_selector: true
document_header_depth: 3
top_level_folders_as_top_control: true
hamburger_menu: false
github_corner: false
```

## Keys

### theme_name

**Type:** string

The CSS theme to use. Currently the only theme is `code-one`.

### theme_picker

**Type:** boolean

When `true`, a floating palette button appears in the bottom-right corner.
Clicking it opens a panel with 10 color palette swatches. The selected palette
is saved to localStorage.

### document_inline_sidebar_selector

**Type:** boolean

When `true`, shows a vertical bar indicator in the sidebar that spans the
current document's section. The bar highlights which heading you're currently
viewing.

### document_header_depth

**Type:** integer

Controls how many heading levels appear in the sidebar for the active document.
A value of `3` shows the document title, h1 headings, and h2 headings. Maps
directly to docsify's `subMaxLevel`.

### top_level_folders_as_top_control

**Type:** boolean

When `true`, top-level folders become buttons in a horizontal navigation bar at
the top of the page. The sidebar shows only the active folder's children. When
enabled, the sidebar builder validates that all top-level items are folders — no
loose `.md` files are allowed at the docs root.

### hamburger_menu

**Type:** boolean

When `true`, shows docsify's default sidebar toggle button (hamburger icon). Set
to `false` to hide it.

### github_corner

**Type:** boolean

When `true`, shows the GitHub corner ribbon linking to the repo. Set to `false`
to hide it.

## Another Header
