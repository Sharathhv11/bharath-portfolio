"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Moon, Sun, Menu, X } from "lucide-react";
import { engineer } from "@/lib/content";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex justify-center pt-5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex w-[calc(100%-2rem)] max-w-6xl items-center justify-between rounded-full border border-white/20 bg-white/70 px-5 py-3 shadow-lg shadow-black/[0.03] backdrop-blur-md md:w-[calc(100%-3rem)]">
        {/* Left: Logo and Name */}
        <a href="#top" className="flex items-center gap-2 text-black transition hover:opacity-80 z-20">
          <img src="/name-icon.png" alt={engineer.name} className="h-6 w-auto invert" />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav aria-label="Primary navigation" className="hidden md:block absolute left-1/2 -translate-x-1/2 overflow-hidden rounded-full">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-600 px-4 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-black" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Theme Toggle & Download */}
        <div className="flex items-center gap-4 z-20">
          <button
            type="button"
            className="hidden md:flex h-10 w-[72px] items-center justify-between rounded-full bg-slate-200/60 p-1 text-slate-500 transition hover:bg-slate-200/80"
            aria-label="Toggle theme"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm text-amber-500">
              <Sun size={16} />
            </div>
            <div className="flex h-8 w-8 items-center justify-center">
              <Moon size={16} />
            </div>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center md:hidden h-10 w-10 rounded-full bg-slate-100 text-black p-2"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-white/20 bg-white/95 p-6 shadow-xl backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col space-y-6">
              <ul className="flex flex-col space-y-4 text-base font-semibold text-slate-800">
                {links.map((link) => (
                  <li key={link.href} className="border-b border-slate-100 pb-4">
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block w-full transition hover:text-blue-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col gap-4 pt-2">
                <button
                  type="button"
                  className="flex h-12 items-center justify-center gap-3 rounded-xl bg-slate-200/60 p-1 text-slate-500 transition hover:bg-slate-200/80"
                  aria-label="Toggle theme"
                >
                  <Sun size={20} className="text-amber-500" />
                  <span className="font-semibold text-slate-700">Theme</span>
                  <Moon size={20} className="text-slate-400" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
