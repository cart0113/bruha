---
description:
  Three overview documents describe bruha — README.md, docs site overview, and
  context-db overview. They share content but serve different audiences and must
  be kept in sync manually.
---

## The Three Overviews

| File                            | Audience                | Purpose                                         |
| ------------------------------- | ----------------------- | ----------------------------------------------- |
| `README.md`                     | Humans on GitHub        | First impression, install steps, repo structure |
| `docs/src/overview/overview.md` | Humans on the docs site | Detailed explanation, how it works              |
| `context-db/bruha/overview.md`  | LLM agents              | Architecture context, what bruha is             |

All three describe what bruha is and how it works. When any of these change,
check the other two.

## What to sync

- The "what is bruha" description and feature list.
- Install/setup steps.
- Repo/folder structure diagrams.

## What differs

Each file has content unique to its audience:

- **README.md** — license, quick-start, links to live docs.
- **Docs overview** — rendered in docsify, links to other docs pages.
- **Context-db overview** — architecture framing for agents, design decisions.

## Folder Structure Convention

`writing-docs/` always lives inside the main project folder (e.g.,
`context-db/bruha/writing-docs/`), never parallel to it. Folders parallel to the
project folder are reserved for project-agnostic content — symlinked standards
like `coding-standards/`, `writing-standards/`, and `agent-behavior/`.

## Process

There is no automated sync. After changing any of the three files:

1. Open the other two and check for contradictions or stale content.
2. Update shared sections to match.
3. Leave audience-specific sections alone unless the underlying facts changed.
