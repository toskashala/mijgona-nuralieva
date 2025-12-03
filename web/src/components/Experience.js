"use client";

import { PortableText } from '@portabletext/react';
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

export default function Experience({ experiences = [] }) {
  if (!experiences || experiences.length === 0) return null;

  const isCurrent = (period) => period.trim().endsWith("Present");

  const sortedExperiences = [
    ...experiences.filter((exp) => isCurrent(exp.period)),
    ...experiences.filter((exp) => !isCurrent(exp.period)),
  ];

  const portableTextComponents = {
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5 my-2 space-y-1">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-5 my-2 space-y-1">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,
  },
  block: {
    normal: ({ children }) => <p className="mb-3">{children}</p>,
  },
  // Add more custom styles as needed
};
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
                  className={`p-6 rounded-2xl shadow-lg border transition overflow-hidden relative md:h-[350px] flex flex-col justify-between ${
                    current
                      ? "border-brown-600 shadow-brown-600 shadow-lg"
                      : "bg-white border-neutral-200 hover:border-neutral-700"
                  }`}
                >
                  {current && (
                    <span className="absolute -top-2 right-2 bg-white border border-green-600 text-green-800 text-xs font-semibold py-1 px-3 shadow-md">
                      Current
                    </span>
                  )}
                  <div className="flex flex-col">
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-sm mb-2">
                    <span className="font-medium">{exp.company}</span> •{" "}
                    {exp.period}
                  </p>
                  <div className="leading-relaxed text-gray-600 mt-3 text-sm">
                    <PortableText value={exp.description} components={portableTextComponents} />
                  </div>
                  </div>
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-brown-100 text-brown-800 text-xs font-semibold px-2 py-0.5 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}