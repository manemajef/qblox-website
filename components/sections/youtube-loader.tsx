"use client";

import { useState, useEffect } from "react";
import { AnimatedIn } from "../ui/animated-in";
import { Play } from "lucide-react";
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
      {/* Animated gradient overlay - more prominent */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20"
        style={{
          animation: "pulseGradient 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      />

      {/* Cinematic scan line effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)",
          animation: "scanLine 2.5s ease-in-out infinite",
        }}
      />

      {/* Video loading indicator with cube - appears first in center */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <AnimatedIn delay={0}>
          <div className="flex flex-col gap-6 items-center opacity-70">
            {/* Spinning cube */}
            <div
              className="relative"
              style={{ animation: "spinSlow 8s linear infinite" }}
            >
              {/* Glowing pulse effect */}
              <div
                className="absolute inset-0 blur-2xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)",
                  animation: "glowPulse 2s ease-in-out infinite",
                }}
              />
              <img
                src="/qube.png"
                alt="Qblox Cube"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain relative z-10"
              />
            </div>

            {/* Main video badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/50 backdrop-blur-sm border border-blue-400/20 shadow-md shadow-blue-500/10">
              <div className="relative flex items-center justify-center">
                {/* Single pulse ring */}
                <div
                  className="absolute inset-0 bg-white/20 rounded-full"
                  style={{
                    animation:
                      "playPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  }}
                />
                <Play className="w-4 h-4 text-white fill-white relative z-10" />
              </div>
              <span className="text-sm font-semibold text-white">
                Video Loading
              </span>
              {/* Animated dots */}
              <div className="flex gap-1">
                <div
                  className="w-1 h-1 rounded-full bg-blue-200"
                  style={{
                    animation: "dotPulse 1.4s ease-in-out infinite",
                    animationDelay: "0s",
                  }}
                />
                <div
                  className="w-1 h-1 rounded-full bg-blue-200"
                  style={{
                    animation: "dotPulse 1.4s ease-in-out infinite",
                    animationDelay: "0.2s",
                  }}
                />
                <div
                  className="w-1 h-1 rounded-full bg-blue-200"
                  style={{
                    animation: "dotPulse 1.4s ease-in-out infinite",
                    animationDelay: "0.4s",
                  }}
                />
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full"
                style={{
                  animation: "progressBar 2.8s ease-in-out forwards",
                }}
              />
            </div>
          </div>
        </AnimatedIn>
      </div>

      {/* Title - appear after loader, positioned at top */}
      <div className="absolute inset-0 flex items-start justify-center p-6 pt-12">
        <div className="w-full max-w-6xl opacity-70">
          <div className="text-center md:text-left space-y-6">
            <div className="space-y-3">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 font-black">
                <AnimatedIn delay={800} splitChars charDelay={50}>
                  Introducing
                </AnimatedIn>
              </div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter text-white">
                <AnimatedIn delay={1350} splitChars charDelay={80}>
                  QBLOX
                </AnimatedIn>
              </h1>
            </div>
            {/* Typewriter tagline - positioned below title */}
            <div className="pt-2">
              <AnimatedIn delay={1200}>
                <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-medium max-w-sm mx-auto md:mx-0">
                  <AnimatedIn delay={1400} splitChars charDelay={40}>
                    the groundbreaking cube which redefines 3D thinking
                  </AnimatedIn>
                </p>
              </AnimatedIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
