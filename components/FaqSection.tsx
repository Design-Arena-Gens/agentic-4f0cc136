const faqs = [
  {
    question: "Are your therapists licensed?",
    answer:
      "Every therapist is fully licensed in their practicing state and receives ongoing training in trauma-informed, LGBTQIA+ affirming, and culturally responsive care. We verify credentials quarterly."
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We provide super-bills for out-of-network reimbursement and work with HSA/FSA accounts. Select employer plans cover sessions—ask our care team during onboarding."
  },
  {
    question: "Can I message my therapist between sessions?",
    answer:
      "Yes. Every plan includes secure async messaging. Therapists respond within 24 hours on weekdays with grounding rituals, check-ins, or resource recommendations."
  },
  {
    question: "What if I need crisis support?",
    answer:
      "We are not a crisis center. Contact 988 (US) or local emergency services for immediate help. During onboarding we co-create a personalized crisis plan."
  }
];

export default function FaqSection() {
  return (
    <section id="faq" className="border-t border-slate-800/60 bg-slate-950/60 py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-50">
            Everything you want to know before booking.
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-slate-100">
                {faq.question}
                <span className="transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
