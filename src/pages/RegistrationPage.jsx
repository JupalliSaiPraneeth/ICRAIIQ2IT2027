import React, { useState } from 'react';
import {
  Copy,
  CreditCard,
  ExternalLink,
  FileText,
  CheckCircle2,
  Mail,
  ShieldCheck,
  X,
  QrCode,
  Download,
  Check,
  ArrowRight,
  Info,
  Building,
  Sparkles,
  Award,
  Users,
  AlertCircle,
  HelpCircle,
  Clock,
  CheckCheck,
  Globe2,
  BookOpen
} from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

/*
  ICRAIIQ2IT 2027 — International Conference Registration & Fee Portal
  Standard: International Academic Conference UI/UX
  Compact, gap-free, high-density layout
  Color Palette: #F97316 (Primary Orange), #ea580c (Deep Orange), #17213a (Navy Black), #405777 (Slate Navy), #FFFBF8 (Warm Ivory)
  Strict Width: max-w-[1280px] with px-5 sm:px-8 lg:px-10
*/

const DEFAULT_BANK_DETAILS = {
  accountName: 'The Principal, Dr RVR NRI Institute of Technology (Deemed to be University), Agiripalli',
  bankName: 'BANK OF BARODA',
  accountNumber: 'Available upon invoice / submission request',
  ifsc: 'BARB0AGIRIP',
  branch: 'Agiripalli / Pothavarappadu',
  upiId: 'icraiq2it27@barodampay',
  qrCodeUrl: '/bank-qr.png',
};

const REGISTRATION_TIERS = [
  {
    id: 'base',
    title: 'Base Registration',
    subtitle: 'Conference Participation & Presentation',
    eligibility: 'Co-authors, listeners, and non-publishing delegates',
    indianFee: '₹ 3,500',
    internationalFee: '$ 75 USD',
    badge: 'Mandatory Delegate Fee',
    highlight: false,
    features: [
      'Oral or Poster presentation slot',
      'Conference Delegate Kit & Name Badge',
      'Official Certificate of Participation / Presentation',
      'Access to all 21 multidisciplinary tracks & keynotes',
      'Networking tea, lunch, and conference proceedings access'
    ],
  },
  {
    id: 'scholar',
    title: 'Ph.D Scholars & Students',
    subtitle: 'Full Scopus Publication Tier',
    eligibility: 'B.Tech / M.Tech / M.S / Ph.D research scholars with valid institutional ID',
    indianFee: '₹ 6,500',
    internationalFee: '$ 150 USD',
    badge: 'Most Popular Academic Tier',
    highlight: true,
    features: [
      'Full Scopus-indexed proceedings publication',
      'Taylor & Francis / AIP / Springer / Elsevier proceedings',
      'Paper Presentation cum Publication Certificate',
      'Blended presentation mode (In-Person or Virtual)',
      'Complete conference kit & access to all tracks',
      'Technical mentoring and author Q&A session'
    ],
  },
  {
    id: 'faculty',
    title: 'Academicians & Faculty',
    subtitle: 'Full Scopus Publication Tier',
    eligibility: 'Professors, Associate / Assistant Professors & Faculty Researchers',
    indianFee: '₹ 7,500',
    internationalFee: '$ 150 USD',
    badge: 'Faculty Standard Tier',
    highlight: false,
    features: [
      'Full Scopus-indexed proceedings publication',
      'Taylor & Francis / AIP / Springer / Elsevier proceedings',
      'Paper Presentation cum Publication Certificate',
      'Blended presentation mode (In-Person or Virtual)',
      'Complete conference kit & access to all keynote tracks',
      'Invitation to executive academic networking sessions'
    ],
  },
  {
    id: 'industry',
    title: 'Industry & Corporate',
    subtitle: 'Industrial R&D & Global Tier',
    eligibility: 'Industry professionals, corporate researchers & overseas delegates',
    indianFee: '₹ 10,000 / ₹ 12,500',
    internationalFee: '$ 150 USD',
    badge: 'Industry & International',
    highlight: false,
    features: [
      'Full Scopus-indexed proceedings publication',
      'Industry delegation badge & networking privileges',
      'Paper Presentation cum Publication Certificate',
      'Blended presentation mode (In-Person or Virtual)',
      'Conference kit, souvenir volume & track entry',
      'Direct interaction with university leadership & R&D'
    ],
  },
];

const COMPARISON_MATRIX = [
  { feature: 'Conference Technical Sessions Access (All 21 Topics)', base: true, scholar: true, faculty: true, industry: true },
  { feature: 'Blended Presentation (Online or In-Person)', base: true, scholar: true, faculty: true, industry: true },
  { feature: 'Official Certificate of Presentation / Participation', base: true, scholar: true, faculty: true, industry: true },
  { feature: 'Official Conference Kit & Delegate Materials', base: true, scholar: true, faculty: true, industry: true },
  { feature: 'Scopus Indexed Proceedings Publication', base: false, scholar: true, faculty: true, industry: true },
  { feature: 'Publisher Submission (Taylor & Francis / AIP / Springer / Elsevier)', base: false, scholar: true, faculty: true, industry: true },
  { feature: 'Author Presentation cum Publication Certificate', base: false, scholar: true, faculty: true, industry: true },
  { feature: 'Post-Conference Indexed Digital Repository Access', base: false, scholar: true, faculty: true, industry: true },
];

const DEFAULT_NOTES = [
  'Faculty members, research scholars, postgraduate students from AICTE-approved institutions, and industry professionals are eligible to apply.',
  'Conference Registration Fee: ₹ 3,500. Publication Fee: Students/Scholars ₹ 6,500, Academicians ₹ 7,500, Industry Professionals ₹ 10,000, International $150 USD.',
  'The conference proceedings shall be published in Taylor & Francis / American Institute of Physics (AIP) / Springer group / Elsevier / EasyChair subject to approval and confirmation.',
  'All accepted papers will be compiled into the official conference proceedings and will have Scopus indexation.',
  'Mode of Conference: Blended (Online & In-Person).',
  'All participants will be issued a Participation Certificate. Paper presenters will receive a Paper Presentation cum Publication Certificate.',
];

const getValue = (value, fallback) =>
  value === undefined || value === null || value === '' ? fallback : value;

function Modal({ title, children, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-orange-100 bg-white p-5 shadow-2xl sm:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-orange-100 text-slate-500 transition-colors hover:border-[#F97316] hover:bg-[#FFF7ED] hover:text-[#F97316]"
        >
          <X className="h-4 w-4" />
        </button>

        <h2 className="pr-10 text-xl font-bold text-[#17213a]">
          {title}
        </h2>

        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export const RegistrationPage = () => {
  const [currencyMode, setCurrencyMode] = useState('INR'); // 'INR' or 'USD'
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  const data = conferenceData || {};

  const registrationFormUrl =
    data.registrationFormUrl ||
    data.links?.registration ||
    data.registrationUrl ||
    '';

  const bankDetails = {
    accountName: getValue(
      data.bankDetails?.accountName,
      DEFAULT_BANK_DETAILS.accountName
    ),
    bankName: getValue(
      data.bankDetails?.bankName,
      DEFAULT_BANK_DETAILS.bankName
    ),
    accountNumber: getValue(
      data.bankDetails?.accountNumber,
      DEFAULT_BANK_DETAILS.accountNumber
    ),
    ifsc: getValue(
      data.bankDetails?.ifsc,
      DEFAULT_BANK_DETAILS.ifsc
    ),
    branch: getValue(
      data.bankDetails?.branch,
      DEFAULT_BANK_DETAILS.branch
    ),
    upiId: getValue(
      data.bankDetails?.upiId,
      DEFAULT_BANK_DETAILS.upiId
    ),
    qrCodeUrl: getValue(
      data.bankDetails?.qrCodeUrl,
      DEFAULT_BANK_DETAILS.qrCodeUrl
    ),
  };

  const notes = data.registrationNotes && data.registrationNotes.length
    ? data.registrationNotes
    : DEFAULT_NOTES;

  const openRegistrationForm = () => {
    if (registrationFormUrl) {
      window.open(
        registrationFormUrl,
        '_blank',
        'noopener,noreferrer'
      );
      return;
    }

    setIsRegistrationFormOpen(true);
  };

  const copyAccount = async () => {
    const details = [
      `Beneficiary Name: ${bankDetails.accountName}`,
      `Bank: ${bankDetails.bankName}`,
      bankDetails.branch ? `Branch: ${bankDetails.branch}` : '',
      bankDetails.ifsc ? `IFSC Code: ${bankDetails.ifsc}` : '',
      bankDetails.accountNumber ? `Account Number: ${bankDetails.accountNumber}` : '',
      bankDetails.upiId ? `UPI ID: ${bankDetails.upiId}` : '',
    ].filter(Boolean).join('\n');

    try {
      await navigator.clipboard.writeText(details);
      setCopyStatus('Bank details copied to clipboard!');
    } catch {
      setCopyStatus('Unable to copy details');
    }

    window.setTimeout(() => setCopyStatus(''), 3000);
  };

  const copyText = async (text, label = 'Copied') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus(`${label} copied to clipboard!`);
    } catch {
      setCopyStatus('Unable to copy');
    }

    window.setTimeout(() => setCopyStatus(''), 3000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#17213a]">
      {/* =========================================================
          HERO SECTION: PRESTIGIOUS INTERNATIONAL HEADER (COMPACT)
         ========================================================= */}
      <section className="relative border-b border-orange-100/70 bg-gradient-to-b from-[#FFF7ED]/50 via-white to-white pt-5 pb-4 sm:pt-6 sm:pb-5">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            {/* Live Registration Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/90 bg-[#FFF7ED] px-3.5 py-1 text-xs font-semibold text-[#F97316] shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16A34A]"></span>
              </span>
              <span>ICRAIIQ2IT 2027 • Official Author &amp; Delegate Registration Portal</span>
            </div>

            {/* Conference Title */}
            <h1 className="mx-auto mt-2 text-2xl font-black tracking-tight text-[#17213a] sm:text-3xl lg:text-[38px] lg:leading-[1.18]">
              Conference Registration &amp; <span className="text-[#F97316]">Fee Guidelines</span>
            </h1>

            {/* Accent Divider */}
            <div className="mx-auto mt-2 h-1 w-14 rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C]" />

            {/* Subtitle / Policy Statement */}
            <p className="mx-auto mt-2 max-w-3xl text-xs sm:text-sm leading-relaxed text-slate-600">
              To confirm oral or poster presentation and secure paper inclusion in the official <strong className="text-[#17213a]">Scopus-indexed proceedings</strong>, at least one author of every accepted paper must complete registration by remitting the required fees and submitting the official form. Co-authors and research scholars may also register as conference delegates.
            </p>

            {/* Action Bar + Currency Toggle Bar */}
            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={openRegistrationForm}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#F97316] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-xs transition hover:bg-[#ea580c]"
              >
                <span>Fill Registration Form</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('bank-remittance')}
                className="inline-flex items-center gap-1.5 rounded-xl border border-orange-200 bg-orange-50/70 px-4 py-2 text-xs font-bold text-[#F97316] transition hover:bg-[#F97316] hover:text-white"
              >
                <CreditCard className="h-3.5 w-3.5" />
                <span>Bank Details &amp; QR</span>
              </button>

              <a
                href="/bank-qr.png"
                download="NRIIT_Conference_BOB_Payment_QR.png"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 transition hover:border-[#F97316] hover:text-[#F97316]"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download Bank QR</span>
              </a>

              {/* Currency Selector Pill */}
              <div className="inline-flex items-center rounded-lg border border-orange-200 bg-white p-0.5 shadow-xs ml-0 sm:ml-1">
                <button
                  type="button"
                  onClick={() => setCurrencyMode('INR')}
                  className={`rounded-md px-2.5 py-1 text-xs font-bold transition-all ${
                    currencyMode === 'INR'
                      ? 'bg-[#17213a] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#17213a]'
                  }`}
                >
                  ₹ Indian (INR)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrencyMode('USD')}
                  className={`rounded-md px-2.5 py-1 text-xs font-bold transition-all ${
                    currencyMode === 'USD'
                      ? 'bg-[#F97316] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#17213a]'
                  }`}
                >
                  $ International (USD)
                </button>
              </div>
            </div>

            {/* Highlights Trust Strip */}
            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 pt-3 border-t border-orange-100/70 text-xs font-medium text-slate-700">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-slate-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#F97316]" /> Blended Mode (Online &amp; In-Person)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-slate-800">
                <Award className="h-3.5 w-3.5 text-[#F97316]" /> Scopus-Indexed Proceedings
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-slate-800">
                <ShieldCheck className="h-3.5 w-3.5 text-[#F97316]" /> Dual Author Certificates
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-slate-800">
                <Clock className="h-3.5 w-3.5 text-[#F97316]" /> Author Reg. Due: 10th Mar 2027
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
          TWO-STEP AUTHOR REGISTRATION WORKFLOW (COMPACT)
         ========================================================= */}
      <section className="bg-white py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-3.5 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316]">
              Simple Author Procedure
            </span>
            <h2 className="mt-0.5 text-xl font-black tracking-tight text-[#17213a] sm:text-2xl">
              Two-Step Registration Journey
            </h2>
            <div className="mx-auto mt-1.5 h-0.5 w-10 rounded-full bg-[#F97316]" />
            <p className="mx-auto mt-1.5 max-w-2xl text-xs text-slate-600">
              Follow these two sequential steps to complete your registration and confirm presentation and Scopus publication.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* STEP 1 CARD */}
            <div className="relative flex flex-col justify-between rounded-xl border-2 border-orange-200/90 bg-[#FFFBF8] p-4 sm:p-5 shadow-xs transition hover:border-[#F97316]">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#F97316] text-[11px] font-black text-white">
                      01
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                      Step One — Payment
                    </span>
                  </div>
                  <span className="rounded-md bg-orange-100 px-2 py-0.5 text-[10px] font-bold text-[#EA580C]">
                    Mandatory First
                  </span>
                </div>

                <h3 className="mt-2.5 text-lg font-bold text-[#17213a]">
                  Remit Registration &amp; Publication Fee
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Transfer fee via <strong>Bank of Baroda</strong> NEFT/RTGS/IMPS or scan the verified <strong>UPI QR code</strong>. Note down the transaction reference number (UTR) and save payment receipt screenshot.
                </p>

                {/* Account Mini-Console */}
                <div className="mt-2.5 rounded-lg border border-orange-100 bg-white p-3 shadow-xs">
                  <div className="flex items-start justify-between gap-2.5">
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Official Beneficiary
                      </span>
                      <p className="mt-0.5 text-xs sm:text-sm font-bold text-[#17213a] truncate">
                        {bankDetails.accountName}
                      </p>
                      <div className="mt-1 flex flex-wrap items-center gap-2.5 text-xs text-slate-600">
                        <span>Bank: <strong className="text-slate-800">{bankDetails.bankName}</strong></span>
                        <span>IFSC: <strong className="font-mono text-[#F97316]">{bankDetails.ifsc}</strong></span>
                      </div>
                    </div>
                    <img
                      src="/bank-qr.png"
                      alt="Bank QR Preview"
                      className="h-12 w-12 shrink-0 rounded-lg border border-orange-200 object-contain p-1"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3.5 flex flex-wrap items-center gap-2.5 pt-3 border-t border-orange-100">
                <button
                  type="button"
                  onClick={() => scrollToSection('bank-remittance')}
                  className="inline-flex items-center gap-1 rounded-lg bg-[#17213a] px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-[#1d315f]"
                >
                  <CreditCard className="h-3 w-3 text-[#F97316]" />
                  <span>View Bank Details</span>
                </button>
                <button
                  type="button"
                  onClick={copyAccount}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-[#F97316] hover:text-[#F97316]"
                >
                  <Copy className="h-3 w-3" />
                  <span>Copy Bank Info</span>
                </button>
                <span className="text-[11px] text-slate-500">
                  Retain UTR / Screenshot
                </span>
              </div>
            </div>

            {/* STEP 2 CARD */}
            <div className="relative flex flex-col justify-between rounded-xl border-2 border-orange-200/90 bg-[#FFFBF8] p-4 sm:p-5 shadow-xs transition hover:border-[#F97316]">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#17213a] text-[11px] font-black text-white">
                      02
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#17213a]">
                      Step Two — Form Submission
                    </span>
                  </div>
                  <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                    Final Confirmation
                  </span>
                </div>

                <h3 className="mt-2.5 text-lg font-bold text-[#17213a]">
                  Submit Official Registration Form
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Fill out the official Google registration form with your manuscript title, Microsoft CMT Paper ID, author affiliations, and upload your payment proof.
                </p>

                {/* Form Checklist */}
                <div className="mt-2.5 rounded-lg border border-orange-100 bg-white p-3 shadow-xs">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Required Details for Registration Form
                  </p>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#F97316] shrink-0" />
                      <span>Microsoft CMT Paper ID &amp; Final Paper Title</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#F97316] shrink-0" />
                      <span>Presenting Author Name &amp; Institutional Affiliation</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#F97316] shrink-0" />
                      <span>Bank UTR / Reference Number &amp; Receipt Proof</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-3.5 flex flex-wrap items-center gap-2.5 pt-3 border-t border-orange-100">
                <button
                  type="button"
                  onClick={openRegistrationForm}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#F97316] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition hover:bg-[#ea580c]"
                >
                  <span>Open Registration Form</span>
                  <ExternalLink className="h-3 w-3" />
                </button>
                <span className="text-[11px] text-slate-500">
                  Instant Google Form confirmation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TIERED REGISTRATION CARDS (COMPACT TARIFF STRUCTURE)
         ========================================================= */}
      <section id="fee-schedule" className="border-t border-orange-100/70 bg-[#FFFBF8] py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-3.5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316]">
                Tariff Structure
              </span>
              <h2 className="mt-0.5 text-xl font-black tracking-tight text-[#17213a] sm:text-2xl">
                Registration Categories &amp; Fee Tiers
              </h2>
              <div className="mt-1.5 h-0.5 w-10 rounded-full bg-[#F97316]" />
            </div>

            <p className="text-xs text-slate-600 max-w-md">
              Showing fees for <strong className="text-[#17213a]">{currencyMode === 'INR' ? 'Indian Delegates (INR ₹)' : 'International Delegates (USD $)'}</strong>. Use currency toggle above to switch.
            </p>
          </div>

          {/* 4 Category Cards */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {REGISTRATION_TIERS.map((tier) => {
              const displayFee = currencyMode === 'INR' ? tier.indianFee : tier.internationalFee;
              return (
                <div
                  key={tier.id}
                  className={`relative flex flex-col justify-between rounded-xl bg-white p-4 sm:p-4.5 transition-all duration-200 ${
                    tier.highlight
                      ? 'border-2 border-[#F97316] shadow-sm'
                      : 'border border-orange-200/90 shadow-xs hover:border-[#F97316]/60'
                  }`}
                >
                  {/* Top Badge */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`rounded-md px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${
                          tier.highlight
                            ? 'bg-[#F97316] text-white'
                            : 'bg-orange-50 text-[#F97316] border border-orange-200'
                        }`}
                      >
                        {tier.badge}
                      </span>
                    </div>

                    <h3 className="mt-2 text-base font-bold text-[#17213a]">
                      {tier.title}
                    </h3>
                    <p className="text-[11px] font-medium text-slate-500">
                      {tier.subtitle}
                    </p>

                    {/* Price Header */}
                    <div className="mt-2.5 rounded-lg bg-[#FFFBF8] border border-orange-100 p-2 text-center">
                      <div className="font-mono text-xl font-black text-[#17213a]">
                        <span className="text-[#F97316]">{displayFee}</span>
                      </div>
                      <span className="text-[10px] text-slate-500">
                        {currencyMode === 'INR' ? 'Per paper / delegate' : 'USD ($) per paper'}
                      </span>
                    </div>

                    <p className="mt-2 text-[10px] leading-relaxed text-slate-600 italic">
                      {tier.eligibility}
                    </p>

                    {/* Feature Bullets */}
                    <div className="mt-2.5 pt-2.5 border-t border-orange-100/70">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">
                        Key Inclusions
                      </span>
                      <ul className="mt-1.5 space-y-1 text-xs text-slate-600">
                        {tier.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <Check className="h-3 w-3 shrink-0 text-[#F97316] mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-3.5 pt-2.5 border-t border-orange-100">
                    <button
                      type="button"
                      onClick={openRegistrationForm}
                      className={`w-full rounded-lg py-1.5 text-xs font-bold uppercase tracking-wider transition ${
                        tier.highlight
                          ? 'bg-[#F97316] text-white hover:bg-[#ea580c] shadow-xs'
                          : 'border border-slate-300 bg-white text-slate-700 hover:border-[#F97316] hover:text-[#F97316]'
                      }`}
                    >
                      Select Tier
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =========================================================
              ENTITLEMENTS & INCLUSIONS MATRIX (COMPACT)
             ========================================================= */}
          <div className="mt-5 overflow-hidden rounded-xl border border-orange-200 bg-white shadow-xs">
            <div className="border-b border-orange-200 bg-[#FFF7ED] px-4 py-2.5 sm:flex sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#17213a] uppercase tracking-wider">
                  Entitlement &amp; Benefit Comparison
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-[#F97316]">
                Scopus Proceedings Included in Tiers 2, 3, &amp; 4
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-orange-100 bg-[#FFFBF8] text-slate-700">
                    <th className="py-2.5 px-4 font-bold">Conference Deliverable</th>
                    <th className="py-2.5 px-3 text-center font-bold">Base Attendee</th>
                    <th className="py-2.5 px-3 text-center font-bold text-[#F97316]">Ph.D / Students</th>
                    <th className="py-2.5 px-3 text-center font-bold">Faculty</th>
                    <th className="py-2.5 px-3 text-center font-bold">Industry / Global</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-100/70">
                  {COMPARISON_MATRIX.map((row, idx) => (
                    <tr key={idx} className="hover:bg-orange-50/30 transition">
                      <td className="py-2 px-4 font-medium text-[#17213a]">
                        {row.feature}
                      </td>
                      <td className="py-2 px-3 text-center">
                        {row.base ? (
                          <Check className="mx-auto h-3.5 w-3.5 text-emerald-600" />
                        ) : (
                          <X className="mx-auto h-3.5 w-3.5 text-slate-300" />
                        )}
                      </td>
                      <td className="py-2 px-3 text-center bg-orange-50/20">
                        {row.scholar ? (
                          <Check className="mx-auto h-3.5 w-3.5 text-[#F97316]" />
                        ) : (
                          <X className="mx-auto h-3.5 w-3.5 text-slate-300" />
                        )}
                      </td>
                      <td className="py-2 px-3 text-center">
                        {row.faculty ? (
                          <Check className="mx-auto h-3.5 w-3.5 text-emerald-600" />
                        ) : (
                          <X className="mx-auto h-3.5 w-3.5 text-slate-300" />
                        )}
                      </td>
                      <td className="py-2 px-3 text-center">
                        {row.industry ? (
                          <Check className="mx-auto h-3.5 w-3.5 text-emerald-600" />
                        ) : (
                          <X className="mx-auto h-3.5 w-3.5 text-slate-300" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-orange-100 bg-[#FFFBF8] p-3 text-xs text-slate-600 sm:flex sm:items-center sm:justify-between">
              <span className="flex items-center gap-1.5 text-[11px]">
                <Info className="h-3.5 w-3.5 text-[#F97316] shrink-0" />
                All accepted and presented papers receive formal Scopus Proceedings submission.
              </span>
              <button
                type="button"
                onClick={() => scrollToSection('bank-remittance')}
                className="font-bold text-[#F97316] hover:underline shrink-0 text-[11px]"
              >
                Proceed to Payment Console →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OFFICIAL BANK ACCOUNT & UPI PAYMENT CONSOLE (COMPACT)
         ========================================================= */}
      <section id="bank-remittance" className="bg-white py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-3.5 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316]">
              Verified Banking Remittance
            </span>
            <h2 className="mt-0.5 text-xl font-black tracking-tight text-[#17213a] sm:text-2xl">
              Bank Particulars &amp; UPI Station
            </h2>
            <div className="mx-auto mt-1.5 h-0.5 w-10 rounded-full bg-[#F97316]" />
            <p className="mx-auto mt-1.5 max-w-2xl text-xs text-slate-600">
              Remit fees directly to the University Bank of Baroda account or scan the official UPI QR code.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-12">
            {/* LEFT: BANK DETAILS CONSOLE (7 Cols) */}
            <div className="rounded-xl border-2 border-orange-200/90 bg-[#FFFBF8] p-4 sm:p-5 shadow-xs lg:col-span-7">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F97316] text-white shadow-xs">
                  <Building className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#17213a]">
                    Official Bank Account Console
                  </h3>
                  <p className="text-[11px] text-slate-600">
                    Bank of Baroda • Dr RVR NRIIT Conference Remittance
                  </p>
                </div>
              </div>

              {/* Data Grid with 1-Click Copy */}
              <div className="mt-3 space-y-2">
                {/* Beneficiary */}
                <div className="rounded-lg border border-orange-100 bg-white p-2.5 shadow-xs">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Beneficiary / Account Name
                      </span>
                      <p className="mt-0.5 text-xs sm:text-sm font-bold text-[#17213a] break-words">
                        {bankDetails.accountName}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyText(bankDetails.accountName, 'Beneficiary Name')}
                      className="rounded-md border border-slate-200 p-1 text-slate-600 transition hover:border-[#F97316] hover:bg-orange-50 hover:text-[#F97316]"
                      title="Copy Beneficiary Name"
                    >
                      <Copy className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                {/* Bank Name & Branch */}
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div className="rounded-lg border border-orange-100 bg-white p-2.5 shadow-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Bank Name
                    </span>
                    <p className="mt-0.5 text-xs sm:text-sm font-bold text-[#17213a]">
                      {bankDetails.bankName}
                    </p>
                  </div>

                  <div className="rounded-lg border border-orange-100 bg-white p-2.5 shadow-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Branch
                    </span>
                    <p className="mt-0.5 text-xs sm:text-sm font-bold text-[#17213a]">
                      {bankDetails.branch}
                    </p>
                  </div>
                </div>

                {/* IFSC & UPI ID */}
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div className="rounded-lg border border-orange-100 bg-white p-2.5 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        IFSC Code (5th char zero)
                      </span>
                      <button
                        type="button"
                        onClick={() => copyText(bankDetails.ifsc, 'IFSC Code')}
                        className="rounded-md border border-slate-200 p-0.5 text-slate-600 transition hover:border-[#F97316] hover:text-[#F97316]"
                        title="Copy IFSC"
                      >
                        <Copy className="h-2.5 w-2.5" />
                      </button>
                    </div>
                    <p className="mt-0.5 font-mono text-sm font-extrabold text-[#F97316]">
                      {bankDetails.ifsc}
                    </p>
                  </div>

                  <div className="rounded-lg border border-orange-100 bg-white p-2.5 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        UPI ID (VPA)
                      </span>
                      <button
                        type="button"
                        onClick={() => copyText(bankDetails.upiId, 'UPI ID')}
                        className="rounded-md border border-slate-200 p-0.5 text-slate-600 transition hover:border-[#F97316] hover:text-[#F97316]"
                        title="Copy UPI ID"
                      >
                        <Copy className="h-2.5 w-2.5" />
                      </button>
                    </div>
                    <p className="mt-0.5 font-mono text-xs font-bold text-[#17213a] truncate">
                      {bankDetails.upiId}
                    </p>
                  </div>
                </div>

                {/* Account Number Note */}
                <div className="rounded-lg border border-orange-100 bg-white p-2.5 shadow-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Account Number
                  </span>
                  <p className="mt-0.5 text-[11px] text-slate-700">
                    {bankDetails.accountNumber}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-3.5 flex flex-wrap items-center gap-2 pt-3 border-t border-orange-100">
                <button
                  type="button"
                  onClick={copyAccount}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#F97316] px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition hover:bg-[#ea580c]"
                >
                  <Copy className="h-3 w-3" />
                  <span>Copy Complete Bank Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsBankModalOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200 bg-white px-3 py-2 text-xs font-bold text-[#F97316] transition hover:bg-orange-50"
                >
                  <span>View Details Modal</span>
                </button>
              </div>
            </div>

            {/* RIGHT: UPI PAYMENT QR TERMINAL (5 Cols) */}
            <div className="flex flex-col items-center justify-between rounded-xl border-2 border-orange-200/90 bg-[#FFFBF8] p-4 sm:p-5 text-center shadow-xs lg:col-span-5">
              <div className="w-full">
                <div className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2.5 py-0.5 text-[11px] font-bold text-[#F97316]">
                  <QrCode className="h-3 w-3" />
                  <span>Official UPI Payment QR</span>
                </div>

                <h3 className="mt-2 text-base font-bold text-[#17213a]">
                  Scan via Any UPI App
                </h3>
                <p className="text-[11px] text-slate-600">
                  Google Pay • PhonePe • Paytm • BHIM • Cred
                </p>

                {/* QR Code Presentation Box */}
                <div className="mx-auto mt-2.5 inline-block rounded-xl border border-orange-200 bg-white p-2.5 shadow-xs">
                  <img
                    src="/bank-qr.png"
                    alt="Bank of Baroda UPI Payment QR Code"
                    className="h-36 w-36 object-contain"
                  />
                  <div className="mt-1 border-t border-slate-100 pt-1 text-[10px] font-bold tracking-wider uppercase text-[#F97316]">
                    Bank of Baroda • UPI Verified
                  </div>
                </div>
              </div>

              <div className="mt-3.5 w-full pt-3 border-t border-orange-100">
                <a
                  href="/bank-qr.png"
                  download="NRIIT_Conference_BOB_Payment_QR.png"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-orange-200 bg-white px-3 py-2 text-xs font-bold text-[#EA580C] shadow-xs transition hover:bg-orange-50 hover:border-[#F97316]"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Payment QR</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          POLICIES, SCOPUS PUBLICATION & ETHICAL STANDARDS (COMPACT)
         ========================================================= */}
      <section className="border-t border-orange-100/70 bg-[#FFFBF8] py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-3.5 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316]">
              Academic Integrity &amp; Terms
            </span>
            <h2 className="mt-0.5 text-xl font-black tracking-tight text-[#17213a] sm:text-2xl">
              Registration Policies &amp; Publication Standards
            </h2>
            <div className="mx-auto mt-1.5 h-0.5 w-10 rounded-full bg-[#F97316]" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Policy Card 1 */}
            <div className="rounded-xl border border-orange-200/90 bg-white p-4 shadow-xs">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-[#F97316]">
                <BookOpen className="h-4 w-4" />
              </div>
              <h3 className="mt-2 text-sm font-bold text-[#17213a]">
                Scopus Proceedings Publication
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Proceedings published with <strong>Taylor &amp; Francis / AIP / Springer / Elsevier</strong> subject to approval. Accepted, presented papers receive Scopus indexation.
              </p>
            </div>

            {/* Policy Card 2 */}
            <div className="rounded-xl border border-orange-200/90 bg-white p-4 shadow-xs">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-[#F97316]">
                <AlertCircle className="h-4 w-4" />
              </div>
              <h3 className="mt-2 text-sm font-bold text-[#17213a]">
                Mandatory Author Presentation
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                At least one author must register and present the paper (in-person or online). Unpresented papers will not be forwarded to proceedings publisher.
              </p>
            </div>

            {/* Policy Card 3 */}
            <div className="rounded-xl border border-orange-200/90 bg-white p-4 shadow-xs">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-[#F97316]">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <h3 className="mt-2 text-sm font-bold text-[#17213a]">
                Submission Freeze &amp; Certificates
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                No changes to paper title, abstract, or author list accepted after camera-ready upload. Presenters receive formal Paper Presentation Certificates.
              </p>
            </div>
          </div>

          {/* Registration Guidelines Accordion / Box */}
          <div className="mt-3.5 rounded-xl border border-orange-200 bg-white p-4 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#17213a]">
              Key Registration Directives
            </h3>
            <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 text-xs leading-relaxed text-slate-600">
              {notes.map((note, index) => (
                <li key={index} className="flex items-start gap-1.5">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F97316]" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================
          REGISTRATION SECRETARIAT & HELPDESK (COMPACT)
         ========================================================= */}
      <section id="contact-us" className="bg-white py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-3.5 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316]">
              Registration Secretariat
            </span>
            <h2 className="mt-0.5 text-xl font-black tracking-tight text-[#17213a] sm:text-2xl">
              Registration Assistance &amp; Inquiries
            </h2>
            <div className="mx-auto mt-1.5 h-0.5 w-10 rounded-full bg-[#F97316]" />
            <p className="mx-auto mt-1 max-w-2xl text-xs text-slate-600">
              For any queries regarding fee remittance, invoicing, author registration, or presentation scheduling:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Contact Card 1 */}
            <div className="flex flex-col justify-between rounded-xl border-2 border-orange-200/90 bg-[#FFFBF8] p-4 sm:p-5 shadow-xs transition hover:border-[#F97316]">
              <div>
                <span className="inline-block rounded-md bg-[#FFF7ED] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#F97316] border border-orange-200 mb-2">
                  Research &amp; Development
                </span>
                <h3 className="text-base font-bold text-[#17213a]">
                  Dr. K. V. Sambasiva Rao
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-slate-600">
                  Professor &amp; Dean, R &amp; D, Dr RVR NRIIT (DTBU)
                </p>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Oversees conference academic integrity, Scopus publisher relations, and author registration confirmation.
                </p>
              </div>

              <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-orange-100">
                <a
                  href="mailto:icraiq2it27@nriit.edu.in"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F97316] hover:text-[#ea580c] hover:underline"
                >
                  <Mail className="h-3 w-3" />
                  <span>icraiq2it27@nriit.edu.in</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyText('icraiq2it27@nriit.edu.in', 'Secretariat Email')}
                  className="rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 transition hover:border-[#F97316] hover:text-[#F97316]"
                >
                  Copy Email
                </button>
              </div>
            </div>

            {/* Contact Card 2 */}
            <div className="flex flex-col justify-between rounded-xl border-2 border-orange-200/90 bg-[#FFFBF8] p-4 sm:p-5 shadow-xs transition hover:border-[#F97316]">
              <div>
                <span className="inline-block rounded-md bg-[#FFF7ED] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#F97316] border border-orange-200 mb-2">
                  Convener &amp; Dean
                </span>
                <h3 className="text-base font-bold text-[#17213a]">
                  Dr. D. Sunitha
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-slate-600">
                  HOD &amp; Dean : School of Computer Studies, Dr RVR NRIIT (DTBU)
                </p>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Conference convener coordinating technical sessions, author presentations, and blended participation logistics.
                </p>
              </div>

              <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-orange-100">
                <a
                  href="mailto:icraiq2it27@nriit.edu.in"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F97316] hover:text-[#ea580c] hover:underline"
                >
                  <Mail className="h-3 w-3" />
                  <span>icraiq2it27@nriit.edu.in</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyText('icraiq2it27@nriit.edu.in', 'Convener Email')}
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
          BANK DETAILS FULL MODAL
         ========================================================= */}
      {isBankModalOpen && (
        <Modal
          title="Official Bank Particulars & UPI QR"
          onClose={() => setIsBankModalOpen(false)}
        >
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_150px] gap-4 items-start">
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <div>
                <span className="font-bold text-[#17213a]">Beneficiary / Account Name:</span>
                <div className="font-semibold text-[#111827] mt-0.5">{bankDetails.accountName}</div>
              </div>

              <div>
                <span className="font-bold text-[#17213a]">Bank:</span>
                <div className="font-bold text-[#111827] mt-0.5">{bankDetails.bankName}</div>
              </div>

              {bankDetails.branch && (
                <div>
                  <span className="font-bold text-[#17213a]">Branch:</span>
                  <div className="mt-0.5">{bankDetails.branch}</div>
                </div>
              )}

              {bankDetails.ifsc && (
                <div>
                  <span className="font-bold text-[#17213a]">IFSC Code:</span>
                  <div className="font-mono font-bold text-[#F97316] text-base mt-0.5">{bankDetails.ifsc}</div>
                </div>
              )}

              {bankDetails.upiId && (
                <div>
                  <span className="font-bold text-[#17213a]">UPI ID (VPA):</span>
                  <div className="font-mono font-semibold text-[#111827] mt-0.5">{bankDetails.upiId}</div>
                </div>
              )}

              {bankDetails.accountNumber && (
                <div>
                  <span className="font-bold text-[#17213a]">Account Number:</span>
                  <div className="mt-0.5 font-mono text-slate-800">{bankDetails.accountNumber}</div>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center justify-center p-2.5 bg-[#FFFBF8] border border-orange-200 rounded-xl text-center">
              <img
                src="/bank-qr.png"
                alt="Bank of Baroda UPI Payment QR Code"
                className="w-28 h-28 object-contain"
              />
              <span className="mt-1.5 text-xs font-bold text-[#EA580C]">BOB / UPI QR</span>
              <a
                href="/bank-qr.png"
                download="NRIIT_Conference_BOB_Payment_QR.png"
                className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-[#F97316] underline"
              >
                <Download className="h-3 w-3" />
                Download
              </a>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-orange-100">
            <button
              type="button"
              onClick={copyAccount}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#F97316] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#ea580c]"
            >
              <Copy className="h-3 w-3" />
              <span>Copy Bank Details</span>
            </button>

            <button
              type="button"
              onClick={() => setIsBankModalOpen(false)}
              className="rounded-lg border border-slate-200 px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              Close
            </button>
          </div>
        </Modal>
      )}

      {/* =========================================================
          REGISTRATION FORM FALLBACK MODAL
         ========================================================= */}
      {isRegistrationFormOpen && !registrationFormUrl && (
        <Modal
          title="Conference Registration Form"
          onClose={() => setIsRegistrationFormOpen(false)}
        >
          <div className="rounded-xl border border-orange-100 bg-orange-50/50 p-4">
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              The official Google Registration Form will be provided upon paper acceptance notifications. You may remit the fee and retain your payment reference / UTR number in advance.
            </p>
            <p className="mt-2 text-xs text-slate-600">
              For direct assistance or urgent registration requests, contact the Secretariat at{' '}
              <a href="mailto:icraiq2it27@nriit.edu.in" className="font-bold text-[#F97316] underline">
                icraiq2it27@nriit.edu.in
              </a>.
            </p>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={() => setIsRegistrationFormOpen(false)}
              className="rounded-lg bg-[#F97316] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#ea580c]"
            >
              Understood
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default RegistrationPage;
