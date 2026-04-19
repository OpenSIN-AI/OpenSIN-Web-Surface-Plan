# Matrix

> Generated from `registry/web-surfaces.json` on 2026-04-20.
>
> Domain → repo → deploy → auth → route group mapping.

| Domain | Canonical URL | Repo | Deploy | Auth | Owner | Status | Primary routes |
|---|---|---|---|---|---|---|---|
| opensin.ai | https://opensin.ai | website-opensin.ai | Cloudflare Pages | public | web-growth | live | /<br />/agents<br />/ai-agents<br />/autonomous-ai-agents<br />/multi-agent-orchestration<br />/awesome-opensin-plugins<br />/claude-code-alternative<br />/claude-vs-opensin<br />/enterprise<br />/manus-vs-opensin<br />/open-source<br />/openclaw-alternative<br />/openclaw-vs-opensin<br />/a2a-protocol |
| chat.opensin.ai | https://chat.opensin.ai | OpenSIN-WebApp | Vercel | login-required | platform-app | live | /<br />/login<br />/signup<br />/dashboard<br />/settings<br />/agents/sin-stripe |
| my.opensin.ai | https://my.opensin.ai | website-my.opensin.ai | Vercel (verify) | mixed | commerce | needs-verification | /<br />/pricing<br />/checkout<br />/dashboard |
| docs.opensin.ai | https://docs.opensin.ai | OpenSIN-documentation | Vercel | public | docs | live | /guide/*<br />/api/*<br />/architecture/*<br />/best-practices/*<br />/bridges/*<br />/examples/*<br />/fleet/*<br />/governance/*<br />/migrations/*<br />/plans/*<br />/plugins/*<br />/runbooks/*<br />/sdk/*<br />/tutorials/*<br />/audit/*<br />/03_ops/* |
| blog.opensin.ai | https://blog.opensin.ai | website-blog.opensin.ai / Biz-SIN-Blog-Posts (verify) | Vercel or Pages (verify) | public | content | needs-verification | /<br />/rss.xml<br />/posts/*<br />/tags/* |
| api.opensin.ai | https://api.opensin.ai | OpenSIN-Backend | Cloudflare Workers / API | token-and-session | backend | live | /auth<br />/billing<br />/v1/stripe/webhook<br />/v1/stripe/checkout<br />/v1/subscription/status<br />/v1/decide<br />/v1/persona<br />/v1/evaluate-study |
| opensin.ai | https://opensin.ai/agents | website-opensin.ai | Cloudflare Pages | public | web-growth | live | /agents |
| chat.opensin.ai | https://chat.opensin.ai/agents/sin-stripe | A2A-SIN-Stripe | HF Space / A2A registry | public-card | team-finance | ready | /agents/sin-stripe<br />/.well-known/agent-card.json<br />/a2a/v1 |
| hermes.opensin.ai | https://hermes.opensin.ai | verify | verify | internal | control-plane | unverified | /<br />/health<br />/dashboard |
| code-analyzer.opensin.ai | https://code-analyzer.opensin.ai | verify | verify | internal | platform | unverified | / |
| github.com | https://github.com/OpenSIN-AI | n/a | GitHub | public | org | live | /OpenSIN-AI |
| discord.gg | https://discord.gg/opensin | n/a | Discord | public | community | live | /opensin |
| t.me | https://t.me/opensin | n/a | Telegram | public | community | live | /opensin |
| delqhi-sin-stripe.hf.space | https://delqhi-sin-stripe.hf.space | A2A-SIN-Stripe | Hugging Face Space | public | team-finance | 404-on-probe | /<br />/a2a/v1<br />/health |
