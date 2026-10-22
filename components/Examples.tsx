import FlipCard, { FlipHint } from "./FlipCard";

// Made-up sample mockups and a sample weakness entry, drawn in CSS. Not real entries.

function Back({ idea, why }: { idea: string; why: string[] }) {
  return (
    <>
      <span className="back-kicker">The idea</span>
      <p className="back-idea">{idea}</p>
      <span className="back-kicker">Why it would score well</span>
      <ul>
        {why.map((w) => <li key={w}>{w}</li>)}
      </ul>
    </>
  );
}

export default function Examples() {
  return (
    <>
      <div className="examples">
        <FlipCard
          frontClassName="mock"
          backClassName="mock-back"
          front={
            <>
              <div className="mock-art sketch">
                <div className="sk-phone">
                  <div className="sk-line">Mon: orgo exam!!</div>
                  <div className="sk-line">Wed: essay due</div>
                  <div className="sk-line">Fri: interview</div>
                  <div className="sk-btn">plan my week</div>
                </div>
              </div>
              <div className="mock-cap">
                <span className="lvl">Sketch photo on a slide · 15 min</span>
                <h4>Deadline memory</h4>
                <FlipHint />
              </div>
            </>
          }
          back={
            <Back
              idea="Sol picks up the due dates you mention in chat and offers to plan your week around them."
              why={["Clear student problem: missed deadlines", "Builds on what Sol already does", "Easy to picture from a quick sketch"]}
            />
          }
        />
        <FlipCard
          frontClassName="mock"
          backClassName="mock-back"
          front={
            <>
              <div className="mock-art canva">
                <div className="cv-screen">
                  <div className="t">Your week with Sol</div>
                  <div className="s">3 check-ins · 2 goals moved forward</div>
                  <div className="cv-week">
                    <i className="on" /><i className="mid" /><i /><i className="on" /><i className="mid" /><i /><i />
                  </div>
                  <div className="cv-item">Applied to 2 internships</div>
                  <div className="cv-item">Talked to advisor</div>
                  <div className="cv-item">Started orgo review</div>
                </div>
              </div>
              <div className="mock-cap">
                <span className="lvl">Canva / Figma slide · 1 hr</span>
                <h4>Weekly recap</h4>
                <FlipHint />
              </div>
            </>
          }
          back={
            <Back
              idea="A Sunday summary of what you got done this week, so students see progress and keep coming back."
              why={["Has a clear success measure: weekly return rate", "Simple, realistic to build", "Clean screen shows exactly how it works"]}
            />
          }
        />
        <FlipCard
          frontClassName="mock"
          backClassName="mock-back"
          front={
            <>
              <div className="mock-art ai">
                <div className="ai-screen">
                  <div className="orb" />
                  <div className="t">What's on your mind?</div>
                  <div className="ai-pill on">Picking a major</div>
                  <div className="ai-pill">Internship stress</div>
                  <div className="ai-pill">Just need to vent</div>
                </div>
              </div>
              <div className="mock-cap">
                <span className="lvl">AI-generated UI slide · 30 min</span>
                <h4>Topic starters</h4>
                <FlipHint />
              </div>
            </>
          }
          back={
            <Back
              idea="Tap a starting topic so the first message doesn't feel like a blank page."
              why={["Fixes a real first-use weakness", "Small change, big effect on new users", "AI tool used and disclosed"]}
            />
          }
        />

        <div className="weak">
          <div className="weak-head">
            <h4>Sample weakness slide</h4>
            <span className="sev">Medium</span>
          </div>
          <dl>
            <dt>What I tried</dt>
            <dd>Told Sol on Monday my orgo exam was Friday, then asked Wednesday, "what should I focus on this week?"</dd>
            <dt>What happened</dt>
            <dd>General study tips. No mention of the exam.</dd>
            <dt>Why it matters</dt>
            <dd>If Sol says it remembers but misses the one thing that matters this week, students stop trusting it.</dd>
            <dt>Screenshot</dt>
            <dd>🖼 Screenshot of the chat, placed right on the slide</dd>
          </dl>
        </div>
      </div>
      <p className="sample-note">Made-up samples, not real entries. Each one would sit on a slide in your presentation. Judges score the idea, not your design skills.</p>
    </>
  );
}
