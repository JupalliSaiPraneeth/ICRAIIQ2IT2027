import React from 'react';

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
    id: 'poster',
    title: 'Best Poster Presentation Award',
    category: 'Poster Presentation',
    description:
      'For an effective poster that communicates sound research with clarity.',
    eligibility: 'Papers accepted and presented in the poster track.',
    recognition: 'Poster merit certificate and digital gallery recognition.',
    highlight: false,
  },
];

export const AwardsPage = () => {
  return (
    <div className="bg-white text-[#17213a] pb-6 sm:pb-8">
      {/* 1. Header */}
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

      {/* 2. Award Categories */}
      <section className="bg-white pt-1 pb-2 sm:pt-2 sm:pb-3">
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
    </div>
  );
};

export default AwardsPage;
