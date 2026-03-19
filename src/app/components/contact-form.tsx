"use client";

import { useActionState } from "react";
import { ArrowRight } from "lucide-react";
import { submitContact, type ContactState } from "../actions/contact";

const initial: ContactState = { success: false, error: null };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.success) {
    return (
      <div className="mx-auto max-w-md text-center">
        <p className="text-2xl font-bold tracking-[-0.03em]">
          We&apos;ll be in touch.
        </p>
        <p className="mt-3 text-sm text-on-primary/45">
          Usually within a business day. If it&apos;s urgent, email us directly
          at hello@reifio.com.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="mx-auto max-w-md space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          type="text"
          required
          placeholder="Name"
          className="w-full rounded-lg bg-white/[0.06] px-4 py-3 text-sm text-on-primary placeholder:text-on-primary/30 outline-none focus:ring-1 focus:ring-secondary/50"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Work email"
          className="w-full rounded-lg bg-white/[0.06] px-4 py-3 text-sm text-on-primary placeholder:text-on-primary/30 outline-none focus:ring-1 focus:ring-secondary/50"
        />
      </div>
      <input
        name="company"
        type="text"
        placeholder="Company (optional)"
        className="w-full rounded-lg bg-white/[0.06] px-4 py-3 text-sm text-on-primary placeholder:text-on-primary/30 outline-none focus:ring-1 focus:ring-secondary/50"
      />
      <textarea
        name="message"
        rows={3}
        placeholder="What are you looking to solve? (optional)"
        className="w-full resize-none rounded-lg bg-white/[0.06] px-4 py-3 text-sm text-on-primary placeholder:text-on-primary/30 outline-none focus:ring-1 focus:ring-secondary/50"
      />
      {state.error && (
        <p className="text-sm text-red-300">{state.error}</p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-semibold text-on-secondary transition-opacity hover:opacity-85 disabled:opacity-50"
      >
        {pending ? "Sending..." : "Start a conversation"}
        {!pending && <ArrowRight className="size-4" strokeWidth={1.5} />}
      </button>
      <p className="text-center text-xs text-on-primary/20">
        No pitch deck. No demo. Just a conversation about what your team does
        every week that an AI agent should be doing instead.
      </p>
    </form>
  );
}
