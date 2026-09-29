import React, { useState } from 'react';
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
  FlaskConical,
  ExternalLink,
  Calendar,
  Globe,
  ArrowRight,
  School,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { conferenceData } from '../data/conferenceData';

const DEFAULT_CONFERENCE_TITLE =
  '5th International Conference on Recent Advancements in Artificial Intelligence and Quantum Intelligence and Inclusive Technologies';

const DEFAULT_ORGANIZER = {
  name: 'Dr RVR NRI Institute of Technology (Deemed to be University)',
  acronym: 'Dr RVR NRIIT (DTBU)',
};

function MetricCard({ value, label, subtext, icon: Icon }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-orange-100/90 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/50 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#F97316]">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Metric
        </span>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-black tracking-tight text-[#17213a] sm:text-3xl">
          {value}
        </div>
        <div className="mt-1 text-sm font-bold text-[#F97316]">
          {label}
        </div>
        {subtext && (
          <div className="mt-1 text-xs text-slate-500">
            {subtext}
          </div>
        )}
      </div>
    </div>
  );
}

function ProgramAccordion({ title, items, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-xl border border-orange-100 bg-white transition-colors duration-200 hover:border-orange-200">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-3 text-left text-sm font-bold text-[#17213a] transition-colors hover:bg-orange-50/50 focus:outline-none"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#F97316]">
            <GraduationCap className="h-4 w-4" />
          </div>
          <span>{title}</span>
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
            open ? 'rotate-180 text-[#F97316]' : ''
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-orange-100 bg-[#FFFBF8]/70 px-5 py-4">
          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F97316]" />
                <span>{item}</span>
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
    <main className="min-h-screen bg-[#FFFBF8] text-[#17213a] antialiased selection:bg-[#F97316] selection:text-white">
      {/* =========================================================
          1. ELEGANT INTERNATIONAL CONFERENCE HERO HEADER
         ========================================================= */}
      <section className="relative overflow-hidden bg-white pt-5 pb-1 sm:pt-6 sm:pb-2">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-orange-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-amber-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            {/* Main Header Title */}
            <h1 className="mx-auto text-3xl font-extrabold tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px] lg:leading-[1.18]">
              About the Conference &amp; <span className="text-[#F97316]">Host Institution</span>
            </h1>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. CONFERENCE OVERVIEW & OBJECTIVES (DUAL SHOWCASE)
         ========================================================= */}
      <section className="pt-2 pb-6 sm:pt-3 sm:pb-7">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Col (7 cols): About ICRAIQ2IT - 2027 */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-orange-100 bg-white p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-[#F97316]">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                      Flagship Academic Event
                    </span>
                    <h2 className="text-xl font-black text-[#17213a] sm:text-2xl">
                      About ICRAIQ2IT – 2027
                    </h2>
                  </div>
                </div>

                <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                  <p>
                    The <strong>5th International Conference on Recent Advancements in Artificial Intelligence and Quantum Intelligence and Inclusive Technologies (ICRAIQ2IT – 2027)</strong> is scheduled to be held during <strong>09–10 April 2027</strong> in Blended mode.
                  </p>
                  <p>
                    The conference aims to provide a premier international forum for academicians, researchers, industry practitioners, innovators, and students worldwide to present groundbreaking scientific findings, debate emerging theoretical models, and catalyze translational technologies across computational sciences.
                  </p>
                  <p>
                    ICRAIQ2IT – 2027 acts as a bridge between foundational laboratory research and real-world industrial deployments, with specialized tracks spanning Machine Learning, Quantum Algorithms, Edge Computing, and Inclusive Smart Systems.
                  </p>
                </div>

                {/* Technical Pillars Grid */}
                <div className="mt-6 pt-6 border-t border-orange-100">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                    Core Conference Pillars
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-orange-100/80 bg-[#FFFBF8] p-3.5 flex items-start gap-2.5">
                      <Cpu className="h-4 w-4 text-[#F97316] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-[#17213a]">Artificial Intelligence &amp; ML</div>
                        <div className="text-[11px] text-slate-500">LLMs, GenAI, Explainable &amp; Ethical AI</div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-orange-100/80 bg-[#FFFBF8] p-3.5 flex items-start gap-2.5">
                      <Layers className="h-4 w-4 text-[#F97316] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-[#17213a]">Quantum Inspired Systems</div>
                        <div className="text-[11px] text-slate-500">Quantum Algorithms, Crypto &amp; Simulators</div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-orange-100/80 bg-[#FFFBF8] p-3.5 flex items-start gap-2.5">
                      <ShieldCheck className="h-4 w-4 text-[#F97316] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-[#17213a]">Cybersecurity &amp; Cloud</div>
                        <div className="text-[11px] text-slate-500">Zero-Trust, Blockchain &amp; Digital Forensics</div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-orange-100/80 bg-[#FFFBF8] p-3.5 flex items-start gap-2.5">
                      <Sparkles className="h-4 w-4 text-[#F97316] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-[#17213a]">Inclusive Deep-Tech</div>
                        <div className="text-[11px] text-slate-500">Healthcare, Smart Cities &amp; Sustainability</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submission CTA link */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-orange-100">
                  <div className="text-xs text-slate-500">
                    Submissions through <strong>Microsoft CMT</strong> • IEEE A4 format (max 6 pages)
                  </div>
                  <Link
                    to="/call-for-papers"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F97316] hover:text-[#ea580c] hover:underline"
                  >
                    <span>View Submission Guidelines</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Col (5 cols): Conference Objectives */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="rounded-2xl border border-orange-100 bg-white p-6 sm:p-8 shadow-xs h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-[#F97316]">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                      Academic Goals
                    </span>
                    <h2 className="text-xl font-black text-[#17213a] sm:text-2xl">
                      Conference Objectives
                    </h2>
                  </div>
                </div>

                <div className="mt-5 flex-1 space-y-3">
                  {objectives.map((objective, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-3 rounded-xl border border-orange-50 bg-[#FFFBF8] p-3 transition-colors hover:border-orange-200 hover:bg-orange-50/40"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white shadow-xs mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700">
                        {objective}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Scopus Badge Box */}
                <div className="mt-6 rounded-xl border border-orange-200 bg-orange-50/50 p-3.5 flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-[#F97316] shrink-0" />
                  <div className="text-xs text-slate-700">
                    <strong>Proceedings &amp; Indexation:</strong> Accepted and presented papers will be submitted for inclusion in conference proceedings with Scopus indexation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. KEY METRICS GRID
         ========================================================= */}
      <section className="border-y border-orange-100/80 bg-white py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            <MetricCard
              value="2008"
              label="Established"
              subtext="Excellence in Tech"
              icon={Calendar}
            />
            <MetricCard
              value="DTBU"
              label="Deemed University"
              subtext="Ministry of Education"
              icon={Building2}
            />
            <MetricCard
              value="NAAC A+"
              label="Accredited"
              subtext="Premier Quality Grade"
              icon={ShieldCheck}
            />
            <MetricCard
              value="20 Acres"
              label="Campus"
              subtext="Lush Mango Groves"
              icon={School}
            />
            <MetricCard
              value="IDEA Lab"
              label="AICTE Funded"
              subtext="Advanced Prototyping"
              icon={Microscope}
            />
            <MetricCard
              value="5th Edition"
              label="Conference"
              subtext="Global Blended Mode"
              icon={Award}
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          4. HOST INSTITUTION & ACADEMIC SHOWCASE WITH SEGMENTED TABS
         ========================================================= */}
      <section className="py-6 sm:py-8">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          {/* Section Heading */}
          <div className="text-center mb-4 sm:mb-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#F97316]">
              <School className="h-4 w-4" />
              <span>Academic Ecosystem</span>
            </div>
            <h2 className="mt-2 text-2xl font-black text-[#17213a] sm:text-3xl lg:text-4xl">
              About the Host Institution &amp; School
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-slate-500">
              Dr RVR NRI Institute of Technology (Deemed to be University) — a premier technical institution committed to transformative education and cutting-edge research.
            </p>
          </div>

          {/* Segmented Tab Navigation Bar */}
          <div className="flex justify-center mb-5">
            <div
              className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-orange-200/80 bg-white p-1.5 shadow-xs"
              role="tablist"
              aria-label="Institution Details"
            >
              {[
                { id: 'overview', label: 'Host University', icon: Building2 },
                { id: 'school', label: 'School of Computer Studies', icon: Cpu },
                { id: 'courses', label: 'Academic Programmes', icon: GraduationCap },
                { id: 'facilities', label: 'Facilities & IDEA Lab', icon: Microscope },
                { id: 'pharmacy', label: 'College of Pharmacy', icon: FlaskConical },
              ].map((tab) => {
                const active = activeTab === tab.id;
                const TabIcon = tab.icon;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 focus:outline-none ${
                      active
                        ? 'bg-[#F97316] text-white shadow-sm'
                        : 'text-slate-600 hover:bg-orange-50 hover:text-[#F97316]'
                    }`}
                  >
                    <TabIcon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Panels */}
          <div className="rounded-3xl border border-orange-100 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
            {/* TAB 1: HOST UNIVERSITY */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-extrabold uppercase tracking-wider">
                    Institutional Profile
                  </div>
                  <h3 className="text-2xl font-black text-[#17213a] sm:text-3xl">
                    Dr RVR NRI Institute of Technology
                  </h3>
                  <div className="text-sm font-semibold text-[#F97316]">
                    Deemed to be University • Established in 2008
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                    Established in <strong>2008</strong> under the visionary aegis of <strong>Sri Durga Malleswari Educational Society, Vijayawada</strong>, NRI Institute of Technology has attained the prestigious status of a <strong>Deemed to be University</strong>, recognized for its commitment to pedagogical rigor, interdisciplinary research, and transformative innovation.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                    Nestled in an eco-friendly sanctuary amidst lush greenery on a sprawling <strong>20-acre campus of mango groves</strong> along the Vijayawada–Nuziveedu State Highway, the university provides an intellectually stimulating environment just <strong>22 km from Vijayawada International Airport</strong> and <strong>23 km from Vijayawada City</strong>.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="rounded-lg border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-bold text-slate-700">
                      NAAC A+ Accredited
                    </span>
                    <span className="rounded-lg border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-bold text-slate-700">
                      AICTE Approved
                    </span>
                    <span className="rounded-lg border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-bold text-slate-700">
                      PCI Approved
                    </span>
                    <span className="rounded-lg border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-bold text-slate-700">
                      Autonomous Heritage
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="rounded-2xl border border-orange-100 bg-[#FFFBF8] p-6 shadow-xs">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[#17213a] mb-4 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-[#F97316]" />
                      Campus Highlights &amp; Facilities
                    </h4>
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                      <li className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-[#F97316] shrink-0 mt-0.5" />
                        <span><strong>20-Acre Mango Groves:</strong> Serene, green, eco-friendly environment for research.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-[#F97316] shrink-0 mt-0.5" />
                        <span><strong>Advanced Infrastructure:</strong> 1200+ capacity auditorium, smart seminar halls, and digital libraries.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-[#F97316] shrink-0 mt-0.5" />
                        <span><strong>Seamless Connectivity:</strong> Fleet of college buses and express transit from Vijayawada.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-[#F97316] shrink-0 mt-0.5" />
                        <span><strong>AICTE IDEA Lab:</strong> State-of-the-art innovation center for prototyping and commercialization.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: SCHOOL OF COMPUTER STUDIES */}
            {activeTab === 'school' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-orange-100 pb-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                      Organizing Department
                    </span>
                    <h3 className="text-2xl font-black text-[#17213a]">
                      School of Computer Studies
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                      AICTE IDEA Lab Host
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                  The <strong>School of Computer Studies</strong> at Dr RVR NRI Institute of Technology (Deemed to be University) was established with the mission to deliver world-class technical education, foster groundbreaking inquiry, and cultivate ethical engineering leadership in emerging computing technologies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="rounded-2xl border border-orange-100 bg-[#FFFBF8] p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white mb-3">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#17213a]">UG Programmes</h4>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      B.Tech in CSE, CSE (AI &amp; ML), AIML, CSE (Data Science), Information Technology (IT), and CSE (Telugu Medium).
                    </p>
                  </div>

                  <div className="rounded-2xl border border-orange-100 bg-[#FFFBF8] p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white mb-3">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#17213a]">PG &amp; Research</h4>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      M.Tech in CSE focusing on Intelligent Systems, Cloud Architectures, and Ph.D in frontier computing fields.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-orange-100 bg-[#FFFBF8] p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white mb-3">
                      <Users className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#17213a]">Industry MoUs</h4>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      Active partnerships with premier multinational tech organizations for internships, capstones, and faculty exchanges.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-orange-50/60 p-4 border border-orange-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#F97316] mb-1">
                    Key Strengths
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-700">
                    {school.highlights ? school.highlights.join(' • ') : 'Experienced doctorate faculty, GPU computing clusters, active research publications, and consistent placement track record across top-tier multinational corporations.'}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: ACADEMIC PROGRAMMES */}
            {activeTab === 'courses' && (
              <div className="space-y-4">
                <div className="border-b border-orange-100 pb-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                    Curriculum &amp; Degrees
                  </span>
                  <h3 className="text-2xl font-black text-[#17213a]">
                    Academic Programmes Offered
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500">
                    Comprehensive education spanning undergraduate, postgraduate, and doctoral research programs.
                  </p>
                </div>

                <ProgramAccordion
                  title="Undergraduate Engineering Programmes (B.Tech & B.Sc.)"
                  defaultOpen={true}
                  items={inst.undergraduatePrograms || [
                    "Computer Science & Engineering (CSE)",
                    "CSE (Artificial Intelligence & Machine Learning)",
                    "CSE (Data Science)",
                    "Artificial Intelligence & Machine Learning (AI&ML)",
                    "Cybersecurity",
                    "Information Technology (IT)",
                    "Electronics & Communication Engineering (ECE)",
                    "Electrical & Electronics Engineering (EEE)",
                    "Mechanical Engineering",
                    "Civil Engineering",
                    "CSE (Telugu Medium)",
                    "B.Sc. in Vedic Sciences & Technology"
                  ]}
                />

                <ProgramAccordion
                  title="Postgraduate Programmes (M.Tech, M.Sc., MBA, M.Pharm)"
                  defaultOpen={true}
                  items={inst.postgraduatePrograms || [
                    "M.Tech in Computer Science & Engineering",
                    "M.Tech in VLSI Design & Embedded Systems",
                    "M.Tech in Structural Engineering",
                    "M.Tech in Thermal Engineering",
                    "M.Tech in Electric Vehicle Technology",
                    "Master of Business Administration (MBA)",
                    "M.Sc. in Digital Forensics & Cyber Security",
                    "M.Sc. in Medical Biotechnology"
                  ]}
                />

                <ProgramAccordion
                  title="Doctoral Research Programmes (Ph.D & MS by Research)"
                  defaultOpen={true}
                  items={inst.doctoralPrograms || [
                    "MS by Research",
                    "Ph.D in Computer Science & Engineering",
                    "Ph.D in Electronics & Communication Engineering",
                    "Ph.D in Electrical & Electronics Engineering",
                    "Ph.D in Mechanical & Civil Engineering",
                    "Ph.D in Management Studies",
                    "Ph.D in Pharmaceutical Sciences",
                    "Ph.D in Basic Sciences (Mathematics, Physics, Chemistry, English)"
                  ]}
                />
              </div>
            )}

            {/* TAB 4: FACILITIES & IDEA LAB */}
            {activeTab === 'facilities' && (
              <div className="space-y-6">
                <div className="border-b border-orange-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                    Infrastructure &amp; Innovation
                  </span>
                  <h3 className="text-2xl font-black text-[#17213a]">
                    Research Facilities &amp; AICTE IDEA Lab
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-orange-100 bg-[#FFFBF8] p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#F97316] mb-3">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#17213a]">AICTE IDEA LAB</h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      A central hub funded by AICTE for hands-on experimentation, design thinking, rapid prototyping, and technology commercialization for students and faculty.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-orange-100 bg-[#FFFBF8] p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#F97316] mb-3">
                      <Microscope className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#17213a]">High-Performance Computing</h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Specialized GPU compute clusters, parallel computing nodes, and advanced software suites for training deep neural networks and executing quantum-inspired simulations.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-orange-100 bg-[#FFFBF8] p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#F97316] mb-3">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#17213a]">20-Acre Campus &amp; Auditoriums</h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Fully air-conditioned 1,200+ seater international convention auditorium, multiple parallel session halls, and smart multimedia classrooms.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-orange-100 bg-[#FFFBF8] p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#F97316] mb-3">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#17213a]">Digital Knowledge Repository</h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Comprehensive library with IEEE Xplore, ScienceDirect, Springer, and Scopus subscriptions, along with round-the-clock digital access.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: PHARMACY COLLEGE */}
            {activeTab === 'pharmacy' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-orange-100 pb-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                      Allied Professional Institution
                    </span>
                    <h3 className="text-2xl font-black text-[#17213a]">
                      NRI College of Pharmacy
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md bg-orange-100 px-2.5 py-1 text-xs font-bold text-orange-700">
                      PCI Approved
                    </span>
                    <span className="rounded-md bg-orange-100 px-2.5 py-1 text-xs font-bold text-orange-700">
                      AICTE Approved
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                  Established in <strong>2007</strong> under the aegis of <strong>Sri Durga Malleswara Educational Society, Vijayawada</strong>, NRI College of Pharmacy stands as a recognized center of excellence in Pharmaceutical Sciences and Clinical Practice.
                </p>

                <div className="rounded-2xl border border-orange-100 bg-[#FFFBF8] p-6">
                  <h4 className="text-sm font-bold text-[#17213a] mb-3">
                    Programmes Offered by College of Pharmacy:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="rounded-xl bg-white p-3.5 border border-orange-100 text-xs font-semibold text-slate-800 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#F97316] shrink-0" />
                      <span>Bachelor of Pharmacy (B.Pharm)</span>
                    </div>
                    <div className="rounded-xl bg-white p-3.5 border border-orange-100 text-xs font-semibold text-slate-800 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#F97316] shrink-0" />
                      <span>Doctor of Pharmacy (Pharm.D)</span>
                    </div>
                    <div className="rounded-xl bg-white p-3.5 border border-orange-100 text-xs font-semibold text-slate-800 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#F97316] shrink-0" />
                      <span>M.Pharm in Pharmaceutics</span>
                    </div>
                    <div className="rounded-xl bg-white p-3.5 border border-orange-100 text-xs font-semibold text-slate-800 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#F97316] shrink-0" />
                      <span>M.Pharm in Pharmaceutical Analysis</span>
                    </div>
                    <div className="rounded-xl bg-white p-3.5 border border-orange-100 text-xs font-semibold text-slate-800 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#F97316] shrink-0" />
                      <span>M.Pharm in Regulatory Affairs</span>
                    </div>
                    <div className="rounded-xl bg-white p-3.5 border border-orange-100 text-xs font-semibold text-slate-800 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#F97316] shrink-0" />
                      <span>Ph.D in Pharmaceutical Sciences</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. CAMPUS LOCATION & VENUE HIGHLIGHT STRIP
         ========================================================= */}
      <section className="pb-8 sm:pb-10">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="rounded-3xl border border-orange-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#F97316]">
                  <MapPin className="h-4 w-4" />
                  <span>Conference Venue &amp; Accessibility</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#17213a]">
                  Dr RVR NRI Institute of Technology (Deemed to be University)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pothavarappadu, Agiripalli Mandalam, Eluru District, Vijayawada Rural, Andhra Pradesh, India — Pin: 521212.
                  Conveniently situated along Vijayawada–Nuziveedu Highway, ~22 km from Gannavaram (Vijayawada) Airport and ~23 km from Vijayawada Railway Station.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="rounded-md bg-orange-50 border border-orange-200 px-2.5 py-1 text-xs font-mono text-slate-700">
                    GPS: 16.663279, 80.737776
                  </span>
                  <span className="rounded-md bg-slate-50 border border-slate-200 px-2.5 py-1 text-xs text-slate-600">
                    Express transit from Vijayawada City
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  to="/venue"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F97316] px-5 py-3 text-xs sm:text-sm font-extrabold text-white shadow-xs transition-colors hover:bg-[#ea580c]"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Explore Venue &amp; City Guide</span>
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-200 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-slate-700 transition-colors hover:border-[#F97316] hover:bg-orange-50/50"
                >
                  <Globe className="h-4 w-4 text-[#F97316]" />
                  <span>Contact Secretariat</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. BOTTOM CONFERENCE ACCENT STRIP
         ========================================================= */}
      <section className="border-t border-orange-100 bg-white px-5 py-5 sm:px-8 sm:py-6 lg:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#F97316]">
              {organizer.acronym}
            </div>
            <div className="mt-0.5 text-base sm:text-lg font-extrabold text-[#17213a]">
              {conferenceTitle}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
            <Sparkles className="h-4 w-4 text-[#F97316]" />
            <span>09 – 10 April 2027 • Blended Mode • Vijayawada, India</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
