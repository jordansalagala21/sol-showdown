import { site, ext } from "@/lib/site";

export default function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <a className="brand" href="#top">
          <span className="orb" aria-hidden="true" />
          sol <small>showdown</small>
        </a>
        <nav className="links" aria-label="Sections">
          <a href="#about">About Sol</a>
          <a href="#challenge">The challenge</a>
          <a href="#judging">Judging</a>
          <a href="#event">Event night</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="top-actions">
          <a className="btn btn-ghost" href={site.solUrl} {...ext}>try sol</a>
          <a className="btn btn-dark" href={site.registerUrl}>register</a>
        </div>
      </div>
    </header>
  );
}
