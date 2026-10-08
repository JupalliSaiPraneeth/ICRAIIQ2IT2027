import React from 'react';
import {
  Globe,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { conferenceData } from '../data/conferenceData';

const DEFAULT_CONFERENCE_TITLE =
  '5th International Conference on Recent Advancements in Artificial Intelligence, Quantum Intelligence and Inclusive Technologies';

const DEFAULT_ORGANIZER = {
  name: 'Dr RVR NRI Institute of Technology (Deemed to be University)',
  acronym: 'Dr RVR NRIIT (DTBU)',
};

export const AboutPage = () => {
  const data = conferenceData || {};
  const conferenceTitle = data.title || DEFAULT_CONFERENCE_TITLE;
  const organizer = {
    name: data.organizer?.name || DEFAULT_ORGANIZER.name,
    acronym: data.organizer?.acronym || DEFAULT_ORGANIZER.acronym,
  };
  const objectives = data.objectives || [];

  return (
    <main className="min-h-screen bg-white text-[#17213a] antialiased selection:bg-[#F97316] selection:text-white">
      {/* 1. Header */}
      <section className="bg-white px-5 py-2.5 sm:px-8 sm:py-3 lg:px-10">
        <div className="mx-auto max-w-[1240px] text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#F97316]">
            Conference Profile
          </span>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px] lg:leading-[1.18]">
            About the Conference
          </h1>
          <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-[#F97316]" />
          <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            A premier international forum advancing research in Artificial Intelligence, Quantum Intelligence, and Inclusive Technologies.
          </p>
        </div>
      </section>

      {/* 2. Side-by-Side Content (Borders Removed) */}
      <section className="px-5 py-2 sm:px-8 sm:py-2.5 lg:px-10">
        <div className="mx-auto max-w-[1240px]">
          <div className="space-y-3">
            <div className="px-1.5 sm:px-2">
              <div className="space-y-2 text-justify text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                <p>
                  The <strong>5th International Conference on Recent Advancements in Artificial Intelligence, Quantum Intelligence and Inclusive Technologies (ICRAIQ2IT – 2027)</strong> is scheduled to be held during <strong>09–10 April 2027</strong> in Blended mode.
                </p>
                <p>
                  The conference provides a premier international platform for academicians, scientists, researchers, industry professionals, innovators, and students to exchange ideas, present groundbreaking research outcomes, and debate emerging theoretical models across computational sciences.
                </p>
                <p>
                  ICRAIQ2IT – 2027 bridges the gap between foundational laboratory research and practical industry applications by fostering interdisciplinary collaboration among experts across the globe.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm sm:p-4">
              <h2 className="text-xl font-black text-[#17213a] sm:text-2xl">
                Conference Objectives
              </h2>

              <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
                {objectives.slice(0, 5).map((objective, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-1.5 rounded-xl bg-slate-50/70 px-2.5 py-1.5"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="text-[13px] leading-snug text-slate-700 sm:text-[13.5px]">
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid min-w-0 grid-cols-1 gap-2 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
              <div className="min-w-0 rounded-xl bg-orange-50/70 px-3 py-2 text-xs leading-snug text-slate-700 [overflow-wrap:anywhere] sm:text-[13px]">
                <strong>Publication:</strong> Proceedings are planned for consideration by Springer Nature, AIP Publishing, or Taylor &amp; Francis, subject to publisher selection and acceptance. EasyChair is the conference management platform, not a publisher; publication and indexing are not guaranteed.
              </div>
              <div className="flex min-w-0 flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm">
                <span className="min-w-0 text-slate-600">
                  Submissions via <strong>Microsoft CMT</strong> • IEEE format
                </span>
                <Link
                  to="/call-for-papers"
                  className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap font-bold text-[#F97316] hover:underline"
                >
                  <span>Guidelines</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Organizing Institution & School - Borderless */}
      <section className="px-5 pt-1.5 pb-0 sm:px-8 sm:pt-2 sm:pb-0 lg:px-10">
        <div className="mx-auto max-w-[1240px]">
          <div className="px-1.5 pt-1 pb-0 sm:px-2">
            <h2 className="text-xl font-black text-[#17213a] sm:text-2xl mb-1.5">
              Host Institution: {organizer.name}
            </h2>

            <div className="space-y-1.5 text-justify text-sm leading-relaxed text-slate-700 sm:text-[15px]">
              <p>
                The conference is organized by the <strong>School of Computer Studies</strong> at <strong>{organizer.name}</strong>, Vijayawada, India. The School is dedicated to fostering research excellence, academic rigor, and technological innovation across cutting-edge computing disciplines.
              </p>
              <p>
                Equipped with modern computational labs and collaborative research facilities, the department provides an inspiring environment for hosting international scholars, delegates, and keynote speakers from around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Venue & Secretariat */}
      <section className="px-5 pt-1.5 pb-4 sm:px-8 sm:pt-2 sm:pb-5 lg:px-10">
        <div className="mx-auto max-w-[1240px]">
          <div className="rounded-2xl bg-orange-50/40 p-3 sm:p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm leading-relaxed text-slate-600">
                  Pothavarappadu, Agiripalli Mandalam, Vijayawada Rural, Andhra Pradesh, India — 521212.
                  Conveniently accessible from Vijayawada International Airport (~22 km) and Railway Junction (~23 km).
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <Link
                  to="/venue"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#F97316] px-4 py-2 text-sm font-bold text-white shadow-xs transition-colors hover:bg-[#ea580c]"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Venue Guide</span>
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-xs transition-colors hover:text-[#F97316]"
                >
                  <Globe className="h-4 w-4 text-[#F97316]" />
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
