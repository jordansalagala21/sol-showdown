import { site } from "@/lib/site";
import FlipCard, { FlipHint } from "./FlipCard";
import Tbd from "./Tbd";

export default function Submit({ showExamples }: { showExamples?: () => void }) {
  return (
    <>
      <div className="grid-3">
        <FlipCard
          frontClassName="card flip-sum"
          backClassName="flip-dark"
          front={
            <>
              <div className="head"><span className="num">1</span><span className="tag">Weakness report</span></div>
              <h3>5+ issues you found</h3>
              <p>Log what breaks, confuses you or falls short while you use Sol.</p>
              <FlipHint />
            </>
          }
          back={
            <>
              <span className="back-kicker">Weakness report</span>
              <h4>For each issue, include:</h4>
              <ul>
                <li>What you tried and what happened</li>
                <li>Why it matters to students</li>
                <li>Severity: low, medium or high</li>
                <li>A screenshot, if you can</li>
              </ul>
            </>
          }
        />
        <FlipCard
          frontClassName="card flip-sum"
          backClassName="flip-dark"
          front={
            <>
              <div className="head"><span className="num">2</span><span className="tag">Proposal</span></div>
              <h3>1–2 ideas to fix it</h3>
              <p>Pick the problems that matter most to students and propose a fix.</p>
              <FlipHint />
            </>
          }
          back={
            <>
              <span className="back-kicker">Proposal</span>
              <h4>For each idea, include:</h4>
              <ul>
                <li>The student problem it solves</li>
                <li>How it works</li>
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
              <h3>Show us what it looks like</h3>
              <p>Any level of polish works. Code is welcome, not required.</p>
              <FlipHint />
            </>
          }
          back={
            <>
              <span className="back-kicker">Mockup or prototype</span>
              <h4>Any of these count:</h4>
              <ul>
                <li>A hand sketch</li>
                <li>A Figma or Canva screen</li>
                <li>An AI-generated UI</li>
                <li>Working code (optional)</li>
              </ul>
              {showExamples && <a className="back-link" href="#challenge" onClick={showExamples}>See examples →</a>}
            </>
          }
        />
      </div>
      <div className="resource-row">
        <a className="btn btn-pink" href={site.submissionFormUrl}>open the submission form</a>
        <a className="resource" href={site.guideUrl}><Tbd>"What to look for" guide</Tbd><span className="arrow">→</span></a>
        <a className="resource" href={site.templateUrl}><Tbd>Weakness log template</Tbd><span className="arrow">→</span></a>
      </div>
    </>
  );
}
