# Local Development

## Scripts

The `docs/bin/` directory contains scripts for building and serving a bruha site
locally. These scripts are designed to be copied into any project that uses
bruha.

```
docs/
├── bin/
│   ├── build.sh    ← generate sidebar + config + cache bust
│   ├── serve.sh    ← build + start local server
│   └── format.sh   ← run prettier on docs files
├── src/            ← markdown content
├── themes/         ← CSS + JS (symlinked from GIT_BRUHA)
├── bruha.yaml
└── index.html
```

### serve.sh

Build and start a local docsify server:

```bash
docs/bin/serve.sh              # port 3000 (default)
docs/bin/serve.sh --port 4000  # custom port
```

### build.sh

Generate `_sidebar.md` and `bruha-config.js` without starting a server:

```bash
docs/bin/build.sh
```

### format.sh

Run prettier on all docs content and theme files:

```bash
docs/bin/format.sh
```

## Setting Up a New Project

1. Create `docs/` with `index.html`, `bruha.yaml`, and `src/` content
2. Symlink theme files from GIT_BRUHA into `docs/themes/`
3. Copy `docs/bin/` from GIT_BRUHA into your project's `docs/bin/`

The build script automatically finds the bruha Python source — first checking if
it's in the current repo (`src/bruha/`), then looking for a sibling `GIT_BRUHA`
repo (`../GIT_BRUHA/src/bruha/`).

## Requirements

- `python-main` with PyYAML installed
- `docsify-cli` (`npm install -g docsify-cli`)
- `prettier` (via npx or installed locally)
