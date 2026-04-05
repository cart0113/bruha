---
description: CSS class system — all sb-* and ext-* classes, what sets them, what they control
---

# CSS Class System

## HTML-level Toggle Classes

Set by `docsify-ext-config.js` on page load. Gate entire feature sets:

| Class | Config Key | Effect |
|-------|-----------|--------|
| `ext-no-hamburger` | `hamburger_menu: false` | Hides sidebar toggle button |
| `ext-no-github-corner` | `github_corner: false` | Hides repo ribbon |
| `ext-has-top-nav` | `top_level_folders_as_top_control` | Shifts layout for top bar |
| `ext-folder-chevron` | `folder_chevron` | Shows chevron arrows on folders/pages |
| `ext-inline-sidebar` | `document_inline_sidebar_selector` | Enables heading hierarchy styles |

## Sidebar State Classes (sb-*)

Set by `sidebar-nav.js` in `applyActiveStates()`. Cleared and re-applied on
every `doneEach`, `hashchange`, and MutationObserver trigger:

| Class | Set On | Meaning |
|-------|--------|---------|
| `sb-page-link` | `<li>` | Has a direct `<a>` child (is a page link, not a folder) |
| `sb-active-page` | `<li>` | The currently rendered page |
| `sb-has-sections` | `<li>` | Active page that has an `app-sub-sidebar` (headings) |
| `sb-current` | `<li>` | The sub-section currently scrolled to (matched by `?id=`) |
| `sb-bar-level` | `<li>` | H2 heading in sub-sidebar (gets border-left indicator) |
| `sb-text-level` | `<li>` | H3+ heading in sub-sidebar (text highlight only) |

**Important:** `applyActiveStates` does NOT clear `sb-page-collapsed`. That
class is managed exclusively by `collapsible-folders.js`.

## Collapse Classes

### Page Collapse (collapsible-folders.js)

| Class | Set On | Meaning |
|-------|--------|---------|
| `sb-page-collapsed` | `<li>` with `sb-active-page` | Sub-sections hidden |

CSS effect: `.sidebar-nav li.sb-page-collapsed > ul { display: none !important; }`

### Folder Collapse (collapsible-folders.js)

| Class | Set On | Meaning |
|-------|--------|---------|
| `ext-folder` | `<li>` | Folder node (header is `<p>` or `<strong>`, not `<a>`) |
| `ext-folder-collapsed` | `<li>` with `ext-folder` | Folder children hidden |

CSS effect: `.sidebar-nav li.ext-folder.ext-folder-collapsed > ul { display: none; }`

### Top Nav (top-nav.js)

| Class | Set On | Meaning |
|-------|--------|---------|
| `ext-top-hidden` | `<li>` | Top-level folder not matching active tab |
| `ext-top-active` | `<button>` | Active tab in top nav bar |

## Chevron Direction (CSS ::before)

All chevrons use rotated CSS borders (`border-right` + `border-bottom`):

| State | Transform | Visual |
|-------|----------|--------|
| Default (`sb-page-link`) | `rotate(-45deg)` | Points right `>` |
| Expanded (`sb-has-sections`) | `rotate(45deg)` | Points down `v` |
| Collapsed (`sb-has-sections.sb-page-collapsed`) | `rotate(-45deg)` | Points right `>` |
| Folder expanded (`ext-folder`) | `rotate(45deg)` | Points down `v` |
| Folder collapsed (`ext-folder.ext-folder-collapsed`) | `rotate(-45deg)` | Points right `>` |

Transition: `transform 0.15s ease`
