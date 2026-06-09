---
title: Recover a Broken Launch
description: Use doctor, reset, stale-wrapper cleanup, and generated-state boundaries.
---

Start with doctor:

```bash
yzx doctor
yzx doctor --verbose
```

Use `--fix` only for safe automated repairs:

```bash
yzx doctor --fix
```

## Reset main config

Reset only the main settings file:

```bash
yzx reset config
yzx launch
```

Managed override files such as `helix/`, `zellij.kdl`, `yazi/`, terminal snippets, shell hooks, legacy TOML inputs, and unknown adjacent files are preserved and reported.

## Clean up old manual installs

If an old clone, wrapper, or shell function shadows the current package:

```bash
type yzx
which yzx
readlink -f "$(which yzx)"
```

Remove stale local wrappers only after confirming they are obsolete:

```bash
rm -f ~/.local/bin/yzx
```

Open a fresh shell and check that `yzx` resolves to your profile or Home Manager owner path.

## Stale flake cache

If `yzx --version-short` reports an older version than expected:

```bash
nix profile add --refresh github:luccahuguet/yazelix#yazelix
```

## Plugin permissions

If the top bar or popup controls look broken after permissions were reset, run:

```bash
yzx doctor --fix
yzx restart
```

If a live plugin reload left Zellij stuck, the safer recovery is a fresh session:

```bash
zellij delete-all-sessions -f -y
yzx enter
```

## Ownership rule

Never fix Yazelix by editing generated files under `~/.local/share/yazelix`. Fix the config input or run the supported recovery command.
