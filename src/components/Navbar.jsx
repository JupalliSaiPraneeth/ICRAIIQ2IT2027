import React, { useState, useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Download, ExternalLink } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

const DEFAULT_SHORT_TITLE = 'ICRAIQ2IT - 2027';
const DEFAULT_TITLE =
  '5th International Conference on Recent Advancements in Artificial Intelligence, Quantum Intelligence and Inclusive Technologies';

const NAV_PRIMARY = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'COMMITTEES', to: '/committee' },
  { label: 'LOCATION', to: '/venue' },
  { label: 'CALL FOR PAPERS', to: '/call-for-papers' },
  { label: 'REGISTRATION', to: '/registration' },
  { label: 'AWARDS', to: '/awards' },
  { label: 'ACCOMMODATION', to: '/accommodation' },
  { label: 'CONTACT US', to: '/contact' },
];

const NAV_SECONDARY = [
  { label: 'GALLERY', to: '/gallery' },
  { label: 'PREVIOUS PROCEEDINGS', to: '/previous-proceedings' },
  { label: 'BROCHURE', to: '/brochure' },
];

function getDataValue(value, fallback) {
  return value === undefined || value === null || value === ''
    ? fallback
    : value;
}

const formatWithSuperscript = (text) => {
  if (typeof text !== 'string') return text;
  const parts = text.split(/(5th)/gi);
  if (parts.length === 1) return text;
  return parts.map((part, index) =>
    part.toLowerCase() === '5th' ? (
      <span key={index}>
        5<sup>th</sup>
      </span>
    ) : (
      part
    )
  );
};

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const data = conferenceData || {};

  const conferenceTitle = getDataValue(data.title, DEFAULT_TITLE);
  const conferenceShortTitle = getDataValue(
    data.shortTitle || data.acronym,
    DEFAULT_SHORT_TITLE
  );
  const titleParts = useMemo(() => {
    const splitKey = 'and Inclusive Technologies';
    const splitIndex = conferenceTitle.indexOf(splitKey);

    if (splitIndex === -1) {
      return { firstLine: conferenceTitle, secondLine: '' };
    }

    return {
      firstLine: conferenceTitle.slice(0, splitIndex).trim(),
      secondLine: splitKey,
    };
  }, [conferenceTitle]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    const previousBodyOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeMobileMenu();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }

    return location.pathname === path;
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 transition-[box-shadow,background-color] duration-200 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(15,23,42,0.08)]'
          : 'bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)]'
        }`}
    >

      {/* Compact title, logo and menu for mobile/tablet */}
      <div className="mx-auto flex max-w-[1500px] items-center gap-3 px-3 py-1.5 sm:px-6 sm:py-2 lg:px-8 xl:hidden">
        <Link
          to="/"
          aria-label="NRI Institute of Technology Home"
          className="shrink-0 flex items-center"
        >
          <img
            src="/nrilogo.png"
            alt="NRI Institute of Technology Logo"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </Link>
        <div className="h-8 w-px bg-slate-200 shrink-0" aria-hidden="true" />
        <Link
          to="/"
          aria-label={`${conferenceShortTitle} home`}
          className="group min-w-0 flex-1 text-left"
        >
          <div className="text-base sm:text-lg font-extrabold leading-tight tracking-[-0.02em] text-[#1D315F]">
            {conferenceShortTitle}
          </div>
          <div className="mt-0.5 flex items-center justify-start gap-1.5 text-[10px] font-extrabold uppercase tracking-wide text-[#EA580C] sm:text-[11px]">
            <span>April 9-10</span>
            <span className="text-slate-300 font-normal">|</span>
            <span>Vijayawada</span>
            <span className="text-slate-300 font-normal">|</span>
            <span>India</span>
          </div>
        </Link>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open navigation menu"
          className="inline-flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#1D315F] shadow-sm transition-colors hover:border-[#F59E0B] hover:bg-[#FFF7E6] hover:text-[#E87500] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Full conference title layout with Prominent Institution Logo for laptop and monitor screens */}
      <div className="hidden py-2 xl:block">
        <div className="mx-auto w-full max-w-[1680px] 2xl:max-w-[1780px] px-6 lg:px-8 2xl:px-10">
          <div className="flex w-full items-center justify-between gap-5 xl:gap-8 min-h-[82px] 2xl:min-h-[92px]">
            {/* Prominent Host Institution Logo (Parallel to HOME on the left) */}
            <div className="shrink-0 flex items-center">
              <Link
                to="/"
                aria-label="NRI Institute of Technology Home"
                className="flex items-center group transition-transform duration-200 hover:scale-105"
              >
                <img
                  src="/nrilogo.png"
                  alt="NRI Institute of Technology Logo"
                  className="h-[78px] xl:h-[84px] 2xl:h-[92px] w-auto object-contain drop-shadow-xs"
                />
              </Link>
            </div>

            {/* Conference Title (Spans across parallel to the navbar components) */}
            <Link
              to="/"
              aria-label={`${conferenceShortTitle} home`}
              className="group flex-1 min-w-0 text-center px-2"
            >
              <h1 className="text-[19px] xl:text-[21px] 2xl:text-[24.5px] font-extrabold leading-snug tracking-[0.012em] 2xl:tracking-[0.018em] text-[#1D315F]">
                {titleParts.secondLine ? (
                  <>
                    <span className="block whitespace-nowrap">
                      {formatWithSuperscript(titleParts.firstLine)}
                    </span>
                    <span className="mt-0.5 inline-flex flex-wrap items-center justify-center gap-2">
                      <span>{titleParts.secondLine}</span>
                      <span className="inline-flex items-center rounded-full border border-[#F59E0B] bg-[#FFF7E6] px-3.5 py-0.5 text-[0.74em] font-black tracking-[0.03em] text-[#E87500] shadow-sm transition-colors group-hover:bg-[#F59E0B] group-hover:text-white">
                        {conferenceShortTitle}
                      </span>
                    </span>
                  </>
                ) : (
                  <>
                    {formatWithSuperscript(conferenceTitle)}
                    <span className="ml-2 inline-flex items-center rounded-full border border-[#F59E0B] bg-[#FFF7E6] px-3.5 py-0.5 text-[0.74em] font-black tracking-[0.03em] text-[#E87500] shadow-sm transition-colors group-hover:bg-[#F59E0B] group-hover:text-white">
                      {conferenceShortTitle}
                    </span>
                  </>
                )}
              </h1>
              <div className="mt-1 flex items-center justify-center gap-2 text-[12.5px] 2xl:text-[13.5px] font-extrabold uppercase tracking-[0.16em] text-[#EA580C]">
                <span>April 9-10</span>
                <span className="font-normal text-slate-300">|</span>
                <span>Vijayawada</span>
                <span className="font-normal text-slate-300">|</span>
                <span>India</span>
              </div>
            </Link>
          </div>
        </div>
      </div>


      {/* =========================================================
          DESKTOP NAVIGATION (Adaptive Single Row, Zero Line-Wrap)
      ========================================================= */}
      <nav
        className="hidden border-t border-slate-100 xl:block"
        aria-label="Primary navigation"
      >
        <div className="mx-auto w-full max-w-[1680px] 2xl:max-w-[1780px] px-6 lg:px-8 2xl:px-10">
          <div
            className="
              flex
              min-h-[42px]
              w-full
              flex-nowrap
              items-center
              justify-between
              py-1
            "
          >
            {[...NAV_PRIMARY, ...NAV_SECONDARY].map((item) => {
              const active = isActive(item.to);

              if (item.label === 'BROCHURE') {
                return (
                  <a
                    key={item.label}
                    href="/brocher/ICRAIQ2IT%20-%202027%20Brochure%20-%20English%2029092026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group
                      relative
                      flex
                      min-h-[36px]
                      shrink-0
                      whitespace-nowrap
                      items-center
                      rounded-md
                      px-2
                      py-1
                      text-[12px]
                      font-bold
                      tracking-[0.02em]
                      transition-all
                      duration-200
                      ease-out
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#F59E0B]
                      lg:text-[12.5px]
                      xl:px-2.5
                      xl:text-[13.5px]
                      2xl:px-3
                      2xl:text-[14.5px]
                      ${active
                        ? 'text-[#E87500]'
                        : 'text-[#344054] hover:text-[#E87500]'
                      }
                    `}
                  >
                    {item.label}
                    <span
                      className={`
                        absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#F59E0B] transition-all duration-300 ease-out
                        ${active
                          ? 'w-full opacity-100'
                          : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                        }
                      `}
                    />
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`
                    group
                    relative
                    flex
                    min-h-[36px]
                    shrink-0
                    whitespace-nowrap
                    items-center
                    rounded-md
                    px-2
                    py-1
                    text-[12px]
                    font-bold
                    tracking-[0.02em]
                    transition-all
                    duration-200
                    ease-out
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#F59E0B]
                    lg:text-[12.5px]
                    xl:px-2.5
                    xl:text-[13.5px]
                    2xl:px-3
                    2xl:text-[14.5px]

                    ${active
                      ? 'text-[#E87500]'
                      : 'text-[#344054] hover:text-[#E87500]'
                    }
                  `}
                >
                  {item.label}

                  {/* Animated orange underline */}
                  <span
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-[#F59E0B]
                      transition-all
                      duration-300
                      ease-out

                      ${active
                        ? 'w-full opacity-100'
                        : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </nav>


      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      {mobileMenuOpen && createPortal((
        <div
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeMobileMenu();
          }}
          className="
            fixed
            inset-0
            z-[100]
            h-screen
            h-[100dvh]
            bg-[#07152F]/60
            backdrop-blur-sm
            xl:hidden
          "
        >
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="
              ml-auto
              flex
              h-full
              max-h-screen
              max-h-[100dvh]
              w-[min(88vw,390px)]
              flex-col
              bg-white
              shadow-2xl
            "
          >

            {/* Mobile menu header */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-slate-200
                px-5
                py-5
              "
            >
              <div>

                <div
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#E87500]
                  "
                >
                  Conference
                </div>

                <div
                  className="
                    mt-2
                    inline-flex
                    rounded-full
                    border
                    border-[#F59E0B]
                    bg-[#FFF7E6]
                    px-3
                    py-1
                    text-lg
                    font-extrabold
                    text-[#E87500]
                  "
                >
                  {conferenceShortTitle}
                </div>

              </div>

              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
                className="
                  inline-flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  text-[#1D315F]
                  transition-all
                  duration-200
                  hover:border-[#F59E0B]
                  hover:bg-[#FFF7E6]
                  hover:text-[#E87500]
                "
              >
                <X className="h-5 w-5" />
              </button>
            </div>


            {/* Mobile links */}
            <div className="flex-1 overflow-y-auto px-5 py-2 sm:px-6 sm:py-3">

              <div className="space-y-0.5 sm:space-y-1">

                {[...NAV_PRIMARY, ...NAV_SECONDARY].map((item) => {
                  const active = isActive(item.to);

                  if (item.label === 'BROCHURE') {
                    return (
                      <a
                        key={item.label}
                        href="/brocher/ICRAIQ2IT%20-%202027%20Brochure%20-%20English%2029092026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobileMenu}
                        className="group relative flex min-h-10 items-center overflow-hidden rounded-xl px-3 text-sm font-semibold text-[#344054] transition-all duration-200 hover:bg-[#FFF7E6] hover:pl-4 hover:text-[#E87500] sm:min-h-11 sm:px-4"
                      >
                        <span className="absolute left-0 top-1/2 h-6 w-0 -translate-y-1/2 rounded-r-full bg-[#F59E0B] opacity-0 transition-all duration-200 group-hover:w-1 group-hover:opacity-100" />
                        {item.label}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={closeMobileMenu}
                      className={`
                        group
                        relative
                        flex
                        min-h-10
                        sm:min-h-11
                        items-center
                        overflow-hidden
                        rounded-xl
                        px-3
                        sm:px-4
                        text-sm
                        font-semibold
                        transition-all
                        duration-200

                        ${active
                          ? `
                              bg-[#FFF7E6]
                              font-bold
                              text-[#E87500]
                            `
                          : `
                              text-[#344054]
                              hover:bg-[#FFF7E6]
                              hover:pl-5
                              hover:text-[#E87500]
                            `
                        }
                      `}
                    >
                      {/* Orange left indicator */}
                      <span
                        className={`
                          absolute
                          left-0
                          top-1/2
                          h-6
                          -translate-y-1/2
                          rounded-r-full
                          bg-[#F59E0B]
                          transition-all
                          duration-200

                          ${active
                            ? 'w-1 opacity-100'
                            : 'w-0 opacity-0 group-hover:w-1 group-hover:opacity-100'
                          }
                        `}
                      />

                      {item.label}
                    </Link>
                  );
                })}

              </div>

              {/* Register CTA */}
              <div className="mt-2 border-t border-slate-200 pt-2">
                <Link
                  to="/registration"
                  onClick={closeMobileMenu}
                  className="
                    group
                    relative
                    flex
                    min-h-12
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    bg-gradient-to-r
                    from-[#F59E0B]
                    to-[#EA580C]
                    px-5
                    text-sm
                    font-extrabold
                    uppercase
                    tracking-wider
                    text-white
                    shadow-[0_8px_20px_rgba(234,88,12,0.22)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_12px_25px_rgba(234,88,12,0.30)]
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      bg-white/10
                      transition-transform
                      duration-500
                      group-hover:translate-x-full
                    "
                  />

                  <span className="relative">
                    Register Now
                  </span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      ), document.body)}
    </header>
  );
};

export default Navbar;