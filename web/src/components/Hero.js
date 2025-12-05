"use client";

import { FiArrowRight, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({
  firstName,
  lastName,
  headline,
  tagline,
  ctaButton,
}) {
  return (
    <section
      id="home"
      className="relative w-full flex flex-col justify-center items-center text-center px-4 pt-28 sm:pb-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto w-full px-2">
        {/* NAME */}
        <h1
          className="
            text-5xl
            sm:text-6xl
            md:text-8xl
            lg:text-[10rem]
            font-extrabold 
            mb-6 
            leading-[0.9] 
            uppercase tracking-tight
          "
        >
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="block text-transparent stroke-text text-outline drop-shadow-2xl"
          >
            {firstName}
          </motion.span>

          <motion.span
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block bg-neutral-700 bg-clip-text text-transparent drop-shadow-2xl uppercase"
          >
            {lastName}
          </motion.span>
        </h1>

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="
            text-base
            sm:text-lg
            md:text-xl
            text-gray-700 
            mb-4 
            max-w-xl 
            mx-auto
          "
        >
          {headline}
        </motion.h2>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="
            text-sm
            sm:text-md
            text-gray-600 
            mb-8 
            max-w-xl 
            mx-auto
          "
        >
          {tagline}
        </motion.p>
      </div>

      {/* CTA BUTTONS */}
      <div className="relative z-20 flex flex-col sm:flex-row gap-4">
        {/* Contact Button */}
        <a
          href={ctaButton?.url || "#contact"}
          className="
            px-6 py-2
            sm:px-7 sm:py-3
            bg-gradient-to-r from-brown-600 to-brown-800 text-white 
            font-semibold rounded-lg
            shadow-md hover:shadow-lg
            hover:opacity-90
            transition-all duration-300
            flex items-center gap-2 text-sm sm:text-base
          "
        >
          <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          Contact Me
        </a>

        {/* Download Button */}
        <a
          href="/resume.pdf"
          download
          className="
            px-6 py-2 
            sm:px-7 sm:py-3
            border border-brown-600 
            text-brown-700 font-semibold rounded-lg
            hover:bg-brown-50 hover:text-brown-900
            shadow-sm hover:shadow-md
            transition-all duration-300
            flex items-center gap-2 text-sm sm:text-base
          "
        >
          <FiDownload className="w-4 h-4 sm:w-5 sm:h-5" />
          Download CV
        </a>
      </div>

      {/* SIDE ARROW */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute right-6 top-1/2 translate-y-[250%] sm:translate-y-[220%] md:-translate-y-1/2 z-40 cursor-pointer"
      >
        <Image
          src="/icons8-curly-arrow-100.png"
          width={40}
          height={40}
          alt="Scroll down indicator"
          className="scroll-down w-10 h-10 sm:w-14 sm:h-14 opacity-90 hover:opacity-100 transition-opacity"
        />
      </a>

      {/* OUTLINE STYLE */}
      <style>{`
        .text-outline {
          -webkit-text-stroke: 2px #374151;
          color: transparent;
        }
      `}</style>
    </section>
  );
}