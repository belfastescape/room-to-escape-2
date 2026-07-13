"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* Port of the old site.js: room sub-bar reveal, scroll-reveal-once, and the
   booking widget skeleton dismiss. Re-runs on every route change since each
   page has fresh DOM nodes for these selectors. */
export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups = [];

    const subbar = document.querySelector(".room-subbar");
    const hero = document.querySelector(".room-hero, .page-head");
    if (subbar && hero && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          subbar.classList.toggle("show", !entries[0].isIntersecting);
        },
        { threshold: 0 }
      );
      io.observe(hero);
      cleanups.push(() => io.disconnect());
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = document.querySelectorAll(".reveal");
    if (!reduce && items.length && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px" }
      );
      items.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    } else {
      items.forEach((el) => el.classList.add("in"));
    }

    const frame = document.querySelector(".widget-shell iframe");
    const skeleton = document.querySelector(".widget-skeleton");
    if (frame && skeleton) {
      const onLoad = () => {
        skeleton.style.display = "none";
      };
      frame.addEventListener("load", onLoad);
      cleanups.push(() => frame.removeEventListener("load", onLoad));
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
