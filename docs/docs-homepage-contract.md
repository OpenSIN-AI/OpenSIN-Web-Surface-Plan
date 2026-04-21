# docs.opensin.ai Homepage Contract

This file is the canonical contract for the `docs.opensin.ai/` homepage.

## Non-negotiable structure

The homepage must contain exactly these sections in this order:

1. **Hero**
   - `OpenSIN-AI`
   - `Dokumentation`
   - user-focused tagline
   - two CTA buttons

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

## Explicit prohibitions

- Do **not** reintroduce giant comparison tables on the homepage
- Do **not** replace cards with raw markdown bullet lists
- Do **not** inline large HTML/style blobs into `docs/index.md`
- Do **not** replace SVG icons with emojis
- Do **not** change homepage structure while fixing subpages

## Implementation notes

- Homepage structure should live in dedicated VitePress components where possible
- Homepage styling should be handled in theme CSS, not ad-hoc inline style blocks
- Subpage styling changes must not overwrite homepage layout contracts

## Reason

The docs homepage is a product surface, not a dumping ground for every mandate,
table, or internal reference. It must stay clear, user-friendly, and visually
stable.
