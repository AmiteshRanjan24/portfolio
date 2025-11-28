import { motion } from "framer-motion";
// hover glow effects
const getBrandEffects = (bgClass) => {
  const mapping = {
    "bg-blue-600":
      "group-hover:border-blue-500/50 group-hover:shadow-blue-500/20", // LinkedIn
    "bg-zinc-900":
      "group-hover:border-zinc-500/50 group-hover:shadow-zinc-500/20", // GitHub
    "bg-amber-500":
      "group-hover:border-amber-500/50 group-hover:shadow-amber-500/20", // LeetCode
    "bg-green-600":
      "group-hover:border-green-500/50 group-hover:shadow-green-500/20", // GfG
    "bg-pink-600":
      "group-hover:border-pink-500/50 group-hover:shadow-pink-500/20", // Instagram
    "bg-amber-700":
      "group-hover:border-orange-600/50 group-hover:shadow-orange-600/20", // CodeChef
  };
  return (
    mapping[bgClass] ||
    "group-hover:border-slate-500/50 group-hover:shadow-slate-500/20"
  );
};

export function SocialCard({ social }) {
  const Icon = social.icon;
  const brandEffects = getBrandEffects(social.color);

  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noreferrer"
      className={`group relative flex flex-col justify-start p-5 
        w-[280px] h-[140px] rounded-2xl 
        bg-slate-900/70 border border-slate-800 backdrop-blur-xl 
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:shadow-2xl ${brandEffects}
        flex-shrink-0 overflow-hidden cursor-pointer`}
    >
      {/* Background Gradient Flash */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${social.color}`}
      />

      {/* --- TOP ROW: Image + Name/Handle --- */}
      <div className="relative flex items-center gap-4 z-10">
        {/* Image/Icon */}
        <div
          className={`
          relative flex items-center justify-center w-10 h-10 rounded-xl 
          ${social.color} text-white shadow-lg overflow-hidden flex-shrink-0
          transform group-hover:scale-105 transition-transform duration-500
        `}
        >
          {social.logo ? (
            <img
              src={social.logo}
              alt={social.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <Icon size={24} strokeWidth={2} />
          )}
        </div>

        {/* Name & Handle*/}
        <div className="flex flex-col">
          <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors leading-tight">
            {social.name}
          </h3>
          <p className="text-xs font-medium text-slate-500 group-hover:text-slate-400 transition-colors">
            {social.handle}
          </p>
        </div>
      </div>

      {/* --- BOTTOM ROW: Description (One-Liner) --- */}
      <div className="relative z-10 mt-3 pt-2 border-t border-slate-800/50 group-hover:border-slate-700/50 transition-colors">
        <p className="text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed line-clamp-2">
          {social.description}
        </p>
      </div>
    </motion.a>
  );
}
