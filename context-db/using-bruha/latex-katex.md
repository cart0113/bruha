---
description: "Optional: math equations — enable KaTeX and use LaTeX syntax in markdown"
status: stable
---

# LaTeX Math with KaTeX

Bruha can render LaTeX math equations via the
[docsify-katex](https://github.com/upupming/docsify-katex) plugin. It is
opt-in — disabled by default.

## Enabling

Set `katex: true` in `bruha.yaml` and rebuild. This loads KaTeX CSS/JS and the
docsify-katex plugin from CDN. No local files are needed.

## Syntax

- **Inline math**: wrap with single dollars — `$x^2 + 1$`
- **Display math**: wrap with double dollars on their own lines:

```markdown
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

## What KaTeX supports

KaTeX covers most LaTeX math: fractions, exponents, subscripts, Greek letters,
matrices (`pmatrix`, `bmatrix`, `vmatrix`), summations, integrals, limits,
aligned equations, and common operators. See
https://katex.org/docs/supported for the full list.

## Gotchas

- Dollar signs meant as currency (e.g. `$100`) can trigger false rendering.
  Escape them with a backslash: `\$100`.
- KaTeX is a subset of LaTeX — some advanced packages (TikZ, chemfig) are not
  supported.
