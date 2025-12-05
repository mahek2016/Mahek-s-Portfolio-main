import { useEffect, useRef } from "react";

/**
 * Simple hook to add a smooth fade / slide-up animation
 * when an element scrolls into view.
 */
const useRevealOnScroll = (options = { threshold: 0.15 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback: if IntersectionObserver is not supported, show element immediately
    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      element.classList.add("reveal-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      options
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return ref;
};

export default useRevealOnScroll;


