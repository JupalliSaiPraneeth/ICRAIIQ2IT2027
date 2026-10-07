import React, { useState } from 'react';
import { Award, Globe, BookOpen, User, Sparkles } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';
import SectionHeading from '../components/SectionHeading';
import SpeakerModal from '../components/Modals/SpeakerModal';

export const SpeakersPage = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  return (
    <div className="relative min-h-screen bg-white text-[#17213a] py-8 sm:py-10">

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 z-10">
        
        <SectionHeading
          number="05 / SPEAKERS"
          eyebrow="PLENARY KEYNOTES"
          title="World-Renowned Keynote Speakers"
          subtitle="Learn from leading international professors, scientists, and industry research directors."
          variant="light"
        />

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {conferenceData.speakers.map((spk) => (
            <div 
              key={spk.id}
              onClick={() => setSelectedSpeaker(spk)}
              className="p-6 rounded-3xl bg-navy-900 border border-white/10 hover:border-brand-500/60 hover:shadow-[0_0_35px_rgba(251,146,0,0.2)] transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative mb-5 overflow-hidden rounded-2xl aspect-square bg-navy-850 border border-brand-500/20">
                  <img 
                    src={spk.image} 
                    alt={spk.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-brand-500 text-slate-950 font-mono text-[10px] font-extrabold uppercase">
                    KEYNOTE
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">
                  {spk.name}
                </h3>
                <div className="text-xs font-semibold text-brand-400 mb-1">
                  {spk.designation}
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1 mb-4">
                  <Globe className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                  <span>{spk.institution}, {spk.country}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-[11px] font-mono font-bold text-brand-300 uppercase flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-brand-400" />
                  <span>Plenary Topic:</span>
                </div>
                <p className="text-xs text-slate-300 italic line-clamp-2">
                  "{spk.topic}"
                </p>
                <div className="pt-2 text-right text-xs font-bold text-brand-400 group-hover:underline">
                  View Full Bio →
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <SpeakerModal 
        speaker={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      />
    </div>
  );
};

export default SpeakersPage;
