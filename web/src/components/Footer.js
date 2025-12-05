"use client";

import Link from "next/link";
import { FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com", icon: <FiLinkedin /> },
    { name: "Email", url: "mailto:hello@example.com", icon: <FiMail /> },
  ];

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="backdrop-blur-sm px-4 sm:px-6 py-10 md:py-12 bg-white/80">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Name & Social */}
        <div className="space-y-3">
          <Link href="#" className="text-xl sm:text-2xl font-bold">
            Mijgona Nuralieva
          </Link>
          <div className="flex justify-center gap-4 sm:gap-6 text-brown-600">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-brown-50 transition-colors"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 text-gray-600 text-sm sm:text-base">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-brown-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div>
          <a
            href="mailto:hello@example.com"
            className="inline-block w-full sm:w-auto px-6 py-2 text-white font-medium rounded-md bg-gradient-to-r from-brown-600 to-brown-800 hover:opacity-90 transition-all duration-300"
          >
            Send me an email
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-500 mt-4">
          &copy; {currentYear} Mijgona Nuralieva. All rights reserved.
        </p>
      </div>
    </footer>
  );
}