import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-20 scroll-mt-21 bg-slate-950 overflow-hidden"
    >
      {/* Background accents (subtle, similar to Socials) */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[90px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="mb-10 sm:mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-50 mb-3">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            A selection of things I&apos;ve built while learning, exploring and
            experimenting with code - from problem-solving driven work to
            full-stack web applications.
          </p>
        </motion.div>

        {/* Grid of projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:gap-7 md:grid-cols-2"
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.title || i} p={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
