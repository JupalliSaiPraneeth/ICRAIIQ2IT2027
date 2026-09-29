import React, { useState } from 'react';
import { Search, Layers, FileText, ArrowRight, Sparkles, CheckCircle2, X } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';
import SubmissionModal from '../components/Modals/SubmissionModal';

export const TracksPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const tracks = conferenceData?.tracks || [];

  const filteredTracks = tracks.filter((t) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      t.title?.toLowerCase().includes(q) ||
      t.description?.toLowerCase().includes(q) ||
      t.topics?.some((tp) => tp.toLowerCase().includes(q))
    );
  });

  const handleOpenSubmit = (track) => {
    setSelectedTrack(track);
    setIsSubmitModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 pt-8 sm:pt-12 text-slate-800 antialiased selection:bg-[#e47c14] selection:text-white">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* =========================================================
            CLEAN PAGE HEADING (Top gap eliminated & badge removed)
        ========================================================= */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Conference Research Tracks
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-slate-500 font-medium">
            Explore dedicated scientific domains and submit your manuscripts. All submissions undergo double-blind peer review.
          </p>
          <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-[#e47c14]" />
        </div>

        {/* =========================================================
            SEARCH BAR & FILTER STATS (Tightened Spacing)
        ========================================================= */}
        <div className="mx-auto max-w-2xl mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by track name, topic, or keyword (e.g., Quantum, LLM, Vision)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-10 text-sm font-medium text-slate-800 placeholder-slate-400 shadow-sm outline-none transition-all focus:border-[#e47c14] focus:ring-2 focus:ring-[#e47c14]/20"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="mt-2.5 flex items-center justify-between px-2 text-xs font-semibold text-slate-500">
            <span>
              Showing <strong className="text-[#e47c14]">{filteredTracks.length}</strong> of {tracks.length} tracks
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#e47c14] hover:underline"
              >
                Reset filter
              </button>
            )}
          </div>
        </div>

        {/* =========================================================
            TRACKS GRID
        ========================================================= */}
        {filteredTracks.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {filteredTracks.map((track, index) => {
              const trackNum = track.number || String(index + 1).padStart(2, '0');

              return (
                <div
                  key={track.id || trackNum}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e47c14]/50 hover:shadow-xl hover:shadow-[#e47c14]/10"
                >
                  {/* Subtle Top Accent on Hover */}
                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#e47c14] via-amber-400 to-[#e47c14] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    {/* Header: Track Number & Pill */}
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-3xl font-black text-[#e47c14]">
                          {trackNum}
                        </span>
                        <span className="rounded-full border border-[#e47c14]/30 bg-orange-50 px-3 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#e47c14]">
                          TRACK {trackNum}
                        </span>
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-400 border border-slate-100">
                        <Layers className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="mb-2 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#e47c14] sm:text-2xl">
                      {track.title}
                    </h2>

                    {/* Description */}
                    {track.description && (
                      <p className="mb-5 text-sm leading-relaxed text-slate-600">
                        {track.description}
                      </p>
                    )}

                    {/* Topics / Scope */}
                    {Array.isArray(track.topics) && track.topics.length > 0 && (
                      <div className="space-y-2.5">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Scope & Indicative Topics:
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {track.topics.map((topic, tIdx) => (
                            <div
                              key={tIdx}
                              className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50/70 p-2.5 text-xs text-slate-700 transition hover:bg-white hover:border-[#e47c14]/30"
                            >
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e47c14]" />
                              <span className="font-medium leading-tight">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Footer Actions */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#e47c14]" />
                      Double-Blind Review
                    </span>

                    <button
                      type="button"
                      onClick={() => handleOpenSubmit(track)}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#e47c14] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm shadow-[#e47c14]/25 transition-all hover:bg-[#cf6d0d] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>Submit to Track {trackNum}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#e47c14]">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No matching tracks found</h3>
            <p className="mt-1 text-sm text-slate-500">
              Try searching with different keywords like "Quantum", "AI", "Security", or reset your search.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 rounded-xl bg-[#e47c14] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#cf6d0d]"
            >
              Clear Search
            </button>
          </div>
        )}

      </div>

      <SubmissionModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        defaultTrack={selectedTrack}
      />
    </div>
  );
};

export default TracksPage;