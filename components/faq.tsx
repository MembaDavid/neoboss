"use client";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most small-to-medium builds land in 3–8 weeks depending on complexity, integrations, and content readiness.",
  },
  {
    q: "Do you work with my existing backend or design?",
    a: "Yes. We can integrate with existing APIs, auth providers, and design systems, or propose a pragmatic refresh.",
  },
  {
    q: "What’s your pricing model?",
    a: "Fixed-scope, milestone-based. You get a clear proposal up front and only pay when milestones are delivered.",
  },
  {
    q: "Can we start with a smaller engagement?",
    a: "Absolutely—kick off with a Discovery Sprint to de-risk scope, validate assumptions, and produce a clickable prototype.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. Options include a monthly improvement plan (analytics-driven), on-call support, and scheduled feature drops.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-4xl px-6 py-16">
        <header className="mb-10 text-center">
          <p className="text-sm uppercase tracking-widest text-neutral-500">
            FAQ
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Answers to common questions
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
            If you can’t find what you’re looking for, drop us a line—happy to
            help.
          </p>
        </header>

        <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200">
          {faqs.map((item, idx) => (
            <details key={idx} className="group p-5 open:bg-neutral-50">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left">
                <span className="text-base font-semibold text-neutral-900">
                  {item.q}
                </span>
                <span
                  className="ms-4 inline-flex h-6 w-6 items-center justify-center rounded-md border border-neutral-300 text-neutral-700 transition group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-700">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700"
          >
            Still stuck? Contact us
          </a>
        </div>
      </section>
    </main>
  );
}
