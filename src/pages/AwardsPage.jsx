import React from 'react';
import {
  Trophy,
  Award,
  CheckCircle2,
  Medal,
  Sparkles,
  Star,
  FileText,
  Users,
  ShieldCheck,
  Calendar,
  Layers,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Check,
  Flame,
  BadgeCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

/*
  ICRAIIQ2IT 2027 — Conference Awards & Academic Honors
  Standard: International Academic Conference UI/UX
  Tight, gap-free, high-density component spacing
  Brand Palette: #F97316 (Accent Orange), #17213a (Dark Navy), #405777 (Slate Navy), #FFFBF8 (Warm Ivory)
  Strict Width: max-w-[1280px] with px-5 sm:px-8 lg:px-10
*/

const AWARDS_LIST = [
  {
    id: 'oral',
    title: 'Best Oral Presentation Award',
    category: 'Premier Conference Honor',
    trophyColor: 'from-amber-400 to-orange-500',
    description:
      'Conferred upon the author who delivers the most inspiring, methodologically sound, and articulate presentation during the oral technical tracks.',
    eligibility: 'All accepted & presented papers in oral technical sessions',
    deliverables: [
      'Official Certificate of Merit & Commendation',
      'Distinguished Plaque / Memento of Honor',
      'Special mention in official post-conference proceedings',
      'Valedictory Ceremony recognition by Conference Chairs'
    ],
    highlight: true,
  },
  {
    id: 'student',
    title: 'Best Student Research Paper Award',
    category: 'Emerging Scholar Honor',
    trophyColor: 'from-orange-500 to-rose-500',
    description:
      'Dedicated to nurturing younger researchers, recognizing the most promising scientific contribution authored and presented by a full-time student.',
    eligibility: 'B.Tech, M.Tech, M.S, or Ph.D scholars (First Author & Presenter)',
    deliverables: [
      'Official Student Research Excellence Certificate',
      'Memento & Citation of Scientific Achievement',
      'Featured showcase in conference highlights newsletter',
      'Priority consideration for future academic mentorship'
    ],
    highlight: false,
  },
  {
    id: 'poster',
    title: 'Best Poster Presentation Award',
    category: 'Visual & Interactive Excellence',
    trophyColor: 'from-amber-500 to-amber-600',
    description:
      'Awarded for the most compelling interactive poster display, evaluated on visual hierarchy, scientific rigor, and engaging live demonstration.',
    eligibility: 'All papers accepted and exhibited in interactive poster tracks',
    deliverables: [
      'Official Certificate of Poster Presentation Merit',
      'Conference Commendation Plaque',
      'Publication in digital poster gallery archives',
      'Live acknowledgment during valedictory session'
    ],
    highlight: false,
  },
  {
    id: 'track',
    title: 'Outstanding Track Session Citations',
    category: 'Domain Excellence (21 Tracks)',
    trophyColor: 'from-slate-700 to-[#17213a]',
    description:
      'In each of the 21 multidisciplinary research tracks, Session Chairs will confer a certificate of excellence to the top-ranking presentation in that track.',
    eligibility: 'Top scoring presentation in each individual technical session',
    deliverables: [
      'Track-specific Certificate of Presentation Excellence',
      'Signed endorsement by Session Chairs & Program Committee',
      'Official inclusion in track proceedings citations'
    ],
    highlight: false,
  },
];

const EVALUATION_CRITERIA = [
  {
    percentage: '30%',
    title: 'Technical Depth & Novelty',
    icon: Sparkles,
    desc: 'Originality of methodology, research formulation, and technical rigor in addressing AI, Quantum, or Deep-Tech problems.'
  },
  {
    percentage: '30%',
    title: 'Presentation & Visual Delivery',
    icon: Layers,
    desc: 'Clarity of oral explanation, structure of presentation slides/posters, and professional adherence to allotted time.'
  },
  {
    percentage: '20%',
    title: 'Q&A Mastery & Domain Defense',
    icon: ShieldCheck,
    desc: 'Scholarly precision, confidence, and domain depth demonstrated while answering questions from Session Chairs and audience.'
  },
  {
    percentage: '20%',
    title: 'Societal & Practical Impact',
    icon: Star,
    desc: 'Real-world applicability, reproducibility, inclusive tech dimensions, and translation potential into practice.'
  }
];

const CERTIFICATES_DATA = [
  {
    title: 'Paper Presentation cum Publication Certificate',
    badge: 'Authors & Presenters',
    desc: 'Conferred to registered authors who present their accepted paper (oral or poster) in either physical or virtual tracks. Explicitly notes presentation of the paper and its inclusion in the Scopus-indexed proceedings.',
    icon: Award,
    items: [
      'Issued to presenting author & registered co-authors',
      'Affirms Scopus proceedings publication indexation',
      'Signed by General Chair, Convener, and Dean R&D',
      'Issued in high-resolution digital & physical formats'
    ]
  },
  {
    title: 'Official Certificate of Participation',
    badge: 'Attendees & Delegates',
    desc: 'Awarded to all registered delegates, listeners, co-authors, and student participants who attend the conference keynote addresses, tutorials, and technical paper tracks.',
    icon: Medal,
    items: [
      'Validates formal participation in 5th Landmark Edition',
      'Recognized for continuing academic professional development',
      'Includes access verification to all 21 technical tracks',
      'Available immediately following valedictory conclusion'
    ]
  },
  {
    title: 'Session Chair & Reviewer Citations',
    badge: 'Academic Leadership',
    desc: 'Formal Letters of Appreciation and Certificates of Honor awarded to distinguished Session Chairs, Technical Reviewers, and Advisory Board members for academic service.',
    icon: BadgeCheck,
    items: [
      'Recognizes peer review contributions & track chairing',
      'Issued under university seal by Dr RVR NRIIT (DTBU)',
      'Commends contribution to Scopus publication quality'
    ]
  }
];

export const AwardsPage = () => {
  return (
    <main className="min-h-screen bg-white text-[#17213a]">
      {/* =========================================================
          HERO SECTION: TIGHT & COMPACT
         ========================================================= */}
      <section className="relative border-b border-orange-100/70 bg-gradient-to-b from-[#FFF7ED]/50 via-white to-white pt-5 pb-4 sm:pt-6 sm:pb-5">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            {/* Academic Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/90 bg-[#FFF7ED] px-3.5 py-1 text-xs font-semibold text-[#F97316] shadow-xs">
              <Trophy className="h-3.5 w-3.5 text-[#F97316]" />
              <span>ICRAIIQ2IT 2027 • Academic Excellence &amp; Recognition</span>
            </div>

            {/* Title */}
            <h1 className="mx-auto mt-2 text-2xl font-black tracking-tight text-[#17213a] sm:text-3xl lg:text-[38px] lg:leading-[1.18]">
              Conference Awards &amp; <span className="text-[#F97316]">Academic Honors</span>
            </h1>

            {/* Symmetrical Accent Bar */}
            <div className="mx-auto mt-2 h-1 w-14 rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C]" />

            {/* Subtitle */}
            <p className="mx-auto mt-2 max-w-3xl text-xs sm:text-sm leading-relaxed text-slate-600">
              To inspire scientific excellence, foster high-impact research, and celebrate outstanding presentation skills, ICRAIIQ2IT 2027 institutes distinguished awards across oral, poster, and student research categories.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2.5">
              <Link
                to="/call-for-papers"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#F97316] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-xs transition hover:bg-[#ea580c]"
              >
                <span>Submit Paper to Compete</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <Link
                to="/registration"
                className="inline-flex items-center gap-1.5 rounded-xl border border-orange-200 bg-orange-50/70 px-4 py-2 text-xs font-bold text-[#F97316] transition hover:bg-[#F97316] hover:text-white"
              >
                <Award className="h-3.5 w-3.5" />
                <span>Author Registration</span>
              </Link>
            </div>

            {/* Trust Highlights Strip */}
            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 pt-3 border-t border-orange-100/70 text-xs font-medium text-slate-700">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-slate-800">
                <Trophy className="h-3.5 w-3.5 text-[#F97316]" /> Best Oral &amp; Poster Honors
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-slate-800">
                <Medal className="h-3.5 w-3.5 text-[#F97316]" /> Best Student Researcher Citation
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-slate-800">
                <Award className="h-3.5 w-3.5 text-[#F97316]" /> Dual Certificates
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-slate-800">
                <ShieldCheck className="h-3.5 w-3.5 text-[#F97316]" /> Independent Peer Review
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED AWARDS SHOWCASE (TIGHT GRID)
         ========================================================= */}
      <section className="bg-white py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-3.5 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316]">
              Prestigious Laurels
            </span>
            <h2 className="mt-0.5 text-xl font-black tracking-tight text-[#17213a] sm:text-2xl">
              Conference Award Categories
            </h2>
            <div className="mx-auto mt-1.5 h-0.5 w-10 rounded-full bg-[#F97316]" />
            <p className="mx-auto mt-1.5 max-w-2xl text-xs text-slate-600">
              Evaluated during live technical sessions by our distinguished panel of Session Chairs and Reviewers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {AWARDS_LIST.map((award) => (
              <div
                key={award.id}
                className={`relative flex flex-col justify-between rounded-xl bg-[#FFFBF8] p-4 sm:p-5 transition-all duration-200 ${
                  award.highlight
                    ? 'border-2 border-[#F97316] shadow-sm'
                    : 'border border-orange-200/90 shadow-xs hover:border-[#F97316]'
                }`}
              >
                <div>
                  {/* Top Bar with Category & Trophy Icon */}
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`rounded-md px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${
                        award.highlight
                          ? 'bg-[#F97316] text-white'
                          : 'bg-orange-100 text-[#EA580C] border border-orange-200'
                      }`}
                    >
                      {award.category}
                    </span>

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${award.trophyColor} text-white shadow-xs`}
                    >
                      <Trophy className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-[#17213a]">
                    {award.title}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    {award.description}
                  </p>

                  {/* Eligibility Note */}
                  <div className="mt-2.5 rounded-lg border border-orange-100 bg-white p-2.5 shadow-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Eligible Delegates:
                    </span>
                    <p className="mt-0.5 text-xs font-semibold text-[#17213a]">
                      {award.eligibility}
                    </p>
                  </div>

                  {/* Recognition Deliverables */}
                  <div className="mt-3 pt-2.5 border-t border-orange-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">
                      Award Inclusions &amp; Honors
                    </span>
                    <ul className="mt-1.5 space-y-1 text-xs text-slate-600">
                      {award.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="h-3.5 w-3.5 shrink-0 text-[#F97316] mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Valedictory Ceremony Strip */}
                <div className="mt-3.5 flex items-center justify-between pt-2.5 border-t border-orange-100 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 font-medium text-slate-700">
                    <Calendar className="h-3 w-3 text-[#F97316]" />
                    Announced at Valedictory Session
                  </span>
                  <span className="font-bold text-[#F97316]">10th April 2027</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          EVALUATION CRITERIA & ASSESSMENT FRAMEWORK (COMPACT)
         ========================================================= */}
      <section className="border-t border-orange-100/70 bg-[#FFFBF8] py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-3.5 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316]">
              Rigorous Assessment
            </span>
            <h2 className="mt-0.5 text-xl font-black tracking-tight text-[#17213a] sm:text-2xl">
              Evaluation Framework &amp; Criteria
            </h2>
            <div className="mx-auto mt-1.5 h-0.5 w-10 rounded-full bg-[#F97316]" />
            <p className="mx-auto mt-1.5 max-w-2xl text-xs text-slate-600">
              Determined through a structured rubric assessed by Session Chairs and Reviewers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {EVALUATION_CRITERIA.map((crit, idx) => {
              const IconComponent = crit.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-xl border border-orange-200/90 bg-white p-3.5 sm:p-4 shadow-xs transition hover:border-[#F97316]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-[#F97316]">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xl font-black text-[#F97316]">
                        {crit.percentage}
                      </span>
                    </div>

                    <h3 className="mt-2.5 text-sm font-bold text-[#17213a]">
                      {crit.title}
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {crit.desc}
                    </p>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-orange-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Weight: {crit.percentage} of Overall Score
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Banner */}
          <div className="mt-3.5 rounded-xl border border-orange-200 bg-white p-3 sm:p-3.5 shadow-xs sm:flex sm:items-center sm:justify-between">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="h-5 w-5 text-[#F97316] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#17213a]">
                  Fair, Transparent &amp; Blind Evaluation Policy
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                  To eliminate bias, scoring combines initial double-blind reviewer scores with on-site rubric evaluations. The decision of the General Chair is final.
                </p>
              </div>
            </div>

            <Link
              to="/call-for-papers"
              className="mt-2 sm:mt-0 inline-flex items-center gap-1 shrink-0 rounded-lg bg-[#17213a] px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-[#1d315f]"
            >
              <span>Guidelines</span>
              <ArrowRight className="h-3 w-3 text-[#F97316]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FORMAL CERTIFICATES STRUCTURE (COMPACT)
         ========================================================= */}
      <section className="bg-white py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-3.5 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316]">
              Official Credentials
            </span>
            <h2 className="mt-0.5 text-xl font-black tracking-tight text-[#17213a] sm:text-2xl">
              Participation &amp; Publication Certificates
            </h2>
            <div className="mx-auto mt-1.5 h-0.5 w-10 rounded-full bg-[#F97316]" />
            <p className="mx-auto mt-1.5 max-w-2xl text-xs text-slate-600">
              Endorsed and issued under the seal of Dr RVR NRIIT (Deemed to be University).
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {CERTIFICATES_DATA.map((cert, index) => {
              const IconComp = cert.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-xl border border-orange-200/90 bg-[#FFFBF8] p-4 sm:p-5 shadow-xs transition hover:border-[#F97316]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-orange-100 px-2 py-0.5 text-[10px] font-bold text-[#EA580C] border border-orange-200">
                        {cert.badge}
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F97316] text-white">
                        <IconComp className="h-4 w-4" />
                      </div>
                    </div>

                    <h3 className="mt-2.5 text-base font-bold text-[#17213a]">
                      {cert.title}
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {cert.desc}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-orange-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Certificate Specifics
                      </span>
                      <ul className="mt-1 space-y-1 text-xs text-slate-600">
                        {cert.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#F97316] mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-orange-100 text-[10px] text-slate-500 font-medium">
                    Verified Digital &amp; Printed Credentials
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          VALEDICTORY CEREMONY (COMPACT CALL TO ACTION)
         ========================================================= */}
      <section className="border-t border-orange-100/70 bg-gradient-to-b from-[#FFFBF8] to-white py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="rounded-2xl border-2 border-orange-200 bg-white p-5 sm:p-6 shadow-xs text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-0.5 text-xs font-bold text-[#F97316] mb-2">
              <Calendar className="h-3 w-3" />
              <span>Valedictory Ceremony • 10th April 2027</span>
            </div>

            <h2 className="text-xl font-black text-[#17213a] sm:text-2xl">
              Compete for Conference Honors at ICRAIIQ2IT 2027
            </h2>

            <p className="mx-auto mt-1.5 max-w-2xl text-xs sm:text-sm text-slate-600">
              Submit your original research by <strong>24th January 2027</strong> and deliver an exceptional presentation to be considered for Best Paper and Presentation honors before global peers.
            </p>

            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2.5">
              <Link
                to="/call-for-papers"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#F97316] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-xs transition hover:bg-[#ea580c]"
              >
                <span>Submit Manuscript (CMT)</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <Link
                to="/registration"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:border-[#F97316] hover:text-[#F97316]"
              >
                <span>View Registration Fees</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AwardsPage;
