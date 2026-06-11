export const GlassSvgDefs = () => (
  <svg className="glass-filter-defs" aria-hidden="true">
    <defs>
      <filter id="liquid-glass-btn" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.02 0.03"
          numOctaves="2"
          seed="5"
          result="noise"
        />
        <feGaussianBlur in="noise" stdDeviation="1.5" result="blurredNoise" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="blurredNoise"
          scale="28"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
  </svg>
);
