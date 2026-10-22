"use client";

import { useState } from "react";
import SectionHead from "./SectionHead";
import Submit from "./Submit";
import Rules from "./Rules";
import Examples from "./Examples";

type PanelProps = { showExamples?: () => void };

const tabs: { id: string; label: string; Panel: React.ComponentType<PanelProps> }[] = [
  { id: "submit", label: "What you submit", Panel: Submit },
  { id: "accepted", label: "What's accepted", Panel: Rules },
  { id: "examples", label: "Examples", Panel: Examples },
];

export default function Challenge() {
  const [active, setActive] = useState(tabs[0].id);
  const { Panel } = tabs.find((t) => t.id === active)!;

  return (
    <section className="block" id="challenge">
      <div className="wrap">
        <SectionHead kicker="The challenge" title="Find what's not working in Sol, then fix it.">
          Use Sol for two weeks and find where it falls short: bugs, confusing moments, missing features or replies
          that don't help. Then propose improvements the Sol team could build into the app, and put it all in one presentation. No coding
          required.
        </SectionHead>
        <div className="tabs" role="tablist" aria-label="Challenge details">
          {tabs.map((t) => (
            <button
              key={t.id}
              id={`tab-${t.id}`}
              className="tab"
              role="tab"
              aria-selected={active === t.id}
              aria-controls={`panel-${t.id}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        {/* key remounts the panel on tab change so its fade-in replays */}
        <div role="tabpanel" className="panel" key={active} id={`panel-${active}`} aria-labelledby={`tab-${active}`}>
          <Panel showExamples={() => setActive("examples")} />
        </div>
      </div>
    </section>
  );
}
