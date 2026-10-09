import React, { useState } from 'react';
import { conferenceData } from '../data/conferenceData';

const DEFAULT_BANK_DETAILS = {
  accountName: 'The Principal',
  bankName: 'BANK OF BARODA',
  accountNumber: 'Available upon invoice / submission request',
  ifsc: 'BARB0AGIRIP',
  branch: 'Agiripalli / Pothavarappadu',
  upiId: 'icraiq2it27@barodampay',
};

const FEE_SCHEDULE_DATA = [
  {
    category: 'Students / Research Scholars',
    indiaAuthor: '3000',
    indiaListener: '3000',
    otherAuthor: '$75',
    otherListener: '$75',
  },
  {
    category: 'Academician',
    indiaAuthor: '4000',
    indiaListener: '4000',
    otherAuthor: '$75',
    otherListener: '$75',
  },
  {
    category: 'Industry Professional',
    indiaAuthor: '4000',
    indiaListener: '4000',
    otherAuthor: '$75',
    otherListener: '$75',
    isHighlight: true,
  },
  {
    category: 'Publication Fee for Proceedings',
    indiaAuthor: '10000',
    indiaListener: '–',
    otherAuthor: '$100',
    otherListener: '–',
  },
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
    <main className="min-h-screen bg-white text-[#17213a] antialiased pb-6">

      {/* ── HEADER ── */}
      <section className="bg-white py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[clamp(1rem,5vw,2rem)] font-black uppercase tracking-tight text-[#17213a] sm:text-[clamp(1.5rem,4.2vw,2rem)] lg:text-[42px]">
            <span className="block whitespace-nowrap lg:inline">Conference Registration &amp; </span>
            <span className="block whitespace-nowrap text-[#F97316] lg:inline">Fee Guidelines</span>
          </h1>
          <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-[#F97316]" />
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-[15px]">
            Author and delegate registration portal for accepted manuscripts, presentations, and proceedings.
          </p>

          {/* Quick Actions */}
          <div className="mt-3 grid grid-cols-2 items-stretch justify-center gap-2 lg:flex lg:flex-wrap">
            <button
              type="button"
              onClick={openRegistrationForm}
              className="inline-flex items-center justify-center rounded bg-[#F97316] px-1.5 py-1.5 text-center text-[11px] font-bold text-white transition-colors hover:bg-[#ea580c] sm:px-3 sm:text-sm lg:px-3"
            >
              Fill Registration Form &rarr;
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('bank-remittance')}
              className="inline-flex items-center justify-center rounded border border-[#F97316] px-1.5 py-1.5 text-center text-xs font-bold text-[#F97316] transition-colors hover:bg-orange-50 sm:px-3 sm:text-sm lg:px-3"
            >
              Bank Details
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('fee-schedule')}
              className="inline-flex items-center justify-center rounded border border-slate-300 px-1.5 py-1.5 text-center text-xs font-bold text-slate-600 transition-colors hover:border-[#F97316] hover:text-[#F97316] sm:px-3 sm:text-sm lg:px-3"
            >
              Fee Tiers Table
            </button>
            <span className="inline-flex items-center justify-center rounded bg-orange-100 px-1 py-1.5 text-center text-[9px] font-bold text-[#ea580c] sm:px-2 sm:text-xs lg:px-3 lg:py-1.5 lg:text-sm">
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
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mt-2.5 space-y-2.5">

        {/* ── 1. TWO-STEP PROCEDURE ── */}
        <div id="bank-remittance" className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 lg:gap-3">

          {/* STEP 1: BANK REMITTANCE */}
          <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-orange-100 text-sm font-bold text-orange-700">
                    1
                  </span>
                  <h2 className="text-base font-bold text-[#17213a] sm:text-lg">Step 1: Remit Registration Fee</h2>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed sm:text-[15px]">
                Transfer the applicable fee via Bank of Baroda NEFT/RTGS/IMPS or UPI. Retain the UTR transaction number and payment receipt.
              </p>

              {/* Bank Details Table */}
              <div className="mt-3 border border-slate-200 rounded-lg divide-y divide-slate-100 text-sm">
                <div className="bg-slate-50/60 p-2.5">
                  <span className="text-xs font-bold uppercase text-slate-400 block">Beneficiary Name</span>
                  <strong className="mt-0.5 block break-words text-sm leading-snug text-[#17213a]">{bankDetails.accountName}</strong>
                </div>

                <div className="grid grid-cols-1 divide-y divide-slate-100 min-[480px]:grid-cols-2 min-[480px]:divide-y-0 min-[480px]:divide-x">
                  <div className="p-2.5">
                    <span className="text-xs font-bold uppercase text-slate-400 block">Bank &amp; Branch</span>
                    <span className="text-sm font-semibold text-slate-800 block mt-0.5">{bankDetails.bankName}</span>
                    <span className="text-xs text-slate-500 block">{bankDetails.branch}</span>
                  </div>
                  <div className="flex items-start justify-between gap-2 p-2.5">
                    <div className="min-w-0">
                      <span className="text-xs font-bold uppercase text-slate-400 block">IFSC Code</span>
                      <strong className="mt-0.5 block break-all font-mono text-sm text-[#F97316]">{bankDetails.ifsc}</strong>
                      <span className="text-xs text-slate-400 block">5th char zero</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyText(bankDetails.ifsc, 'IFSC Code')}
                      className="text-sm font-bold text-[#F97316] hover:underline"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 divide-y divide-slate-100 min-[480px]:grid-cols-2 min-[480px]:divide-y-0 min-[480px]:divide-x">
                  <div className="flex items-start justify-between gap-2 p-2.5">
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-bold uppercase text-slate-400 block">UPI ID (VPA)</span>
                      <strong className="mt-0.5 block break-all font-mono text-sm leading-snug text-[#17213a]">{bankDetails.upiId}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyText(bankDetails.upiId, 'UPI ID')}
                      className="shrink-0 text-sm font-bold text-[#F97316] hover:underline"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="min-w-0 p-2.5">
                    <span className="text-xs font-bold uppercase text-slate-400 block">Account Number</span>
                    <span className="mt-0.5 block break-words text-sm text-slate-700">{bankDetails.accountNumber}</span>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-between gap-2 bg-slate-50/40 p-2.5 text-sm text-slate-600 min-[480px]:flex-row min-[480px]:items-center">
                  <span className="min-w-0">
                    <strong className="text-slate-700">Remarks / Narration:</strong> Include your Microsoft CMT Paper ID
                  </span>
                  <span className="text-xs text-orange-600 font-semibold bg-orange-50 px-2 py-1 rounded border border-orange-100">
                    Important
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions for Step 1 */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-sm">
              <button
                type="button"
                onClick={copyAllBankDetails}
                className="font-bold text-[#F97316] hover:underline text-sm"
              >
                Copy All Bank Info
              </button>
              <span className="text-slate-500 text-sm">Save UTR receipt for Step 2</span>
            </div>
          </div>

          {/* STEP 2: SUBMIT REGISTRATION FORM */}
          <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-[#17213a] text-sm font-bold text-white">
                    2
                  </span>
                  <h2 className="text-base font-bold text-[#17213a] sm:text-lg">Step 2: Submit Registration Form</h2>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed sm:text-[15px]">
                Complete the official registration form with your manuscript title, Microsoft CMT Paper ID, author affiliations, and payment proof.
              </p>

              {/* Form Checklist Box */}
              <div className="mt-3 border border-slate-200 rounded-lg divide-y divide-slate-100 text-sm">
                <div className="p-2.5 bg-slate-50/60 font-bold uppercase text-xs text-slate-400">
                  Required Details for Registration Form
                </div>
                <div className="p-2.5 text-slate-700">
                  <span className="font-semibold block text-slate-800">1. Microsoft CMT Paper ID &amp; Paper Title</span>
                  <span className="text-sm text-slate-500 block mt-0.5">As approved in peer review notification.</span>
                </div>
                <div className="p-2.5 text-slate-700">
                  <span className="font-semibold block text-slate-800">2. Presenting Author &amp; Institutional Affiliation</span>
                  <span className="text-sm text-slate-500 block mt-0.5">Full name, department, institution, and country.</span>
                </div>
                <div className="p-2.5 text-slate-700">
                  <span className="font-semibold block text-slate-800">3. Bank UTR / Reference Number &amp; Receipt Proof</span>
                  <span className="text-sm text-slate-500 block mt-0.5">Upload screenshot or transaction slip.</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions for Step 2 */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-end gap-2 text-sm">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
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
        <div id="fee-schedule" className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 pb-3 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">Tariff Structure</span>
              <h2 className="text-lg font-bold text-[#17213a] sm:text-xl">Registration Categories &amp; Fee Tiers</h2>
            </div>
            <span className="text-sm text-slate-500">
              Amounts in Indian Rupees (Rs.) &amp; US Dollars (USD)
            </span>
          </div>

          <div
            className="overflow-x-auto"
            role="region"
            aria-label="Registration fee schedule"
            tabIndex={0}
          >
            <table className="w-full min-w-[680px] border-collapse text-left text-xs sm:text-sm lg:min-w-[720px]">
              <thead>
                <tr className="border-b-2 border-slate-800 text-[#17213a] font-bold">
                  <th className="py-2 px-2 sm:px-3 lg:py-2.5">Category</th>
                  <th className="py-2 px-2 sm:px-3 lg:py-2.5">
                    India &mdash;<br />
                    Author (Rs.)
                  </th>
                  <th className="py-2 px-2 sm:px-3 lg:py-2.5">
                    India &mdash;<br />
                    Listener (Rs.)
                  </th>
                  <th className="py-2 px-2 sm:px-3 lg:py-2.5">
                    Other Countries &mdash;<br />
                    Author (USD)
                  </th>
                  <th className="py-2 px-2 sm:px-3 lg:py-2.5">
                    Other Countries &mdash;<br />
                    Listener (USD)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {FEE_SCHEDULE_DATA.map((row) => (
                  <tr
                    key={row.category}
                    className={`transition-colors ${row.isHighlight ? 'bg-slate-50' : 'hover:bg-slate-50/60'
                      }`}
                  >
                    <td className="py-2 px-2 font-semibold text-[#17213a] sm:px-3">{row.category}</td>
                    <td className="py-2 px-2 sm:px-3">{row.indiaAuthor}</td>
                    <td className="py-2 px-2 sm:px-3">{row.indiaListener}</td>
                    <td className="py-2 px-2 sm:px-3">{row.otherAuthor}</td>
                    <td className="py-2 px-2 sm:px-3">{row.otherListener}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 text-sm text-slate-500 space-y-1">
            <p>
              Accepted and presented papers may be submitted for proceedings consideration; publication and indexing depend on publisher selection, acceptance, and confirmation.
            </p>
            <p className="font-semibold text-slate-700">
              Extra page charges: ₹1,500 extra for each additional page.
            </p>
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
            className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base font-bold text-[#17213a]">Registration Form</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              The official Google Registration Form will be provided upon paper acceptance notifications. You may remit the fee and retain your payment reference / UTR number in advance.
            </p>
            <div className="mt-3 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsRegistrationFormOpen(false)}
                className="bg-[#F97316] hover:bg-[#ea580c] text-white px-4 py-2 text-sm font-bold rounded"
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
