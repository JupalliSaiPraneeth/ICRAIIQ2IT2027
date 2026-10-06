import React from 'react';

export const ScientificBackground = ({ variant = 'dark', className = '' }) => {
  const isDark = variant === 'dark';

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Background Grid Texture */}
      <div className={`absolute inset-0 ${isDark ? 'scientific-grid-pattern opacity-40' : 'scientific-grid-pattern-light opacity-60'}`} />
      
      {/* Dot Matrix Overlay */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Radial Brand Glow (Electric Amber #fb9200) */}
      <div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 transition-all duration-700 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #fb9200 0%, rgba(251, 146, 0, 0) 70%)' }}
      />
      <div 
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #fb9200 0%, rgba(251, 146, 0, 0) 70%)' }}
      />

      {/* Decorative Fine Scientific Axis Crosses */}
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="crossGrid" width="160" height="160" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 80 160 M 0 80 L 160 80" stroke={isDark ? "#ffffff" : "#0f172a"} strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="80" cy="80" r="2" fill="#fb9200" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#crossGrid)" />
      </svg>
    </div>
  );
};

export default ScientificBackground;
