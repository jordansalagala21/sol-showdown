import SectionHead from "./SectionHead";
import Tbd from "./Tbd";
import Contacts from "./Contacts";

const steps = [
  { state: "done", date: "Oct 19", what: "Codes go out", body: <>To participating clubs and programs.</> },
  { state: "now", date: "Oct 19 – Nov 2", what: "Explore and build", body: <>Use Sol, log what breaks, sketch a fix.</> },
  { state: "", date: "Mon, Nov 2", what: "Submissions due", body: <>By <Tbd>11:59 PM</Tbd>, through the form.</> },
  { state: "", date: "Tue, Nov 3", what: "Showdown", body: <>Finalists pitch at the Pub. Winners that night.</> },
];

export default function Timeline() {
  return (
    <section className="block white" id="timeline">
      <div className="wrap">
        <SectionHead kicker="Timeline" title="Two weeks, start to finish." />
        <div className="timeline-wrap">
          <div className="card timeline">
            {steps.map((s) => (
              <div className={`tl ${s.state}`} key={s.date}>
                <div className="dot" />
                <div className="date">{s.date}</div>
                <div className="what">{s.what}</div>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <div className="card code-card">
            <h3>Need an access code?</h3>
            <div className="groups">
              {["Clubs", "EOP", "Bonner", "Brodsky fellows", "Greek life"].map((g) => <span key={g}>{g}</span>)}
            </div>
            <p>Not in one of these groups? Email <Contacts />, and we'll send one within a day.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
