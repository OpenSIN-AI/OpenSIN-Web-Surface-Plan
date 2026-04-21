# Standards

## Maintenance rules

- Update the registry first, then regenerate docs.
- Never invent a route, owner, or deploy target.
- Mark surfaces as `live`, `needs-verification`, `unverified`, or `legacy`.
- Use route prefixes for large surfaces (`/guide/*`, `/api/*`, `/posts/*`).
- Keep marketing, app, docs, API, and agent-registry surfaces separate.
- For docs surface refresh work, update `registry/docs-surface-refresh-control-plane.json` when repo responsibilities, issue links, release targets, or merge order change.

## Validation rules

- The registry must have unique surface ids.
- Domains must not duplicate unless the surface is a subroute on the same host.
- Every surface must have a purpose.
- Every surface must list gaps if anything is missing or unverified.
- The docs surface refresh control plane must track downstream issues, target releases, merge order, and comment policy.

## Recommended release flow

1. Add or update a surface in `registry/web-surfaces.json`.
2. Run `node scripts/validate-registry.mjs`.
3. Run `node scripts/validate-control-plane.mjs` when surface program policy changes.
4. Run `node scripts/generate-docs.mjs`.
5. Review `docs/inventory.md` and `docs/matrix.md`.
6. Commit the registry and regenerated docs together.

## Docs surface refresh release order

1. Keep the homepage guardrail issue active in Surface Plan.
2. Merge the control-plane update in Surface Plan.
3. Bootstrap the design contract in `awesome-OpenSIN-design` as `v0.1.0`.
4. Merge docs homepage polish and best-practice subpages in `OpenSIN-documentation`.
5. Release the docs refresh as `v1.1.0`.

## Comment policy for non-obvious theme and design logic

- Comment theme or design logic when the reason is not obvious from the selector or component alone.
- Document homepage contract guards, non-default hover/focus behavior, responsive layout shims, and cross-page isolation rules.
- Pair non-obvious code comments with a PR note or changelog note if the behavior is user-visible.
- Do not add comments that merely restate obvious markup or CSS declarations.

## Best practices by surface type

| Type | Best practice |
|---|---|
| Marketing | Keep fast, public, SEO-focused, and canonical. |
| App | Keep auth boundaries explicit and route redirects documented. |
| Docs | Use route groups and generation, not hand-maintained page dumps. |
| API | Keep auth, billing, and subscription routes explicit. |
| Agent registry | Publish card, health, and canonical entrypoints. |
| Community | Treat as outbound only, no source-of-truth duties. |
