import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

const DEFAULT_TITLE =
  '5th International Conference on Recent Advancements in Artificial Intelligence, Quantum Intelligence, and Inclusive Technologies';

const DEFAULT_SHORT_TITLE = 'ICRAIIQ2IT 2027';

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
  const location = useLocation();

  const data = conferenceData || {};

  const conferenceTitle = getDataValue(
    data.title,
    DEFAULT_TITLE
  );

  const conferenceShortTitle = getDataValue(
    data.shortTitle || data.acronym,
    DEFAULT_SHORT_TITLE
  );

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }

    return location.pathname === path;
  };

  return (
    <header className="relative z-50 border-b border-slate-200 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.05)]">

      {/* =========================================================
          CONFERENCE TITLE (Compact Padding)
      ========================================================= */}
      <div className="mx-auto max-w-[1500px] px-4 pb-2 pt-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label="ICRAIIQ2IT 2027 home"
          className="group mx-auto block max-w-[1400px] text-center"
        >
          <h1
            className="
              text-[20px]
              font-extrabold
              leading-snug
              tracking-[-0.02em]
              text-[#1D315F]
              sm:text-[24px]
              lg:text-[28px]
            "
          >
            {conferenceTitle}

            {/* ORANGE ROUNDED CONFERENCE BADGE */}
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
                py-1
                align-middle
                text-[0.75em]
                font-black
                tracking-[-0.01em]
                text-[#E87500]
                shadow-[0_2px_6px_rgba(245,158,11,0.12)]
                transition-all
                duration-300
                group-hover:border-[#EA580C]
                group-hover:bg-[#F59E0B]
                group-hover:text-white
                sm:px-4
                sm:py-1
              "
            >
              {conferenceShortTitle}
            </span>
          </h1>
        </Link>
      </div>


      {/* =========================================================
          DESKTOP NAVIGATION (Consolidated Single Row, Increased Font Size)
      ========================================================= */}
      <nav
        className="hidden border-t border-slate-100 lg:block"
        aria-label="Primary navigation"
      >
        <div className="mx-auto max-w-[1550px] px-4">
          <div
            className="
              flex
              min-h-[44px]
              flex-wrap
              items-center
              justify-center
              gap-x-3.5
              gap-y-1
              py-1.5
              xl:gap-x-5.5
            "
          >
            {[...NAV_PRIMARY, ...NAV_SECONDARY].map((item) => {
              const active = isActive(item.to);

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`
                    group
                    relative
                    flex
                    min-h-[36px]
                    items-center
                    px-2
                    py-1
                    text-[14px]
                    font-bold
                    tracking-[0.01em]
                    transition-all
                    duration-200
                    ease-out
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#F59E0B]
                    xl:text-[15px]

                    ${active
                      ? `
                          text-[#E87500]
                        `
                      : `
                          text-[#344054]
                          hover:text-[#E87500]
                        `
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
          justify-between
          border-t
          border-slate-100
          px-5
          py-4
          lg:hidden
        "
      >
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <span
            className="
              rounded-full
              border
              border-[#F59E0B]
              bg-[#FFF7E6]
              px-3
              py-1
              text-sm
              font-black
              tracking-[0.03em]
              text-[#E87500]
            "
          >
            {conferenceShortTitle}
          </span>
        </Link>

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
            lg:hidden
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