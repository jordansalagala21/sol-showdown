import { site } from "@/lib/site";
import SectionHead from "./SectionHead";
import Tbd from "./Tbd";

const schedule = [
  { time: "6:00", title: "Check-in and food", note: "Enter the costume raffle" },
  { time: "6:15", title: "Welcome and Sol overview", note: "Amber" },
  { time: "6:30", title: "The fellowship", note: "Brodsky Institute" },
  { time: "6:40", title: "Finalist pitches", note: "5 min + 2 min Q&A each" },
  { time: "7:30", title: "Judges deliberate", note: "Raffle drawing, networking" },
  { time: "7:45", title: "Winners announced", note: "Closing and group photo" },
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
              {schedule.map((s) => (
                <div className="slot" key={s.time}>
                  <time>{s.time}</time>
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
              <a className="btn btn-dark" href={site.registerUrl}>register to attend</a>
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
              <div><b>6:00</b><span>Enter at check-in</span></div>
              <div><b>~7:30</b><span>Winners drawn</span></div>
              <div><b>Rules</b><span><Tbd>Campus-appropriate. No full-face masks or prop weapons.</Tbd></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
