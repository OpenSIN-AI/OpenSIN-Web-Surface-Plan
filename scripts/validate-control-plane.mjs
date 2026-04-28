import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const controlPlanePath = path.join(root, 'registry/docs-surface-refresh-control-plane.json');
const controlPlane = JSON.parse(await fs.readFile(controlPlanePath, 'utf8'));
const errors = [];

const requiredTopLevel = [
  'program',
  'repositoryResponsibilities',
  'issueRegistry',
  'dependencyGraph',
  'semverPolicy',
  'mergeOrder',
  'releaseOrder',
  'commentPolicy',
  'changelogNotes',
];

for (const key of requiredTopLevel) {
  if (!(key in controlPlane)) errors.push(`missing top-level field: ${key}`);
}

if (controlPlane.program?.architecture?.docsRuntime !== 'VitePress') {
  errors.push('program.architecture.docsRuntime must remain VitePress');
}

if (controlPlane.program?.baseSha !== '0fde4c78d4cc943976a4217d26236a53dc22d117') {
  errors.push('program.baseSha must match the issue base SHA');
}

if (!Array.isArray(controlPlane.repositoryResponsibilities) || controlPlane.repositoryResponsibilities.length < 3) {
  errors.push('repositoryResponsibilities must include the surface plan, docs, and design repos');
}

const issueIds = new Set();
for (const issue of controlPlane.issueRegistry || []) {
  if (!issue.id || !issue.repo || !issue.number || !issue.url || !issue.release) {
    errors.push(`issue entry missing required fields: ${JSON.stringify(issue)}`);
    continue;
  }
  if (issueIds.has(issue.id)) errors.push(`duplicate issue id: ${issue.id}`);
  issueIds.add(issue.id);
}

for (const requiredId of ['surface-plan-1', 'surface-plan-2', 'docs-142', 'docs-143', 'design-1']) {
  if (!issueIds.has(requiredId)) errors.push(`missing required issue: ${requiredId}`);
}

const releaseTargets = new Map((controlPlane.semverPolicy?.releases || []).map((entry) => [entry.repo, entry.target]));
if (releaseTargets.get('OpenSIN-AI/OpenSIN-documentation') !== 'v1.1.0') {
  errors.push('OpenSIN-documentation target release must be v1.1.0');
}
if (releaseTargets.get('OpenSIN-AI/awesome-OpenSIN-design') !== 'v0.1.0') {
  errors.push('awesome-OpenSIN-design target release must be v0.1.0');
}

const mergeOrderIds = (controlPlane.mergeOrder || []).map((entry) => entry.id);
for (const requiredId of ['surface-plan-2', 'design-1', 'docs-142', 'docs-143']) {
  if (!mergeOrderIds.includes(requiredId)) errors.push(`mergeOrder missing ${requiredId}`);
}

if (!Array.isArray(controlPlane.commentPolicy?.requiredFor) || controlPlane.commentPolicy.requiredFor.length < 3) {
  errors.push('commentPolicy.requiredFor must document non-obvious theme/design cases');
}

if (!Array.isArray(controlPlane.changelogNotes) || controlPlane.changelogNotes.length === 0) {
  errors.push('changelogNotes must contain at least one entry');
}

if (errors.length) {
  console.error(`Control-plane validation failed:
${errors.map((error) => `- ${error}`).join('\n')}`);
  process.exit(1);
}

console.log(`Control plane OK — ${controlPlane.issueRegistry.length} issues tracked, ${controlPlane.mergeOrder.length} merge steps.`);
