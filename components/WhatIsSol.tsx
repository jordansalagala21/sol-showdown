import Tbd from "./Tbd";

export default function WhatIsSol() {
  return (
    <section className="block white" id="what">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-kicker">What is Sol</span>
          <h2>A conversation that remembers you.</h2>
          <p>
            Sol pays attention, remembers what you say and asks good questions, so you can work out what's next.
            It's built for Rider students, and for the next two weeks you get to tell us where it falls short.
          </p>
        </div>

        <div className="sol-grid">
          <div className="video-card">
            <video
              src="/videos/sol-intro.mp4"
              poster="/videos/sol-intro-poster.png"
              controls
              playsInline
              preload="metadata"
            />
            <div className="video-cap">
              <h3>Meet Amber, Sol's founder</h3>
              <p>Why Sol exists and what she hopes you'll find. 1 min.</p>
            </div>
          </div>
          <div className="card">
            <h3>How it's different</h3>
            <p className="muted">You've probably used AI for homework help or quick answers. Sol is for something else.</p>
            <div className="compare">
              <div className="them"><strong>Most AI tools</strong>Answer one question, then forget you.</div>
              <div className="us"><strong>Sol</strong>Remembers your goals and asks questions to help you think.</div>
              <div className="them"><strong>Most AI tools</strong>Built for everyone.</div>
              <div className="us"><strong>Sol</strong>Being shaped right now by Rider students.</div>
            </div>
          </div>
        </div>

        <div className="trust">
          <div className="card">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
            </span>
            <div>
              <h4>Your data stays yours</h4>
              <p><Tbd>Sol doesn't take or sell student data. (Final wording from Amber.)</Tbd></p>
            </div>
          </div>
          <div className="card">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" /><path d="M9 12l2 2 4-4" /></svg>
            </span>
            <div>
              <h4>Is this legit?</h4>
              <p>
                Yes. The Brodsky Institute is running the Showdown, and you'll meet the Sol team in person on Nov 3.{" "}
                <a href="#faq">More in the FAQ</a>.
              </p>
            </div>
          </div>
          <div className="card">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7" /><path d="M18 14.7c2 .7 3.2 2.6 3.6 5.3" /></svg>
            </span>
            <div>
              <h4>Built with real people</h4>
              <p>Founded by Amber and tested with students. <Tbd>Student clips to come.</Tbd></p>
            </div>
          </div>
        </div>
        <p className="disclaimer">
          <Tbd>Sol is an independent company and is not affiliated with Rider University. (Match the Instagram bio wording.)</Tbd>
        </p>
      </div>
    </section>
  );
}
