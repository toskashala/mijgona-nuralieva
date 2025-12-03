import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function Education({ education = [] }) {
  if (!education || education.length === 0) return null;

  const sortedEducation = [...education].sort(
    (a, b) => (a.order || 0) - (b.order || 0),
  );

  return (
    <section className="py-6 flex flex-col items-center" id="education">
      <SectionHeader title="Education & Diplomas" />

      <div className="relative w-full max-w-5xl px-4">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-brown-300"></div>

        <div className="flex flex-col space-y-12">
          {sortedEducation.map((item, index) => (
            <motion.div
              key={item._id || index}
              className="flex justify-between items-center w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Left content */}
              <div className="flex flex-col items-end w-1/2 pr-8 justify-center text-right">
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
              <div className="flex flex-col items-start w-1/2 pl-8 justify-center">
                <span className="bg-cream-50 border border-brown-600 text-brown-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                  {item.location}
                </span>
                <span className="text-brown-500 mt-1">{item.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
