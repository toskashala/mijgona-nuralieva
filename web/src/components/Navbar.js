"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 
        ${scrolled ? "backdrop-blur-xl bg-brown-700/30" : ""}
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav className="mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold uppercase tracking-wide text-neutral-700">MN</div>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-neutral-700 uppercase font-medium text-sm tracking-wide hover:text-neutral-800 
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-neutral-700 after:transition-all 
                after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="#contact"
              className="px-5 py-2 border border-neutral-700 text-neutral-700 font-medium rounded-md 
              hover:bg-neutral-700 hover:text-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile: always hamburger (X handled inside menu) */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center relative z-[60]"
            onClick={() => setIsOpen(true)}
          >
            {/* Hamburger */}
            <span className="block h-[2px] w-6 bg-neutral-800 mb-1 transition-all"></span>
            <span className="block h-[2px] w-6 bg-neutral-800 transition-all"></span>
          </button>
        </nav>
      </header>

     {/* FULLSCREEN MENU */}
<div
  className={`
    fixed inset-0 z-[70]
    bg-neutral-900 text-white
    flex flex-col items-center justify-center
    w-screen h-screen 
    overflow-hidden
    px-4
    space-y-6 
    text-lg sm:text-xl font-medium uppercase
    transition-transform duration-500
    ${isOpen ? "translate-y-0" : "-translate-y-full"}
  `}
>
  {/* Close (X) button */}
  <button
    className="
      absolute top-4 right-4 
      w-7 h-7 
      flex flex-col justify-center items-center
    "
    onClick={() => setIsOpen(false)}
  >
    <span className="block h-[2px] w-5 bg-white rotate-45 absolute"></span>
    <span className="block h-[2px] w-5 bg-white -rotate-45 absolute"></span>
  </button>

  {navItems.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      onClick={() => setIsOpen(false)}
      className="hover:text-neutral-300 transition-colors"
    >
      {item.name}
    </Link>
  ))}

  <a
    href="#contact"
    onClick={() => setIsOpen(false)}
    className="
      px-5 py-2 border border-white rounded-md 
      hover:bg-white hover:text-neutral-900 
      transition-all text-base
    "
  >
    Get in Touch
  </a>
</div>
    </>
  );
}