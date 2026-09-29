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
  BookOpen,
  Cpu,
  Layers,
  FlaskConical
} from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

const DEFAULT_CONFERENCE_TITLE =
  '5th International Conference on Recent Advancements in Artificial Intelligence and Quantum Intelligence and Inclusive Technologies';

const DEFAULT_ORGANIZER = {
  name: 'Dr RVR NRI Institute of Technology (Deemed to be University)',
  acronym: 'Dr RVR NRIIT (DTBU)',
};

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

function ProgramAccordion({ title, items, defaultOpen = false }) {
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
          className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
            open ? 'rotate-180 text-[#F97316]' : ''
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-orange-100 px-4 py-3 text-sm leading-6 text-slate-600 bg-orange-50/20">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F97316] mt-1" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const data = conferenceData || {};
  const inst = data.institution || {};
  const school = data.organizingSchool || {};

  const conferenceTitle = data.title || DEFAULT_CONFERENCE_TITLE;
  const organizer = {
    name: data.organizer?.name || DEFAULT_ORGANIZER.name,
    acronym: data.organizer?.acronym || DEFAULT_ORGANIZER.acronym,
  };

  const objectives = data.objectives || [];

  return (
    <main className="min-h-screen bg-white text-[#17213a]">
      {/* =========================================================
          HERO / INSTITUTION OVERVIEW HEADER
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
                <div className="mb-2 text-sm font-semibold text-[#F97316] uppercase tracking-wider">
                  About the Host Institution
                </div>

                <h1 className="max-w-[900px] text-3xl font-extrabold leading-[1.2] tracking-[-0.02em] text-[#F97316] sm:text-4xl lg:text-[40px]">
                  Dr RVR NRI Institute of Technology (Deemed to be University)
                </h1>
                <p className="mt-2 text-sm font-semibold text-slate-500">
                  Pothavarappadu, Agiripalli Mandalam, Eluru District, Vijayawada Rural, Andhra Pradesh
                </p>
              </div>

              {/* Institution introduction */}
              <div className="mt-5 max-w-[900px] space-y-4 text-[15px] leading-7 text-[#29405f] sm:text-[16px]">
                <p>
                  Established in <strong>2008</strong> under the aegis of <strong>Sri Durga Malleswari Educational Society, Vijayawada</strong>, NRI Institute of Technology has recently attained the prestigious status of a <strong>Deemed to be University</strong>, reflecting its unwavering commitment to academic excellence, research, and innovation in Science, Engineering, Technology, and Management.
                </p>

                <p>
                  The institution is situated in a peaceful and eco-friendly environment amidst lush greenery on a sprawling <strong>20-acre campus of mango groves</strong> along the Vijayawada–Nuziveedu State Highway. The campus is well connected through college bus facilities and public transportation, located nearly <strong>23 km from Vijayawada city</strong> and about <strong>22 km from Gannavaram Airport (Vijayawada International Airport)</strong>.
                </p>

                <p>
                  All departments are equipped with modern infrastructure, advanced laboratories, sophisticated research facilities, and contemporary software tools to support quality teaching, innovation, and research activities. The institution continuously strives to create an academically vibrant environment that nurtures creativity, technical competence, and professional ethics among students.
                </p>
              </div>

              {/* Highlight pills */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="rounded-full border border-[#F97316] bg-orange-50/50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#F97316]">
                  Deemed to be University
                </span>
                <span className="rounded-full border border-[#F97316] bg-orange-50/50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#F97316]">
                  Established 2008
                </span>
                <span className="rounded-full border border-[#F97316] bg-orange-50/50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#F97316]">
                  20-Acre Mango Groves Campus
                </span>
                <span className="rounded-full border border-[#F97316] bg-orange-50/50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#F97316]">
                  AICTE IDEA LAB
                </span>
                <span className="rounded-full border border-[#F97316] bg-orange-50/50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#F97316]">
                  NAAC A+ Grade
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
                    { id: 'overview', label: 'School of Computer Studies' },
                    { id: 'pharmacy', label: 'NRI College of Pharmacy' },
                    { id: 'courses', label: 'Academic Programmes' },
                    { id: 'facilities', label: 'Facilities & IDEA Lab' },
                  ].map((tab) => {
                    const active = activeTab === tab.id;

                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative py-3 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                          active
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
                    <section className="rounded-2xl border border-orange-200 bg-orange-50/30 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Cpu className="h-6 w-6 text-[#F97316]" />
                        <h2 className="text-xl font-bold text-[#1d315f]">
                          About the Organizing School: School of Computer Studies
                        </h2>
                      </div>

                      <p className="text-[15px] leading-7 text-slate-700">
                        The School of Computer Studies at Dr. RVR NRI Institute of Technology (Deemed to be University) was established with the objective of delivering high-quality education and fostering innovation and research in the field of computing and emerging technologies.
                      </p>

                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="rounded-xl bg-white p-4 border border-orange-100">
                          <h3 className="font-bold text-[#1d315f] text-sm">Undergraduate Programmes</h3>
                          <p className="text-xs text-slate-600 mt-1">
                            B.Tech in Computer Science and Engineering (CSE), CSE (Artificial Intelligence & Machine Learning), AIML, CSE (Data Science), CSE (Telugu Medium), and Information Technology (IT).
                          </p>
                        </div>

                        <div className="rounded-xl bg-white p-4 border border-orange-100">
                          <h3 className="font-bold text-[#1d315f] text-sm">Postgraduate & Doctoral Programmes</h3>
                          <p className="text-xs text-slate-600 mt-1">
                            M.Tech in Computer Science and Engineering, and Ph.D in Computer Science and allied disciplines, enabling advanced research in emerging computing domains.
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 p-4 rounded-xl bg-white border border-orange-100">
                        <h3 className="font-bold text-[#1d315f] text-sm">Industry Collaborations & AICTE IDEA Lab</h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          The department is strengthened by experienced, highly qualified faculty members dedicated to academic excellence and research. The School is supported with state-of-the-art laboratories and advanced computing facilities. It actively collaborates with industry professionals, academic experts, and research organisations to conduct workshops, seminars, faculty development programmes, and conferences. It holds formal MOUs with leading industries and academic institutions, and houses an <strong>AICTE IDEA LAB</strong> for promoting innovation and research.
                        </p>
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === 'pharmacy' && (
                  <div className="space-y-6">
                    <section className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <FlaskConical className="h-6 w-6 text-[#F97316]" />
                        <h2 className="text-xl font-bold text-[#1d315f]">
                          NRI College of Pharmacy
                        </h2>
                      </div>

                      <p className="text-[15px] leading-7 text-slate-700">
                        NRI College of Pharmacy, established in <strong>2007</strong> under the auspices of <strong>Sri Durga Malleswara Educational Society</strong>, is a premier pharmaceutical institution situated at Pothavarappadu, Agiripalli Mandal, near Vijayawada, Andhra Pradesh.
                      </p>

                      <div className="mt-4 p-4 rounded-xl bg-orange-50/50 border border-orange-100 space-y-3">
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-white rounded-md text-xs font-semibold text-slate-700 border border-orange-200">
                            PCI Approved
                          </span>
                          <span className="px-3 py-1 bg-white rounded-md text-xs font-semibold text-slate-700 border border-orange-200">
                            AICTE Approved
                          </span>
                          <span className="px-3 py-1 bg-white rounded-md text-xs font-semibold text-slate-700 border border-orange-200">
                            Permanently Affiliated to JNTUK
                          </span>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                          The institution offers comprehensive professional and academic programs including:
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#F97316] shrink-0" />
                            <span>Bachelor of Pharmacy (B.Pharm)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#F97316] shrink-0" />
                            <span>Doctor of Pharmacy (Pharm.D)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#F97316] shrink-0" />
                            <span>M.Pharm in Pharmaceutics</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#F97316] shrink-0" />
                            <span>M.Pharm in Pharmaceutical Analysis</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#F97316] shrink-0" />
                            <span>M.Pharm in Regulatory Affairs</span>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === 'courses' && (
                  <div className="space-y-4">
                    <ProgramAccordion
                      title="Undergraduate Engineering Programmes (B.Tech)"
                      defaultOpen={true}
                      items={inst.undergraduatePrograms || [
                        "Computer Science and Engineering (CSE)",
                        "CSE (Artificial Intelligence & Machine Learning)",
                        "CSE (Data Science)",
                        "Artificial Intelligence & Machine Learning (AIML)",
                        "CSE (Telugu Medium)",
                        "Information Technology (IT)",
                        "Electronics & Communication Engineering (ECE)",
                        "Electrical & Electronics Engineering (EEE)",
                        "Mechanical Engineering",
                        "Civil Engineering"
                      ]}
                    />

                    <ProgramAccordion
                      title="Postgraduate Programmes (M.Tech, MBA, M.Pharm)"
                      defaultOpen={true}
                      items={inst.postgraduatePrograms || [
                        "M.Tech. in Computer Science and Engineering (CSE)",
                        "M.Tech. in Digital Electronics and Communication Systems",
                        "M.Tech. in Power Electronics and Drives",
                        "M.Tech. in Structural Engineering",
                        "M.Tech. in Thermal Engineering",
                        "Master of Business Administration (MBA)",
                        "M.Pharm (Pharmaceutics, Analysis, Regulatory Affairs)"
                      ]}
                    />

                    <ProgramAccordion
                      title="Doctoral Research Programmes (Ph.D)"
                      defaultOpen={true}
                      items={inst.doctoralPrograms || [
                        "Ph.D in Computer Science and Engineering",
                        "Ph.D in Allied Engineering & Technology Disciplines"
                      ]}
                    />
                  </div>
                )}

                {activeTab === 'facilities' && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      {
                        icon: Sparkles,
                        title: 'AICTE IDEA LAB',
                        text: 'Dedicated advanced innovation lab fostering hands-on experimentation, prototyping, and interdisciplinary technology incubation.',
                      },
                      {
                        icon: Microscope,
                        title: 'Research & Innovation Labs',
                        text: 'High-performance computing clusters, GPU workstations, and dedicated research facilities for AI, ML, and Quantum simulations.',
                      },
                      {
                        icon: Building2,
                        title: '20-Acre Lush Campus',
                        text: 'Eco-friendly campus with mango groves, modern smart classrooms, digital libraries, and 1200+ capacity auditorium along Vijayawada–Nuziveedu Highway.',
                      },
                      {
                        icon: Users,
                        title: 'Industry MOUs & Partnerships',
                        text: 'Active partnerships with top tier technology companies and premier universities worldwide for joint research and faculty-student exchange.',
                      },
                    ].map(({ icon: Icon, title, text }) => (
                      <article
                        key={title}
                        className="rounded-xl border border-orange-100 bg-orange-50/40 p-5"
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
                      NRIIT (DTBU) at a glance
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
                  <FactCard value="2008" label="Established" />
                  <FactCard value="DTBU" label="Deemed University" />
                  <FactCard value="23 KM" label="From Vijayawada" />
                  <FactCard value="22 KM" label="From Airport" />
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
                      Accreditation & Approvals
                    </div>
                    <div className="mt-1 text-sm font-bold text-[#17213a]">
                      Deemed to be University
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md border border-orange-100 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
                    Deemed to be University
                  </span>
                  <span className="rounded-md border border-orange-100 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
                    NAAC A+ Grade
                  </span>
                  <span className="rounded-md border border-orange-100 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
                    AICTE Approved
                  </span>
                  <span className="rounded-md border border-orange-100 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
                    PCI Approved
                  </span>
                  <span className="rounded-md border border-orange-100 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
                    AICTE IDEA Lab
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
                      Campus Location
                    </div>
                    <div className="mt-1 text-sm font-bold">
                      Vijayawada Rural, Andhra Pradesh
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-5 text-orange-100">
                  Pothavarappadu, Agiripalli Mandalam, Eluru District, Pin - 521212. Situated along Vijayawada–Nuziveedu State Highway.
                </p>
                <div className="mt-3 text-xs font-mono text-orange-200">
                  GPS: 16.663279, 80.737776
                </div>
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
                Objectives of the Conference
              </h2>

              <ul className="mt-6 space-y-3.5">
                {objectives.map((objective, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F97316]" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* About ICRAIQ2IT - 2027 */}
            <article className="rounded-2xl border border-orange-100 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF7ED] text-[#F97316]">
                <Award className="h-5 w-5" />
              </div>

              <h2 className="mt-5 text-2xl font-extrabold text-[#17213a]">
                About ICRAIQ2IT - 2027
              </h2>

              <div className="mt-5 text-sm leading-7 text-slate-600 space-y-3">
                <p>
                  The <strong>5th International Conference on Recent Advancements in Artificial Intelligence and Quantum Intelligence and Inclusive Technologies (ICRAIQ2IT – 2027)</strong> is scheduled to be held during <strong>09–10 April 2027</strong> in Blended mode.
                </p>
                <p>
                  The conference aims to provide a premier international platform for academicians, scientists, researchers, industry professionals, innovators, and students to exchange ideas, present research outcomes, and discuss emerging trends in Artificial Intelligence, Quantum-Inspired Computing, and Deep Technology Innovations.
                </p>
                <p>
                  ICRAIQ2IT – 2027 seeks to bridge the gap between theoretical research and practical applications by encouraging interdisciplinary collaboration and knowledge sharing among global experts.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-md border border-orange-100 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  09–10 April 2027
                </span>
                <span className="rounded-md border border-orange-100 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  Blended Mode
                </span>
                <span className="rounded-md border border-orange-100 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  Scopus Indexation
                </span>
                <span className="rounded-md border border-orange-100 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  Microsoft CMT
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
            <span>09 – 10, April 2027 • Vijayawada</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
