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

```css
li.sb-bar-level > a {
  border-left: 4px solid transparent !important;
  margin-left: -4px !important;  /* pulls left to overlap ul border */
  padding-left: 1em !important;  /* text indentation (replaces ul padding) */
}
```

The negative margin (`-4px` = border width) pulls the `a` element's border
box left so its `border-left` sits exactly on top of the `ul`'s
`border-left`. On hover/click, the `a`'s border color changes from
transparent to a visible color, creating the highlight effect.

### Why padding-left: 0 on the ul

If the `ul` has `padding-left: 0.5em`, then content inside starts `0.5em`
after the border. The `a` with `margin-left: -4px` only crosses 4px into
that gap — it never reaches the border. Result: the highlight line appears
to the right of the continuous line.

With `padding-left: 0`, content starts immediately after the border, so
`margin-left: -4px` lands exactly on the border. All text indentation
moves to `padding-left` on the `a` elements themselves.

### Alignment with Chevron

The continuous line's horizontal position is set by `margin-left` on the
`ul`. The target is the tip of the down-pointing chevron on the active
page link. The chevron is positioned at `left: 0.8em` in the `a::before`
pseudo-element. Fine-tuning requires visual iteration — `calc(1em - Xpx)`
where X is adjusted by 0.5-1px increments.
