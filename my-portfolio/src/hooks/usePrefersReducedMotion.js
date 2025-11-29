import { useEffect, useState } from "react";
/**
 * usePrefersReducedMotion
 * Returns true when the user prefers reduced motion (accessibility setting).
 * Use this to disable or reduce animations for users who request it.
 */

export default function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Set initial value
    setPrefersReduced(mediaQuery.matches);

    // Handler to update state on changes
    const handler = () => setPrefersReduced(mediaQuery.matches);

    // Listen for changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
    } else {
      // Older browsers
      mediaQuery.addEventListener(handler);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handler);
      } else {
        mediaQuery.removeEventListener(handler);
      }
    };
  }, []);
  return prefersReduced;
}
