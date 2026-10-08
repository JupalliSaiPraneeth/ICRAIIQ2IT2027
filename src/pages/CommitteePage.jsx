import React from 'react';

import { conferenceData } from '../data/conferenceData';

/*
  ICRAIIQ2IT 2027 — Conference Committee Page
  ------------------------------------------------
  All committee sections rendered as consistent two-column tables:
  - Left column: role / category label (fixed width, tinted)
  - Right column: member list with orange bullet dots
  - Three logical table blocks: Leadership, Advisory, Technical & Editorial
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

/* ── Reusable Table Row ── */
function CommitteeTableRow({ category, members, isLast }) {
  return (
    <tr className={`committee-table-row ${!isLast ? 'border-b border-slate-200' : ''}`}>
      {/* Left: Category label */}
      <td
        className="committee-category-cell w-[200px] min-w-[140px] align-top bg-orange-50/70 px-3 py-2.5 border-r border-slate-200"
        style={{ verticalAlign: 'top' }}
      >
        <span className="block text-[13px] font-extrabold uppercase tracking-wide text-[#F97316] leading-tight">
          {category.label}
        </span>
      </td>

      {/* Right: Members */}
      <td className="committee-members-cell align-top px-3 py-2.5" style={{ verticalAlign: 'top' }}>
        {members.length > 0 ? (
          <ul className="space-y-1">
            {members.map((member, index) => {
              const name = getMemberName(member);
              const role = getMemberRole(member);
              const affiliation = getMemberAffiliation(member);
              return (
                <li
                  key={`${name}-${index}`}
                  className="flex items-baseline gap-1.5 text-[14px] leading-snug text-[#17213a]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F97316]"
                  />
                  <div>
                    <span className="font-semibold text-slate-900">{name}</span>
                    {role && <span className="text-slate-600">{', '}{role}</span>}
                    {affiliation && <span className="text-slate-500">{', '}{affiliation}</span>}
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <span className="text-sm italic text-slate-400">To be updated.</span>
        )}
      </td>
    </tr>
  );
}

/* ── Reusable Table Block ── */
function CommitteeTable({ title, sections }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
      <table className="committee-table w-full border-collapse text-left">
        <colgroup>
          <col style={{ width: '200px' }} />
          <col />
        </colgroup>
        <thead>
          <tr className="bg-[#F97316]">
            <th
              colSpan={2}
              className="py-2 px-4 text-[13px] font-bold uppercase tracking-widest text-white"
            >
              {title}
            </th>
          </tr>
          <tr className="border-b border-slate-200 bg-orange-50">
            <th className="committee-column-heading py-1.5 px-4 text-[11px] font-semibold uppercase tracking-widest text-slate-500 border-r border-slate-200">
              Role / Category
            </th>
            <th className="committee-column-heading py-1.5 px-4 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
              Members
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {sections.map((category, index) => (
            <CommitteeTableRow
              key={category.id || category.label}
              category={category}
              members={category.members}
              isLast={index === sections.length - 1}
            />
          ))}
        </tbody>
      </table>
    </div>
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

  /* ── Group sections into logical table blocks ── */
  const leadershipIds = ['chief-patrons', 'patrons', 'general-chair', 'conveners'];
  const leadershipSections = committeeSections.filter((cat) =>
    leadershipIds.includes(cat.id)
  );

  const advisoryIds = ['advisory', 'national-advisory'];
  const advisorySections = committeeSections.filter((cat) =>
    advisoryIds.includes(cat.id)
  );

  const technicalIds = ['technical-programme', 'editorial'];
  const technicalSections = committeeSections.filter((cat) =>
    technicalIds.includes(cat.id)
  );

  return (
    <main className="min-h-screen bg-white text-[#17213a]">
      {/* =========================================================
          PAGE HEADER
         ========================================================= */}
      <section className="bg-white px-5 pb-2 pt-5 sm:px-8 sm:pt-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px] lg:leading-[1.18]">
              Conference Committee
            </h1>
            <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-[#F97316]" />
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15.5px]">
              Distinguished academic leaders, chairs, technical committee
              members, and national and international advisory members of
              ICRAIQ2IT - 2027.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          ALL COMMITTEE TABLES
         ========================================================= */}
      <section className="bg-white px-5 pb-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1280px] space-y-3">

          {/* 1. Executive Leadership */}
          {leadershipSections.length > 0 && (
            <CommitteeTable
              title="Executive Leadership & Steering"
              sections={leadershipSections}
            />
          )}

          {/* 2. Advisory Committees */}
          {advisorySections.length > 0 && (
            <CommitteeTable
              title="Advisory Committees"
              sections={advisorySections}
            />
          )}

          {/* 3. Technical Program & Editorial */}
          {technicalSections.length > 0 && (
            <CommitteeTable
              title="Technical Program & Editorial"
              sections={technicalSections}
            />
          )}

        </div>
      </section>
    </main>
  );
};

export default CommitteePage;
