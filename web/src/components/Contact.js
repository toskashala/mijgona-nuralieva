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
      className="w-full flex flex-col md:flex-row items-stretch p-0"
    >
      {/* LEFT IMAGE */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Contact"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6 py-10 md:px-10 md:py-12">
        <div className="max-w-md w-full">
          {/* Header */}
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Get In Touch
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Let&apos;s work together
          </h3>

          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>

          {/* Social links */}
          <div className="space-y-3 mb-8">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  {item.icon}
                </span>
                <div className="ml-3">
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="font-medium text-gray-900 text-sm">
                    {item.text}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
