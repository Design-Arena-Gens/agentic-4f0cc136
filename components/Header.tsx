'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#therapists", label: "Therapists" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-10 w-10 rounded-2xl bg-brand-500/20">
            <span className="mx-auto block h-full w-full rounded-2xl border border-brand-400/50 bg-brand-500/40" />
          </span>
          <span className="text-lg font-semibold tracking-wide">
            Serenity<span className="text-brand-300">Space</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-200/90 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-brand-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 hover:text-slate-50"
          >
            Sign in
          </Link>
          <Link
            href="#booking"
            className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-400"
          >
            Start session
          </Link>
        </div>
        <button
          className="rounded-full border border-slate-800/70 p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-800/70 bg-slate-900/90 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-slate-200/90">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 transition hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-brand-500 px-3 py-2 text-center font-semibold text-white transition hover:bg-brand-400"
            >
              Start session
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
