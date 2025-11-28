import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-slate-950 pb-8 pt-0">
      {/* Full-width separator line */}
      <div className="w-full h-[1px] bg-slate-100 opacity-50"></div>

      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400 mt-6">
          {/* Copyright */}
          <p>© All rights reserved.</p>

          {/* Credits */}
          <p className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart size={12} className="text-red-500 fill-red-500" />
            <span>by Amitesh Ranjan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
