import Tbd from "./Tbd";

const ideaTypes = [
  { title: "Technical", body: "New features, fixes and smarter ways for Sol to work." },
  { title: "Educational", body: "Ways Sol could help with classes, advising or careers." },
  { title: "Business", body: "Ways to get more students using it and coming back." },
];

export default function Rules() {
  return (
    <div className="accepted">
      <div className="card">
        <h3>Any kind of good idea</h3>
        <div className="idea-list">
          {ideaTypes.map((t) => (
            <div key={t.title}><b>{t.title}</b><span>{t.body}</span></div>
          ))}
        </div>
      </div>
      <div className="card">
        <h3>The fine print</h3>
        <div className="rules">
          <div className="rule"><h4>File formats</h4><p><Tbd>PDF, PNG, JPG, Figma or Canva links, up to 25 MB</Tbd></p></div>
          <div className="rule"><h4>AI tools for mockups</h4><p><Tbd>Allowed. Just tell us which tool you used.</Tbd></p></div>
          <div className="rule"><h4>Solo or team</h4><p><Tbd>To be confirmed</Tbd></p></div>
          <div className="rule"><h4>Used Sol before Oct 19?</h4><p><Tbd>To be confirmed</Tbd></p></div>
        </div>
      </div>
    </div>
  );
}
