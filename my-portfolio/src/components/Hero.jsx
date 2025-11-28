import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

// --- MEMOIZED BACKGROUND (For Performance Optimization) ---
const BinaryBackground = React.memo(({ rows, cols }) => {
  const binaryGrid = useMemo(() => {
    const grid = [];
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        row.push(Math.random() > 0.5 ? "0" : "1");
      }
      grid.push(row);
    }
    return grid;
  }, [rows, cols]);

  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      <div
        className="
          w-full h-full
          grid
          font-mono
          text-[10px] sm:text-xs md:text-sm
          text-emerald-500/40 
          [filter:drop-shadow(0_0_3px_rgba(45,212,191,0.30))]
        "
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        }}
      >
        {binaryGrid.map((row, rIdx) =>
          row.map((digit, cIdx) => (
            <span
              key={`${rIdx}-${cIdx}`}
              className="flex items-center justify-center opacity-50"
            >
              {digit}
            </span>
          ))
        )}
      </div>
    </div>
  );
});

// --- MAIN COMPONENT ---
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // State for cursor
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });

  // Grid Config
  const ROWS = 22;
  const COLS = 34;

  const handleMouseMove = (e) => {
    if (!e.currentTarget) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCursorPos({ x, y });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-slate-950"
      onMouseMove={handleMouseMove}
    >
      {/* Base Dark Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.15),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.15),transparent_60%)]" />

      {/* The Static Binary Grid */}
      <BinaryBackground rows={ROWS} cols={COLS} />

      {/* Flashlight Reveal Effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${cursorPos.x}% ${cursorPos.y}%, rgba(16, 185, 129, 0.15), transparent 40%)`,
          mixBlendMode: "screen",
        }}
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,#020617_80%)] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Block */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2
              className="
                text-2xl md:text-4xl lg:text-5xl 
                font-extrabold tracking-tight 
                leading-[1.1] md:leading-tight
                text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 animate-gradient-x 
                pb-2 max-w-4xl mx-auto drop-shadow-lg
              "
            >
              Fascinated by Technology. <br className="hidden md:block" />
              Driven by Logic.
            </h2>

            <h1 className="text-xl md:text-2xl font-medium tracking-wide text-slate-400">
              Hi, I’m{" "}
              <span className="text-white font-black ml-2 text-2xl md:text-3xl inline-block transform hover:scale-105 transition-transform duration-300">
                Amitesh Ranjan
              </span>
            </h1>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Aspiring software engineer from India having a knack for problem
            solving and a passion for programming .
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-5 justify-center pt-4"
          >
            <a
              href="https://drive.google.com/file/d/19tjtCqS9a6B9IpartvAnOiSxIavuqFNv/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="
                group inline-flex items-center justify-center
                px-8 py-3.5 text-base font-semibold text-white
                rounded-full bg-slate-900
                border border-slate-700
                hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              Resume
            </a>

            <a
              href="mailto:amiteshranjan5524@gmail.com"
              className="
                group inline-flex items-center justify-center
                px-8 py-3.5 text-base font-semibold text-slate-900
                rounded-full bg-white
                border border-transparent
                hover:bg-emerald-50 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Say Hi
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator (New) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-50">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </motion.div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </section>
  );
}
