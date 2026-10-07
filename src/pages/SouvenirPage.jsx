import React from 'react';
import { BookOpen, Download, ExternalLink, Calendar, FileText, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const SouvenirPage = () => {
  const souvenirs = [
    {
      id: '2022',
      title: 'ICRAIC2IT - 2022 Souvenir',
      subtitle: 'Inaugural Conference Volume & Digest',
      year: '2022',
      fileSize: '4.3 MB',
      pdfPath: '/sov/1sov.pdf',
      downloadName: 'ICRAIC2IT-2022-Souvenir.pdf',
      badge: 'Archived Edition',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description:
        'Official digital souvenir volume from the inaugural ICRAIC2IT conference. Includes patron messages, editorial notes, plenary abstracts, and comprehensive session catalogs.',
      highlights: [
        'Dignitary & Patron Congratulatory Messages',
        'Editorial Board & Reviewers Roster',
        'Keynote Speaker Profiles & Session Summaries',
        'Accepted Papers & Track Compendium',
      ],
    },
    {
      id: '2025',
      title: 'ICRAIC2IT - 2025 Souvenir',
      subtitle: 'Conference Proceedings & Commemorative Digest',
      year: '2025',
      fileSize: '5.4 MB',
      pdfPath: '/sov/2sov.pdf',
      downloadName: 'ICRAIC2IT-2025-Souvenir.pdf',
      badge: 'Previous Edition',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description:
        'Commemorative souvenir compilation covering groundbreaking advancements in Artificial Intelligence, computational systems, and emerging technologies presented at the conference.',
      highlights: [
        'Vice Chancellor & General Chairs Digest',
        'International Advisory Committee Roster',
        'Distinguished Keynote Addresses & Track Reports',
        'Full Author Index and Paper Citations',
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 py-12 px-5 sm:px-8 lg:px-10">
      {/* Background subtle decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
        <div className="absolute top-1/2 -left-20 h-96 w-96 rounded-full bg-orange-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1280px] space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#E87500]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Official Conference Archives</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#1D315F] sm:text-4xl lg:text-[42px]">
            Conference Souvenir Volumes
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Access and download the official souvenir publications of past ICRAIC2IT conferences. Each volume encapsulates dignitary messages, keynote insights, technical summaries, and participant contributions.
          </p>
        </div>

        {/* Souvenir Volumes Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {souvenirs.map((sov) => (
            <div
              key={sov.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59E0B]/50 hover:shadow-xl"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#E11D48]" />

              <div className="space-y-6">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-2xl shadow-inner">
                      🎁
                    </div>
                    <div>
                      <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-bold ${sov.badgeColor}`}>
                        {sov.badge}
                      </span>
                      <h2 className="mt-1 text-2xl font-black text-[#1D315F] tracking-tight">
                        {sov.title}
                      </h2>
                    </div>
                  </div>
                  <span className="rounded-xl bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    {sov.fileSize}
                  </span>
                </div>

                <div className="text-sm font-semibold text-[#E87500]">
                  {sov.subtitle}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {sov.description}
                </p>

                {/* Highlights List */}
                <div className="rounded-2xl bg-slate-50/80 border border-slate-100 p-4 space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Volume Highlights
                  </div>
                  {sov.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <a
                  href={sov.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1D315F] to-[#2B468B] px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#15254A] hover:shadow-md"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Open PDF</span>
                </a>

                <a
                  href={sov.pdfPath}
                  download={sov.downloadName}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-[#F59E0B] hover:bg-[#FFF7E6] hover:text-[#E87500]"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for 2027 Upcoming Edition */}
        <div className="rounded-3xl border border-dashed border-[#F59E0B]/60 bg-gradient-to-br from-amber-50/60 via-orange-50/40 to-white p-8 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-wider text-[#E87500]">
                  Upcoming 5th Edition
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#1D315F]">
                ICRAIQ2IT - 2027 Souvenir Release
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The commemorative 2027 Souvenir Volume will be released during the Inaugural Ceremony on <strong className="text-slate-800">April 09, 2027</strong> at Dr RVR NRI Institute of Technology (Deemed to be University), Vijayawada. Registered participants will receive access both in digital format and at the registration desk.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-2xl border border-amber-200 bg-white px-5 py-3.5 text-xs font-black uppercase tracking-wider text-[#E87500] shadow-sm">
                <Calendar className="h-4 w-4 text-[#EA580C]" />
                <span>April 09–10, 2027</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SouvenirPage;
