"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export default function Countdown() {
  // null until mounted, so server and client render the same placeholder
  const [ms, setMs] = useState<number | null>(null);

  useEffect(() => {
    const end = new Date(site.deadline).getTime();
    const tick = () => setMs(Math.max(0, end - Date.now()));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  if (ms === 0) return <div className="count"><b>Closed</b></div>;

  const d = ms === null ? "–" : Math.floor(ms / 864e5);
  const h = ms === null ? "–" : Math.floor(ms / 36e5) % 24;
  const m = ms === null ? "–" : Math.floor(ms / 6e4) % 60;

  return (
    <div className="count">
      <div><b>{d}</b><span>days</span></div>
      <div><b>{h}</b><span>hours</span></div>
      <div><b>{m}</b><span>min</span></div>
    </div>
  );
}
