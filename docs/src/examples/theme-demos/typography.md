# Typography

This page demonstrates how text elements render in the bruha theme.

## Headings

Headings use the Inter font family with tight letter-spacing. Each level has
distinct sizing and weight.

### Third-Level Heading

Third-level headings are 1.2em with 600 weight. They're useful for breaking up
sections without adding visual heaviness.

## Inline Elements

Regular paragraph text is set at 17px with 1.75 line-height for comfortable
reading.

**Bold text** uses the heading color for emphasis. _Italic text_ provides softer
emphasis. You can also combine **_bold and italic_** when needed.

Inline `code` is styled with JetBrains Mono, a subtle background, and a thin
border. Variable names like `config_path` and function calls like
`build_sidebar()` are easy to spot in running text.

Links look like [this example link](#) with a subtle underline that darkens on
hover.

## Blockquotes

> Blockquotes have a wide left border and a tinted background. They work well
> for callouts, notes, or highlighting important information.
>
> They can span multiple paragraphs and contain **formatted text**,
> `inline code`, and [links](#).

## Horizontal Rules

A horizontal rule creates visual separation between sections:

---

Content continues after the rule with normal spacing.

## Lists

### Unordered Lists

- First item in the list
- Second item with some explanation text
- Third item
  - Nested item under third
  - Another nested item
    - Deeply nested for demonstration

### Ordered Lists

1. Read the configuration file
2. Validate all required keys are present
3. Generate the JavaScript config
4. Write the sidebar markdown
5. Stage the generated files

### Mixed Content Lists

- **Configuration**: edit `docsify-ext.yaml` to control features
- **Sidebar builder**: auto-generates `_sidebar.md` from filesystem
- **Theme picker**: 10 color palettes saved to localStorage
  1. Parchment (default warm tones)
  2. Arctic (cool blue-white)
  3. Forest (sage green and earth)
  4. Ocean (teal and deep blue)

## Images

Images are rendered at natural size with responsive max-width. No images are
included in this demo, but they follow standard markdown syntax:

```markdown
![Alt text](path/to/image.png)
```

## Long Paragraph

This paragraph demonstrates how longer text blocks render. The max-width of the
content area is set to 52rem, which prevents lines from getting too long for
comfortable reading. Combined with the 1.75 line-height and 17px base font size,
long paragraphs remain readable without feeling cramped. The Inter font family
provides excellent legibility at these sizes, with clear letter differentiation
and balanced spacing. All of these choices aim to make documentation pages that
you actually want to read, not just pages that contain information.
