# CONTEXT.md

This file provides guidance to AI assistants when working with code in this repository.

## CRITICAL: Read Global User Context First

**BEFORE PROCEEDING, read `~/.context.md` and follow all advice there.** That file contains my general coding preferences, style guidelines, and critical instructions that apply to ALL projects. The instructions in ~/.context.md override any conflicting defaults.

If ~/.context.md doesn't exist, notify the user.

## Project Overview

bruha is a personal set of docsify extensions. Not a framework, not a library — just one person's config-driven setup for making docsify pages look and behave a specific way.

## Code Structure

```
src/bruha/                  Python tools
  sidebar_builder.py        Generates _sidebar.md from numbered filesystem
  docsify_ext_config.py     Reads YAML config, generates JS config bridge
docs/                       Docsify site root (served as static files)
  docsify-ext.yaml          Config (single source of truth)
  themes/                   CSS + JS plugins
  index.html                Docsify entry point
CONTEXT/                    Project knowledge (context-md format)
```

## Development Workflow

### Building

```bash
PYTHONPATH=src python-main -c "
import bruha.docsify_ext_config as cfg
import bruha.sidebar_builder as sb
config = cfg.load_config('docs')
sb.write_sidebar('docs', config['top_level_folders_as_top_control'])
cfg.generate_config_js('docs')
"
```

### Serving

```bash
docsify serve docs
```

Or any static file server pointed at `docs/`.

### Dependencies

- Python: PyYAML (`import yaml`)
- Use `python-main` (never `python` or `python3`)
- Use `ruff-main` for formatting
