import React, { useMemo, useState } from 'react';
import { conferenceData } from '../data/conferenceData';

const TOPIC_CATEGORIES = [
  { id: 'all', label: 'All (21)' },
  { id: 'ai', label: 'AI & ML' },
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
    desc: 'IEEE standard 2-column layout (A4). Maximum of 6 pages including figures, tables, and bibliography.',
  },
  {
    title: 'Submission Portal',
    desc: 'Submit manuscripts in PDF format exclusively through the Microsoft CMT portal.',
  },
  {
    title: 'Originality & Plagiarism (<10%)',
    desc: 'Unpublished, original research only. Similarity must be strictly below 10% excluding references.',
  },
  {
    title: 'Double-Blind Review',
    desc: 'Omit author names, affiliations, emails, funding notes, and self-identifying citations.',
  },
  {
    title: 'Registration & Presentation',
    desc: 'At least one author must register by 10th Mar 2027 and present the paper during the conference.',
  },
  {
    title: 'Proceedings Publication & Indexing',
    desc: 'Accepted and presented papers may be submitted for proceedings consideration. Potential publishing routes are Springer Nature, AIP Publishing, or Taylor & Francis; publisher selection, publication, and indexing are subject to confirmation and acceptance. EasyChair is a conference management platform, not a publisher.',
  },
];

const IMPORTANT_DATES = [
  { title: 'Manuscript Submission', date: '24th Jan, 2027', badge: 'Submission Closes', urgent: true },
  { title: 'Acceptance Notification', date: '24th Feb, 2027', badge: 'Peer Review' },
  { title: 'Author Registration', date: '10th Mar, 2027', badge: 'Registration Due' },
  { title: 'Camera Ready Due', date: '30th Mar, 2027', badge: 'Final Files' },
  { title: 'Conference Dates', date: '09–10 Apr, 2027', badge: 'Technical Sessions', urgent: true },
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
    <main className="min-h-screen bg-white text-[#17213a] antialiased pb-8">

      {/* ── HEADER ── */}
      <section className="bg-white py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-black uppercase tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px]">
            Call for Papers &amp; <span className="text-[#F97316]">Submission Guidelines</span>
          </h1>
          <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-[#F97316]" />
          <p className="mx-auto mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-[15px]">
            Submit original manuscripts in AI, Quantum Computing, and Deep-Tech Innovations.
          </p>

          {/* Quick Actions */}
          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2">
            <a
              href="https://cmt3.research.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#F97316] hover:bg-[#ea580c] text-white px-4 py-2 text-sm font-bold rounded transition-colors"
            >
              Submit via CMT
            </a>
            <a
              href={ieeeDocxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-[#F97316] text-[#F97316] hover:bg-orange-50 px-4 py-2 text-sm font-bold rounded transition-colors"
            >
              IEEE Template (DOCX)
            </a>
            <a
              href={ieeeTemplateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-slate-300 text-slate-600 hover:border-[#F97316] hover:text-[#F97316] px-4 py-2 text-sm font-bold rounded transition-colors"
            >
              LaTeX Portal
            </a>
            <span className="inline-flex items-center bg-orange-100 text-[#ea580c] px-3.5 py-2 text-sm font-bold rounded">
              Deadline: 24th Jan, 2027
            </span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT (TWO COLUMNS, NO ICONS) ── */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mt-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 items-stretch">

          {/* LEFT COLUMN: SCOPE + DEADLINES */}
          <div className="flex flex-col gap-2.5">

            {/* Scope */}
            <div className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3 mb-1.5">
                <h2 className="text-base font-bold text-[#17213a] sm:text-lg">Call for Papers Scope</h2>
                <span className="border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-bold text-[#F97316] rounded">
                  5th Edition
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed sm:text-[15px]">
                Academicians, researchers, postgraduate scholars, and industry professionals are invited to submit
                original, high-quality, unpublished research papers across conference tracks.
              </p>

              {/* 3 Spec Tiles */}
              <div className="mt-2.5 grid grid-cols-1 gap-2 border-t border-slate-100 pt-2.5 sm:grid-cols-3">
                <div className="bg-slate-50 border border-slate-200/70 rounded-lg p-2 text-center">
                  <span className="text-[11px] font-bold uppercase text-slate-400 block">Dates &amp; Mode</span>
                  <strong className="text-sm text-slate-900 block mt-1">09–10 Apr 2027</strong>
                  <span className="text-xs text-slate-500 block mt-0.5">Blended</span>
                </div>
                <div className="bg-orange-50/60 border border-orange-200/60 rounded-lg p-2 text-center">
                  <span className="text-[11px] font-bold uppercase text-orange-600 block">Proceedings</span>
                  <strong className="text-sm text-slate-900 block mt-1">Publisher To Be Confirmed</strong>
                  <span className="text-xs text-[#F97316] font-semibold block mt-0.5">Indexing subject to acceptance</span>
                </div>
                <div className="bg-slate-50 border border-slate-200/70 rounded-lg p-2 text-center">
                  <span className="text-[11px] font-bold uppercase text-slate-400 block">Paper Format</span>
                  <strong className="text-sm text-slate-900 block mt-1">IEEE A4</strong>
                  <span className="text-xs text-slate-500 block mt-0.5">Max 6 Pages</span>
                </div>
              </div>
            </div>

            {/* Important Deadlines */}
            <div className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 shadow-sm flex-1 flex flex-col">
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h2 className="text-base font-bold text-[#17213a] sm:text-lg">Important Deadlines</h2>
                  <span className="text-xs font-semibold text-slate-400">5 Milestones</span>
                </div>

                <div className="border border-slate-200 rounded divide-y divide-slate-100">
                  {IMPORTANT_DATES.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 px-3 py-2 text-sm transition-colors sm:px-4 ${item.urgent ? 'bg-orange-50/50' : 'bg-white hover:bg-slate-50'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-orange-100 text-xs font-bold text-orange-700">
                          {idx + 1}
                        </span>
                        <div>
                          <span className="font-bold text-[#17213a]">{item.title}</span>
                          <span className="ml-2 text-xs font-medium text-slate-400 uppercase tracking-wide">
                            {item.badge}
                          </span>
                        </div>
                      </div>
                      <span className="font-extrabold text-[#F97316] shrink-0 text-sm">
                        {item.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-2.5 text-xs text-slate-400 text-center">
                All deadlines close at 23:59 IST on the specified dates.
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: SUBMISSION GUIDELINES */}
          <div className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 shadow-sm flex flex-col">
            <div className="flex items-center justify-between gap-3 mb-2">
              <h2 className="text-base font-bold text-[#17213a] sm:text-lg">Submission Guidelines</h2>
              <span className="border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-bold text-[#F97316] rounded">
                Double-Blind Review
              </span>
            </div>

            <div className="border border-slate-200 rounded divide-y divide-slate-100">
              {GUIDELINES.map((item, idx) => (
                <div key={idx} className="px-3.5 py-2 hover:bg-slate-50 transition-colors sm:px-4">
                  <h3 className="text-sm font-bold text-[#17213a] sm:text-[15px]">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Direct Author Links */}
        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-2.5 text-sm">
          <span className="text-slate-500 text-sm">Need formatting help?</span>
          <div className="flex items-center gap-3">
            <a
              href={ieeeDocxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#F97316] hover:underline text-sm"
            >
              DOCX
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={ieeeTemplateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-slate-600 hover:text-[#F97316] hover:underline text-sm"
            >
              LaTeX
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://cmt3.research.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#F97316] hover:underline text-sm"
            >
              CMT Portal &rarr;
            </a>
          </div>
        </div>

        {/* ── RESEARCH TOPICS (COMPACT & SIMPLE) ── */}
        <div className="mt-4 bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3 pb-3 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">Technical Domains</span>
              <h2 className="text-lg font-bold text-[#17213a] sm:text-xl">Conference Research Topics</h2>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {TOPIC_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCat(cat.id)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded border transition-colors sm:text-sm ${selectedCat === cat.id
                      ? 'bg-[#F97316] text-white border-[#F97316]'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-[#F97316] hover:text-[#F97316]'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {filteredTopics.map((topic, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 border border-slate-100 bg-slate-50/50 hover:bg-orange-50/60 rounded-lg px-2.5 py-2 text-sm text-slate-700 transition-colors"
              >
                <span className="h-1.5 w-1.5 shrink-0 bg-[#F97316] rounded-full" />
                <span className="truncate">{topic.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
            <span>Showing {filteredTopics.length} of {ALL_TOPICS.length} topics</span>
          </div>
        </div>

      </div>

    </main>
  );
};

export default CallForPapersPage;
