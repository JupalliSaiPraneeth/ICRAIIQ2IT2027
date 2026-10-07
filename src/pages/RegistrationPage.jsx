import React, { useState } from 'react';
import { conferenceData } from '../data/conferenceData';

const DEFAULT_BANK_DETAILS = {
  accountName: 'The Principal, Dr RVR NRI Institute of Technology (Deemed to be University)',
  bankName: 'BANK OF BARODA',
  accountNumber: 'Available upon invoice / submission request',
  ifsc: 'BARB0AGIRIP',
  branch: 'Agiripalli / Pothavarappadu',
  upiId: 'icraiq2it27@barodampay',
};

const FEE_SCHEDULE_DATA = [
  {
    category: 'Students / Research Scholars',
    indiaAuthor: '1000',
    indiaListener: '1000',
    otherAuthor: '$75',
    otherListener: '$75',
  },
  {
    category: 'Academician',
    indiaAuthor: '1500',
    indiaListener: '1000',
    otherAuthor: '$75',
    otherListener: '$75',
  },
  {
    category: 'Industry Professional',
    indiaAuthor: '3000',
    indiaListener: '2500',
    otherAuthor: '$75',
    otherListener: '$75',
    isHighlight: true,
  },
  {
    category: 'Publication Fee (Scopus Indexed)',
    indiaAuthor: '10000',
    indiaListener: '–',
    otherAuthor: '$100',
    otherListener: '–',
  },
];

const DEFAULT_NOTES = [
  'Faculty members, research scholars, postgraduate students from AICTE-approved institutions, and industry professionals are eligible to register.',
  'At least one author of every accepted paper must register by 10th Mar 2027 to ensure paper inclusion in the proceedings.',
  'Proceedings shall be published with Taylor & Francis / AIP / Springer group / Elsevier subject to approval.',
  'All participants will be issued a certificate. Presenters receive a Paper Presentation cum Publication Certificate.',
];

const getValue = (value, fallback) =>
  value === undefined || value === null || value === '' ? fallback : value;

export const RegistrationPage = () => {
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  const data = conferenceData || {};

  const registrationFormUrl =
    data.registrationFormUrl ||
    data.links?.registration ||
    data.registrationUrl ||
    '';

  const bankDetails = {
    accountName: getValue(data.bankDetails?.accountName, DEFAULT_BANK_DETAILS.accountName),
    bankName: getValue(data.bankDetails?.bankName, DEFAULT_BANK_DETAILS.bankName),
    accountNumber: getValue(data.bankDetails?.accountNumber, DEFAULT_BANK_DETAILS.accountNumber),
    ifsc: getValue(data.bankDetails?.ifsc, DEFAULT_BANK_DETAILS.ifsc),
    branch: getValue(data.bankDetails?.branch, DEFAULT_BANK_DETAILS.branch),
    upiId: getValue(data.bankDetails?.upiId, DEFAULT_BANK_DETAILS.upiId),
  };

  const notes = data.registrationNotes && data.registrationNotes.length
    ? data.registrationNotes
    : DEFAULT_NOTES;

  const openRegistrationForm = () => {
    if (registrationFormUrl) {
      window.open(registrationFormUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setIsRegistrationFormOpen(true);
  };

  const copyText = async (text, label = 'Copied') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus(`${label} copied to clipboard!`);
    } catch {
      setCopyStatus('Unable to copy');
    }
    window.setTimeout(() => setCopyStatus(''), 2500);
  };

  const copyAllBankDetails = async () => {
    const details = [
      `Beneficiary Name: ${bankDetails.accountName}`,
      `Bank: ${bankDetails.bankName}`,
      `Branch: ${bankDetails.branch}`,
      `IFSC Code: ${bankDetails.ifsc}`,
      `Account Number: ${bankDetails.accountNumber}`,
      `UPI ID: ${bankDetails.upiId}`,
    ].join('\n');
    copyText(details, 'Complete bank details');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-[#17213a] antialiased pb-6">

      {/* ── HEADER ── */}
      <section className="bg-white border-b border-slate-200 py-4 sm:py-5">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#17213a]">
            Conference Registration &amp; <span className="text-[#F97316]">Fee Guidelines</span>
          </h1>
          <div className="mx-auto mt-1.5 h-1 w-10 bg-[#F97316] rounded-full" />
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-slate-500">
            Author and delegate registration portal for accepted manuscripts, presentations, and proceedings.
          </p>

          {/* Quick Actions */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={openRegistrationForm}
              className="inline-flex items-center bg-[#F97316] hover:bg-[#ea580c] text-white px-3.5 py-1.5 text-xs font-bold rounded transition-colors"
            >
              Fill Registration Form &rarr;
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('bank-remittance')}
              className="inline-flex items-center border border-[#F97316] text-[#F97316] hover:bg-orange-50 px-3.5 py-1.5 text-xs font-bold rounded transition-colors"
            >
              Bank Details
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('fee-schedule')}
              className="inline-flex items-center border border-slate-300 text-slate-600 hover:border-[#F97316] hover:text-[#F97316] px-3.5 py-1.5 text-xs font-bold rounded transition-colors"
            >
              Fee Tiers Table
            </button>
            <span className="inline-flex items-center bg-orange-100 text-[#ea580c] px-3 py-1.5 text-xs font-bold rounded">
              Author Reg. Due: 10th Mar 2027
            </span>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {copyStatus && (
        <div className="fixed bottom-5 right-5 z-50 rounded bg-[#17213a] px-3.5 py-2 text-xs font-bold text-white shadow-lg border border-orange-400/40">
          {copyStatus}
        </div>
      )}

      {/* ── MAIN CONTENT (COMPACT SPACING, NO GAPS) ── */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mt-3.5 space-y-3.5">

        {/* ── 1. TWO-STEP PROCEDURE ── */}
        <div id="bank-remittance" className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 items-stretch">

          {/* STEP 1: BANK REMITTANCE */}
          <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-sm h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-orange-100 text-[10px] font-bold text-orange-700">
                    1
                  </span>
                  <h2 className="text-sm font-bold text-[#17213a]">Step 1: Remit Registration Fee</h2>
                </div>
                <span className="border border-orange-200 bg-orange-50 px-2 py-0.5 text-[10px] font-bold text-[#F97316] rounded">
                  Mandatory First
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transfer the applicable fee via Bank of Baroda NEFT/RTGS/IMPS or UPI. Retain the UTR transaction number and payment receipt.
              </p>

              {/* Bank Details Table */}
              <div className="mt-2.5 border border-slate-200 rounded divide-y divide-slate-100 text-xs">
                <div className="p-2 bg-slate-50/60 flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">Beneficiary Name</span>
                    <strong className="text-xs text-[#17213a] block mt-0.5 leading-snug">{bankDetails.accountName}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyText(bankDetails.accountName, 'Beneficiary Name')}
                    className="shrink-0 text-[11px] font-bold text-[#F97316] hover:underline"
                  >
                    Copy
                  </button>
                </div>

                <div className="grid grid-cols-2 divide-x divide-slate-100">
                  <div className="p-2">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">Bank &amp; Branch</span>
                    <span className="text-xs font-semibold text-slate-800 block mt-0.5">{bankDetails.bankName}</span>
                    <span className="text-[10px] text-slate-500 block">{bankDetails.branch}</span>
                  </div>
                  <div className="p-2 flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">IFSC Code</span>
                      <strong className="font-mono text-xs text-[#F97316] block mt-0.5">{bankDetails.ifsc}</strong>
                      <span className="text-[9px] text-slate-400 block">5th char zero</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyText(bankDetails.ifsc, 'IFSC Code')}
                      className="text-[11px] font-bold text-[#F97316] hover:underline"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 divide-x divide-slate-100">
                  <div className="p-2 flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">UPI ID (VPA)</span>
                      <strong className="font-mono text-xs text-[#17213a] block mt-0.5">{bankDetails.upiId}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyText(bankDetails.upiId, 'UPI ID')}
                      className="text-[11px] font-bold text-[#F97316] hover:underline"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="p-2">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">Account Number</span>
                    <span className="text-[11px] text-slate-700 block mt-0.5">{bankDetails.accountNumber}</span>
                  </div>
                </div>

                <div className="p-2 bg-slate-50/40 text-[11px] text-slate-600 flex items-center justify-between">
                  <span>
                    <strong className="text-slate-700">Remarks / Narration:</strong> Include your Microsoft CMT Paper ID
                  </span>
                  <span className="text-[10px] text-orange-600 font-semibold bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100">
                    Important
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions for Step 1 */}
            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={copyAllBankDetails}
                className="font-bold text-[#F97316] hover:underline text-xs"
              >
                Copy All Bank Info
              </button>
              <span className="text-slate-500 text-[11px]">Save UTR receipt for Step 2</span>
            </div>
          </div>

          {/* STEP 2: SUBMIT REGISTRATION FORM */}
          <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-sm h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#17213a] text-[10px] font-bold text-white">
                    2
                  </span>
                  <h2 className="text-sm font-bold text-[#17213a]">Step 2: Submit Registration Form</h2>
                </div>
                <span className="border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-800 rounded">
                  Final Confirmation
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete the official registration form with your manuscript title, Microsoft CMT Paper ID, author affiliations, and payment proof.
              </p>

              {/* Form Checklist Box */}
              <div className="mt-2.5 border border-slate-200 rounded divide-y divide-slate-100 text-xs">
                <div className="p-2 bg-slate-50/60 font-bold uppercase text-[10px] text-slate-400">
                  Required Details for Registration Form
                </div>
                <div className="p-2 text-slate-700">
                  <span className="font-semibold block text-slate-800">1. Microsoft CMT Paper ID &amp; Paper Title</span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">As approved in peer review notification.</span>
                </div>
                <div className="p-2 text-slate-700">
                  <span className="font-semibold block text-slate-800">2. Presenting Author &amp; Institutional Affiliation</span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">Full name, department, institution, and country.</span>
                </div>
                <div className="p-2 text-slate-700">
                  <span className="font-semibold block text-slate-800">3. Bank UTR / Reference Number &amp; Receipt Proof</span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">Upload screenshot or transaction slip.</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions for Step 2 */}
            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={openRegistrationForm}
                className="bg-[#F97316] hover:bg-[#ea580c] text-white px-3.5 py-1.5 text-xs font-bold rounded transition-colors"
              >
                Open Registration Form &rarr;
              </button>
              <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                <span>Queries?</span>
                <button
                  type="button"
                  onClick={() => copyText('icraiq2it27@nriit.edu.in', 'Secretariat Email')}
                  className="font-bold text-[#F97316] hover:underline"
                >
                  Copy Email
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ── 2. REGISTRATION CATEGORIES & FEE TIERS (EXACT PHOTO TABLE FORMAT) ── */}
        <div id="fee-schedule" className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2.5 pb-2 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F97316]">Tariff Structure</span>
              <h2 className="text-sm font-bold text-[#17213a]">Registration Categories &amp; Fee Tiers</h2>
            </div>
            <span className="text-[11px] text-slate-500">
              Amounts in Indian Rupees (Rs.) &amp; US Dollars (USD)
            </span>
          </div>

          {/* Simple Clean Table matching uploaded image */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-slate-800 text-[#17213a] font-bold">
                  <th className="py-2.5 px-3">Category</th>
                  <th className="py-2.5 px-3">
                    India &mdash;<br />
                    Author (Rs.)
                  </th>
                  <th className="py-2.5 px-3">
                    India &mdash;<br />
                    Listener (Rs.)
                  </th>
                  <th className="py-2.5 px-3">
                    Other Countries &mdash;<br />
                    Author (USD)
                  </th>
                  <th className="py-2.5 px-3">
                    Other Countries &mdash;<br />
                    Listener (USD)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {FEE_SCHEDULE_DATA.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      row.isHighlight ? 'bg-slate-50' : 'hover:bg-slate-50/60'
                    }`}
                  >
                    <td className="py-3 px-3 font-semibold text-[#17213a]">{row.category}</td>
                    <td className="py-3 px-3">{row.indiaAuthor}</td>
                    <td className="py-3 px-3">{row.indiaListener}</td>
                    <td className="py-3 px-3">{row.otherAuthor}</td>
                    <td className="py-3 px-3">{row.otherListener}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-2">
            <span>All accepted and presented papers receive formal Scopus proceedings submission.</span>
            <button
              type="button"
              onClick={openRegistrationForm}
              className="bg-[#F97316] hover:bg-[#ea580c] text-white px-3.5 py-1.5 text-xs font-bold rounded transition-colors self-start sm:self-auto"
            >
              Fill Registration Form &rarr;
            </button>
          </div>
        </div>

        {/* ── 3. POLICIES & SECRETARIAT (BALANCED 2-COLUMNS) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 items-start">

          {/* LEFT: POLICIES */}
          <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-bold text-[#17213a]">Registration Directives &amp; Policies</h2>
                <span className="text-[10px] font-semibold text-slate-400">Terms</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 mt-2">
                {notes.map((note, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#F97316] font-bold shrink-0">•</span>
                    <span className="leading-relaxed">{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-2.5 pt-2 border-t border-slate-100 text-[11px] text-slate-400">
              Unpresented papers will not be forwarded to proceedings publisher.
            </div>
          </div>

          {/* RIGHT: SECRETARIAT ASSISTANCE */}
          <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-bold text-[#17213a]">Registration Secretariat &amp; Inquiries</h2>
                <span className="border border-orange-200 bg-orange-50 px-2 py-0.5 text-[10px] font-bold text-[#F97316] rounded">
                  Helpdesk
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                For queries regarding fee remittance, invoicing, author registration, or presentations:
              </p>

              <div className="space-y-2 text-xs">
                <div className="border border-slate-100 rounded p-2 bg-slate-50/50">
                  <strong className="text-xs text-[#17213a] block">Dr. K. V. Sambasiva Rao</strong>
                  <span className="text-[11px] text-slate-500 block">Professor &amp; Dean, R &amp; D, Dr RVR NRIIT (DTBU)</span>
                </div>
                <div className="border border-slate-100 rounded p-2 bg-slate-50/50">
                  <strong className="text-xs text-[#17213a] block">Dr. D. Sunitha</strong>
                  <span className="text-[11px] text-slate-500 block">HOD &amp; Dean : School of Computer Studies, Dr RVR NRIIT (DTBU)</span>
                </div>
              </div>
            </div>

            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <a
                href="mailto:icraiq2it27@nriit.edu.in"
                className="font-bold text-[#F97316] hover:underline"
              >
                icraiq2it27@nriit.edu.in
              </a>
              <button
                type="button"
                onClick={() => copyText('icraiq2it27@nriit.edu.in', 'Secretariat Email')}
                className="font-bold text-slate-600 hover:text-[#F97316] hover:underline text-xs"
              >
                Copy Email
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* ── MODAL FALLBACK ── */}
      {isRegistrationFormOpen && !registrationFormUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsRegistrationFormOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-lg bg-white p-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base font-bold text-[#17213a]">Registration Form</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              The official Google Registration Form will be provided upon paper acceptance notifications. You may remit the fee and retain your payment reference / UTR number in advance.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsRegistrationFormOpen(false)}
                className="bg-[#F97316] hover:bg-[#ea580c] text-white px-3.5 py-1.5 text-xs font-bold rounded"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
};

export default RegistrationPage;
