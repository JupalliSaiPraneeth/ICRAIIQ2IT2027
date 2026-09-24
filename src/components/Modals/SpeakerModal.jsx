import React from 'react';
import { X, Award, Globe, BookOpen, User } from 'lucide-react';

export const SpeakerModal = ({ speaker, onClose }) => {
  if (!speaker) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-navy-900 border border-brand-500/40 rounded-2xl shadow-[0_0_50px_rgba(251,146,0,0.3)] overflow-hidden">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-navy-950/80 text-white hover:bg-brand-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img 
              src={speaker.image} 
              alt={speaker.name}
              className="w-28 h-28 rounded-2xl object-cover border-2 border-brand-500 shadow-[0_0_20px_rgba(251,146,0,0.3)]" 
            />
            <div className="text-center sm:text-left space-y-1">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 font-mono text-xs font-bold">
                Keynote Speaker
              </span>
              <h3 className="text-2xl font-extrabold text-white">{speaker.name}</h3>
              <p className="text-sm font-semibold text-brand-300">{speaker.designation}</p>
              <p className="text-xs text-slate-300 flex items-center justify-center sm:justify-start gap-1">
                <Globe className="w-3.5 h-3.5 text-brand-400" />
                <span>{speaker.institution}, {speaker.country}</span>
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
            <div className="p-4 rounded-xl bg-navy-850 border border-brand-500/20">
              <div className="text-xs font-mono font-bold text-brand-400 uppercase mb-1 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>Plenary Address Topic</span>
              </div>
              <p className="text-sm font-bold text-white leading-snug">
                "{speaker.topic}"
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">Biography & Scientific Contributions</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {speaker.bio}
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-brand-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md"
              >
                Close Profile
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;
