---
title: Start with Yazelix
description: Install Yazelix, launch the workspace, and learn the basic runtime model.
---

Yazelix is a package-first terminal workspace. You need Nix with flakes enabled; Yazelix supplies the runtime tools it owns.

## Install

```bash
nix profile add github:luccahuguet/yazelix#yazelix
```

Then launch the workspace:

```bash
yzx launch
```

The default package uses the Ghostty runtime variant. Explicit terminal variants are available when you want Yazelix Terminal, Rio, WezTerm, Kitty, Foot on Linux, or Ratty on Linux.

## Try without installing

```bash
nix run github:luccahuguet/yazelix#yazelix -- launch
```

## Use the binary cache

Yazelix publishes `x86_64-linux` package builds to `https://yazelix.cachix.org`. Interactive Nix commands can prompt you to accept the flake-advertised cache configuration.

For noninteractive installs:

```bash
nix profile add --accept-flake-config github:luccahuguet/yazelix#yazelix
```

If a requested output is not present in the cache yet, Nix builds it from source.

## Force a fresh flake fetch

If you previously evaluated the flake and Nix serves an older revision, add `--refresh`:

```bash
nix profile add --refresh github:luccahuguet/yazelix#yazelix
```

## First model

- `yzx launch` opens the packaged workspace
- `~/.config/yazelix/settings.jsonc` is the main user config
- `~/.local/share/yazelix` is generated runtime state
- `Alt+Shift+H/J/K/L` toggles the main directional surfaces
- `yzx doctor` is the first recovery command when launch behavior looks wrong
