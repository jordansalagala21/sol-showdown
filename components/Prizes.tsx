import Tbd from "./Tbd";

const runnersUp = [
  { place: "Runner-up #1", val: "$50" },
  { place: "Runner-up #2", val: "$25" },
  { place: "Runner-up #3", val: "$25" },
];

export default function Prizes() {
  return (
    <section className="block white" id="prizes">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-kicker">Prizes</span>
          <h2>$250 in prizes.</h2>
          <p>Five Amazon gift cards, funded by the Brodsky Institute.</p>
        </div>
        <div className="prizes">
          <div className="prize first">
            <span className="place">Grand Prize</span>
            <span className="val">$100</span>
            <p>Amazon gift card for the top-scoring entry</p>
          </div>
          {runnersUp.map((p) => (
            <div className="prize" key={p.place}>
              <span className="place">{p.place}</span>
              <span className="val">{p.val}</span>
              <p>Amazon gift card</p>
            </div>
          ))}
          <div className="prize founder">
            <span className="place">Founder's Choice</span>
            <span className="val">$50</span>
            <p>Amazon gift card for the idea that best reflects Sol's vision and values</p>
          </div>
        </div>
        <p className="everyone">
          Everyone who submits gets a <Tbd>certificate of participation</Tbd> and a thank-you from the Sol team.
        </p>
      </div>
    </section>
  );
}
