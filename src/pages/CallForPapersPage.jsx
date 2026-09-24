import React, { useMemo } from 'react';
import {
  Download,
  FileText,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Lock,
  ExternalLink,
} from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

/*
  ICRAIIQ2IT 2027 — Call for Papers / Author Guidelines

  Redesigned from the supplied reference screenshots.

  Layout:
  ┌─────────────────────────────────────────────────────────────┐
  │ CALL FOR PAPERS              PAPER SUBMISSION GUIDELINES    │
  │                                                             │
  ├─────────────────────────────────────────────────────────────┤
  │ TOPICS FOR SUBMISSIONS       IMPORTANT DATES                │
  └─────────────────────────────────────────────────────────────┘

  Visual direction:
  - Clean white academic-conference layout
  - Pink #F97316 section branding
  - Navy / dark-blue body text
  - No ScientificBackground
  - No dark futuristic cards
  - Responsive desktop / tablet / mobile
  - Data-first rendering from conferenceData where available
*/

const DEFAULT_TOPICS = [
  'Quantum Computing in AI',
  'Explainable AI and Ethical AI',
  'AI for Social Good',
  'Fuzzy Systems and Applications',
  'Evolutionary Algorithms and Swarm Intelligence',
  'Neural Networks and Cognitive Computing',
  'Intelligent Decision Support Systems',
  'Quantum Intelligence in Data Mining',
  'Computational Neuroscience',
  'Assistive Technologies for Differentially-abled Individuals',
  'AI for Accessibility and Inclusive Design',
  'Smart Devices and Ubiquitous Computing',
  'Blockchain Applications in AI and IoT',
  'Augmented and Virtual Reality in Intelligent Systems',
  'Internet of Things (IoT) and Smart Cities',
  'Cybersecurity and Privacy in AI Systems',
  'Human-Computer Interaction and User Experience',
  'Autonomous Vehicles and Robotics',
  'Applications of AI',
];

const DEFAULT_GUIDELINES = [
  'Background, Motivation, and Objective',
  'Statement of Contribution, Methodology',
  'Results, Discussions and Conclusions',
  'Maximum number of pages is 8 in 8.5 × 11-inch paper single-column template.',
  'The Paper format will be: AIP / publisher author template.',
  'Language: English is the official language of the conference. The paper should be written and presented only in English.',
  'Plagiarism must not be above 10% to 15%.',
  'Few papers would be allowed as poster presentations.',
];

const DEFAULT_DATES = [
  {
    label: 'Submission deadline for Full-Text Paper:',
    date: 'April 05, 2027',
  },
  {
    label: 'Notification of Acceptance/Rejection:',
    date: 'April 15, 2027',
  },
  {
    label:
      'Last date for Camera-ready Full paper submission (with modification) & Registration with Fees:',
    date: 'April 30, 2027',
  },
  {
    label: 'Conference Dates:',
    date: 'May 08 – 09, 2027',
  },
];

const DEFAULT_CALL_TEXT = [
  'Original contributions based on the results of research and developments are solicited. Prospective authors are requested to submit their papers in the prescribed conference paper format. All accepted and presented papers will be considered for publication through the conference publication arrangements.',
  'ICRAIIQ2IT 2027 invites academicians, researchers, industry professionals and research scholars to submit their original, previously unpublished and high-quality research papers. The conference will be focused on addressing research challenges in the following fields, but are not limited to the topics listed below.',
];

const getValue = (value, fallback) =>
  value === undefined || value === null || value === '' ? fallback : value;

const getArray = (value, fallback) =>
  Array.isArray(value) && value.length > 0 ? value : fallback;

function SectionIcon({ label }) {
  return (
    <div
      aria-hidden="true"
      className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl bg-[#F97316] text-[18px] font-extrabold text-white shadow-[0_5px_10px_rgba(220,47,104,0.18)] sm:h-[61px] sm:w-[61px]"
    >
      {label}
    </div>
  );
}

function SectionTitle({ code, title }) {
  return (
    <div className="flex items-center gap-3">
      <SectionIcon label={code} />

      <h2 className="text-[24px] font-extrabold uppercase leading-tight tracking-[-0.01em] text-[#F97316] sm:text-[25px]">
        {title}
      </h2>
    </div>
  );
}

function GuidelineList({ items }) {
  return (
    <ol className="mt-6 space-y-3.5 pl-7 text-[15px] leading-6 text-[#173c69] marker:text-[#173c69] sm:text-[16px]">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="pl-1">
          {item}
        </li>
      ))}
    </ol>
  );
}

function TopicGrid({ topics }) {
  return (
    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {topics.map((topic, index) => (
        <div
          key={`${topic}-${index}`}
          className="flex min-h-[63px] items-center rounded-lg border border-orange-100 bg-[#FFF7ED] px-4 py-3 text-[14px] leading-5 text-[#173c69] shadow-[0_2px_5px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50 hover:shadow-md"
        >
          {topic}
        </div>
      ))}
    </div>
  );
}

function DatesTable({ dates }) {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-orange-100 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06)]">
      {dates.map((item, index) => (
        <div
          key={`${item.label}-${index}`}
          className={`grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_136px] ${index !== dates.length - 1 ? 'border-b border-orange-200' : ''
            }`}
        >
          <div className="flex min-h-[80px] items-center bg-white px-4 py-4 text-[14px] font-medium leading-6 text-[#173c69] sm:px-4 sm:text-[15px]">
            {item.label}
          </div>

          <div className="flex min-h-[80px] items-center justify-start bg-[#FFFBF8] px-4 py-4 text-left text-[14px] font-medium leading-6 text-[#173c69] sm:justify-center sm:text-center">
            {item.date}
          </div>
        </div>
      ))}
    </div>
  );
}

export const CallForPapersPage = () => {
  const data = conferenceData || {};

  const callText = getArray(
    data.callForPapersText || data.callText,
    DEFAULT_CALL_TEXT
  );

  const topics = getArray(
    data.submissionTopics || data.topicsForSubmission || data.topics,
    DEFAULT_TOPICS
  );

  const guidelines = getArray(
    data.paperSubmissionGuidelines || data.submissionGuidelines,
    DEFAULT_GUIDELINES
  );

  const importantDates = useMemo(() => {
    if (
      Array.isArray(data.importantDates) &&
      data.importantDates.length > 0
    ) {
      return data.importantDates.map((item) => ({
        label:
          item.label ||
          item.title ||
          item.name ||
          'Conference milestone',
        date: item.date || item.value || '',
      }));
    }

    const dates = data.dates || {};

    return [
      {
        label: 'Submission deadline for Full-Text Paper:',
        date: getValue(
          dates.submissionDeadline,
          DEFAULT_DATES[0].date
        ),
      },
      {
        label: 'Notification of Acceptance/Rejection:',
        date: getValue(
          dates.notificationDate || dates.notification,
          DEFAULT_DATES[1].date
        ),
      },
      {
        label:
          'Last date for Camera-ready Full paper submission (with modification) & Registration with Fees:',
        date: getValue(
          dates.cameraReadyDate || dates.cameraReady,
          DEFAULT_DATES[2].date
        ),
      },
      {
        label: 'Conference Dates:',
        date: getValue(
          dates.conferenceDates || dates.conferenceDate,
          DEFAULT_DATES[3].date
        ),
      },
    ];
  }, [data.importantDates, data.dates]);

  const submissionUrl =
    data.submissionUrl ||
    data.paperSubmissionUrl ||
    data.links?.submission ||
    '';

  const templateDocUrl =
    data.templateDocUrl ||
    data.links?.wordTemplate ||
    '#template-doc';

  const templateLatexUrl =
    data.templateLatexUrl ||
    data.links?.latexTemplate ||
    '#template-latex';

  const formatText = getValue(
    data.paperFormat,
    'Max 8 Pages | Prescribed Conference Format'
  );

  const publisherText = getValue(
    data.publisher,
    'Conference Publication'
  );

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
              <SectionTitle code="CF" title="Call for Papers" />

              <div className="mt-6 max-w-[760px] space-y-5">
                {callText.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[15px] leading-7 text-[#173c69] sm:text-[16px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6 rounded-r-lg border-l-4 border-[#F97316] bg-[#FFF7ED] px-4 py-4 text-[13px] leading-6 text-[#173c69] shadow-sm">
                <strong className="font-extrabold text-[#17213a]">
                  Conference:
                </strong>{' '}
                ICRAIIQ2IT 2027
                <span className="mx-2 text-slate-400">|</span>
                <strong className="font-extrabold text-[#17213a]">
                  Format:
                </strong>{' '}
                {formatText}
                <span className="mx-2 text-slate-400">|</span>
                <strong className="font-extrabold text-[#17213a]">
                  Publisher:
                </strong>{' '}
                {publisherText}
              </div>
            </section>

            {/* -------------------------------------------------
                PAPER SUBMISSION GUIDELINES
               ------------------------------------------------- */}
            <section>
              <SectionTitle
                code="PG"
                title="Paper Submission Guidelines"
              />

              <GuidelineList items={guidelines} />

              {submissionUrl && (
                <div className="mt-4 text-[15px] leading-7 text-[#173c69]">
                  <strong className="font-bold text-[#17213a]">
                    Paper Submission Link:
                  </strong>{' '}
                  <a
                    href={submissionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-[#1769aa] underline decoration-[#1769aa]/40 underline-offset-2 hover:text-[#F97316]"
                  >
                    {submissionUrl}
                    <ExternalLink className="ml-1 inline-block h-3.5 w-3.5" />
                  </a>
                </div>
              )}
            </section>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM: TOPICS + IMPORTANT DATES
         ========================================================= */}
      <section className="border-t border-orange-100 bg-white px-5 pb-14 pt-8 sm:px-8 lg:px-10 lg:pb-16 lg:pt-10">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(500px,0.95fr)] lg:gap-14">
            {/* -------------------------------------------------
                TOPICS
               ------------------------------------------------- */}
            <section>
              <SectionTitle
                code="TP"
                title="Topics for Submissions"
              />

              <TopicGrid topics={topics} />
            </section>

            {/* -------------------------------------------------
                IMPORTANT DATES
               ------------------------------------------------- */}
            <section>
              <SectionTitle code="ID" title="Important Dates" />

              <DatesTable dates={importantDates} />
            </section>
          </div>
        </div>
      </section>

      {/* =========================================================
          DOWNLOAD TEMPLATES
          Kept compact so it does not dominate the reference
          layout, but remains available for authors.
         ========================================================= */}
      <section className="border-t border-orange-100 bg-[#FFFBF8] px-5 py-9 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-5 rounded-xl border border-orange-100 bg-white px-6 py-5 text-center shadow-sm sm:flex-row sm:text-left">
          <div>
            <h2 className="text-base font-extrabold text-[#17213a]">
              Download Paper Templates
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Use the official template package when preparing your manuscript.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={templateDocUrl}
              target={templateDocUrl !== '#template-doc' ? '_blank' : undefined}
              rel={
                templateDocUrl !== '#template-doc'
                  ? 'noopener noreferrer'
                  : undefined
              }
              className="inline-flex items-center gap-2 rounded-lg border border-[#F97316] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-[#F97316] transition-all hover:bg-[#F97316] hover:text-white"
            >
              <Download className="h-4 w-4" />
              Word Template
            </a>

            <a
              href={templateLatexUrl}
              target={
                templateLatexUrl !== '#template-latex'
                  ? '_blank'
                  : undefined
              }
              rel={
                templateLatexUrl !== '#template-latex'
                  ? 'noopener noreferrer'
                  : undefined
              }
              className="inline-flex items-center gap-2 rounded-lg border border-[#F97316] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-[#F97316] transition-all hover:bg-[#F97316] hover:text-white"
            >
              <Download className="h-4 w-4" />
              LaTeX Package
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CallForPapersPage;
