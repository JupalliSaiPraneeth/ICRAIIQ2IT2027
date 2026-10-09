import React, { useState } from 'react';
import { FileText, Download, CheckCircle2, ExternalLink, Eye, Sparkles } from 'lucide-react';

const BROCHURE_URL = '/brocher/ICRAIQ2IT%20-%202027%20Brochure%20-%20English%2029092026.pdf';
const BROCHURE_FILENAME = 'ICRAIQ2IT - 2027 Brochure - English.pdf';

export const BrochurePage = () => {
  const [showEmbeddedViewer, setShowEmbeddedViewer] = useState(true);

  const features = [
    'Conference overview, vision and objectives',
    'Call for Papers, publication tracks and submission links',
    'Distinguished keynote speakers & steering committee',
    'Registration categories, delegate fee structure and deadlines',
    'Dr RVR NRI Institute of Technology venue, transit & accommodation guide',
  ];

  return (
    <div className="min-h-screen bg-white px-5 py-12 text-slate-900 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1280px] space-y-10">
        {/* Page Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#F97316]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Official Conference Brochure</span>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight text-[#1d315f] sm:text-4xl lg:text-[42px]">
            ICRAIQ2IT - 2027 Information Brochure
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Access and download the official comprehensive conference brochure for complete information
            about key dates, submission guidelines, registration fees, and event schedules.
          </p>
        </div>

        {/* Brochure Card */}
        <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-[0_12px_35px_rgba(249,115,22,0.10)]">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Brochure Preview Visual */}
            <div className="flex min-h-[360px] items-center justify-center bg-[#FFF7ED] p-8 lg:col-span-2">
              <div className="w-full max-w-[270px] rounded-2xl border border-orange-100 bg-white p-7 text-center shadow-[0_12px_30px_rgba(249,115,22,0.14)]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#EA580C] to-[#F97316] text-white shadow-md">
                  <FileText className="h-8 w-8" />
                </div>
                <div className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#F97316]">
                  Official Printable Brochure
                </div>
                <h2 className="mt-2 text-xl font-extrabold leading-tight text-[#1d315f]">
                  ICRAIQ2IT
                  <span className="block text-[#EA580C]">2027</span>
                </h2>
                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F97316]" />
                <p className="mt-4 text-xs leading-5 text-slate-500">
                  5<sup>th</sup> International Conference on Recent Advancements in AI, Quantum Intelligence &amp; Inclusive Technologies
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-[11px] font-bold text-orange-700">
                  <span>PDF Document • 830 KB</span>
                </div>
              </div>
            </div>

            {/* Brochure Information */}
            <div className="space-y-6 p-8 sm:p-10 lg:col-span-3 lg:p-12">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#F97316]">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                      Official Document
                    </div>
                    <h3 className="mt-0.5 text-2xl font-extrabold text-[#1d315f]">
                      ICRAIQ2IT - 2027 Brochure
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  The official English information brochure contains complete guidelines for authors, track taxonomies, keynote digests, and institutional background of Dr RVR NRI Institute of Technology.
                </p>
              </div>

              {/* Included Information */}
              <div className="rounded-2xl border border-orange-100 bg-[#FFFBF8] p-5">
                <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-[#1d315f]">
                  Brochure Highlights
                </h4>
                <div className="space-y-2">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-600 font-medium"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F97316]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download & View Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={BROCHURE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1d315f] to-[#2b468b] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#15254a] hover:shadow-lg"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Open PDF in New Tab</span>
                </a>

                <a
                  href={BROCHURE_URL}
                  download={BROCHURE_FILENAME}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-extrabold text-white shadow-md transition-all duration-200 hover:bg-[#EA580C] hover:shadow-lg"
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </a>

                <button
                  type="button"
                  onClick={() => setShowEmbeddedViewer(!showEmbeddedViewer)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-[#F97316] hover:bg-orange-50 hover:text-[#F97316]"
                >
                  <Eye className="h-4 w-4" />
                  <span>{showEmbeddedViewer ? 'Hide Preview' : 'Preview Online'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Interactive PDF Viewer */}
        {showEmbeddedViewer && (
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-3.5">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#F97316]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Online Brochure Document Viewer
                </span>
              </div>
              <a
                href={BROCHURE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F97316] hover:underline"
              >
                <span>Fullscreen</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="relative h-[800px] w-full bg-slate-100">
              <iframe
                src={`${BROCHURE_URL}#toolbar=1&navpanes=0`}
                title="ICRAIQ2IT - 2027 Conference Brochure"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrochurePage;
