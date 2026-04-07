# Overview

bruha is a [docsify](https://docsify.js.org/) extension theme designed for LLM
documentation generation:

- **Auto-generated sidebar from filesystem**: just add folders and markdown
  files to a `docs/src` directory. Then a provided `build.sh` script (designed
  to be used as a commit hook) will generate all necessary files, such as the
  `index.html` and `_sidebar.md`. This was designed so that an LLM does not need
  to remember to update ancillary files when updating core documentation.
- **Optional Ordering Control**: an optional `_order.md` can be maintained to
  control content tab and sidebar ordering.
- **Top navigation tabs from folder structure**: a default option allows
  top-level folders to automatically become a horizontal tab bar (like PyData
  Sphinx or Read the Docs).
- **Single YAML config with defaults**: one `bruha.yaml` controls everything
  (themes, sidebar behavior, nav layout, code blocks). Currently, there are four
  color themes with light/dark variants, code highlighting, and a theme picker
  UI.
- **Copy-based install**: to use `bruha`, copy `docs/themes/` and `docs/bin/`
  into your project. Currently, the process is manual and you need to check back
  for updates and recopy assets when necessary.
- **Context-db files provided** -- this project uses
  [context-db](https://cart0113.github.io/context-db) and provides
  `context-db/using-bruha/` context files. In addition, a `templates/` directory
  provides a sample `AGENTS.md` and a `using-bruha/SKILLS.md` you can
  incorporate into your project.

## How It Works

1. Organize docs under `docs/src/` using optional `_order.md` files for ordering
2. Edit `bruha.yaml` to override any defaults you want to change
3. Run `build.sh` to generate `index.html`, `_sidebar.md`, and the JS config or
   use `docs/bin/serve.sh` to build the docs and run a server on `localhost`.
