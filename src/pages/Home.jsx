import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

const DEFAULT_ABOUT = [
  'The 5th International Conference on Recent Advancements in Artificial Intelligence, Quantum Intelligence and Inclusive Technologies (ICRAIQ2IT – 2027) is scheduled to be held during 09–10 April 2027 at Dr RVR NRI Institute of Technology (Deemed to be University), Vijayawada, India.',
  'The conference aims to provide a premier international platform for academicians, scientists, researchers, industry professionals, innovators, and students to exchange ideas, present research outcomes, and discuss emerging trends in Artificial Intelligence, Quantum-Inspired Computing, and Deep Technology Innovations.',
  'ICRAIQ2IT – 2027 seeks to bridge the gap between theoretical research and practical applications by encouraging interdisciplinary collaboration and knowledge sharing among experts from academia, industry, research laboratories, and technological institutions across the globe.',
  'The event will feature keynote addresses, invited talks, technical paper presentations, workshops, and panel discussions delivered by eminent researchers, distinguished academicians, and industry leaders from around the world.'
];

const DEFAULT_TITLE =
  '5th International Conference on Recent Advancements in Artificial Intelligence, Quantum Intelligence and Inclusive Technologies';

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
    image: 'https://nriit.edu.in/icraiq2it-2026/icraic2it-29-scaled.jpg',
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
    image: 'https://nriit.edu.in/icraiq2it-2026/icraic2it-4-scaled.jpg',
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
    image: 'https://nriit.edu.in/icraiq2it-2026/32.jpg',
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
    image: 'https://nriit.edu.in/icraiq2it-2026/43.jpg',
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
    image: 'https://nriit.edu.in/icraiq2it-2026/53.jpg',
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

function formatDate(value) {
  if (!value) return 'Date to be announced';
  if (typeof value !== 'string') return String(value);
  return value;
}

function StatCard({ value, label, subtext }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-orange-100/90 bg-white p-4 sm:p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/50 hover:shadow-xl hover:shadow-orange-500/10">
      <div className="text-3xl font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-[#F97316] sm:text-4xl">
        {value}
      </div>

      <div className="mt-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F97316]">
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
  const conferenceTitle = data.title || DEFAULT_TITLE;

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
    }, 1000);

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

      <section className="bg-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-5">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="mx-auto mb-2 max-w-4xl text-center text-2xl font-extrabold leading-tight tracking-tight text-[#1D315F] sm:mb-3 sm:text-3xl md:text-4xl lg:mb-5 xl:hidden">
            {conferenceTitle}
          </h1>

          {/* Main 3D Card Stack Viewport */}

          <div className="relative mx-auto h-[220px] w-full max-w-[1200px] sm:h-[300px] md:h-[380px] lg:h-[530px] xl:h-[560px]">

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
                  key={`${slide.image}-${index}`}
                  className={`${position !== 0 ? 'hidden lg:block' : ''} absolute left-1/2 top-1/2 h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] sm:rounded-3xl lg:h-[92%] lg:w-[74%] lg:rounded-[28px] xl:w-[72%]`}
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

                </div>
              );
            })}

            {/* Left Nav Button */}

            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-800 shadow-md transition-all hover:scale-110 hover:bg-orange-600 hover:text-white sm:left-3 sm:h-11 sm:w-11 lg:left-4"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            {/* Right Nav Button */}

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next slide"
              className="absolute right-2 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-800 shadow-md transition-all hover:scale-110 hover:bg-orange-600 hover:text-white sm:right-3 sm:h-11 sm:w-11 lg:right-4"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Bottom Pagination Dots */}

          <div className="mt-2 flex items-center justify-center gap-2 sm:mt-3">
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

      <section className="bg-slate-50/60 px-4 py-3 sm:px-6 sm:py-4 lg:px-10 lg:py-6">
        <div className="mx-auto max-w-[1280px]">

          <div className="mb-2 text-center sm:mb-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F97316]">
              About The Conference
            </span>

            <h2 className="mx-auto mt-1 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-[40px]">
              Advancing Research. Connecting Ideas.
            </h2>

            <div className="mx-auto mt-1.5 h-1 w-12 rounded-full bg-[#F97316]" />
          </div>

          <div className="space-y-1.5 text-justify text-sm leading-relaxed text-slate-600 sm:text-base md:text-justify">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH TRACKS
         ========================================================= */}

      {tracks.length > 0 && (
        <section className="bg-white px-4 py-3 sm:px-6 sm:py-4 lg:px-10 lg:py-6">
          <div className="mx-auto max-w-[1280px]">

            <div className="flex flex-col justify-between gap-1.5 sm:flex-row sm:items-end">

              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-orange-600">
                  Call for Submissions
                </span>

                <h2 className="mt-1 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  Conference Research Tracks
                </h2>
              </div>

            </div>

            <div className="mt-2.5 grid grid-cols-1 gap-0 md:grid-cols-2">
              {tracks.map((track, index) => (
                <article
                  key={track.id || track.number || index}
                  className="group relative flex min-w-0 items-center gap-2 border border-slate-200/90 bg-white p-2.5 shadow-sm transition-shadow hover:shadow-md sm:gap-2.5 sm:p-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100/70 font-mono text-xs font-black text-orange-700 transition-colors group-hover:bg-orange-600 group-hover:text-white sm:h-9 sm:w-9 sm:text-sm">
                    {track.number ||
                      String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="break-words text-justify text-sm font-bold leading-snug text-slate-900 sm:text-[15px] lg:text-left">
                      {track.title}
                    </h3>
                  </div>
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
        <section className="bg-slate-50/60 px-4 py-3 sm:px-6 sm:py-4 lg:px-10 lg:py-6">
          <div className="mx-auto max-w-[1180px]">

            <div className="mb-2 text-center sm:mb-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-orange-600">
                Timelines & Milestones
              </span>

              <h2 className="mt-1 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Important Conference Dates
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
              {importantDates.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="group relative flex min-w-0 flex-col items-stretch gap-1.5 border border-slate-200/90 bg-white p-2.5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:p-3"
                >
                  <div className="flex min-w-0 items-start">
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-orange-600">
                        {item.status || 'Milestone'}
                      </div>
                      <h3 className="break-words text-justify text-sm font-bold leading-snug text-slate-900 sm:text-[15px] lg:text-left">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="shrink-0 text-left sm:text-right">
                    <span className="inline-block whitespace-nowrap rounded-md border border-orange-200/80 bg-orange-50/80 px-2.5 py-1.5 text-xs font-black text-orange-700 sm:text-[13px]">
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          CMT ACKNOWLEDGMENT
         ========================================================= */}

      <section className="bg-white px-4 py-3 sm:px-6 sm:py-4 lg:px-10 lg:py-6">
        <div className="mx-auto max-w-[1050px]">

          <div className="relative overflow-hidden rounded-xl border border-orange-100 bg-gradient-to-br from-slate-50 via-white to-orange-50/40 p-3 shadow-sm sm:rounded-2xl sm:p-4">

            {/* Decorative Elements */}

            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-100/50 blur-2xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-blue-100/40 blur-2xl" />

            <div className="relative">

              {/* Section Label */}

              <div className="mb-1.5 flex items-center gap-2">
                <span className="h-[2px] w-6 bg-orange-600" />

                <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-600">
                  Conference Acknowledgment
                </span>
              </div>

              {/* Heading */}

              <h2 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
                CMT ACKNOWLEDGMENT
              </h2>

              {/* Acknowledgment Text */}

              <p className="mt-1.5 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-[14.5px]">
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

    </main>
  );
}

export default Home;