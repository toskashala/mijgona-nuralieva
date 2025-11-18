'use client';

import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Hero({ firstName, lastName, headline, ctaButton }) {
  return (
    <section
      id="home"
      className="relative w-full flex flex-col justify-center items-center text-center px-4 py-32 overflow-hidden"
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          {headline}
        </motion.p>
      </div>

      {/* Smaller Corner Triangles */}
      <a
        href={ctaButton.url || '#contact'}
        className="absolute bottom-0 left-0 w-40 h-40 hover:scale-110 transition-transform z-0"
        style={{
          clipPath: 'polygon(0 100%, 100% 100%, 0 0)',
          background: 'linear-gradient(135deg, #4f46e5, #3b82f6)',
        }}
      >
        <div className="flex items-end justify-start w-full h-full p-4 text-white font-bold text-lg">
          <FiArrowRight className="mr-2" /> Contact
        </div>
      </a>

      <a
        href="/resume.pdf"
        download
        className="absolute bottom-0 right-0 w-40 h-40 hover:scale-110 transition-transform z-0"
        style={{
          clipPath: 'polygon(100% 100%, 100% 0, 0 100%)',
          background: 'linear-gradient(135deg, #ec4899, #f43f5e)',
        }}
      >
        <div className="flex items-end justify-end w-full h-full p-4 text-white font-bold text-lg">
          <FiDownload className="mr-2" /> CV
        </div>
      </a>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <a
          href="#services"
          className="flex flex-col items-center text-gray-200 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2 uppercase tracking-wide text-white/70 hover:text-white transition-colors">
            Scroll Down
          </span>
          <div className="relative w-1 h-12 flex justify-center">
            <span className="absolute w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-30"></span>
            <motion.span
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="block w-3 h-3 bg-white rounded-full shadow-lg"
            />
          </div>
        </a>
      </div>

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