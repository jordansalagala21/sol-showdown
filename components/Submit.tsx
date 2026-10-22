import SubmitButton from "./SubmitButton";
import FlipCard, { FlipHint } from "./FlipCard";

export default function Submit({ showExamples }: { showExamples?: () => void }) {
  return (
    <>
      <div className="required">
        <span className="req-badge">Required</span>
        <p>
          Submit <strong>one presentation</strong> made in <strong>PowerPoint, Google Slides or Canva</strong> that
          includes <strong>all three deliverables</strong>. Put screenshots, critiques and prototype visuals directly on
          your slides. Due <strong>Mon, Nov 2 at 6:00 PM</strong> through the submission form.
        </p>
      </div>
      <div className="grid-3">
        <FlipCard
          frontClassName="card flip-sum"
          backClassName="flip-dark"
          front={
            <>
              <div className="head"><span className="num">1</span><span className="tag">Weakness report</span></div>
              <h3>Find 5+ problems in Sol</h3>
              <p>Bugs, confusing moments, missing features or replies that don't help. Document each one in your slides.</p>
              <FlipHint />
            </>
          }
          back={
            <>
              <span className="back-kicker">Deliverable 1 of 3</span>
              <h4>For each problem, include:</h4>
              <ul>
                <li>What you tried in Sol and what happened</li>
                <li>Why it matters to students</li>
                <li>Severity: low, medium or high</li>
                <li>A screenshot on the slide, if you can</li>
              </ul>
            </>
          }
        />
        <FlipCard
          frontClassName="card flip-sum"
          backClassName="flip-dark"
          front={
            <>
              <div className="head"><span className="num">2</span><span className="tag">Improvement proposal</span></div>
              <h3>Propose 1–2 fixes for Sol</h3>
              <p>Improvements the Sol team could realistically build into the app, tied to problems from your weakness report.</p>
              <FlipHint />
            </>
          }
          back={
            <>
              <span className="back-kicker">Deliverable 2 of 3</span>
              <h4>For each improvement, include:</h4>
              <ul>
                <li>Which problem from your report it fixes</li>
                <li>How it would work inside Sol</li>
                <li>Who it helps and why</li>
                <li>How we'd know it's working</li>
              </ul>
            </>
          }
        />
        <FlipCard
          frontClassName="card flip-sum"
          backClassName="flip-dark"
          front={
            <>
              <div className="head"><span className="num">3</span><span className="tag">Mockup or prototype</span></div>
              <h3>Show your fix inside Sol</h3>
              <p>Visuals of how your improvement would look and work in the Sol app, placed in your slides. Any polish level works.</p>
              <FlipHint />
            </>
          }
          back={
            <>
              <span className="back-kicker">Deliverable 3 of 3</span>
              <h4>Any of these count, placed on your slides:</h4>
              <ul>
                <li>A photo of a hand sketch</li>
                <li>A Figma or Canva screen</li>
                <li>An AI-generated UI</li>
                <li>Screenshots of working code (optional)</li>
              </ul>
              {showExamples && <a className="back-link" href="#challenge" onClick={showExamples}>See examples →</a>}
            </>
          }
        />
      </div>
      <div className="resource-row">
        <SubmitButton />
      </div>
    </>
  );
}
