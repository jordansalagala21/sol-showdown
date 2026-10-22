import { site, ext } from "@/lib/site";
import Countdown from "./Countdown";
import Logos from "./Logos";
import SolOrb from "./SolOrb";
import HalloweenDecor from "./HalloweenDecor";

// Inline delay for the staggered entrance animation (see .rise in globals.css)
const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function Hero() {
  return (
    <section className="hero">
      <SolOrb />
      <span className="hero-blob" aria-hidden="true" />
      <HalloweenDecor />
      <div className="wrap">
        <h1>
          <span className="rise" style={d(0)}>Sol</span>
          <span className="grad rise" style={d(120)}>Showdown</span>
        </h1>
        <div className="steps" aria-label="Use Sol, find what's broken, pitch a fix">
          <span className="rise" style={d(320)}>Use Sol for two weeks</span>
          <i className="rise" style={d(380)}>→</i>
          <span className="rise" style={d(440)}>Find what's broken</span>
          <i className="rise" style={d(500)}>→</i>
          <span className="rise" style={d(560)}>Pitch a fix</span>
        </div>
        <div className="cta-row rise" style={d(680)}>
          <a className="btn btn-pink lg" href={site.solUrl} {...ext}>try sol</a>
          <a className="btn btn-ghost lg" href={site.registerUrl}>register</a>
        </div>

        <div className="ticket rise" style={d(820)}>
          <div>
            <span className="lbl">Submissions due</span>
            <span className="v">Mon, Nov 2<small>Through the submission form</small></span>
          </div>
          <div>
            <span className="lbl">Showdown</span>
            <span className="v">Tue, Nov 3<small>6:00 PM</small></span>
          </div>
          <div>
            <span className="lbl">Where</span>
            <span className="v">The Pub<small>Rider University</small></span>
          </div>
          <a className="prize-cell" href="#prizes">
            <span className="lbl">Prizes</span>
            <span className="v">$250<small>$100 grand prize</small></span>
          </a>
          <div>
            <span className="lbl">Time left to submit</span>
            <Countdown />
          </div>
        </div>

        <div className="organizers rise" style={d(960)}>
          <p>
            Organized by the <strong>Brodsky Institute</strong>, supported by <strong>D.A.IS</strong>
          </p>
          <Logos />
        </div>
      </div>
    </section>
  );
}
