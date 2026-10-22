import { site, ext } from "@/lib/site";
import Logos from "./Logos";
import Tbd from "./Tbd";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <h2>Submissions due Mon, Nov 2.</h2>
            <div className="cta-row">
              <a className="btn btn-pink" href={site.solUrl} {...ext}>try sol</a>
              <a className="btn btn-ghost" href={site.registerUrl}>register</a>
            </div>
          </div>
          <div>
            <h4>Questions</h4>
            <p>
              {site.contacts.map((c) => (
                <span key={c.email}>
                  {c.name}<br />
                  <a href={`mailto:${c.email}`}>{c.email}</a><br />
                </span>
              ))}
            </p>
            <h4>Follow Sol</h4>
            <p>
              <a href={site.instagramUrl} {...ext}><Tbd>{site.instagramHandle}</Tbd></a> ·{" "}
              <a href={site.solUrl} {...ext}>heysol.app</a>
            </p>
          </div>
          <div>
            <h4>Organized by</h4>
            <Logos />
          </div>
        </div>
        <div className="foot-bottom">
          <a className="brand" href="#top"><span className="orb" aria-hidden="true" />sol showdown</a>
          <span><Tbd>Sol is an independent company and is not affiliated with Rider University.</Tbd></span>
        </div>
      </div>
    </footer>
  );
}
