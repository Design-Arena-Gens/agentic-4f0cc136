"use client";

import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  { label: "Average reduction in anxiety symptoms", value: "58%" },
  { label: "Sessions rated \"life-changing\"", value: "91%" },
  { label: "Therapist availability within 7 days", value: "100%" }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-28 pt-20">
      <div className="hero-gradient absolute inset-0" />
      <div className="grid-overlay absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-200">
            Clinically-backed & LGBTQIA+ affirming
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.15] text-slate-50 sm:text-5xl">
            Therapy designed for modern lives. Human-centered. Data-aware.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Serenity Space pairs you with a licensed therapist, adaptive support
            rituals, and progress dashboards so you can build a mental health
            practice that actually sticks.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#booking"
              className="flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-400"
            >
              Match with a therapist
            </Link>
            <Link
              href="#demo"
              className="flex items-center justify-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
            >
              <PlayCircle className="h-5 w-5 text-brand-200" />
              Watch demo
            </Link>
          </div>
        </div>
        <div className="relative flex items-center justify-end">
          <div className="glass-card relative w-full max-w-md rounded-3xl p-8 shadow-2xl">
            <div className="absolute -top-12 right-10 hidden h-24 w-24 rounded-3xl bg-brand-500/30 blur-3xl lg:block" />
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-200">
              Weekly Ritual
            </h2>
            <p className="mt-3 text-2xl font-semibold text-slate-100">
              Emotional Reset for Ambitious Minds
            </p>
            <p className="mt-4 text-sm text-slate-300">
              Dr. Anderson updates this session plan after every check-in.
            </p>
            <div className="mt-6 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Focus areas
                </p>
                <ul className="mt-2 flex flex-wrap gap-2 text-sm text-slate-200">
                  <li className="rounded-full bg-brand-500/20 px-3 py-1 text-brand-100">
                    Cognitive reframing
                  </li>
                  <li className="rounded-full bg-brand-500/20 px-3 py-1 text-brand-100">
                    Nervous system reset
                  </li>
                  <li className="rounded-full bg-brand-500/20 px-3 py-1 text-brand-100">
                    Boundaries practice
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Data snapshot
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  <li>
                    Check-in mood trend:{" "}
                    <span className="font-semibold text-brand-100">+14%</span>
                  </li>
                  <li>
                    Sleep quality:{" "}
                    <span className="font-semibold text-brand-100">7.8 / 10</span>
                  </li>
                  <li>
                    Ritual completion:{" "}
                    <span className="font-semibold text-brand-100">4 / 5</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="mx-auto mt-20 flex max-w-6xl flex-wrap justify-center gap-6 px-6 text-xs text-slate-400 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex min-w-[220px] flex-col rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-left"
          >
            <span className="text-2xl font-semibold text-brand-100">
              {metric.value}
            </span>
            <span className="mt-2 opacity-80">{metric.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
