import React from 'react';
import { Calendar, FileCheck, UserCheck, MapPin } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

export const InfoStrip = () => {
  const items = [
    {
      icon: Calendar,
      label: "CONFERENCE DATES",
      value: conferenceData.dates.conference,
      sub: "3-Day International Hybrid Summit"
    },
    {
      icon: FileCheck,
      label: "SUBMISSION DEADLINE",
      value: conferenceData.dates.submissionDeadline,
      sub: "Double-Blind Scopus Proceedings"
    },
    {
      icon: UserCheck,
      label: "REGISTRATION",
      value: "OPEN NOW",
      sub: "Early Bird Rates Available"
    },
    {
      icon: MapPin,
      label: "VENUE",
      value: conferenceData.organizer.acronym + " Campus",
      sub: "Guntur / Vijayawada, AP, India"
    }
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-3 rounded-2xl bg-navy-900/90 border border-brand-500/30 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        {items.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={idx} 
              className="flex items-center gap-4 p-4 rounded-xl bg-navy-850/60 border border-white/5 hover:border-brand-500/40 hover:bg-navy-800/80 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300 flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                  {item.label}
                </div>
                <div className="text-sm font-bold text-white truncate group-hover:text-brand-400 transition-colors">
                  {item.value}
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  {item.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InfoStrip;
