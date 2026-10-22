import SectionHead from "./SectionHead";
import Tbd from "./Tbd";

const rubric = [
  { name: "Student impact", pts: 30 },
  { name: "Quality of weakness findings", pts: 20 },
  { name: "Feasibility", pts: 20 },
  { name: "Clarity of design", pts: 15 },
  { name: "Pitch (finalists)", pts: 15 },
];

export default function Judging() {
  return (
    <section className="block" id="judging">
      <div className="wrap">
        <SectionHead kicker="Judging and pitching" title="Scored out of 100.">
          If there are more than about 10 entries, the top 6–8 are invited to pitch live. Every report still goes to
          the Sol team.
        </SectionHead>
        <div className="jp">
          <div className="card rubric">
            <h3>The rubric</h3>
            {rubric.map((r) => (
              <div className="row" key={r.name}>
                <span className="name">{r.name}</span>
                <span className="pts">{r.pts}</span>
                <span className="bar"><i style={{ width: `${(r.pts / 30) * 100}%` }} /></span>
              </div>
            ))}
            <div className="total"><span>Total</span><span>100</span></div>
            <p className="note">Ties go to the higher Student impact score.</p>
          </div>

          <div className="stack">
            <div className="card">
              <h3>The judges</h3>
              <div className="judges">
                <div className="judge"><span className="avatar">A</span><div><b>Amber</b><span>Founder, Sol</span></div></div>
                <div className="judge"><span className="avatar">B</span><div><b><Tbd>Name TBA</Tbd></b><span>Brodsky Institute</span></div></div>
                <div className="judge"><span className="avatar">F</span><div><b><Tbd>Name TBA</Tbd></b><span>Rider faculty</span></div></div>
              </div>
            </div>
            <div className="stats">
              <div className="stat pink"><div className="big">5<small>min</small></div><p>to pitch</p></div>
              <div className="stat"><div className="big">2<small>min</small></div><p>of Q&amp;A</p></div>
            </div>
          </div>

          <div className="card pitch-list">
            <h3>If you're a finalist</h3>
            <h4>Before the event</h4>
            <ul>
              <li>You'll hear by <Tbd>Mon, Nov 2 at 10 PM, by email</Tbd></li>
              <li>Slides: <Tbd>PDF or Google Slides, 16:9, up to 6</Tbd></li>
              <li>Send them by <Tbd>Tue, Nov 3 at noon</Tbd></li>
              <li>Judges read your submission first</li>
            </ul>
            <h4>Bring a backup</h4>
            <ul>
              <li>A screen recording of the problem</li>
              <li>Your mockup saved offline, in case Sol is down</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
