import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-black">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block mb-6 rounded-full bg-blue-600/10 px-5 py-2 text-sm font-medium text-blue-400">
            Building the future with software & AI
          </span>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white">
            We build <span className="text-blue-500">intelligent software</span>
            <br />
            that scales businesses
          </h1>

          <p className="mt-8 text-lg md:text-xl text-neutral-300 leading-relaxed">
            NeoBoss Concepts designs and engineers modern applications, AI
            automation, and digital systems that help ambitious businesses move
            faster and smarter.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white hover:bg-blue-500 transition"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/5 transition"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
