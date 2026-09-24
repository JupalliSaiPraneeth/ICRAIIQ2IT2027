import React, { useState } from 'react';
import { X, CalendarDays, ExternalLink } from 'lucide-react';

const FIRST_CONFERENCE_IMAGES = ['https://nriit.edu.in/icraiq2it-2026/icraic2it-2-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-3-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-4-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-6-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-7-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-8-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-9-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-10-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-11-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-12-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-13-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-17-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-18-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-19.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-20-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-21-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-22-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-23-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-24-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-26-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-27-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-28-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-29-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-30-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-31-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-32-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-33-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-34-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-36-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-37-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-38-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-39-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-40-scaled.jpg', 'https://nriit.edu.in/icraiq2it-2026/icraic2it-41-scaled.jpg'];

const SECOND_CONFERENCE_IMAGES = ['https://nriit.edu.in/icraiq2it-2026/2.jpg', 'https://nriit.edu.in/icraiq2it-2026/3.jpg', 'https://nriit.edu.in/icraiq2it-2026/4.jpg', 'https://nriit.edu.in/icraiq2it-2026/5.jpg', 'https://nriit.edu.in/icraiq2it-2026/6.jpg', 'https://nriit.edu.in/icraiq2it-2026/7.jpg', 'https://nriit.edu.in/icraiq2it-2026/8.jpg', 'https://nriit.edu.in/icraiq2it-2026/9.jpg', 'https://nriit.edu.in/icraiq2it-2026/10.jpg', 'https://nriit.edu.in/icraiq2it-2026/11.jpg', 'https://nriit.edu.in/icraiq2it-2026/12.jpg', 'https://nriit.edu.in/icraiq2it-2026/13.jpg', 'https://nriit.edu.in/icraiq2it-2026/14.jpg', 'https://nriit.edu.in/icraiq2it-2026/15.jpg', 'https://nriit.edu.in/icraiq2it-2026/16.jpg', 'https://nriit.edu.in/icraiq2it-2026/17.jpg', 'https://nriit.edu.in/icraiq2it-2026/18.jpg', 'https://nriit.edu.in/icraiq2it-2026/19.jpg', 'https://nriit.edu.in/icraiq2it-2026/20.jpg', 'https://nriit.edu.in/icraiq2it-2026/21.jpg', 'https://nriit.edu.in/icraiq2it-2026/22.jpg', 'https://nriit.edu.in/icraiq2it-2026/23.jpg', 'https://nriit.edu.in/icraiq2it-2026/24.jpg', 'https://nriit.edu.in/icraiq2it-2026/25.jpg', 'https://nriit.edu.in/icraiq2it-2026/26.jpg', 'https://nriit.edu.in/icraiq2it-2026/27.jpg', 'https://nriit.edu.in/icraiq2it-2026/28.jpg', 'https://nriit.edu.in/icraiq2it-2026/29.jpg', 'https://nriit.edu.in/icraiq2it-2026/30.jpg', 'https://nriit.edu.in/icraiq2it-2026/31.jpg', 'https://nriit.edu.in/icraiq2it-2026/32.jpg', 'https://nriit.edu.in/icraiq2it-2026/33.jpg', 'https://nriit.edu.in/icraiq2it-2026/34.jpg', 'https://nriit.edu.in/icraiq2it-2026/35.jpg', 'https://nriit.edu.in/icraiq2it-2026/36.jpg', 'https://nriit.edu.in/icraiq2it-2026/37.jpg', 'https://nriit.edu.in/icraiq2it-2026/38.jpg', 'https://nriit.edu.in/icraiq2it-2026/39.jpg', 'https://nriit.edu.in/icraiq2it-2026/40.jpg', 'https://nriit.edu.in/icraiq2it-2026/41.jpg', 'https://nriit.edu.in/icraiq2it-2026/42.jpg', 'https://nriit.edu.in/icraiq2it-2026/43.jpg', 'https://nriit.edu.in/icraiq2it-2026/44.jpg', 'https://nriit.edu.in/icraiq2it-2026/45.jpg', 'https://nriit.edu.in/icraiq2it-2026/46.jpg', 'https://nriit.edu.in/icraiq2it-2026/47.jpg', 'https://nriit.edu.in/icraiq2it-2026/48.jpg', 'https://nriit.edu.in/icraiq2it-2026/49.jpg', 'https://nriit.edu.in/icraiq2it-2026/51.jpg', 'https://nriit.edu.in/icraiq2it-2026/52.jpg', 'https://nriit.edu.in/icraiq2it-2026/53.jpg'];

const THIRD_CONFERENCE_URL = 'https://nriit.edu.in/quadnext-2026/';

const firstConference = {
  id: 'conference-1',
  label: '1st International Conference',
  title:
    '1st International Conference on Recent Advancements and Innovations in Computing Communications and Information Technology',
  date: '22–24 April 2022',
  images: FIRST_CONFERENCE_IMAGES,
};

const secondConference = {
  id: 'conference-2',
  label: '2nd International Conference',
  // Only the image collection was supplied, so no unsupported title/date
  // has been added here.
  title: '2nd International Conference',
  date: '',
  images: SECOND_CONFERENCE_IMAGES,
};

export const GalleryPage = () => {
  const [activeConference, setActiveConference] = useState('conference-1');
  const [activeImg, setActiveImg] = useState(null);

  const selectedConference =
    activeConference === 'conference-2' ? secondConference : firstConference;

  const openImage = (image, index) => {
    setActiveImg({
      image,
      title: `${selectedConference.label} - Image ${index + 1}`,
      index,
    });
  };

  const closeImage = () => setActiveImg(null);

  return (
    <div className="min-h-screen bg-white px-4 py-5 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1700px]">

        {/* =====================================================
            CONFERENCE SELECTOR
           ===================================================== */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setActiveConference('conference-1');
              closeImage();
            }}
            className={`min-w-[240px] sm:min-w-[260px] rounded-lg border px-4 py-2.5 text-sm sm:text-base transition-all duration-200 ${activeConference === 'conference-1'
                ? 'border-[#F97316] bg-[#F97316] font-bold text-white shadow-md'
                : 'border-orange-200 bg-[#FFFBF8] text-slate-900 hover:border-[#F97316] hover:bg-orange-50'
              }`}
          >
            1st International Conference
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveConference('conference-2');
              closeImage();
            }}
            className={`min-w-[240px] sm:min-w-[260px] rounded-lg border px-4 py-2.5 text-sm sm:text-base transition-all duration-200 ${activeConference === 'conference-2'
                ? 'border-[#F97316] bg-[#F97316] font-bold text-white shadow-md'
                : 'border-orange-200 bg-[#FFFBF8] text-slate-900 hover:border-[#F97316] hover:bg-orange-50'
              }`}
          >
            2nd International Conference
          </button>

          <a
            href={THIRD_CONFERENCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[240px] sm:min-w-[260px] items-center justify-center gap-2 rounded-lg border border-orange-200 bg-[#FFFBF8] px-4 py-2.5 text-sm sm:text-base text-slate-900 transition-all duration-200 hover:border-[#F97316] hover:bg-orange-50"
          >
            3rd International Conference
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* =====================================================
            CONFERENCE INFORMATION
           ===================================================== */}
        <div className="mb-5 text-center">
          <h1 className="mx-auto max-w-[1500px] text-lg font-medium leading-7 text-slate-950 sm:text-xl">
            {selectedConference.title}
          </h1>

          {selectedConference.date && (
            <div className="mt-2 inline-flex items-center gap-2 text-xl font-medium text-[#EA580C] sm:text-2xl">
              <CalendarDays className="h-6 w-6 text-[#FB923C]" />
              <span>{selectedConference.date}</span>
            </div>
          )}
        </div>

        {/* =====================================================
            PHOTO GRID
           ===================================================== */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
                loading={index < 4 ? 'eager' : 'lazy'}
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

        {/* =====================================================
            THIRD CONFERENCE NOTICE
           ===================================================== */}
        <div className="mt-6 text-center">
          <a
            href={THIRD_CONFERENCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-[#EA580C]"
          >
            Visit 3rd International Conference Website
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* =====================================================
          IMAGE LIGHTBOX
         ===================================================== */}
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

            <div className="flex min-h-0 flex-1 items-center justify-center bg-[#FFFBF8]">
              <img
                src={activeImg.image}
                alt={activeImg.title}
                className="max-h-[82vh] w-full object-contain"
              />
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
    </div>
  );
};

export default GalleryPage;
