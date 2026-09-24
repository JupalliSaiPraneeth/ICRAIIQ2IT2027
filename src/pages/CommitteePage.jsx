import React from 'react';

import { UserCheck, ChevronRight } from 'lucide-react';

import { conferenceData } from '../data/conferenceData';

/*
  ICRAIIQ2IT 2027 — Conference Committee Page
  ------------------------------------------------
  Orange / white visual identity
  - Clean white academic conference layout
  - Orange visual identity
  - Large centered "CONFERENCE COMMITTEE" heading
  - Three-column committee card grid on desktop
  - Responsive 1 / 2 / 3-column layout
  - All committee categories displayed together
  - Consistent card heights within each grid row
  - Long committee lists remain readable without artificial truncation
  - No dark ScientificBackground
  - No fake member data is introduced
*/

const FALLBACK_CATEGORIES = [
  { id: 'chief-patrons', label: 'Chief Patrons' },
  { id: 'patrons', label: 'Patrons' },
  { id: 'general-chairs', label: 'General Chairs' },
  { id: 'organizing', label: 'Organizing Committee' },
  { id: 'program-execution', label: 'Program Execution Committee' },
  { id: 'technical-programme', label: 'Technical Programme Committee' },
  { id: 'publication', label: 'Publication Chair' },
  { id: 'national-advisory', label: 'National Advisory Committee' },
  { id: 'international-advisory', label: 'International Advisory Committee' },
];

const FALLBACK_MEMBERS = {
  'chief-patrons': [],
  patrons: [],
  'general-chairs': [],
  organizing: [],
  'program-execution': [],
  'technical-programme': [],
  publication: [],
  'national-advisory': [],
  'international-advisory': [],
};

const normalizeCategoryId = (value) =>
  String(value || '')
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const getCategoryMembers = (members, category) => {
  if (!members || typeof members !== 'object') return [];

  const direct = members[category.id];

  if (Array.isArray(direct)) return direct;

  const normalizedTarget = normalizeCategoryId(category.id);

  const matchingKey = Object.keys(members).find(
    (key) => normalizeCategoryId(key) === normalizedTarget
  );

  if (matchingKey && Array.isArray(members[matchingKey])) {
    return members[matchingKey];
  }

  return [];
};

const getMemberName = (member) => {
  if (typeof member === 'string') return member;

  return (
    member?.name ||
    member?.fullName ||
    member?.person ||
    'Committee Member'
  );
};

const getMemberRole = (member) => {
  if (typeof member === 'string') return '';

  return member?.role || member?.designation || '';
};

const getMemberAffiliation = (member) => {
  if (typeof member === 'string') return '';

  return (
    member?.affiliation ||
    member?.institution ||
    member?.organization ||
    ''
  );
};

function CommitteeCard({ category, members }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-orange-200 bg-white p-4 shadow-[0_4px_18px_rgba(249,115,22,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-[0_12px_30px_rgba(249,115,22,0.12)] sm:p-5">
      {/* Card heading */}
      <div className="border-b border-orange-200 pb-2">
        <h2 className="text-[18px] font-extrabold leading-snug text-[#F97316] sm:text-[19px]">
          {category.label}
        </h2>
      </div>

      {/* Members */}
      <div className="flex-1 pt-5">
        {members.length > 0 ? (
          <ul className="space-y-2.5">
            {members.map((member, index) => {
              const name = getMemberName(member);
              const role = getMemberRole(member);
              const affiliation = getMemberAffiliation(member);

              return (
                <li
                  key={`${name}-${index}`}
                  className="relative pl-5 text-[14px] leading-[1.55] text-[#17213a] sm:text-[15px]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[0.58em] h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#F97316]"
                  />

                  <div>
                    <span className="font-medium">{name}</span>

                    {role && (
                      <span className="text-[#17213a]">
                        {', '}
                        {role}
                      </span>
                    )}

                    {affiliation && (
                      <span className="text-[#17213a]">
                        {', '}
                        {affiliation}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="flex min-h-[90px] items-center text-sm italic text-slate-400">
            Committee information will be updated soon.
          </div>
        )}
      </div>
    </article>
  );
}

export const CommitteePage = () => {
  const data = conferenceData || {};

  const categories =
    Array.isArray(data.committeeCategories) &&
      data.committeeCategories.length > 0
      ? data.committeeCategories
      : FALLBACK_CATEGORIES;

  const members =
    data.committeeMembers && typeof data.committeeMembers === 'object'
      ? data.committeeMembers
      : FALLBACK_MEMBERS;

  /*
    The reference design displays every committee category on one page.
    We therefore intentionally do not use the previous tab-based
    interaction here.
  */
  const committeeSections = categories
    .map((category) => ({
      ...category,
      members: getCategoryMembers(members, category),
    }))
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-white text-[#17213a]">
      {/* =========================================================
          PAGE HEADER
         ========================================================= */}
      <section className="bg-white px-5 pb-8 pt-12 sm:px-8 sm:pt-14 lg:px-10 lg:pb-10 lg:pt-14">
        <div className="mx-auto max-w-[1410px]">
          <div className="text-center">
            <div className="mx-auto mb-4 flex items-center justify-center gap-4">
              <span className="hidden h-px w-14 bg-orange-300 sm:block" />

              <h1 className="text-4xl font-extrabold uppercase tracking-[-0.025em] text-[#F97316] sm:text-5xl lg:text-[46px]">
                Conference Committee
              </h1>

              <span className="hidden h-px w-14 bg-orange-300 sm:block" />
            </div>

            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#F97316]" />

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-500 sm:text-base">
              Distinguished academic leaders, chairs, technical committee
              members, and national and international advisory members of
              ICRAIIQ2IT 2027.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMITTEE GRID
         ========================================================= */}
      <section className="bg-white px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1410px]">
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {committeeSections.map((category) => (
              <CommitteeCard
                key={category.id || category.label}
                category={category}
                members={category.members}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          MOBILE / TABLET CONTEXT STRIP
         ========================================================= */}
      <section className="border-t border-orange-100 bg-[#FFFBF8] px-5 py-8 sm:px-8 lg:hidden">
        <div className="mx-auto flex max-w-2xl items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
          <UserCheck className="h-4 w-4 text-[#F97316]" />
          <span>ICRAIIQ2IT 2027 Conference Leadership</span>
          <ChevronRight className="h-4 w-4 text-[#F97316]" />
        </div>
      </section>
    </main>
  );
};

export default CommitteePage;
