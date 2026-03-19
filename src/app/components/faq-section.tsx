import { ArrowRight } from "lucide-react";
import { getValidatedFaqItems } from "../faq";

export function FaqSection() {
  const items = getValidatedFaqItems();

  return (
    <section className="bg-surface-low py-28">
      <div className="mx-auto grid max-w-5xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Left column — sticky on desktop */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant/50">
            FAQ
          </p>
          <h2 className="mt-6 text-[clamp(1.9rem,4vw,3rem)] font-bold tracking-[-0.04em] text-primary-container">
            What teams
            <br />
            ask us
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-on-surface-variant/60">
            Practical answers to the questions that come up in every discovery
            call.
          </p>
          <div className="mt-8 hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-on-surface-variant/50 transition-colors hover:text-on-surface-variant/80"
            >
              Skip to contact
              <ArrowRight className="size-3.5" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Right column — FAQ cards */}
        <div className="flex flex-col gap-4">
          {items.map((item, i) => (
            <div
              key={item.question}
              className="ghost-border rounded-2xl bg-surface-lowest p-6 shadow-ambient"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 font-mono text-xs text-on-surface-variant/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-bold tracking-[-0.02em] text-primary-container">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-surface-variant/65">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="rounded-2xl bg-primary-container p-6 text-on-primary shadow-ambient-lg">
            <h3 className="text-xl font-bold tracking-[-0.03em]">
              Still weighing it up?
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-on-primary/45">
              Get in touch and we&apos;ll tell you plainly whether this is a
              fit — and what the first engagement usually looks like.
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-surface px-6 py-3 text-sm font-semibold text-primary-container transition-opacity hover:opacity-90"
              >
                Start a conversation
                <ArrowRight className="size-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
