# docs.opensin.ai Homepage Contract

This file is the canonical contract for the `docs.opensin.ai/` homepage.

Tracking issue: [#1](https://github.com/OpenSIN-AI/OpenSIN-Web-Surface-Plan/issues/1)

## Non-negotiable structure

The homepage must contain exactly these sections in this order:

1. **Hero**
   - `OpenSIN-AI`
   - `Dokumentation`
   - user-focused tagline
   - two CTA buttons
   - button styling must remain compact (no pill reversion)

2. **Three feature cards**
   - no more than 3 cards in the top feature row
   - use real SVG icons
   - no emoji icons

3. **Choose Your Path**
   - exactly 2 cards
   - one for users
   - one for developers

4. **Related topics / ecosystem cards**
   - exactly 4 cards
    - card style, not a raw markdown list

5. **Dynamic sidebar behavior**
   - the left sidebar must adapt to the active top navigation section
   - `Guide`, `Architecture`, `API`, `SDK`, `Plugins`, `Fleet`, `Governance`, `Tutorials`, and `Examples` must not collapse into one static mega-sidebar

## Explicit prohibitions

- Do **not** reintroduce giant comparison tables on the homepage
- Do **not** replace cards with raw markdown bullet lists
- Do **not** inline large HTML/style blobs into `docs/index.md`
- Do **not** replace SVG icons with emojis
- Do **not** change homepage structure while fixing subpages
- Do **not** break homepage button hover states while changing theme CSS
- Do **not** remove or flatten the dynamic sidebar while repairing homepage visuals

## Implementation notes

- Homepage structure should live in dedicated VitePress components where possible
- Homepage styling should be handled in theme CSS, not ad-hoc inline style blocks
- Subpage styling changes must not overwrite homepage layout contracts
- Homepage button hover behavior must be explicitly documented in CSS comments and in `docs/repair-docs.md`

## Reason

The docs homepage is a product surface, not a dumping ground for every mandate,
table, or internal reference. It must stay clear, user-friendly, and visually
stable.

## Verified live markers

The following markers were verified on the live site and should remain true
unless intentionally changed by product direction:

- `Start using OpenSIN`
- `Build an Agent`
- `Choose Your Path`
- `Related topics`
- `Autonomous Fleet`
- `A2A Protocol`
- `Stealth Automation`
- `OpenSIN Marketing`
- `OpenSIN Marketplace`
- `OpenSIN Dashboard`
- `Domain Registry`
- `Why OpenSIN?` must be absent from homepage
