# Inventory

> Generated from `registry/web-surfaces.json` on 2026-04-20.
>
> This is the human view of the SSOT.

## Public Marketing

| Surface | URL | Repo | Deploy | Auth | Status | Routes | Gaps |
|---|---|---|---|---|---|---|---|
| OpenSIN Marketing | https://opensin.ai | website-opensin.ai | Cloudflare Pages | public | live | /<br />/agents<br />/ai-agents<br />/autonomous-ai-agents<br />/multi-agent-orchestration<br />/awesome-opensin-plugins<br />/claude-code-alternative<br />/claude-vs-opensin<br />/enterprise<br />/manus-vs-opensin<br />/open-source<br />/openclaw-alternative<br />/openclaw-vs-opensin<br />/a2a-protocol | Performance budget must stay under 2s render. |

## Product App

| Surface | URL | Repo | Deploy | Auth | Status | Routes | Gaps |
|---|---|---|---|---|---|---|---|
| OpenSIN Chat | https://chat.opensin.ai | OpenSIN-WebApp | Vercel | login-required | live | /<br />/login<br />/signup<br />/dashboard<br />/settings<br />/agents/sin-stripe | /pricing is not implemented yet. |
| OpenSIN Marketplace | https://my.opensin.ai | website-my.opensin.ai | Vercel (verify) | mixed | needs-verification | /<br />/pricing<br />/checkout<br />/dashboard | Canonical deploy target needs confirmation. |

## Knowledge

| Surface | URL | Repo | Deploy | Auth | Status | Routes | Gaps |
|---|---|---|---|---|---|---|---|
| OpenSIN Documentation | https://docs.opensin.ai | OpenSIN-documentation | Vercel | public | live | /guide/*<br />/api/*<br />/architecture/*<br />/best-practices/*<br />/bridges/*<br />/examples/*<br />/fleet/*<br />/governance/*<br />/migrations/*<br />/plans/*<br />/plugins/*<br />/runbooks/*<br />/sdk/*<br />/tutorials/*<br />/audit/*<br />/03_ops/* | — |
| OpenSIN Blog | https://blog.opensin.ai | website-blog.opensin.ai / Biz-SIN-Blog-Posts (verify) | Vercel or Pages (verify) | public | needs-verification | /<br />/rss.xml<br />/posts/*<br />/tags/* | Repository and deploy target need a canonical confirmation. |

## API and Control

| Surface | URL | Repo | Deploy | Auth | Status | Routes | Gaps |
|---|---|---|---|---|---|---|---|
| OpenSIN API | https://api.opensin.ai | OpenSIN-Backend | Cloudflare Workers / API | token-and-session | live | /auth<br />/billing<br />/v1/stripe/webhook<br />/v1/stripe/checkout<br />/v1/subscription/status<br />/v1/decide<br />/v1/persona<br />/v1/evaluate-study | Stripe handlers are currently stubbed in bridge integration. |

## Agent Registry

| Surface | URL | Repo | Deploy | Auth | Status | Routes | Gaps |
|---|---|---|---|---|---|---|---|
| OpenSIN Agent Catalog | https://opensin.ai/agents | website-opensin.ai | Cloudflare Pages | public | live | /agents | — |
| SIN-Stripe Agent Card | https://chat.opensin.ai/agents/sin-stripe | A2A-SIN-Stripe | HF Space / A2A registry | public-card | ready | /agents/sin-stripe<br />/.well-known/agent-card.json<br />/a2a/v1 | HF Space landing URL probed as 404; deployment target needs verification. |

## Control Plane

| Surface | URL | Repo | Deploy | Auth | Status | Routes | Gaps |
|---|---|---|---|---|---|---|---|
| Hermes Control Plane | https://hermes.opensin.ai | verify | verify | internal | unverified | /<br />/health<br />/dashboard | Repo and deploy target not yet confirmed in this plan. |
| Code Analyzer Surface | https://code-analyzer.opensin.ai | verify | verify | internal | unverified | / | Canonical repo and deploy target need confirmation. |

## Community

| Surface | URL | Repo | Deploy | Auth | Status | Routes | Gaps |
|---|---|---|---|---|---|---|---|
| OpenSIN GitHub Org | https://github.com/OpenSIN-AI | n/a | GitHub | public | live | /OpenSIN-AI | — |
| OpenSIN Discord | https://discord.gg/opensin | n/a | Discord | public | live | /opensin | — |
| OpenSIN Telegram | https://t.me/opensin | n/a | Telegram | public | live | /opensin | — |

## Legacy and External

| Surface | URL | Repo | Deploy | Auth | Status | Routes | Gaps |
|---|---|---|---|---|---|---|---|
| SIN-Stripe HF Space (legacy probe) | https://delqhi-sin-stripe.hf.space | A2A-SIN-Stripe | Hugging Face Space | public | 404-on-probe | /<br />/a2a/v1<br />/health | Direct probe returned 404 during audit. |

