"use client";

import { useState } from "react";

// A card that turns over in 3D when clicked or tapped (or Enter/Space from the
// keyboard). Until it's been flipped once it does a periodic attention shake
// (CSS, keyed off the .seen class). Both faces stay in the DOM, so screen
// readers get all the content.
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
  const [seen, setSeen] = useState(false);
  const toggle = () => {
    setFlipped((f) => !f);
    setSeen(true);
  };

  return (
    <div
      className={`flip-card${flipped ? " flipped" : ""}${seen ? " seen" : ""}`}
      tabIndex={0}
      aria-pressed={flipped}
      onClick={(e) => {
        // Links on the back still work without flipping the card
        if ((e.target as Element).closest("a")) return;
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
      <span className="h-click">Click</span>
      <span className="h-tap">Tap</span> to flip
    </span>
  );
}
