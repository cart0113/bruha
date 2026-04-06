---
description: What bruha is — a personal set of docsify extensions driven by YAML config
---

# bruha — Overview

bruha is a personal set of extensions for docsify. It is not a fork of docsify
(docsify is loaded via CDN), not a reusable theme library, and not trying to be
general-purpose. It is one person's opinionated setup for making docsify
documentation pages look and behave a specific way.

## What It Does

- Adds a YAML config file (`docs/bruha.yaml`) that controls all features
- Every config key has a sensible default — users only override what they need
- Generates a JavaScript config bridge so the browser reads the same settings
- Provides a custom CSS theme (code-one) with 4 switchable color themes (each
  with light + dark variants)
- Adds sidebar enhancements: collapsible folders, bar position indicator
- Adds a horizontal top navigation bar for top-level doc sections
- Auto-generates `_sidebar.md` from filesystem with `_order.md` files for
  ordering
- Hides docsify defaults (hamburger menu, GitHub corner) when configured
- Formats all JS, CSS, MD with prettier

## Project Structure

```
src/bruha/                  Python tools (sidebar builder, config generator)
docs/                       Docsify site root
docs/themes/                CSS + JS plugins
docs/bruha.yaml             Config (source of truth)
docs/themes/bruha-config.js Generated JS config (do not edit)
docs/*/_order.md            Ordering files (one per directory)
bin/                        Build, format, serve scripts
context-db/                 Project knowledge for AI assistants
```

## Key Design Decisions

- YAML is the single source of truth. Python generates JS from it.
- All config keys have defaults. Users only override what they need.
- `_order.md` files control sidebar ordering; no numeric prefixes on filenames.
- CSS is layered: base theme, color palettes, extension styles.
- All JS plugins are standard docsify plugins (functions receiving `hook`).
- Prettier enforces consistent formatting for JS, CSS, and MD.
