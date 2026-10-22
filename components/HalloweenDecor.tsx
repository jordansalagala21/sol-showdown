// Halloween decorations for the hero: cobwebs, dangling spiders, flying bats,
// jack-o'-lanterns and low fog. Pure SVG + CSS, purely decorative.

function Bat() {
  return (
    <svg viewBox="0 0 64 28" className="bat-svg">
      <path d="M32 9 C28 4 20 2 11 4 C14 6 15 9 14 12 C11 10 6 10 1 12 C6 14 9 18 9 22 C13 19 18 18 22 20 C23 17 26 15 29 16 L32 19 L35 16 C38 15 41 17 42 20 C46 18 51 19 55 22 C55 18 58 14 63 12 C58 10 53 10 50 12 C49 9 50 6 53 4 C44 2 36 4 32 9 Z" />
      <path d="M29.5 9.5 L30.3 5.5 L31.6 8.6 Z M32.4 8.6 L33.7 5.5 L34.5 9.5 Z" />
    </svg>
  );
}

function Spider() {
  return (
    <svg viewBox="0 0 40 40" className="spider-svg">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M14 18 Q8 12 4 13 M13 22 Q7 21 2 24 M14 25 Q9 29 5 34 M26 18 Q32 12 36 13 M27 22 Q33 21 38 24 M26 25 Q31 29 35 34" />
      </g>
      <circle cx="20" cy="23" r="7.5" fill="currentColor" />
      <circle cx="20" cy="13.5" r="4.5" fill="currentColor" />
      <circle cx="18.4" cy="13" r="1.1" fill="#fff" />
      <circle cx="21.6" cy="13" r="1.1" fill="#fff" />
    </svg>
  );
}

function Pumpkin() {
  return (
    <svg viewBox="0 0 64 58" className="pumpkin-svg">
      <path d="M31 10 C31 5 33 2 37 1" stroke="#3E6B2F" strokeWidth="4" strokeLinecap="round" fill="none" />
      <ellipse cx="20" cy="34" rx="15" ry="20" fill="#E8741E" />
      <ellipse cx="44" cy="34" rx="15" ry="20" fill="#E8741E" />
      <ellipse cx="32" cy="34" rx="15" ry="22" fill="#F5862A" />
      <g className="pumpkin-face" fill="#FFD25A">
        <path d="M18 27 L25 27 L21.5 21 Z" />
        <path d="M39 27 L46 27 L42.5 21 Z" />
        <path d="M29.5 33 L34.5 33 L32 29 Z" />
        <path d="M15 38 Q32 52 49 38 L45 39 L43 43 L40 40 L36 44 L32 41 L28 44 L24 40 L21 43 L19 39 Z" />
      </g>
    </svg>
  );
}

function Cobweb({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 160 160" className={`cobweb ${className}`} fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M0 0 L160 4 M0 0 L150 62 M0 0 L110 112 M0 0 L58 152 M0 0 L4 160" />
      <path d="M40 1 Q34 12 37 15 Q30 24 29 28 Q20 33 15 38 Q8 38 1 40" />
      <path d="M80 2 Q68 22 74 31 Q61 48 58 56 Q41 66 30 76 Q17 76 2 80" />
      <path d="M120 3 Q102 34 111 46 Q92 72 87 84 Q62 99 44 114 Q25 114 3 120" />
    </svg>
  );
}

export default function HalloweenDecor() {
  return (
    <div className="halloween" aria-hidden="true">
      <div className="spooky-glow" />
      <Cobweb className="web-left" />
      <Cobweb className="web-right" />

      <div className="spider sp1"><span className="thread" /><Spider /></div>
      <div className="spider sp2"><span className="thread" /><Spider /></div>

      {[1, 2, 3, 4, 5].map((n) => (
        <div key={n} className={`bat b${n}`}>
          <div className="bat-bob"><Bat /></div>
        </div>
      ))}

      <div className="pumpkin pk1"><Pumpkin /></div>
      <div className="pumpkin pk2"><Pumpkin /></div>

      <div className="fog"><span /><span /></div>
    </div>
  );
}
