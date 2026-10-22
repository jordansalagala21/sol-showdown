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
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (ms === 0) return <div className="count"><b>Closed</b></div>;

  const units: [string, number | string][] =
    ms === null
      ? [["days", "–"], ["hrs", "–"], ["min", "–"], ["sec", "–"]]
      : [
          ["days", Math.floor(ms / 864e5)],
          ["hrs", Math.floor(ms / 36e5) % 24],
          ["min", Math.floor(ms / 6e4) % 60],
          ["sec", Math.floor(ms / 1e3) % 60],
        ];

  return (
    <div className="count">
      {units.map(([label, v]) => (
        <div key={label}>
          {/* key on the value so each change replays the flip animation */}
          <b key={v} className="flip">{typeof v === "number" ? String(v).padStart(2, "0") : v}</b>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
