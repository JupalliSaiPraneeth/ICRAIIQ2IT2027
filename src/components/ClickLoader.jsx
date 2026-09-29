import React, { useState, useEffect, useRef } from 'react';

/**
 * ClickLoader Component
 * Triggers a 2-second fullscreen brand overlay with Dr. RVR NRIIT logo pulse
 * and liquid shimmer wave sheen animation on user clicks.
 */
export const ClickLoader = ({ enabled = true, duration = 1000 }) => {
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const handleClick = (e) => {
      // Avoid re-triggering if clicking on the active overlay itself
      if (e.target.closest('#nriit-loading-overlay')) return;

      setIsActive(true);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setIsActive(false);
      }, duration);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [enabled, duration]);

  if (!enabled) return null;

  return (
    <>
      <style>{`
        @keyframes nriitLogoPulse {
          0% {
            transform: scale(0.97);
            filter: drop-shadow(0 2px 8px rgba(234, 88, 12, 0.25));
          }
          100% {
            transform: scale(1.03);
            filter: drop-shadow(0 10px 24px rgba(234, 88, 12, 0.5));
          }
        }

        @keyframes nriitWaveSheen {
          0% {
            left: -130%;
          }
          100% {
            left: 160%;
          }
        }

        @keyframes nriitBarSlide {
          0% {
            left: -50%;
          }
          100% {
            left: 100%;
          }
        }

        .nriit-shimmer-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          left: -150%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            115deg,
            rgba(255, 255, 255, 0) 15%,
            rgba(255, 255, 255, 0.85) 50%,
            rgba(255, 255, 255, 0) 85%
          );
          transform: skewX(-25deg);
          animation: nriitWaveSheen 0.85s infinite cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }
      `}</style>

      <div
        id="nriit-loading-overlay"
        role="status"
        aria-hidden={!isActive}
        className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white/94 backdrop-blur-md transition-opacity duration-250 ease-in-out ${
          isActive
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="nriit-shimmer-wrapper relative inline-block overflow-hidden rounded-2xl bg-white p-5 shadow-xl border border-orange-100">
          <img
            src="/nrilogo.png"
            alt="Dr. RVR NRI Institute of Technology Logo"
            className="w-72 max-w-[85vw] h-auto block select-none"
            style={{
              animation: 'nriitLogoPulse 1.2s ease-in-out infinite alternate',
            }}
          />
        </div>

        {/* Bottom Accent Bar */}
        <div className="relative mt-5 h-1 w-52 overflow-hidden rounded-full bg-orange-100">
          <div
            className="absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C]"
            style={{
              animation: 'nriitBarSlide 1s infinite ease-in-out',
            }}
          />
        </div>

        <div className="mt-3 text-xs font-bold uppercase tracking-wider text-[#EA580C]">
          Dr RVR NRIIT • ICRAIIQ2IT 2027
        </div>
      </div>
    </>
  );
};

export default ClickLoader;
