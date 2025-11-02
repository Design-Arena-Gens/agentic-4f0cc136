import { ArrowRight, Headphones } from "lucide-react";
import Link from "next/link";

export default function SupportBanner() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-brand-300/30 bg-gradient-to-br from-brand-500/25 via-slate-900 to-slate-950 px-6 py-16 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.25em] text-brand-50">
              Humans behind every message
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-50">
              Start with a 30 minute fit call—meet your care team and co-create
              your first 8 week arc.
            </h2>
            <p className="mt-4 text-base text-slate-200/90">
              No scripts. No pressure. Just a conversation about where you are,
              where you want to be, and how we can support the bridge.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-200/80">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Headphones className="h-4 w-4 text-brand-100" />
                Dedicated care concierge
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                Transparent pricing
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                Sliding scale available
              </span>
            </div>
          </div>
          <div className="glass-card flex flex-col gap-6 rounded-3xl p-8 text-sm text-slate-200">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-100">
                Investment
              </p>
              <p className="mt-3 text-2xl font-semibold text-slate-50">
                $120 - $260 per session
              </p>
              <p className="mt-2 text-xs text-slate-300">
                Sliding scale options start at $85 based on need.
              </p>
            </div>
            <ul className="space-y-3 text-xs text-slate-300">
              <li>• Cancel or reschedule up to 24 hours before the session.</li>
              <li>• All plans include guided rituals + accountability community.</li>
              <li>• Employer wellness stipends accepted.</li>
            </ul>
            <Link
              href="#booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Book a fit call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
