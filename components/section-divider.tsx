"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

type SectionDividerProps = {
  reverse?: boolean;
};

export function SectionDivider({ reverse = false }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const planeX = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    reverse ? [88, 28, -18] : [-18, 42, 88],
  );
  const planeY = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    reverse ? [18, 56, 56] : [56, 56, 18],
  );
  const planeScale = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    reverse ? [0.86, 1.02, 1.02] : [1.02, 1.02, 0.84],
  );
  const planeRotate = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    reverse ? [6, 0, -4] : [0, 0, 8],
  );

  const glowX = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    reverse ? [80, 30, 8] : [8, 42, 80],
  );
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    reverse ? [0.16, 0.22, 0.28, 0.18] : [0.18, 0.28, 0.22, 0.16],
  );

  const planeTransform = useMotionTemplate`translate3d(${planeX}vw, ${planeY}%, 0) scale(${planeScale}) rotate(${planeRotate}deg)`;
  const glowTransform = useMotionTemplate`translate3d(${glowX}vw, -50%, 0)`;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative left-1/2 h-40 w-screen -translate-x-1/2 overflow-hidden md:h-48"
    >
      <div className="absolute inset-x-0 top-[22%] h-20 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_60%)] blur-3xl" />
      {/* Skyline/Buildings Simulation */}
      <div className="absolute bottom-0 left-0 w-[200vw] flex items-end opacity-60">
        {Array.from({ length: 80 }).map((_, i) => {
          const height = (15 + Math.abs(Math.sin(i * 12.34)) * 35 + Math.abs(Math.cos(i * 4.32)) * 25).toFixed(1);
          const width = (20 + Math.abs(Math.sin(i * 5.55)) * 30).toFixed(1);
          return (
            <div
              key={i}
              className="relative bg-black/5 border-t border-l border-r border-black/10 overflow-hidden"
              style={{ height: `${height}px`, minWidth: `${width}px` }}
            >
              {/* Windows */}
              <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 3px, #000 3px, #000 7px)",
                  WebkitMaskImage: "repeating-linear-gradient(to right, transparent, transparent 3px, #000 3px, #000 7px)",
                  maskImage:       "repeating-linear-gradient(to right, transparent, transparent 3px, #000 3px, #000 7px)",
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-black/20 to-transparent" />

      <motion.div
        className="absolute left-0 top-1/2 h-16 w-44 rounded-full bg-black/5 blur-3xl md:h-20 md:w-56"
        style={
          reduceMotion
            ? { transform: `translate3d(${reverse ? 26 : 42}vw, -50%, 0)`, opacity: 0.22 }
            : { transform: glowTransform, opacity: glowOpacity }
        }
      />

      <motion.div
        className="absolute left-0 top-0"
        style={
          reduceMotion
            ? {
                transform: `translate3d(${reverse ? 28 : 42}vw, ${56}%, 0)`,
              }
            : { transform: planeTransform }
        }
      >
        <div className={`relative ${reverse ? "scale-x-[-1]" : ""}`}>
          <div className="absolute left-[-10rem] top-1/2 h-[2px] w-44 -translate-y-1/2 bg-gradient-to-r from-black/0 via-black/10 to-black/0 blur-[1px] md:w-56" />
          <div className="absolute left-[-5rem] top-1/2 h-5 w-24 -translate-y-1/2 rounded-full bg-black/10 blur-xl" />
          <Image
            src="/flight.png"
            alt=""
            width={240}
            height={80}
            priority={false}
            className="relative h-auto w-36 object-contain opacity-95 drop-shadow-[0_0_22px_rgba(0,0,0,0.1)] md:w-48"
          />
        </div>
      </motion.div>
    </div>
  );
}

