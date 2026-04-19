# Standards

## Maintenance rules

- Update the registry first, then regenerate docs.
- Never invent a route, owner, or deploy target.
- Mark surfaces as `live`, `needs-verification`, `unverified`, or `legacy`.
- Use route prefixes for large surfaces (`/guide/*`, `/api/*`, `/posts/*`).
- Keep marketing, app, docs, API, and agent-registry surfaces separate.

## Validation rules

- The registry must have unique surface ids.
- Domains must not duplicate unless the surface is a subroute on the same host.
- Every surface must have a purpose.
- Every surface must list gaps if anything is missing or unverified.

## Recommended release flow

1. Add or update a surface in `registry/web-surfaces.json`.
2. Run `node scripts/validate-registry.mjs`.
3. Run `node scripts/generate-docs.mjs`.
4. Review `docs/inventory.md` and `docs/matrix.md`.
5. Commit the registry and regenerated docs together.

## Best practices by surface type

| Type | Best practice |
|---|---|
| Marketing | Keep fast, public, SEO-focused, and canonical. |
| App | Keep auth boundaries explicit and route redirects documented. |
| Docs | Use route groups and generation, not hand-maintained page dumps. |
| API | Keep auth, billing, and subscription routes explicit. |
| Agent registry | Publish card, health, and canonical entrypoints. |
| Community | Treat as outbound only, no source-of-truth duties. |
