import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const registry = JSON.parse(await fs.readFile(path.join(root, 'registry/web-surfaces.json'), 'utf8'));
const outInventory = path.join(root, 'docs/inventory.md');
const outMatrix = path.join(root, 'docs/matrix.md');
const today = registry.updatedAt;

const byGroup = registry.surfaces.reduce((acc, surface) => {
  (acc[surface.group] ||= []).push(surface);
  return acc;
}, {});

const groupTitles = {
  'public-marketing': 'Public Marketing',
  'product-app': 'Product App',
  knowledge: 'Knowledge',
  'api-control': 'API and Control',
  'agent-registry': 'Agent Registry',
  'control-plane': 'Control Plane',
  community: 'Community',
  legacy: 'Legacy and External',
};

function escapeCell(value) {
  return String(value)
    .replaceAll('|', '\\|')
    .replaceAll('\n', '<br />');
}

function routeSummary(surface) {
  return surface.routes.map((r) => escapeCell(r)).join('<br />');
}

function gapSummary(surface) {
  return (surface.gaps?.length ? surface.gaps : ['—']).map((r) => escapeCell(r)).join('<br />');
}

let inventory = `# Inventory\n\n> Generated from \`registry/web-surfaces.json\` on ${today}.\n>\n> This is the human view of the SSOT.\n\n`;

for (const [group, surfaces] of Object.entries(byGroup)) {
  inventory += `## ${groupTitles[group] || group}\n\n`;
  inventory += `| Surface | URL | Repo | Deploy | Auth | Status | Routes | Gaps |\n|---|---|---|---|---|---|---|---|\n`;
  for (const surface of surfaces) {
    inventory += `| ${escapeCell(surface.name)} | ${escapeCell(surface.url)} | ${escapeCell(surface.repo)} | ${escapeCell(surface.deployTarget)} | ${escapeCell(surface.auth)} | ${escapeCell(surface.status)} | ${routeSummary(surface)} | ${gapSummary(surface)} |\n`;
  }
  inventory += '\n';
}

let matrix = `# Matrix\n\n> Generated from \`registry/web-surfaces.json\` on ${today}.\n>\n> Domain → repo → deploy → auth → route group mapping.\n\n| Domain | Canonical URL | Repo | Deploy | Auth | Owner | Status | Primary routes |\n|---|---|---|---|---|---|---|---|\n`;

for (const surface of registry.surfaces) {
  matrix += `| ${escapeCell(surface.domain || '—')} | ${escapeCell(surface.url)} | ${escapeCell(surface.repo)} | ${escapeCell(surface.deployTarget)} | ${escapeCell(surface.auth)} | ${escapeCell(surface.owner)} | ${escapeCell(surface.status)} | ${routeSummary(surface)} |\n`;
}

await fs.writeFile(outInventory, inventory, 'utf8');
await fs.writeFile(outMatrix, matrix, 'utf8');
console.log(`Generated ${path.relative(root, outInventory)} and ${path.relative(root, outMatrix)}`);
