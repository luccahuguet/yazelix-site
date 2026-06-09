---
title: Troubleshooting Checklist
description: A compact recovery checklist for common Yazelix startup and config problems.
---

## 1. Run doctor

```bash
yzx doctor --verbose
```

Use `--fix` only when you want safe automated repair:

```bash
yzx doctor --fix
```

## 2. Check command ownership

```bash
type yzx
which yzx
```

The command should resolve to your Nix profile or Home Manager owner path, not an old `~/.local/bin/yzx` wrapper or shell function.

## 3. Refresh stale flake evaluation

```bash
nix profile add --refresh github:luccahuguet/yazelix#yazelix
```

## 4. Reset main config

```bash
yzx reset config
yzx launch
```

## 5. Keep generated state generated

Do not manually edit:

```text
~/.local/share/yazelix
```

If generated state is stale, relaunch, restart, or use the supported recovery command.

## 6. Report precise failures

Useful issue details:

- OS and architecture
- install owner: Nix profile, Home Manager, or one-off `nix run`
- `yzx --version-short`
- `yzx doctor --verbose`
- exact command output
- whether the problem reproduces after `yzx reset config`
