"use client";

import type { Testimonial } from "@/lib/data/testimonials";

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialMarquee({ testimonials }: Props) {
  const items = [...testimonials, ...testimonials];

  return (
    <section id="stories" className="bg-slate-950/50 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
            Outcomes our clients feel
          </p>
          <h2 className="text-3xl font-semibold text-slate-50">
            Real stories from ambitious humans tending to their nervous systems.
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent" />
          <div className="flex animate-[scroll_40s_linear_infinite] gap-6 hover:[animation-play-state:paused]">
            {items.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}`}
                className="glass-card w-[320px] shrink-0 rounded-3xl p-6 text-left"
              >
                <p className="text-sm text-slate-200">“{testimonial.quote}”</p>
                <div className="mt-6 text-xs text-slate-400">
                  <p className="font-semibold text-slate-200">
                    {testimonial.name}
                  </p>
                  <p>{testimonial.role}</p>
                  <p className="mt-2 text-brand-100">{testimonial.progress}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
