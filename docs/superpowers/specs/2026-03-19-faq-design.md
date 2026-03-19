# FAQ Design

**Date:** 2026-03-19

## Goal

Add a homepage FAQ that works as a conversion layer for serious buyers, not a generic support block.

## Approved Shape

- Decision-focused FAQ aimed at buyer objections
- Proof-backed answers with concrete implementation details
- At least one fit-filtering question
- Lightweight CTA bridge into the existing contact action
- FAQ structured data generated from the same source as the visible FAQ
- Open answers only, no accordion behavior
- `5-7` questions maximum with short-to-medium answers
- Fail-fast validation for empty or malformed content

## Implementation Direction

- Keep the feature on the homepage route
- Add one small FAQ content source
- Add one dedicated FAQ section component
- Render JSON-LD in the page with a native `<script type="application/ld+json">`
- Keep answers as plain text or tightly controlled JSX only

## Non-Goals

- No broader marketing content system
- No CMS
- No interactive accordion
- No rich HTML authoring for answers
- No full analytics overhaul
