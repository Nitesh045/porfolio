import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * Returns [ref, isVisible] — attach ref to any element.
 * When the element enters the viewport, isVisible flips to true.
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Re-trigger every time element enters OR leaves viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? "0px 0px -60px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}