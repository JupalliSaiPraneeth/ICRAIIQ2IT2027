import React, { useMemo, useState } from 'react';
import {
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  MapPin,
  Microscope,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

const DEFAULT_CONFERENCE_TITLE =
  '5th International Conference on Recent Advancements in Artificial Intelligence, Quantum Intelligence, and Inclusive Technologies';

const DEFAULT_ORGANIZER = {
  name: 'NRI Institute of Technology',
  acronym: 'NRIIT',
};

const DEFAULT_OBJECTIVES = [
  'Foster cross-border scientific exchanges in Artificial Intelligence, Quantum Information Science, and 6G Communications.',
  'Facilitate peer-reviewed publication of original research manuscripts in Scopus and Web of Science indexed proceedings.',
  'Provide young research scholars and PhD candidates direct mentorship from global keynote speakers and IEEE/ACM fellows.',
];

const DEFAULT_INSTITUTION =
  'NRI Institute of Technology (NRIIT), located in Visadala, Guntur, AP, is a center of academic excellence approved by AICTE and permanently affiliated with JNTU Kakinada. The institution boasts state-of-the-art supercomputing labs, R&D centers of excellence, and active international MOU partnerships.';

const DEFAULT_FACTS = [
  { value: '2008', label: 'Established' },
  { value: '10', label: 'B.Tech Courses' },
  { value: '6', label: 'PG Programs' },
  { value: '23 KM', label: 'From Vijayawada' },
];

const DEFAULT_COURSES = [
  'Undergraduate (B.Tech)',
  'Postgraduate (M.Tech & MBA)',
];

const DEFAULT_ABOUT =
  'The 5th International Conference on Recent Advancements in Intelligent, Quantum, and Information Technologies (ICRAIIQ2IT 2027) provides a premier forum for researchers, scientists, engineers, industry practitioners, and doctoral scholars across the globe to exchange ideas, present breakthroughs, and initiate international research collaborations.';

const DEFAULT_CAMPUS =
  'The host institution provides an academic environment designed to support technical education, research, innovation, and collaboration across engineering, science, and management disciplines.';

const DEFAULT_MISSION =
  'To provide strong technical foundations, promote research and development, and prepare graduates to succeed in industry and academia.';

const getValue = (value, fallback) =>
  value === undefined || value === null || value === '' ? fallback : value;

const getList = (value, fallback) =>
  Array.isArray(value) && value.length > 0 ? value : fallback;

function FactCard({ value, label }) {
  return (
    <div className="rounded-xl border border-orange-100 bg-white px-4 py-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F97316]/60 hover:shadow-md">
      <div className="text-lg font-extrabold text-[#111827] sm:text-xl">
        {value}
      </div>
      <div className="mt-1 text-xs text-slate-500 sm:text-sm">{label}</div>
    </div>
  );
}

function DepartmentAccordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-xl border border-orange-100 bg-white">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex min-h-[54px] w-full items-center justify-between gap-4 px-4 text-left text-sm font-bold text-[#17213a] transition-colors hover:bg-orange-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-inset"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${open ? 'rotate-180 text-[#F97316]' : ''
            }`}
        />
      </button>

      {open && (
        <div className="border-t border-orange-100 px-4 py-3 text-sm leading-6 text-slate-600">
          {children}
        </div>
      )}
    </div>
  );
}

export const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const data = conferenceData || {};

  const conferenceTitle = getValue(
    data.title,
    DEFAULT_CONFERENCE_TITLE
  );

  const organizer = {
    name: getValue(data.organizer?.name, DEFAULT_ORGANIZER.name),
    acronym: getValue(data.organizer?.acronym, DEFAULT_ORGANIZER.acronym),
  };

  const aboutText = getValue(
    data.aboutText || data.aboutDescription,
    DEFAULT_ABOUT
  );

  const objectives = getList(data.objectives, DEFAULT_OBJECTIVES);

  const institutionDescription = getValue(
    data.institutionDescription,
    DEFAULT_INSTITUTION
  );

  const mission = getValue(data.mission, DEFAULT_MISSION);

  const campusDescription = getValue(
    data.campusDescription,
    DEFAULT_CAMPUS
  );

  const facts = useMemo(() => {
    if (Array.isArray(data.institutionFacts) && data.institutionFacts.length) {
      return data.institutionFacts.slice(0, 4);
    }

    return DEFAULT_FACTS;
  }, [data.institutionFacts]);

  const courses = getList(
    data.departments || data.courses,
    DEFAULT_COURSES
  );

  const location = getValue(
    data.location,
    'Visadala, Guntur, Andhra Pradesh'
  );

  return (
    <main className="min-h-screen bg-white text-[#17213a]">
      {/* =========================================================
          PAGE CONTENT
          The global conference Header/Footer can remain in your
          existing layout. This page intentionally starts directly
          with the About content to match the supplied reference.
         ========================================================= */}

      <section className="border-t border-orange-100 bg-white">
        <div className="mx-auto max-w-[1320px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_435px] lg:gap-12">
            {/* ===================================================
                LEFT CONTENT
               =================================================== */}
            <div className="min-w-0">
              {/* Page heading */}
              <div>
                <div className="mb-2 text-sm font-semibold text-[#F97316]">
                  About the Host Institution
                </div>

                <h1 className="max-w-[900px] text-3xl font-extrabold leading-[1.2] tracking-[-0.02em] text-[#F97316] sm:text-4xl lg:text-[40px]">
                  NRI Institute of Technology (Autonomous), Pothavarappadu
                </h1>
              </div>

              {/* Institution introduction */}
              <div className="mt-5 max-w-[900px] space-y-4 text-[15px] leading-7 text-[#29405f] sm:text-[16px]">
                <p>
                  {institutionDescription}
                </p>

                <p>
                  <strong className="font-bold text-[#17213a]">
                    {organizer.name} ({organizer.acronym})
                  </strong>{' '}
                  serves as the host institution for{' '}
                  <strong className="font-bold text-[#17213a]">
                    ICRAIIQ2IT 2027
                  </strong>
                  , bringing together researchers, academicians, industry
                  professionals, research scholars, and students to exchange
                  ideas and research findings.
                </p>
              </div>

              {/* Highlight pills */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#F97316] px-4 py-2 text-sm font-semibold text-[#F97316]">
                  Established 2008
                </span>

                <span className="rounded-full border border-[#F97316] px-4 py-2 text-sm font-semibold text-[#F97316]">
                  20 acres campus
                </span>

                <span className="rounded-full border border-[#F97316] px-4 py-2 text-sm font-semibold text-[#F97316]">
                  10 B.Tech • 6 PG Programs
                </span>
              </div>

              {/* =================================================
                  TABS
                 ================================================= */}
              <div className="mt-9 border-b border-orange-100">
                <div
                  className="flex flex-wrap gap-x-6"
                  role="tablist"
                  aria-label="Institution information"
                >
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'courses', label: 'Courses' },
                    { id: 'facilities', label: 'Facilities & Labs' },
                  ].map((tab) => {
                    const active = activeTab === tab.id;

                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative py-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${active
                          ? 'text-[#F97316]'
                          : 'text-[#17213a] hover:text-[#F97316]'
                          }`}
                      >
                        {tab.label}

                        {active && (
                          <span className="absolute inset-x-0 bottom-[-1px] h-0.5 bg-[#F97316]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* =================================================
                  TAB CONTENT
                 ================================================= */}
              <div className="pt-7">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <section>
                      <div className="text-sm font-medium text-[#F97316]">
                        Campus & Location
                      </div>

                      <p className="mt-1 text-[15px] leading-7 text-[#17213a] sm:text-[16px]">
                        Ideally located about{' '}
                        <strong className="font-extrabold">
                          23 KM from Vijayawada
                        </strong>{' '}
                        and{' '}
                        <strong className="font-extrabold">
                          22 KM from Gannavaram Airport
                        </strong>
                        , the campus offers serene surroundings and is well
                        connected by college buses and public transport.
                      </p>
                    </section>

                    <section>
                      <div className="text-sm font-medium text-[#F97316]">
                        Mission
                      </div>

                      <p className="mt-1 text-[15px] leading-7 text-[#17213a] sm:text-[16px]">
                        {mission}
                      </p>
                    </section>

                    <section>
                      <div className="text-sm font-medium text-[#F97316]">
                        Conference Perspective
                      </div>

                      <p className="mt-1 text-[15px] leading-7 text-[#17213a] sm:text-[16px]">
                        {aboutText}
                      </p>
                    </section>
                  </div>
                )}

                {activeTab === 'courses' && (
                  <div className="space-y-3">
                    {courses.map((course, index) => (
                      <DepartmentAccordion
                        key={`${course}-${index}`}
                        title={course}
                        defaultOpen={index === 0}
                      >
                        Academic programmes and course information for this
                        category can be presented here. Replace this text
                        with the official programme details supplied by
                        NRIIT.
                      </DepartmentAccordion>
                    ))}
                  </div>
                )}

                {activeTab === 'facilities' && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      {
                        icon: Microscope,
                        title: 'Research & R&D',
                        text: 'Research-oriented infrastructure and centres can be highlighted here.',
                      },
                      {
                        icon: GraduationCap,
                        title: 'Academic Infrastructure',
                        text: 'Academic facilities supporting engineering, science, and management education.',
                      },
                      {
                        icon: Building2,
                        title: 'Campus Facilities',
                        text: 'Campus facilities and student-support infrastructure can be presented here.',
                      },
                      {
                        icon: Users,
                        title: 'Industry & Collaboration',
                        text: 'Collaborative initiatives, partnerships, and research activities can be described here.',
                      },
                    ].map(({ icon: Icon, title, text }) => (
                      <article
                        key={title}
                        className="rounded-xl border border-orange-100 bg-orange-50 p-5"
                      >
                        <Icon className="h-5 w-5 text-[#F97316]" />
                        <h3 className="mt-3 text-base font-bold text-[#17213a]">
                          {title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {text}
                        </p>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ===================================================
                RIGHT SIDEBAR
               =================================================== */}
            <aside className="space-y-6">
              {/* Quick facts */}
              <section className="rounded-xl border border-orange-200 bg-white p-4 shadow-[0_4px_18px_rgba(15,23,42,0.03)]">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="text-xs font-medium text-[#F97316]">
                      QUICK FACTS
                    </div>

                    <h2 className="mt-1 text-base font-extrabold text-[#111827]">
                      NRIIT at a glance
                    </h2>
                  </div>

                  <div className="text-right">
                    <div className="text-base font-medium text-[#111827]">
                      20 acres
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      Mango groves campus
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {facts.map((fact, index) => (
                    <FactCard
                      key={`${fact.label}-${index}`}
                      value={fact.value}
                      label={fact.label}
                    />
                  ))}
                </div>
              </section>

              {/* Departments */}
              <section className="rounded-xl border border-orange-200 bg-white p-4">
                <h2 className="text-base font-medium text-[#F97316]">
                  Departments
                </h2>

                <div className="mt-4 space-y-2">
                  {courses.map((course, index) => (
                    <DepartmentAccordion
                      key={`${course}-sidebar-${index}`}
                      title={course}
                      defaultOpen={false}
                    >
                      Course and department information can be supplied here
                      from the official NRIIT content.
                    </DepartmentAccordion>
                  ))}
                </div>
              </section>

              {/* Accreditation / identity */}
              <section className="rounded-xl border border-orange-100 bg-[#FFFBF8] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF7ED] text-[#F97316]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#F97316]">
                      Institutional Profile
                    </div>
                    <div className="mt-1 text-sm font-bold text-[#17213a]">
                      Academic & Research Environment
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md border border-orange-100 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
                    NAAC A+ Grade
                  </span>
                  <span className="rounded-md border border-orange-100 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
                    NBA Accredited Programs
                  </span>
                  <span className="rounded-md border border-orange-100 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
                    Autonomous Status
                  </span>
                </div>
              </section>

              {/* Location card */}
              <section className="rounded-xl bg-[#F97316] p-5 text-white">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#FDBA74]">
                      Location
                    </div>
                    <div className="mt-1 text-sm font-bold">
                      {location}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-200">
                  {campusDescription}
                </p>
              </section>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONFERENCE OBJECTIVES
         ========================================================= */}
      <section className="border-t border-orange-100 bg-[#FFF9F5] px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {/* Conference objectives */}
            <article className="rounded-2xl border border-orange-100 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF7ED] text-[#F97316]">
                <Target className="h-5 w-5" />
              </div>

              <h2 className="mt-5 text-2xl font-extrabold text-[#17213a]">
                Conference Objectives
              </h2>

              <ul className="mt-6 space-y-4">
                {objectives.map((objective, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F97316]" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* About NRIIT */}
            <article className="rounded-2xl border border-orange-100 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF7ED] text-[#F97316]">
                <Award className="h-5 w-5" />
              </div>

              <h2 className="mt-5 text-2xl font-extrabold text-[#17213a]">
                About {organizer.acronym}
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {institutionDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-md border border-orange-100 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  NAAC A+ Grade
                </span>
                <span className="rounded-md border border-orange-100 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  NBA Accredited Programs
                </span>
                <span className="rounded-md border border-orange-100 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  Autonomous Status
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          SMALL BOTTOM CONFERENCE STRIP
         ========================================================= */}
      <section className="bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-5 rounded-2xl border border-orange-100 bg-[#FFFBF8] px-6 py-6 text-center sm:flex-row sm:text-left">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#F97316]">
              {organizer.acronym}
            </div>
            <div className="mt-1 text-lg font-extrabold text-[#17213a]">
              {conferenceTitle}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Sparkles className="h-4 w-4 text-[#F97316]" />
            <span>5th Edition • 2027</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
