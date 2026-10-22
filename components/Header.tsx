import { site } from "@/lib/site";

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
          <a href="#start">How to take part</a>
          <a href="#event">Event night</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="top-actions">
          <a className="btn btn-ghost" href="#start">get started</a>
          <a className="btn btn-dark" href={site.registerUrl} target="_blank" rel="noopener">register</a>
        </div>
      </div>
    </header>
  );
}
