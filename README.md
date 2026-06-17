# Yazelix Site

Source repository for `yazelix.com`.

## Stack

- Astro
- Starlight
- MDX and Markdown content
- Pagefind search through Starlight
- Playwright smoke tests

## Commands

```sh
bun install
bun run dev
bun run check
bun run build
bun run test:e2e
```

The site uses current Yazelix docs as the source of truth for first-run,
configuration, update, recovery, keybindings, and reference content.

## Site Shape

The target information architecture is documented in
[docs/site_shape.md](docs/site_shape.md). The short version is:

- `/` stays a compact homepage with product identity, install path, and a few strongest demos
- `/features/` owns the complete visual demo gallery
- `/docs/` is a single-page scroll version of the task and reference docs
- `/blog/` carries essays, release writing, and design notes
