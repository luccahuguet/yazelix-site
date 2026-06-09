---
title: Configure the Workspace
description: The main settings file, managed overrides, Home Manager ownership, and generated runtime state.
---

Start with one file:

```text
~/.config/yazelix/settings.jsonc
```

It owns the main workspace settings for shell, editor, terminal, Zellij, Yazi, popup, status, and layout behavior.

## Edit settings

Browse and edit settings with the config UI:

```bash
yzx config ui
```

For direct edits, use your editor:

```bash
hx ~/.config/yazelix/settings.jsonc
```

Yazelix snapshots the main config for each new window. Settings that affect live panes apply to the next window or after:

```bash
yzx restart
```

## Temporary launch overrides

Use repeatable `--with KEY=VALUE` on launch, enter, or restart commands. Yazelix writes an ephemeral settings snapshot and does not mutate your config file.

```bash
yzx launch --with terminal.transparency='"medium"'
```

## Cursor settings

Cursor presets use a separate config:

```text
~/.config/yazelix_cursors/settings.jsonc
```

Use it for cursor trails, shader settings, enabled cursor lists, glow, duration, and Kitty fallback behavior.

## Managed overrides

Yazelix-owned user overrides live under `~/.config/yazelix/`. Examples:

- `terminal_ghostty.conf`
- `terminal_kitty.conf`
- `zellij.kdl` for native Zellij settings Yazelix does not render
- `yazi/yazi.toml`
- `yazi/keymap.toml`
- `yazi/init.lua`
- `helix/config.toml`
- `shell_bash.sh`, `shell_zsh.zsh`, `shell_fish.fish`, `shell_nu.nu`

Generated runtime files under `~/.local/share/yazelix` are output. Edit inputs, not generated state.

## Home Manager

Home Manager can own settings declaratively. When it does, the config UI and status surfaces report read-only ownership for the managed files.

Use one ownership model per install. Do not mix manual profile updates with Home Manager updates for the same runtime.
