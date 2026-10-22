import { site } from "@/lib/site";
import Tbd from "./Tbd";

export default function Submit() {
  return (
    <section className="block white" id="submit">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-kicker">What you submit</span>
          <h2>Three parts, one form.</h2>
          <p>Find the problems, suggest a fix, and show us what it looks like.</p>
        </div>
        <div className="grid-3">
          <div className="card deliverable">
            <span className="num">1</span>
            <span className="tag">Weakness report</span>
            <h3>5+ issues you found</h3>
            <p className="muted small">For each one, include:</p>
            <ul>
              <li>What you tried</li>
              <li>What happened</li>
              <li>Why it matters to students</li>
              <li>Severity: low, medium or high</li>
              <li>A screenshot, if you can</li>
            </ul>
          </div>
          <div className="card deliverable">
            <span className="num">2</span>
            <span className="tag">Proposal</span>
            <h3>1–2 ideas to fix it</h3>
            <p className="muted small">For each idea:</p>
            <ul>
              <li>The student problem it solves</li>
              <li>How it works</li>
              <li>How we'd know it's working</li>
            </ul>
          </div>
          <div className="card deliverable">
            <span className="num">3</span>
            <span className="tag">Mockup or prototype</span>
            <h3>Show us what it looks like</h3>
            <p>A hand sketch, a Figma or Canva screen, or an AI-generated UI all count.</p>
            <p className="muted small">
              Code is welcome but not required. <a href="#examples">See examples ↓</a>
            </p>
          </div>
        </div>
        <div className="resource-row">
          <a className="resource" href={site.guideUrl}>
            <span><Tbd>"What to look for" guide</Tbd></span><span className="arrow">→</span>
          </a>
          <a className="resource" href={site.templateUrl}>
            <span><Tbd>Weakness log template</Tbd></span><span className="arrow">→</span>
          </a>
          <a className="btn btn-pink" href={site.submissionFormUrl}>open the submission form</a>
        </div>
      </div>
    </section>
  );
}
