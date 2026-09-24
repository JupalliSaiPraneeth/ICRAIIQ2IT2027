import React from 'react';
import { BookOpen, Download } from 'lucide-react';

export const SouvenirPage = () => {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#d92d67]">Official Souvenir</div>
        <h2 className="text-3xl font-extrabold text-[#1d315f] sm:text-4xl">ICRAIIQ2IT 2027 Souvenir Volume</h2>

        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl space-y-6">
          <BookOpen className="w-12 h-12 text-[#d92d67] mx-auto" />
          <h3 className="text-2xl font-extrabold text-[#1d315f]">Download Official 2027 Conference Souvenir PDF</h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            The digital souvenir contains full message digests from national dignitaries, keynote speaker abstracts, and complete track schedules.
          </p>
          <a
            href="#download-souvenir"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#d92d67] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg hover:bg-[#b91c52] transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Souvenir PDF (12.4 MB)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SouvenirPage;
