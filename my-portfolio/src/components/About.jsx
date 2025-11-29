import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personas } from "../data/personas";

export default function About() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      id="about"
      className="relative py-20 scroll-mt-21 bg-slate-950 overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.05]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            About Me
          </h2>
        </motion.div>

        {/*  THE INTERACTIVE DECK  */}
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[420px]">
          {personas.map((persona) => {
            const isOpen = activeCard === persona.id;

            return (
              <motion.div
                key={persona.id}
                layout
                // INTERACTION LOGIC -
                onMouseEnter={() => setActiveCard(persona.id)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard(isOpen ? null : persona.id)}
                // -------------------------
                className={`
                    relative rounded-3xl border bg-slate-900/50 backdrop-blur-sm overflow-hidden cursor-pointer
                    transition-all duration-500 group flex flex-col flex-1
                    ${
                      isOpen
                        ? `${persona.borderColor} border-opacity-100 shadow-[0_0_22px_currentColor]`
                        : "border-white/20 hover:border-white/40 hover:shadow-[0_0_14px_currentColor]"
                    }
                `}
                style={{
                  color: isOpen ? persona.accent : "inherit",
                }}
              >
                {/* Dynamic Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    persona.bgGradient
                  } transition-opacity duration-500 ${
                    isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-30"
                  }`}
                />

                {/* CONTENT CONTAINER */}
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-center items-center text-center w-full">
                  {/* Title (Only visible when CLOSED) */}
                  {!isOpen && (
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wider w-full">
                      {persona.title}
                    </h3>
                  )}
                  {/* Body Content (Only visible when OPEN) */}
                  <AnimatePresence mode="popLayout">
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="w-full flex flex-col items-center justify-center gap-6"
                      >
                        {persona.description && (
                          <p className="text-slate-300 leading-relaxed text-sm md:text-lg">
                            {persona.description}
                          </p>
                        )}

                        {/* Tech Stack Grid */}
                        {persona.stack && persona.stack.length > 0 && (
                          <div className="flex flex-wrap gap-3 justify-center">
                            {persona.stack.map((tech) => (
                              <div
                                key={tech.name}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg
                                bg-slate-950/50 border border-slate-800/50
                                text-slate-300 text-xs font-medium
                                transition-all hover:scale-105 hover:border-white/30"
                                style={{
                                  borderColor: isOpen
                                    ? "rgba(255,255,255,0.1)"
                                    : "",
                                }}
                              >
                                <tech.icon size={22} color={tech.color} />
                                <span>{tech.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
