# Yazelix Site Shape

This document records the target information architecture for `yazelix.com`.
It is a planning surface for the website, not a claim that every route or media
asset exists yet.

## Principle

The site should make Yazelix understandable visually without turning the docs
into a gallery or the homepage into an exhaustive manual.

- The homepage previews the product
- The features page owns the visual tour
- The docs own exact usage, reference, recovery, and settings behavior
- The blog owns narrative, release writing, and design notes

## Routes

### `/`

The homepage is compact.

It should include:

- product name and one direct sentence
- the maintained workspace screenshot or one short launch demo
- the install command
- primary links to Features, Docs, Blog, and GitHub
- three or four strongest demos, not the full catalog

Good homepage demo candidates:

- launch into the workspace
- `Alt+z` from Yazi into the managed editor/workspace
- open the config UI popup
- toggle the right agent sidebar or LazyGit popup

The homepage should not carry every terminal variant, every setting comparison,
every keybinding, or every recovery/update path.

### `/features/`

The features page owns the complete visual demo gallery.

It should be structured as grouped product behavior, not as an unfiltered list
of media files. In the first version, every capture gets a large full-width row
so screenshots and short clips can carry the explanation visually.

Feature groups:

1. Workspace screens
   - every `yzx screen` surface
   - launch starting in a full-pane Yazi view
2. Yazi jumps and opening
   - `Z` using Yazi-native zoxide navigation without opening the editor
   - `z` using Yazi-native fuzzy path jumping without opening the editor
   - `Alt+z` using Yazelix's zoxide picker to retarget the managed editor/workspace
   - editor pane already exists
   - editor pane does not exist yet
   - `editor.hide_sidebar_on_file_open = false`
   - `editor.hide_sidebar_on_file_open = true`
3. Sidebar behavior
   - left and right sidebars toggled
   - left sidebar focus with `Ctrl+y`
   - right sidebar focus with `Ctrl+Shift+Y`
4. Popups and tools
   - ratconfig config UI popup being used
   - information popup
   - menu popup
   - LazyGit popup in action
5. Terminal and cursor feel
   - Ghostty cursor behavior outside Helix
   - Ghostty cursor behavior inside Helix
   - yzxterm cursor behavior outside Helix
   - yzxterm cursor behavior inside Helix
6. Status and visual settings
   - widget photos
   - Yazi git decorations in the managed file tree
   - compact icon-only Starship prompt sized for the sidebar
   - pane frames on and off
   - rounded corners on and off
   - other visual settings that are better shown than described

### `/docs/`

Docs stay task-oriented and reference-oriented, but the `/docs/` index should
be one continuous scroll page. Users should be able to start at the top and keep
reading through install, config, keybindings, update, recovery, runtime model,
customization, and troubleshooting.

Individual docs pages should remain available for direct links, search results,
and focused reading. The single-page docs route can include section anchors and
links back to those standalone pages.

Docs can embed or link to the same media assets, but they should not become the
primary owner of the visual gallery. A docs section should use a demo only when
it helps explain the exact task in that section.

### `/blog/`

Blog posts carry release essays, product reasoning, architecture writing, and
lessons from the project.

Blog posts can reference feature demos when useful, but they should not become
the canonical location for product behavior.

## Media Model

The first implemented version can use static screenshots and planned capture
slots. Motion clips should replace the highest-value screenshots after the page
rhythm, grouping, captions, and docs links feel right.

Prefer short video loops over actual GIF files.

Use:

- `.webm` or `.mp4` for motion demos
- `.webp` or `.png` poster images
- `.webp` or `.png` for static comparisons and widget photos

Reasons:

- smaller downloads
- cleaner rendering
- better poster frames
- better reduced-motion handling
- fewer huge files in the page load path

Each motion demo should be short enough to understand at a glance. The target
length is roughly three to eight seconds.

Media should:

- lazy-load outside the first viewport
- have stable aspect ratios
- have a poster image
- include a short caption
- avoid audio
- avoid autoplay when reduced motion is requested
- have a docs link for exact commands or settings

## Media Registry

The implementation should use a small registry instead of hard-coding every
asset into page markup. Missing assets can render as planned demo slots until
the real capture exists.

Example shape:

```ts
{
	id: "open-zoxide-in-editor",
	group: "opening_files",
	title: "Alt+z: zoxide to editor",
	summary: "Yazelix uses the zoxide picker to retarget the managed editor/workspace directly to the picked location.",
	kind: "video",
	asset: "/media/features/open-zoxide-in-editor.webm",
	poster: "/media/features/open-zoxide-in-editor.webp",
	docsHref: "/keybindings/"
}
```

The registry should support:

- feature grouping
- primary and variant demos
- static image comparisons
- missing asset placeholders
- links back to docs pages

## Layout Rules

Use one large media row per demo on the features page. The screenshot or clip
should occupy the full row width, with the caption and docs link below it.

Use smaller media cards only for homepage previews or future dense comparison
surfaces where a full-width row would make comparison worse.

The page should feel like a product tour, not a folder listing.

## Capture Backlog

The initial capture backlog is:

- all `yzx screen` surfaces
- full-pane Yazi startup
- `Z` native zoxide navigation staying inside Yazi
- `z` native fuzzy path jumping staying inside Yazi
- `Alt+z` zoxide picker retargeting the managed editor/workspace
- open behavior when the editor pane exists
- open behavior when the editor pane does not exist
- `editor.hide_sidebar_on_file_open` on and off
- ratconfig config UI popup usage
- information popup
- menu popup
- sidebar toggling
- sidebar focus with `Ctrl+y` and `Ctrl+Shift+Y`
- LazyGit popup usage
- Ghostty cursor behavior inside and outside Helix
- yzxterm cursor behavior inside and outside Helix
- status/widget images
- Yazi git decorations in the managed file tree
- icon-only Starship prompt fitted to the sidebar width
- pane frames on and off
- rounded corners on and off
