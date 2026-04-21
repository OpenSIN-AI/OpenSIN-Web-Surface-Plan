# Docs Surface Refresh Control Plane

> Program control plane for the docs surface refresh tracked by [OpenSIN-Web-Surface-Plan issue #2](https://github.com/OpenSIN-AI/OpenSIN-Web-Surface-Plan/issues/2).

## Scope

This file turns the docs surface refresh into an explicit control plane instead of a loose set of parallel tasks. It keeps the work VitePress-first, preserves the homepage contract from [`docs/docs-homepage-contract.md`](docs-homepage-contract.md), and sequences the downstream repos that deliver the actual UI work.

## Machine-readable source of truth

- `registry/docs-surface-refresh-control-plane.json` — canonical program registry
- `docs/docs-homepage-contract.md` — homepage safeguard and structure contract
- `registry/web-surfaces.json` — broader OpenSIN web surface registry

## Repo responsibilities

| Repo | Responsibility | Tracking |
| --- | --- | --- |
| `OpenSIN-AI/OpenSIN-Web-Surface-Plan` | Own the control-plane artifacts, dependency order, and release policy. | [#1](https://github.com/OpenSIN-AI/OpenSIN-Web-Surface-Plan/issues/1), [#2](https://github.com/OpenSIN-AI/OpenSIN-Web-Surface-Plan/issues/2) |
| `OpenSIN-AI/awesome-OpenSIN-design` | Bootstrap the design contract used by downstream docs styling work. | [#1](https://github.com/OpenSIN-AI/awesome-OpenSIN-design/issues/1) → target `v0.1.0` |
| `OpenSIN-AI/OpenSIN-documentation` | Implement homepage polish and best-practice subpages inside the existing VitePress contract. | [#142](https://github.com/OpenSIN-AI/OpenSIN-documentation/issues/142), [#143](https://github.com/OpenSIN-AI/OpenSIN-documentation/issues/143) → target `v1.1.0` |

## Dependency and merge order

1. Keep [issue #1](https://github.com/OpenSIN-AI/OpenSIN-Web-Surface-Plan/issues/1) as the standing homepage safeguard baseline.
2. Merge [issue #2](https://github.com/OpenSIN-AI/OpenSIN-Web-Surface-Plan/issues/2) so downstream work inherits explicit sequencing, comment policy, and release targets.
3. Land `awesome-OpenSIN-design` [issue #1](https://github.com/OpenSIN-AI/awesome-OpenSIN-design/issues/1) as release `v0.1.0`.
4. Land `OpenSIN-documentation` [issue #142](https://github.com/OpenSIN-AI/OpenSIN-documentation/issues/142) for homepage polish.
5. Land `OpenSIN-documentation` [issue #143](https://github.com/OpenSIN-AI/OpenSIN-documentation/issues/143) for best-practice subpages.
6. Cut the docs release at `v1.1.0` after #142 and #143 are merged against the same VitePress contract.

## Semver and release policy

- `awesome-OpenSIN-design` ships the design bootstrap as `v0.1.0` because it is the first reusable contract baseline.
- `OpenSIN-documentation` ships the docs surface refresh as `v1.1.0` because the work is additive polish plus new best-practice surfaces, not a contract break.
- Contract breaks, navigation resets, or any proven blocker that forces a move away from VitePress require a new decision record and a major-version discussion before implementation starts.

## Comment policy for non-obvious theme and design logic

Add comments when the implementation would otherwise look arbitrary to the next maintainer. This especially applies to theme CSS, VitePress layout overrides, motion/hover behavior, and homepage/subpage isolation rules.

Required comment targets:

- CSS variables or selectors that preserve the homepage contract.
- Non-default hover, focus, motion, and breakpoint behavior.
- Layout guards that prevent homepage styling from leaking into best-practice subpages.
- Temporary design-contract shims that should later be replaced by `awesome-OpenSIN-design` artifacts.

Avoid comments that only restate obvious markup or CSS. If the logic is non-obvious and user-visible, pair the code comment with a PR note or release note.

## Changelog / PR notes

Use these notes in the PR description or release summary for this control-plane work:

- add machine-readable control-plane artifacts for the docs surface refresh program
- lock cross-repo merge and release order for homepage polish + best-practice subpages + design bootstrap
- document the comment policy for non-obvious VitePress theme and design-contract logic
