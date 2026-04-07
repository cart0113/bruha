---
description: Navigation and event flow — click handling, hashchange, hooks, MutationObserver, and ?id= routing
---

# Navigation and Event Flow

## URL Structure

Docsify uses hash-based routing:

```
http://localhost:3000/#/overview/overview?id=quick-start
                      ├── page path ────┤├── section ──┤
```

- `#/overview/overview` — page path (maps to `docs/src/overview/overview.md`)
- `?id=quick-start` — section anchor (scrolls to H2/H3 heading)
- No `?id=` — page top

## Click Handling in collapsible-folders.js

The click handler is attached in **capture phase** (third arg `true`) on
`.sidebar-nav`. It intercepts clicks on the active page's own link before
docsify sees them.

Guard checks (bail out if any fail):

1. Click target must be an `<a>` element
2. Closest `<li>` must have `sb-active-page`
3. The `<a>` must be a direct child of the `<li>` (not a sub-sidebar link)
4. The `<li>` must have a child `<ul>` (sub-sections exist)

All matched clicks get `preventDefault()` + `stopImmediatePropagation()` to
prevent docsify from re-rendering (see sidebar-dom.md for why this matters).

### Three States

1. **Collapsed** (`sb-page-collapsed` set): remove the class (expand)
2. **On a sub-section** (`?id=` in URL): navigate to page top via
   `history.pushState` + dispatch `hashchange` + `scrollTo(0,0)`
3. **At page top** (no `?id=`): add `sb-page-collapsed` (collapse)

### Why history.pushState Instead of Setting location.hash

Setting `window.location.hash` directly triggers docsify's router, which
re-renders the page and destroys the `app-sub-sidebar`. Using
`history.pushState` changes the URL without triggering docsify, then manually
dispatching `hashchange` updates only our sidebar state classes (via
`sidebar-indicator.js` listener).

## Event/Hook Lifecycle

### Docsify Hooks (registered by plugins)

| Hook            | When                    | Used By                                                                                                                                         |
| --------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `hook.ready`    | DOM ready, once         | `sidebar-indicator.js` (MutationObserver + hashchange listener), `collapsible-folders.js` (click handler)                                       |
| `hook.doneEach` | After every page render | `sidebar-indicator.js` (applyActiveStates), `collapsible-folders.js` (setupFolders), `top-nav.js` (buildTopNav + applyFolderState + scrollToId) |

### hashchange Listeners

- `sidebar-indicator.js`: calls `applyActiveStates()` — clears and re-applies
  all `sb-*` classes
- `top-nav.js`: calls `applyFolderState()` — updates active tab and folder
  visibility; also calls `scrollToId()` via `requestAnimationFrame` to scroll
  the `?id=` heading into view with the top nav offset

### MutationObserver (sidebar-indicator.js)

Watches `.sidebar-nav` for `class` attribute changes on any descendant:

- Fires `applyActiveStates()` when classes change
- Disconnects itself before making changes (prevents infinite loop)
- Reconnects after changes are applied

This ensures sidebar state stays correct when other plugins modify classes
(e.g., `collapsible-folders.js` toggling `sb-page-collapsed`).

## Folder Collapse (setupFolders)

Runs on every `doneEach`. For each `<li>` with a `<p>` or `<strong>` header:

1. Marks it with `ext-folder` class (once)
2. Attaches click listener on the header to toggle `ext-folder-collapsed`
3. Auto-expands folders containing the current page path
4. Auto-collapses folders not containing the current page
5. Skips top-level folders when `top_level_folders_as_top_control` is active

## findActivePage Priority (sidebar-indicator.js)

1. Look for `.app-sub-sidebar` and return its parent `<li>` (most reliable)
2. Match page links by URL path (strips `?id=`)
3. Fall back to docsify's `.active` class (least reliable)
