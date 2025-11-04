"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiCheckCircle,
  FiShield,
  FiArrowRight,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top Navigation */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-400" />
            <span className="font-semibold tracking-tight text-slate-50">
              NeoBoss Suite
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <Link href="#overview" className="hover:text-slate-50 transition">
              Overview
            </Link>
            <Link href="#features" className="hover:text-slate-50 transition">
              Features
            </Link>
            <Link href="#updates" className="hover:text-slate-50 transition">
              Updates
            </Link>
            <Link
              href="/auth/login"
              className="px-3 py-1.5 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-300 transition"
            >
              Sign in
            </Link>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-slate-700 text-slate-200"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950">
            <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm text-slate-300">
              <Link
                href="#overview"
                className="py-1 hover:text-slate-50 transition"
                onClick={() => setMobileOpen(false)}
              >
                Overview
              </Link>
              <Link
                href="#features"
                className="py-1 hover:text-slate-50 transition"
                onClick={() => setMobileOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#updates"
                className="py-1 hover:text-slate-50 transition"
                onClick={() => setMobileOpen(false)}
              >
                Updates
              </Link>
              <Link
                href="/auth/login"
                className="mt-2 inline-flex items-center justify-center px-3 py-1.5 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-300 transition"
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero + Overview */}
      <section
        id="overview"
        className="max-w-6xl mx-auto px-4 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20"
      >
        <div className="grid lg:grid-cols-[1.3fr,1fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-blue-300/80 bg-blue-500/10 border border-blue-500/30 rounded-full px-3 py-1 mb-4">
              Live • Control Center
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
              A serious home for your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-300">
                operations & analytics
              </span>
              .
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl">
              View key metrics, track activity, and keep your team aligned from
              one clean, focused dashboard. No noise. Just what matters, at a
              glance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-blue-400 transition"
              >
                Go to Dashboard
                <FiArrowRight size={16} />
              </Link>

              <Link
                href="#features"
                className="text-sm text-slate-300 hover:text-slate-50 underline-offset-4 hover:underline"
              >
                View key features
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-xs text-slate-400">
              <div>
                <p className="font-semibold text-slate-200">Built for teams</p>
                <p>Role-based access, clear ownership, audit-ready.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-200">
                  Stable & production-ready
                </p>
                <p>Modern stack, predictable behaviour, serious look.</p>
              </div>
            </div>
          </motion.div>

          {/* Right side: "Card" with key metrics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl shadow-black/40 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-slate-400">
                    Today&apos;s overview
                  </p>
                  <p className="text-sm font-medium text-slate-100">
                    System health • Stable
                  </p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <FiBarChart2 className="text-blue-400" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl bg-slate-900/70 border border-slate-800 px-3 py-3">
                  <p className="text-slate-400 mb-1">Active users</p>
                  <p className="text-lg font-semibold text-slate-50">1,248</p>
                  <p className="text-[11px] text-emerald-400 mt-1">
                    +8.3% today
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900/70 border border-slate-800 px-3 py-3">
                  <p className="text-slate-400 mb-1">Attendance</p>
                  <p className="text-lg font-semibold text-slate-50">97.4%</p>
                  <p className="text-[11px] text-emerald-400 mt-1">
                    Within expected range
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900/70 border border-slate-800 px-3 py-3">
                  <p className="text-slate-400 mb-1">Alerts</p>
                  <p className="text-lg font-semibold text-slate-50">02</p>
                  <p className="text-[11px] text-amber-400 mt-1">
                    Review before end of day
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-slate-900/80 border border-slate-800 px-3 py-3 flex items-center gap-3 text-xs">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <FiCheckCircle className="text-emerald-400" />
                </div>
                <div>
                  <p className="font-medium text-slate-100">
                    All core services are operational.
                  </p>
                  <p className="text-slate-400">
                    No incidents reported in the last 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-slate-800 bg-slate-900/60">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
          <div>
            <p className="text-slate-400">Uptime (90 days)</p>
            <p className="text-lg font-semibold text-slate-50">99.98%</p>
          </div>
          <div>
            <p className="text-slate-400">Avg. response</p>
            <p className="text-lg font-semibold text-slate-50">184 ms</p>
          </div>
          <div>
            <p className="text-slate-400">Teams onboarded</p>
            <p className="text-lg font-semibold text-slate-50">42</p>
          </div>
          <div>
            <p className="text-slate-400">Regions</p>
            <p className="text-lg font-semibold text-slate-50">5</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="max-w-6xl mx-auto px-4 lg:px-8 py-14 lg:py-16"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
              Built for serious work
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Clear structure, predictable layouts, and a tone that matches the
              work.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="h-9 w-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
              <FiBarChart2 className="text-blue-400" />
            </div>
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Executive-level visibility
            </h3>
            <p className="text-xs text-slate-400">
              Surface only the most important numbers first, with space to drill
              down when needed.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="h-9 w-9 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
              <FiCheckCircle className="text-emerald-400" />
            </div>
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Workflow-friendly layout
            </h3>
            <p className="text-xs text-slate-400">
              Sections are structured around how people actually work, not just
              how data is stored.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="h-9 w-9 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3">
              <FiShield className="text-indigo-300" />
            </div>
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Trustworthy by design
            </h3>
            <p className="text-xs text-slate-400">
              Neutral colours, consistent spacing, and clear typography
              reinforce a professional, reliable feel.
            </p>
          </div>
        </div>
      </section>

      {/* Latest updates */}
      <section
        id="updates"
        className="max-w-6xl mx-auto px-4 lg:px-8 pb-16 lg:pb-20"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-50">
            Latest updates
          </h2>
          <span className="text-xs text-slate-400">
            Internal log • Demo data
          </span>
        </div>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 flex items-start justify-between gap-3">
            <div>
              <p className="font-medium text-slate-100">
                Analytics cards refined for clarity
              </p>
              <p className="text-slate-400">
                Updated typography, spacing, and tone to better support
                executive reviews.
              </p>
            </div>
            <span className="text-[11px] text-slate-500 whitespace-nowrap">
              Today • 14:32
            </span>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 flex items-start justify-between gap-3">
            <div>
              <p className="font-medium text-slate-100">
                Navigation cleaned up for launch
              </p>
              <p className="text-slate-400">
                Removed noisy items and aligned labels with the main user
                journeys.
              </p>
            </div>
            <span className="text-[11px] text-slate-500 whitespace-nowrap">
              Yesterday • 19:08
            </span>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 flex items-start justify-between gap-3">
            <div>
              <p className="font-medium text-slate-100">
                Initial serious home page ready
              </p>
              <p className="text-slate-400">
                This layout is now stable enough to demo while you wire in real
                data.
              </p>
            </div>
            <span className="text-[11px] text-slate-500 whitespace-nowrap">
              This week
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-5">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} NeoBoss Suite. All rights reserved.
          </p>
          <div className="flex gap-4">
            <button className="hover:text-slate-300 transition">Status</button>
            <button className="hover:text-slate-300 transition">
              Documentation
            </button>
            <button className="hover:text-slate-300 transition">Support</button>
          </div>
        </div>
      </footer>
    </main>
  );
}
