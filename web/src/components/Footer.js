"use client";

import Link from "next/link";
import { FiLinkedin, FiTwitter, FiMail, FiGithub } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: <FiLinkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: <FiTwitter className="w-5 h-5" />,
    },
    {
      name: "Email",
      url: "mailto:hello@example.com",
      icon: <FiMail className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com",
      icon: <FiGithub className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="border-t border-gray-200/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Link
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Mijgona Nuralieva
            </Link>
            <p className="mt-4 text-gray-600">
              B2B Marketing Specialist & Product Manager helping businesses grow
              through strategic marketing and exceptional user experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Expertise
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-600">B2B Marketing</li>
              <li className="text-gray-600">Product Management</li>
              <li className="text-gray-600">Digital Strategy</li>
              <li className="text-gray-600">Social Media Marketing</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-4">
              Interested in working together or have a question?
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Send me an email
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Mijgona Nuralieva. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
