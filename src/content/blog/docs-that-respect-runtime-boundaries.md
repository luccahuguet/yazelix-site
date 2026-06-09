---
title: "Docs that respect runtime boundaries"
description: "A validation post about keeping user runtime docs separate from maintainer tooling."
pubDate: 2026-06-08
tags:
  - docs
  - runtime
---

Yazelix documentation has to do more than list commands. It needs to keep the user runtime surface separate from maintainer-only tooling so a new user can understand what belongs in their shell, what belongs in `~/.config/yazelix/`, and what is only for development.

That is why the site starts with daily use, configuration, update, recovery, and keybinding flows before diving into deeper reference material. Those are the surfaces a user reaches for when they are trying to make the workspace productive or repair it after a broken environment.

The maintainer commands still matter, but they should not blur the contract. The public docs should make the supported runtime path obvious, and the reference pages should explain where the generated assets and shell hooks fit.
