import SectionHead from "./SectionHead";

export default function WhatIsSol() {
  return (
    <section className="block white" id="about">
      <div className="wrap">
        <SectionHead
          kicker="What is Sol"
          title="A conversation that remembers you."
        >
          Sol is an AI chatbot that pays attention, remembers what you say and
          asks good questions. It's built for students, and for the next two
          weeks you get to tell us where it falls short.
        </SectionHead>

        <div className="about">
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
              <span>1 min</span>
            </div>
          </div>

          <div className="about-side">
            <div className="card trust-list">
              <div className="trust-item">
                <span className="icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="11" width="16" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                </span>
                <div>
                  <h4>Your data stays yours</h4>
                  <p>Sol doesn't take or sell student data.</p>
                </div>
              </div>
              <div className="trust-item">
                <span className="icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <div>
                  <h4>Is this legit?</h4>
                  <p>
                    Yes. The Brodsky Institute runs the Showdown, and you'll
                    meet the Sol team on Nov 3. <a href="#faq">FAQ</a>
                  </p>
                </div>
              </div>
              <div className="trust-item">
                <span className="icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="8" r="3.5" />
                    <path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" />
                    <path d="M16 4.5a3.5 3.5 0 0 1 0 7" />
                    <path d="M18 14.7c2 .7 3.2 2.6 3.6 5.3" />
                  </svg>
                </span>
                <div>
                  <h4>Built with real people</h4>
                  <p>Founded by Amber and tested with students.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
