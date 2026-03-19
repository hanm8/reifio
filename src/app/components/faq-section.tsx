import { ArrowRight } from "lucide-react";
import { getValidatedFaqItems } from "../faq";

export function FaqSection() {
  const items = getValidatedFaqItems();

  return (
    <section className="border-t border-foreground/8 bg-white py-24">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Left column — sticky on desktop */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/40">
            FAQ
          </p>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] font-bold tracking-[-0.04em]">
            Questions
            <br />
            serious buyers
            <br />
            ask
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground/45">
            Practical answers to the questions that usually stand between
            &ldquo;interesting&rdquo; and &ldquo;let&apos;s talk.&rdquo;
          </p>
          <div className="mt-6 hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/50 transition-colors hover:text-foreground/80"
            >
              Skip to contact
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Right column — FAQ cards */}
        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={item.question}
              className="rounded-2xl border border-foreground/8 bg-background p-6"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 font-mono text-xs text-foreground/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-bold tracking-[-0.02em]">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/50">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="rounded-2xl bg-foreground p-6 text-background">
            <h3 className="text-xl font-bold tracking-[-0.03em]">
              Still weighing it up?
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-background/50">
              Email us and we&apos;ll tell you plainly whether this is a fit
              and what the first win usually looks like.
            </p>
            <div className="mt-5">
              <a
                href="mailto:hello@reifio.com?subject=Reifio%20enquiry"
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
              >
                hello@reifio.com
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
