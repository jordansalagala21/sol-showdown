import { site } from "@/lib/site";

const schedule = [
  { time: "6:00", title: "Check-in and food", note: "Grab food and enter the costume raffle." },
  { time: "6:15", title: "Welcome and Sol overview", note: "Amber" },
  { time: "6:30", title: "The fellowship", note: "Brodsky Institute" },
  { time: "6:40", title: "Finalist pitches", note: "5 minutes plus 2 minutes of Q&A each" },
  { time: "7:30", title: "Judges deliberate", note: "Raffle drawing and networking" },
  { time: "7:45", title: "Winners announced", note: "Closing and group photo" },
];

export default function EventNight() {
  return (
    <section className="block" id="event">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-kicker">Event night · Tue, Nov 3</span>
          <h2>What happens on the night.</h2>
          <p>Anyone can come, whether you submitted or not.</p>
        </div>
        <div className="sched">
          <div className="card">
            {schedule.map((s) => (
              <div className="slot" key={s.time}>
                <time>{s.time}</time>
                <div><h4>{s.title}</h4><p>{s.note}</p></div>
              </div>
            ))}
          </div>
          <div className="card venue">
            {/* Replace with <Image src={pub} alt="The Pub" /> once there's a photo */}
            <div className="map">Photo or map of the Pub</div>
            <h3>The Pub</h3>
            <p className="muted">Tue, Nov 3 · Doors open at 6:00 PM</p>
            <a className="btn btn-dark" href={site.registerUrl}>register to attend</a>
          </div>
        </div>
      </div>
    </section>
  );
}
