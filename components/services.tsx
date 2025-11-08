"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Globe,
  Code,
  Users,
  Rocket,
  Headphones,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: Code,
    description:
      "Modern, high-performance websites and web apps built with Next.js, React, and Tailwind CSS for blazing speed and smooth UX.",
  },
  {
    title: "Brand Identity & Design",
    icon: Globe,
    description:
      "We craft visual identities that communicate value — from logos and color palettes to digital design systems.",
  },
  {
    title: "Digital Strategy",
    icon: Rocket,
    description:
      "We help you position your brand online with SEO, growth analytics, and integrated marketing strategies.",
  },
  {
    title: "AI & Automation",
    icon: Briefcase,
    description:
      "Leverage AI tools and workflows to streamline operations, boost productivity, and scale efficiently.",
  },
  {
    title: "Consulting & Training",
    icon: Users,
    description:
      "We provide expert guidance, code reviews, and one-on-one sessions to help your team ship faster.",
  },
  {
    title: "Support & Maintenance",
    icon: Headphones,
    description:
      "Continuous monitoring, updates, and feature improvements to keep your systems performing flawlessly.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-gray-900">
      {/* Hero */}
      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-blue-900 mb-4"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg text-gray-600"
        >
          We deliver world-class digital solutions that empower businesses and
          inspire innovation.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-6 pb-20">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col items-center text-center border border-blue-100"
          >
            <service.icon className="w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white text-center py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to elevate your brand?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg mb-8 text-blue-100"
        >
          Let’s build something extraordinary together. Talk to us today about
          your vision.
        </motion.p>
        <a
          href="/contact"
          className="inline-block bg-gold text-blue-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-yellow-400 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
