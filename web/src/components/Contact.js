"use client";

import { FiMail, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const socialLinks = [
    {
      icon: <FiMail className="w-5 h-5" />,
      url: "mailto:hello@example.com",
      label: "Email",
      text: "hello@example.com",
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      url: "https://linkedin.com",
      label: "LinkedIn",
      text: "linkedin.com/in/yourprofile",
    },
  ];

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto bg-cream-50 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-2 border-dashed border-pink-100 p-8 md:p-12 relative"
    >
      {/* Optional: soft doodles */}
      <div className="absolute top-4 left-4 text-pink-200 text-3xl select-none pointer-events-none">
        💌 ✨
      </div>
      <div className="absolute bottom-4 right-4 text-pink-200 text-3xl select-none pointer-events-none">
        🌸 ✨
      </div>

      <div className="space-y-6 text-center">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-handwriting text-pink-600">
          Get in Touch
        </h2>
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
          Let’s work together
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-4 md:gap-6">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 rounded-xl hover:bg-pink-50 transition-colors group"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-pink-50 text-pink-400 group-hover:bg-pink-100 group-hover:text-pink-500 transition-colors">
                {item.icon}
              </span>
              <div className="ml-2">
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="font-medium text-gray-900 text-sm">{item.text}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <form className="space-y-4 max-w-md mx-auto">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-pink-100 rounded-xl text-sm focus:ring-2 focus:ring-pink-200"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-pink-100 rounded-xl text-sm focus:ring-2 focus:ring-pink-200"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-pink-100 rounded-xl text-sm focus:ring-2 focus:ring-pink-200"
              placeholder="How can I help you?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-pink-600 text-white text-sm rounded-xl hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}