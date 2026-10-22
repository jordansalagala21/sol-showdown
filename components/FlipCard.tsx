"use client";

import { useState } from "react";

// A card that turns over in 3D. Mouse users flip it by hovering (CSS);
// touch users tap it; keyboard users focus it and press Enter or Space.
// Both faces stay in the DOM, so screen readers get all the content.
export default function FlipCard({
  front,
  back,
  frontClassName = "",
  backClassName = "",
}: {
  front: React.ReactNode;
  back: React.ReactNode;
  frontClassName?: string;
  backClassName?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);

  return (
    <div
      className={`flip-card${flipped ? " flipped" : ""}`}
      tabIndex={0}
      onClick={(e) => {
        // Hover already flips on mouse devices; links inside still work normally
        if ((e.target as Element).closest("a") || window.matchMedia("(hover: hover)").matches) return;
        toggle();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div className="flip-inner">
        <div className={`flip-face flip-front ${frontClassName}`}>{front}</div>
        <div className={`flip-face flip-back ${backClassName}`}>{back}</div>
      </div>
    </div>
  );
}

export function FlipHint() {
  return (
    <span className="flip-hint" aria-hidden="true">
      <span className="flip-icon">↻</span>
      <span className="h-hover">Hover</span>
      <span className="h-tap">Tap</span> to flip
    </span>
  );
}
