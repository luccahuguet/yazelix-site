---
title: Keybindings
description: The default Yazelix workspace key layer and where to customize it.
---

Yazelix keeps the workspace layer spatial. The `Alt+Shift+H/J/K/L` bindings follow the Helix/Vim direction mnemonic.

## Core workspace keys

| Key | Action |
| --- | --- |
| `Alt+Shift+H` | Toggle the left sidebar |
| `Alt+Shift+J` | Toggle the bottom popup |
| `Alt+Shift+K` | Toggle the top popup |
| `Alt+Shift+L` | Toggle the right agent sidebar |
| `Alt+Shift+I` | Toggle the keep-alive Zenith process information popup |
| `Alt+Shift+M` | Open the Yazelix menu popup |
| `Alt+Shift+C` | Open the config UI popup |
| `Ctrl+y` | Toggle focus between the editor and left sidebar |
| `Ctrl+Shift+Y` | Toggle focus between the editor and right agent sidebar |
| `Alt+Shift+F` | Toggle pane fullscreen |
| `Alt+w` / `Alt+q` | Walk to next or previous tab |
| `Ctrl+Alt+H/L` | Move tab left or right |
| `Ctrl+Alt+J/K` | Move pane down or up |

Run:

```bash
yzx keys
```

Use tool-specific variants for discoverability hints:

```bash
yzx keys yazi
yzx keys hx
yzx keys nu
```

## Popup commands

Built-in popup commands live in `zellij.popup_commands`:

| Action | Default |
| --- | --- |
| `bottom_popup` | `lazygit` |
| `top_popup` | `yzx config ui` |
| `menu` | `yzx menu` |

Custom popups live in `zellij.custom_popups`. The default custom popup is Zenith on `Alt+Shift+I`.

## Customize keys

Use `zellij.keybindings` in `settings.jsonc` for Yazelix-owned actions. Use native sidecar configs only for the owning tool's broader keymap.

Yazelix rejects duplicate semantic Zellij keys before launch.
