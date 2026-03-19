import { describe, expect, test } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { FaqSection } from "./components/faq-section";
import { faqItems, getFaqJsonLd, getValidatedFaqItems } from "./faq";

describe("FAQ content", () => {
  test("keeps the FAQ within the agreed editorial cap", () => {
    const validatedItems = getValidatedFaqItems();

    expect(validatedItems.length).toBeGreaterThanOrEqual(5);
    expect(validatedItems.length).toBeLessThanOrEqual(7);

    for (const item of validatedItems) {
      expect(item.question.trim().length).toBeGreaterThan(0);
      expect(item.answer.trim().length).toBeGreaterThan(0);
    }
  });

  test("derives FAQ JSON-LD from the same source of truth", () => {
    const jsonLd = getFaqJsonLd();

    expect(jsonLd["@context"]).toBe("https://schema.org");
    expect(jsonLd["@type"]).toBe("FAQPage");
    expect(jsonLd.mainEntity).toHaveLength(faqItems.length);
    expect(jsonLd.mainEntity[0]).toMatchObject({
      "@type": "Question",
      name: faqItems[0].question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqItems[0].answer,
      },
    });
  });
});

describe("FaqSection", () => {
  test("renders the buyer-decision heading, fit filtering, and CTA bridge", () => {
    const html = renderToStaticMarkup(<FaqSection />);

    expect(html).toContain("Questions serious buyers ask");
    expect(html).toContain("Is Reifio right for every team?");
    expect(html).toContain("Still weighing it up?");
    expect(html).toContain("hello@reifio.com");
  });
});
