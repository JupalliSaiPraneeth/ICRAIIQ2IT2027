import React from 'react';
import { ExternalLink } from 'lucide-react';

const PREVIOUS_CONFERENCES = [
  {
    name: 'ICRAIC2IT 2022',
    year: '2022',
    publisher: 'AIP Publishing',
    publisherType: 'AIP Conference Proceedings (Scopus Indexed)',
    url: 'https://nriit.edu.in/icraic2it-event/',
    description: 'International Conference on Recent Advancements in Artificial Intelligence, Computational Intelligence, and Inclusive Technologies.',
  },
  {
    name: 'ICRAIC2IT 2025',
    year: '2025',
    publisher: 'Taylor & Francis',
    publisherType: 'Taylor & Francis / CRC Press',
    url: 'https://nriit.edu.in/icraic2it/',
    description: 'Advanced computing, deep intelligence, and inclusive engineering paradigms international conference.',
  },
  {
    name: 'ICRAIQ2IT 2026',
    year: '2026',
    publisher: 'Taylor & Francis',
    publisherType: 'Taylor & Francis / Routledge',
    url: 'https://www.nriit.edu.in/icraiq2it-2026/',
    description: 'Recent Advancements in Artificial Intelligence, Quantum Intelligence, and Inclusive Technologies.',
  },
  {
    name: 'QUADNEXT 2026',
    year: '2026',
    publisher: 'AICTE & Google Scholar',
    publisherType: 'Sponsored by AICTE, Govt. of India • Google Scholar',
    url: 'https://nriit.edu.in/quadnext-2026/',
    description: 'National & international summit on quantum advancements, next-generation computing, and emerging intelligence.',
  },
];

const SELECTED_OUTCOMES = [
  {
    title: 'AIP Conference Proceedings',
    category: 'Scopus Indexed Proceedings',
    publisher: 'AIP Publishing',
    url: 'https://pubs.aip.org/aip/acp/article-abstract/2796/1/010001/2902274/Preface-Recent-Advancements-and-Innovations-in',
    description: 'Preface & peer-reviewed research papers from the Recent Advancements and Innovations in Computing series published in AIP Conference Proceedings Volume 2796.',
    badgeText: 'Volume 2796',
  },
  {
    title: 'Routledge Book Publication',
    category: 'Authored Book Volume',
    publisher: 'Routledge (Taylor & Francis)',
    url: 'https://www.routledge.com/Artificial-Intelligence-Computational-Intelligence-and-Inclusive-Technologies/Sambasivarao-RoopaDeviBhima/p/book/9781041240952',
    description: 'Artificial Intelligence, Computational Intelligence and Inclusive Technologies — Published by Routledge (Taylor & Francis Group). ISBN: 9781041240952.',
    badgeText: 'ISBN: 9781041240952',
  },
  {
    title: 'Zenodo Proceedings Archive',
    category: 'CERN Open Access Archive',
    publisher: 'Zenodo / OpenAIRE',
    url: 'https://doi.org/10.5281/zenodo.19349751',
    description: 'Permanent digital archive and DOI indexing for proceedings papers and technical summaries hosted on the European Open Science Zenodo repository.',
    badgeText: 'DOI: 10.5281/zenodo.19349751',
  },
];

export const PreviousProceedingsPage = () => {
  return (
    <div className="bg-white text-[#17213a] pb-10 sm:pb-14">
      {/* =========================================================
          HERO / PAGE TITLE BANNER
         ========================================================= */}
      <section className="bg-white px-5 pb-1 pt-4 sm:px-8 sm:pb-2 sm:pt-5 lg:px-10">
        <div className="mx-auto max-w-[1280px] text-center">
          <h1 className="text-3xl font-black uppercase tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px]">
            Previous <span className="text-[#F97316]">Proceedings</span>
          </h1>
          <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-[#F97316]" />
        </div>
      </section>

      {/* =========================================================
          1. PREVIOUS CONFERENCES
         ========================================================= */}
      <section className="px-5 py-2.5 sm:px-8 sm:py-3 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-2">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#F97316]">
              <span className="h-[2px] w-5 bg-[#F97316]" />
              <span>Conference Archive</span>
            </div>
            <h2 className="mt-0.5 text-2xl font-black tracking-tight text-[#17213a] sm:text-3xl">
              Previous Conferences
            </h2>
          </div>

          <div className="space-y-2">
            {PREVIOUS_CONFERENCES.map((conf) => (
              <div
                key={conf.name}
                className="group flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-3 shadow-xs transition-all duration-200 hover:border-orange-300 hover:shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-[#F97316] ring-4 ring-orange-100" />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold text-[#17213a] transition-colors group-hover:text-[#F97316] sm:text-base">
                        {conf.name}
                      </h3>
                      <span className="rounded-md border border-orange-200/60 bg-orange-50 px-2 py-0.5 text-xs font-bold text-[#F97316]">
                        {conf.year}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        • {conf.publisher}
                      </span>
                      <span className="text-xs font-medium text-orange-600">
                        ({conf.publisherType})
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {conf.description}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 pl-5 sm:pl-0 sm:self-center">
                  <a
                    href={conf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-bold text-[#F97316] transition-colors hover:bg-orange-100"
                  >
                    <span>View Conference</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          2. SELECTED OUTCOMES & PUBLICATIONS
         ========================================================= */}
      <section className="px-5 py-2.5 sm:px-8 sm:py-3 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-2">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#F97316]">
              <span className="h-[2px] w-5 bg-[#F97316]" />
              <span>Publications &amp; Indexing</span>
            </div>
            <h2 className="mt-0.5 text-2xl font-black tracking-tight text-[#17213a] sm:text-3xl">
              Selected Outcomes &amp; Publications
            </h2>
            <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">
              Selected outcomes and publications arising from these initiatives include:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-3">
            {SELECTED_OUTCOMES.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-3 shadow-xs transition-all duration-200 hover:border-orange-300 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-700">
                      {item.category}
                    </span>
                    <span className="text-xs font-semibold text-[#F97316]">
                      {item.publisher}
                    </span>
                  </div>

                  <h3 className="mt-1.5 text-base font-bold text-[#17213a] transition-colors group-hover:text-[#F97316]">
                    {item.title}
                  </h3>

                  <span className="mt-1 inline-block rounded border border-orange-200/60 bg-orange-50 px-2 py-0.5 font-mono text-[11px] font-semibold text-[#F97316]">
                    {item.badgeText}
                  </span>

                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="mt-2.5 border-t border-slate-100 pt-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F97316] hover:underline sm:text-sm"
                  >
                    <span>Access Publication</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreviousProceedingsPage;
