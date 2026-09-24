import React from 'react';

import { FileText, Download, CheckCircle2, ExternalLink } from 'lucide-react';

const BROCHURE_URL = '#download-brochure';

export const BrochurePage = () => {
  const features = [
    'Conference overview and objectives',
    'Call for Papers and submission information',
    'Conference tracks and research areas',
    'Registration and participation information',
    'Venue, accommodation and contact details',
  ];

  const handleDownload = (event) => {
    // Keep the button functional once the real brochure URL is configured.
    if (BROCHURE_URL === '#download-brochure') {
      event.preventDefault();
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF8] px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <div className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#F97316]">
            Official Brochure
          </div>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-[#1d315f] sm:text-4xl lg:text-5xl">
            ICRAIIQ2IT 2027 Information Brochure
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Access the official conference brochure for complete information
            about the event, submissions, registration, venue and conference
            activities.
          </p>
        </div>

        {/* Brochure Card */}
        <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-[0_12px_35px_rgba(249,115,22,0.10)]">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Brochure Preview */}
            <div className="flex min-h-[360px] items-center justify-center bg-[#FFF7ED] p-8 lg:col-span-2">
              <div className="w-full max-w-[270px] rounded-xl border border-orange-100 bg-white p-7 text-center shadow-[0_12px_30px_rgba(249,115,22,0.14)]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-[#F97316] text-white shadow-md">
                  <FileText className="h-8 w-8" />
                </div>
                <div className="mt-6 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#F97316]">
                  Official Conference Brochure
                </div>
                <h2 className="mt-3 text-xl font-extrabold leading-tight text-[#1d315f]">
                  ICRAIIQ2IT
                  <span className="block">2027</span>
                </h2>
                <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#F97316]" />
                <p className="mt-5 text-xs leading-5 text-slate-500">
                  International Conference
                  <br />
                  Recent Advancements in Intelligent,
                  <br />
                  Quantum & Information Technologies
                </p>
              </div>
            </div>

            {/* Brochure Information */}
            <div className="space-y-7 p-8 sm:p-10 lg:col-span-3 lg:p-12">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#F97316]">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                      Conference Document
                    </div>
                    <h3 className="mt-1 text-2xl font-extrabold text-[#1d315f]">
                      Official Printable Brochure
                    </h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Download the official conference brochure to view the
                  conference information in a convenient printable format.
                </p>
              </div>

              {/* Included Information */}
              <div className="rounded-2xl border border-orange-100 bg-[#FFFBF8] p-5">
                <h4 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-[#1d315f]">
                  Brochure Contents
                </h4>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F97316]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Action */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={BROCHURE_URL}
                  target={BROCHURE_URL.startsWith('http') ? '_blank' : undefined}
                  rel={
                    BROCHURE_URL.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  onClick={handleDownload}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F97316] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg transition-all duration-200 hover:bg-[#EA580C] hover:shadow-xl"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Brochure PDF</span>
                </a>
                {BROCHURE_URL.startsWith('http') && (
                  <a
                    href={BROCHURE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#F97316] px-7 py-3.5 text-sm font-bold text-[#F97316] transition-all hover:bg-[#F97316] hover:text-white"
                  >
                    <span>Open PDF</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              {BROCHURE_URL === '#download-brochure' && (
                <p className="text-xs text-slate-400">
                  Set{' '}
                  <code className="rounded bg-orange-50 px-1.5 py-0.5 text-orange-700">
                    BROCHURE_URL
                  </code>{' '}
                  to the actual PDF path or URL when the official brochure file
                  is available.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochurePage;
