# Board

> The operating model for OpenSIN web surfaces.

## Canonical rule set

- One canonical web surface registry: `registry/web-surfaces.json`
- One machine-readable docs refresh control plane: `registry/docs-surface-refresh-control-plane.json`
- One human inventory: `docs/inventory.md`
- One mapping matrix: `docs/matrix.md`
- One governance board: this file
- One program coordination page for docs surface refresh: `docs/control-plane.md`
- Unknowns are allowed, but they must be labeled as unknown or unverified

## Operating model

```mermaid
flowchart LR
  Registry["web-surfaces.json"] --> Validate["validate-registry.mjs"]
  ControlPlane["docs-surface-refresh-control-plane.json"] --> ValidateProgram["validate-control-plane.mjs"]
  Registry --> Generate["generate-docs.mjs"]
  Validate --> Inventory["docs/inventory.md"]
  Generate --> Inventory
  Generate --> Matrix["docs/matrix.md"]
  ControlPlane --> ProgramDoc["docs/control-plane.md"]
  Registry --> Board["docs/board.md"]

  classDef source fill:#e8f5e9,stroke:#1b5e20,stroke-width:2px
  classDef tool fill:#e1f5fe,stroke:#01579b,stroke-width:2px
  classDef doc fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px

  class Registry,ControlPlane source
  class Validate,ValidateProgram,Generate tool
  class Inventory,Matrix,Board,ProgramDoc doc
```

## State of the art best practice

1. **Registry-first** — never maintain domain lists in free text alone.
2. **Generated views** — inventory and matrix should be derived from the registry.
3. **Route groups over page dumps** — use prefixes for large surfaces like docs.
4. **Label unknowns** — do not guess deploy targets or owners.
5. **Separate concerns** — marketing, app, docs, API, community, and legacy surfaces are distinct classes.
6. **Keep ownership explicit** — every live surface has an owner and a purpose.
7. **Control-plane before implementation** — cross-repo refresh work should define order, release targets, and comment policy before downstream theme changes start.

## Decision log

| ID | Decision | Why |
|---|---|---|
| D-001 | `registry/web-surfaces.json` is the SSOT | It can be validated and regenerated automatically. |
| D-002 | `docs/inventory.md` and `docs/matrix.md` are generated views | Keeps the human views in sync with the registry. |
| D-003 | Unknowns stay in the registry as `needs-verification` or `unverified` | Prevents hallucinated infrastructure. |
| D-004 | Subpages are route groups, not separate repos | Avoids false repo proliferation. |
| D-005 | Docs surface refresh coordination lives in `registry/docs-surface-refresh-control-plane.json` and `docs/control-plane.md` | Keeps merge order, release policy, and downstream ownership machine-readable and reviewable. |
| D-006 | Docs refresh stays VitePress-first until a documented blocker proves otherwise | Preserves the active docs contract and avoids speculative platform churn. |

## Open questions

- Which repo is canonical for `my.opensin.ai`?
- Which repo powers `blog.opensin.ai`?
- Is `hermes.opensin.ai` active or just a planned surface?
- Should `chat.opensin.ai/agents/*` live under the app or the public catalog?
- Is `delqhi-sin-stripe.hf.space` still a valid runtime target or just a legacy reference?
- When should the design bootstrap move from temporary shims into a stable shared contract release?
