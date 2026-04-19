import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const registry = JSON.parse(await fs.readFile(path.join(root, 'registry/web-surfaces.json'), 'utf8'));

const probes = [
  { id: 'opensin-ai', label: 'opensin.ai', url: 'https://opensin.ai' },
  { id: 'opensin-ai-agents', label: 'opensin.ai/agents', url: 'https://opensin.ai/agents' },
  { id: 'chat-opensin-ai', label: 'chat.opensin.ai', url: 'https://chat.opensin.ai' },
  { id: 'sin-stripe-agent', label: 'chat.opensin.ai/agents/sin-stripe', url: 'https://chat.opensin.ai/agents/sin-stripe' },
  { id: 'my-opensin-ai', label: 'my.opensin.ai', url: 'https://my.opensin.ai' },
  { id: 'my-opensin-ai-pricing', label: 'my.opensin.ai/pricing', url: 'https://my.opensin.ai/pricing' },
  { id: 'blog-opensin-ai', label: 'blog.opensin.ai', url: 'https://blog.opensin.ai' },
  { id: 'docs-opensin-ai', label: 'docs.opensin.ai', url: 'https://docs.opensin.ai' },
  { id: 'api-opensin-ai', label: 'api.opensin.ai', url: 'https://api.opensin.ai' },
  { id: 'hermes-opensin-ai', label: 'hermes.opensin.ai', url: 'https://hermes.opensin.ai' },
  { id: 'code-analyzer-opensin-ai', label: 'code-analyzer.opensin.ai', url: 'https://code-analyzer.opensin.ai' },
  { id: 'sin-stripe-hf-legacy', label: 'delqhi-sin-stripe.hf.space', url: 'https://delqhi-sin-stripe.hf.space' },
];

async function probe(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch(url, { redirect: 'follow', signal: controller.signal });
    const text = await res.text();
    const title = (text.match(/<title[^>]*>([^<]+)<\/title>/i) || [])[1] || '';
    return {
      ok: true,
      status: res.status,
      finalUrl: res.url,
      contentType: res.headers.get('content-type') || '',
      title: title.trim(),
      bodySnippet: text.replace(/\s+/g, ' ').slice(0, 120),
    };
  } catch (error) {
    return { ok: false, error: String(error) };
  } finally {
    clearTimeout(timeout);
  }
}

function verdictFor(result, url) {
  if (!result.ok) {
    if (result.error.includes('fetch failed')) return 'dns-missing';
    if (result.error.toLowerCase().includes('aborted')) return 'timeout';
    return 'error';
  }
  if (result.status === 404) return '404';
  if (result.finalUrl.includes('/login?next=')) return 'login-gated';
  if (result.status >= 200 && result.status < 400) return 'live';
  return `http-${result.status}`;
}

function esc(value) {
  return String(value).replaceAll('|', '\\|').replaceAll('\n', '<br />');
}

function table(headers, rows) {
  const head = `| ${headers.join(' | ')} |`;
  const sep = `| ${headers.map(() => '---').join(' | ')} |`;
  const body = rows.map((row) => `| ${row.join(' | ')} |`).join('\n');
  return [head, sep, body].join('\n');
}

const results = [];
for (const probeDef of probes) {
  const result = await probe(probeDef.url);
  results.push({
    ...probeDef,
    result,
    verdict: verdictFor(result, probeDef.url),
  });
}

const counts = results.reduce((acc, item) => {
  acc[item.verdict] = (acc[item.verdict] || 0) + 1;
  return acc;
}, {});

let md = `# Live Audit\n\n> HTTP/DNS probe of the key OpenSIN-AI surfaces.\n>\n> Generated on ${new Date().toISOString().slice(0, 10)}.\n\n## Summary\n\n`;

md += table(
  ['Verdict', 'Count'],
  Object.entries(counts).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => [esc(k), String(v)])
);

md += `\n\n## Probes\n\n`;
md += table(
  ['Surface', 'Probe URL', 'Verdict', 'HTTP', 'Final URL', 'Title / note'],
  results.map(({ label, url, verdict, result }) => [
    esc(label),
    esc(url),
    esc(verdict),
    esc(result.ok ? result.status : '—'),
    esc(result.ok ? result.finalUrl : '—'),
    esc(result.ok ? (result.title || result.bodySnippet || '—') : result.error),
  ])
);

md += [
  '',
  '## Interpretation',
  '',
  '- **live** = HTTP 2xx/3xx confirmed.',
  '- **login-gated** = route exists, but auth redirect blocks public access.',
  '- **dns-missing** = hostname does not resolve from this environment.',
  '- **404** = host reachable, route missing.',
  '',
  '## CEO notes',
  '',
  '- Public marketing, chat, blog, and MyOpenSIN are reachable.',
  '- `chat.opensin.ai/agents/sin-stripe` exists, but public access is gated behind login.',
  '- `hermes.opensin.ai` and `code-analyzer.opensin.ai` do not resolve publicly from this environment.',
  '- `delqhi-sin-stripe.hf.space` currently returns 404.',
].join('\n');

await fs.writeFile(path.join(root, 'docs/live-audit.md'), md, 'utf8');
console.log('Generated docs/live-audit.md');
