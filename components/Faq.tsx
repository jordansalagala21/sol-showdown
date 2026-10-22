import { site } from "@/lib/site";
import Tbd from "./Tbd";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is this legit?",
    a: (
      <>
        <p>
          Yes. The Sol Showdown is organized by the Brodsky Institute and supported by D.A.IS. Codes came
          through your club or program, not from a random message, and you'll meet the Sol team in person on Nov 3.
        </p>
        <p>
          <Tbd>Sol is not affiliated with Rider University.</Tbd> If you're unsure about a message, contact
          Lakshitha directly (details below).
        </p>
      </>
    ),
  },
  { q: "Do I need to know how to code?", a: <p>No. A hand sketch, a Canva screen or an AI-generated mockup all work. Code is welcome but never required.</p> },
  { q: "Can I use AI tools?", a: <p><Tbd>Yes, for mockups. Just tell us which tool you used.</Tbd></p> },
  { q: "Can I enter as a team?", a: <p><Tbd>To be confirmed.</Tbd></p> },
  { q: "Who owns my ideas?", a: <p><Tbd>Covered in the participant agreement, which you'll see before you submit. Final wording coming soon.</Tbd></p> },
  { q: "Can I share what I see in Sol?", a: <p><Tbd>Sol is in a private pilot, so please don't post screenshots or details publicly. The participant agreement covers the specifics.</Tbd></p> },
  {
    q: "Can I come to the event without submitting?",
    a: (
      <p>
        Yes. Come for the food, the pitches and the costume raffle. Just <a href={site.registerUrl}>register</a> so
        we know how many people to plan for.
      </p>
    ),
  },
  { q: "I'm not in a listed group. How do I get a code?", a: <p><Tbd>Email Lakshitha or use the request form and we'll send you one.</Tbd></p> },
];

export default function Faq() {
  return (
    <section className="block white" id="faq">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-kicker">FAQ</span>
          <h2>Questions, answered.</h2>
        </div>
        <div className="faq">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <div className="ans">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
