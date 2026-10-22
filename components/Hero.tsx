import { site, ext } from "@/lib/site";
import Countdown from "./Countdown";
import Logos from "./Logos";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <h1>
          Sol<span className="grad">Showdown</span>
        </h1>
        <div className="steps" aria-label="Use Sol, find what's broken, pitch a fix">
          <span>Use Sol for two weeks</span><i>→</i>
          <span>Find what's broken</span><i>→</i>
          <span>Pitch a fix</span>
        </div>
        <div className="cta-row">
          <a className="btn btn-pink" href={site.solUrl} {...ext}>try sol</a>
          <a className="btn btn-ghost lg" href={site.registerUrl}>register</a>
        </div>

        <div className="ticket">
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
          <div>
            <span className="lbl">Time left to submit</span>
            <Countdown />
          </div>
        </div>

        <div className="organizers">
          <p>
            Organized by the <strong>Brodsky Institute</strong>, supported by <strong>D.A.IS</strong>
          </p>
          <Logos />
        </div>
      </div>
    </section>
  );
}
