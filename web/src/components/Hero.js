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
      className="relative w-full flex flex-col justify-center items-center text-center px-4 pt-32 pb-0 overflow-hidden"
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

      {/* Normal CTA buttons centered */}
      <div className="relative z-20 flex gap-4">
        {/* Contact Button */}
        <a
          href={ctaButton?.url || "#contact"}
          className="
  px-8 py-3
  bg-gradient-to-r from-pink-600 to-pink-800 text-white font-semibold rounded-lg
  shadow-md hover:shadow-lg
  hover:opacity-90
  transition-all duration-300
  flex items-center gap-2
"
        >
          <FiArrowRight className="w-5 h-5" />
          Contact Me
        </a>

        {/* Download Button */}
        <a
          href="/resume.pdf"
          download
          className="
      px-8 py-3 
      border border-pink-600 
      text-pink-700 font-semibold rounded-lg
      hover:bg-pink-50 hover:text-pink-900
      shadow-sm hover:shadow-md
      transition-all duration-300
      flex items-center gap-2
    "
        >
          <FiDownload className="w-5 h-5" />
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

      <style>{`
        .text-outline {
          -webkit-text-stroke: 2px #374151;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
