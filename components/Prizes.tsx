import SectionHead from "./SectionHead";
import CountUp from "./CountUp";

const runnersUp = [
  { place: "Runner-up #1", val: 50 },
  { place: "Runner-up #2", val: 25 },
  { place: "Runner-up #3", val: 25 },
];

export default function Prizes() {
  return (
    <section className="block" id="prizes">
      <div className="wrap">
        <SectionHead kicker="Prizes" title="$250 in prizes.">
          Five Amazon gift cards, funded by the Brodsky Institute.
        </SectionHead>
        <div className="prizes">
          <div className="prize first">
            <span className="place">Grand Prize</span>
            <span className="val"><CountUp to={100} prefix="$" /></span>
            <p>Amazon gift card for the top-scoring entry</p>
          </div>
          {runnersUp.map((p) => (
            <div className="prize" key={p.place}>
              <span className="place">{p.place}</span>
              <span className="val"><CountUp to={p.val} prefix="$" /></span>
              <p>Amazon gift card</p>
            </div>
          ))}
          <div className="prize founder">
            <span className="place">Founder's Choice</span>
            <span className="val"><CountUp to={50} prefix="$" /></span>
            <p>For the idea that best reflects Sol's vision and values</p>
          </div>
        </div>
      </div>
    </section>
  );
}
