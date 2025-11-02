import { Calendar, Languages, Sparkle } from "lucide-react";
import type { Therapist } from "@/lib/data/therapists";

type Props = {
  therapists: Therapist[];
};

export default function TherapistGrid({ therapists }: Props) {
  return (
    <section id="therapists" className="bg-slate-950/40 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
              Licensed therapists
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-50">
              Meet the humans guiding your care
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Diverse modalities, trauma-informed, queer-affirming, culturally
              responsive. Choose the specialist that aligns with your goals.
            </p>
          </div>
          <div className="glass-card max-w-sm rounded-2xl p-5 text-sm text-slate-300">
            <div className="flex items-center gap-3 text-brand-200">
              <Sparkle className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.25em]">
                Outcomes we track
              </span>
            </div>
            <p className="mt-3">
              We measure regulation capacity, connection health, and self-trust
              growth in partnership with you — no arbitrary streaks.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {therapists.map((therapist) => (
            <article
              key={therapist.id}
              className="glass-card group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10"
            >
              <div
                className="relative h-52 w-full"
                style={{ background: therapist.avatarGradient }}
              >
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/90 to-transparent" />
                <p className="absolute left-4 bottom-4 rounded-full bg-brand-500/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {therapist.credentials}
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">
                    {therapist.name}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {therapist.yearsExperience}+ years experience
                  </p>
                </div>
                <div className="text-sm text-slate-300">
                  <p>{therapist.bio}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {therapist.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-brand-100"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-400">
                  <div className="flex items-center gap-2 font-semibold text-brand-100">
                    <Calendar className="h-4 w-4" />
                    <span>Upcoming availability</span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {therapist.availability.map((slot) => (
                      <li key={slot.day} className="flex items-center justify-between">
                        <span>{slot.day}</span>
                        <span className="text-slate-300">
                          {slot.slots.join(", ")}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center gap-2 text-brand-100">
                    <Languages className="h-4 w-4" />
                    <span>{therapist.languages.join(" • ")}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
