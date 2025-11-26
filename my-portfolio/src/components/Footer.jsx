import { motion } from "framer-motion";
import { Heart, Quote } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      {/* Subtle Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80" />

      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        {/* The Big Thought */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative inline-block"
        >
          <Quote className="absolute -top-6 -left-6 text-blue-500/20 dark:text-blue-400/20 w-12 h-12 transform -scale-x-100" />

          <h3 className="text-2xl md:text-3xl font-medium leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-400">
            "Technology is best when it empowers people — and code is the spark
            that turns imagination into reality."
          </h3>

          <Quote className="absolute -bottom-6 -right-6 text-purple-500/20 dark:text-purple-400/20 w-12 h-12" />
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-col items-center gap-3 text-sm text-slate-500"
        >
          <div className="w-12 h-[1px] bg-slate-300 dark:bg-slate-700 mb-2"></div>
          <p>© {currentYear} All rights reserved.</p>
          <p className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <span>Designed & Built with</span>
            <Heart size={12} className="text-red-500 animate-pulse" />
            <span>by Amitesh Ranjan</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
