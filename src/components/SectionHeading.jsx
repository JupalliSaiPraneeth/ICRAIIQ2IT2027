import React from 'react';

export const SectionHeading = ({
  number,
  eyebrow,
  title,
  subtitle,
  align = 'center',
  variant = 'dark',
  className = ''
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`mb-12 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : align === 'right' ? 'ml-auto text-right' : 'text-left'} ${className}`}>
      {/* Numbered Eyebrow Badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider mb-4 border ${
        isDark 
          ? 'bg-navy-900/80 border-brand-500/30 text-brand-400' 
          : 'bg-brand-50 border-brand-500/30 text-brand-700'
      }`}>
        {number && <span className="text-brand-500 font-extrabold">{number}</span>}
        {number && eyebrow && <span>/</span>}
        <span>{eyebrow?.toUpperCase()}</span>
      </div>

      {/* Main Section Title */}
      <h2 className={`text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight ${
        isDark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>

      {/* Subtitle / Description */}
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}

      {/* Accent Divider Line */}
      <div className={`h-1 w-16 rounded-full mt-6 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : 'mr-auto'} bg-gradient-to-r from-brand-500 to-amber-300`} />
    </div>
  );
};

export default SectionHeading;
