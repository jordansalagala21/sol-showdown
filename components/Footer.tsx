import { site, ext } from "@/lib/site";
import Logos from "./Logos";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <h2>Submissions due Mon, Nov 2 at 6 PM.</h2>
            <div className="cta-row">
              <a className="btn btn-pink" href="#start">get started</a>
              <a className="btn btn-ghost" href={site.registerUrl} target="_blank" rel="noopener">register</a>
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
            <div className="social">
              <a className="ig-link" href={site.instagramUrl} {...ext} aria-label={`Sol on Instagram, ${site.instagramHandle}`}>
                <svg className="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                {site.instagramHandle}
              </a>
              <span className="dot" aria-hidden="true">·</span>
              <a href={site.solUrl} {...ext}>heysol.app</a>
            </div>
          </div>
          <div>
            <h4>Organized by</h4>
            <Logos />
          </div>
        </div>
        <div className="foot-bottom">
          <a className="brand" href="#top"><span className="orb" aria-hidden="true" />sol showdown</a>
        </div>
      </div>
    </footer>
  );
}
