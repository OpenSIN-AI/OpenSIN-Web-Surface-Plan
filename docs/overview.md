# Overview

> CEO view of the OpenSIN-AI web surface map.

## The system in one picture

```mermaid
flowchart TB
  Registry["registry/web-surfaces.json"] --> Audit["docs/live-audit.md"]
  Registry --> Inventory["docs/inventory.md"]
  Registry --> Matrix["docs/matrix.md"]
  Registry --> Subpages["docs/subpages.md"]
  Registry --> Board["docs/board.md"]

  Inventory --> Marketing["opensin.ai"]
  Matrix --> App["chat.opensin.ai"]
  Subpages --> Marketplace["my.opensin.ai"]
  Board --> Docs["docs.opensin.ai"]

  classDef registry fill:#0f172a,stroke:#22c55e,stroke-width:2px,color:#ecfeff
  classDef doc fill:#e0f2fe,stroke:#0284c7,stroke-width:2px,color:#0f172a
  classDef surface fill:#ecfccb,stroke:#65a30d,stroke-width:2px,color:#0f172a

  class Registry registry
  class Audit,Inventory,Matrix,Subpages,Board doc
  class Marketing,App,Marketplace,Docs surface
```

## Status at a glance

| Surface | State | What it means |
|---|---|---|
| `opensin.ai` | Live | Marketing surface is reachable and route-rich. |
| `chat.opensin.ai` | Live / gated | Dashboard is live; agent pages can require login. |
| `my.opensin.ai` | Live | Marketplace and pricing surface is reachable. |
| `blog.opensin.ai` | Live | Blog resolves via Cloudflare Pages. |
| `docs.opensin.ai` | Live | Docs are the canonical knowledge layer. |
| `api.opensin.ai` | Internal | Backend surface is tracked, but public DNS is not consistently resolvable from this environment. |
| `opensin.ai/agents` | 404 | Not present in the current public source and should not be advertised as live. |
| `hermes.opensin.ai` | Unresolved | No public DNS resolution in audit. |
| `code-analyzer.opensin.ai` | Unresolved | No public DNS resolution in audit. |
| `delqhi-sin-stripe.hf.space` | 404 | Legacy HF runtime reference is not live. |

## Where to go next

- [`docs/live-audit.md`](live-audit.md) — live probe report
- [`docs/subpages.md`](subpages.md) — source-backed subpage inventory
- [`docs/inventory.md`](inventory.md) — generated surface list
- [`docs/matrix.md`](matrix.md) — domain/repo/deploy matrix
- [`docs/board.md`](board.md) — operating rules and decisions

## Best practice

The state of the art is:

1. Registry first.
2. Generated views second.
3. Live audit third.
4. Human docs stay opinionated, not speculative.
