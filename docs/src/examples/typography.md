# Typography

This page demonstrates how text elements render in the bruha theme. Each example
shows the markdown source, then the rendered result.

## Headings

The page title uses `# H1`. Sections use `## H2` and subsections `### H3`. Since
H1 and H2 are used structurally on this page, only H3 is shown rendered.

```markdown
## Second-Level Heading

### Third-Level Heading

#### Fourth-Level Heading
```

### Third-Level Heading

#### Fourth-Level Heading

## Inline Elements

```markdown
**Bold text** uses the heading color for emphasis. _Italic text_ provides softer
emphasis. You can also combine **_bold and italic_** when needed.
```

**Bold text** uses the heading color for emphasis. _Italic text_ provides softer
emphasis. You can also combine **_bold and italic_** when needed.

```markdown
Inline `code` is styled with JetBrains Mono, a subtle background, and a thin
border. Variable names like `config_path` and function calls like
`build_sidebar()` are easy to spot in running text.
```

Inline `code` is styled with JetBrains Mono, a subtle background, and a thin
border. Variable names like `config_path` and function calls like
`build_sidebar()` are easy to spot in running text.

```markdown
Links look like [this example link](#) with a subtle underline that darkens on
hover.
```

Links look like [this example link](#) with a subtle underline that darkens on
hover.

## Blockquotes

```markdown
> Blockquotes have a wide left border and a tinted background. They work well
> for callouts, notes, or highlighting important information.
>
> They can span multiple paragraphs and contain **formatted text**,
> `inline code`, and [links](#).
```

> Blockquotes have a wide left border and a tinted background. They work well
> for callouts, notes, or highlighting important information.
>
> They can span multiple paragraphs and contain **formatted text**,
> `inline code`, and [links](#).

## Horizontal Rules

```markdown
---
```

---

## Images

Images follow standard markdown syntax:

```markdown
![Alt text](path/to/image.png)
```

## Long Paragraph

This paragraph demonstrates how longer text blocks render. The max-width of the
content area is set to 52rem, which prevents lines from getting too long for
comfortable reading. Combined with the 1.75 line-height and 17px base font size,
long paragraphs remain readable without feeling cramped. The Inter font family
provides excellent legibility at these sizes, with clear letter differentiation
and balanced spacing.
