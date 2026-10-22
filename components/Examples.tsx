// Made-up sample mockups and a sample weakness entry, drawn in CSS. Not real entries.
export default function Examples() {
  return (
    <section className="block white" id="examples">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-kicker">Example mockups</span>
          <h2>Any level of polish works.</h2>
          <p>Judges score the idea, not your design skills. All three of these made-up examples would count.</p>
        </div>
        <div className="grid-3">
          <div className="mock">
            <div className="mock-art sketch">
              <div className="sk-phone">
                <div className="sk-line">Mon: orgo exam!!</div>
                <div className="sk-line">Wed: essay due</div>
                <div className="sk-line">Fri: interview</div>
                <div className="sk-btn">plan my week</div>
                <div className="sk-note">← sol pulls these from chat</div>
              </div>
            </div>
            <div className="mock-cap">
              <span className="lvl">Hand sketch · 15 min</span>
              <h4>Deadline memory</h4>
              <p>Sol picks up the due dates you mention and helps you plan around them.</p>
            </div>
          </div>
          <div className="mock">
            <div className="mock-art canva">
              <div className="cv-screen">
                <div className="t">Your week with Sol</div>
                <div className="s">3 check-ins · 2 goals moved forward</div>
                <div className="cv-week">
                  <i className="on" /><i className="mid" /><i /><i className="on" /><i className="mid" /><i /><i />
                </div>
                <div className="cv-item">Applied to 2 internships</div>
                <div className="cv-item">Talked to advisor about minor</div>
                <div className="cv-item">Started orgo review</div>
              </div>
            </div>
            <div className="mock-cap">
              <span className="lvl">Canva / Figma screen · 1 hr</span>
              <h4>Weekly recap</h4>
              <p>A Sunday summary that shows what you got done, so you keep coming back.</p>
            </div>
          </div>
          <div className="mock">
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
              <span className="lvl">AI-generated UI · 30 min</span>
              <h4>Topic starters</h4>
              <p>Tap a starting topic so the first message doesn't feel like a blank page.</p>
            </div>
          </div>
        </div>

        <div className="weak">
          <div className="weak-head">
            <h3>Sample weakness entry</h3>
            <span className="sev">Medium severity</span>
          </div>
          <dl>
            <dt>What I tried</dt>
            <dd>Told Sol on Monday that my orgo exam was Friday, then asked on Wednesday, "what should I focus on this week?"</dd>
            <dt>What happened</dt>
            <dd>Sol gave general study tips and never mentioned the exam.</dd>
            <dt>Why it matters</dt>
            <dd>Students juggle lots of deadlines. If Sol says it remembers but misses the one thing that matters this week, people stop trusting it.</dd>
            <dt>Screenshot</dt>
            <dd><span className="shot">📎 wed-chat.png</span></dd>
          </dl>
        </div>
        <p className="sample-note">These are made-up samples to show the format, not real entries.</p>
      </div>
    </section>
  );
}
