---
description: What bruha is — a personal set of docsify extensions driven by YAML config
---

# bruha — Overview

bruha is a personal set of extensions for docsify. It is not a framework,
not a reusable theme library, and not trying to be general-purpose. It is
one person's opinionated setup for making docsify documentation pages look
and behave a specific way.

## What It Does

- Adds a YAML config file (`docs/docsify-ext.yaml`) that controls all features
- Generates a JavaScript config bridge so the browser reads the same settings
- Provides a custom CSS theme (code-one) with 10 switchable color palettes
- Adds sidebar enhancements: collapsible folders, bar position indicator
- Adds a horizontal top navigation bar for top-level doc sections
- Auto-generates `_sidebar.md` from a numbered filesystem convention
- Hides docsify defaults (hamburger menu, GitHub corner) when configured

## Project Structure

```
src/bruha/                  Python tools (sidebar builder, config generator)
docs/                       Docsify site root
docs/themes/                CSS + JS plugins
docs/docsify-ext.yaml       Config (source of truth)
docs/themes/docsify-ext-config.js  Generated JS config (do not edit)
CONTEXT/                    Project knowledge for AI assistants
```

## Key Design Decisions

- YAML is the single source of truth. Python generates JS from it.
- All config keys are required — no defaults, no optional fields.
- The pre-commit hook auto-rebuilds sidebar and config on every commit.
- CSS is layered: base theme, color palettes, extension styles.
- All JS plugins are standard docsify plugins (functions receiving `hook`).
