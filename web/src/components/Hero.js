'use client';

import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Hero({ firstName, lastName, headline, tagline, ctaButton }) {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 py-32 overflow-hidden"
    >

      <div className="relative z-10 max-w-6xl mx-auto w-full px-4">
        <div className="mb-8">
          {/* Modern Name Styling */}
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-extrabold mb-8 leading-[0.9] uppercase tracking-tight">
            {/* Outlined First Name */}
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="block text-transparent stroke-text text-outline uppercase drop-shadow-2xl"
            >
              {firstName}
            </motion.span>

            {/* Full-color Surname with creative gradient */}
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
className="block bg-neutral-700 bg-clip-text text-transparent drop-shadow-2xl uppercase scale-105"            >
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <a
              href={ctaButton.url || '#contact'}
              className="px-7 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {ctaButton.text || 'Get in Touch'}
              <FiArrowRight className="w-5 h-5" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-7 py-3 border-2 border-gray-400 text-gray-700 font-medium rounded-2xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
            >
              Download CV
              <FiDownload className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      {/* Custom CSS for Outlined First Name */}
      <style>{`
        .text-outline {
          -webkit-text-stroke: 2px #374151
;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
