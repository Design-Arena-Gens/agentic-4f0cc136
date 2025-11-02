"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Clock, Loader2, ShieldCheck } from "lucide-react";
import type { Therapist } from "@/lib/data/therapists";

type Props = {
  therapists: Therapist[];
};

type BookingState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string };

const plans = [
  {
    id: "weekly",
    title: "Weekly care",
    price: "$120",
    frequency: "per 50 min session",
    features: [
      "Live video with licensed therapist",
      "Personalized between-session rituals",
      "Weekly progress insights dashboard"
    ],
    recommended: true
  },
  {
    id: "biweekly",
    title: "Bi-weekly",
    price: "$140",
    frequency: "per 50 min session",
    features: [
      "Live video every other week",
      "Async coach messaging",
      "Monthly outcome review"
    ]
  },
  {
    id: "intensive",
    title: "Intensive care arc",
    price: "$260",
    frequency: "per 90 min intensive",
    features: [
      "Two deep dives per month",
      "Somatic + EMDR support",
      "On-demand crisis planning"
    ]
  }
];

export default function SessionBooking({ therapists }: Props) {
  const [selectedTherapist, setSelectedTherapist] = useState(therapists[0]?.id);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [planId, setPlanId] = useState(plans[0]?.id);
  const [bookingState, setBookingState] = useState<BookingState>({
    status: "idle"
  });

  const therapist = useMemo(
    () => therapists.find((item) => item.id === selectedTherapist),
    [therapists, selectedTherapist]
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!therapist || !selectedSlot) {
      setBookingState({
        status: "success",
        message: "Select a therapist and session time to continue."
      });
      return;
    }

    setBookingState({ status: "loading" });
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setBookingState({
      status: "success",
      message: `You're on the books with ${therapist.name} for ${selectedSlot}. We'll follow up with onboarding rituals shortly.`
    });
  }

  return (
    <section id="booking" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
              Booking in 90 seconds
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-50">
              Choose your therapist, pick a plan, lock the first session.
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Everything is HIPAA compliant with end-to-end encryption. You can
              reschedule with 24 hours notice. Sliding scale pricing is
              available after onboarding.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-slate-300 md:grid-cols-3">
              <div className="glass-card rounded-2xl p-4">
                <ShieldCheck className="h-6 w-6 text-brand-200" />
                <p className="mt-3 font-semibold text-slate-100">
                  HIPAA + SOC2
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Secure video, encrypted notes, redaction controls
                </p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <Clock className="h-6 w-6 text-brand-200" />
                <p className="mt-3 font-semibold text-slate-100">
                  Flexible evenings
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Evening and weekend availability held weekly
                </p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <CheckCircle2 className="h-6 w-6 text-brand-200" />
                <p className="mt-3 font-semibold text-slate-100">
                  Outcome tracking
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Review progress with your therapist every 4 sessions
                </p>
              </div>
            </div>
          </div>
          <form
            className="glass-card flex flex-col gap-6 rounded-3xl p-8"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="text-sm font-semibold text-slate-100">
                Therapist
              </label>
              <div className="mt-3 grid gap-3">
                {therapists.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`rounded-2xl border p-4 text-left transition ${
                      selectedTherapist === item.id
                        ? "border-brand-400 bg-brand-500/20 text-brand-100"
                        : "border-white/10 bg-white/5 text-slate-300 hover:border-brand-300/30"
                    }`}
                    onClick={() => {
                      setSelectedTherapist(item.id);
                      setSelectedSlot("");
                      setBookingState({ status: "idle" });
                    }}
                  >
                    <p className="text-sm font-semibold text-slate-100">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-400">{item.specialties.join(" • ")}</p>
                  </button>
                ))}
              </div>
            </div>
            {therapist && (
              <div>
                <label className="text-sm font-semibold text-slate-100">
                  Available sessions
                </label>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {therapist.availability.flatMap((window) =>
                    window.slots.map((slot) => (
                      <label
                        key={`${window.day}-${slot}`}
                        className={`flex cursor-pointer flex-col rounded-xl border px-4 py-3 text-sm transition ${
                          selectedSlot === `${window.day} · ${slot}`
                            ? "border-brand-400 bg-brand-500/20 text-brand-100"
                            : "border-white/10 bg-white/5 text-slate-300 hover:border-brand-300/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="slot"
                          className="hidden"
                          value={`${window.day} · ${slot}`}
                          checked={selectedSlot === `${window.day} · ${slot}`}
                          onChange={(event) =>
                            setSelectedSlot(event.target.value)
                          }
                        />
                        <span className="font-semibold text-slate-100">
                          {window.day}
                        </span>
                        <span className="text-xs text-slate-400">{slot}</span>
                      </label>
                    ))
                  )}
                </div>
              </div>
            )}
            <div>
              <label className="text-sm font-semibold text-slate-100">
                Care plan
              </label>
              <div className="mt-3 grid gap-3">
                {plans.map((plan) => (
                  <label
                    key={plan.id}
                    className={`flex cursor-pointer flex-col gap-2 rounded-2xl border p-4 transition ${
                      planId === plan.id
                        ? "border-brand-400 bg-brand-500/15 text-brand-100"
                        : "border-white/10 bg-white/5 text-slate-300 hover:border-brand-300/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="plan"
                      className="hidden"
                      checked={planId === plan.id}
                      onChange={() => setPlanId(plan.id)}
                    />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-base font-semibold text-slate-100">
                          {plan.title}
                        </p>
                        <p className="text-xs text-slate-400">{plan.frequency}</p>
                      </div>
                      <p className="text-lg font-semibold text-slate-100">
                        {plan.price}
                      </p>
                    </div>
                    <ul className="text-xs text-slate-400">
                      {plan.features.map((feature) => (
                        <li key={feature}>• {feature}</li>
                      ))}
                    </ul>
                    {plan.recommended && (
                      <span className="w-fit rounded-full bg-brand-500/30 px-3 py-1 text-xs font-semibold text-brand-100">
                        Most chosen
                      </span>
                    )}
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-400 disabled:pointer-events-none disabled:opacity-50"
              disabled={bookingState.status === "loading"}
            >
              {bookingState.status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Scheduling your session…
                </>
              ) : (
                "Secure your session"
              )}
            </button>
            {bookingState.status === "success" && (
              <p className="rounded-2xl border border-brand-300/30 bg-brand-500/10 p-4 text-sm text-brand-100">
                {bookingState.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
