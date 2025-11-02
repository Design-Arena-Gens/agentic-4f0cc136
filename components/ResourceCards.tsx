import { ArrowUpRight } from "lucide-react";
import type { Resource } from "@/lib/data/resources";

type Props = {
  resources: Resource[];
};

export default function ResourceCards({ resources }: Props) {
  return (
    <section id="resources" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
              Instant rituals
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-50">
              Access audio rituals, reflective prompts, and integration guides on
              day one.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-brand-300/40 hover:text-brand-100"
          >
            Browse all resources
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.id}
              className="glass-card flex h-full flex-col justify-between rounded-3xl p-8"
            >
              <div>
                <span className="rounded-full bg-brand-500/25 px-3 py-1 text-xs font-medium text-brand-100">
                  {resource.focus}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-100">
                  {resource.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  {resource.description}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
                <span>{resource.duration}</span>
                <a
                  href={resource.url}
                  className="text-brand-100 transition hover:text-brand-200"
                >
                  Open →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
