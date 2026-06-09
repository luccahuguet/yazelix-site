---
title: A Reproducible Terminal Workspace
description: Why Yazelix packages the terminal, editor, file tree, pane layout, and runtime tools as one coherent environment.
pubDate: 2026-06-09
tags: [workspace, nix, terminal]
---

Yazelix is built around a simple claim: the terminal workspace should be reproducible enough that the interesting work starts immediately.

The default package gives users a managed Zellij layout, a Yazi file tree, a stable editor pane, directional popup surfaces, and a fixed runtime toolset. The result is less time assembling local glue and more time using a predictable workspace.

The public site should follow the same principle. The first path should be short, the recovery path should be explicit, and deeper reference material should stay searchable without burying new users under implementation history.

That is why this site starts with install, configure, update, recover, keybindings, and reference docs. Blog posts can carry release essays and product reasoning, while the docs stay focused on supported behavior.
