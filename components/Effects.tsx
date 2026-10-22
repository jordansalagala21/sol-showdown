"use client";

import { useEffect, useRef } from "react";

// Elements that fade up as they scroll into view. Tab panels are left out:
// they swap content on click and animate on their own.
const REVEAL =
  ".sec-head, .card, .video-card, .mock, .weak, .prize, .raffle, .stat, .faq-col, .everyone, .disclaimer, .foot > div";
// Cursor spotlight follows the pointer across these
const SPOT = ".card, .mock, .stat, .prize, .ticket, .video-card, .raffle";
// ...and these also tilt in 3D toward the pointer
const TILT = ".ticket, .mock, .prize, .stat, .deliverable, .code-card, .raffle";
// Clicking these fires a confetti burst
const CONFETTI = ".prize, .raffle, .btn-pink";
const COLORS = ["#E8158E", "#F5862A", "#C9D836", "#1FB59A", "#3B6FE0", "#A23BD9", "#F59BD2"];

function burst(x: number, y: number) {
  for (let i = 0; i < 30; i++) {
    const s = document.createElement("i");
    s.className = "confetti";
    s.style.left = `${x}px`;
    s.style.top = `${y}px`;
    s.style.background = COLORS[i % COLORS.length];
    if (i % 3 === 0) s.style.borderRadius = "50%";
    document.body.appendChild(s);
    const a = Math.random() * Math.PI * 2;
    const v = 70 + Math.random() * 150;
    const dx = Math.cos(a) * v;
    const dy = Math.sin(a) * v - 90;
    s.animate(
      [
        { transform: "translate(-50%, -50%) rotate(0deg)", opacity: 1 },
        { transform: `translate(${dx}px, ${dy + 180}px) rotate(${Math.random() * 720 - 360}deg)`, opacity: 0 },
      ],
      { duration: 900 + Math.random() * 600, easing: "cubic-bezier(.2,.6,.4,1)" }
    ).onfinish = () => s.remove();
  }
}

export default function Effects() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector("header.top");
    const hero = document.querySelector<HTMLElement>(".hero");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: (() => void)[] = [];
    const on = <K extends keyof WindowEventMap>(t: K, fn: (e: WindowEventMap[K]) => void, opts?: AddEventListenerOptions) => {
      window.addEventListener(t, fn, opts);
      cleanups.push(() => window.removeEventListener(t, fn));
    };

    // ---- Scroll: progress bar, header shadow, hero parallax
    const onScroll = () => {
      const y = window.scrollY;
      const max = root.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      header?.classList.toggle("scrolled", y > 8);
      if (hero && !reduced && y < 1000) hero.style.setProperty("--sy", String(y));
    };
    onScroll();
    on("scroll", onScroll, { passive: true });

    if (reduced) return () => cleanups.forEach((c) => c());

    // ---- Scroll reveal
    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL)).filter(
      (el) => !el.closest('[role="tabpanel"], .hero')
    );
    const seen = new Map<Element | null, number>();
    els.forEach((el) => {
      const i = seen.get(el.parentElement) ?? 0;
      seen.set(el.parentElement, i + 1);
      el.style.setProperty("--d", `${Math.min(i, 6) * 80}ms`);
      el.classList.add("reveal");
    });
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    // ---- Confetti (works on touch too)
    on("click", (e) => {
      const t = (e.target as Element).closest(CONFETTI);
      if (t) burst(e.clientX, e.clientY);
    });

    if (!finePointer) return () => cleanups.forEach((c) => c());

    // ---- Pointer: spotlight, tilt, magnetic buttons, hero blob
    let spotEl: HTMLElement | null = null;
    let magEl: HTMLElement | null = null;
    const blob = document.querySelector<HTMLElement>(".hero-blob");
    let bx = 0, by = 0, tx = 0, ty = 0, raf = 0;

    const loop = () => {
      bx += (tx - bx) * 0.08;
      by += (ty - by) * 0.08;
      if (blob) blob.style.translate = `${bx}px ${by}px`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    cleanups.push(() => cancelAnimationFrame(raf));

    const resetTilt = (el: HTMLElement | null) => {
      el?.style.removeProperty("--rx");
      el?.style.removeProperty("--ry");
    };

    on("pointermove", (e) => {
      const target = e.target as Element;

      const s = target.closest<HTMLElement>(SPOT);
      if (s !== spotEl) { resetTilt(spotEl); spotEl = s; }
      if (s) {
        const r = s.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        s.style.setProperty("--mx", `${x}px`);
        s.style.setProperty("--my", `${y}px`);
        if (s.matches(TILT)) {
          const k = s.classList.contains("ticket") ? 3 : 7; // wide elements tilt less
          s.style.setProperty("--rx", `${(0.5 - y / r.height) * k}deg`);
          s.style.setProperty("--ry", `${(x / r.width - 0.5) * k}deg`);
        }
      }

      const m = target.closest<HTMLElement>(".btn");
      if (m !== magEl) { if (magEl) magEl.style.translate = ""; magEl = m; }
      if (m) {
        const r = m.getBoundingClientRect();
        m.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.25}px ${(e.clientY - r.top - r.height / 2) * 0.35}px`;
      }

      if (hero && blob) {
        const r = hero.getBoundingClientRect();
        tx = e.clientX - r.left;
        ty = e.clientY - r.top;
        blob.style.opacity = e.clientY < r.bottom ? "0.45" : "0";
      }
    });
    on("pointerleave", () => { resetTilt(spotEl); spotEl = null; });

    return () => cleanups.forEach((c) => c());
  }, []);

  return <div className="progress" ref={bar} aria-hidden="true" />;
}
