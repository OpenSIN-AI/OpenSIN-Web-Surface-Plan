import fs from 'node:fs/promises';

const registryPath = new URL('../registry/web-surfaces.json', import.meta.url);
const raw = await fs.readFile(registryPath, 'utf8');
const registry = JSON.parse(raw);

const seenUrls = new Set();
const seenIds = new Set();
const errors = [];

if (!Array.isArray(registry.surfaces) || registry.surfaces.length === 0) {
  errors.push('registry.surfaces must be a non-empty array');
}

for (const surface of registry.surfaces || []) {
  if (!surface.id || !surface.url || !surface.group) errors.push(`surface missing required fields: ${JSON.stringify(surface)}`);
  if (seenIds.has(surface.id)) errors.push(`duplicate surface id: ${surface.id}`);
  seenIds.add(surface.id);

  if (seenUrls.has(surface.url)) errors.push(`duplicate canonical url: ${surface.url}`);
  seenUrls.add(surface.url);

  if (surface.domain && typeof surface.domain !== 'string') {
    errors.push(`surface.domain must be a string for ${surface.id}`);
  }

  if (!Array.isArray(surface.routes)) errors.push(`surface.routes must be an array for ${surface.id}`);
  if (!Array.isArray(surface.gaps)) errors.push(`surface.gaps must be an array for ${surface.id}`);
}

if (errors.length) {
  console.error('Registry validation failed:\n' + errors.map((e) => `- ${e}`).join('\n'));
  process.exit(1);
}

console.log(`Registry OK — ${registry.surfaces.length} surfaces, ${seenUrls.size} canonical URLs.`);
