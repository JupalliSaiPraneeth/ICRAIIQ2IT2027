import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Facebook, Twitter, Youtube, Linkedin, Instagram } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

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

export const Footer = () => {
  const data = conferenceData || {};

  const conferenceShortTitle = getDataValue(
    data.shortTitle || data.acronym,
    DEFAULT_SHORT_TITLE
  );

  const organizerName = getDataValue(
    data.organizer?.name,
    'Dr RVR NRI Institute of Technology (Deemed to be University)'
  );

  const email =
    data.contact?.email ||
    data.organizer?.email ||
    data.links?.contactEmail ||
    'icraiq2it27@nriit.edu.in';

  return (
    <footer className="bg-[#f1f3f6] text-[#263653]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 px-5 py-7 sm:px-8 sm:py-8 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr] lg:gap-8 lg:px-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/nrilogo.png"
              alt="NRI Institute of Technology Logo"
              className="h-12 sm:h-14 w-auto object-contain rounded-xl bg-white p-1 shadow-xs transition-transform duration-200 group-hover:scale-105"
            />
            <div>
              <div className="text-sm font-extrabold leading-tight text-[#1d315f]">
                Dr RVR NRI Institute of
                <br />
                <span className="text-[#f97316]">Technology</span>
              </div>
              <div className="text-[11px] font-semibold text-slate-500">
                Deemed to be University • NAAC A+
              </div>
            </div>
          </Link>

          <div className="mt-2.5 text-base sm:text-lg font-extrabold text-[#1d315f]">
            {conferenceShortTitle}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#111827]">
            Navigation
          </h3>

          <div className="mt-2.5 space-y-1.5">
            {NAV_PRIMARY.slice(1, 7).map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="block text-sm text-slate-600 transition hover:text-[#f97316]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#111827]">
            Quick Links
          </h3>

          <div className="mt-2.5 space-y-1.5">
            {NAV_SECONDARY.map((item) => {
              if (item.label === 'BROCHURE') {
                return (
                  <a
                    key={item.label}
                    href="/brocher/ICRAIQ2IT%20-%202027%20Brochure%20-%20English%2029092026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-slate-600 transition hover:text-[#f97316]"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block text-sm text-slate-600 transition hover:text-[#f97316]"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Contact/social */}
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#111827]">
            Contact
          </h3>

          <a
            href={`mailto:${email}`}
            className="mt-2.5 flex items-start gap-2 text-sm leading-6 text-slate-600 transition hover:text-[#f97316]"
          >
            <Mail className="mt-0.5 h-4 w-4 shrink-0" />
            <span className="break-all">{email}</span>
          </a>

          <div className="mt-3 flex items-center gap-2">
            {[
              { label: 'Facebook', icon: Facebook, href: data.social?.facebook },
              { label: 'Twitter', icon: Twitter, href: data.social?.twitter },
              { label: 'YouTube', icon: Youtube, href: data.social?.youtube },
              { label: 'LinkedIn', icon: Linkedin, href: data.social?.linkedin },
              { label: 'Instagram', icon: Instagram, href: data.social?.instagram },
            ].map(({ label, icon: Icon, href }) => {
              if (!href) return null;

              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-[#344054] transition hover:border-[#f97316] hover:text-[#f97316]"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-[#e7eaf0] px-5 py-3 sm:py-3.5 text-center">
        <p className="text-xs font-medium text-slate-600 sm:text-sm">
          © 2027 {conferenceShortTitle} – All Rights Reserved
          <span className="mx-2 hidden sm:inline">|</span>
          <span className="block sm:inline">
            {organizerName}
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
