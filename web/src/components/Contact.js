'use client';

import { FiMail, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';

export default function Contact() {
  const socialLinks = [
    {
      icon: <FiMail className="w-5 h-5" />,
      url: 'mailto:hello@example.com',
      label: 'Email',
      text: 'hello@example.com'
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      url: 'https://linkedin.com',
      label: 'LinkedIn',
      text: 'linkedin.com/in/yourprofile'
    },
    {
      icon: <FiTwitter className="w-5 h-5" />,
      url: 'https://twitter.com',
      label: 'Twitter',
      text: '@yourhandle'
    },
    {
      icon: <FiGithub className="w-5 h-5" />,
      url: 'https://github.com',
      label: 'GitHub',
      text: 'github.com/yourusername'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Let&apos;s work together
            </h3>
            <p className="text-gray-600 mb-8">
              I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    {item.icon}
                  </span>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-medium text-gray-900">{item.text}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-500 text-sm">
                Or send me a message using the form below
              </p>
              <form className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
