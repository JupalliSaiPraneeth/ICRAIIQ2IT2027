import React from 'react';
import { motion } from 'framer-motion';

export const QuantumOrbit = () => {
  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center pointer-events-none select-none">
      {/* Background Amber Glow */}
      <div 
        className="absolute inset-0 rounded-full blur-[90px] opacity-30 animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, #fb9200 0%, rgba(251,146,0,0) 70%)' }}
      />

      {/* Outer Orbit Ring 1 - Counter Clockwise */}
      <div className="absolute w-[92%] h-[92%] rounded-full border border-brand-500/20 border-dashed animate-spin-reverse-slow flex items-center justify-center">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-500 shadow-[0_0_12px_#fb9200]" />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-400 opacity-60" />
      </div>

      {/* Orbit Ring 2 - Clockwise angled 45deg */}
      <div className="absolute w-[76%] h-[76%] rounded-full border border-brand-500/30 animate-spin-slow transform rotate-45">
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-brand-400 shadow-[0_0_10px_#fb9200]" />
        <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-200" />
      </div>

      {/* Inner Orbit Ring 3 - Counter Clockwise angled -30deg */}
      <div className="absolute w-[58%] h-[58%] rounded-full border border-white/20 animate-spin-reverse-slow transform -rotate-30">
        <div className="absolute -bottom-1.5 right-1/4 w-3 h-3 rounded-full bg-brand-500 shadow-[0_0_10px_#fb9200]" />
      </div>

      {/* Central Quantum Node Core */}
      <div className="relative w-36 h-36 rounded-full bg-navy-900/90 border-2 border-brand-500/60 shadow-[0_0_30px_rgba(251,146,0,0.4)] backdrop-blur-md flex flex-col items-center justify-center text-center p-2 z-10">
        <div className="w-10 h-10 rounded-full bg-brand-500/20 border border-brand-500 flex items-center justify-center mb-1 animate-pulse">
          <div className="w-4 h-4 rounded-full bg-brand-500 shadow-[0_0_15px_#fb9200]" />
        </div>
        <span className="text-[10px] font-mono tracking-widest text-brand-400 font-bold uppercase">QUANTUM</span>
        <span className="text-[12px] font-sans font-extrabold text-white tracking-wide">ICRAIQ2IT</span>
        <span className="text-[9px] font-mono text-slate-400">2027</span>
      </div>

      {/* Floating Node Metric Pills */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 left-2 glass-card border border-brand-500/30 px-3 py-1.5 rounded-full text-xs font-mono text-slate-200 flex items-center gap-2 shadow-lg z-20"
      >
        <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
        <span className="text-brand-400 font-bold">AI-NEURAL</span>
        <span className="text-slate-400 text-[10px]">v5.0</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-8 right-2 glass-card border border-brand-500/30 px-3 py-1.5 rounded-full text-xs font-mono text-slate-200 flex items-center gap-2 shadow-lg z-20"
      >
        <span className="w-2 h-2 rounded-full bg-brand-500" />
        <span className="text-brand-400 font-bold">Q-ENTANGLE</span>
        <span className="text-slate-400 text-[10px]">1024 Qubits</span>
      </motion.div>

      <motion.div 
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/2 -right-6 -translate-y-1/2 glass-card border border-white/20 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 shadow-md z-20"
      >
        <span className="text-amber-300">6G-NET</span> :: 100Gbps
      </motion.div>

      {/* Network Beam Connection Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full stroke-brand-500/30" xmlns="http://www.w3.org/2000/svg">
        <line x1="25%" y1="15%" x2="50%" y2="50%" strokeDasharray="3 3" strokeWidth="1" />
        <line x1="75%" y1="85%" x2="50%" y2="50%" strokeDasharray="3 3" strokeWidth="1" />
        <line x1="85%" y1="50%" x2="50%" y2="50%" strokeDasharray="3 3" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default QuantumOrbit;
