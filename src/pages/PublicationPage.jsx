import React from 'react';
import { BookOpen, CheckCircle2, ShieldCheck, ExternalLink, Award } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';
import SectionHeading from '../components/SectionHeading';

export const PublicationPage = () => {
  return (
    <div className="relative min-h-screen bg-white text-[#17213a] py-8 sm:py-10">

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 z-10">
        
        <SectionHeading
          number="08 / PUBLICATION"
          eyebrow="INDEXING ECOSYSTEM"
          title="Publication Opportunities & Proceedings"
          subtitle={conferenceData.publicationDetails.description}
          variant="light"
        />

        {/* Indexing Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {conferenceData.publicationDetails.partners.map((partner, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-navy-900 border border-white/10 hover:border-brand-500/60 hover:shadow-[0_0_30px_rgba(251,146,0,0.15)] transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">{partner.name}</h3>
              <div className="text-xs font-mono text-brand-400 font-bold uppercase">{partner.type}</div>
              <p className="text-xs text-slate-300">{partner.note}</p>
            </div>
          ))}
        </div>

        {/* Publication Integrity & Guidelines */}
        <div className="p-8 sm:p-12 rounded-3xl bg-navy-900 border border-white/10 space-y-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-brand-400" />
            <h3 className="text-2xl font-extrabold text-white">Peer Review & Editorial Integrity</h3>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            All submitted manuscripts undergo a rigorous double-blind peer review process conducted by at least two independent international domain experts. Peer evaluation criteria focus on novelty, technical soundness, clarity, and relevance to the conference scope.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {conferenceData.publicationDetails.guidelines.map((g, idx) => {
              if (g.includes('ieee.org/conferences/publishing/templates')) {
                return (
                  <div key={idx} className="p-4 rounded-xl bg-navy-850 border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                    <span className="min-w-0 text-xs text-slate-200 leading-relaxed">
                      The Paper format will be IEEE, A4 USA FORMAT SUBMITTED IN LATEX / DOCX FORMAT:{' '}
                      <a
                        href="https://www.ieee.org/conferences/publishing/templates"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all font-bold text-amber-400 underline hover:text-amber-300"
                      >
                        https://www.ieee.org/conferences/publishing/templates
                      </a>{' '}
                      of{' '}
                      <a
                        href="https://ieee-org.widen.net/content/ge5anzdecd/original/conference-template-a4.docx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-amber-400 underline hover:text-amber-300"
                      >
                        A4 (DOC, 30 KB) Updated 2024
                      </a>
                    </span>
                  </div>
                );
              }

              if (g.includes('MICROSOFT CMT')) {
                return (
                  <div key={idx} className="p-4 rounded-xl bg-navy-850 border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 leading-relaxed">
                      Paper submission Link:{' '}
                      <a
                        href="https://cmt3.research.microsoft.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-amber-400 underline hover:text-amber-300"
                      >
                        MICROSOFT CMT
                      </a>
                    </span>
                  </div>
                );
              }

              return (
                <div key={idx} className="p-4 rounded-xl bg-navy-850 border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 leading-relaxed">{g}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PublicationPage;
