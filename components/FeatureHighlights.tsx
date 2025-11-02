import { BrainCircuit, HeartHandshake, LineChart } from "lucide-react";

const featureCards = [
  {
    icon: BrainCircuit,
    title: "Therapist-first, tech-enabled",
    description:
      "All therapists are vetted for trauma-informed practice. AI is used to draft notes and rituals, never to replace human connection."
  },
  {
    icon: HeartHandshake,
    title: "Adaptive support rituals",
    description:
      "Stay grounded between sessions through daily check-ins, audio exercises, and community accountability rooms."
  },
  {
    icon: LineChart,
    title: "Outcome dashboards that matter",
    description:
      "Visualize your nervous system trends, boundary successes, and goal progress with metrics co-defined with your therapist."
  }
];

export default function FeatureHighlights() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-6xl px-6 py-24 lg:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
            Whole-person support
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-50">
            Every session is rooted in licensed expertise and supported by
            evidence-based micro-actions the other 167 hours of your week.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            We map your emotional energy, nervous system resilience, and
            relationship health to personalize the care journey. No generic
            worksheets. Everything is co-created with your therapist and visible
            in a shared dashboard.
          </p>
        </div>
        <div className="glass-card h-fit rounded-3xl p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Current focus arc
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-100">
                Compassion + Boundaries
              </p>
            </div>
            <span className="rounded-full border border-brand-300/40 bg-brand-400/20 px-3 py-1 text-xs font-medium text-brand-100">
              Week 5 of 8
            </span>
          </div>
          <div className="mt-6 space-y-5">
            <div className="rounded-2xl border border-white/12 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Rituals completed
              </p>
              <div className="mt-3 h-2 rounded-full bg-slate-800">
                <div className="h-full w-3/4 rounded-full bg-brand-400" />
              </div>
              <p className="mt-3 text-sm text-slate-300">
                6 of 8 rituals complete this week — 2 reflective journal prompts
                remaining
              </p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Nervous system regulation
              </p>
              <p className="mt-3 text-sm text-brand-100">
                Variability score up 22% after breathwork + somatic grounding
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Source: Apple Health, Oura, daily check-ins
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {featureCards.map((card) => (
          <article
            key={card.title}
            className="glass-card rounded-3xl p-8 transition hover:-translate-y-1 hover:shadow-glow"
          >
            <card.icon className="h-8 w-8 text-brand-200" />
            <h3 className="mt-4 text-lg font-semibold text-slate-100">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
