"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { href: "/", label: "Home" },
    { href: "services", label: "Services" },
    { href: "resume", label: "Resume" },
    { href: "work", label: "Work" },
    { href: "contact", label: "Contact" },
  ];

  return (
    <header className="flex justify-between items-center py-6 px-6 md:px-12 bg-[#0d0d0d] text-white relative font-[Poppins]">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">
        <Link href="/" className="hover:text-green-500 transition">
          Luke<span className="text-green-500">.</span>
        </Link>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-sm font-[600] items-center">
        {links.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            whileHover={{ scale: 1.1 }}
            onClick={() => setActive(link.href.replace("#", ""))}
            className={`relative pb-1 transition-colors duration-300 ${
              link.label === "Home"
                ? "text-green-500" // Home hamesha green rahega
                : active === link.href.replace("#", "")
                ? "text-green-500"
                : "hover:text-green-500"
            }`}
          >
            {link.label}
            <span
              className={`absolute left-0 -bottom-1 h-[3px] rounded-full bg-green-500 transition-all duration-500 ${
                link.label === "Home" || active === link.href.replace("#", "")
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </motion.a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl z-50 relative"
        onClick={() => setIsOpen(true)}
      >
        <FiMenu />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 right-0 h-full w-64 bg-[#0d0d0d] text-white z-50 shadow-lg"
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <span className="text-xl font-bold">
            Luke<span className="text-green-500">.</span>
          </span>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>

        <nav className="flex flex-col items-center gap-6 p-6 text-lg font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActive(link.href.replace("#", ""));
                setIsOpen(false);
              }}
              className={`relative pb-1 transition-colors duration-300 ${
                link.label === "Home"
                  ? "text-green-500" // Home hamesha green rahega
                  : active === link.href.replace("#", "")
                  ? "text-green-500"
                  : "hover:text-green-500"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-[3px] rounded-full bg-green-500 transition-all duration-500 ${
                  link.label === "Home" || active === link.href.replace("#", "")
                    ? "w-full"
                    : "w-0"
                }`}
              ></span>
            </a>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
