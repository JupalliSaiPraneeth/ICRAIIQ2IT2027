import React, { useMemo, useState } from 'react';
import {
  Download,
  FileText,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Lock,
  ExternalLink,
  Calendar,
  Layers,
  Sparkles,
  BookOpen,
  ArrowRight,
  Clock,
  Award,
  UploadCloud,
  Check,
  Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { conferenceData } from '../data/conferenceData';

const TOPIC_CATEGORIES = [
  { id: 'all', label: 'All Topics (21)' },
  { id: 'ai', label: 'AI & Machine Learning' },
  { id: 'quantum', label: 'Quantum & Security' },
  { id: 'cloud', label: 'Cloud & Distributed' },
  { id: 'applications', label: 'Emerging & Applied' },
];

const ALL_TOPICS = [
  { name: 'Machine Learning and Deep Learning Applications', cat: 'ai' },
  { name: 'Generative AI and Large Language Models (LLMs)', cat: 'ai' },
  { name: 'Explainable, Ethical, and Responsible AI Systems', cat: 'ai' },
  { name: 'Computer Vision, Pattern Recognition & Image Processing', cat: 'ai' },
  { name: 'Natural Language Processing and Speech Technologies', cat: 'ai' },
  { name: 'Human–Computer Interaction and Cognitive Computing', cat: 'ai' },
  { name: 'Quantum Inspired Computing and Algorithms', cat: 'quantum' },
  { name: 'Quantum Cryptography and Secure Key Distribution', cat: 'quantum' },
  { name: 'Cybersecurity, Blockchain, and Digital Forensics', cat: 'quantum' },
  { name: 'Zero-Trust Architectures & Network Security', cat: 'quantum' },
  { name: 'Data Science, Big Data Analytics & Business Intelligence', cat: 'cloud' },
  { name: 'Cloud Computing, Distributed & Grid Architectures', cat: 'cloud' },
  { name: 'Edge Computing and Intelligent Industrial Automation', cat: 'cloud' },
  { name: 'High-Performance Computing and Next-Gen Networks (6G/5G)', cat: 'cloud' },
  { name: 'Internet of Things (IoT) and Smart Embedded Systems', cat: 'applications' },
  { name: 'Embedded Systems, VLSI and Smart Sensor Technologies', cat: 'applications' },
  { name: 'AI in Healthcare, Bioinformatics, and Smart Diagnostics', cat: 'applications' },
  { name: 'AI for Sustainable Agriculture and Smart Irrigation', cat: 'applications' },
  { name: 'AI for Sustainable Development & Climate Solutions', cat: 'applications' },
  { name: 'Deep-Tech Innovations, Robotics and Autonomous Systems', cat: 'applications' },
  { name: 'AI Applications in Fintech, Manufacturing, and Logistics', cat: 'applications' },
];

const GUIDELINES = [
  {
    title: 'Format & Page Limit',
    desc: 'IEEE standard 2-column layout (A4 USA size). Strict maximum of 6 pages including figures, tables, and bibliography.'
  },
  {
    title: 'Submission Portal',
    desc: 'Submit complete manuscripts electronically in PDF format exclusively through Microsoft CMT portal.'
  },
  {
    title: 'Originality & Plagiarism (<10%)',
    desc: 'Unpublished, original research only. Text similarity (including AI assistance) must be strictly below 10% excluding references.'
  },
  {
    title: 'Double-Blind Anonymity',
    desc: 'Omit all author names, affiliations, emails, funding acknowledgments, and self-identifying citations in initial review PDFs.'
  },
  {
    title: 'Registration & Presentation',
    desc: 'At least one author must register by 10th Mar 2027 and present the paper (in-person or virtually) during the conference.'
  },
  {
    title: 'Scopus Proceedings Indexing',
    desc: 'All peer-reviewed, accepted, and registered presented papers will be submitted for inclusion in Scopus-indexed proceedings.'
  }
];

const IMPORTANT_DATES = [
  {
    title: 'Manuscript Submission',
    date: '24th Jan, 2027',
    badge: 'Submission Closes',
    status: 'urgent'
  },
  {
    title: 'Acceptance Notification',
    date: '24th Feb, 2027',
    badge: 'Peer Review',
    status: 'normal'
  },
  {
    title: 'Author Registration',
    date: '10th Mar, 2027',
    badge: 'Registration Due',
    status: 'normal'
  },
  {
    title: 'Camera Ready Due',
    date: '30th Mar, 2027',
    badge: 'Final Files',
    status: 'normal'
  },
  {
    title: 'Conference Dates',
    date: '09–10 Apr, 2027',
    badge: 'Blended Mode',
    status: 'urgent'
  }
];

export const CallForPapersPage = () => {
  const [selectedCat, setSelectedCat] = useState('all');

  const filteredTopics = useMemo(() => {
    if (selectedCat === 'all') return ALL_TOPICS;
    return ALL_TOPICS.filter((t) => t.cat === selectedCat);
  }, [selectedCat]);

  const ieeeTemplateUrl =
    conferenceData?.publicationDetails?.ieeeTemplateUrl ||
    'https://www.ieee.org/conferences/publishing/templates';
  const ieeeDocxUrl =
    conferenceData?.publicationDetails?.ieeeDocxUrl ||
    'https://ieee-org.widen.net/content/ge5anzdecd/original/conference-template-a4.docx';

  return (
    <main className="min-h-screen bg-[#FFFBF8] text-[#17213a] antialiased selection:bg-[#F97316] selection:text-white">
      {/* =========================================================
          1. COMPACT HEADER & FAST ACTION CONSOLE
         ========================================================= */}
      <section className="relative overflow-hidden bg-white border-b border-orange-100/90 pt-8 pb-6 sm:pt-9 sm:pb-7">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-100/30 blur-2xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-amber-100/20 blur-2xl" />

        <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <h1 className="mx-auto text-3xl font-black tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px] lg:leading-[1.18]">
              Call for Papers &amp; <span className="text-[#F97316]">Submission Guidelines</span>
            </h1>

            <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-[#F97316]" />

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Submit original research in AI, Quantum Intelligence, and Inclusive Technologies. Accepted &amp; presented papers will be published with Scopus indexation.
            </p>

            {/* Quick Action Buttons */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://cmt3.research.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-5 py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xs transition hover:bg-[#ea580c]"
              >
                <Lock className="h-4 w-4" />
                <span>Submit Paper (CMT)</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              <a
                href={ieeeDocxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-orange-200 bg-orange-50/60 px-4 py-2.5 text-xs sm:text-sm font-bold text-[#F97316] transition hover:bg-[#F97316] hover:text-white"
              >
                <Download className="h-4 w-4" />
                <span>IEEE Template (DOCX)</span>
              </a>

              <a
                href={ieeeTemplateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-700 transition hover:border-[#F97316] hover:text-[#F97316]"
              >
                <ExternalLink className="h-4 w-4" />
                <span>LaTeX Portal</span>
              </a>
            </div>

            {/* Quick Specification Strip */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-orange-100/70 text-xs sm:text-[13px] font-semibold text-slate-600">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-3 py-1.5 text-slate-800 font-medium">
                <FileText className="h-3.5 w-3.5 text-[#F97316]" /> IEEE A4 2-Column
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-3 py-1.5 text-slate-800 font-medium">
                <BookOpen className="h-3.5 w-3.5 text-[#F97316]" /> Max 6 Pages Strictly
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-3 py-1.5 text-slate-800 font-medium">
                <ShieldCheck className="h-3.5 w-3.5 text-[#F97316]" /> Plagiarism &lt; 10%
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-3 py-1.5 text-slate-800 font-medium">
                <Lock className="h-3.5 w-3.5 text-[#F97316]" /> Double-Blind Review
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-orange-100/80 px-3 py-1.5 text-orange-900 font-bold">
                <Award className="h-3.5 w-3.5 text-[#F97316]" /> Scopus Indexation
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-orange-50 border border-orange-200 px-3 py-1.5 text-xs sm:text-sm text-slate-700">
                Submission Deadline: <strong className="text-[#F97316] font-bold">24th Jan, 2027</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. CORE SUBMISSION WORKSTATION (TIGHT 2-COLUMN HUB)
         ========================================================= */}
      <section className="pt-4 pb-6 sm:pt-5 sm:pb-7">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6 items-start">
            
            {/* ---------------- LEFT WORKSPACE (6 COLS) ---------------- */}
            <div className="lg:col-span-6 space-y-4">
              {/* Card 1: CFP Scope & Conference Parameters */}
              <div className="rounded-2xl border border-orange-100 bg-white p-5 sm:p-6 shadow-xs">
                <div className="flex items-center justify-between border-b border-orange-100/80 pb-3 mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-[#F97316]">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#17213a]">
                        Call for Papers Scope
                      </h2>
                    </div>
                  </div>
                  <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-bold text-[#F97316]">
                    5th Edition
                  </span>
                </div>

                <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700">
                  Academicians, researchers, postgraduate scholars, and industry professionals are cordially invited to submit original, high-quality, unpublished research papers in Artificial Intelligence, Quantum-Inspired Computing, Deep-Tech Innovations, and Inclusive Cyber-Physical Systems.
                </p>

                {/* Compact 2x2 Metadata Grid */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-xl border border-orange-100/80 bg-[#FFFBF8] p-3.5 text-xs sm:text-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Dates &amp; Mode</span>
                    <strong className="text-slate-900 text-sm sm:text-[15px]">09–10 April 2027</strong>
                    <span className="text-slate-600 block text-xs mt-0.5">Blended Mode (Online &amp; In-Person)</span>
                  </div>

                  <div className="rounded-xl border border-orange-100/80 bg-[#FFFBF8] p-3.5 text-xs sm:text-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Host Institution</span>
                    <strong className="text-slate-900 text-sm sm:text-[15px]">Dr RVR NRIIT (DTBU)</strong>
                    <span className="text-slate-600 block text-xs mt-0.5">Vijayawada, Andhra Pradesh, India</span>
                  </div>

                  <div className="rounded-xl border border-orange-100/80 bg-[#FFFBF8] p-3.5 text-xs sm:text-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Publication</span>
                    <strong className="text-slate-900 text-sm sm:text-[15px]">Official Proceedings</strong>
                    <span className="text-[#F97316] font-bold block text-xs mt-0.5">Scopus Indexation</span>
                  </div>

                  <div className="rounded-xl border border-orange-100/80 bg-[#FFFBF8] p-3.5 text-xs sm:text-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Paper Formatting</span>
                    <strong className="text-slate-900 text-sm sm:text-[15px]">IEEE USA Format</strong>
                    <span className="text-slate-600 block text-xs mt-0.5">6 Pages Maximum Strictly</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Important Dates & Timeline (Compact) */}
              <div className="rounded-2xl border border-orange-100 bg-white p-5 sm:p-6 shadow-xs">
                <div className="flex items-center justify-between border-b border-orange-100/80 pb-3 mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-[#F97316]">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#17213a]">
                        Important Submission Deadlines
                      </h2>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    5 Milestones
                  </span>
                </div>

                <div className="space-y-2.5">
                  {IMPORTANT_DATES.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                        item.status === 'urgent'
                          ? 'border-orange-200 bg-orange-50/50'
                          : 'border-slate-100 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                          {idx + 1}
                        </span>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-[#17213a]">
                            {item.title}
                          </div>
                          <span className="text-[11px] text-slate-500 uppercase font-semibold">
                            {item.badge}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-sm sm:text-base font-black text-[#F97316]">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ---------------- RIGHT WORKSPACE (6 COLS) ---------------- */}
            <div className="lg:col-span-6 space-y-4">
              {/* Card 1: Author Guidelines */}
              <div className="rounded-2xl border border-orange-100 bg-white p-5 sm:p-6 shadow-xs">
                <div className="flex items-center justify-between border-b border-orange-100/80 pb-3 mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-[#F97316]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#17213a]">
                        Paper Submission Guidelines
                      </h2>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#F97316]">
                    Double-Blind Peer Review
                  </span>
                </div>

                <div className="space-y-3">
                  {GUIDELINES.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-orange-50 bg-[#FFFBF8] p-3.5 text-xs sm:text-sm"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Check className="h-4 w-4 text-[#F97316] shrink-0" />
                        <h3 className="font-extrabold text-[#17213a] text-xs sm:text-sm">
                          {item.title}
                        </h3>
                      </div>
                      <p className="pl-6 text-slate-700 leading-relaxed text-xs sm:text-[13px]">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Microsoft CMT Submission Box */}
              <div className="rounded-2xl border-2 border-orange-200 bg-gradient-to-r from-orange-500 to-[#ea580c] p-5 sm:p-6 text-white shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-extrabold uppercase tracking-wider mb-1.5">
                      Official Portal
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white">
                      Microsoft CMT Submission Portal
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-orange-100 max-w-md leading-relaxed">
                      Submit PDF papers adhering strictly to the IEEE conference format with plagiarism below 10%.
                    </p>
                  </div>

                  <a
                    href="https://cmt3.research.microsoft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-[#ea580c] shadow-sm transition hover:bg-orange-50"
                  >
                    <span>Submit via CMT</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          3. RESEARCH TOPICS CONSOLE (HIGH-DENSITY & FILTERABLE)
         ========================================================= */}
      <section className="py-5 sm:py-7 border-t border-orange-100/80 bg-white">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-6">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-[#F97316]">
              Technical Domains
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-[#17213a]">
              Conference Research Topics
            </h2>
            <div className="mx-auto mt-2.5 h-1 w-12 rounded-full bg-[#F97316]" />
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-slate-500">
              Explore specialized research tracks and submit your manuscripts across 21 emerging technical domains.
            </p>

            {/* Symmetrical Category Filter Pills */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {TOPIC_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCat(cat.id)}
                  className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                    selectedCat === cat.id
                      ? 'bg-[#F97316] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-orange-50 hover:text-[#F97316] border border-slate-200/60'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* High-Density Topics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredTopics.map((topic, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 rounded-xl border border-orange-100/80 bg-[#FFFBF8] px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 transition-all duration-200 hover:border-orange-300 hover:bg-orange-50/60"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#F97316] group-hover:scale-125 transition-transform" />
                <span className="line-clamp-1">{topic.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-orange-100/70 text-xs sm:text-sm">
            <span className="text-slate-600">
              Showing {filteredTopics.length} of {ALL_TOPICS.length} topics across all computer and emerging engineering domains.
            </span>
            <Link
              to="/tracks"
              className="inline-flex items-center gap-1 font-bold text-[#F97316] hover:text-[#ea580c] hover:underline"
            >
              <span>View Track Sessions &amp; Chairs</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. OFFICIAL IEEE TEMPLATES DOWNLOAD FOOTER STRIP
         ========================================================= */}
      <section className="border-t border-orange-100 bg-[#FFFBF8] py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-orange-200/80 bg-white p-5 sm:p-6 shadow-xs">
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#17213a]">
                Official IEEE Paper Formatting Kits
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                A4 USA 2-column layout templates in Microsoft Word (DOCX) and LaTeX packages.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={ieeeDocxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition hover:bg-[#ea580c]"
              >
                <Download className="h-4 w-4" />
                <span>Download IEEE A4 Template (DOCX)</span>
              </a>

              <a
                href={ieeeTemplateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-orange-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-700 transition hover:border-[#F97316] hover:bg-orange-50 hover:text-[#F97316]"
              >
                <ExternalLink className="h-4 w-4" />
                <span>IEEE LaTeX Portal</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CallForPapersPage;
