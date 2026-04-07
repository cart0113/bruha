# Overview

A [docsify](https://docsify.js.org/) extension theme designed for LLM
documentation generation. See [Configuration](configuration/config-reference)
for all settings and [Examples](examples/typography) for content widget syntax.

## How It Works

1. Organize docs under `docs/src/` using optional `_order.md` files for ordering
2. Edit `bruha.json` to override any defaults you want to change
3. Run `build.sh` to generate `index.html`, `_sidebar.md`, and the JS config —
   intended to be put in a git commit hook.
4. Use `serve.sh` to build docs and run a local server for development.

## Structure

```
docs/
  index.html            ← Auto generated main page.
  bruha.json            ← Config (override defaults here)
  src/                  ← Markdown content and auto generated _sidebar.md.
    examples/           ← Syntax reference for all content features.
  themes/               ← CSS + JS plugins
  bin/                  ← build.sh and serve.sh scripts
templates/              ← Sample AGENTS.md and skills on how to write bruha docs.
```

For syntax and examples of all content features (callouts, table styles, badges,
etc.), see the [Examples](examples/typography) section in the sidebar.

Full docs: https://cart0113.github.io/bruha/
