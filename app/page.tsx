"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
        >
          Welcome to Our Website
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-gray-700"
        >
          We’re building something{" "}
          <span className="font-semibold">amazing</span> for you. Explore,
          connect, and enjoy a whole new experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-10 flex gap-4"
        >
          <Link
            href="/about"
            className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium flex items-center gap-2 hover:bg-blue-700 transition"
          >
            Learn More <ArrowRight />
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-2xl border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">⚡ Fast</h3>
            <p className="text-gray-600">
              Our platform is optimized for speed and performance.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🎨 Modern</h3>
            <p className="text-gray-600">
              Beautifully designed with the latest UI/UX standards.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🔒 Secure</h3>
            <p className="text-gray-600">
              Your data and experience are safe with us.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 bg-gradient-to-r from-blue-100 to-white">
        © {new Date().getFullYear()} Our Company. All rights reserved.
      </footer>
    </main>
  );
}
