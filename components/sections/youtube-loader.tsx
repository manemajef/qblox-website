"use client";

import { useState, useEffect } from "react";
import { AnimatedIn } from "../ui/animated-in";
import "./youtube-loader.css";

export function YoutubeLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`absolute inset-0 z-110 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-opacity duration-700 ${
        done ? "opacity-0 pointer-events-none" : ""
      }`}
    >
      {/* Subtle animated gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10"
        style={{
          animation: "pulseGradient 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-center">
          {/* Text content */}
          <div className="text-center md:text-left space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
              <AnimatedIn delay={0} splitChars charDelay={40}>
                Introducing Qblox
              </AnimatedIn>
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90  max-w-xl mx-auto leading-relaxed">
              <AnimatedIn delay={800} splitChars charDelay={20}>
                the groundbreaking building blocks which redefines 3D thinking
                and creativity.
              </AnimatedIn>
            </h2>
          </div>

          {/* Spinning cube */}
          <div className="flex justify-center md:justify-end items-center">
            <AnimatedIn delay={1500}>
              <div style={{ animation: "spinSlow 8s linear infinite" }}>
                <img
                  src="/qube.png"
                  alt="Qblox Cube"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-contain"
                />
              </div>
            </AnimatedIn>
          </div>
        </div>
      </div>
    </div>
  );
}
