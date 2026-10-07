import React, { useState } from 'react';
import {
  Mail,
  Navigation,
  ExternalLink,
  Check,
  Send,
  CheckCircle2
} from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

export const ContactPage = () => {
  const [copyStatus, setCopyStatus] = useState('');
  const [inquiryCategory, setInquiryCategory] = useState('Paper Submission & CMT');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySubject, setInquirySubject] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const organizer = conferenceData?.organizer || {};
  const contact = conferenceData?.contact || {};

  const mapQuery =
    organizer.mapQuery ||
    'Dr RVR NRI Institute of Technology, Pothavarappadu, Agiripalli Mandalam, Andhra Pradesh 521212';
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapQuery
  )}`;
  const contactEmail = contact.email || organizer.email || 'icraiq2it27@nriit.edu.in';
  const coordinates = contact.coordinates || '16.66327986299729, 80.73777642559249';

  const copyText = async (text, label = 'Copied') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus(`${label} copied to clipboard!`);
    } catch {
      setCopyStatus('Unable to copy');
    }
    window.setTimeout(() => setCopyStatus(''), 3000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[ICRAIIQ2IT-2027] [${inquiryCategory}] ${inquirySubject || 'Inquiry'}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${inquiryName}\nEmail: ${inquiryEmail}\nCategory: ${inquiryCategory}\n\nMessage:\n${inquiryMessage}`
    );
    window.open(`mailto:${contactEmail}?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');
    setFormSent(true);
    window.setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <main className="min-h-screen bg-white text-[#17213a]">
      {/* =========================================================
          HERO SECTION: ACADEMIC SECRETARIAT DIRECTORY (COMPACT)
         ========================================================= */}
      <section className="bg-white py-2">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <h1 className="mx-auto text-3xl font-black tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px] lg:leading-[1.18]">
              Contact the <span className="text-[#F97316]">Secretariat</span>
            </h1>

            <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-[#F97316]" />
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              Contact us about submissions, registration, or conference logistics.
            </p>

            <div className="mt-1.5 flex flex-wrap items-center justify-center gap-1.5">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-1.5 rounded-md bg-[#F97316] px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-[#ea580c]"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Email Secretariat</span>
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-[#F97316] hover:text-[#F97316]"
              >
                <Navigation className="h-3.5 w-3.5" />
                <span>Open Campus in Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Floating Toast Notification */}
      {copyStatus && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-xl bg-[#17213a] px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xl border border-orange-400/30">
          <Check className="h-4 w-4 text-[#F97316]" />
          <span>{copyStatus}</span>
        </div>
      )}

      {/* =========================================================
          KEY LEADERSHIP & CONTACT PERSONS (SYMMETRICAL 2-COL CARDS)
         ========================================================= */}
      <section className="bg-white py-1.5">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-1.5">
            <h2 className="text-xl font-bold tracking-tight text-[#17213a] sm:text-2xl">
              Key contacts
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2">
            {/* Card 1: Dr. K. V. Sambasiva Rao */}
            <div className="rounded-lg border border-slate-200 bg-white p-2.5">
              <div>
                <h3 className="text-base font-bold text-[#17213a]">Dr. K. V. Sambasiva Rao</h3>
                <p className="mt-0.5 text-sm font-medium text-slate-600">
                  Professor &amp; Dean, R &amp; D, Dr RVR NRIIT (DTBU)
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                  Academic papers, peer review, and publication inquiries.
                </p>
              </div>

              <div className="mt-1.5 border-t border-slate-100 pt-1.5">
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent('[ICRAIIQ2IT-2027] Query for Dr. K. V. Sambasiva Rao')}`}
                  className="text-sm font-semibold text-[#F97316] hover:underline"
                >
                  Email Dr. Rao
                </a>
              </div>
            </div>

            {/* Card 2: Dr. D. Sunitha */}
            <div className="rounded-lg border border-slate-200 bg-white p-2.5">
              <div>
                <h3 className="text-base font-bold text-[#17213a]">Dr. D. Sunitha</h3>
                <p className="mt-0.5 text-sm font-medium text-slate-600">
                  HOD &amp; Dean : School of Computer Studies, Dr RVR NRIIT (DTBU)
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                  Conference operations, scheduling, and delegate assistance.
                </p>
              </div>

              <div className="mt-1.5 border-t border-slate-100 pt-1.5">
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent('[ICRAIIQ2IT-2027] Query for Dr. D. Sunitha')}`}
                  className="text-sm font-semibold text-[#F97316] hover:underline"
                >
                  Email Dr. Sunitha
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAMPUS HEADQUARTERS & INTERACTIVE MAP (COMPACT 2-COL)
         ========================================================= */}
      <section className="bg-white py-1.5">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-1.5">
            <h2 className="text-xl font-bold tracking-tight text-[#17213a] sm:text-2xl">
              Campus location
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-1.5 lg:grid-cols-2">
            {/* LEFT: SECRETARIAT PARTICULARS (6 Cols) */}
            <div className="rounded-lg border border-slate-200 bg-white p-2.5">
              <div>
                <div className="font-bold text-base text-[#17213a]">
                    {organizer.name || 'Dr RVR NRI Institute of Technology (Deemed to be University)'}
                </div>
                <div className="mt-0.5 text-sm font-medium text-[#F97316]">
                    {organizer.school || 'School of Computer Studies'}
                </div>
                <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                    {organizer.address || 'Pothavarappadu, Agiripalli Mandalam, Eluru District, Vijayawada Rural, Andhra Pradesh, India Pin - 521212'}
                </p>

                <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-sm">
                  <span className="font-mono text-slate-600">{coordinates}</span>
                  <button
                    type="button"
                    onClick={() => copyText(coordinates, 'GPS Coordinates')}
                    className="rounded border border-slate-300 px-2 py-1 text-xs font-medium text-slate-700 hover:border-[#F97316] hover:text-[#F97316]"
                  >
                    Copy coordinates
                  </button>
                </div>

                <div className="mt-1.5 grid grid-cols-2 gap-1.5 text-sm">
                  <div className="rounded-md bg-slate-50 p-1.5">
                    <span className="font-semibold text-slate-700">Airport (VGA)</span>
                    <p className="mt-0.5 text-slate-600">About 22 km · 30 min drive</p>
                  </div>
                  <div className="rounded-md bg-slate-50 p-1.5">
                    <span className="font-semibold text-slate-700">Railway (BZA)</span>
                    <p className="mt-0.5 text-slate-600">About 23 km · 35 min drive</p>
                  </div>
                </div>

                <div className="mt-1.5 flex flex-wrap gap-1.5 border-t border-slate-100 pt-1.5">
                  <button
                    type="button"
                    onClick={() => copyText(organizer.address || 'Pothavarappadu, Agiripalli Mandalam, Eluru District, Vijayawada Rural, Andhra Pradesh, India Pin - 521212', 'Campus Address')}
                    className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-[#F97316] hover:text-[#F97316]"
                  >
                    Copy address
                  </button>
                  {organizer.website && (
                    <a
                      href={organizer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-[#F97316] hover:text-[#F97316]"
                    >
                      NRIIT website
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT: INTERACTIVE MAP (6 Cols) */}
            <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
              <div className="h-[300px] w-full sm:h-[340px]">
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

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIRECT INQUIRY DESK / MESSAGE FORM (COMPACT)
         ========================================================= */}
      <section className="bg-white py-1.5">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="mb-1.5">
              <h2 className="text-xl font-bold tracking-tight text-[#17213a] sm:text-2xl">
                Send an inquiry
              </h2>
              <p className="mt-0.5 text-sm text-slate-600">
                Complete the form to open an email addressed to the secretariat.
              </p>
            </div>

            <form onSubmit={handleSendMessage} className="mx-auto max-w-4xl space-y-1.5">
              <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-[#F97316] focus:outline-hidden focus:ring-1 focus:ring-[#F97316]"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@institution.edu"
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-[#F97316] focus:outline-hidden focus:ring-1 focus:ring-[#F97316]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Topic *
                  </label>
                  <select
                    value={inquiryCategory}
                    onChange={(e) => setInquiryCategory(e.target.value)}
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 focus:border-[#F97316] focus:outline-hidden focus:ring-1 focus:ring-[#F97316]"
                  >
                    <option value="Paper Submission & CMT">Paper Submission &amp; Microsoft CMT</option>
                    <option value="Registration & Fee Remittance">Registration &amp; Fee Remittance</option>
                    <option value="Scopus Publication & Indexing">Scopus Publication &amp; Indexing</option>
                    <option value="Presentation Mode (Blended/Virtual)">Presentation Mode (Blended / Virtual)</option>
                    <option value="Travel & Campus Accommodation">Travel &amp; Campus Accommodation</option>
                    <option value="General Secretariat Inquiry">General Secretariat Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Brief subject"
                    value={inquirySubject}
                    onChange={(e) => setInquirySubject(e.target.value)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-[#F97316] focus:outline-hidden focus:ring-1 focus:ring-[#F97316]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Message *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="How can we help?"
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-[#F97316] focus:outline-hidden focus:ring-1 focus:ring-[#F97316]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-md bg-[#F97316] px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-[#ea580c]"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send inquiry</span>
                </button>

                {formSent && (
                  <span className="flex items-center gap-1 text-sm font-medium text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                    Your email app should open with the message.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
