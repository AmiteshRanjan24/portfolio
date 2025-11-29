import { motion } from "framer-motion";

export default function ProjectCard({ p, index }) {
  const hasTech = Array.isArray(p.tech) && p.tech.length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="
        group relative flex flex-col h-full
        rounded-2xl border border-slate-800 bg-slate-900/70
        hover:border-sky-400/60 hover:shadow-[0_0_28px_rgba(56,189,248,0.35)]
        transition-all duration-300 overflow-hidden
      "
    >
      {/* Gradient glow strip at top */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-sky-500 via-purple-500 to-emerald-500 opacity-60" />

      {/* Card inner content */}
      <div className="relative flex flex-col flex-1 p-5 sm:p-6 gap-4">
        {/* Title + small tag */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-50 leading-snug">
            {p.title}
          </h3>

          {p.tag && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 uppercase tracking-wide">
              {p.tag}
            </span>
          )}
        </div>

        {/* Description */}
        {p.desc && (
          <p className="text-sm sm:text-[0.95rem] text-slate-300 leading-relaxed">
            {p.desc}
          </p>
        )}

        {/* Tech stack chips */}
        {hasTech && (
          <div className="mt-1 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="
                  inline-flex items-center px-2.5 py-1
                  rounded-full border border-slate-700/80 bg-slate-950/60
                  text-[11px] font-medium text-slate-200
                  group-hover:border-slate-500/80 transition-colors
                "
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Footer: links */}
        <div className="mt-auto pt-3 flex items-center gap-4 text-sm">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-sky-400 transition-colors"
            >
              {/* GitHub icon (inline SVG to avoid extra deps) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="currentColor"
              >
                <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.087 3.292 9.395 7.865 10.914.576.107.785-.25.785-.556 0-.274-.01-1.002-.016-1.968-3.198.695-3.873-1.542-3.873-1.542-.524-1.33-1.28-1.684-1.28-1.684-1.046-.715.08-.7.08-.7 1.157.082 1.766 1.188 1.766 1.188 1.028 1.763 2.697 1.254 3.354.959.104-.745.402-1.255.73-1.543-2.553-.29-5.236-1.277-5.236-5.683 0-1.256.448-2.283 1.183-3.087-.119-.29-.513-1.458.112-3.04 0 0 .965-.309 3.164 1.178A10.95 10.95 0 0 1 12 5.32c.978.005 1.964.133 2.884.39 2.197-1.487 3.161-1.178 3.161-1.178.627 1.582.233 2.75.114 3.04.737.804 1.182 1.831 1.182 3.087 0 4.418-2.688 5.39-5.25 5.676.413.355.781 1.057.781 2.132 0 1.54-.014 2.778-.014 3.157 0 .309.207.67.79.555C20.213 21.39 23.5 17.083 23.5 12 23.5 5.648 18.352.5 12 .5Z" />
              </svg>
              <span>Code</span>
            </a>
          )}

          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <span>Live</span>
              {/* External link arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M8 7H17V16" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
