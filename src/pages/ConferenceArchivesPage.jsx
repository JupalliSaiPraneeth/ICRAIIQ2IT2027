import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { QUADNEXT_IMAGES } from '../data/quadnextImages';
import { FOURTH_CONFERENCE_IMAGES } from '../data/fourthConferenceImages';

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

const FIRST_CONFERENCE_IMAGES = [
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-2-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-3-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-4-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-6-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-7-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-8-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-9-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-10-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-11-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-12-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-13-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-17-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-18-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-19.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-20-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-21-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-22-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-23-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-24-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-26-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-27-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-28-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-29-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-30-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-31-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-32-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-33-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-34-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-36-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-37-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-38-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-39-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-40-scaled.jpg',
  'https://nriit.edu.in/icraiq2it-2026/icraic2it-41-scaled.jpg',
];

const SECOND_CONFERENCE_IMAGES = [
  'https://nriit.edu.in/icraiq2it-2026/2.jpg',
  'https://nriit.edu.in/icraiq2it-2026/3.jpg',
  'https://nriit.edu.in/icraiq2it-2026/4.jpg',
  'https://nriit.edu.in/icraiq2it-2026/5.jpg',
  'https://nriit.edu.in/icraiq2it-2026/6.jpg',
  'https://nriit.edu.in/icraiq2it-2026/7.jpg',
  'https://nriit.edu.in/icraiq2it-2026/8.jpg',
  'https://nriit.edu.in/icraiq2it-2026/9.jpg',
  'https://nriit.edu.in/icraiq2it-2026/10.jpg',
  'https://nriit.edu.in/icraiq2it-2026/11.jpg',
  'https://nriit.edu.in/icraiq2it-2026/12.jpg',
  'https://nriit.edu.in/icraiq2it-2026/13.jpg',
  'https://nriit.edu.in/icraiq2it-2026/14.jpg',
  'https://nriit.edu.in/icraiq2it-2026/15.jpg',
  'https://nriit.edu.in/icraiq2it-2026/16.jpg',
  'https://nriit.edu.in/icraiq2it-2026/17.jpg',
  'https://nriit.edu.in/icraiq2it-2026/18.jpg',
  'https://nriit.edu.in/icraiq2it-2026/19.jpg',
  'https://nriit.edu.in/icraiq2it-2026/20.jpg',
  'https://nriit.edu.in/icraiq2it-2026/21.jpg',
  'https://nriit.edu.in/icraiq2it-2026/22.jpg',
  'https://nriit.edu.in/icraiq2it-2026/23.jpg',
  'https://nriit.edu.in/icraiq2it-2026/24.jpg',
  'https://nriit.edu.in/icraiq2it-2026/25.jpg',
  'https://nriit.edu.in/icraiq2it-2026/26.jpg',
  'https://nriit.edu.in/icraiq2it-2026/27.jpg',
  'https://nriit.edu.in/icraiq2it-2026/28.jpg',
  'https://nriit.edu.in/icraiq2it-2026/29.jpg',
  'https://nriit.edu.in/icraiq2it-2026/30.jpg',
  'https://nriit.edu.in/icraiq2it-2026/31.jpg',
  'https://nriit.edu.in/icraiq2it-2026/32.jpg',
  'https://nriit.edu.in/icraiq2it-2026/33.jpg',
  'https://nriit.edu.in/icraiq2it-2026/34.jpg',
  'https://nriit.edu.in/icraiq2it-2026/35.jpg',
  'https://nriit.edu.in/icraiq2it-2026/36.jpg',
  'https://nriit.edu.in/icraiq2it-2026/37.jpg',
  'https://nriit.edu.in/icraiq2it-2026/38.jpg',
  'https://nriit.edu.in/icraiq2it-2026/39.jpg',
  'https://nriit.edu.in/icraiq2it-2026/40.jpg',
  'https://nriit.edu.in/icraiq2it-2026/41.jpg',
  'https://nriit.edu.in/icraiq2it-2026/42.jpg',
  'https://nriit.edu.in/icraiq2it-2026/43.jpg',
  'https://nriit.edu.in/icraiq2it-2026/44.jpg',
  'https://nriit.edu.in/icraiq2it-2026/45.jpg',
  'https://nriit.edu.in/icraiq2it-2026/46.jpg',
  'https://nriit.edu.in/icraiq2it-2026/47.jpg',
  'https://nriit.edu.in/icraiq2it-2026/48.jpg',
  'https://nriit.edu.in/icraiq2it-2026/49.jpg',
  'https://nriit.edu.in/icraiq2it-2026/51.jpg',
  'https://nriit.edu.in/icraiq2it-2026/52.jpg',
  'https://nriit.edu.in/icraiq2it-2026/53.jpg',
];

const CONFERENCES_GALLERY = {
  'conference-1': {
    id: 'conference-1',
    label: '1st International Conference',
    title: '1st International Conference on Recent Advancements and Innovations in Computing Communications and Information Technology',
    date: '22–24 April 2022',
    url: 'https://nriit.edu.in/icraic2it-event/',
    images: FIRST_CONFERENCE_IMAGES,
  },
  'conference-2': {
    id: 'conference-2',
    label: '2nd International Conference',
    title: '2nd International Conference on Recent Advancements in Artificial Intelligence, Computational Intelligence, and Inclusive Technologies',
    date: '',
    url: 'https://nriit.edu.in/icraic2it/',
    images: SECOND_CONFERENCE_IMAGES,
  },
  'conference-3': {
    id: 'conference-3',
    label: '3rd International Conference (QUADNEXT 2026)',
    title: 'QUADNEXT 2026 – National & International Summit on Quantum Advancements, Next-Generation Computing, and Emerging Intelligence',
    date: '2026',
    url: 'https://nriit.edu.in/quadnext-2026/',
    images: QUADNEXT_IMAGES,
  },
  'conference-4': {
    id: 'conference-4',
    label: '4th International Conference',
    title: '4th International Conference on Recent Advancements in Artificial Intelligence, Quantum Intelligence, and Inclusive Technologies',
    date: '2026',
    url: 'https://www.nriit.edu.in/icraiq2it-2026/',
    images: FOURTH_CONFERENCE_IMAGES,
  },
};

export const ConferenceArchivesPage = ({ defaultTab }) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const getInitialTab = () => {
    if (defaultTab) {
      if (defaultTab === 'gallery') return 'gallery';
      if (defaultTab === 'publications' || defaultTab === 'proceedings') return 'publications';
      if (defaultTab === 'conferences') return 'conferences';
    }
    const tabParam = searchParams.get('tab');
    if (tabParam === 'gallery') return 'gallery';
    if (tabParam === 'publications' || tabParam === 'proceedings') return 'publications';
    if (tabParam === 'conferences') return 'conferences';
    if (location.pathname === '/gallery') return 'gallery';
    if (location.pathname === '/previous-proceedings') return 'conferences';
    return 'conferences';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  // Gallery state
  const [activeConference, setActiveConference] = useState('conference-1');
  const [activeImg, setActiveImg] = useState(null);

  const selectedConference = CONFERENCES_GALLERY[activeConference] || CONFERENCES_GALLERY['conference-1'];

  useEffect(() => {
    if (location.pathname === '/gallery') {
      setActiveTab('gallery');
    } else if (location.pathname === '/previous-proceedings') {
      setActiveTab('conferences');
    }
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  const openImage = (image, index) => {
    setActiveImg({
      image,
      title: `${selectedConference.label} - Image ${index + 1}`,
      index,
    });
  };

  const closeImage = () => setActiveImg(null);

  const nextImage = () => {
    if (!activeImg) return;
    const nextIdx = (activeImg.index + 1) % selectedConference.images.length;
    setActiveImg({
      image: selectedConference.images[nextIdx],
      title: `${selectedConference.label} - Image ${nextIdx + 1}`,
      index: nextIdx,
    });
  };

  const prevImage = () => {
    if (!activeImg) return;
    const prevIdx = (activeImg.index - 1 + selectedConference.images.length) % selectedConference.images.length;
    setActiveImg({
      image: selectedConference.images[prevIdx],
      title: `${selectedConference.label} - Image ${prevIdx + 1}`,
      index: prevIdx,
    });
  };

  useEffect(() => {
    if (!activeImg) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImg, selectedConference]);

  return (
    <div className="bg-white text-[#17213a] pb-4 sm:pb-6">
      {/* =========================================================
          HERO / PAGE TITLE BANNER
         ========================================================= */}
      <section className="bg-white px-5 pb-2 pt-4 sm:px-8 sm:pt-5 lg:px-10">
        <div className="mx-auto max-w-[1280px] text-center">
          <h1 className="text-3xl font-black uppercase tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px]">
            Conference <span className="text-[#F97316]">Archives</span>
          </h1>
          <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-[#F97316]" />
          <p className="mx-auto mt-2.5 max-w-2xl text-xs text-slate-600 sm:text-sm">
            Explore past conference editions, indexed proceedings, publications, and photo galleries.
          </p>

          {/* 3-TAB RESPONSIVE SWITCHER (NO HORIZONTAL SCROLL) */}
          <div className="mx-auto mt-4 max-w-md sm:max-w-2xl px-2">
            <div className="grid grid-cols-3 items-center rounded-xl bg-slate-100 p-1 sm:p-1.5 border border-slate-200/90 shadow-inner gap-1">
              <button
                type="button"
                onClick={() => handleTabChange('conferences')}
                className={`flex items-center justify-center rounded-lg py-2 sm:py-2.5 px-1 sm:px-3 text-center transition-all ${
                  activeTab === 'conferences'
                    ? 'bg-white text-[#F97316] font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 font-semibold'
                }`}
              >
                <span className="text-[11px] sm:text-sm truncate">
                  <span className="sm:hidden">Conferences</span>
                  <span className="hidden sm:inline">Previous Conferences</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('publications')}
                className={`flex items-center justify-center rounded-lg py-2 sm:py-2.5 px-1 sm:px-3 text-center transition-all ${
                  activeTab === 'publications'
                    ? 'bg-white text-[#F97316] font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 font-semibold'
                }`}
              >
                <span className="text-[11px] sm:text-sm truncate">
                  <span className="sm:hidden">Proceedings</span>
                  <span className="hidden sm:inline">Publication of Proceedings</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('gallery')}
                className={`flex items-center justify-center rounded-lg py-2 sm:py-2.5 px-1 sm:px-3 text-center transition-all ${
                  activeTab === 'gallery'
                    ? 'bg-white text-[#F97316] font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 font-semibold'
                }`}
              >
                <span className="text-[11px] sm:text-sm truncate">
                  <span>Gallery</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TAB 1: PREVIOUS CONFERENCES
         ========================================================= */}
      {activeTab === 'conferences' && (
        <section className="px-5 py-2 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-2.5">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#F97316]">
                <span className="h-[2px] w-5 bg-[#F97316]" />
                <span>Conference Editions</span>
              </div>
              <h2 className="mt-0.5 text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-[#17213a]">
                Previous Conferences
              </h2>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {PREVIOUS_CONFERENCES.map((conf) => (
                <div
                  key={conf.name}
                  className="group flex flex-col gap-2.5 rounded-xl border border-slate-200 bg-white p-3.5 sm:p-4 shadow-xs transition-all duration-200 hover:border-orange-300 hover:shadow-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#F97316] ring-4 ring-orange-100" />
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <h3 className="text-sm font-bold text-[#17213a] transition-colors group-hover:text-[#F97316] sm:text-base">
                          {conf.name}
                        </h3>
                        <span className="rounded-md border border-orange-200/60 bg-orange-50 px-2 py-0.5 text-[11px] sm:text-xs font-bold text-[#F97316]">
                          {conf.year}
                        </span>
                        <span className="text-[11px] sm:text-xs font-semibold text-slate-500">
                          • {conf.publisher}
                        </span>
                        <span className="text-[11px] sm:text-xs font-medium text-orange-600">
                          ({conf.publisherType})
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {conf.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 pt-1 sm:pt-0 pl-5.5 sm:pl-0 sm:self-center">
                    <a
                      href={conf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-bold text-[#F97316] transition-colors hover:bg-orange-100"
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
      )}

      {/* =========================================================
          TAB 2: PUBLICATION OF PROCEEDINGS
         ========================================================= */}
      {activeTab === 'publications' && (
        <section className="px-5 py-2 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-2.5">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#F97316]">
                <span className="h-[2px] w-5 bg-[#F97316]" />
                <span>Publications &amp; Indexing</span>
              </div>
              <h2 className="mt-0.5 text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-[#17213a]">
                Publication of Proceedings
              </h2>
              <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">
                Selected outcomes and publications arising from these conference initiatives include:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
      )}

      {/* =========================================================
          TAB 2: PHOTO GALLERY CONTENT
         ========================================================= */}
      {activeTab === 'gallery' && (
        <section className="px-4 py-2 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1700px]">
            {/* Conference Selector Grid (Aligned on Mobile & Tablet) */}
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-2.5 sm:gap-3 max-w-md sm:max-w-2xl lg:max-w-none mx-auto">
              {Object.values(CONFERENCES_GALLERY).map((conf) => (
                <button
                  key={conf.id}
                  type="button"
                  onClick={() => {
                    setActiveConference(conf.id);
                    closeImage();
                  }}
                  className={`w-full lg:w-auto lg:min-w-[210px] xl:min-w-[230px] rounded-lg border px-3.5 py-2.5 text-center text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center ${
                    activeConference === conf.id
                      ? 'border-[#F97316] bg-[#F97316] font-bold text-white shadow-md'
                      : 'border-orange-200 bg-[#FFFBF8] text-slate-900 hover:border-[#F97316] hover:bg-orange-50'
                  }`}
                >
                  {conf.label}
                </button>
              ))}
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {selectedConference.images.map((image, index) => (
                <button
                  key={`${selectedConference.id}-${index}`}
                  type="button"
                  onClick={() => openImage(image, index)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-[#FFFBF8] shadow-md ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2"
                  aria-label={`Open ${selectedConference.label} image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${selectedConference.label} - Image ${index + 1}`}
                    loading={index < 8 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0.25';
                    }}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-orange-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-black/55 px-2.5 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    Image {index + 1}
                  </div>
                </button>
              ))}
            </div>

            {/* External Conference URL Link */}
            {selectedConference.url && (
              <div className="mt-6 text-center">
                <a
                  href={selectedConference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-[#EA580C]"
                >
                  <span>Visit {selectedConference.label} Website</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>

          {/* Lightbox Modal */}
          {activeImg && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
              onClick={closeImage}
              role="dialog"
              aria-modal="true"
              aria-label={activeImg.title}
            >
              <div
                className="relative flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeImage}
                  className="absolute right-4 top-4 z-20 rounded-full bg-slate-950/85 p-2 text-white shadow-lg transition-colors hover:bg-[#F97316]"
                  aria-label="Close image"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="relative flex min-h-0 flex-1 items-center justify-center bg-[#FFFBF8]">
                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-slate-950/75 p-2 text-white shadow-lg transition-colors hover:bg-[#F97316]"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <img
                    src={activeImg.image}
                    alt={activeImg.title}
                    className="max-h-[82vh] w-full object-contain"
                  />

                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-slate-950/75 p-2 text-white shadow-lg transition-colors hover:bg-[#F97316]"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex items-center justify-between bg-white px-5 py-3">
                  <div>
                    <h2 className="text-sm font-bold text-[#1d315f] sm:text-base">
                      {activeImg.title}
                    </h2>
                    <p className="text-xs text-slate-500">
                      Click outside or use the close button to return to the gallery.
                    </p>
                  </div>

                  <span className="ml-4 shrink-0 text-xs font-semibold text-slate-500">
                    {activeImg.index + 1} / {selectedConference.images.length}
                  </span>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default ConferenceArchivesPage;
