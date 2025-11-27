"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AIAutomationPage() {
  return (
    <div className="w-full flex flex-col">
      {/* HERO */}
      <section className="w-full py-24 bg-gradient-to-br from-black via-neutral-900 to-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            AI Automation Solutions
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            Replace repetitive tasks with intelligent automation that works
            24/7—boosting your speed, accuracy, and output instantly.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold flex items-center gap-2"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
            <Link
              href="/process"
              className="px-6 py-3 border border-neutral-600 hover:border-white rounded-lg font-semibold"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE AUTOMATE */}
      <section className="py-20 bg-white dark:bg-neutral-100 text-neutral-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">What We Automate</h2>
          <p className="text-neutral-600 max-w-2xl mb-10">
            We build intelligent automations and AI agents designed to eliminate
            manual workload across any department in your business.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Customer Support Bots",
              "Lead Qualification & Follow-ups",
              "Document Processing & Summaries",
              "Email Workflows",
              "Social Media Automation",
              "Sales Pipeline Automation",
              "Data Extraction & Validation",
              "Internal AI Assistants",
              "Custom Internal Automations",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-neutral-50 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Why NeoBoss Concepts</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {[
              {
                title: "One-Man AI Army",
                desc: "Your project is handled by a developer who builds with a full AI-powered workflow.",
              },
              {
                title: "Custom Systems",
                desc: "Everything is built specifically around your operations. No generic templates.",
              },
              {
                title: "Fast Deployment",
                desc: "Most automation setups go live in days—not months.",
              },
              {
                title: "Guaranteed Efficiency",
                desc: "Clients typically save 50–90% of time on automated tasks.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="p-6 bg-neutral-800 rounded-xl border border-neutral-700 hover:border-blue-500 transition"
              >
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-neutral-300 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white dark:bg-neutral-100 text-neutral-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Our Automation Process</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                step: "1",
                title: "Discovery Call",
                desc: "We analyze your workflow and pinpoint where automation gives the biggest impact.",
              },
              {
                step: "2",
                title: "Automation Blueprint",
                desc: "We design a system tailored specifically to your operations.",
              },
              {
                step: "3",
                title: "Build & Integrate",
                desc: "We connect APIs, create agents, and set logic for your workflow.",
              },
              {
                step: "4",
                title: "Launch & Optimize",
                desc: "We test, refine, and scale the automation to full efficiency.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl shadow bg-white">
                <div className="text-blue-600 font-bold text-5xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Ready to Automate?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Let's build an AI-powered system for your business — fast, efficient,
          and custom-designed to eliminate bottlenecks.
        </p>

        <Link
          href="/contact"
          className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg shadow hover:shadow-lg transition"
        >
          Get a Quote
        </Link>
      </section>
    </div>
  );
}
