import { site, ext } from "@/lib/site";
import Logos from "./Logos";
import Tbd from "./Tbd";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-cta">
          <h2>Submissions due Mon, Nov 2.</h2>
          <div className="cta-row">
            <a className="btn btn-pink" href={site.solUrl} {...ext}>try sol</a>
            <a className="btn btn-ghost lg" href={site.registerUrl}>register</a>
          </div>
        </div>
        <div className="foot-grid">
          <div>
            <a className="brand" href="#top"><span className="orb" aria-hidden="true" />sol showdown</a>
            <Logos />
          </div>
          <div>
            <h4>Questions</h4>
            <p>
              Lakshitha, event lead<br />
              <a href={`mailto:${site.contactEmail}`}><Tbd>{site.contactEmail}</Tbd></a>
            </p>
          </div>
          <div>
            <h4>Follow Sol</h4>
            <p>
              <a href={site.instagramUrl} {...ext}><Tbd>{site.instagramHandle}</Tbd></a><br />
              <a href={site.solUrl} {...ext}>heysol.app</a>
            </p>
          </div>
        </div>
        <p className="fine">
          <Tbd>Sol is an independent company and is not affiliated with Rider University.</Tbd> Organized by the
          Brodsky Institute.
        </p>
      </div>
    </footer>
  );
}
