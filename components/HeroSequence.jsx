"use client";
import { useEffect, useRef } from "react";
import frameLists from "@/lib/frames.json";
const titles = [
  "We have reinvented the future of logistics through the yard.",
  "AI-native technology that turns the space between your gate and your dock...",
  "into one connected, automated system.",
];
export default function HeroSequence() {
  const section = useRef(null),
    canvas = useRef(null),
    text = useRef(null);
  useEffect(() => {
    const el = section.current,
      c = canvas.current,
      ctx = c.getContext("2d");
    let disposed = false,
      raf = 0,
      active = 0,
      last = -1;
    const frames = innerWidth >= 1024 ? frameLists.desktop : frameLists.mobile;
    const cache = new Map(),
      loading = new Set();
    const draw = () => {
      raf = 0;
      if (disposed) return;
      const rect = el.getBoundingClientRect(),
        progress = Math.max(
          0,
          Math.min(1, -rect.top / (el.offsetHeight - innerHeight)),
        );
      active = Math.round(progress * (frames.length - 1));
      const index = cache.has(active)
        ? active
        : [...cache.keys()].sort(
            (a, b) => Math.abs(a - active) - Math.abs(b - active),
          )[0];
      const img = cache.get(index);
      if (img && index !== last) {
        last = index;
        const scale = Math.max(
          c.width / img.naturalWidth,
          c.height / img.naturalHeight,
        );
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(
          img,
          (c.width - img.naturalWidth * scale) / 2,
          (c.height - img.naturalHeight * scale) / 2,
          img.naturalWidth * scale,
          img.naturalHeight * scale,
        );
      }
      const phase = (progress - 0.03) * 3,
        i = Math.floor(phase),
        fraction = phase - i;
      [...text.current.children].forEach((title, n) => {
        title.style.opacity =
          n === i
            ? String(
                Math.min(
                  1,
                  Math.max(0, fraction * 7),
                  Math.max(0, (1 - fraction) * 5),
                ),
              )
            : "0";
        title.style.transform = `translateY(${n === i ? (1 - Math.min(1, fraction * 5)) * 25 : 25}px)`;
      });
      for (const i of [active, active + 1, active - 1, active + 3, active - 3])
        load(i);
    };
    const schedule = () => {
      if (!raf && !disposed) raf = requestAnimationFrame(draw);
    };
    function load(index) {
      if (
        index < 0 ||
        index >= frames.length ||
        cache.has(index) ||
        loading.has(index) ||
        loading.size >= 6
      )
        return;
      loading.add(index);
      const img = new Image();
      img.onload = () => {
        loading.delete(index);
        if (disposed) return;
        cache.set(index, img);
        if (cache.size > 18) {
          const farthest = [...cache.keys()].sort(
            (a, b) => Math.abs(b - active) - Math.abs(a - active),
          )[0];
          cache.delete(farthest);
        }
        schedule();
      };
      img.onerror = () => loading.delete(index);
      img.src = frames[index];
    }
    const resize = () => {
      const ratio = Math.min(devicePixelRatio || 1, 1.5);
      c.width = innerWidth * ratio;
      c.height = innerHeight * ratio;
      last = -1;
      schedule();
    };
    resize();
    load(0);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);
      cache.clear();
    };
  }, []);
  return (
    <section ref={section} className="local-hero-sequence">
      <div className="local-hero-sticky">
        <picture>
          <source media="(max-width:1023px)" srcSet={frameLists.mobile[0]} />
          <img
            src={frameLists.desktop[0]}
            alt="Truck entering a connected logistics yard"
          />
        </picture>
        <canvas ref={canvas} aria-hidden="true" />
        <div ref={text} className="local-hero-copy">
          {titles.map((title) => (
            <h2 key={title}>{title}</h2>
          ))}
        </div>
        <div className="local-scroll-indicator">
          SCROLL TO EXPLORE <span>↓</span>
        </div>
      </div>
    </section>
  );
}
