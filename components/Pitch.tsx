import Tbd from "./Tbd";

export default function Pitch() {
  return (
    <section className="block white" id="pitch">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-kicker">How finalists pitch</span>
          <h2>Short and focused.</h2>
        </div>
        <div className="pitch-stats">
          <div className="stat pink"><div className="big">5<small>min</small></div><p>To pitch your fix</p></div>
          <div className="stat"><div className="big">2<small>min</small></div><p>Of questions from the judges</p></div>
          <div className="stat"><div className="big">0</div><p>Need to re-explain everything, since judges read your submission first</p></div>
        </div>
        <div className="grid-2">
          <div className="card">
            <h3>Before the event</h3>
            <ul>
              <li>Finalists will hear by <Tbd>Mon, Nov 2 at 10 PM, by email</Tbd></li>
              <li>Slides: <Tbd>PDF or Google Slides link, 16:9, up to 6 slides</Tbd></li>
              <li>Send slides to <Tbd>the email or form we'll share</Tbd> by <Tbd>Tue, Nov 3 at noon</Tbd></li>
            </ul>
          </div>
          <div className="card">
            <h3>Have a backup</h3>
            <p>Live demos sometimes fail. Bring:</p>
            <ul>
              <li>A short screen recording of the problem you found</li>
              <li>Your mockup saved offline (PDF or image)</li>
            </ul>
            <p className="muted small">If Sol is down, you can still pitch from those.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
