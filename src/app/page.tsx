import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Layers,
  Zap,
  Eye,
  ChevronRight,
  Cpu,
  Lock,
  BarChart3,
  Users,
  Wrench,
  Settings,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-foreground/8 bg-background/92 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <span className="font-mono text-lg font-semibold tracking-[-0.03em]">
            reifio
          </span>
          <a
            href="#contact"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-80"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero — what the BUSINESS gets */}
        <section className="py-24 sm:py-32 lg:py-36">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-3xl">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-foreground/40">
                AI Agent Operations
              </p>

              <h1 className="mt-8 text-[clamp(2.75rem,6.5vw,4.75rem)] font-bold leading-[1.05] tracking-[-0.04em]">
                Give your AI agents
                <br />
                your team&apos;s
                <br />
                <span className="text-foreground/20">knowhow.</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/55">
                Your best people have expertise that lives in their heads. We
                encode it into AI agent skills — so Claude, Codex, and Cowork
                can work like your best people, then scale it across the whole
                org.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-80"
                >
                  Book a discovery call
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-foreground/4"
                >
                  See how it works
                </a>
              </div>

              <div className="mt-14">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/30">
                  Works with
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
                  {[
                    { name: "Claude Code", logo: "/logos/anthropic.png" },
                    { name: "OpenAI Codex", logo: "/logos/openai.png" },
                    { name: "Cursor", logo: "/logos/cursor.png" },
                  ].map((tool) => (
                    <div key={tool.name} className="flex items-center gap-2.5">
                      <Image
                        src={tool.logo}
                        alt={tool.name}
                        width={24}
                        height={24}
                        className="opacity-40 grayscale"
                      />
                      <span className="text-sm font-semibold text-foreground/35">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                  <span className="rounded-full border border-foreground/8 px-3 py-1 font-mono text-xs text-foreground/30">
                    + MCP / SKILL.md
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The problem — what businesses feel */}
        <section className="border-y border-foreground/8 bg-foreground py-16 text-background">
          <div className="mx-auto max-w-5xl px-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/35">
              The problem
            </p>
            <h2 className="mt-4 max-w-lg text-2xl font-bold tracking-[-0.03em] text-background/80">
              Your team has AI tools. But they&apos;re not getting AI results.
            </h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {[
                {
                  value: "80%",
                  label: "of AI projects fail to deliver value",
                  detail:
                    "Everyone has the tools. Almost nobody has the implementation.",
                },
                {
                  value: "15hrs",
                  label: "per person per week on repetitive tasks",
                  detail:
                    "Reports, approvals, data entry, onboarding — done manually because 'we haven't automated it yet.'",
                },
                {
                  value: "0",
                  label: "governance on shadow AI",
                  detail:
                    "22% of your employees are already running AI agents without IT knowing.",
                },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-5xl font-bold tracking-[-0.05em]">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-background/65">
                    {stat.label}
                  </p>
                  <p className="mt-1.5 text-sm text-background/35">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two pillars — the value prop */}
        <section id="how" className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/40">
                What we do
              </p>
              <h2 className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.04em]">
                We solve both sides of the problem.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-foreground/55">
                First, we turn your messy workflows into working AI agent
                skills. Then, we give you a platform to manage and govern them
                at scale.
              </p>
            </div>

            {/* Pillar 1: Build */}
            <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl border border-foreground/8 bg-white p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-foreground/5">
                    <Wrench className="size-5 text-foreground/50" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-foreground/40">
                    Pillar 01
                  </span>
                </div>
                <h3 className="mt-6 text-3xl font-bold tracking-[-0.04em]">
                  We build your AI skills.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-foreground/55">
                  We sit with your team, observe how they actually work, and
                  convert their recurring workflows into AI agent skills and MCP
                  integrations that plug into Claude Code, Cowork, Codex, or any
                  LLM platform.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
                        "Build SKILL.md files, MCP servers, and Cowork plugins",
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
                        <Icon className="mt-0.5 size-4 shrink-0 text-foreground/30" />
                        <div>
                          <p className="text-sm font-semibold">{item.title}</p>
                          <p className="mt-0.5 text-sm text-foreground/45">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-xl border border-foreground/8 bg-background p-6">
                  <p className="text-3xl font-bold tracking-[-0.04em]">
                    Weeks,
                    <br />
                    not quarters.
                  </p>
                  <p className="mt-3 text-sm text-foreground/45">
                    First skills in production within 4-8 weeks. Not a 6-month
                    consulting engagement with a deck at the end.
                  </p>
                </div>
                <div className="rounded-xl border border-foreground/8 bg-background p-6">
                  <p className="text-3xl font-bold tracking-[-0.04em]">
                    You own
                    <br />
                    everything.
                  </p>
                  <p className="mt-3 text-sm text-foreground/45">
                    Every skill, plugin, and MCP server runs in your
                    environment. Zero vendor lock-in. Full code ownership.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Manage */}
            <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col justify-center space-y-6 max-lg:order-2">
                <div className="rounded-xl bg-foreground p-6 text-background">
                  <p className="text-3xl font-bold tracking-[-0.04em]">
                    Deploy.
                    <br />
                    Govern.
                    <br />
                    Scale.
                  </p>
                  <p className="mt-3 text-sm text-background/45">
                    One dashboard for all your AI agent skills — across teams,
                    platforms, and departments.
                  </p>
                </div>
                <div className="rounded-xl border border-foreground/8 bg-background p-6">
                  <p className="text-3xl font-bold tracking-[-0.04em]">
                    Full
                    <br />
                    visibility.
                  </p>
                  <p className="mt-3 text-sm text-foreground/45">
                    See exactly which skills are deployed, who&apos;s using
                    them, and how they&apos;re performing — across every team
                    and platform.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-foreground/8 bg-white p-8 sm:p-10 max-lg:order-1">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-foreground/5">
                    <Settings className="size-5 text-foreground/50" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-foreground/40">
                    Pillar 02
                  </span>
                </div>
                <h3 className="mt-6 text-3xl font-bold tracking-[-0.04em]">
                  We help you manage them.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-foreground/55">
                  Skills are only useful if they&apos;re governed, distributed,
                  and monitored. We set up your private skill marketplace and
                  give you the controls to run it.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
                        <Icon className="mt-0.5 size-4 shrink-0 text-foreground/30" />
                        <div>
                          <p className="text-sm font-semibold">{item.title}</p>
                          <p className="mt-0.5 text-sm text-foreground/45">
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
        <section className="border-t border-foreground/8 bg-white py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="overflow-hidden rounded-2xl border border-foreground/8">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-10">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/40">
                    Why this matters now
                  </p>
                  <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em]">
                    Your team is already using AI agents. The question is
                    whether you control them.
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-foreground/55">
                    OpenClaw has 2 million weekly users. 22% of enterprises have
                    employees running AI agents as shadow IT. 135,000 instances
                    are exposed to the public internet. The genie is out of the
                    bottle.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-foreground/55">
                    You have two choices: ban it and lose the productivity
                    gains, or{" "}
                    <span className="font-semibold text-foreground/80">
                      govern it and capture the value.
                    </span>
                  </p>
                </div>
                <div className="border-t border-foreground/8 lg:border-l lg:border-t-0">
                  <div className="border-b border-foreground/8 p-8">
                    <p className="text-sm font-semibold text-foreground/75">
                      Without Reifio
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-foreground/45">
                      <li>Every engineer runs their own AI setup</li>
                      <li>No visibility into what agents are doing</li>
                      <li>Tribal knowledge stays in people&apos;s heads</li>
                      <li>Security and compliance risks compound daily</li>
                    </ul>
                  </div>
                  <div className="bg-foreground p-8 text-background">
                    <p className="text-sm font-semibold">With Reifio</p>
                    <ul className="mt-3 space-y-2 text-sm text-background/55">
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

        {/* Proof strip */}
        <section className="border-y border-foreground/8 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-foreground/30">
              Enterprise AI experience across
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {[
                { name: "AGL", logo: "/logos/agl.png" },
                { name: "QBE", logo: "/logos/qbe.png" },
                { name: "Harvey Norman", logo: "/logos/harveynorman.png" },
                { name: "Specsavers", logo: "/logos/specsavers.png" },
                { name: "Open Universities Australia", logo: "/logos/oua.png" },
              ].map((client) => (
                <Image
                  key={client.name}
                  src={client.logo}
                  alt={client.name}
                  width={400}
                  height={400}
                  className="h-10 w-10 rounded-lg object-contain grayscale opacity-50"
                />
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/40">
                  About Reifio
                </p>
                <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em]">
                  We make the abstract real.
                </h2>
                <p className="mt-2 text-sm text-foreground/40 italic">
                  reifio — from &ldquo;reify&rdquo;: to make something abstract
                  concrete and real.
                </p>
                <p className="mt-5 text-base leading-relaxed text-foreground/55">
                  We spent years building enterprise chatbots for brands like
                  AGL, QBE, Harvey Norman, and Specsavers. We know what it
                  takes to get AI into production in organisations where things
                  can&apos;t break.
                </p>
                <p className="mt-4 text-base leading-relaxed text-foreground/55">
                  Now we apply that experience to the next wave: helping teams
                  turn their internal workflows into governed, reusable AI
                  agent skills — and giving them the platform to manage it all.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Melbourne, AU",
                    detail:
                      "Australian-owned. Local delivery. Sovereign AI by default.",
                  },
                  {
                    title: "Senior-led delivery",
                    detail:
                      "The person who scopes is the person who delivers. No bait-and-switch with junior consultants.",
                  },
                  {
                    title: "Platform-agnostic",
                    detail:
                      "Claude, Codex, Cursor, custom LLMs — we build skills that work across any platform.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-foreground/8 bg-white p-6"
                  >
                    <p className="text-xl font-bold tracking-[-0.03em]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-foreground/45">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="border-t border-foreground/8 bg-foreground py-24 text-background"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-[-0.04em]">
                Your agents are only as good
                <br />
                as what they know.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-background/50">
                We help teams encode their expertise into AI agent skills —
                and give them the platform to deploy, govern, and scale those
                skills across the organisation. Let&apos;s talk.
              </p>
              <div className="mt-10">
                <a
                  href="mailto:hello@reifio.com"
                  className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
                >
                  hello@reifio.com
                  <ArrowRight className="size-4" />
                </a>
              </div>
              <p className="mt-6 text-sm text-background/30">
                No pitch deck. No demo. Just a conversation about what your team
                does every week that an AI agent should be doing instead.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground/8 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
          <span className="font-mono text-sm text-foreground/30">reifio</span>
          <span className="text-xs text-foreground/20">
            Melbourne, Australia
          </span>
        </div>
      </footer>
    </div>
  );
}
