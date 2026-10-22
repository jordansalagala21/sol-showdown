import Tbd from "./Tbd";

const ideaTypes = [
  { title: "Technical", body: "New features, fixes and smarter ways for Sol to work." },
  { title: "Educational", body: "Ways Sol could help with classes, advising or careers." },
  { title: "Business", body: "Ways to get more students using it and keep them coming back." },
];

export default function Rules() {
  return (
    <section className="block" id="rules">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-kicker">What's accepted</span>
          <h2>Any kind of good idea.</h2>
        </div>
        <div className="idea-types">
          {ideaTypes.map((t) => (
            <div className="card" key={t.title}>
              <h3>{t.title}</h3>
              <p className="muted">{t.body}</p>
            </div>
          ))}
        </div>
        <div className="rules">
          <div className="rule"><h4>File formats</h4><p><Tbd>PDF, PNG, JPG, Figma or Canva links, up to 25 MB</Tbd></p></div>
          <div className="rule"><h4>AI tools for mockups</h4><p><Tbd>Allowed. Just tell us which tool you used.</Tbd></p></div>
          <div className="rule"><h4>Solo or team</h4><p><Tbd>To be confirmed</Tbd></p></div>
          <div className="rule"><h4>Used Sol before Oct 19?</h4><p><Tbd>To be confirmed</Tbd></p></div>
        </div>
      </div>
    </section>
  );
}
