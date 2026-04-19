import fs from 'node:fs/promises';
import path from 'node:path';

const workspaceRoot = process.env.OPENSIN_WORKSPACE_ROOT || '/Users/jeremy/dev';
const repoPaths = {
  marketing: path.join(workspaceRoot, 'website-opensin.ai'),
  app: path.join(workspaceRoot, 'OpenSIN-WebApp'),
  marketplace: path.join(workspaceRoot, 'website-my.opensin.ai'),
  blog: path.join(workspaceRoot, 'website-blog.opensin.ai'),
  docs: path.join(workspaceRoot, 'OpenSIN-documentation'),
  backend: path.join(workspaceRoot, 'OpenSIN-Backend'),
  bridge: path.join(workspaceRoot, 'OpenSIN-Bridge'),
};

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function readIfExists(filePath) {
  if (!(await exists(filePath))) return null;
  return fs.readFile(filePath, 'utf8');
}

async function walk(dir) {
  const results = [];
  if (!(await exists(dir))) return results;
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...await walk(full));
    else results.push(full);
  }
  return results;
}

function titleFromSegment(segment) {
  return segment
    .replace(/^\[|\]$/g, '')
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function slugToRoute(slug) {
  return slug.endsWith('/') ? slug : `${slug}/`;
}

function extractRegexMatches(source, regex) {
  const matches = [];
  if (!source) return matches;
  let match;
  while ((match = regex.exec(source))) matches.push(match[1]);
  return matches;
}

function normalizeRoute(route) {
  return route.replace(/\/$/, '') || '/';
}

function sortRoutes(routes) {
  return [...new Set(routes)].sort((a, b) => a.localeCompare(b));
}

async function extractMarketingRoutes() {
  const source = await readIfExists(path.join(repoPaths.marketing, 'src/App.tsx'));
  const routes = extractRegexMatches(source, /<Route path="([^"]+)"/g).map(normalizeRoute);
  return sortRoutes(routes);
}

async function extractMarketplaceRoutes() {
  const source = await readIfExists(path.join(repoPaths.marketplace, 'src/App.tsx'));
  const routes = extractRegexMatches(source, /<Route path="([^"]+)"/g).map(normalizeRoute);
  const pageFiles = (await walk(path.join(repoPaths.marketplace, 'src/pages')))
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => path.relative(path.join(repoPaths.marketplace, 'src'), file).replace(/\\/g, '/'));
  return { routes: sortRoutes(routes), pageFiles: pageFiles.sort() };
}

async function extractBlogRoutes() {
  const source = await readIfExists(path.join(repoPaths.blog, 'post/posts.ts'));
  const posts = extractRegexMatches(source, /url:\s*'([^']+)'/g).map(slugToRoute);
  const home = '/';
  return sortRoutes([home, ...posts]);
}

async function extractDocsSections() {
  const source = await readIfExists(path.join(repoPaths.docs, 'docs/.vitepress/config.mjs'));
  const links = extractRegexMatches(source, /link:\s*'([^']+)'/g).filter((link) => link.startsWith('/'));
  const topLevel = [...new Set(links.map((link) => '/' + link.split('/').filter(Boolean)[0]))].sort();
  return { links: sortRoutes(links), topLevel };
}

async function discoverNextRoutes(appDir) {
  const files = (await walk(appDir)).filter((file) => file.endsWith(path.sep + 'page.tsx'));
  return files.map((file) => {
    const rel = path.relative(appDir, file).split(path.sep);
    rel.pop(); // remove page.tsx
    if (rel.length === 0) return { route: '/', file };
    const route = '/' + rel.map((segment) => {
      if (segment.startsWith('[') && segment.endsWith(']')) return `:${segment.slice(1, -1)}`;
      return segment;
    }).join('/');
    return { route: normalizeRoute(route), file };
  }).sort((a, b) => a.route.localeCompare(b.route));
}

async function extractBackendEndpoints() {
  const main = await readIfExists(path.join(repoPaths.backend, 'app/main.py'));
  const bridge = await readIfExists(path.join(repoPaths.bridge, 'server/src/index.ts'));
  const routerPrefixes = extractRegexMatches(main, /prefix=\"([^\"]+)\"/g);
  const bridgePaths = extractRegexMatches(bridge, /path === '([^']+)'/g);
  return sortRoutes([...routerPrefixes, ...bridgePaths]);
}

function groupByTopLevel(routes) {
  const groups = new Map();
  for (const item of routes) {
    const route = typeof item === 'string' ? item : item.route;
    const segment = route === '/' ? 'root' : route.split('/').filter(Boolean)[0];
    const key = segment || 'root';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }
  return groups;
}

function mdTable(headers, rows) {
  const head = `| ${headers.join(' | ')} |`;
  const sep = `| ${headers.map(() => '---').join(' | ')} |`;
  const body = rows.map((row) => `| ${row.join(' | ')} |`).join('\n');
  return [head, sep, body].join('\n');
}

function esc(value) {
  return String(value).replaceAll('|', '\\|').replaceAll('\n', '<br />');
}

function routeLabel(route) {
  if (route === '/') return '/';
  return route;
}

async function main() {
  const marketingRoutes = await extractMarketingRoutes();
  const marketplace = await extractMarketplaceRoutes();
  const blogRoutes = await extractBlogRoutes();
  const docsSections = await extractDocsSections();
  const appRoutes = await discoverNextRoutes(path.join(repoPaths.app, 'app'));
  const backendEndpoints = await extractBackendEndpoints();

  const appGroups = groupByTopLevel(appRoutes);
  const routeCount = appRoutes.length;

  let md = `# Subpages\n\n> Source-backed route inventory for OpenSIN-AI websites and supporting surfaces.\n>\n> Generated on ${new Date().toISOString().slice(0, 10)} from local repo sources.\n\n## Overview\n\n`;

  md += mdTable(
    ['Surface', 'Source', 'Routes / endpoints', 'Evaluation'],
    [
      ['opensin.ai', 'website-opensin.ai', String(marketingRoutes.length), 'Live routes defined in React Router'],
      ['chat.opensin.ai', 'OpenSIN-WebApp', String(routeCount), 'Largest surface; grouped by route family'],
      ['my.opensin.ai', 'website-my.opensin.ai', String(marketplace.routes.length), '2 active routes + 2 source-only page components'],
      ['blog.opensin.ai', 'website-blog.opensin.ai', String(blogRoutes.length), 'Home + post pages from posts registry'],
      ['docs.opensin.ai', 'OpenSIN-documentation', String(docsSections.links.length), 'Docs categories extracted from VitePress config'],
      ['api.opensin.ai', 'OpenSIN-Backend + OpenSIN-Bridge', String(backendEndpoints.length), 'API prefixes and bridge endpoints'],
    ]
  );

  md += `\n\n## opensin.ai\n\nSource: \`website-opensin.ai/src/App.tsx\`\n\n${mdTable(
    ['Route', 'Status', 'Notes'],
    marketingRoutes.map((route) => [esc(route), 'live', esc(route === '/' ? 'Homepage' : 'Marketing page')])
  )}\n`;

  md += `\n## chat.opensin.ai\n\nSource: \`OpenSIN-WebApp/app/**/page.tsx\`\n\n`;

  for (const [group, items] of appGroups.entries()) {
    const sorted = [...items].sort((a, b) => a.route.localeCompare(b.route));
    md += `<details${group === 'root' ? ' open' : ''}>\n<summary><strong>${titleFromSegment(group)}</strong> (${sorted.length})</summary>\n\n`;
    md += mdTable(
      ['Route', 'Source file', 'Status'],
      sorted.map(({ route, file }) => [esc(routeLabel(route)), esc(path.relative(workspaceRoot, file)), 'active'])
    );
    md += '\n\n</details>\n\n';
  }

  md += `## my.opensin.ai\n\nSource: \`website-my.opensin.ai/src/App.tsx\`\n\n`;
  md += mdTable(
    ['Route', 'Status', 'Notes'],
    marketplace.routes.map((route) => [esc(route), 'active', route === '/' ? 'Landing page with pricing + FAQ sections' : 'Current React Router route'])
  );
  md += `\n\n**Source-only components not currently routed:** ${marketplace.pageFiles.filter((file) => !file.includes('App.tsx')).map(esc).join(', ') || '—'}\n`;

  md += `\n## blog.opensin.ai\n\nSource: \`website-blog.opensin.ai/post/posts.ts\`\n\n`;
  md += mdTable(
    ['Route', 'Status', 'Notes'],
    blogRoutes.map((route) => [esc(route), 'active', route === '/' ? 'Blog index' : 'Published post route'])
  );

  md += `\n## docs.opensin.ai\n\nSource: \`OpenSIN-documentation/docs/.vitepress/config.mjs\`\n\n`;
  md += mdTable(
    ['Section / route', 'Status', 'Notes'],
    docsSections.topLevel.map((section) => [esc(section), 'active', 'Top-level docs section'])
  );

  md += `\n### Docs links (selected)\n\n`;
  md += mdTable(
    ['Route', 'Status', 'Notes'],
    docsSections.links.map((route) => [esc(route), 'active', route === '/guides/dynamic-input-commands' ? 'Dynamic input command reference' : 'Docs route'])
  );

  md += `\n## api.opensin.ai\n\nSource: \`OpenSIN-Backend/app/main.py\` + \`OpenSIN-Bridge/server/src/index.ts\`\n\n`;
  md += mdTable(
    ['Endpoint / prefix', 'Status', 'Notes'],
    backendEndpoints.map((endpoint) => [esc(endpoint), 'active', endpoint.startsWith('/api/v1/stripe') ? 'Billing flow surface' : 'API or router prefix'])
  );

  md += `\n## Evaluation summary\n\n- The **largest live surface** is \`chat.opensin.ai\` with ${routeCount} routes.\n- The **most SEO-heavy surface** is \`opensin.ai\` with ${marketingRoutes.length} marketing routes.\n- The **billing path** is split across \`api.opensin.ai\`, \`chat.opensin.ai\`, and \`my.opensin.ai\`.\n- The **blog** is content-driven and route-complete from the posts registry.\n- The **docs** section is large but organized by top-level site areas.\n\n## Open questions\n\n- Which \`my.opensin.ai\` deploy target is canonical?\n- Is \`/pricing\` a planned route or a missing route on \`chat.opensin.ai\`?\n- Should agent pages live in \`chat.opensin.ai\` or a separate \`opensin.ai/agents\` catalog?\n- Which surfaces are source-only and not meant to be public routes?\n`;

  await fs.writeFile(path.join(workspaceRoot, 'OpenSIN-Web-Surface-Plan/docs/subpages.md'), md, 'utf8');
  console.log('Generated docs/subpages.md');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
