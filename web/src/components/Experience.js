"use client";

import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

export default function Experience({ experiences = [] }) {
  if (!experiences || experiences.length === 0) return null;

  const isCurrent = (period) => period.trim().endsWith("Present");

  const sortedExperiences = [
    ...experiences.filter((exp) => isCurrent(exp.period)),
    ...experiences.filter((exp) => !isCurrent(exp.period)),
  ];

  return (
    <section id="experience" className="pt-0 pb-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Experience" />

        <div className="grid md:grid-cols-2 gap-10">
          {sortedExperiences.map((exp, i) => {
            const current = isCurrent(exp.period);
            const column = i % 2; // 0 = left, 1 = right
            const lineLeft = column === 0 ? "left-6" : "left-6";

            return (
              <motion.div
                key={i}
                className="relative pl-14"
                initial={{ opacity: 0, x: column === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* Vertical line in column */}
                <div
                  className={`absolute ${lineLeft} top-0 bottom-0 border-l-2 border-neutral-200`}
                />

                {/* Pin */}
                <div
                  className={`absolute ${lineLeft} top-4 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md ${
                    current
                      ? "bg-brown-600 animate-pulse shadow-brown-300"
                      : "bg-brown-500"
                  }`}
                />

                {/* Card */}
                <div
                  className={`p-6 rounded-2xl shadow-lg border transition relative ${
                    current
                      ? "border-brown-600 shadow-[0_10px_20px_0_rgba(255,253,245,0.4)] bg-cream-50"
                      : "bg-white border-neutral-200 hover:border-neutral-700"
                  }`}
                >
                  {current && (
                    <span className="absolute -top-2 right-2 bg-white border border-green-600 text-green-800 text-xs font-semibold py-1 px-3 shadow-md">
                      Current
                    </span>
                  )}

                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-sm mb-2">
                    <span className="font-medium">{exp.company}</span> •{" "}
                    {exp.period}
                  </p>
                  <p className="leading-relaxed text-neutral-700 mt-3">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
