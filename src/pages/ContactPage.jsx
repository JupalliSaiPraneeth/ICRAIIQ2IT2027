import React from 'react';

import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Navigation,
  ExternalLink,
} from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

export const ContactPage = () => {
  const organizer = conferenceData?.organizer || {};
  const links = conferenceData?.links || {};

  const mapQuery =
    organizer.mapQuery ||
    'NRI Institute of Technology, Pothavarappadu, Agiripalli, Andhra Pradesh';
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapQuery
  )}`;
  const contactEmail = links.contactEmail || '';
  const helplinePhone = links.helplinePhone || '';

  return (
    <main className="min-h-screen bg-[#FFFBF8] text-slate-900">
      <section className="px-5 pt-8 sm:px-8 sm:pt-10 lg:px-10">
        <div className="mx-auto max-w-[1360px]">
          <div className="text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F97316]">
              Conference Secretariat
            </span>
            <h1 className="mt-2 text-center text-[40px] font-extrabold leading-tight tracking-[-0.025em] text-[#F97316] sm:text-[44px] lg:text-[46px]">
              Contact Us
            </h1>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#FDBA74]" />
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 pt-10 sm:px-8 lg:px-10 lg:pt-12">
        <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.96fr)] lg:gap-12">
          <div className="relative overflow-hidden rounded-2xl border border-orange-200 bg-[#FFF7ED] shadow-[0_10px_30px_rgba(249,115,22,0.12)]">
            <div className="h-[420px] w-full sm:h-[500px] lg:h-[525px]">
              <iframe
                title="NRI Institute of Technology Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  mapQuery
                )}&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#172554] shadow-lg ring-1 ring-orange-200 transition-all hover:bg-[#F97316] hover:text-white"
            >
              <Navigation className="h-4 w-4" />
              Open in Maps
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-[0_6px_22px_rgba(249,115,22,0.08)] sm:p-7">
              <div className="space-y-5 text-[17px] leading-7 text-slate-900">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-[#F97316]" />
                  <div>
                    <div className="font-medium">
                      Dr. K. V. Sambasiva Rao, Professor &amp; Dean, CSE, NRIIT
                      {contactEmail && (
                        <>
                          {' '}–{' '}
                          <a
                            href={`mailto:${contactEmail}`}
                            className="transition-colors hover:text-[#EA580C] hover:underline"
                          >
                            {contactEmail}
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-[#F97316]" />
                  <div>
                    <div className="font-medium">
                      Dr. D. Suneetha, Professor &amp; HOD, CSE, NRIIT
                      {helplinePhone ? (
                        <>
                          {' '}–{' '}
                          <a
                            href={`mailto:${helplinePhone}`}
                            className="transition-colors hover:text-[#EA580C] hover:underline"
                          >
                            {helplinePhone}
                          </a>
                        </>
                      ) : (
                        ' – hod.csenriit@gmail.com'
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 border-t border-orange-100 pt-6">
                <h2 className="text-[30px] font-extrabold leading-tight text-[#F97316] sm:text-[32px]">
                  {organizer.name || 'NRI Institute of Technology'}
                </h2>
                <div className="mt-4 space-y-1 text-[18px] leading-7 text-[#334155]">
                  <p>Pothavarappadu, Agiripalli Mandalam</p>
                  <p>Krishna District, Andhra Pradesh, India</p>
                  <p>Pin – 521212</p>
                </div>
              </div>

              <div className="mt-7 rounded-xl bg-[#FFF7ED] p-4">
                <h3 className="text-[18px] font-bold text-slate-800">
                  Coordinates:
                </h3>
                <div className="mt-1 space-y-1 text-[17px] leading-7 text-[#334155]">
                  <p>Primary: 16.66327986299729, 80.73777642559249</p>
                  <p>Secondary: 16.663338876474548, 80.7378364640956</p>
                </div>
              </div>

              <p className="mt-7 max-w-[700px] text-[17px] leading-8 text-[#475569]">
                The campus is conveniently accessible from Vijayawada city and
                is surrounded by serene greenery, making it an ideal location
                for academic and professional events.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {contactEmail && (
                  <a
                    href={`mailto:${contactEmail}`}
                    className="inline-flex items-center gap-2 rounded-md bg-[#F97316] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#EA580C] hover:shadow-md"
                  >
                    <Mail className="h-4 w-4" />
                    Email Secretariat
                  </a>
                )}
                {helplinePhone && (
                  <a
                    href={`tel:${helplinePhone}`}
                    className="inline-flex items-center gap-2 rounded-md border border-orange-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-[#F97316] hover:bg-[#FFF7ED] hover:text-[#EA580C]"
                  >
                    <Phone className="h-4 w-4" />
                    Call Secretariat
                  </a>
                )}
                {organizer.website && (
                  <a
                    href={organizer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-orange-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-[#F97316] hover:bg-[#FFF7ED] hover:text-[#EA580C]"
                  >
                    <Globe className="h-4 w-4" />
                    NRIIT Website
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
