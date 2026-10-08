import React from 'react';
import { Link } from 'react-router-dom';

const AWARDS_LIST = [
  {
    id: 'oral',
    title: 'Best Oral Presentation Award',
    category: 'Oral Presentation',
    description:
      'For clear, rigorous, and engaging delivery of research in an oral technical session.',
    eligibility: 'Accepted and presented oral papers.',
    recognition: 'Certificate of merit and plaque.',
    highlight: true,
  },
  {
    id: 'student',
    title: 'Best Student Research Paper Award',
    category: 'Student Research',
    description:
      'For an outstanding research contribution led and presented by a student.',
    eligibility: 'B.Tech, M.Tech, M.S., or Ph.D. student as first author and presenter.',
    recognition: 'Student research certificate and memento.',
    highlight: false,
  },
  {
    id: 'poster',
    title: 'Best Poster Presentation Award',
    category: 'Poster Presentation',
    description:
      'For an effective poster that communicates sound research with clarity.',
    eligibility: 'Papers accepted and presented in the poster track.',
    recognition: 'Poster merit certificate and digital gallery recognition.',
    highlight: false,
  },
  {
    id: 'track',
    title: 'Outstanding Track Session Citations',
    category: 'Track Recognition',
    description:
      'Recognizes the top-scoring presentation in each technical track.',
    eligibility: 'Highest-scoring presentation in each of the 21 tracks.',
    recognition: 'Track certificate endorsed by the Session Chairs.',
    highlight: false,
  },
];

const EVALUATION_CRITERIA = [
  {
    percentage: '30%',
    title: 'Technical Depth & Novelty',
    desc: 'Originality, methodology, and technical rigor.'
  },
  {
    percentage: '30%',
    title: 'Presentation & Visual Delivery',
    desc: 'Clarity, visual organization, and time management.'
  },
  {
    percentage: '20%',
    title: 'Q&A Mastery & Domain Defense',
    desc: 'Accuracy and depth in responses to questions.'
  },
  {
    percentage: '20%',
    title: 'Societal & Practical Impact',
    desc: 'Applicability, reproducibility, and potential impact.'
  }
];

const CERTIFICATES_DATA = [
  {
    title: 'Paper Presentation cum Publication Certificate',
    badge: 'Authors & Presenters',
    desc: 'For registered authors presenting an accepted oral or poster paper; records presentation and proceedings details.',
  },
  {
    title: 'Official Certificate of Participation',
    badge: 'Attendees & Delegates',
    desc: 'For registered delegates attending conference sessions and activities.',
  },
  {
    title: 'Session Chair & Reviewer Citations',
    badge: 'Academic Leadership',
    desc: 'Recognizes the academic service of Session Chairs and Technical Reviewers.',
  }
];

export const AwardsPage = () => {
  return (
    <main className="min-h-screen bg-white text-[#17213a]">
      <section className="bg-white py-4 sm:py-5">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <h1 className="text-3xl font-black uppercase tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px]">
              Awards &amp; <span className="text-[#F97316]">Recognition</span>
            </h1>
            <div className="mx-auto mt-1.5 h-1 w-24 rounded-full bg-[#F97316]" />
            <p className="mx-auto mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              ICRAIIQ2IT 2027 recognizes outstanding research and presentations across its technical tracks.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-2 sm:py-3">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-2">
            <h2 className="text-2xl font-black tracking-tight text-[#17213a] sm:text-3xl">
              Award categories
            </h2>
            <p className="mt-0.5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              Awards are assessed during technical sessions by Session Chairs and Reviewers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 md:gap-2">
            {AWARDS_LIST.map((award) => (
              <div
                key={award.id}
                className={`rounded-xl bg-white p-2.5 sm:p-3 transition-colors ${
                  award.highlight
                    ? 'border-l-4 border-[#F97316] shadow-sm ring-1 ring-slate-200'
                    : 'border border-slate-200 hover:border-orange-300'
                }`}
              >
                <div>
                  <span className="text-sm font-semibold text-[#F97316]">{award.category}</span>
                  <h3 className="mt-0.5 text-lg font-bold text-[#17213a] sm:text-xl">{award.title}</h3>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{award.description}</p>
                <div className="mt-2 grid gap-2 border-t border-slate-100 pt-2 text-sm leading-relaxed sm:grid-cols-2 sm:text-[15px]">
                  <p><span className="font-semibold text-slate-700">Eligibility: </span>{award.eligibility}</p>
                  <p><span className="font-semibold text-slate-700">Recognition: </span>{award.recognition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-2 sm:py-3">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-2">
            <h2 className="text-2xl font-black tracking-tight text-[#17213a] sm:text-3xl">
              How awards are assessed
            </h2>
            <p className="mt-0.5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              Each presentation is evaluated against a shared scoring rubric.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-4">
            {EVALUATION_CRITERIA.map((crit) => (
              <div
                key={crit.title}
                className="rounded-xl border border-slate-200 bg-white p-2.5 sm:p-3"
              >
                <div className="text-2xl font-bold text-[#F97316]">{crit.percentage}</div>
                <h3 className="mt-0.5 text-base font-bold text-[#17213a]">{crit.title}</h3>
                <p className="mt-0.5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{crit.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-2 rounded-xl border border-slate-200 bg-white p-2.5 text-sm leading-relaxed text-slate-600 sm:p-3 sm:text-[15px]">
            <p>
              Double-blind review is combined with session evaluation; the General Chair makes the final decision.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-2 sm:py-3">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-2">
            <h2 className="text-2xl font-black tracking-tight text-[#17213a] sm:text-3xl">
              Certificates
            </h2>
            <p className="mt-0.5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              Certificates recognize participation, paper presentation, and academic service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-1.5 lg:grid-cols-3">
            {CERTIFICATES_DATA.map((cert) => (
              <div
                key={cert.title}
                className="rounded-xl border border-slate-200 bg-white p-2.5 sm:p-3"
              >
                <span className="text-sm font-semibold text-[#F97316]">{cert.badge}</span>
                <h3 className="mt-0.5 text-lg font-bold text-[#17213a]">{cert.title}</h3>
                <p className="mt-0.5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-2 sm:py-3">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-1.5 sm:flex-row sm:items-center">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-[15px]">
              <span>
                Submit by <strong>24 January 2027</strong>; awards are announced at the valedictory on <strong>10 April 2027</strong>.
              </span>
            </p>
            <div className="flex shrink-0 flex-wrap gap-1.5">
              <Link
                to="/call-for-papers"
                className="inline-flex items-center gap-1.5 rounded-md bg-[#F97316] px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-[#ea580c]"
              >
                Call for Papers
              </Link>
              <Link
                to="/registration"
                className="inline-flex items-center rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#F97316] hover:text-[#F97316]"
              >
                Registration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AwardsPage;
