import Tbd from "./Tbd";

const steps = [
  { state: "done", date: "Oct 19", what: "Access codes go out", body: <>Codes go to participating clubs and programs.</> },
  { state: "now", date: "Oct 19 – Nov 2", what: "Explore and build", body: <>Use Sol, log what breaks, and sketch your fix.</> },
  { state: "", date: "Mon, Nov 2", what: "Submissions due", body: <>By <Tbd>11:59 PM</Tbd>, through the submission form.</> },
  { state: "", date: "Tue, Nov 3", what: "Event and winners", body: <>Finalists pitch live at 6:00 PM at the Pub, and winners are announced that night.</> },
];

export default function Timeline() {
  return (
    <section className="block" id="timeline">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-kicker">Timeline</span>
          <h2>Two weeks, start to finish.</h2>
        </div>
        <div className="timeline">
          {steps.map((s) => (
            <div className={`tl ${s.state}`} key={s.date}>
              <div className="dot" />
              <div className="date">{s.date}</div>
              <div className="what">{s.what}</div>
              <p>{s.body}</p>
            </div>
          ))}
        </div>

        <div className="callout">
          <div>
            <h4>Not in one of these groups? You can still play.</h4>
            <div className="groups">
              {["Clubs", "EOP", "Bonner", "Brodsky fellows", "Greek life"].map((g) => <span key={g}>{g}</span>)}
            </div>
            <p><Tbd>How to get a code: email Lakshitha or fill out the request form, and we'll send one within a day.</Tbd></p>
          </div>
        </div>
      </div>
    </section>
  );
}
