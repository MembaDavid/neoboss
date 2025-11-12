"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactGetQuote() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Quote request sent! We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 px-6 py-16 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-blue-950/60 backdrop-blur-xl rounded-2xl shadow-2xl p-10 border border-blue-800"
      >
        <h1 className="text-4xl font-bold mb-4 text-center text-gold">
          Contact / Get a Quote
        </h1>
        <p className="text-center text-blue-200 mb-8">
          Let’s bring your idea to life. Tell us what you need and we’ll get in
          touch with a custom quote.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 rounded-lg bg-blue-900 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-gold text-white"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-blue-900 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-gold text-white"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Project Details</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg bg-blue-900 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-gold text-white"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-gold text-blue-950 font-bold rounded-lg hover:bg-yellow-400 transition-all"
          >
            Send Message
          </motion.button>
        </form>

        <div className="mt-10 text-center text-blue-300 text-sm">
          <p>Or reach us directly:</p>
          <p className="mt-1">
            📞 +254 729 914 067 &nbsp;|&nbsp; ✉️{" "}
            <a
              href="mailto:info@neobossconcepts.com"
              className="underline text-gold hover:text-yellow-400"
            >
              info@neobossconcepts.com
            </a>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
