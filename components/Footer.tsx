import Link from "next/link";

const footerNav = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Therapists", href: "#therapists" },
      { label: "Careers", href: "#" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Evidence & Outcomes", href: "#how-it-works" },
      { label: "Community", href: "#" },
      { label: "Help center", href: "#" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "HIPAA Compliance", href: "#" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[2fr,1fr,1fr,1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-xl border border-brand-400/40 bg-brand-500/30" />
              <p className="text-lg font-semibold">
                Serenity<span className="text-brand-200">Space</span>
              </p>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Evidence-led mental health care. Human therapists, adaptive plans,
              data you can trust.
            </p>
          </div>
          {footerNav.map((section) => (
            <div key={section.title}>
              <p className="text-sm font-semibold text-slate-200">
                {section.title}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition hover:text-slate-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800/60 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Serenity Space. All rights reserved.</p>
          <p className="text-slate-500">
            Crisis support? Contact 988 (US) or your local emergency services.
          </p>
        </div>
      </div>
    </footer>
  );
}
