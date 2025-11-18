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
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4">
        {/* Hero Name & Headline */}
        <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-extrabold mb-8 leading-[0.9] uppercase tracking-tight">
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="block text-transparent stroke-text text-outline uppercase drop-shadow-2xl"
          >
            {firstName}
          </motion.span>
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block bg-neutral-700 bg-clip-text text-transparent drop-shadow-2xl uppercase scale-105"
          >
            {lastName}
          </motion.span>
        </h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto"
        >
          {headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          {tagline}
        </motion.p>
      </div>

      {/* Full-width bottom CTA buttons */}
      <div className="absolute bottom-0 left-0 w-full flex">
        {/* Filled button */}
        <a
          href={ctaButton.url || "#contact"}
          className="w-1/2 bg-neutral-700 hover:bg-neutral-900 transition-colors 
               text-white font-bold py-6 flex items-center justify-center gap-3 
               border-r-0"
        >
          <FiArrowRight className="w-6 h-6" />
          Contact Me
        </a>

        {/* Outlined button */}
        <a
          href="/resume.pdf"
          download
          className="w-1/2 border border-neutral-700 border-r-0 
               hover:bg-neutral-700/30 transition-colors 
               text-neutral-700 font-bold py-6 
               flex items-center justify-center gap-3"
        >
          <FiDownload className="w-6 h-6" />
          Download CV
        </a>
      </div>
      {/* Right-side Curly GIF Scroll Indicator */}
      <a
        href="#services"
        aria-label="Scroll down"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-40 cursor-pointer"
      >
        <Image
          src="/icons8-curly-arrow-100.png"
          width={50}
          height={50}
          alt="Scroll down indicator"
          className="scroll-down w-14 h-14 opacity-90 hover:opacity-100 transition-opacity"
        />
      </a>

      {/* Outlined Name CSS */}
      <style>{`
        .text-outline {
          -webkit-text-stroke: 2px #374151;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
