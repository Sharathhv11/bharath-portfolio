"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { ArrowRight, FileText, MapPin, Download, Linkedin, Layers, PenTool, Wrench, Settings, FileCog } from "lucide-react";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { engineer } from "@/lib/content";

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70);

    return () => clearInterval(typingInterval);
  }, [text, started]);

  return (
    <span className="inline-block">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="ml-[2px] inline-block h-[1em] w-[2px] translate-y-[2px] bg-slate-400"
      />
    </span>
  );
}

function HeroParticleVisual({ reduceMotion }: { reduceMotion: boolean | null }) {
  const particles = useMemo(() => {
    const items = [];
    const numParticles = 400; // lots of particles to mimic the dense burst
    for (let i = 0; i < numParticles; i++) {
      // Concentrate slightly more towards the center but allow a wide spread
      const radius = 100 + Math.pow(Math.random(), 1.5) * 800; 
      const angle = Math.random() * 2 * Math.PI;
      const length = 4 + Math.random() * 12; // varying dash lengths
      const thickness = 1.5 + Math.random() * 2.5; 
      const opacity = 0.2 + Math.random() * 0.7; // subtle opacity differences
      
      const x = Math.cos(angle) * radius;
      
      // Color based on x position to mimic left-warm, right-cool gradient
      let color = "#cbd5e1"; // slate-300 default center
      if (x < -80) {
        // Red/Orange/Yellow on the left
        const warm = ["#ef4444", "#f97316", "#f59e0b", "#fbbf24", "#fda4af"];
        color = warm[Math.floor(Math.random() * warm.length)];
      } else if (x > 80) {
        // Blue/Teal on the right
        const cool = ["#3b82f6", "#2563eb", "#0ea5e9", "#38bdf8", "#818cf8"];
        color = cool[Math.floor(Math.random() * cool.length)];
      } else {
        // Mixed near the center
        const mixed = ["#fcd34d", "#7dd3fc", "#c4b5fd", "#fca5a5"];
        color = mixed[Math.floor(Math.random() * mixed.length)];
      }

      items.push({ radius, angle, length, thickness, color, opacity });
    }
    return items;
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden flex items-center justify-center mix-blend-multiply opacity-70">
      <motion.div
        initial={reduceMotion ? undefined : { rotate: 0 }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="absolute h-[150vw] w-[150vw] sm:h-[120vw] sm:w-[120vw] max-w-[2000px] max-h-[2000px]"
      >
        <svg viewBox="-1000 -1000 2000 2000" className="h-full w-full">
          {particles.map((p, i) => {
            // Place along the tangent to the circle
            const rotation = (p.angle * 180) / Math.PI + 90;
            return (
              <g key={i} transform={`translate(${Math.cos(p.angle) * p.radius}, ${Math.sin(p.angle) * p.radius}) rotate(${rotation})`}>
                <line
                  x1={-p.length / 2}
                  y1={0}
                  x2={p.length / 2}
                  y2={0}
                  stroke={p.color}
                  strokeWidth={p.thickness}
                  strokeLinecap="round"
                  opacity={p.opacity}
                />
              </g>
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
}

function HoverButton({
  href,
  children,
  className,
  variant = "primary",
  download,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "linkedin";
  download?: boolean | string;
}) {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all duration-300";
  const primaryClasses = "bg-black text-white hover:opacity-80";
  const secondaryClasses = "border border-black bg-transparent text-black hover:bg-black hover:text-white";
  const linkedinClasses = "border border-black bg-transparent text-black hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white";

  let variantClasses = primaryClasses;
  if (variant === "secondary") variantClasses = secondaryClasses;
  if (variant === "linkedin") variantClasses = linkedinClasses;

  return (
    <a
      href={href}
      download={download}
      className={`${baseClasses} ${variantClasses} ${className || ""}`}
    >
      <span className="flex items-center gap-2">
        {children}
      </span>
    </a>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="hero-background relative flex min-h-[85vh] md:min-h-screen overflow-hidden px-6 pb-12 pt-[100px] md:px-10 md:pb-16 md:pt-[100px] lg:pt-[100px] group items-start lg:items-center"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[5%] top-[20%] h-96 w-96 rounded-full bg-emerald-400/20 blur-[120px] animate-pulse" />
        <div className="absolute right-[10%] top-[30%] h-80 w-80 rounded-full bg-blue-400/15 blur-[100px] animate-pulse [animation-delay:2s]" />
        <div className="absolute left-[50%] top-[70%] h-72 w-72 rounded-full bg-purple-300/10 blur-[90px] animate-pulse [animation-delay:4s]" />
      </div>
      
      <HeroParticleVisual reduceMotion={reduceMotion} />
      <div className="absolute inset-x-0 bottom-[18%] h-52 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_58%)] blur-3xl" />
      <div className="absolute left-[-15%] top-1/4 h-40 w-[40rem] rotate-[-10deg] bg-gradient-to-r from-transparent via-emerald-100/20 to-transparent blur-2xl animate-streak" />
      <div className="absolute right-[-10%] top-[58%] h-32 w-[36rem] rotate-[-8deg] bg-gradient-to-r from-transparent via-blue-100/15 to-transparent blur-2xl [animation-delay:4s] animate-streak" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 md:gap-10 lg:grid-cols-[6fr_4fr] lg:items-start">
        {/* Left Division: Information & Buttons */}
        <div className="flex flex-col items-start justify-center gap-8 md:gap-10 order-2 lg:order-1">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 32 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-3xl"
          >
            <div className="eyebrow">Takeoff Sequence</div>
            <h1 className="mt-6 font-display text-5xl font-extrabold uppercase tracking-tight leading-[1.1] text-black sm:text-6xl lg:text-7xl drop-shadow-sm pb-2 whitespace-nowrap">
              Bharath HV
            </h1>
            <p className="mt-6 text-xl text-slate-700 sm:text-2xl h-8 min-h-[32px]">
              <TypewriterText text={engineer.shortRole} delay={1100} />
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {engineer.tagline}
            </p>
            <div className="mt-8 relative hidden md:flex items-center h-12 w-80">
              <motion.div
                className="absolute left-0 top-1/2 h-[1px] bg-gradient-to-r from-slate-300 via-slate-400 to-slate-800"
                initial={reduceMotion ? undefined : { width: "0%" }}
                animate={reduceMotion ? undefined : { width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.img
                src="/f15.png"
                alt="F-15 Silhouette"
                className="absolute top-1/2 -translate-y-[45%] -mt-[20px] ml-[20px] h-10 w-auto object-contain"
                initial={reduceMotion ? undefined : { left: "0%", opacity: 0 }}
                animate={reduceMotion ? undefined : { left: "100%", opacity: 0.9 }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ translateX: "-50%" }}
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50/50 px-4 py-2 shadow-sm text-emerald-900 backdrop-blur-sm transition-colors hover:bg-emerald-50">
                <MapPin size={16} className="text-emerald-600" />
                {engineer.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/50 px-4 py-2 shadow-sm text-blue-900 backdrop-blur-sm transition-colors hover:bg-blue-50">
                <FileText size={16} className="text-blue-600" />
                Aircraft Structures • Repair Engineering
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 group-buttons mt-4 md:mt-0"
          >
            <HoverButton href="https://www.linkedin.com/in/bharath-745b78229" variant="linkedin" className="group">
              LinkedIn
              <Linkedin size={18} />
            </HoverButton>
            <HoverButton href="/RESUME_BHARATH_3.pdf" download variant="primary" className="group">
              Download CV
              <Download size={18} />
            </HoverButton>
          </motion.div>
        </div>

        {/* Right Division: Animated Image Orbits */}
        <div className="relative flex items-center lg:items-start justify-center w-full lg:pt-12 order-1 lg:order-2 mb-12 md:mb-0">
          <div className="relative h-64 w-64 md:h-[300px] md:w-[300px] lg:h-[360px] lg:w-[360px] mt-8 lg:mt-0">
            
            {/* Outer Orbit */}
            <motion.div
              className="absolute inset-[-18%] z-20 rounded-full border-[0.5px] border-dashed border-slate-300/80 pointer-events-none"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              {/* Top Item */}
              <motion.div 
                className="absolute top-0 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200/60"
                animate={reduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <Layers size={22} className="text-slate-600" />
              </motion.div>
              
              {/* Bottom Right Item (CAD) */}
              <motion.div 
                className="absolute bottom-[10%] right-[10%] flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200/60 translate-x-1/2 translate-y-1/2"
                animate={reduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <PenTool size={22} className="text-slate-600" />
              </motion.div>

              {/* Bottom Left Item */}
              <motion.div 
                className="absolute bottom-[10%] left-[10%] flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200/60 -translate-x-1/2 translate-y-1/2"
                animate={reduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                 <Wrench size={22} className="text-slate-600" />
              </motion.div>
            </motion.div>

            {/* Inner Orbit */}
            <motion.div
              className="absolute inset-[-8%] z-20 rounded-full border-[0.5px] border-dotted border-slate-400/80 pointer-events-none"
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {/* Top Right Item */}
              <motion.div 
                className="absolute top-[10%] right-[10%] flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200/60 translate-x-1/2 -translate-y-1/2"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <Settings size={18} className="text-slate-600" />
              </motion.div>

              {/* Middle Left Item (MBD) */}
              <motion.div 
                className="absolute top-1/2 left-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200/60"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <FileCog size={18} className="text-slate-600" />
              </motion.div>
            </motion.div>

            {/* Profile Image itself */}
            <div className="absolute inset-0 z-10 flex-shrink-0 bg-[url('/profile.jpeg')] bg-cover bg-center bg-no-repeat rounded-full border-[0.5px] border-slate-300" />

          </div>
        </div>
      </div>
    </section>
  );
}

