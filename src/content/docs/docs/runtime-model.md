---
title: Runtime Model
description: What Yazelix packages, owns, generates, and leaves to the user.
---

Yazelix is a reproducible terminal IDE built around Zellij, Yazi, Helix, and your configured editor.

## Package-provided

The normal runtime includes:

- `zellij`
- `yazi`
- `helix`
- `nu`, `bash`, `fish`, and `zsh`
- `fzf`, `zoxide`, `starship`, `lazygit`, `zenith`, `carapace`, and `macchina`
- Yazi preview helpers such as `p7zip`, `jq`, `fd`, `ripgrep`, and `poppler`
- one selected packaged terminal runtime

## Generated runtime state

Yazelix renders runtime state under:

```text
~/.local/share/yazelix
```

This directory is output. Edit the config inputs instead.

## User config

The main semantic config is:

```text
~/.config/yazelix/settings.jsonc
```

Cursor presets use:

```text
~/.config/yazelix_cursors/settings.jsonc
```

## Workspace identity

Yazelix targets managed panes by identity instead of pane scanning:

- the file tree is a managed Yazi sidebar
- the editor pane is titled and reused
- `yzx reveal` jumps the current file back into the file tree
- popup slots are generated from semantic config
- the right sidebar can host an agent command

## Child repositories

Focused child packages own reusable subsystems such as screen rendering, cursor shaders, popup plugins, pane orchestration, Zellij bar widgets, Yazi assets, and the ratconfig config editor. Normal users get those integrations through the Yazelix package.
