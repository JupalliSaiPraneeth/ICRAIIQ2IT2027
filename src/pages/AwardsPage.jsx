import React from 'react';
import { Trophy, Award, CheckCircle2, Medal, Sparkles } from 'lucide-react';

const AwardsPage = () => {
  return (
    <div className="relative min-h-screen bg-[#FFFBF8] text-slate-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#F97316]">
            Recognition & Honors
          </div>
          <h1 className="mt-2 text-3xl font-extrabold text-[#1d315f] sm:text-4xl">
            ICRAIQ2IT - 2027 Conference Awards
          </h1>
          <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
            Recognizing outstanding scientific presentations and exceptional contributions in Artificial Intelligence, Quantum Computing, and Inclusive Technologies.
          </p>
        </div>

        {/* Featured Award: Best Presentation Award */}
        <div className="mb-8 rounded-2xl border-2 border-orange-200 bg-white p-6 sm:p-8 shadow-lg shadow-orange-500/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-orange-100 pb-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-md shadow-orange-500/20">
              <Trophy className="h-7 w-7" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-1">
                Premier Conference Honor
              </span>
              <h2 className="text-2xl font-black text-[#1d315f]">
                Best Presentation Award
              </h2>
            </div>
          </div>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-700">
            <p>
              To encourage meaningful contributions and promote quality research, the conference will recognize outstanding presentations through prestigious awards.
            </p>
            <p>
              Based on evaluations by the committee and the discretion of the <strong>Conference Chair</strong>, the <strong>Best Presentation Award</strong> will be given to the most inspiring, impactful, and professionally delivered talk.
            </p>
            <div className="rounded-xl bg-orange-50/60 p-4 border border-orange-100 flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
              <p className="text-xs text-orange-950 font-medium">
                <strong>Selection Criteria:</strong> The selection will be made considering both the interactive presentation delivery scores and the peer-reviewed technical quality of the submitted paper.
              </p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="rounded-2xl border border-orange-100 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <Medal className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-bold text-[#1d315f]">
              Participation & Publication Certificates
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
            <div className="p-4 rounded-xl bg-[#FFFBF8] border border-orange-100 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-[#1d315f]">Participation Certificate</h3>
                <p className="text-xs text-slate-600 mt-1">
                  All registered attendees, delegates, and co-authors participating in conference sessions will receive an official Participation Certificate.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFBF8] border border-orange-100 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-[#1d315f]">Paper Presentation cum Publication Certificate</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Authors presenting their accepted manuscripts (oral or poster) will receive a Paper Presentation cum Publication Certificate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsPage;
