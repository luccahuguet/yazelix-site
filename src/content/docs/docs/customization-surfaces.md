---
title: Customization Surfaces
description: Where to change Yazelix behavior without fighting generated runtime state.
---

Start with `~/.config/yazelix/settings.jsonc`.

## Main settings

Use it for:

- shell choice
- editor command
- terminal variant settings
- Zellij keybindings and popups
- Yazi integration behavior
- status widgets
- layout behavior

## Native sidecars

Use sidecars for tool-specific preferences that Yazelix does not render:

| Surface | Path |
| --- | --- |
| Ghostty overrides | `~/.config/yazelix/terminal_ghostty.conf` |
| Kitty overrides | `~/.config/yazelix/terminal_kitty.conf` |
| Zellij native settings | `~/.config/yazelix/zellij.kdl` |
| Yazi overrides | `~/.config/yazelix/yazi/` |
| Helix managed config | `~/.config/yazelix/helix/config.toml` |
| Shell hooks | `~/.config/yazelix/shell_bash.sh`, `shell_zsh.zsh`, `shell_fish.fish`, `shell_nu.nu` |

## Home Manager

Home Manager can own Yazelix settings declaratively. The site docs intentionally separate Home Manager ownership from profile installs so users do not mix update paths for one runtime.

## Unsupported legacy inputs

Old mutable `yazelix.toml`, old `cursors.toml`, and old `user_configs/` paths are unsupported legacy state. Yazelix reports them clearly instead of silently migrating them forever.
