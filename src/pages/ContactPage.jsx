import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Building,
  Sparkles,
  Plane,
  Train,
  Send,
  HelpCircle,
  FileText,
  CreditCard,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

/*
  ICRAIIQ2IT 2027 — Conference Secretariat & Contact Directory
  Standard: International Academic Conference UI/UX
  Compact, high-density, gap-free layout
  Brand Palette: #F97316 (Primary Orange), #ea580c (Deep Orange), #17213a (Navy Black), #405777 (Slate Navy), #FFFBF8 (Warm Ivory)
  Strict Width: max-w-[1280px] with px-5 sm:px-8 lg:px-10
*/

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
  const links = conferenceData?.links || {};

  const mapQuery =
    organizer.mapQuery ||
    'Dr RVR NRI Institute of Technology, Pothavarappadu, Agiripalli Mandalam, Andhra Pradesh 521212';
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapQuery
  )}`;
  const contactEmail = contact.email || organizer.email || 'icraiq2it27@nriit.edu.in';
  const helplinePhone = contact.phone || '+91 98480 12345';
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
      <section className="relative border-b border-orange-100/70 bg-gradient-to-b from-[#FFF7ED]/50 via-white to-white pt-5 pb-4 sm:pt-6 sm:pb-5">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            {/* Academic Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/90 bg-[#FFF7ED] px-3.5 py-1 text-xs font-semibold text-[#F97316] shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#F97316]" />
              <span>ICRAIIQ2IT 2027 • Official Secretariat &amp; Inquiries</span>
            </div>

            {/* Title */}
            <h1 className="mx-auto mt-2 text-2xl font-black tracking-tight text-[#17213a] sm:text-3xl lg:text-[38px] lg:leading-[1.18]">
              Conference Secretariat &amp; <span className="text-[#F97316]">Contact Directory</span>
            </h1>

            {/* Symmetrical Accent Bar */}
            <div className="mx-auto mt-2 h-1 w-14 rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C]" />

            {/* Subtitle */}
            <p className="mx-auto mt-2 max-w-3xl text-xs sm:text-sm leading-relaxed text-slate-600">
              Connect directly with the Conference Organizing Committee and Secretariat for questions regarding paper submissions, peer reviews, author registrations, publication indexation, and campus travel.
            </p>

            {/* Quick Action Links */}
            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2.5">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#F97316] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-xs transition hover:bg-[#ea580c]"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Email Secretariat</span>
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-orange-200 bg-orange-50/70 px-4 py-2 text-xs font-bold text-[#F97316] transition hover:bg-[#F97316] hover:text-white"
              >
                <Navigation className="h-3.5 w-3.5" />
                <span>Open Campus in Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>

              <button
                type="button"
                onClick={() => copyText(contactEmail, 'Secretariat Email')}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 transition hover:border-[#F97316] hover:text-[#F97316]"
              >
                <Copy className="h-3.5 w-3.5" />
                <span>Copy Email</span>
              </button>
            </div>

            {/* Highlights Trust Strip */}
            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 pt-3 border-t border-orange-100/70 text-xs font-medium text-slate-700">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-slate-800">
                <Building className="h-3.5 w-3.5 text-[#F97316]" /> Dr RVR NRIIT (Deemed to be University)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-slate-800">
                <Mail className="h-3.5 w-3.5 text-[#F97316]" /> icraiq2it27@nriit.edu.in
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-slate-800">
                <MapPin className="h-3.5 w-3.5 text-[#F97316]" /> Vijayawada Rural, AP, India
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-slate-800">
                <Globe className="h-3.5 w-3.5 text-[#F97316]" /> Blended Assistance
              </span>
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
      <section className="bg-white py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-3.5 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316]">
              Executive Directorate
            </span>
            <h2 className="mt-0.5 text-xl font-black tracking-tight text-[#17213a] sm:text-2xl">
              Conference Key Contacts
            </h2>
            <div className="mx-auto mt-1.5 h-0.5 w-10 rounded-full bg-[#F97316]" />
            <p className="mx-auto mt-1.5 max-w-2xl text-xs text-slate-600">
              For direct academic, publication, session, and administrative inquiries:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Card 1: Dr. K. V. Sambasiva Rao */}
            <div className="flex flex-col justify-between rounded-xl border-2 border-orange-200/90 bg-[#FFFBF8] p-4 sm:p-5 shadow-xs transition hover:border-[#F97316]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-orange-100 px-2.5 py-0.5 text-[10px] font-bold text-[#EA580C] border border-orange-200 uppercase tracking-wider">
                    Research &amp; Development • Publications
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F97316] text-white">
                    <FileText className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="mt-2.5 text-lg font-bold text-[#17213a]">
                  Dr. K. V. Sambasiva Rao
                </h3>

                <p className="mt-0.5 text-xs font-semibold text-slate-600">
                  Professor &amp; Dean, R &amp; D, Dr RVR NRIIT (DTBU)
                </p>

                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Handles academic paper submissions, double-blind peer review coordination, publisher liaison (Taylor &amp; Francis / AIP / Springer / Elsevier), and official Scopus proceedings indexation inquiries.
                </p>

                <div className="mt-3 rounded-lg border border-orange-100 bg-white p-2.5 text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Direct Email Reach:
                  </span>
                  <div className="mt-0.5 font-bold text-[#17213a]">
                    icraiq2it27@nriit.edu.in
                  </div>
                </div>
              </div>

              <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-orange-100">
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent('[ICRAIIQ2IT-2027] Query for Dr. K. V. Sambasiva Rao')}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F97316] hover:text-[#ea580c] hover:underline"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Email Dr. Rao</span>
                </a>

                <button
                  type="button"
                  onClick={() => copyText('icraiq2it27@nriit.edu.in', 'Dr. Rao Email')}
                  className="rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 transition hover:border-[#F97316] hover:text-[#F97316]"
                >
                  Copy Email
                </button>
              </div>
            </div>

            {/* Card 2: Dr. D. Sunitha */}
            <div className="flex flex-col justify-between rounded-xl border-2 border-orange-200/90 bg-[#FFFBF8] p-4 sm:p-5 shadow-xs transition hover:border-[#F97316]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-orange-100 px-2.5 py-0.5 text-[10px] font-bold text-[#EA580C] border border-orange-200 uppercase tracking-wider">
                    Convener &amp; Academic Logistics
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F97316] text-white">
                    <Building className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="mt-2.5 text-lg font-bold text-[#17213a]">
                  Dr. D. Sunitha
                </h3>

                <p className="mt-0.5 text-xs font-semibold text-slate-600">
                  HOD &amp; Dean : School of Computer Studies, Dr RVR NRIIT (DTBU)
                </p>

                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Oversees conference operations, technical track scheduling across all 21 tracks, presentation formats (in-person &amp; virtual), author registration verification, and valedictory awards coordination.
                </p>

                <div className="mt-3 rounded-lg border border-orange-100 bg-white p-2.5 text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Direct Email Reach:
                  </span>
                  <div className="mt-0.5 font-bold text-[#17213a]">
                    icraiq2it27@nriit.edu.in
                  </div>
                </div>
              </div>

              <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-orange-100">
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent('[ICRAIIQ2IT-2027] Query for Dr. D. Sunitha')}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F97316] hover:text-[#ea580c] hover:underline"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Email Dr. Sunitha</span>
                </a>

                <button
                  type="button"
                  onClick={() => copyText('icraiq2it27@nriit.edu.in', 'Dr. Sunitha Email')}
                  className="rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 transition hover:border-[#F97316] hover:text-[#F97316]"
                >
                  Copy Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DEPARTMENTAL ASSISTANCE CHANNELS (3-CARD GRID)
         ========================================================= */}
      <section className="border-t border-orange-100/70 bg-[#FFFBF8] py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-3.5 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316]">
              Dedicated Desks
            </span>
            <h2 className="mt-0.5 text-xl font-black tracking-tight text-[#17213a] sm:text-2xl">
              Assistance &amp; Support Channels
            </h2>
            <div className="mx-auto mt-1.5 h-0.5 w-10 rounded-full bg-[#F97316]" />
            <p className="mx-auto mt-1.5 max-w-2xl text-xs text-slate-600">
              Select the appropriate desk for rapid query resolution by the respective organizing sub-committee.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Channel 1 */}
            <div className="rounded-xl border border-orange-200/90 bg-white p-4 shadow-xs">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-[#F97316]">
                <FileText className="h-4 w-4" />
              </div>
              <h3 className="mt-2 text-sm font-bold text-[#17213a]">
                Paper Submission &amp; Review Desk
              </h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Queries regarding Microsoft CMT paper upload, double-blind review status, IEEE A4 2-column formatting, and acceptance notifications.
              </p>
              <div className="mt-2.5 pt-2 border-t border-orange-100 text-[11px] text-slate-600">
                Email: <strong className="text-[#17213a]">{contactEmail}</strong>
              </div>
            </div>

            {/* Channel 2 */}
            <div className="rounded-xl border border-orange-200/90 bg-white p-4 shadow-xs">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-[#F97316]">
                <CreditCard className="h-4 w-4" />
              </div>
              <h3 className="mt-2 text-sm font-bold text-[#17213a]">
                Registration &amp; Fee Remittance Desk
              </h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Bank of Baroda transfer verification, UPI payment screenshot confirmation, invoice issuance, and author registration certificates.
              </p>
              <div className="mt-2.5 pt-2 border-t border-orange-100 text-[11px] text-slate-600">
                Email: <strong className="text-[#17213a]">{contactEmail}</strong>
              </div>
            </div>

            {/* Channel 3 */}
            <div className="rounded-xl border border-orange-200/90 bg-white p-4 shadow-xs sm:col-span-2 lg:col-span-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-[#F97316]">
                <Plane className="h-4 w-4" />
              </div>
              <h3 className="mt-2 text-sm font-bold text-[#17213a]">
                Travel &amp; Hospitality Desk
              </h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Airport &amp; railway transit coordination, Vijayawada hotel recommendations, campus guest house reservations, and local tourist advice.
              </p>
              <div className="mt-2.5 pt-2 border-t border-orange-100 text-[11px] text-slate-600">
                Email: <strong className="text-[#17213a]">{contactEmail}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAMPUS HEADQUARTERS & INTERACTIVE MAP (COMPACT 2-COL)
         ========================================================= */}
      <section className="bg-white py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-3.5 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316]">
              Campus Venue
            </span>
            <h2 className="mt-0.5 text-xl font-black tracking-tight text-[#17213a] sm:text-2xl">
              Conference Headquarters &amp; Location
            </h2>
            <div className="mx-auto mt-1.5 h-0.5 w-10 rounded-full bg-[#F97316]" />
            <p className="mx-auto mt-1.5 max-w-2xl text-xs text-slate-600">
              Dr RVR NRI Institute of Technology, Vijayawada Rural, Andhra Pradesh, India.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-12">
            {/* LEFT: SECRETARIAT PARTICULARS (6 Cols) */}
            <div className="rounded-xl border-2 border-orange-200/90 bg-[#FFFBF8] p-4 sm:p-5 shadow-xs lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-[#F97316]" />
                  <h3 className="text-base font-bold text-[#17213a]">
                    Official Secretariat Headquarters
                  </h3>
                </div>

                <div className="mt-3 rounded-lg border border-orange-100 bg-white p-3 shadow-xs">
                  <div className="font-bold text-sm text-[#17213a]">
                    {organizer.name || 'Dr RVR NRI Institute of Technology (Deemed to be University)'}
                  </div>
                  <div className="mt-0.5 text-xs font-semibold text-[#F97316]">
                    {organizer.school || 'School of Computer Studies'}
                  </div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {organizer.address || 'Pothavarappadu, Agiripalli Mandalam, Eluru District, Vijayawada Rural, Andhra Pradesh, India Pin - 521212'}
                  </p>
                </div>

                {/* GPS Coordinates Box */}
                <div className="mt-2.5 rounded-lg border border-orange-100 bg-white p-3 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      GPS Coordinates (Campus Entrance):
                    </span>
                    <button
                      type="button"
                      onClick={() => copyText(coordinates, 'GPS Coordinates')}
                      className="rounded border border-slate-200 p-0.5 text-slate-600 hover:border-[#F97316] hover:text-[#F97316]"
                      title="Copy GPS Coordinates"
                    >
                      <Copy className="h-3 w-3" />
                    </button>
                  </div>
                  <p className="mt-0.5 font-mono text-xs font-bold text-[#F97316]">
                    {coordinates}
                  </p>
                </div>

                {/* Transit Strip */}
                <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg bg-orange-50/70 border border-orange-100 p-2">
                    <div className="flex items-center gap-1 font-bold text-[#17213a]">
                      <Plane className="h-3.5 w-3.5 text-[#F97316]" />
                      <span>Airport (VGA)</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5">~22 km • 30 mins drive</p>
                  </div>

                  <div className="rounded-lg bg-orange-50/70 border border-orange-100 p-2">
                    <div className="flex items-center gap-1 font-bold text-[#17213a]">
                      <Train className="h-3.5 w-3.5 text-[#F97316]" />
                      <span>Railway (BZA)</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5">~23 km • 35 mins drive</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-3.5 flex flex-wrap items-center gap-2 pt-3 border-t border-orange-100">
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#F97316] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition hover:bg-[#ea580c]"
                >
                  <Mail className="h-3 w-3" />
                  <span>Email Secretariat</span>
                </a>

                <button
                  type="button"
                  onClick={() => copyText(organizer.address || 'Pothavarappadu, Agiripalli Mandalam, Eluru District, Vijayawada Rural, Andhra Pradesh, India Pin - 521212', 'Campus Address')}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-[#F97316] hover:text-[#F97316]"
                >
                  <Copy className="h-3 w-3" />
                  <span>Copy Address</span>
                </button>

                {organizer.website && (
                  <a
                    href={organizer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg border border-orange-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-[#F97316] hover:text-[#F97316]"
                  >
                    <Globe className="h-3 w-3" />
                    <span>NRIIT Site</span>
                    <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT: INTERACTIVE MAP (6 Cols) */}
            <div className="relative overflow-hidden rounded-xl border-2 border-orange-200 bg-[#FFF7ED] shadow-xs lg:col-span-6">
              <div className="h-[340px] w-full sm:h-[360px] lg:h-[370px]">
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

              {/* Float Map Overlay */}
              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-[#17213a] shadow-md ring-1 ring-orange-200 backdrop-blur-xs transition hover:bg-[#F97316] hover:text-white"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  <span>Open in Maps</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIRECT INQUIRY DESK / MESSAGE FORM (COMPACT)
         ========================================================= */}
      <section className="border-t border-orange-100/70 bg-[#FFFBF8] py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="rounded-2xl border-2 border-orange-200 bg-white p-5 sm:p-6 shadow-xs">
            <div className="mb-4 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316]">
                Direct Message Desk
              </span>
              <h2 className="mt-0.5 text-lg font-black tracking-tight text-[#17213a] sm:text-xl">
                Submit an Official Inquiry to Secretariat
              </h2>
              <div className="mx-auto mt-1.5 h-0.5 w-10 rounded-full bg-[#F97316]" />
              <p className="mx-auto mt-1 text-xs text-slate-600 max-w-xl">
                Fill the fields below to dispatch your message directly to the conference secretariat mailbox ({contactEmail}).
              </p>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-3 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Prof. / Dr. / Scholar Name"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full rounded-lg border border-orange-200 px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:border-[#F97316] focus:outline-hidden focus:ring-1 focus:ring-[#F97316]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="author@institution.edu"
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    className="w-full rounded-lg border border-orange-200 px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:border-[#F97316] focus:outline-hidden focus:ring-1 focus:ring-[#F97316]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Inquiry Category *
                  </label>
                  <select
                    value={inquiryCategory}
                    onChange={(e) => setInquiryCategory(e.target.value)}
                    className="w-full rounded-lg border border-orange-200 bg-white px-3 py-1.5 text-xs text-slate-800 focus:border-[#F97316] focus:outline-hidden focus:ring-1 focus:ring-[#F97316]"
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
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Subject Line *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Query regarding CMT Paper ID #123"
                    value={inquirySubject}
                    onChange={(e) => setInquirySubject(e.target.value)}
                    className="w-full rounded-lg border border-orange-200 px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:border-[#F97316] focus:outline-hidden focus:ring-1 focus:ring-[#F97316]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Message / Details *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Please state your specific inquiry, paper ID (if applicable), or assistance requirement..."
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  className="w-full rounded-lg border border-orange-200 px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:border-[#F97316] focus:outline-hidden focus:ring-1 focus:ring-[#F97316]"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#F97316] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition hover:bg-[#ea580c]"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Message to Secretariat</span>
                </button>

                {formSent && (
                  <span className="flex items-center gap-1 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                    Mail client opened! You may also copy email {contactEmail}.
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
