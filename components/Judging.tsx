import Tbd from "./Tbd";

const rubric = [
  { name: "Student impact", pts: 30, desc: "Does it solve a real problem students have?" },
  { name: "Quality of weakness findings", pts: 20, desc: "Specific, reproducible and clearly explained" },
  { name: "Feasibility", pts: 20, desc: "Could the Sol team realistically build it?" },
  { name: "Clarity of design", pts: 15, desc: "Can we tell how it works from your mockup?" },
  { name: "Pitch", pts: 15, desc: "Clear, convincing and on time (finalists only)" },
];

export default function Judging() {
  return (
    <section className="block" id="judging">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-kicker">How judging works</span>
          <h2>Scored out of 100.</h2>
          <p>Ties go to the entry with the higher Student impact score.</p>
        </div>
        <div className="judge-grid">
          <div className="card rubric">
            {rubric.map((r) => (
              <div className="row" key={r.name}>
                <span className="name">{r.name}</span>
                <span className="pts">{r.pts}</span>
                <span className="bar"><i style={{ width: `${(r.pts / 30) * 100}%` }} /></span>
                <span className="desc">{r.desc}</span>
              </div>
            ))}
            <div className="total"><span>Total</span><span>100</span></div>
          </div>
          <div>
            <div className="card">
              <h3>The judges</h3>
              <div className="judges">
                <div className="judge"><span className="avatar">A</span><div><b>Amber</b><span>Founder, Sol</span></div></div>
                <div className="judge"><span className="avatar">B</span><div><b><Tbd>Name TBA</Tbd></b><span>Brodsky Institute</span></div></div>
                <div className="judge"><span className="avatar">F</span><div><b><Tbd>Name TBA</Tbd></b><span>Rider faculty</span></div></div>
              </div>
            </div>
            <div className="card" style={{ marginTop: 20 }}>
              <h3>From entry to finalist</h3>
              <p>If there are more than about 10 entries, judges invite the top 6–8 to pitch live.</p>
              <p className="muted">Every report still goes to the Sol team, so whatever you find gets read either way.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
