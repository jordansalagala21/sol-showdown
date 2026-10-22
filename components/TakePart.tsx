import { site, ext } from "@/lib/site";
import SectionHead from "./SectionHead";
import SubmitButton from "./SubmitButton";

export default function TakePart() {
  return (
    <section className="block white" id="start">
      <div className="wrap">
        <SectionHead kicker="How to take part" title="Four steps, in this order.">
          Start with the pre-assessment survey before you use Sol, and finish with the post-assessment survey once
          you're done testing.
        </SectionHead>
        <ol className="steps-track">
          <li className="card step step-first">
            <div className="step-head"><span className="num">1</span><span className="step-badge">Do this first</span></div>
            <h3>Pre-Assessment Survey</h3>
            <p>
              Before you start exploring Sol, please complete the Pre-Assessment Survey. You must finish it{" "}
              <strong>before</strong> using Sol.
            </p>
            <a className="btn btn-pink" href={site.preSurveyUrl} {...ext}>take the pre-survey ↗</a>
          </li>
          <li className="card step">
            <div className="step-head"><span className="num">2</span><span className="step-tag">After step 1</span></div>
            <h3>Try Sol</h3>
            <p>Use Sol for two weeks. Look for bugs, confusing moments and replies that miss the mark.</p>
            <a className="btn btn-dark" href={site.solUrl} {...ext}>try sol ↗</a>
          </li>
          <li className="card step">
            <div className="step-head"><span className="num">3</span><span className="step-tag">By Mon, Nov 2 · 6 PM</span></div>
            <h3>Build and submit</h3>
            <p>
              Put all three deliverables in one presentation and submit it. <a href="#challenge">What to include ↑</a>
            </p>
            <SubmitButton />
          </li>
          <li className="card step">
            <div className="step-head"><span className="num">4</span><span className="step-tag">After testing</span></div>
            <h3>Post-Assessment Survey</h3>
            <p>Once you've finished testing Sol, complete the Post-Assessment Survey to share your experience.</p>
            <a className="btn btn-dark" href={site.postSurveyUrl} {...ext}>take the post-survey ↗</a>
          </li>
        </ol>
      </div>
    </section>
  );
}
