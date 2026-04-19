# Contributing

## Workflow

1. Update `registry/web-surfaces.json` first.
2. Validate with `node scripts/validate-registry.mjs`.
3. Regenerate docs with `node scripts/generate-docs.mjs`.
4. Review `docs/inventory.md` and `docs/matrix.md`.
5. Commit the registry and regenerated docs together.

## Rules

- Do not guess unknown domains, owners, or deploy targets.
- Use route prefixes for large page groups.
- Keep all public claims backed by registry entries.
