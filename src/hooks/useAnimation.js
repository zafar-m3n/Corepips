import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll("[data-reveal]");
    if (targets.length === 0) {
      gsap.fromTo(
        el,
        { opacity: 0, y: options.y ?? 30 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.7,
          ease: options.ease ?? "power3.out",
          scrollTrigger: {
            trigger: el,
            start: options.start ?? "top 85%",
            once: true,
          },
        }
      );
    } else {
      gsap.fromTo(
        targets,
        { opacity: 0, y: options.y ?? 30 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.7,
          ease: options.ease ?? "power3.out",
          stagger: options.stagger ?? 0.1,
          scrollTrigger: {
            trigger: el,
            start: options.start ?? "top 85%",
            once: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return ref;
}

export function useHeroAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    const heading = el.querySelector("[data-hero-heading]");
    const sub = el.querySelector("[data-hero-sub]");
    const ctas = el.querySelectorAll("[data-hero-cta]");
    const visual = el.querySelector("[data-hero-visual]");

    if (heading) tl.fromTo(heading, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 });
    if (sub) tl.fromTo(sub, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4");
    if (ctas.length) tl.fromTo(ctas, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, "-=0.3");
    if (visual) tl.fromTo(visual, { opacity: 0, scale: 0.96, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.9 }, "-=0.5");
  }, []);

  return ref;
}

export function useStaggerReveal(stagger = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.children;

    gsap.fromTo(
      items,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);

  return ref;
}
