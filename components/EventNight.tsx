import { site } from "@/lib/site";
import SectionHead from "./SectionHead";
import Tbd from "./Tbd";

const schedule = [
  { title: "Check-in and food", note: "Enter the costume raffle" },
  { title: "Welcome and Sol overview", note: "Amber" },
  { title: "The fellowship", note: "Brodsky Institute" },
  { title: "Finalist pitches", note: "5 min + 2 min Q&A each" },
  { title: "Judges deliberate", note: "Raffle drawing, networking" },
  { title: "Winners announced", note: "Closing and group photo" },
];

export default function EventNight() {
  return (
    <section className="block white" id="event">
      <div className="wrap">
        <SectionHead kicker="Event night · Tue, Nov 3" title="What happens on the night.">
          Anyone can come, whether you submitted or not.
        </SectionHead>
        <div className="event">
          <div className="card">
            <div className="sched">
              {schedule.map((s, i) => (
                <div className="slot" key={s.title}>
                  <span className="num">{i + 1}</span>
                  <div><h4>{s.title}</h4><p>{s.note}</p></div>
                </div>
              ))}
            </div>
            <div className="sched-foot">
              <div className="venue">
                <span className="pin">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
                </span>
                <div><b>The Pub</b><br /><span className="muted small">Doors open 6:00 PM</span></div>
              </div>
              <a className="btn btn-dark" href={site.registerUrl} target="_blank" rel="noopener">register to attend</a>
            </div>
          </div>

          <div className="raffle dark">
            <span className="spark s1" aria-hidden="true">✦</span>
            <span className="spark s2" aria-hidden="true">✦</span>
            <span className="spark s3" aria-hidden="true">✦</span>
            <span className="kicker">Costume raffle</span>
            <h3>Come dressed up. Win something.</h3>
            <p>Costumes are optional. Show up in one and you're entered. Prize: <Tbd>TBA</Tbd></p>
            <div className="raffle-steps">
              <div><b>Enter</b><span>At check-in</span></div>
              <div><b>Draw</b><span>Later in the night</span></div>
              <div><b>Rules</b><span><Tbd>Campus-appropriate. No full-face masks or prop weapons.</Tbd></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
