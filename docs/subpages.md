# Subpages

> Source-backed route inventory for OpenSIN-AI websites and supporting surfaces.
>
> Generated on 2026-04-19 from local repo sources.

## Overview

| Surface | Source | Routes / endpoints | Evaluation |
| --- | --- | --- | --- |
| opensin.ai | website-opensin.ai | 21 | Live routes defined in React Router |
| chat.opensin.ai | OpenSIN-WebApp | 162 | Largest surface; grouped by route family |
| my.opensin.ai | website-my.opensin.ai | 3 | 2 active routes + 2 source-only page components |
| blog.opensin.ai | website-blog.opensin.ai | 17 | Home + post pages from posts registry |
| docs.opensin.ai | OpenSIN-documentation | 54 | Docs categories extracted from VitePress config |
| api.opensin.ai | OpenSIN-Backend + OpenSIN-Bridge | 22 | API prefixes and bridge endpoints |

## opensin.ai

Source: `website-opensin.ai/src/App.tsx`

| Route | Status | Notes |
| --- | --- | --- |
| / | live | Homepage |
| /a2a-protocol | live | Marketing page |
| /ai-agents | live | Marketing page |
| /autonomous-ai-agents | live | Marketing page |
| /awesome-opensin-plugins | live | Marketing page |
| /blog/:id | live | Marketing page |
| /browser-computer-use | live | Marketing page |
| /checkout-success | live | Marketing page |
| /claude-code-alternative | live | Marketing page |
| /claude-vs-opensin | live | Marketing page |
| /docs | live | Marketing page |
| /enterprise | live | Marketing page |
| /manus-vs-opensin | live | Marketing page |
| /multi-agent-orchestration | live | Marketing page |
| /my-opensin | live | Marketing page |
| /open-source | live | Marketing page |
| /openclaw-alternative | live | Marketing page |
| /openclaw-vs-opensin | live | Marketing page |
| /paperclip-vs-opensin | live | Marketing page |
| /simone-mcp | live | Marketing page |
| /why | live | Marketing page |

## chat.opensin.ai

Source: `OpenSIN-WebApp/app/**/page.tsx`

<details open>
<summary><strong>Root</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| / | OpenSIN-WebApp/app/page.tsx | active |

</details>

<details>
<summary><strong>Activity</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /activity | OpenSIN-WebApp/app/activity/page.tsx | active |

</details>

<details>
<summary><strong>Agents</strong> (115)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /agents/simone-mcp | OpenSIN-WebApp/app/agents/simone-mcp/page.tsx | active |
| /agents/sin-2captcha-worker | OpenSIN-WebApp/app/agents/sin-2captcha-worker/page.tsx | active |
| /agents/sin-apple-calendar-contacts | OpenSIN-WebApp/app/agents/sin-apple-calendar-contacts/page.tsx | active |
| /agents/sin-apple-device-control | OpenSIN-WebApp/app/agents/sin-apple-device-control/page.tsx | active |
| /agents/sin-apple-facetime | OpenSIN-WebApp/app/agents/sin-apple-facetime/page.tsx | active |
| /agents/sin-apple-imessage | OpenSIN-WebApp/app/agents/sin-apple-imessage/page.tsx | active |
| /agents/sin-apple-mail | OpenSIN-WebApp/app/agents/sin-apple-mail/page.tsx | active |
| /agents/sin-apple-mobile | OpenSIN-WebApp/app/agents/sin-apple-mobile/page.tsx | active |
| /agents/sin-apple-notes | OpenSIN-WebApp/app/agents/sin-apple-notes/page.tsx | active |
| /agents/sin-apple-notifications | OpenSIN-WebApp/app/agents/sin-apple-notifications/page.tsx | active |
| /agents/sin-apple-photos-files | OpenSIN-WebApp/app/agents/sin-apple-photos-files/page.tsx | active |
| /agents/sin-apple-reminders | OpenSIN-WebApp/app/agents/sin-apple-reminders/page.tsx | active |
| /agents/sin-apple-safari-webkit | OpenSIN-WebApp/app/agents/sin-apple-safari-webkit/page.tsx | active |
| /agents/sin-apple-shortcuts | OpenSIN-WebApp/app/agents/sin-apple-shortcuts/page.tsx | active |
| /agents/sin-apple-system-settings | OpenSIN-WebApp/app/agents/sin-apple-system-settings/page.tsx | active |
| /agents/sin-authenticator | OpenSIN-WebApp/app/agents/sin-authenticator/page.tsx | active |
| /agents/sin-backend | OpenSIN-WebApp/app/agents/sin-backend/page.tsx | active |
| /agents/sin-bugbounty | OpenSIN-WebApp/app/agents/sin-bugbounty/page.tsx | active |
| /agents/sin-cloudflare | OpenSIN-WebApp/app/agents/sin-cloudflare/page.tsx | active |
| /agents/sin-code-backend | OpenSIN-WebApp/app/agents/sin-code-backend/page.tsx | active |
| /agents/sin-code-command | OpenSIN-WebApp/app/agents/sin-code-command/page.tsx | active |
| /agents/sin-code-frontend | OpenSIN-WebApp/app/agents/sin-code-frontend/page.tsx | active |
| /agents/sin-code-fullstack | OpenSIN-WebApp/app/agents/sin-code-fullstack/page.tsx | active |
| /agents/sin-code-plugin | OpenSIN-WebApp/app/agents/sin-code-plugin/page.tsx | active |
| /agents/sin-code-tool | OpenSIN-WebApp/app/agents/sin-code-tool/page.tsx | active |
| /agents/sin-coder-bugcrowd-exploit | OpenSIN-WebApp/app/agents/sin-coder-bugcrowd-exploit/page.tsx | active |
| /agents/sin-coding-ceo | OpenSIN-WebApp/app/agents/sin-coding-ceo/page.tsx | active |
| /agents/sin-community | OpenSIN-WebApp/app/agents/sin-community/page.tsx | active |
| /agents/sin-competition-global-rivalry | OpenSIN-WebApp/app/agents/sin-competition-global-rivalry/page.tsx | active |
| /agents/sin-competition-global-security | OpenSIN-WebApp/app/agents/sin-competition-global-security/page.tsx | active |
| /agents/sin-designer | OpenSIN-WebApp/app/agents/sin-designer/page.tsx | active |
| /agents/sin-discord | OpenSIN-WebApp/app/agents/sin-discord/page.tsx | active |
| /agents/sin-frontend | OpenSIN-WebApp/app/agents/sin-frontend/page.tsx | active |
| /agents/sin-frontend-accessibility | OpenSIN-WebApp/app/agents/sin-frontend-accessibility/page.tsx | active |
| /agents/sin-frontend-app-shell | OpenSIN-WebApp/app/agents/sin-frontend-app-shell/page.tsx | active |
| /agents/sin-frontend-commerce-ui | OpenSIN-WebApp/app/agents/sin-frontend-commerce-ui/page.tsx | active |
| /agents/sin-frontend-dashboard-analytics | OpenSIN-WebApp/app/agents/sin-frontend-dashboard-analytics/page.tsx | active |
| /agents/sin-frontend-data-viz | OpenSIN-WebApp/app/agents/sin-frontend-data-viz/page.tsx | active |
| /agents/sin-frontend-design-systems | OpenSIN-WebApp/app/agents/sin-frontend-design-systems/page.tsx | active |
| /agents/sin-frontend-forms-workflows | OpenSIN-WebApp/app/agents/sin-frontend-forms-workflows/page.tsx | active |
| /agents/sin-frontend-mobile-responsive | OpenSIN-WebApp/app/agents/sin-frontend-mobile-responsive/page.tsx | active |
| /agents/sin-frontend-motion-interaction | OpenSIN-WebApp/app/agents/sin-frontend-motion-interaction/page.tsx | active |
| /agents/sin-frontend-performance | OpenSIN-WebApp/app/agents/sin-frontend-performance/page.tsx | active |
| /agents/sin-github-action | OpenSIN-WebApp/app/agents/sin-github-action/page.tsx | active |
| /agents/sin-github-issues | OpenSIN-WebApp/app/agents/sin-github-issues/page.tsx | active |
| /agents/sin-google-apps | OpenSIN-WebApp/app/agents/sin-google-apps/page.tsx | active |
| /agents/sin-google-apps/privacy | OpenSIN-WebApp/app/agents/sin-google-apps/privacy/page.tsx | active |
| /agents/sin-google-apps/terms | OpenSIN-WebApp/app/agents/sin-google-apps/terms/page.tsx | active |
| /agents/sin-hermesbote | OpenSIN-WebApp/app/agents/sin-hermesbote/page.tsx | active |
| /agents/sin-heypiggy | OpenSIN-WebApp/app/agents/sin-heypiggy/page.tsx | active |
| /agents/sin-instagram | OpenSIN-WebApp/app/agents/sin-instagram/page.tsx | active |
| /agents/sin-medium | OpenSIN-WebApp/app/agents/sin-medium/page.tsx | active |
| /agents/sin-mindrift | OpenSIN-WebApp/app/agents/sin-mindrift/page.tsx | active |
| /agents/sin-music-beats | OpenSIN-WebApp/app/agents/sin-music-beats/page.tsx | active |
| /agents/sin-music-community | OpenSIN-WebApp/app/agents/sin-music-community/page.tsx | active |
| /agents/sin-music-producer | OpenSIN-WebApp/app/agents/sin-music-producer/page.tsx | active |
| /agents/sin-music-singer | OpenSIN-WebApp/app/agents/sin-music-singer/page.tsx | active |
| /agents/sin-music-songwriter | OpenSIN-WebApp/app/agents/sin-music-songwriter/page.tsx | active |
| /agents/sin-music-videogen | OpenSIN-WebApp/app/agents/sin-music-videogen/page.tsx | active |
| /agents/sin-n8n | OpenSIN-WebApp/app/agents/sin-n8n/page.tsx | active |
| /agents/sin-opal | OpenSIN-WebApp/app/agents/sin-opal/page.tsx | active |
| /agents/sin-oraclecloud-mcp | OpenSIN-WebApp/app/agents/sin-oraclecloud-mcp/page.tsx | active |
| /agents/sin-passwordmanager | OpenSIN-WebApp/app/agents/sin-passwordmanager/page.tsx | active |
| /agents/sin-patents | OpenSIN-WebApp/app/agents/sin-patents/page.tsx | active |
| /agents/sin-reddit | OpenSIN-WebApp/app/agents/sin-reddit/page.tsx | active |
| /agents/sin-repo-sync | OpenSIN-WebApp/app/agents/sin-repo-sync/page.tsx | active |
| /agents/sin-research | OpenSIN-WebApp/app/agents/sin-research/page.tsx | active |
| /agents/sin-research/privacy | OpenSIN-WebApp/app/agents/sin-research/privacy/page.tsx | active |
| /agents/sin-research/terms | OpenSIN-WebApp/app/agents/sin-research/terms/page.tsx | active |
| /agents/sin-server | OpenSIN-WebApp/app/agents/sin-server/page.tsx | active |
| /agents/sin-shop-finance | OpenSIN-WebApp/app/agents/sin-shop-finance/page.tsx | active |
| /agents/sin-shop-logistic | OpenSIN-WebApp/app/agents/sin-shop-logistic/page.tsx | active |
| /agents/sin-simone-mcp | OpenSIN-WebApp/app/agents/sin-simone-mcp/page.tsx | active |
| /agents/sin-storage | OpenSIN-WebApp/app/agents/sin-storage/page.tsx | active |
| /agents/sin-stripe | OpenSIN-WebApp/app/agents/sin-stripe/page.tsx | active |
| /agents/sin-supabase | OpenSIN-WebApp/app/agents/sin-supabase/page.tsx | active |
| /agents/sin-tax | OpenSIN-WebApp/app/agents/sin-tax/page.tsx | active |
| /agents/sin-team-apple-apps | OpenSIN-WebApp/app/agents/sin-team-apple-apps/page.tsx | active |
| /agents/sin-team-company | OpenSIN-WebApp/app/agents/sin-team-company/page.tsx | active |
| /agents/sin-team-competition | OpenSIN-WebApp/app/agents/sin-team-competition/page.tsx | active |
| /agents/sin-team-creator | OpenSIN-WebApp/app/agents/sin-team-creator/page.tsx | active |
| /agents/sin-team-google-apps | OpenSIN-WebApp/app/agents/sin-team-google-apps/page.tsx | active |
| /agents/sin-team-marketing | OpenSIN-WebApp/app/agents/sin-team-marketing/page.tsx | active |
| /agents/sin-team-orchestrator | OpenSIN-WebApp/app/agents/sin-team-orchestrator/page.tsx | active |
| /agents/sin-team-shop | OpenSIN-WebApp/app/agents/sin-team-shop/page.tsx | active |
| /agents/sin-team-social | OpenSIN-WebApp/app/agents/sin-team-social/page.tsx | active |
| /agents/sin-team-survey | OpenSIN-WebApp/app/agents/sin-team-survey/page.tsx | active |
| /agents/sin-team-worker | OpenSIN-WebApp/app/agents/sin-team-worker/page.tsx | active |
| /agents/sin-telegrambot | OpenSIN-WebApp/app/agents/sin-telegrambot/page.tsx | active |
| /agents/sin-terminal | OpenSIN-WebApp/app/agents/sin-terminal/page.tsx | active |
| /agents/sin-tester | OpenSIN-WebApp/app/agents/sin-tester/page.tsx | active |
| /agents/sin-tiktok | OpenSIN-WebApp/app/agents/sin-tiktok/page.tsx | active |
| /agents/sin-tiktok-platform | OpenSIN-WebApp/app/agents/sin-tiktok-platform/page.tsx | active |
| /agents/sin-tiktok-shop | OpenSIN-WebApp/app/agents/sin-tiktok-shop/page.tsx | active |
| /agents/sin-tiktok-shop/privacy | OpenSIN-WebApp/app/agents/sin-tiktok-shop/privacy/page.tsx | active |
| /agents/sin-tiktok-shop/terms | OpenSIN-WebApp/app/agents/sin-tiktok-shop/terms/page.tsx | active |
| /agents/sin-tiktok/privacy | OpenSIN-WebApp/app/agents/sin-tiktok/privacy/page.tsx | active |
| /agents/sin-tiktok/terms | OpenSIN-WebApp/app/agents/sin-tiktok/terms/page.tsx | active |
| /agents/sin-worker-moltmarket-bidmaster | OpenSIN-WebApp/app/agents/sin-worker-moltmarket-bidmaster/page.tsx | active |
| /agents/sin-worker-moltmarket-deliver | OpenSIN-WebApp/app/agents/sin-worker-moltmarket-deliver/page.tsx | active |
| /agents/sin-worker-moltmarket-mcpcoder | OpenSIN-WebApp/app/agents/sin-worker-moltmarket-mcpcoder/page.tsx | active |
| /agents/sin-worker-moltmarket-paymaster | OpenSIN-WebApp/app/agents/sin-worker-moltmarket-paymaster/page.tsx | active |
| /agents/sin-worker-moltmarket-subcontractor | OpenSIN-WebApp/app/agents/sin-worker-moltmarket-subcontractor/page.tsx | active |
| /agents/sin-worker-nearmarket-architect | OpenSIN-WebApp/app/agents/sin-worker-nearmarket-architect/page.tsx | active |
| /agents/sin-worker-nearmarket-auditor | OpenSIN-WebApp/app/agents/sin-worker-nearmarket-auditor/page.tsx | active |
| /agents/sin-worker-nearmarket-coder | OpenSIN-WebApp/app/agents/sin-worker-nearmarket-coder/page.tsx | active |
| /agents/sin-worker-nearmarket-scout | OpenSIN-WebApp/app/agents/sin-worker-nearmarket-scout/page.tsx | active |
| /agents/sin-worker-nearmarket-scribe | OpenSIN-WebApp/app/agents/sin-worker-nearmarket-scribe/page.tsx | active |
| /agents/sin-worker-paidwork-mediarunner | OpenSIN-WebApp/app/agents/sin-worker-paidwork-mediarunner/page.tsx | active |
| /agents/sin-worker-paidwork-micropro | OpenSIN-WebApp/app/agents/sin-worker-paidwork-micropro/page.tsx | active |
| /agents/sin-worker-paidwork-paymaster | OpenSIN-WebApp/app/agents/sin-worker-paidwork-paymaster/page.tsx | active |
| /agents/sin-worker-paidwork-scout | OpenSIN-WebApp/app/agents/sin-worker-paidwork-scout/page.tsx | active |
| /agents/sin-worker-paidwork-surveyor | OpenSIN-WebApp/app/agents/sin-worker-paidwork-surveyor/page.tsx | active |
| /agents/sin-x-twitter | OpenSIN-WebApp/app/agents/sin-x-twitter/page.tsx | active |
| /agents/sin-youtube | OpenSIN-WebApp/app/agents/sin-youtube/page.tsx | active |

</details>

<details>
<summary><strong>Analytics</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /analytics | OpenSIN-WebApp/app/analytics/page.tsx | active |

</details>

<details>
<summary><strong>Api Keys</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /api-keys | OpenSIN-WebApp/app/api-keys/page.tsx | active |

</details>

<details>
<summary><strong>Approvals</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /approvals | OpenSIN-WebApp/app/approvals/page.tsx | active |

</details>

<details>
<summary><strong>Apps</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /apps | OpenSIN-WebApp/app/apps/page.tsx | active |

</details>

<details>
<summary><strong>Audits</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /audits | OpenSIN-WebApp/app/audits/page.tsx | active |

</details>

<details>
<summary><strong>Auth</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /auth/callback | OpenSIN-WebApp/app/auth/callback/page.tsx | active |

</details>

<details>
<summary><strong>Chat</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /chat | OpenSIN-WebApp/app/chat/page.tsx | active |

</details>

<details>
<summary><strong>Contact</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /contact | OpenSIN-WebApp/app/contact/page.tsx | active |

</details>

<details>
<summary><strong>Copilot</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /copilot | OpenSIN-WebApp/app/copilot/page.tsx | active |

</details>

<details>
<summary><strong>Dashboard</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /dashboard | OpenSIN-WebApp/app/dashboard/page.tsx | active |

</details>

<details>
<summary><strong>Docs</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /docs | OpenSIN-WebApp/app/docs/page.tsx | active |

</details>

<details>
<summary><strong>Executions</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /executions | OpenSIN-WebApp/app/executions/page.tsx | active |

</details>

<details>
<summary><strong>Fleet</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /fleet | OpenSIN-WebApp/app/fleet/page.tsx | active |

</details>

<details>
<summary><strong>Gesture Approval</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /gesture-approval | OpenSIN-WebApp/app/gesture-approval/page.tsx | active |

</details>

<details>
<summary><strong>Infrastructure</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /infrastructure | OpenSIN-WebApp/app/infrastructure/page.tsx | active |

</details>

<details>
<summary><strong>Landing</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /landing | OpenSIN-WebApp/app/landing/page.tsx | active |

</details>

<details>
<summary><strong>Login</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /login | OpenSIN-WebApp/app/login/page.tsx | active |

</details>

<details>
<summary><strong>Logs</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /logs | OpenSIN-WebApp/app/logs/page.tsx | active |

</details>

<details>
<summary><strong>Models</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /models | OpenSIN-WebApp/app/models/page.tsx | active |

</details>

<details>
<summary><strong>Observer</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /observer | OpenSIN-WebApp/app/observer/page.tsx | active |

</details>

<details>
<summary><strong>Omma</strong> (4)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /omma | OpenSIN-WebApp/app/omma/page.tsx | active |
| /omma/3d-canvas | OpenSIN-WebApp/app/omma/3d-canvas/page.tsx | active |
| /omma/data-pipeline | OpenSIN-WebApp/app/omma/data-pipeline/page.tsx | active |
| /omma/parallel-agents | OpenSIN-WebApp/app/omma/parallel-agents/page.tsx | active |

</details>

<details>
<summary><strong>Onboarding</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /onboarding | OpenSIN-WebApp/app/onboarding/page.tsx | active |

</details>

<details>
<summary><strong>Platform</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /platform | OpenSIN-WebApp/app/platform/page.tsx | active |

</details>

<details>
<summary><strong>Plugins</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /plugins | OpenSIN-WebApp/app/plugins/page.tsx | active |

</details>

<details>
<summary><strong>Policies</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /policies | OpenSIN-WebApp/app/policies/page.tsx | active |

</details>

<details>
<summary><strong>Preview</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /preview | OpenSIN-WebApp/app/preview/page.tsx | active |

</details>

<details>
<summary><strong>Profile</strong> (2)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /profile | OpenSIN-WebApp/app/profile/page.tsx | active |
| /profile/:id | OpenSIN-WebApp/app/profile/[id]/page.tsx | active |

</details>

<details>
<summary><strong>Projects</strong> (2)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /projects | OpenSIN-WebApp/app/projects/page.tsx | active |
| /projects/:id | OpenSIN-WebApp/app/projects/[id]/page.tsx | active |

</details>

<details>
<summary><strong>Proof</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /proof | OpenSIN-WebApp/app/proof/page.tsx | active |

</details>

<details>
<summary><strong>Security</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /security | OpenSIN-WebApp/app/security/page.tsx | active |

</details>

<details>
<summary><strong>Settings</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /settings | OpenSIN-WebApp/app/settings/page.tsx | active |

</details>

<details>
<summary><strong>Setup</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /setup | OpenSIN-WebApp/app/setup/page.tsx | active |

</details>

<details>
<summary><strong>Signup</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /signup | OpenSIN-WebApp/app/signup/page.tsx | active |

</details>

<details>
<summary><strong>Silicon Workforce</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /silicon-workforce | OpenSIN-WebApp/app/silicon-workforce/page.tsx | active |

</details>

<details>
<summary><strong>Standards</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /standards | OpenSIN-WebApp/app/standards/page.tsx | active |

</details>

<details>
<summary><strong>Test</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /test | OpenSIN-WebApp/app/test/page.tsx | active |

</details>

<details>
<summary><strong>Users</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /users | OpenSIN-WebApp/app/users/page.tsx | active |

</details>

<details>
<summary><strong>Workers</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /workers | OpenSIN-WebApp/app/workers/page.tsx | active |

</details>

<details>
<summary><strong>Workflows</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /workflows | OpenSIN-WebApp/app/workflows/page.tsx | active |

</details>

<details>
<summary><strong>Workforce</strong> (1)</summary>

| Route | Source file | Status |
| --- | --- | --- |
| /workforce | OpenSIN-WebApp/app/workforce/page.tsx | active |

</details>

## my.opensin.ai

Source: `website-my.opensin.ai/src/App.tsx`

| Route | Status | Notes |
| --- | --- | --- |
| / | active | Landing page with pricing + FAQ sections |
| /marketplace | active | Current React Router route |
| /watch | active | Current React Router route |

**Source-only components not currently routed:** pages/Pricing.tsx, pages/Usage.tsx

## blog.opensin.ai

Source: `website-blog.opensin.ai/post/posts.ts`

| Route | Status | Notes |
| --- | --- | --- |
| / | active | Blog index |
| /post/a2a-protocol/ | active | Published post route |
| /post/agent-forge/ | active | Published post route |
| /post/apple-ecosystem/ | active | Published post route |
| /post/ci-cd/ | active | Published post route |
| /post/cost-optimization/ | active | Published post route |
| /post/fleet-architecture/ | active | Published post route |
| /post/future-vision/ | active | Published post route |
| /post/model-routing/ | active | Published post route |
| /post/monitoring/ | active | Published post route |
| /post/n8n-integration/ | active | Published post route |
| /post/oci-deployment/ | active | Published post route |
| /post/security-architecture/ | active | Published post route |
| /post/self-healing/ | active | Published post route |
| /post/supabase/ | active | Published post route |
| /post/team-orchestration/ | active | Published post route |
| /post/vs-competitors/ | active | Published post route |
## docs.opensin.ai

Source: `OpenSIN-documentation/docs/.vitepress/config.mjs`

| Section / route | Status | Notes |
| --- | --- | --- |
| /api | active | Top-level docs section |
| /architecture | active | Top-level docs section |
| /examples | active | Top-level docs section |
| /fleet | active | Top-level docs section |
| /governance | active | Top-level docs section |
| /guide | active | Top-level docs section |
| /guides | active | Top-level docs section |
| /plugins | active | Top-level docs section |
| /sdk | active | Top-level docs section |
| /tutorials | active | Top-level docs section |
### Docs links (selected)

| Route | Status | Notes |
| --- | --- | --- |
| /api/ | active | Docs route |
| /api/a2a | active | Docs route |
| /api/agent | active | Docs route |
| /api/overview | active | Docs route |
| /api/team | active | Docs route |
| /architecture/a2a | active | Docs route |
| /architecture/core | active | Docs route |
| /architecture/global-brain-neural-bus | active | Docs route |
| /architecture/overview | active | Docs route |
| /architecture/security | active | Docs route |
| /examples/hello-world | active | Docs route |
| /examples/multi-agent | active | Docs route |
| /fleet/overview | active | Docs route |
| /governance/hermes | active | Docs route |
| /governance/overview | active | Docs route |
| /governance/zeus | active | Docs route |
| /guide/a2a-protocol | active | Docs route |
| /guide/agent-basics | active | Docs route |
| /guide/changelog | active | Docs route |
| /guide/deployment | active | Docs route |
| /guide/getting-started | active | Docs route |
| /guide/installation | active | Docs route |
| /guide/mcp-integration | active | Docs route |
| /guide/monitoring | active | Docs route |
| /guide/plugin-system | active | Docs route |
| /guide/quick-start | active | Docs route |
| /guide/scaling | active | Docs route |
| /guide/team-orchestration | active | Docs route |
| /guide/troubleshooting | active | Docs route |
| /guides/dynamic-input-commands | active | Dynamic input command reference |
| /plugins/agent-memory | active | Docs route |
| /plugins/context-analysis | active | Docs route |
| /plugins/context-pruning | active | Docs route |
| /plugins/envsitter | active | Docs route |
| /plugins/handoff | active | Docs route |
| /plugins/mcp-servers | active | Docs route |
| /plugins/opensin-code-plugins | active | Docs route |
| /plugins/registry | active | Docs route |
| /plugins/safety-net | active | Docs route |
| /sdk/agent-loop | active | Docs route |
| /sdk/context-management | active | Docs route |
| /sdk/hooks | active | Docs route |
| /sdk/memory | active | Docs route |
| /sdk/model-routing | active | Docs route |
| /sdk/overview | active | Docs route |
| /sdk/parallel-execution | active | Docs route |
| /sdk/safety | active | Docs route |
| /sdk/sessions | active | Docs route |
| /sdk/tool-system | active | Docs route |
| /sdk/usage-pricing | active | Docs route |
| /tutorials/a2a-communication | active | Docs route |
| /tutorials/advanced-orchestration | active | Docs route |
| /tutorials/first-agent | active | Docs route |
| /tutorials/plugin-development | active | Docs route |
## api.opensin.ai

Source: `OpenSIN-Backend/app/main.py` + `OpenSIN-Bridge/server/src/index.ts`

| Endpoint / prefix | Status | Notes |
| --- | --- | --- |
| /analytics | active | API or router prefix |
| /api/v1/auth/login | active | API or router prefix |
| /api/v1/auth/refresh | active | API or router prefix |
| /api/v1/decide | active | API or router prefix |
| /api/v1/evaluate-study | active | API or router prefix |
| /api/v1/persona | active | API or router prefix |
| /api/v1/stripe/checkout | active | Billing flow surface |
| /api/v1/stripe/webhook | active | Billing flow surface |
| /api/v1/subscription/status | active | API or router prefix |
| /auth | active | API or router prefix |
| /billing | active | API or router prefix |
| /chat | active | API or router prefix |
| /docs | active | API or router prefix |
| /health | active | API or router prefix |
| /pentest | active | API or router prefix |
| /plugins | active | API or router prefix |
| /resources | active | API or router prefix |
| /secrets | active | API or router prefix |
| /solve | active | API or router prefix |
| /steel | active | API or router prefix |
| /system | active | API or router prefix |
| /workers | active | API or router prefix |
## Evaluation summary

- The **largest live surface** is `chat.opensin.ai` with 162 routes.
- The **most SEO-heavy surface** is `opensin.ai` with 21 marketing routes.
- The **billing path** is split across `api.opensin.ai`, `chat.opensin.ai`, and `my.opensin.ai`.
- The **blog** is content-driven and route-complete from the posts registry.
- The **docs** section is large but organized by top-level site areas.

## Open questions

- Which `my.opensin.ai` deploy target is canonical?
- Is `/pricing` a planned route or a missing route on `chat.opensin.ai`?
- Should agent pages live in `chat.opensin.ai` or a separate `opensin.ai/agents` catalog?
- Which surfaces are source-only and not meant to be public routes?
