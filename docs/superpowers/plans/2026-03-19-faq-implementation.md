# FAQ Conversion Layer Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a homepage FAQ that answers buyer objections, renders from one source of truth, and includes JSON-LD plus a CTA bridge.

**Architecture:** Keep the feature on the existing homepage route. Introduce one small FAQ data module with validation and JSON-LD helpers, then render both the visible FAQ and machine-readable schema from that shared source through a dedicated component.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Vitest

---

### Task 1: Add test tooling and write failing tests

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `src/app/faq.test.tsx`

- [ ] **Step 1: Write the failing tests**
- [ ] **Step 2: Run the tests to verify they fail**
- [ ] **Step 3: Add the minimum test tooling needed to run them**

### Task 2: Build the FAQ source and renderer

**Files:**
- Create: `src/app/faq.tsx`
- Create: `src/app/components/faq-section.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Implement a shared FAQ source with validation helpers**
- [ ] **Step 2: Implement the FAQ section renderer**
- [ ] **Step 3: Integrate the FAQ and JSON-LD into the homepage**

### Task 3: Verify the feature

**Files:**
- Verify only

- [ ] **Step 1: Run the test suite**
- [ ] **Step 2: Run lint**
- [ ] **Step 3: Run the production build**
