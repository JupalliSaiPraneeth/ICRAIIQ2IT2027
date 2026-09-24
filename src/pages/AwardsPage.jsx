import React from 'react';
import { Trophy } from 'lucide-react';

const AwardsPage = () => {
  const awardsList = [
    {
      title: "Best Paper Award",
      category: "Research Innovation",
      desc: "Awarded to the top research manuscripts evaluated by the international review panel."
    },
    {
      title: "Best Student Paper Award",
      category: "Academic Excellence",
      desc: "Recognizing outstanding research contributed by primary UG/PG/PhD student authors."
    },
    {
      title: "Best Poster Presentation",
      category: "Visual & Technical Impact",
      desc: "Awarded during interactive poster sessions for technical clarity and visual presentation."
    },
    {
      title: "Young Researcher Award",
      category: "Early Career Pioneer",
      desc: "Honoring early-career scholars demonstrating high potential in AI, Quantum, or IT domains."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#FFFBF8] text-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#F97316]">
            Honors
          </div>
          <h2 className="mt-1 text-2xl font-extrabold text-[#1d315f] sm:text-3xl">
            ICRAIIQ2IT 2027 Research Awards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {awardsList.map((award, idx) => (
            <div
              key={idx}
              className="group p-4 sm:p-5 rounded-xl bg-white border border-orange-100 hover:border-[#F97316] hover:shadow-md hover:shadow-orange-100/60 transition-all duration-300 space-y-2"
            >
              <Trophy className="w-6 h-6 text-[#F97316] transition-transform duration-300 group-hover:scale-110" />

              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FFF7ED] text-[#EA580C] border border-orange-100 text-[10px] font-bold uppercase">
                {award.category}
              </span>

              <h3 className="text-base sm:text-lg font-bold text-[#1d315f]">
                {award.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {award.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsPage;
