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
  if (member?.designation && member?.role && member.designation !== member.role) {
    return member.role === 'Member' ? member.designation : `${member.designation} (${member.role})`;
  }
  return member?.designation || member?.role || '';
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
    <article className="break-inside-avoid mb-4 sm:mb-5 flex flex-col rounded-xl border border-orange-200 bg-white p-3.5 sm:p-4 shadow-[0_2px_12px_rgba(249,115,22,0.06)] transition-all duration-200 hover:border-orange-400 hover:shadow-[0_8px_20px_rgba(249,115,22,0.10)]">
      {/* Card heading */}
      <div className="border-b border-orange-200 pb-2 flex items-center justify-between gap-2">
        <h2 className="text-[16px] sm:text-[17px] font-extrabold leading-snug text-[#F97316]">
          {category.label}
        </h2>
        <span className="text-[11px] font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200/60 shrink-0">
          {members.length} {members.length === 1 ? 'Member' : 'Members'}
        </span>
      </div>

      {/* Members */}
      <div className="pt-2.5">
        {members.length > 0 ? (
          <ul className="space-y-1.5 sm:space-y-2">
            {members.map((member, index) => {
              const name = getMemberName(member);
              const role = getMemberRole(member);
              const affiliation = getMemberAffiliation(member);

              return (
                <li
                  key={`${name}-${index}`}
                  className="relative pl-3.5 text-[13px] sm:text-[13.5px] leading-snug text-[#17213a]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[0.6em] h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#F97316]"
                  />

                  <div>
                    <span className="font-bold text-slate-900">{name}</span>

                    {role && (
                      <span className="text-slate-700">
                        {', '}
                        {role}
                      </span>
                    )}

                    {affiliation && (
                      <span className="text-slate-500 text-[12px] sm:text-[12.5px] block sm:inline sm:before:content-[',_']">
                        {affiliation}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="py-2 text-xs italic text-slate-400">
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

  const committeeSections = categories
    .map((category) => ({
      ...category,
      members: getCategoryMembers(members, category),
    }))
    .filter(Boolean);

  /*
    Separate the 4 executive leadership bodies from the 4 main committee councils
    to achieve perfect column height balance and eliminate empty voids.
  */
  const leadershipIds = ['chief-patrons', 'patrons', 'general-chair', 'conveners'];
  const leadershipSections = committeeSections.filter((cat) => leadershipIds.includes(cat.id));

  const internationalAdvisory = committeeSections.find((cat) => cat.id === 'advisory');
  const technicalProgram = committeeSections.find((cat) => cat.id === 'technical-programme');
  const editorialCommittee = committeeSections.find((cat) => cat.id === 'editorial');
  const nationalAdvisory = committeeSections.find((cat) => cat.id === 'national-advisory');

  return (
    <main className="min-h-screen bg-white text-[#17213a]">
      {/* =========================================================
          PAGE HEADER
         ========================================================= */}
      <section className="bg-white px-4 pb-3 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <div className="mx-auto max-w-[1410px]">
          <div className="text-center">
            <div className="mx-auto mb-2 flex items-center justify-center gap-3">
              <span className="hidden h-px w-10 bg-orange-300 sm:block" />

              <h1 className="text-3xl font-extrabold uppercase tracking-tight text-[#F97316] sm:text-4xl lg:text-[40px]">
                Conference Committee
              </h1>

              <span className="hidden h-px w-10 bg-orange-300 sm:block" />
            </div>

            <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-[#F97316]" />

            <p className="mx-auto mt-2.5 max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
              Distinguished academic leaders, chairs, technical committee
              members, and national and international advisory members of
              ICRAIQ2IT - 2027.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          1. EXECUTIVE LEADERSHIP & STEERING CHAIRS
         ========================================================= */}
      <section className="bg-white px-4 pt-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1410px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch mb-5">
            {leadershipSections.map((category) => (
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
          2. THREE-COLUMN BALANCED COMMITTEES (Zero empty gaps)
         ========================================================= */}
      <section className="bg-white px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-[1410px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-start">
            {/* Column 1: International Advisory Committee (21 members) */}
            <div className="space-y-4 sm:space-y-5">
              {internationalAdvisory && (
                <CommitteeCard
                  category={internationalAdvisory}
                  members={internationalAdvisory.members}
                />
              )}
            </div>

            {/* Column 2: Technical Program (15) + Editorial (7) = 22 members */}
            <div className="space-y-4 sm:space-y-5">
              {technicalProgram && (
                <CommitteeCard
                  category={technicalProgram}
                  members={technicalProgram.members}
                />
              )}
              {editorialCommittee && (
                <CommitteeCard
                  category={editorialCommittee}
                  members={editorialCommittee.members}
                />
              )}
            </div>

            {/* Column 3: National Advisory Committee (28 members) */}
            <div className="space-y-4 sm:space-y-5 md:col-span-2 lg:col-span-1">
              {nationalAdvisory && (
                <CommitteeCard
                  category={nationalAdvisory}
                  members={nationalAdvisory.members}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MOBILE / TABLET CONTEXT STRIP
         ========================================================= */}
      <section className="border-t border-orange-100 bg-[#FFFBF8] px-4 py-5 sm:px-6 lg:hidden">
        <div className="mx-auto flex max-w-2xl items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
          <UserCheck className="h-4 w-4 text-[#F97316]" />
          <span>ICRAIQ2IT - 2027 Conference Leadership</span>
          <ChevronRight className="h-4 w-4 text-[#F97316]" />
        </div>
      </section>
    </main>
  );
};

export default CommitteePage;
