"use client";

import Link from "next/link";
import { FiLinkedin, FiTwitter, FiMail, FiGithub } from "react-icons/fi";

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
    <footer className="border-t border-gray-200/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12 text-center">
        {/* Name & Social */}
        <div className="mb-6">
          <Link
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent"
          >
            Mijgona Nuralieva
          </Link>
          <div className="flex justify-center space-x-4 mt-4 text-pink-600">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-6 flex justify-center space-x-6 text-gray-600">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-pink-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mb-6">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center px-6 py-2 text-white font-medium rounded-md bg-gradient-to-r from-pink-600 to-pink-800 hover:opacity-90 transition-all duration-300"
          >
            Send me an email
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {currentYear} Mijgona Nuralieva. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
