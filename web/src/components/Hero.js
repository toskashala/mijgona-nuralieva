'use client';

import { FiArrowRight, FiDownload } from 'react-icons/fi';

export default function Hero({ firstName = 'Mijgona', lastName = 'Nuralieva', headline = 'B2B Marketing & Product Management Professional', tagline = 'Helping businesses grow through strategic marketing and exceptional user experiences.', ctaButton = { text: 'Get in Touch', url: '#contact' } }) {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 w-full h-full z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {firstName}
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mt-2">
              {lastName}
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {headline}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {tagline}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href={ctaButton.url || '#contact'}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              {ctaButton.text || 'Get in Touch'}
              <FiArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Download CV
              <FiDownload className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
