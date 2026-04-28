# Live Audit

> HTTP/DNS probe of the key OpenSIN-AI surfaces.
>
> Generated on 2026-04-19.

## Summary

| Verdict | Count |
| --- | --- |
| 404 | 2 |
| dns-missing | 3 |
| live | 6 |
| login-gated | 2 |

## Probes

| Surface | Probe URL | Verdict | HTTP | Final URL | Title / note |
| --- | --- | --- | --- | --- | --- |
| opensin.ai | https://opensin.ai | live | 200 | https://opensin.ai/ | OpenSIN — AI Agent Orchestration Platform |
| opensin.ai/agents | https://opensin.ai/agents | 404 | 404 | https://opensin.ai/agents | OpenSIN — Loading... |
| chat.opensin.ai | https://chat.opensin.ai | login-gated | 200 | https://chat.opensin.ai/login?next=%2F | OpenSIN Chat — AI Chat &amp; Fleet Control |
| chat.opensin.ai/agents/sin-stripe | https://chat.opensin.ai/agents/sin-stripe | login-gated | 200 | https://chat.opensin.ai/login?next=%2Fagents%2Fsin-stripe | OpenSIN Chat — AI Chat &amp; Fleet Control |
| my.opensin.ai | https://my.opensin.ai | live | 200 | https://my.opensin.ai/ | MyOpenSIN — Modulare A2A-Teams für Output und Umsatz |
| my.opensin.ai/pricing | https://my.opensin.ai/pricing | live | 200 | https://my.opensin.ai/pricing | MyOpenSIN — Modulare A2A-Teams für Output und Umsatz |
| blog.opensin.ai | https://blog.opensin.ai | live | 200 | https://opensin-blog.pages.dev/ | OpenSIN Engineering Blog |
| docs.opensin.ai | https://docs.opensin.ai | live | 200 | https://docs.opensin.ai/ | OpenSIN-AI Documentation |
| developers.opensin.ai | https://developers.opensin.ai | live | 200 | https://developers.opensin.ai/ | OpenSIN Developers |
| api.opensin.ai | https://api.opensin.ai | dns-missing | — | — | TypeError: fetch failed |
| hermes.opensin.ai | https://hermes.opensin.ai | dns-missing | — | — | TypeError: fetch failed |
| code-analyzer.opensin.ai | https://code-analyzer.opensin.ai | dns-missing | — | — | TypeError: fetch failed |
| delqhi-sin-stripe.hf.space | https://delqhi-sin-stripe.hf.space | 404 | 404 | https://delqhi-sin-stripe.hf.space/ | Hugging Face – The AI community building the future. |
## Interpretation

- **live** = HTTP 2xx/3xx confirmed.
- **login-gated** = route exists, but auth redirect blocks public access.
- **dns-missing** = hostname does not resolve from this environment.
- **404** = host reachable, route missing.

## CEO notes

- Public marketing, chat, blog, consumer docs, developer docs, and MyOpenSIN are reachable.
- `chat.opensin.ai/agents/sin-stripe` exists, but public access is gated behind login.
- `hermes.opensin.ai` and `code-analyzer.opensin.ai` do not resolve publicly from this environment.
- `delqhi-sin-stripe.hf.space` currently returns 404.
