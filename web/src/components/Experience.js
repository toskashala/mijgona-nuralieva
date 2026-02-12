import React, { useMemo } from "react";
import { PortableText } from "@portabletext/react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

export default function Experience({ experiences = [] }) {
  if (!experiences || experiences.length === 0) return null;

  const isCurrent = (period) => period?.trim?.().endsWith("Present") ?? false;

  const sortedExperiences = useMemo(
    () => [
      ...experiences.filter((exp) => isCurrent(exp.period)),
      ...experiences.filter((exp) => !isCurrent(exp.period)),
    ],
    [experiences]
  );

  const portableTextComponents = useMemo(
    () => ({
      list: {
        bullet: ({ children }) => <ul className="list-disc pl-5 my-2 space-y-1">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal pl-5 my-2 space-y-1">{children}</ol>,
      },
      listItem: {
        bullet: ({ children }) => <li className="pl-2">{children}</li>,
        number: ({ children }) => <li className="pl-2">{children}</li>,
      },
      block: {
        normal: ({ children }) => <p className="mb-2 text-sm sm:text-base">{children}</p>,
        h2: ({ children }) => <h4 className="text-base font-semibold mt-3 mb-1">{children}</h4>,
        h3: ({ children }) => <h5 className="text-sm font-semibold mt-2 mb-1">{children}</h5>,
      },
      unknownBlockStyle: ({ children }) => <p className="mb-2 text-sm sm:text-base">{children}</p>,
    }),
    []
  );

  return (
    <section id="experience" className="pt-12 md:pt-14 pb-0 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Experience" />

        <div className="columns-1 md:columns-2 gap-10 space-y-10">
          {sortedExperiences.map((exp, i) => {
            const current = isCurrent(exp.period);

            return (
              <motion.div
                key={i}
                className="relative pl-10 md:pl-14 break-inside-avoid mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-neutral-200 md:left-6" />

                {/* Pin */}
                <div
                  className={`absolute left-4 top-4 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                    current ? "bg-brown-600 border-brown-400 animate-pulse" : "bg-brown-500 border-neutral-200"
                  } md:left-6`}
                />

                {/* Card */}
                <div
                  className={`p-4 md:p-6 rounded-xl shadow-md border flex flex-col justify-start relative max-w-3xl ${
                    current
                      ? "border-brown-600 shadow-brown-300"
                      : "bg-white border-neutral-200 hover:border-neutral-400"
                  }`}
                >
                  {current && (
                    <span className="absolute -top-2 right-2 bg-white border border-green-600 text-green-800 text-[10px] font-semibold py-0.5 px-2 rounded shadow-sm">
                      Current
                    </span>
                  )}
                  <div className="flex flex-col overflow-hidden">
                    <h3 className="text-lg md:text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-sm md:text-base mb-1">
                      <span className="font-medium">{exp.company}</span> • {exp.period}
                    </p>
                    <div className="text-gray-600 mt-2 text-xs sm:text-sm leading-snug">
                      {typeof exp.description === "string" ? (
                        <p className="mb-2 whitespace-pre-line">
                          {exp.description}
                        </p>
                      ) : Array.isArray(exp.description) && exp.description.length > 0 ? (
                        <PortableText
                          value={exp.description}
                          components={portableTextComponents}
                        />
                      ) : null}
                    </div>
                  </div>

                  {exp.skills && exp.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-brown-100 text-brown-800 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full"
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