// CupIllustration
// ---------------------------------------------------------------------------
// A small hand-drawn-feeling SVG cup used everywhere in place of photography.
// The cup's liquid color changes per drink "category" so the whole menu
// reads as one illustrated family instead of mismatched stock photos.
// "temp" controls whether we draw rising steam (hot) or ice cubes (cold).

const CATEGORY_COLORS = {
  green: '#9DB98B',
  herbal: '#E9D9A8',
  black: '#8A5F3F',
  spice: '#C9986A',
  fruit: '#E8A9B8',
  milk: '#EAD9BE',
  chocolate: '#6B4429',
};

function CupIllustration({ category = 'green', temp = 'hot', className = '', animated = true }) {
  const liquidColor = CATEGORY_COLORS[category] || CATEGORY_COLORS.green;

  return (
    <svg
      viewBox="0 0 160 160"
      className={`cup-illustration ${animated ? 'cup-illustration--animated' : ''} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${category} drink illustration`}
    >
      {/* Saucer */}
      <ellipse cx="80" cy="128" rx="52" ry="9" fill="#E6D3B8" />

      {/* Cup body */}
      <path
        d="M40 62 h68 v34 a34 34 0 0 1 -34 34 h0 a34 34 0 0 1 -34 -34 z"
        fill="#FFFFFF"
        stroke="#E6D3B8"
        strokeWidth="3"
      />

      {/* Liquid */}
      <path d="M46 68 h56 v14 h-56 z" fill={liquidColor} opacity="0.9" />

      {/* Handle */}
      <path
        d="M108 74 q22 2 22 20 q0 18 -22 20"
        fill="none"
        stroke="#E6D3B8"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Steam or ice */}
      {temp === 'hot' ? (
        <g className="cup-steam" stroke="#C9986A" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.55">
          <path className="steam-path steam-1" d="M64 50 q-6 -10 0 -18" />
          <path className="steam-path steam-2" d="M80 50 q6 -10 0 -18" />
          <path className="steam-path steam-3" d="M96 50 q-6 -10 0 -18" />
        </g>
      ) : (
        <g opacity="0.85">
          <rect x="58" y="72" width="12" height="12" rx="3" fill="#FFFFFF" stroke="#DCC9AE" strokeWidth="2" />
          <rect x="88" y="76" width="12" height="12" rx="3" fill="#FFFFFF" stroke="#DCC9AE" strokeWidth="2" />
        </g>
      )}
    </svg>
  );
}

export default CupIllustration;
