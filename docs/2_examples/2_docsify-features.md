# Docsify Features

This page demonstrates docsify-specific features that work with the bruha theme.

## Search

The search box at the top of the sidebar indexes all pages. Try searching for "palette" or "sidebar" to see it in action.

Search is configured with `depth: 3`, meaning it indexes content under h1, h2, and h3 headings.

## Sidebar Navigation

### Header Depth

With `document_header_depth: 3`, the sidebar shows:
- The document title (this page: "Docsify Features")
- h2 headings ("Search", "Sidebar Navigation", etc.)

You can see these in the sidebar right now. Clicking one scrolls to that section.

### Collapsible Folders

Folder sections in the sidebar collapse and expand on click. The folder containing the current page auto-expands; others start collapsed.

### Bar Indicator

When `document_inline_sidebar_selector` is true, a vertical bar in the sidebar spans the current document's section. The active heading gets an accent-colored highlight.

## Top Navigation Bar

When `top_level_folders_as_top_control` is true, top-level folders appear as buttons in a horizontal bar at the top of the page. Clicking a folder shows its contents in the sidebar.

This page is in the "Examples" section — you can see it highlighted in the top nav.

## Color Themes

Click the palette button in the bottom-right corner to switch between 10 color themes. Your choice persists across page loads via localStorage.

Each theme overrides CSS custom properties (`--t-*` variables), so every element adapts: backgrounds, text, code blocks, borders, syntax highlighting, and the sidebar.

## Code Block Features

### Line Numbers

Every fenced code block gets automatic line numbers with a gutter:

```python
def greet(name):
    message = f"Hello, {name}!"
    print(message)
    return message
```

### Copy Button

Hover over any code block to reveal the copy button in the top-right corner. Click it to copy the code content to your clipboard.

### Syntax Highlighting

Prism.js handles syntax highlighting for Python, JavaScript, Bash, YAML, CSS, JSON, Markdown, TOML, and REST.

```toml
[tool.bruha]
docs_folder = "docs"
theme = "code-one"

[tool.bruha.features]
theme_picker = true
top_nav = true
```
