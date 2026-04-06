---
description: Mobile responsive layout — breakpoint, hamburger drawer, how to add mobile versions of new features
---

# Mobile Support

## Breakpoint

`768px` — matches docsify's built-in mobile cut-off. All mobile-specific
behaviour lives behind `@media (max-width: 768px)` in `mobile-nav.css`.

## What Changes on Mobile

| Desktop element              | Mobile behaviour                        |
| ---------------------------- | --------------------------------------- |
| Top nav bar (`.ext-top-nav`) | Hidden; replaced by hamburger drawer    |
| Sidebar (`.sidebar`)         | Hidden; sidebar tree cloned into drawer |
| Theme controls (`.tc-wrap`)  | Hidden; toggles appear in drawer footer |
| Search (top bar magnify/box) | Hidden; search input in drawer          |
| Social links (top bar)       | Hidden; links in drawer footer          |
| Content area                 | Full-width, reduced padding             |

## Hamburger Drawer Layout

```
┌─────────────────────────┐
│ [icon] bruha        [×] │  header (fixed)
├─────────────────────────┤
│ 🔍 Search docs...       │  search (fixed)
├─────────────────────────┤
│ [Overview] [Examples]   │  folder tabs (scrollable)
├─────────────────────────┤
│  Page 1                 │  sidebar tree for active
│  Page 2                 │  folder (scrollable)
│    ▸ Sub-section        │
├─────────────────────────┤
│ Dark mode        [═══]  │  footer (fixed)
│ Theme       ● ● ● ●    │
│ Vivid code       [═══]  │
│ 🔗 GitHub               │
└─────────────────────────┘
```

Header, search, and footer stay pinned. The middle (tabs + tree) scrolls.

## Files

| File                         | Purpose                                                                               |
| ---------------------------- | ------------------------------------------------------------------------------------- |
| `docs/themes/mobile-nav.css` | All mobile styles + the `@media` block that hides desktop / shows mobile elements     |
| `docs/themes/mobile-nav.js`  | Docsify plugin: builds hamburger button, drawer DOM, syncs sidebar on each navigation |

## How to Add Mobile Support for a New Feature

1. **Build the desktop version** in its own CSS/JS as usual.
2. **Add mobile DOM** in `mobile-nav.js`:
   - One-time elements → `buildDrawer()`
   - Per-navigation elements → `syncDrawer()`
3. **Add mobile styles** in `mobile-nav.css` (base styles for the new elements).
4. **Add show/hide rules** in the `@media (max-width: 768px)` block at the
   bottom of `mobile-nav.css`:
   - Hide the desktop element with `display: none !important`
   - Show the mobile element (remove `display: none` set in base styles)

## Plugin Load Order

`mobileNavPlugin` runs **before** `topNavPlugin` in the docsify plugins array.
This matters because `mobileNavPlugin.syncDrawer()` clones the sidebar HTML
before `topNavPlugin` modifies it (adding `ext-top-hidden` classes, hiding
folder headers).

## Drawer Sidebar Sync

On every `doneEach` (page navigation), `syncDrawer()`:

1. Clones `.sidebar-nav` innerHTML into the drawer
2. Rebuilds folder tabs from top-level `<li>` elements
3. Expands all collapsed folders (desktop collapse state is irrelevant)
4. Re-attaches click handlers for folder collapse and page link navigation
5. Activates the tab matching the current URL
