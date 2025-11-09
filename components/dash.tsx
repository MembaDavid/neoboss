"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Users,
  ClipboardList,
  TrendingUp,
  CalendarDays,
  Bell,
} from "lucide-react";

const stats = [
  {
    label: "Active Members",
    value: "1,248",
    change: "+12.4%",
    trend: "up",
    icon: Users,
  },
  {
    label: "New Registrations",
    value: "87",
    change: "+8.1%",
    trend: "up",
    icon: ClipboardList,
  },
  {
    label: "Engagement Rate",
    value: "73%",
    change: "-2.3%",
    trend: "down",
    icon: Activity,
  },
  {
    label: "Monthly Growth",
    value: "18.5%",
    change: "+4.9%",
    trend: "up",
    icon: TrendingUp,
  },
];

const recentActivities = [
  {
    id: 1,
    title: "New user registration",
    description: "David M. created an account",
    time: "5 min ago",
  },
  {
    id: 2,
    title: "Service booking",
    description: "Booking confirmed for Sunday service",
    time: "32 min ago",
  },
  {
    id: 3,
    title: "Profile update",
    description: "Jane K. updated her contact details",
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "New message",
    description: "Support ticket created: ‘Login issue’",
    time: "2 hours ago",
  },
];

const upcoming = [
  {
    id: 1,
    title: "Leaders meeting",
    date: "Today • 7:30 PM",
    location: "Main Hall",
  },
  {
    id: 2,
    title: "Sunday Service",
    date: "Sun • 9:00 AM",
    location: "Sanctuary",
  },
  {
    id: 3,
    title: "Tech Team Sync",
    date: "Tue • 6:00 PM",
    location: "Online",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top Bar */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-8">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
              Admin Dashboard
            </h1>
            <p className="text-sm text-slate-400 flex items-center gap-2 mt-1">
              <CalendarDays className="w-4 h-4" />
              Overview of activity, growth and upcoming events.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative inline-flex items-center justify-center rounded-full border border-slate-700 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 transition">
              <Bell className="w-4 h-4 mr-2" />
              Alerts
              <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-slate-950">
                3
              </span>
            </button>
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-slate-300">System status: Online</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
        {/* KPI Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            const isUp = item.trend === "up";
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-md hover:shadow-lg hover:border-amber-400/60 transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-slate-800">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      isUp
                        ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                        : "bg-rose-500/10 text-rose-300 border border-rose-500/40"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-50">
                  {item.value}
                </p>

                {/* Mini progress bar */}
                <div className="mt-4 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      isUp
                        ? "bg-gradient-to-r from-amber-400 to-emerald-400"
                        : "bg-gradient-to-r from-amber-400 to-rose-400"
                    }`}
                    style={{
                      width: isUp ? "70%" : "45%",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Activity Feed */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 md:p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-50">
                  Recent Activity
                </h2>
                <p className="text-sm text-slate-400">
                  Live stream of what’s happening in your system.
                </p>
              </div>
              <button className="text-xs font-medium text-amber-300 hover:underline">
                View all
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 border-b border-slate-800/80 pb-3 last:border-b-0 last:pb-0"
                >
                  <div className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-100">
                      {activity.title}
                    </p>
                    <p className="text-xs text-slate-400">
                      {activity.description}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Upcoming & Summary */}
          <div className="space-y-6">
            {/* Upcoming */}
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 md:p-6"
            >
              <h2 className="text-lg font-semibold text-slate-50 mb-3">
                Upcoming
              </h2>
              <div className="space-y-4">
                {upcoming.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-3"
                  >
                    <p className="text-sm font-medium text-slate-100">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{item.date}</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.location}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Quick Summary */}
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-2xl border border-amber-400/40 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-5 md:p-6"
            >
              <h2 className="text-sm font-semibold text-amber-300 mb-2 uppercase tracking-wide">
                Today’s Snapshot
              </h2>
              <p className="text-sm text-slate-100">
                System activity is{" "}
                <span className="font-semibold text-emerald-300">stable</span>{" "}
                with healthy engagement and steady growth. You’re on track with
                registrations and upcoming events.
              </p>
              <button className="mt-4 w-full rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-300 transition">
                Download full report
              </button>
            </motion.section>
          </div>
        </div>
      </section>
    </main>
  );
}
