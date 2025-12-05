import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function Education({ education = [] }) {
  if (!education || education.length === 0) return null;

  const sortedEducation = [...education].sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );

  return (
    <section
      className="pt-14 md:pt-12 flex flex-col items-center pb-0"
      id="education"
    >
      <SectionHeader title="Education & Diplomas" />

      <div className="relative w-full max-w-5xl px-4">
        {/* Vertical line - Only shown on md+ */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-brown-300"></div>

        <div className="flex flex-col space-y-8 md:space-y-12">
          {sortedEducation.map((item, index) => (
            <motion.div
              key={item._id || index}
              className="
                flex w-full items-start
                md:items-center md:justify-between
                gap-4 md:gap-0
              "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* MOBILE: Single column */}
              <div className="flex md:hidden gap-2 w-full">
                {/* Dot */}
                <div className="relative w-6 h-6 flex-shrink-0">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-brown-200 bg-brown-600"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="text-base md:text-lg font-semibold text-brown-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-brown-700 text-sm">{item.school}</p>

                  <span className="bg-cream-50 border border-brown-600 text-brown-800 text-[10px] font-semibold px-2 py-0.5 rounded-full mt-2 w-fit">
                    {item.location}
                  </span>

                  <span className="text-brown-500 text-xs mt-1">{item.period}</span>
                </div>
              </div>

              {/* DESKTOP: Two-column timeline */}
              <div className="hidden md:flex justify-between items-center w-full">
                {/* Left content */}
                <div className="flex flex-col items-end w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-brown-900">
                    {item.title}
                  </h3>
                  <p className="text-brown-700">{item.school}</p>
                </div>

                {/* Dot */}
                <div className="relative w-6 h-6 flex-shrink-0">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-brown-200 bg-brown-600"></div>
                </div>

                {/* Right content */}
                <div className="flex flex-col items-start w-1/2 pl-8">
                  <span className="bg-cream-50 border border-brown-600 text-brown-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {item.location}
                  </span>
                  <span className="text-brown-500 mt-1">{item.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}