"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const STEPS = [
  {
    id: 1,
    title: "Discovery",
    blurb:
      "We clarify goals, target users, constraints, and success metrics. Expect a short workshop + a written brief.",
  },
  {
    id: 2,
    title: "Scope & Proposal",
    blurb:
      "You get a crystal-clear scope, timelines, and investment. We agree on milestones and communication rhythm.",
  },
  {
    id: 3,
    title: "Design & Prototyping",
    blurb:
      "Low-fi → high-fi flows, component library, and interactive prototype for quick feedback and buy-in.",
  },
  {
    id: 4,
    title: "Build",
    blurb:
      "Dev sprints with weekly demos. CI/CD, quality checks, analytics, and performance budgets baked in.",
  },
  {
    id: 5,
    title: "Launch & Iterate",
    blurb:
      "Staged rollout, observability, and a post-launch optimization pass driven by real user data.",
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <header className="mb-12 text-center">
          <p className="text-sm uppercase tracking-widest text-neutral-500">
            How we work
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            A clear, no-drama process
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
            Built for speed, transparency, and outcomes. Here’s what to expect
            from kickoff to launch.
          </p>
        </header>

        {/* Timeline */}
        <ol className="relative border-s-2 border-neutral-200 pl-6">
          {STEPS.map((step, i) => (
            <li key={step.id} className="mb-12 ms-4">
              <span
                className={[
                  "absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white",
                  i === 0 ? "border-blue-600" : "border-neutral-300",
                ].join(" ")}
                aria-hidden
              >
                {i === 0 ? (
                  <span className="block h-3 w-3 rounded-full bg-blue-600" />
                ) : (
                  <Check className="h-3.5 w-3.5 text-neutral-400" />
                )}
              </span>

              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-1 max-w-2xl text-neutral-600">{step.blurb}</p>

              {/* Mini milestone card */}
              <div className="mt-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/10 text-blue-700">
                    {step.id}
                  </span>
                  <span className="font-medium text-neutral-800">
                    Milestone {step.id}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-600">
                  Deliverables: brief notes, artifacts, and a ✔ review checklist
                  to move forward.
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA Row */}
        <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700"
          >
            Start a project <ArrowRight className="ms-2 h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-neutral-800 hover:bg-neutral-50"
          >
            See services
          </Link>
        </div>
      </section>
    </main>
  );
}
