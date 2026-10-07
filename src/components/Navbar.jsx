import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Download, ExternalLink } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

const DEFAULT_TITLE =
  '5th International Conference on Recent Advancements in Artificial Intelligence, Quantum Intelligence and Inclusive Technologies';

const DEFAULT_SHORT_TITLE = 'ICRAIQ2IT - 2027';

const NAV_PRIMARY = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'COMMITTEES', to: '/committee' },
  { label: 'LOCATION', to: '/venue' },
  { label: 'AUTHORS GUIDELINES', to: '/call-for-papers' },
  { label: 'REGISTRATION', to: '/registration' },
  { label: 'AWARDS', to: '/awards' },
  { label: 'ACCOMMODATION', to: '/accommodation' },
  { label: 'CONTACT US', to: '/contact' },
];

const NAV_SECONDARY = [
  { label: 'GALLERY', to: '/gallery' },
  { label: 'SOUVENIR', to: '/souvenir' },
  { label: 'BROCHURE', to: '/brochure' },
];

function getDataValue(value, fallback) {
  return value === undefined || value === null || value === ''
    ? fallback
    : value;
}

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSouvenirOpen, setMobileSouvenirOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [souvenirDropdownOpen, setSouvenirDropdownOpen] = useState(false);
  const souvenirRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (souvenirRef.current && !souvenirRef.current.contains(e.target)) {
        setSouvenirDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const data = conferenceData || {};

  const conferenceTitle = getDataValue(
    data.title,
    DEFAULT_TITLE
  );

  const conferenceShortTitle = getDataValue(
    data.shortTitle || data.acronym,
    DEFAULT_SHORT_TITLE
  );

  const titleParts = useMemo(() => {
    const splitKey = 'and Inclusive Technologies';
    if (conferenceTitle.includes(splitKey)) {
      const idx = conferenceTitle.indexOf(splitKey);
      return {
        line1: conferenceTitle.slice(0, idx).trim(),
        line2: splitKey,
      };
    }
    return {
      line1: conferenceTitle,
      line2: '',
    };
  }, [conferenceTitle]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSouvenirOpen(false);
  };

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

      {/* =========================================================
          CONFERENCE TITLE & BADGE (Rock-solid layout, zero jiggling)
      ========================================================= */}
      <div className="mx-auto max-w-[1500px] px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8">
        <Link
          to="/"
          aria-label={`${conferenceShortTitle} home`}
          className="group mx-auto block max-w-[1400px] text-center"
        >
          <h1 className="text-[17px] font-extrabold leading-snug tracking-[-0.02em] text-[#1D315F] sm:text-[21px] lg:text-[24px] xl:text-[26px]">
            {titleParts.line2 ? (
              <>
                <span className="block">
                  {titleParts.line1}
                </span>
                <span className="mt-0.5 inline-flex flex-wrap items-center justify-center gap-2">
                  <span>{titleParts.line2}</span>
                  {/* ORANGE ROUNDED CONFERENCE BADGE */}
                  <span
                    className="
                      inline-flex
                      translate-y-[-1px]
                      items-center
                      rounded-full
                      border
                      border-[#F59E0B]
                      bg-[#FFF7E6]
                      px-3
                      py-0.5
                      align-middle
                      text-[0.72em]
                      font-black
                      tracking-[-0.01em]
                      text-[#E87500]
                      shadow-[0_2px_6px_rgba(245,158,11,0.12)]
                      transition-colors
                      duration-200
                      group-hover:border-[#EA580C]
                      group-hover:bg-[#F59E0B]
                      group-hover:text-white
                      sm:px-3.5
                      sm:py-0.5
                    "
                  >
                    {conferenceShortTitle}
                  </span>
                </span>
              </>
            ) : (
              <>
                <span>{conferenceTitle}</span>
                <span
                  className="
                    ml-2
                    inline-flex
                    translate-y-[-1px]
                    items-center
                    rounded-full
                    border
                    border-[#F59E0B]
                    bg-[#FFF7E6]
                    px-3
                    py-0.5
                    align-middle
                    text-[0.72em]
                    font-black
                    tracking-[-0.01em]
                    text-[#E87500]
                    shadow-[0_2px_6px_rgba(245,158,11,0.12)]
                    transition-colors
                    duration-200
                    group-hover:border-[#EA580C]
                    group-hover:bg-[#F59E0B]
                    group-hover:text-white
                    sm:px-3.5
                    sm:py-0.5
                  "
                >
                  {conferenceShortTitle}
                </span>
              </>
            )}
          </h1>
          <div className="mt-1 flex items-center justify-center gap-1.5 text-[12px] font-extrabold uppercase tracking-widest text-[#EA580C] sm:text-[13.5px]">
            <span>April 9-10</span>
            <span className="text-slate-300 font-normal">|</span>
            <span>Vijayawada</span>
            <span className="text-slate-300 font-normal">|</span>
            <span>India</span>
          </div>
        </Link>
      </div>


      {/* =========================================================
          DESKTOP NAVIGATION (Adaptive Single Row, Zero Line-Wrap)
      ========================================================= */}
      <nav
        className="hidden border-t border-slate-100 xl:block"
        aria-label="Primary navigation"
      >
        <div className="mx-auto w-full max-w-[1600px] px-2 sm:px-3 lg:px-4">
          <div
            className="
              flex
              min-h-[42px]
              w-full
              flex-nowrap
              items-center
              justify-center
              gap-x-1
              py-1
              lg:gap-x-1.5
              xl:gap-x-2.5
              2xl:gap-x-4
            "
          >
            {[...NAV_PRIMARY, ...NAV_SECONDARY].map((item) => {
              const active = isActive(item.to);

              if (item.label === 'SOUVENIR') {
                const isSouvenirActive = location.pathname === '/souvenir';

                return (
                  <div
                    key={item.label}
                    ref={souvenirRef}
                    className="relative flex shrink-0 items-center"
                    onMouseEnter={() => setSouvenirDropdownOpen(true)}
                    onMouseLeave={() => setSouvenirDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setSouvenirDropdownOpen((prev) => !prev)}
                      aria-expanded={souvenirDropdownOpen}
                      className={`
                        group
                        relative
                        flex
                        min-h-[36px]
                        shrink-0
                        whitespace-nowrap
                        items-center
                        gap-1
                        rounded-md
                        px-1.5
                        py-1
                        text-[11.5px]
                        font-bold
                        tracking-tight
                        transition-all
                        duration-200
                        ease-out
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#F59E0B]
                        lg:text-[12px]
                        xl:px-2
                        xl:text-[13px]
                        xl:tracking-normal
                        2xl:px-2.5
                        2xl:text-[14px]

                        ${active || isSouvenirActive || souvenirDropdownOpen
                          ? 'text-[#E87500]'
                          : 'text-[#344054] hover:text-[#E87500]'
                        }
                      `}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-200 xl:h-3.5 xl:w-3.5 ${
                          souvenirDropdownOpen ? 'rotate-180 text-[#E87500]' : 'text-slate-400'
                        }`}
                      />

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

                          ${active || isSouvenirActive || souvenirDropdownOpen
                            ? 'w-full opacity-100'
                            : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                          }
                        `}
                      />
                    </button>

                    {/* SOUVENIR DROPDOWN MENU */}
                    {souvenirDropdownOpen && (
                      <div
                        className="
                          absolute
                          left-0
                          top-full
                          z-[120]
                          mt-1
                          w-52
                          overflow-hidden
                          rounded-xl
                          border
                          border-slate-100
                          bg-white
                          p-2
                          shadow-[0_12px_32px_rgba(0,0,0,0.12)]
                          ring-1
                          ring-black/5
                        "
                      >
                        <a
                          href="/sov/1sov.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setSouvenirDropdownOpen(false)}
                          className="
                            flex
                            items-center
                            gap-2.5
                            rounded-lg
                            px-3
                            py-2
                            text-[14px]
                            font-semibold
                            text-slate-700
                            transition-colors
                            hover:bg-slate-50
                            hover:text-[#E87500]
                          "
                        >
                          <span className="text-base select-none">🎁</span>
                          <span className="tracking-tight">ICRAIC2IT-2022</span>
                        </a>

                        <a
                          href="/sov/2sov.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setSouvenirDropdownOpen(false)}
                          className="
                            flex
                            items-center
                            gap-2.5
                            rounded-lg
                            px-3
                            py-2
                            text-[14px]
                            font-semibold
                            text-slate-700
                            transition-colors
                            hover:bg-slate-50
                            hover:text-[#E87500]
                          "
                        >
                          <span className="text-base select-none">🎁</span>
                          <span className="tracking-tight">ICRAIC2IT-2025</span>
                        </a>
                      </div>
                    )}
                  </div>
                );
              }

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
                      px-1.5
                      py-1
                      text-[11.5px]
                      font-bold
                      tracking-tight
                      transition-all
                      duration-200
                      ease-out
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#F59E0B]
                      lg:text-[12px]
                      xl:px-2
                      xl:text-[13px]
                      xl:tracking-normal
                      2xl:px-2.5
                      2xl:text-[14px]

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
                    px-1.5
                    py-1
                    text-[11.5px]
                    font-bold
                    tracking-tight
                    transition-all
                    duration-200
                    ease-out
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#F59E0B]
                    lg:text-[12px]
                    xl:px-2
                    xl:text-[13px]
                    xl:tracking-normal
                    2xl:px-2.5
                    2xl:text-[14px]

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
          MOBILE HEADER
      ========================================================= */}
      <div
        className="
          flex
          items-center
          justify-end
          border-t
          border-slate-100
          px-5
          py-4
          xl:hidden
        "
      >
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open navigation menu"
          className="
            inline-flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            text-[#1D315F]
            shadow-sm
            transition-all
            duration-200
            hover:border-[#F59E0B]
            hover:bg-[#FFF7E6]
            hover:text-[#E87500]
            hover:shadow-[0_4px_12px_rgba(245,158,11,0.15)]
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#F59E0B]
          "
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>


      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      {mobileMenuOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-[#07152F]/60
            backdrop-blur-sm
            xl:hidden
          "
        >
          <aside
            className="
              ml-auto
              flex
              h-full
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
            <div className="flex-1 overflow-y-auto px-5 py-5">

              <div className="space-y-1.5">

                {[...NAV_PRIMARY, ...NAV_SECONDARY].map((item) => {
                  const active = isActive(item.to);

                  if (item.label === 'SOUVENIR') {
                    return (
                      <div key={item.label} className="space-y-1">
                        <button
                          type="button"
                          onClick={() => setMobileSouvenirOpen((prev) => !prev)}
                          className={`
                            group
                            relative
                            flex
                            w-full
                            min-h-12
                            items-center
                            justify-between
                            overflow-hidden
                            rounded-xl
                            px-4
                            text-sm
                            font-semibold
                            transition-all
                            duration-200
                            ${active || mobileSouvenirOpen
                              ? 'bg-[#FFF7E6] font-bold text-[#E87500]'
                              : 'text-[#344054] hover:bg-[#FFF7E6] hover:text-[#E87500]'
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
                              ${active || mobileSouvenirOpen
                                ? 'w-1 opacity-100'
                                : 'w-0 opacity-0 group-hover:w-1 group-hover:opacity-100'
                              }
                            `}
                          />

                          <span>{item.label}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${mobileSouvenirOpen ? 'rotate-180 text-[#E87500]' : 'text-slate-400'
                              }`}
                          />
                        </button>

                        {mobileSouvenirOpen && (
                          <div className="ml-3 space-y-1 rounded-xl border border-slate-100 bg-slate-50/80 p-2">
                            <a
                              href="/sov/1sov.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeMobileMenu}
                              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-white hover:text-[#E87500]"
                            >
                              <span className="text-base select-none">🎁</span>
                              <span>ICRAIC2IT-2022</span>
                            </a>
                            <a
                              href="/sov/2sov.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeMobileMenu}
                              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-white hover:text-[#E87500]"
                            >
                              <span className="text-base select-none">🎁</span>
                              <span>ICRAIC2IT-2025</span>
                            </a>
                          </div>
                        )}
                      </div>
                    );
                  }

                  if (item.label === 'BROCHURE') {
                    return (
                      <a
                        key={item.label}
                        href="/brocher/ICRAIQ2IT%20-%202027%20Brochure%20-%20English%2029092026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobileMenu}
                        className="
                          group
                          relative
                          flex
                          min-h-12
                          items-center
                          overflow-hidden
                          rounded-xl
                          px-4
                          text-sm
                          font-semibold
                          text-[#344054]
                          transition-all
                          duration-200
                          hover:bg-[#FFF7E6]
                          hover:pl-5
                          hover:text-[#E87500]
                        "
                      >
                        {/* Orange left indicator */}
                        <span
                          className="
                            absolute
                            left-0
                            top-1/2
                            h-6
                            w-0
                            -translate-y-1/2
                            rounded-r-full
                            bg-[#F59E0B]
                            opacity-0
                            transition-all
                            duration-200
                            group-hover:w-1
                            group-hover:opacity-100
                          "
                        />
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
                        min-h-12
                        items-center
                        overflow-hidden
                        rounded-xl
                        px-4
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
            </div>


            {/* Register CTA */}
            <div className="border-t border-slate-200 p-5">

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

          </aside>
        </div>
      )}
    </header>
  );
};

export default Navbar;