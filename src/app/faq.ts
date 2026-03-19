export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: readonly FaqItem[] = [
  {
    question: "What do you actually deliver?",
    answer:
      "We identify 3-5 high-friction workflows, ship 1-3 production agent workflows and integrations, and hand over the code and playbook your team can keep extending.",
  },
  {
    question: "Which tools do you support?",
    answer:
      "We focus on the tools teams are already adopting such as Claude Code, Codex, Cursor, MCP-based workflows, and custom agents, so the work lands in the stack your team already uses.",
  },
  {
    question: "How long does a first engagement take?",
    answer:
      "The goal is measured in weeks, not quarters. We aim to get the first useful skills into production in roughly 4 to 8 weeks instead of running a long advisory engagement that ends with a slide deck.",
  },
  {
    question: "How do you handle security and governance?",
    answer:
      "We design for private delivery from the start: your skills, integrations, and guardrails run in your environment, with approvals, versioning, and visibility built into the way the rollout works.",
  },
  {
    question: "Do we own the skills and integrations?",
    answer:
      "Yes. The code, prompts, workflows, and integrations are built for your team to own, extend, and govern, so you are not trapped in a black-box service model.",
  },
  {
    question: "What does an engagement cost?",
    answer:
      "It depends on scope, but a typical first engagement — auditing a handful of workflows and delivering the first production skills — runs in the low tens of thousands. We will tell you what it costs after a 30-minute conversation, not after three months of discovery.",
  },
  {
    question: "Is Reifio right for every team?",
    answer:
      "No. We are a strong fit for teams that already see AI use emerging across the business and want to turn that energy into governed, repeatable workflows. If you only want a generic strategy deck or are still at the 'should we use AI at all?' stage, we are probably not the right partner yet.",
  },
];

const MIN_FAQ_ITEMS = 5;
const MAX_FAQ_ITEMS = 7;

function invariant(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function validateFaqItems(items: readonly FaqItem[]): readonly FaqItem[] {
  invariant(
    items.length >= MIN_FAQ_ITEMS && items.length <= MAX_FAQ_ITEMS,
    `FAQ must contain between ${MIN_FAQ_ITEMS} and ${MAX_FAQ_ITEMS} items.`,
  );

  items.forEach((item, index) => {
    invariant(
      item.question.trim().length > 0,
      `FAQ item ${index + 1} is missing a question.`,
    );
    invariant(
      item.answer.trim().length > 0,
      `FAQ item ${index + 1} is missing an answer.`,
    );
  });

  return items;
}

export function getValidatedFaqItems(): readonly FaqItem[] {
  return validateFaqItems(faqItems);
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: getValidatedFaqItems().map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
