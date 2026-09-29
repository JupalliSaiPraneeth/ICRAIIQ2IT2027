import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  MapPin,
  Image as ImageIcon,
  Mountain,
  Landmark,
  Building2,
} from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

const DEFAULT_TITLE =
  '5th International Conference on Recent Advancements in Artificial Intelligence and Quantum Intelligence and Inclusive Technologies';

const DEFAULT_SHORT_TITLE = 'ICRAIQ2IT - 2027';

const DEFAULT_ABOUT = [
  'The 5th International Conference on Recent Advancements in Artificial Intelligence and Quantum Intelligence and Inclusive Technologies (ICRAIQ2IT – 2027) is scheduled to be held during 09–10 April 2027 at Dr RVR NRI Institute of Technology (Deemed to be University), Vijayawada, India.',
  'The conference aims to provide a premier international platform for academicians, scientists, researchers, industry professionals, innovators, and students to exchange ideas, present research outcomes, and discuss emerging trends in Artificial Intelligence, Quantum-Inspired Computing, and Deep Technology Innovations.',
  'ICRAIQ2IT – 2027 seeks to bridge the gap between theoretical research and practical applications by encouraging interdisciplinary collaboration and knowledge sharing among experts from academia, industry, research laboratories, and technological institutions across the globe.',
  'The event will feature keynote addresses, invited talks, technical paper presentations, workshops, and panel discussions delivered by eminent researchers, distinguished academicians, and industry leaders from around the world.'
];

/* ================================================================
   HERO SLIDES (VIJAYAWADA & CONFERENCE SHOWCASE)
   ================================================================ */

const FALLBACK_SLIDES = [
  {
    image: '/newblock.png',
    alt: 'NRI University Campus in Vijayawada',
    title: 'NRI UNIVERSITY',
    subtitle: 'A Center for Education, Research and Innovation',
    pills: [
      { label: 'Modern Campus', icon: 'building' },
      { label: 'Academic Excellence', icon: 'landmark' },
      { label: 'Research & Innovation', icon: 'sparkles' },
    ],
  },
  {
    image: 'https://nriit.edu.in/icraiq2it-2026/001.jpg',
    alt: 'Prakasam Barrage and Krishna River in Vijayawada',
    title: 'PRAKASAM BARRAGE',
    subtitle: 'Iconic Landmark on the Krishna River',
    pills: [
      { label: 'Scenic Beauty', icon: 'mountain' },
      { label: 'Cultural Heritage', icon: 'landmark' },
      { label: 'Riverfront Landmark', icon: 'building' },
    ],
  },
  {
    image: 'https://nriit.edu.in/icraiq2it-2026/002.webp',
    alt: 'Vijayawada Cityscape, Krishna River and Prakasam Barrage at Sunset',
    title: 'VIJAYAWADA',
    subtitle: 'A City Shaped by the Krishna River',
    pills: [
      { label: 'Scenic Beauty', icon: 'mountain' },
      { label: 'Riverfront Heritage', icon: 'landmark' },
      { label: 'Urban Growth', icon: 'building' },
    ],
  },
  {
    image: 'https://nriit.edu.in/icraiq2it-2026/003.jpg',
    alt: 'Aerial View of Vijayawada with Krishna River and Hills',
    title: 'VIJAYAWADA',
    subtitle: 'A City of Heritage, Nature and Innovation',
    pills: [
      { label: 'Natural Beauty', icon: 'mountain' },
      { label: 'Cultural Heritage', icon: 'landmark' },
      { label: 'Urban Landscape', icon: 'building' },
    ],
  },
  {
    image: 'https://nriit.edu.in/icraiq2it-2026/004.jpg',
    alt: 'Prakasam Barrage and Krishna River with Vijayawada Hills',
    title: 'KRISHNA RIVER',
    subtitle: 'A Serene Riverfront Landmark of Vijayawada',
    pills: [
      { label: 'Scenic Beauty', icon: 'mountain' },
      { label: 'Cultural Heritage', icon: 'landmark' },
      { label: 'Riverfront', icon: 'waves' },
    ],
  },
  {
    image: 'https://nriit.edu.in/icraiq2it-2026/005.jpg',
    alt: 'NRI University Academic Campus in Vijayawada',
    title: 'NRI UNIVERSITY',
    subtitle: 'Where Education Meets Research and Innovation',
    pills: [
      { label: 'Academic Excellence', icon: 'landmark' },
      { label: 'Modern Infrastructure', icon: 'building' },
      { label: 'Research & Innovation', icon: 'sparkles' },
    ],
  },
];

function getDataValue(value, fallback) {
  return value === undefined || value === null || value === ''
    ? fallback
    : value;
}

function formatDate(value) {
  if (!value) return 'Date to be announced';
  if (typeof value !== 'string') return String(value);
  return value;
}

function StatCard({ value, label, subtext }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-orange-100/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/50 hover:shadow-xl hover:shadow-orange-500/10">
      <div className="text-3xl font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-[#F97316] sm:text-4xl">
        {value}
      </div>

      <div className="mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F97316]">
        {label}
      </div>

      {subtext && (
        <p className="mt-1 text-xs leading-5 text-slate-500">
          {subtext}
        </p>
      )}
    </article>
  );
}

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const data = conferenceData || {};

  const conferenceTitle = getDataValue(
    data.title,
    DEFAULT_TITLE
  );

  const conferenceShortTitle = getDataValue(
    data.shortTitle || data.acronym,
    DEFAULT_SHORT_TITLE
  );

  const organizerName = getDataValue(
    data.organizer?.name,
    'Dr RVR NRI Institute of Technology (Deemed to be University)'
  );

  const conferenceDate = formatDate(
    data.dates?.conference || data.conferenceDate
  );

  const slides = useMemo(() => FALLBACK_SLIDES, []);

  const aboutParagraphs =
    Array.isArray(data.aboutConference) && data.aboutConference.length > 0
      ? data.aboutConference
      : Array.isArray(data.aboutParagraphs) && data.aboutParagraphs.length > 0
      ? data.aboutParagraphs
      : DEFAULT_ABOUT;

  const stats = [
    {
      value: '5th',
      label: 'EDITION',
      subtext: 'International Landmark Gathering',
    },
    {
      value: '21',
      label: 'CONFERENCE TOPICS',
      subtext: 'Frontier Emerging Disciplines',
    },
    {
      value: '09–10',
      label: 'CONFERENCE DATES',
      subtext: 'April 2027 | Blended Mode',
    },
    {
      value: '70+',
      label: 'GLOBAL COMMITTEE',
      subtext: 'Distinguished Academicians & Leaders',
    },
  ];

  const importantDates =
    Array.isArray(data.importantDatesList) &&
      data.importantDatesList.length
      ? data.importantDatesList.slice(0, 4)
      : [
        {
          title: 'Full Paper Submission Deadline',
          date: 'October 30, 2026',
          status: 'Important',
        },
        {
          title: 'Notification of Acceptance',
          date: 'December 15, 2026',
          status: 'Upcoming',
        },
        {
          title: 'Camera-Ready Paper Due',
          date: 'January 10, 2027',
          status: 'Upcoming',
        },
        {
          title: 'Conference Registration Closes',
          date: 'January 25, 2027',
          status: 'Deadline',
        },
      ];

  const tracks =
    Array.isArray(data.tracks) && data.tracks.length
      ? data.tracks.slice(0, 6)
      : [
        {
          number: '01',
          title: 'Generative AI & Deep Learning Systems',
          description:
            'Foundation models, LLMs, computer vision, and edge intelligence.',
        },
        {
          number: '02',
          title: 'Quantum Intelligence & Computing',
          description:
            'Quantum machine learning, error mitigation, and algorithms.',
        },
        {
          number: '03',
          title: 'Inclusive Technologies & Accessibility',
          description:
            'Assistive computing, bilingual AI, and equitable systems.',
        },
        {
          number: '04',
          title: 'Cybersecurity, Privacy & Blockchain',
          description:
            'Zero-trust architecture, cryptographic security, and privacy preservation.',
        },
        {
          number: '05',
          title: 'Smart IoT & Autonomous Robotics',
          description:
            'Sensor networks, robotics navigation, and intelligent edge nodes.',
        },
        {
          number: '06',
          title: 'Cloud, Distributed & High Performance Computing',
          description:
            'Microservices, federated platforms, and scalable infrastructure.',
        },
      ];

  /* ---------------- Auto slide timer ---------------- */

  useEffect(() => {
    if (slides.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide(
        (current) => (current + 1) % slides.length
      );
    }, 6000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const goToPrevious = () => {
    setActiveSlide(
      (current) =>
        (current - 1 + slides.length) % slides.length
    );
  };

  const goToNext = () => {
    setActiveSlide(
      (current) => (current + 1) % slides.length
    );
  };

  const getRelativePosition = (index) => {
    const total = slides.length;

    let diff = index - activeSlide;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  return (
    <main className="min-h-screen bg-white text-slate-800 antialiased selection:bg-orange-500 selection:text-white">

      {/* =========================================================
          HERO — 3D ROLLING STACK PHOTO CAROUSEL
         ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white px-3 pb-12 pt-6 sm:px-6 lg:px-8">

        {/* Soft Ambient Background Glows */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-10 h-[450px] w-[750px] -translate-x-1/2 rounded-full bg-orange-100/40 blur-[120px]" />

          <div className="absolute -left-20 top-40 h-[280px] w-[280px] rounded-full bg-blue-100/30 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-[1440px]">

          {/* Main 3D Card Stack Viewport */}

          <div className="relative mx-auto h-[350px] w-full max-w-[1200px] sm:h-[420px] md:h-[480px] lg:h-[530px] xl:h-[560px]">

            {slides.map((slide, index) => {
              const position = getRelativePosition(index);

              /* Styling per card based on offset position */

              let transform =
                'translate3d(-50%, -50%, 0) scale(0.65)';

              let opacity = 0;
              let zIndex = 0;
              let pointerEvents = 'none';

              if (position === 0) {
                // Active Center Card
                transform =
                  'translate3d(-50%, -50%, 0) scale(1)';
                opacity = 1;
                zIndex = 40;
                pointerEvents = 'auto';
              } else if (position === -1) {
                // Left 1st Tier
                transform =
                  'translate3d(calc(-50% - 19%), -50%, 0) scale(0.88)';
                opacity = 0.95;
                zIndex = 30;
              } else if (position === 1) {
                // Right 1st Tier
                transform =
                  'translate3d(calc(-50% + 19%), -50%, 0) scale(0.88)';
                opacity = 0.95;
                zIndex = 30;
              } else if (position === -2) {
                // Left 2nd Tier
                transform =
                  'translate3d(calc(-50% - 35%), -50%, 0) scale(0.76)';
                opacity = 0.85;
                zIndex = 20;
              } else if (position === 2) {
                // Right 2nd Tier
                transform =
                  'translate3d(calc(-50% + 35%), -50%, 0) scale(0.76)';
                opacity = 0.85;
                zIndex = 20;
              } else if (position === -3 || position === 3) {
                // Outer edges for seamless exit/enter
                transform = `translate3d(calc(-50% ${position < 0 ? '-' : '+'
                  } 48%), -50%, 0) scale(0.66)`;

                opacity = 0.35;
                zIndex = 10;
              }

              return (
                <div
                  key={`${slide.title}-${index}`}
                  className="absolute left-1/2 top-1/2 h-[92%] w-[92%] overflow-hidden rounded-[24px] border border-white/80 bg-slate-900 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.22)] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] sm:w-[84%] sm:rounded-[28px] md:w-[78%] lg:w-[74%] xl:w-[72%]"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    pointerEvents,
                  }}
                  aria-hidden={position !== 0}
                >

                  {/* Photo with cover crop */}

                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="absolute inset-0 h-full w-full select-none object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    draggable="false"
                  />

                  {/* Multi-stage Cinematic Shadow Overlays */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />

                  {/* Top-Right "Explore Gallery" Glass Pill */}

                  <Link
                    to="/gallery"
                    className="absolute right-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-white/30 bg-black/30 px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-slate-900 sm:right-6 sm:top-6 sm:px-4 sm:py-2 sm:text-xs"
                  >
                    <ImageIcon className="h-3.5 w-3.5" />
                    <span>Explore Gallery</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>

                  {/* Bottom Content Area */}

                  <div className="absolute bottom-4 left-5 right-5 z-20 sm:bottom-6 sm:left-7 sm:right-7">

                    {/* Header Tag */}

                    <div className="flex items-center gap-2 text-white/90">
                      <span className="h-[2px] w-5 bg-white sm:w-7" />

                      <span className="text-[9px] font-black uppercase tracking-[0.22em] sm:text-[11px]">
                        EXPLORE
                      </span>
                    </div>

                    {/* Main Title */}

                    <h2 className="mt-0.5 text-2xl font-black uppercase leading-tight tracking-tight text-white drop-shadow-md sm:text-3xl md:text-4xl lg:text-[42px]">
                      {slide.title}
                    </h2>

                    {/* Subtitle */}

                    <p className="mt-0.5 text-xs font-medium text-white/90 sm:text-sm">
                      {slide.subtitle}
                    </p>

                    {/* Badges / Pill Tags */}

                    <div className="mt-2.5 flex flex-wrap items-center gap-2">
                      {slide.pills?.map((pill, pIdx) => (
                        <span
                          key={pIdx}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm backdrop-blur-md sm:text-xs"
                        >
                          {pill.icon === 'mountain' && (
                            <Mountain className="h-3.5 w-3.5 text-orange-400" />
                          )}

                          {pill.icon === 'landmark' && (
                            <Landmark className="h-3.5 w-3.5 text-orange-400" />
                          )}

                          {pill.icon === 'building' && (
                            <Building2 className="h-3.5 w-3.5 text-orange-400" />
                          )}

                          <span>{pill.label}</span>
                        </span>
                      ))}
                    </div>

                    {/* Footer Row: Discover Text */}

                    <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-2">
                      <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/75 sm:text-[10px]">
                        DISCOVER &nbsp;•&nbsp; RESEARCH &nbsp;•&nbsp; COLLABORATE
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Left Nav Button */}

            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous slide"
              className="absolute left-1 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-800 shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all hover:scale-110 hover:bg-orange-600 hover:text-white sm:left-4 sm:h-13 sm:w-13"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            {/* Right Nav Button */}

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next slide"
              className="absolute right-1 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-800 shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all hover:scale-110 hover:bg-orange-600 hover:text-white sm:right-4 sm:h-13 sm:w-13"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Bottom Pagination Dots */}

          <div className="mt-6 flex items-center justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={`dot-${idx}`}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeSlide
                    ? 'w-7 bg-orange-600 shadow-sm shadow-orange-500/40'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT SECTION
         ========================================================= */}

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1280px]">

          <div className="mb-10 text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F97316]">
              About The Conference
            </span>

            <h2 className="mx-auto mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[40px]">
              Advancing Research. Connecting Ideas.
            </h2>

            <div className="mx-auto mt-3.5 h-1 w-14 rounded-full bg-[#F97316]" />
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">

            <div className="lg:col-span-7 space-y-4 text-[15px] leading-[1.8] text-slate-600 sm:text-[15.5px]">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {stats.map((stat, index) => (
                <StatCard
                  key={`${stat.label}-${index}`}
                  value={stat.value}
                  label={stat.label}
                  subtext={stat.subtext}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH TRACKS
         ========================================================= */}

      {tracks.length > 0 && (
        <section className="bg-white px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="mx-auto max-w-[1280px]">

            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">

              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-orange-600">
                  Call for Submissions
                </span>

                <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  Conference Research Tracks
                </h2>
              </div>

              <Link
                to="/tracks"
                className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-orange-600 transition hover:text-orange-700"
              >
                View All Tracks
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {tracks.map((track, index) => (
                <article
                  key={track.id || track.number || index}
                  className="group rounded-2xl border border-orange-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <div className="flex items-start justify-between gap-3">

                    <span className="text-2xl font-black text-orange-600">
                      {track.number ||
                        String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="rounded-full border border-orange-200 bg-orange-50 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-orange-700">
                      Track Focus
                    </div>
                  </div>

                  <h3 className="mt-3.5 text-base font-bold leading-snug text-slate-900 transition group-hover:text-orange-600 sm:text-lg">
                    {track.title}
                  </h3>

                  {track.description && (
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {track.description}
                    </p>
                  )}

                  <Link
                    to="/call-for-papers"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-orange-600 transition group-hover:text-orange-700"
                  >
                    Submit Paper

                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          IMPORTANT DATES
         ========================================================= */}

      {importantDates.length > 0 && (
        <section className="border-t border-orange-100 bg-slate-50 px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="mx-auto max-w-[1180px]">

            <div className="mb-6 text-center">
              <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-orange-600">
                Timelines & Milestones
              </span>

              <h2 className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
                Important Conference Dates
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {importantDates.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="flex gap-4 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition hover:border-orange-300 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange-200 bg-orange-50 text-orange-600">
                    <CalendarDays className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-orange-600">
                      {item.status || 'Milestone'}
                    </div>

                    <h3 className="mt-0.5 text-sm font-bold text-slate-900 sm:text-base">
                      {item.title}
                    </h3>

                    <div className="mt-1 text-xs font-black text-orange-600 sm:text-sm">
                      {item.date}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/important-dates"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-orange-600 bg-white px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-orange-600 transition hover:bg-orange-600 hover:text-white"
              >
                View Complete Schedule
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          CMT ACKNOWLEDGMENT
         ========================================================= */}

      <section className="border-t border-orange-100 bg-white px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-[1050px]">

          <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-slate-50 via-white to-orange-50/40 p-6 shadow-sm sm:p-8">

            {/* Decorative Elements */}

            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-100/50 blur-2xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-blue-100/40 blur-2xl" />

            <div className="relative">

              {/* Section Label */}

              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-orange-600" />

                <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-600">
                  Conference Acknowledgment
                </span>
              </div>

              {/* Heading */}

              <h2 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
                CMT ACKNOWLEDGMENT
              </h2>

              {/* Acknowledgment Text */}

              <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 sm:text-[15px]">
                The Microsoft CMT service was used for managing the
                peer-reviewing process for this conference. This service
                was provided for free by Microsoft and they bore all
                expenses, including costs for Azure cloud services as well
                as for software development and support.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CALL FOR PAPERS CTA
         ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 px-5 py-10 text-white shadow-inner sm:px-8 lg:px-10 lg:py-12">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/20" />

        <div className="absolute -bottom-36 -left-16 h-80 w-80 rounded-full border border-white/20" />

        <div className="relative mx-auto max-w-[1050px] text-center">

          <div className="inline-block rounded-full bg-white/20 px-3.5 py-1 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
            Call for Papers Open
          </div>

          <h2 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
            Share Your Research with the Global Computing Community
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm font-medium leading-relaxed text-orange-50">
            Submit your original contributions in emerging technologies,
            intelligent quantum algorithms, and inclusive systems to{' '}
            {conferenceShortTitle}.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5">

            <Link
              to="/call-for-papers"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-black text-orange-600 shadow-xl transition hover:-translate-y-0.5 hover:bg-orange-50"
            >
              Author Guidelines
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/registration"
              className="inline-flex items-center gap-2 rounded-xl border border-white/50 bg-black/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-orange-600"
            >
              Registration Details
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;