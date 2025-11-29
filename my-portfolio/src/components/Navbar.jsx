import { useState, useEffect } from "react";
import { Home, User, FolderGit2, Share2 } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "socials", label: "Socials", icon: Share2 },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  // scroll listener: glass effect + active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setScrolled(scrollY > 20);

      const offset = scrollY + 120;
      let current = "home";

      NAV_ITEMS.forEach((item) => {
        const el = document.getElementById(item.id);
        if (!el) return;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (offset >= top && offset < top + height) {
          current = item.id;
        }
      });

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-40
        transition-all duration-300
        ${
          scrolled
            ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/70 shadow-[0_10px_30px_rgba(15,23,42,0.85)]"
            : "bg-transparent border-b border-transparent"
        }
      `}
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left spacer (keeps right nav visually aligned with content) */}
        <div className="hidden md:block w-8" />

        {/* Desktop icon nav - aligned right */}
        <nav className="hidden md:flex items-center gap-4 ml-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`
                  group relative inline-flex items-center justify-center
                  w-9 h-9 rounded-full border
                  transition-all duration-300
                  ${
                    isActive
                      ? "border-sky-500 bg-sky-500/10 text-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.45)]"
                      : "border-slate-700 bg-slate-900/70 text-slate-300 hover:border-sky-500/70 hover:bg-slate-900/90 hover:shadow-[0_0_16px_rgba(56,189,248,0.35)]"
                  }
                `}
                aria-label={item.label}
              >
                <Icon className="w-4 h-4" />

                {/* Hover label */}
                <span
                  className={`
                    pointer-events-none absolute top-[115%] left-1/2 -translate-x-1/2
                    px-2.5 py-0.5 rounded-full
                    bg-slate-950/95 border border-slate-700/80
                    text-[11px] font-medium text-slate-200
                    whitespace-nowrap
                    opacity-0 translate-y-1
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-200
                  `}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Mobile menu (hamburger → icons with tooltips) */}
        <div className="md:hidden flex items-center justify-end w-full">
          <MobileMenu activeId={activeId} onNavClick={handleNavClick} />
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ activeId, onNavClick }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="relative">
      {/* Hamburger button */}
      <button
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        className="
          inline-flex items-center justify-center
          rounded-full border border-slate-700
          bg-slate-900/70 px-2.5 py-2
          shadow-sm
          hover:border-sky-500/70 hover:shadow-[0_0_14px_rgba(56,189,248,0.35)]
          transition-all duration-300
        "
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-slate-100"
        >
          {open ? (
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {/* Dropdown with ICONS ONLY + tooltips */}
      {open && (
        <div
          className="
            absolute right-0 mt-3
            rounded-2xl border border-slate-700/80
            bg-slate-950/95 backdrop-blur-xl
            shadow-xl
            py-3 px-3
          "
        >
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeId === item.id;

              return (
                <button
                  key={item.id}
                  onClick={(e) => {
                    onNavClick(e, item.id);
                    setOpen(false);
                  }}
                  className={`
                    group relative inline-flex items-center justify-center
                    w-9 h-9 rounded-full border
                    transition-all duration-300
                    ${
                      isActive
                        ? "border-sky-500 bg-sky-500/10 text-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.45)]"
                        : "border-slate-700 bg-slate-900/70 text-slate-300 hover:border-sky-500/70 hover:bg-slate-900/90 hover:shadow-[0_0_16px_rgba(56,189,248,0.35)]"
                    }
                  `}
                  aria-label={item.label}
                >
                  <Icon className="w-4 h-4" />

                  {/* Tooltip label on hover / long press */}
                  <span
                    className={`
                      pointer-events-none absolute top-[115%] left-1/2 -translate-x-1/2
                      px-2.5 py-0.5 rounded-full
                      bg-slate-950/95 border border-slate-700/80
                      text-[10px] font-medium text-slate-200
                      whitespace-nowrap
                      opacity-0 translate-y-1
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-200
                    `}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
