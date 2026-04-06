"""Generate a docsify _sidebar.md from the filesystem.

Content lives under a configurable subdirectory (default: src/) parallel
to themes/. Ordering is controlled by optional _order.md files; if absent,
a file whose stem matches the folder name sorts first, then the rest
alphabetically. Folders must not mix files and sub-folders.
"""

import pathlib
import re

SKIP_NAMES = {"_sidebar.md", "_navbar.md", "_coverpage.md", "_order.md"}
H1_RE = re.compile(r"^#\s+(.+)", re.MULTILINE | re.IGNORECASE)
ORDER_FILENAME = "_order.md"


class SidebarError(Exception):
    pass


def _format_name(name):
    stem = name.rsplit(".", 1)[0] if "." in name else name
    return stem.replace("-", " ").replace("_", " ").title()


def _extract_h1(file_path):
    text = file_path.read_text(encoding="utf-8")
    match = H1_RE.search(text)
    if match:
        return match.group(1).strip()
    return _format_name(file_path.stem)


def _has_md_files(directory):
    for p in directory.rglob("*.md"):
        if p.name not in SKIP_NAMES and not p.name.startswith("_"):
            return True
    return False


def _collect_items(directory):
    items = []
    for entry in directory.iterdir():
        if entry.name.startswith("_") or entry.name.startswith("."):
            continue
        if entry.is_file():
            if entry.suffix != ".md" or entry.name in SKIP_NAMES:
                continue
            items.append(entry)
        elif entry.is_dir():
            if not _has_md_files(entry):
                continue
            items.append(entry)
    return items


def _validate_no_mixing(items, directory):
    has_files = any(item.is_file() for item in items)
    has_dirs = any(item.is_dir() for item in items)
    if has_files and has_dirs:
        file_names = [i.name for i in items if i.is_file()]
        dir_names = [i.name for i in items if i.is_dir()]
        raise SidebarError(
            f"'{directory}' mixes files and folders — "
            f"files: {file_names}, folders: {dir_names}. "
            f"A folder must contain either files or sub-folders, not both."
        )


def _read_order_file(directory):
    order_path = directory / ORDER_FILENAME
    if not order_path.exists():
        return None
    lines = order_path.read_text(encoding="utf-8").splitlines()
    return [
        line.strip()
        for line in lines
        if line.strip() and not line.strip().startswith("#")
    ]


def _sort_items(items, directory):
    order = _read_order_file(directory)

    if order is not None:
        name_to_item = {item.name: item for item in items}
        ordered = []
        seen = set()
        for name in order:
            if name in name_to_item:
                ordered.append(name_to_item[name])
                seen.add(name)
        remaining = sorted(
            [item for item in items if item.name not in seen],
            key=lambda p: p.name.lower(),
        )
        return ordered + remaining

    folder_name = directory.name

    def sort_key(p):
        if p.is_file() and p.stem == folder_name:
            return (0, p.name.lower())
        return (1, p.name.lower())

    return sorted(items, key=sort_key)


def _validate_top_level_folders_only(items, directory):
    for item in items:
        if item.is_file():
            raise SidebarError(
                f"Top-level file '{item.name}' in {directory} "
                f"— when top_level_folders_as_top_control is true, "
                f"all top-level items must be folders"
            )


def _build_tree(content_root, current_dir, depth, top_level_folders_only):
    indent = "  " * depth
    lines = []

    items = _collect_items(current_dir)
    _validate_no_mixing(items, current_dir)
    ordered = _sort_items(items, current_dir)

    if depth == 0 and top_level_folders_only:
        _validate_top_level_folders_only(ordered, current_dir)

    for item in ordered:
        if item.is_file():
            title = _extract_h1(item)
            rel_path = item.relative_to(content_root)
            lines.append(f"{indent}- [{title}]({rel_path})")
        elif item.is_dir():
            label = _format_name(item.name)
            lines.append(f"{indent}- **{label}**")
            lines.extend(
                _build_tree(content_root, item, depth + 1, top_level_folders_only)
            )

    return lines


def build_sidebar(docs_folder, top_level_folders_only, content_folder):
    docs_root = pathlib.Path(docs_folder)
    content_root = docs_root / content_folder
    lines = _build_tree(content_root, content_root, 0, top_level_folders_only)
    return "\n".join(lines) + "\n"


def write_sidebar(docs_folder, top_level_folders_only, content_folder):
    docs_root = pathlib.Path(docs_folder)
    content = build_sidebar(docs_root, top_level_folders_only, content_folder)
    sidebar_path = docs_root / content_folder / "_sidebar.md"
    sidebar_path.write_text(content, encoding="utf-8")
    return sidebar_path
