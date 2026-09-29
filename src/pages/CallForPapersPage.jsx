import React, { useMemo } from 'react';
import {
  Download,
  FileText,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Lock,
  ExternalLink,
  Calendar,
  Layers
} from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

const DEFAULT_TOPICS = [
  'Machine Learning and Deep Learning Applications',
  'Generative AI and Large Language Models',
  'Quantum Inspired Computing and Algorithms',
  'Data Science, Big Data Analytics, and Business Intelligence',
  'Explainable, Ethical, and Responsible AI',
  'Edge Computing and Intelligent Automation',
  'Internet of Things (IoT) and Smart Systems',
  'Cloud Computing and Distributed Systems',
  'Cybersecurity, Blockchain, and Digital Forensics',
  'Computer Vision and Image Processing',
  'Natural Language Processing and Speech Technologies',
  'Human–Computer Interaction and Cognitive Computing',
  'AI in Healthcare, Education, Agriculture, and Smart Cities',
  'AI for Sustainable Development and Climate Solutions',
  'Quantum Cryptography and Intelligent Security Systems',
  'Embedded Systems and Smart Sensor Technologies',
  'High-Performance Computing and Next-Generation Networks',
  'Deep-Tech Innovations and Emerging Technologies',
  'AI Applications in Finance, Manufacturing, and Logistics',
  'Innovation Ecosystems, Startups, and Technology Entrepreneurship',
  'Interdisciplinary Applications of AI and Quantum Inspired Technologies'
];

const DEFAULT_GUIDELINES = [
  'Maximum number of pages is 6 in 8.25 × 11 inch paper single-column template.',
  'The Paper format will be IEEE, A4 USA FORMAT SUBMITTED IN LATEX / WORD FORMAT.',
  'Plagiarism and AI Similarity must not be above 10 % (without references); check should be performed by the authors and the report must also be attached along with the paper.',
  'Few papers would be allowed as poster presentations.',
  'Paper submission Link: MICROSOFT CMT',
  'All accepted and presented papers will be published in the conference proceedings with Scopus indexation.'
];

const DEFAULT_DATES = [
  {
    label: 'Submission of Manuscripts:',
    date: '24th Jan, 2027',
  },
  {
    label: 'Notification of Acceptance:',
    date: '24th Feb, 2027',
  },
  {
    label: 'Registration Deadline:',
    date: '10th Mar, 2027',
  },
  {
    label: 'Camera Ready Submission:',
    date: '30th Mar, 2027',
  },
  {
    label: 'Conference Dates:',
    date: '09–10 Apr, 2027',
  },
];

const DEFAULT_CALL_TEXT = [
  'We warmly invite Faculty members, research scholars, postgraduate students from AICTE-approved institutions, and industry professionals to participate and submit original, unpublished, and high-quality research papers in the areas of Artificial Intelligence, Quantum Inspired Computing, and Deep Technology Innovations.',
  'Manuscripts should be prepared in the prescribed IEEE format and limited to 6 pages. All accepted and presented papers will be published in the conference proceedings. The conference will be focused on addressing research challenges across key cutting-edge domains.'
];

function SectionIcon({ label }) {
  return (
    <div
      aria-hidden="true"
      className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-2xl bg-[#F97316] text-[16px] font-extrabold text-white shadow-[0_5px_10px_rgba(249,115,22,0.18)]"
    >
      {label}
    </div>
  );
}

function SectionTitle({ code, title }) {
  return (
    <div className="flex items-center gap-3">
      <SectionIcon label={code} />
      <h2 className="text-[22px] font-extrabold uppercase leading-tight tracking-[-0.01em] text-[#F97316] sm:text-[24px]">
        {title}
      </h2>
    </div>
  );
}

function GuidelineList({ items }) {
  return (
    <ol className="mt-6 space-y-3.5 pl-6 text-[15px] leading-6 text-[#173c69] sm:text-[16px]">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2.5">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600 mt-0.5">
            {index + 1}
          </span>
          <span className="text-slate-700">{item}</span>
        </li>
      ))}
    </ol>
  );
}

function TopicGrid({ topics }) {
  return (
    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic, index) => (
        <div
          key={index}
          className="flex min-h-[58px] items-center gap-2.5 rounded-xl border border-orange-100 bg-[#FFF7ED] px-4 py-3 text-[13.5px] font-medium leading-snug text-[#173c69] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50 hover:shadow-md"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />
          <span>{topic}</span>
        </div>
      ))}
    </div>
  );
}

function DatesTable({ dates }) {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-orange-100 bg-white shadow-sm">
      {dates.map((item, index) => (
        <div
          key={index}
          className={`grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_160px] ${
            index !== dates.length - 1 ? 'border-b border-orange-100' : ''
          }`}
        >
          <div className="flex min-h-[64px] items-center bg-white px-5 py-3 text-[14px] font-semibold text-[#173c69]">
            {item.label}
          </div>

          <div className="flex min-h-[64px] items-center justify-start sm:justify-center bg-orange-50/50 px-5 py-3 text-[14px] font-bold text-[#ea580c]">
            {item.date}
          </div>
        </div>
      ))}
    </div>
  );
}

export const CallForPapersPage = () => {
  const data = conferenceData || {};

  const callText = DEFAULT_CALL_TEXT;
  const topics = data.topicsList || DEFAULT_TOPICS;
  const guidelines = data.publicationDetails?.guidelines || DEFAULT_GUIDELINES;

  const importantDates = useMemo(() => {
    if (Array.isArray(data.importantDatesList) && data.importantDatesList.length > 0) {
      return data.importantDatesList.map((item) => ({
        label: `${item.title}:`,
        date: item.date,
      }));
    }
    return DEFAULT_DATES;
  }, [data.importantDatesList]);

  const ieeeTemplateUrl =
    data.publicationDetails?.ieeeTemplateUrl ||
    'https://www.ieee.org/conferences/publishing/templates';
  const ieeeDocxUrl =
    data.publicationDetails?.ieeeDocxUrl ||
    'https://ieee-org.widen.net/content/ge5anzdecd/original/conference-template-a4.docx';

  return (
    <main className="min-h-screen bg-white text-[#17213a]">
      {/* =========================================================
          TOP: CALL FOR PAPERS + PAPER SUBMISSION GUIDELINES
         ========================================================= */}
      <section className="bg-white px-5 pb-12 pt-10 sm:px-8 lg:px-10 lg:pb-14 lg:pt-12">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* -------------------------------------------------
                CALL FOR PAPERS
               ------------------------------------------------- */}
            <section>
              <SectionTitle code="CF" title="Call for Papers (CFP)" />

              <div className="mt-6 max-w-[760px] space-y-4">
                {callText.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[15px] leading-7 text-[#173c69] sm:text-[16px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6 rounded-r-xl border-l-4 border-[#F97316] bg-[#FFF7ED] p-4 text-[13.5px] leading-6 text-[#173c69] shadow-sm space-y-1">
                <div>
                  <strong className="font-extrabold text-[#17213a]">Conference:</strong>{' '}
                  ICRAIQ2IT - 2027 (5th Edition)
                </div>
                <div>
                  <strong className="font-extrabold text-[#17213a]">Dates & Venue:</strong>{' '}
                  09 – 10, April 2027 | Vijayawada, India | Blended Mode
                </div>
                <div>
                  <strong className="font-extrabold text-[#17213a]">Format & Limit:</strong>{' '}
                  IEEE A4 USA Format (LaTeX / Word) • Maximum 6 Pages
                </div>
                <div>
                  <strong className="font-extrabold text-[#17213a]">Indexation:</strong>{' '}
                  Official Conference Proceedings with Scopus Indexation
                </div>
              </div>
            </section>

            {/* -------------------------------------------------
                PAPER SUBMISSION GUIDELINES
               ------------------------------------------------- */}
            <section>
              <SectionTitle code="PG" title="Paper Submission Guidelines" />

              <GuidelineList items={guidelines} />

              <div className="mt-6 p-4 rounded-xl border border-orange-200 bg-orange-50/40">
                <div className="text-sm font-bold text-[#1d315f] mb-2 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-[#F97316]" />
                  Paper Submission Portal: MICROSOFT CMT
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Authors must submit their original papers adhering strictly to the IEEE conference format with plagiarism below 10%.
                </p>
                <a
                  href="https://cmt3.research.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#ea580c]"
                >
                  Go to Microsoft CMT Portal
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM: TOPICS + IMPORTANT DATES
         ========================================================= */}
      <section className="border-t border-orange-100 bg-white px-5 pb-14 pt-8 sm:px-8 lg:px-10 lg:pb-16 lg:pt-10">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(420px,0.8fr)] lg:gap-14">
            {/* -------------------------------------------------
                TOPICS
               ------------------------------------------------- */}
            <section>
              <SectionTitle code="TP" title="Conference Topics" />
              <p className="mt-2 text-sm text-slate-500">
                The conference addresses research challenges across the following domains (not limited to):
              </p>

              <TopicGrid topics={topics} />
            </section>

            {/* -------------------------------------------------
                IMPORTANT DATES
               ------------------------------------------------- */}
            <section>
              <SectionTitle code="ID" title="Important Dates" />
              <p className="mt-2 text-sm text-slate-500">
                Key conference milestones and paper submission deadlines:
              </p>

              <DatesTable dates={importantDates} />
            </section>
          </div>
        </div>
      </section>

      {/* =========================================================
          DOWNLOAD TEMPLATES
         ========================================================= */}
      <section className="border-t border-orange-100 bg-[#FFFBF8] px-5 py-9 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-5 rounded-xl border border-orange-100 bg-white px-6 py-5 text-center shadow-sm sm:flex-row sm:text-left">
          <div>
            <h2 className="text-base font-extrabold text-[#17213a]">
              Download IEEE Paper Templates (A4)
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Prepare your manuscript according to the official IEEE template.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={ieeeDocxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#F97316] bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-[#F97316] transition-all hover:bg-[#F97316] hover:text-white"
            >
              <Download className="h-4 w-4" />
              Download IEEE A4 Template (DOCX)
            </a>

            <a
              href={ieeeTemplateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-all hover:bg-[#ea580c]"
            >
              <ExternalLink className="h-4 w-4" />
              IEEE LaTeX / Formatting Portal
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CallForPapersPage;
