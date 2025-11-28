import { motion } from "framer-motion";
import { socialLinks1 } from "../data/socials1";
import { socialLinks2 } from "../data/socials2";
import { SocialCard } from "./SocialCard";

export default function SocialsSection() {
  const topRow = socialLinks1;
  const bottomRow = socialLinks2;

  return (
    <section
      id="socials"
      className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-950"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-sky-500/10 blur-[80px]" />
        <div className="absolute right-[-6rem] bottom-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[90px]" />
      </div>

      {/* Header */}
      <div className="relative max-w-5xl mx-auto px-4 text-center mb-12 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new opportunities
          </div> */}

          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-bold tracking-tight text-slate-50 mb-3">
            Let&apos;s connect beyond this page
          </h2>

          <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            Whether it's a quick DM, a project idea, or a friendly contest
            challenge — choose your favorite platform and let's connect.
          </p>
        </motion.div>
      </div>

      {/* --- MARQUEE SECTION --- */}
      <div className="flex flex-col gap-6 w-full">
        {/* ROW 1: Top List (Moves Left) */}
        <div className="relative flex overflow-hidden user-select-none group">
          {/* Edge Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />

          <div className="flex shrink-0 gap-4 sm:gap-6 animate-marquee-left group-hover:[animation-play-state:paused] pr-4 sm:pr-6">
            {[...topRow, ...topRow, ...topRow, ...topRow].map(
              (social, index) => (
                <SocialCard key={`top-1-${index}`} social={social} />
              )
            )}
          </div>
          {/* Duplicate for Loop */}
          <div className="flex shrink-0 gap-4 sm:gap-6 animate-marquee-left group-hover:[animation-play-state:paused] pr-4 sm:pr-6">
            {[...topRow, ...topRow, ...topRow, ...topRow].map(
              (social, index) => (
                <SocialCard key={`top-2-${index}`} social={social} />
              )
            )}
          </div>
        </div>

        {/* ROW 2: Bottom List (Moves Right) */}
        <div className="relative flex overflow-hidden user-select-none group">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />

          <div className="flex shrink-0 gap-4 sm:gap-6 animate-marquee-right group-hover:[animation-play-state:paused] pr-4 sm:pr-6">
            {[...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow].map(
              (social, index) => (
                <SocialCard key={`bot-1-${index}`} social={social} />
              )
            )}
          </div>
          {/* Duplicate */}
          <div className="flex shrink-0 gap-4 sm:gap-6 animate-marquee-right group-hover:[animation-play-state:paused] pr-4 sm:pr-6">
            {[...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow].map(
              (social, index) => (
                <SocialCard key={`bot-2-${index}`} social={social} />
              )
            )}
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="relative max-w-5xl mx-auto px-4 mt-8 text-center">
        <p className="text-[13px] sm:text-sm text-slate-400">
          Prefer email? Drop a line at
          <a
            href="mailto:amiteshranjan5524@gmail.com"
            className="ml-1 font-medium text-sky-400 hover:text-sky-300 underline-offset-4 hover:underline"
          >
            amiteshranjan5524@gmail.com
          </a>
        </p>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
