"use client";

import { useState, useEffect } from "react";
import styles from "./youtube-loader.module.css";

export function YoutubeLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.container} ${done ? styles.hidden : ""}`}>
      {/* Subtle animated gradient overlay */}
      <div className={styles.gradientOverlay} />

      {/* Grid pattern for visual interest */}
      <div className={styles.gridPattern} />

      {/* Center animated text */}
      <div className="absolute inset-0 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-6xl">
          {/* Single column on mobile, 2 columns on larger screens */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Text content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
                <span
                  className={`inline-block opacity-0 ${styles.fadeIn} ${styles.delay0}`}
                >
                  Introducing Qblox
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-normal">
                <span
                  className={`inline-block opacity-0 ${styles.fadeIn} ${styles.delay600}`}
                >
                  the groundbreaking building blocks{" "}
                </span>
                <span
                  className={`inline-block opacity-0 ${styles.fadeIn} ${styles.delay1200}`}
                >
                  which redefines 3D thinking and creativity
                </span>
                <span
                  className={`inline-block opacity-0 ${styles.fadeIn} ${styles.delay1500}`}
                >
                  .
                </span>
              </h2>
            </div>

            {/* Spinning cube */}
            <div
              className={`flex items-center justify-center mt-8 lg:mt-0 opacity-0 ${styles.fadeIn} ${styles.delay900}`}
            >
              <div className={styles.spin}>
                <img
                  src="/qube.png"
                  alt="Qblox Cube"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
