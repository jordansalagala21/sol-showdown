import Tbd from "./Tbd";

export default function Raffle() {
  return (
    <section className="block" id="raffle">
      <div className="wrap">
        <div className="raffle">
          <div>
            <span className="sec-kicker">Costume raffle</span>
            <h2>Come dressed up. Win something.</h2>
            <p>Costumes are optional. If you show up in one, you're entered in the raffle.</p>
            <p className="small">Prize: <Tbd>TBA</Tbd></p>
          </div>
          <div className="raffle-steps">
            <div><b>6:00 PM · Enter at check-in</b><span>Show your costume when you arrive.</span></div>
            <div><b>~7:30 PM · Drawing</b><span>Winners are drawn while the judges deliberate.</span></div>
            <div>
              <b>Costume guidelines</b>
              <span><Tbd>Keep it campus-appropriate: no masks covering your whole face and no props that look like weapons.</Tbd></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
