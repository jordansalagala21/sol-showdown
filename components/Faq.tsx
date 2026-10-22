import { site } from "@/lib/site";
import SectionHead from "./SectionHead";
import Tbd from "./Tbd";
import Contacts from "./Contacts";

type Faq = { q: string; a: React.ReactNode };

const faqs: Faq[] = [
  {
    q: "Is this legit?",
    a: (
      <>
        <p>
          Yes. The Sol Showdown is organized by the Brodsky Institute and supported by D.A.IS. Codes came through your
          club or program, and you'll meet the Sol team in person on Nov 3.
        </p>
        <p><Tbd>Sol is not affiliated with Rider University.</Tbd> Unsure about a message? Email <Contacts /> directly.</p>
      </>
    ),
  },
  { q: "Do I need to know how to code?", a: <p>No. A hand sketch, a Canva screen or an AI-generated mockup all work.</p> },
  { q: "Can I use AI tools?", a: <p><Tbd>Yes, for mockups. Just tell us which tool you used.</Tbd></p> },
  { q: "Can I participate alone or with a team?", a: <p>You can participate individually or as a team of up to 3 members.</p> },
  {
    q: "What format should my submission be in?",
    a: (
      <p>
        Submit one presentation using PowerPoint, Google Slides or Canva. Your slides must include your Weakness
        Report, Improvement Proposal and Mock-up or Prototype, along with any supporting screenshots or examples.
      </p>
    ),
  },
  {
    q: "Can I come without submitting?",
    a: <p>Yes. Come for the food, pitches and costume raffle. Just <a href={site.registerUrl} target="_blank" rel="noopener">register</a> so we can plan.</p>,
  },
  { q: "How do I get a code?", a: <p>Email <Contacts />, and we'll send you one within a day.</p> },
];

const half = Math.ceil(faqs.length / 2);

function Column({ items }: { items: Faq[] }) {
  return (
    <div className="faq-col">
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <div className="ans">{f.a}</div>
        </details>
      ))}
    </div>
  );
}

export default function Faq() {
  return (
    <section className="block white" id="faq">
      <div className="wrap">
        <SectionHead kicker="FAQ" title="Questions, answered." />
        <div className="faq">
          <Column items={faqs.slice(0, half)} />
          <Column items={faqs.slice(half)} />
        </div>
      </div>
    </section>
  );
}
