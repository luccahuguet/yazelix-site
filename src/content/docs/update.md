---
title: Update Safely
description: Choose the right update owner for profile installs and Home Manager installs.
---

Choose one update owner for each Yazelix install.

## Profile installs

Use:

```bash
yzx update upstream
```

It prints and runs the matching profile upgrade command:

```bash
nix profile upgrade --refresh <matching-yazelix-profile-entry>
```

If your current runtime came from `nix run` or a manually installed desktop entry, install Yazelix into the default profile first:

```bash
nix profile add --refresh github:luccahuguet/yazelix#yazelix
yzx desktop install
```

## Home Manager installs

Use:

```bash
yzx update home_manager
```

Run it from the Home Manager flake that owns this Yazelix install. It refreshes the `yazelix` input:

```bash
nix flake update yazelix
```

If your input uses another name, run `nix flake update <your-input-name>` yourself.

## Live windows

Updating replaces the installed runtime future launches use. Already-open Yazelix windows keep their current live runtime until you relaunch them or run:

```bash
yzx restart
```

Yazelix does not silently hot-swap live sessions in place.
