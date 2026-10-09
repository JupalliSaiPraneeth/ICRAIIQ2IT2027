import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

export const ContactPage = () => {
  const organizer = conferenceData?.organizer || {};
  const contact = conferenceData?.contact || {};
  const contactEmail = contact.email || organizer.email || 'icraiq2it27@nriit.edu.in';

  return (
    <div className="bg-white text-[#17213a] pb-6 sm:pb-8">
      {/* =========================================================
          HERO SECTION: ACADEMIC SECRETARIAT DIRECTORY (COMPACT)
         ========================================================= */}
      <section className="bg-white py-2">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <h1 className="mx-auto whitespace-nowrap text-[clamp(1rem,5vw,2.25rem)] font-black tracking-tight text-[#17213a] sm:text-[clamp(1.75rem,4vw,2.25rem)] lg:text-[42px] lg:leading-[1.18]">
              Contact the <span className="text-[#F97316]">Secretariat</span>
            </h1>

            <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-[#F97316]" />
          </div>
        </div>
      </section>

      {/* =========================================================
          KEY LEADERSHIP & CONTACT PERSONS (SEQUENTIAL LIST)
         ========================================================= */}
      <section className="bg-white py-1.5">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-2">
            <h2 className="text-xl font-bold tracking-tight text-[#17213a] sm:text-2xl">
              Key contacts
            </h2>
          </div>

          <div className="space-y-2">
            {/* Contact 1: Dr. K. V. Sambasiva Rao */}
            <div className="rounded-lg border border-slate-200 bg-white p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 hover:border-orange-200 transition-colors">
              <div>
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-base font-bold text-[#17213a]">Dr. K. V. Sambasiva Rao</h3>
                  <span className="text-xs font-semibold text-[#F97316]">Professor &amp; Dean, R &amp; D</span>
                </div>
                <p className="mt-0.5 text-xs text-slate-500">Dr RVR NRIIT (DTBU)</p>
                <p className="mt-0.5 text-sm text-slate-600">
                  Academic papers, peer review, and publication inquiries.
                </p>
              </div>

              <div className="shrink-0 border-t border-slate-100 pt-1.5 sm:border-t-0 sm:pt-0">
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent('[ICRAIIQ2IT-2027] Query for Dr. K. V. Sambasiva Rao')}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Dr. Rao</span>
                </a>
              </div>
            </div>

            {/* Contact 2: Dr. D. Sunitha */}
            <div className="rounded-lg border border-slate-200 bg-white p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 hover:border-orange-200 transition-colors">
              <div>
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-base font-bold text-[#17213a]">Dr. D. Sunitha</h3>
                  <span className="text-xs font-semibold text-[#F97316]">HOD &amp; Dean : School of Computer Studies</span>
                </div>
                <p className="mt-0.5 text-xs text-slate-500">Dr RVR NRIIT (DTBU)</p>
                <p className="mt-0.5 text-sm text-slate-600">
                  Conference operations, scheduling, and delegate assistance.
                </p>
              </div>

              <div className="shrink-0 border-t border-slate-100 pt-1.5 sm:border-t-0 sm:pt-0">
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent('[ICRAIIQ2IT-2027] Query for Dr. D. Sunitha')}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Dr. Sunitha</span>
                </a>
              </div>
            </div>

            {/* Contact 3: Jithendra (SPOC) */}
            <div className="rounded-lg border border-slate-200 bg-white p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 hover:border-orange-200 transition-colors">
              <div>
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-base font-bold text-[#17213a]">Jithendra</h3>
                  <span className="text-xs font-semibold text-[#F97316]">SPOC (Single Point of Contact)</span>
                </div>
                <p className="mt-0.5 text-xs text-slate-500">Dr RVR NRIIT (DTBU)</p>
                <p className="mt-0.5 text-sm text-slate-600">
                  General conference inquiries, registration assistance, and attendee queries.
                </p>
              </div>

              <div className="shrink-0 border-t border-slate-100 pt-1.5 sm:border-t-0 sm:pt-0">
                <a
                  href="tel:+919440948018"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 94409 48018</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
