import Image from "next/image";
import { FaqSection } from "./components/faq-section";
import { ContactForm } from "./components/contact-form";
import { getFaqJsonLd, serializeJsonLd } from "./faq";
import {
  ArrowRight,
  Shield,
  Layers,
  Zap,
  Eye,
  Cpu,
  Lock,
  BarChart3,
  Users,
  Wrench,
  Settings,
} from "lucide-react";

export default function Home() {
  const faqJsonLd = serializeJsonLd(getFaqJsonLd());

  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav — glass */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-[16px]">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="/" className="font-mono text-lg font-semibold tracking-[-0.03em]">
            reifio
          </a>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-b from-primary to-primary-container px-5 py-2.5 text-sm font-semibold text-on-primary transition-opacity hover:opacity-85"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJsonLd }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Reifio",
              url: "https://reifio.com",
              email: "hello@reifio.com",
              description: "We help enterprises turn workflows into AI agent skills — then give them a platform to manage and govern them at scale.",
              areaServed: "AU",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Melbourne",
                addressCountry: "AU",
              },
            }),
          }}
        />

        {/* Hero — asymmetric: text left, dark panel right */}
        <section className="py-28 sm:py-36 lg:py-40">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-on-surface-variant/50">
                  Workflows → AI agent skills
                </p>

                <h1 className="mt-10 text-[clamp(2.75rem,6.5vw,4.75rem)] font-bold leading-[1.05] tracking-[-0.04em] text-primary-container">
                  Give your AI agents
                  <br />
                  your team&apos;s
                  <br />
                  <span className="text-on-surface-variant/25">knowhow.</span>
                </h1>

                <p className="mt-10 max-w-xl text-lg leading-relaxed text-on-surface-variant">
                  Your best people have expertise that lives in their heads. We
                  package it into agent skills — reusable instructions and
                  workflows your AI tools can load on demand — so they work the
                  way your team does, then scale across the whole org.
                </p>

                <div className="mt-12 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-on-secondary transition-opacity hover:opacity-85"
                  >
                    Start a conversation
                    <ArrowRight className="size-4" strokeWidth={1.5} />
                  </a>
                  <a
                    href="#how"
                    className="ghost-border inline-flex items-center gap-2 rounded-full bg-surface-low px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-surface-high"
                  >
                    See how it works
                  </a>
                </div>
              </div>

              {/* Dark architectural panel — the visual anchor */}
              <div className="hidden rounded-2xl bg-primary-container p-8 shadow-ambient-lg lg:flex lg:flex-col lg:justify-between lg:min-h-[480px]">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="size-2.5 rounded-full bg-secondary" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-on-primary/30">
                      Skills deployed
                    </span>
                  </div>
                  <div className="mt-8 space-y-3">
                    {[
                      { name: "Workflow Audit", team: "Operations", status: "Live" },
                      { name: "Deal Review", team: "Sales", status: "Live" },
                      { name: "Incident Triage", team: "Engineering", status: "Staging" },
                    ].map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between rounded-lg bg-white/[0.04] px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <Cpu className="size-3.5 text-on-primary/25" strokeWidth={1.5} />
                          <span className="font-mono text-sm text-on-primary/70">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-on-primary/25">
                            {skill.team}
                          </span>
                          <span className={`font-mono text-xs ${skill.status === "Live" ? "text-secondary" : "text-on-primary/30"}`}>
                            {skill.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 rounded-lg bg-white/[0.04] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-on-primary/25">
                    Example deployment
                  </p>
                </div>
              </div>
            </div>

            {/* Works with — below the grid */}
            <div className="mt-20">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-on-surface-variant/35">
                Works with
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4">
                {[
                  { name: "Claude Code", logo: "/logos/anthropic.png" },
                  { name: "OpenAI Codex", logo: "/logos/openai.png" },
                  { name: "Cursor", logo: "/logos/cursor.png" },
                  { name: "MCP Protocol", logo: "/logos/mcp.png" },
                ].map((tool) => (
                  <div key={tool.name} className="flex items-center gap-2.5">
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      width={48}
                      height={48}
                      className="h-6 w-6 rounded object-contain opacity-40 grayscale"
                    />
                    <span className="text-sm font-semibold text-on-surface-variant/40">
                      {tool.name}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-2.5">
                  <Cpu className="h-6 w-6 opacity-30" strokeWidth={1.5} />
                  <span className="text-sm font-semibold text-on-surface-variant/40">
                    Custom Agents
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The problem — editorial asymmetry: headline left, subtext far right */}
        <section className="bg-primary-container py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-lg">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-primary/25">
                  The problem
                </p>
                <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-on-primary/75">
                  Your team has AI tools. But they&apos;re not getting AI results.
                </h2>
              </div>
              <p className="max-w-xs font-mono text-xs uppercase leading-relaxed tracking-[0.1em] text-on-primary/25 md:text-right">
                Everyone has the tools. Almost nobody has the implementation that makes them work.
              </p>
            </div>

            <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8">
              {[
                {
                  value: "80%",
                  label: "of AI projects fail to deliver value",
                  detail:
                    "RAND Corporation, 2025",
                },
                {
                  value: "15hrs",
                  label: "per person per week on repetitive tasks",
                  detail:
                    "Tasks AI agents can handle today.",
                },
                {
                  value: "22%",
                  label: "of enterprises have shadow AI agents",
                  detail:
                    "Running without IT knowledge or governance.",
                },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-5xl font-bold tracking-[-0.05em] text-on-primary">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-on-primary/55">
                    {stat.label}
                  </p>
                  <p className="mt-1.5 font-mono text-xs text-on-primary/25">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two pillars */}
        <section id="how" className="bg-surface-low py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant/50">
                What we do
              </p>
              <h2 className="mt-6 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.04em] text-primary-container">
                We solve both sides of the problem.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
                We ship production agent workflows — then put governance
                around them so they scale safely.
              </p>
            </div>

            {/* Pillar 1: Build */}
            <div className="mt-20 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="ghost-border rounded-2xl bg-surface-lowest p-8 shadow-ambient sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-surface-low">
                    <Wrench className="size-5 text-on-surface-variant/50" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-on-surface-variant/45">
                    Pillar 01
                  </span>
                </div>
                <h3 className="mt-6 text-3xl font-bold tracking-[-0.04em] text-primary-container">
                  We build your AI skills.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-on-surface-variant">
                  We map how your team actually works, then ship agent
                  workflows and integrations that run in the tools you already
                  use.
                </p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      icon: Eye,
                      title: "Workflow audit",
                      detail:
                        "Map which processes are repeatable and automatable",
                    },
                    {
                      icon: Cpu,
                      title: "Skill development",
                      detail:
                        "Build reusable agent workflows and integrations your team owns",
                    },
                    {
                      icon: Layers,
                      title: "System integration",
                      detail:
                        "Connect to your CRM, ERP, databases, and internal tools",
                    },
                    {
                      icon: Users,
                      title: "Team training",
                      detail:
                        "Teach your team to use and extend the skills themselves",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-3">
                        <Icon className="mt-0.5 size-4 shrink-0 text-on-surface-variant/35" strokeWidth={1.5} />
                        <div>
                          <p className="text-sm font-semibold text-primary-container">{item.title}</p>
                          <p className="mt-0.5 text-sm text-on-surface-variant/60">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="ghost-border flex flex-1 flex-col justify-end rounded-xl bg-surface-lowest p-8 shadow-ambient">
                  <p className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.04em] text-primary-container">
                    Weeks,
                    <br />
                    not quarters.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-on-surface-variant/60">
                    First skills in production within 4-8 weeks. Not a 6-month
                    consulting engagement with a deck at the end.
                  </p>
                </div>
                <div className="ghost-border flex flex-1 flex-col justify-end rounded-xl bg-surface-lowest p-8 shadow-ambient">
                  <p className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.04em] text-primary-container">
                    You own
                    <br />
                    everything.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-on-surface-variant/60">
                    Every skill, plugin, and MCP server runs in your
                    environment. Zero vendor lock-in. Full code ownership.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Manage */}
            <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col justify-center gap-6 max-lg:order-2">
                <div className="rounded-xl bg-primary-container p-6 text-on-primary shadow-ambient-lg">
                  <p className="text-3xl font-bold tracking-[-0.04em]">
                    Deploy.
                    <br />
                    Govern.
                    <br />
                    Scale.
                  </p>
                  <p className="mt-3 text-sm text-on-primary/40">
                    One place to manage all your AI agent skills — across teams,
                    platforms, and departments.
                  </p>
                </div>
                <div className="ghost-border rounded-xl bg-surface-lowest p-6 shadow-ambient">
                  <p className="text-3xl font-bold tracking-[-0.04em] text-primary-container">
                    Full
                    <br />
                    visibility.
                  </p>
                  <p className="mt-3 text-sm text-on-surface-variant/60">
                    See exactly which skills are deployed, who&apos;s using
                    them, and how they&apos;re performing — across every team
                    and platform.
                  </p>
                </div>
              </div>
              <div className="ghost-border rounded-2xl bg-surface-lowest p-8 shadow-ambient sm:p-10 max-lg:order-1">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-surface-low">
                    <Settings className="size-5 text-on-surface-variant/50" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-on-surface-variant/45">
                    Pillar 02
                  </span>
                </div>
                <h3 className="mt-6 text-3xl font-bold tracking-[-0.04em] text-primary-container">
                  We help you manage them.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-on-surface-variant">
                  Workflows are only useful if they&apos;re governed,
                  distributed, and monitored. We set up approvals, access
                  control, versioning, and an internal catalog your team
                  manages.
                </p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      icon: Shield,
                      title: "Governance controls",
                      detail:
                        "Who can create, edit, publish, and deploy skills",
                    },
                    {
                      icon: BarChart3,
                      title: "Usage analytics",
                      detail:
                        "Which skills are used, by whom, and how often",
                    },
                    {
                      icon: Lock,
                      title: "Security & compliance",
                      detail:
                        "Approval workflows, audit trails, version control",
                    },
                    {
                      icon: Zap,
                      title: "Cross-platform",
                      detail:
                        "Claude, Codex, Cursor — manage skills across all tools",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-3">
                        <Icon className="mt-0.5 size-4 shrink-0 text-on-surface-variant/35" strokeWidth={1.5} />
                        <div>
                          <p className="text-sm font-semibold text-primary-container">{item.title}</p>
                          <p className="mt-0.5 text-sm text-on-surface-variant/60">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shadow AI angle */}
        <section className="bg-surface py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="ghost-border overflow-hidden rounded-2xl shadow-ambient-lg">
              <div className="grid lg:grid-cols-2">
                <div className="bg-surface-lowest p-8 sm:p-10">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant/50">
                    Why this matters now
                  </p>
                  <h2 className="mt-6 text-3xl font-bold tracking-[-0.04em] text-primary-container">
                    Your team is already using AI agents. The question is
                    whether you control them.
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-on-surface-variant">
                    OpenClaw has 2 million weekly users. 22% of enterprises have
                    employees running AI agents as shadow IT. 135,000 instances
                    are exposed to the public internet.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-on-surface-variant">
                    Put governance in place before it becomes a security
                    incident — or{" "}
                    <span className="font-semibold text-primary-container">
                      lose visibility entirely.
                    </span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex-1 bg-surface-low p-8">
                    <p className="text-sm font-semibold text-primary-container/70">
                      Without Reifio
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-on-surface-variant/55">
                      <li>Every engineer runs their own AI setup</li>
                      <li>No visibility into what agents are doing</li>
                      <li>Tribal knowledge stays in people&apos;s heads</li>
                      <li>Security and compliance risks compound daily</li>
                    </ul>
                  </div>
                  <div className="bg-primary-container p-8 text-on-primary">
                    <p className="text-sm font-semibold">With Reifio</p>
                    <ul className="mt-3 space-y-2 text-sm text-on-primary/50">
                      <li>Shared skill library the whole team uses</li>
                      <li>Every skill governed, versioned, and monitored</li>
                      <li>Institutional knowledge encoded and reusable</li>
                      <li>IT controls who gets what, with audit trails</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="bg-surface pt-32 pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant/50">
                  About Reifio
                </p>
                <h2 className="mt-6 text-3xl font-bold tracking-[-0.04em] text-primary-container">
                  Enterprise AI is our day job.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-on-surface-variant">
                  We built and shipped production AI systems for AGL, QBE,
                  Harvey Norman, and Specsavers — organisations where downtime
                  is not an option and compliance is not optional.
                </p>
                <p className="mt-4 text-base leading-relaxed text-on-surface-variant">
                  Now we apply that experience to the next wave: turning
                  internal workflows into reusable agent automations — and
                  giving teams the controls to run them safely.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {[
                  {
                    title: "Melbourne, AU",
                    detail:
                      "Australian-owned. Local delivery. Sovereign AI by default.",
                  },
                  {
                    title: "Senior-led delivery",
                    detail:
                      "The person who scopes is the person who delivers. No handoff after signing.",
                  },
                  {
                    title: "Platform-agnostic",
                    detail:
                      "Claude, Codex, Cursor, custom LLMs — we build skills that work across any platform.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="ghost-border rounded-xl bg-surface-lowest p-6 shadow-ambient"
                  >
                    <p className="text-xl font-bold tracking-[-0.03em] text-primary-container">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-on-surface-variant/60">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Proof — inline, honest attribution */}
            <div className="mt-12 pt-10" style={{ borderTop: '1px solid rgba(196, 199, 199, 0.15)' }}>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-on-surface-variant/40">
                Our team delivered enterprise AI at
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-4">
                {[
                  { name: "AGL Energy", logo: "/logos/agl.png" },
                  { name: "QBE Insurance", logo: "/logos/qbe.png" },
                  { name: "Harvey Norman", logo: "/logos/harveynorman.png" },
                  { name: "Specsavers", logo: "/logos/specsavers.png" },
                  { name: "Open Universities Australia", logo: "/logos/oua.png" },
                ].map((client) => (
                  <Image
                    key={client.name}
                    src={client.logo}
                    alt={client.name}
                    width={128}
                    height={128}
                    className="h-10 w-10 rounded-lg object-contain opacity-50 grayscale"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <FaqSection />

        {/* CTA */}
        <section
          id="contact"
          className="bg-primary-container py-32 text-on-primary"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-[-0.04em]">
                Your agents are only as good
                <br />
                as what they know.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-on-primary/45">
                30-minute call. We&apos;ll tell you which workflows are worth
                encoding first — and what the first engagement looks like.
              </p>
              <div className="mt-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-low py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <span className="font-mono text-sm text-on-surface-variant/35">reifio</span>
          <span className="font-mono text-xs text-on-surface-variant/25">
            Melbourne, Australia
          </span>
        </div>
      </footer>
    </div>
  );
}
