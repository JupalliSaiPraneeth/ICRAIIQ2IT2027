import React, { useState } from 'react';
import { X, UploadCloud, CheckCircle, FileText, Lock, Sparkles } from 'lucide-react';
import { conferenceData } from '../../data/conferenceData';

export const SubmissionModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    authorName: '',
    email: '',
    affiliation: '',
    track: 'track-01',
    paperTitle: '',
    abstract: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-navy-900 border border-brand-500/40 rounded-2xl shadow-[0_0_50px_rgba(251,146,0,0.3)] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-navy-850 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-400" />
            <h3 className="text-lg font-bold text-white">Manuscript Submission Portal</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-navy-800 text-slate-400 hover:text-white hover:bg-brand-500/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-brand-500/20 border border-brand-500 text-brand-400 mx-auto flex items-center justify-center animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-white">Submission Token Generated!</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your preliminary paper submission request for <strong className="text-brand-400">{formData.paperTitle || 'Manuscript'}</strong> has been registered under reference <code className="px-2 py-1 rounded bg-navy-800 font-mono text-brand-400 font-bold">ICRAIQ2IT-2027-{Math.floor(1000 + Math.random() * 9000)}</code>.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => { setSubmitted(false); onClose(); }}
                  className="px-6 py-2.5 rounded-xl bg-brand-500 text-slate-950 font-bold uppercase text-xs tracking-wider shadow-lg"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-xs text-brand-300 flex items-center gap-3">
                <Lock className="w-4 h-4 shrink-0 text-brand-400" />
                <span>Double-blind review. Personal metadata is hidden during peer evaluation.</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">Corresponding Author Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Jane Doe"
                    value={formData.authorName}
                    onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-navy-850 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-brand-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">Official Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="author@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-navy-850 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-brand-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">Institution / Organization</label>
                  <input
                    type="text"
                    required
                    placeholder="Dr RVR NRI Institute of Technology"
                    value={formData.affiliation}
                    onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-navy-850 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-brand-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">Select Research Track</label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-navy-850 border border-white/10 text-white text-sm focus:border-brand-500 outline-none"
                  >
                    {conferenceData.tracks.map((t) => (
                      <option key={t.id} value={t.id} className="bg-navy-900 text-white">
                        {t.number} - {t.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">Manuscript Paper Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Quantum Entanglement Networks for Decentralized AI"
                  value={formData.paperTitle}
                  onChange={(e) => setFormData({ ...formData, paperTitle: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-navy-850 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-brand-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">Abstract (150 - 300 words)</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Paste brief abstract summarizing methodology, results, and innovation..."
                  value={formData.abstract}
                  onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-navy-850 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-brand-500 outline-none"
                />
              </div>

              {/* Upload Drop Zone */}
              <div className="p-4 rounded-xl bg-navy-850 border-2 border-dashed border-brand-500/40 text-center hover:border-brand-500 transition-colors cursor-pointer">
                <UploadCloud className="w-8 h-8 text-brand-400 mx-auto mb-2" />
                <div className="text-xs font-bold text-white">Upload PDF Manuscript (Max 15MB)</div>
                <div className="text-[11px] text-slate-400">Strictly double-blind template format</div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-navy-800 text-slate-300 text-xs font-bold uppercase hover:bg-navy-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(251,146,0,0.4)]"
                >
                  Submit Paper
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmissionModal;
