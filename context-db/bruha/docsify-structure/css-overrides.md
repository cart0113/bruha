---
description: CSS override pitfalls — code-one.css !important resets, how to override sidebar properties, bar indicator overlay technique
---

# CSS Override Patterns

## code-one.css Blanket Resets

`code-one.css` applies `!important` resets to all sidebar list and link elements:

```css
.sidebar-nav ul, .sidebar-nav ul ul {
  padding-left: 0 !important;
  margin-left: 0 !important;
  /* ... other resets ... */
}

.sidebar-nav li, .sidebar-nav ul ul li {
  padding-left: 0 !important;
  margin-left: 0 !important;
}

.sidebar-nav li > a {
  margin: 0 !important;    /* shorthand — sets ALL four margins */
  border: none !important;
}
```

**Any override in `docsify-ext.css` MUST also use `!important`** or it will
silently fail. The `margin: 0 !important` shorthand is especially easy to
miss — it blocks `margin-left`, `margin-right`, etc. even when set with a
more specific selector.

## Bar Indicator: Overlay Technique

The sidebar bar indicator uses a two-layer approach:

### Layer 1: Continuous line (on the `<ul>`)

```css
li.sb-active-page > ul {
  border-left: 4px solid color-mix(in srgb, var(--t-accent) 20%, transparent);
  margin-left: calc(1em - Xpx) !important;  /* aligns with chevron */
  padding-left: 0 !important;               /* MUST be 0, see below */
}
```

The `padding-left: 0` is critical. Any padding creates a gap between the
`ul` border and the `a` elements inside, preventing the overlay from
aligning.

### Layer 2: Highlight segments (on the `<a>` elements)

Both `sb-bar-level` (H2) and `sb-text-level` (H3+) use the same overlay
technique — both get a left border indicator:

```css
li.sb-bar-level > a,
li.sb-text-level > a {
  border-left: 4px solid transparent !important;
  margin-left: -4px !important;  /* pulls left to overlap ul border */
  padding-left: 1em !important;  /* text indentation (replaces ul padding) */
}
```

The negative margin (`-4px` = border width) pulls the `a` element's border
box left so its `border-left` sits exactly on top of the `ul`'s
`border-left`. On hover/click, the `a`'s border color changes from
transparent to a visible color, creating the highlight effect.

**Important:** Both levels use `margin-left: -4px`. An earlier version used
`-10px` for `sb-text-level` which pulled H3+ items too far left of the
continuous bar.

### Why padding-left: 0 on the ul

If the `ul` has `padding-left: 0.5em`, then content inside starts `0.5em`
after the border. The `a` with `margin-left: -4px` only crosses 4px into
that gap — it never reaches the border. Result: the highlight line appears
to the right of the continuous line.

With `padding-left: 0`, content starts immediately after the border, so
`margin-left: -4px` lands exactly on the border. All text indentation
moves to `padding-left` on the `a` elements themselves.

### Nested Sub-Sidebar Indentation

H3+ headings are nested inside `ul ul` under the active page. The
`padding-left` on this nested `ul` controls how far H3+ items indent
relative to H2 items. Currently `0.4em` — chosen to keep H3 items close
to H2 items without collision. Using `1em` (the original value) caused
2.5x too much indent.

### Alignment with Chevron

The continuous line's horizontal position is set by `margin-left` on the
`ul`. The target is the tip of the down-pointing chevron on the active
page link. The chevron is positioned at `left: 0.8em` in the `a::before`
pseudo-element. Fine-tuning requires visual iteration — `calc(1em - Xpx)`
where X is adjusted by 0.5-1px increments.

## Top Nav: Scroll Offset and Padding

When `ext-has-top-nav` is active, the fixed nav bar covers the top ~62px
of the viewport. Two CSS rules and one JS handler compensate:

1. **`section.content { padding-top: 68px }`** — pushes page content below
   the bar so the first heading isn't hidden.
2. **`.markdown-section { padding-bottom: calc(100vh - 75px) }`** — adds
   scroll room below the last heading so it can be scrolled to the top of
   the viewport. Without this, pages with little content after their last
   heading hit `maxScroll` before the heading reaches the nav bar.
3. **`top-nav.js scrollToId()`** — on `doneEach` and `hashchange`, scrolls
   to the `?id=` target element at `offsetTop - 75px`. Docsify's built-in
   `topMargin` config is set but unreliable with `auto2top: true`, so the
   plugin handles scrolling directly. The `topMargin: 75` config in
   `index.html` is kept as a belt-and-suspenders backup.
