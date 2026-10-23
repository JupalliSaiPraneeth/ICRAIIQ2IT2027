import React, { useState } from 'react';
import { conferenceData } from '../data/conferenceData';

const DEFAULT_BANK_DETAILS = {
  bank: 'Bank of Baroda, Benz Circle Branch',
  accountName: 'Principal, NRI Institute of Technology',
  accountNumber: '26360100033044',
  ifsc: 'BARB0BENVIJ',
  accountType: 'Savings',
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
    indiaAuthor: '6000',
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
    bank: getValue(data.bankDetails?.bank, DEFAULT_BANK_DETAILS.bank),
    accountName: getValue(data.bankDetails?.accountName, DEFAULT_BANK_DETAILS.accountName),
    accountNumber: getValue(data.bankDetails?.accountNumber, DEFAULT_BANK_DETAILS.accountNumber),
    ifsc: getValue(data.bankDetails?.ifsc, DEFAULT_BANK_DETAILS.ifsc),
    accountType: getValue(data.bankDetails?.accountType, DEFAULT_BANK_DETAILS.accountType),
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
      `Bank: ${bankDetails.bank}`,
      `Account Name: ${bankDetails.accountName}`,
      `Account No.: ${bankDetails.accountNumber}`,
      `IFSC: ${bankDetails.ifsc}`,
      `Account Type: ${bankDetails.accountType}`,
    ].join('\n');
    copyText(details, 'Complete payment details');
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
              onClick={() => scrollToSection('fee-schedule')}
              className="inline-flex items-center justify-center rounded border border-[#F97316] px-1.5 py-1.5 text-center text-xs font-bold text-[#F97316] transition-colors hover:bg-orange-50 sm:px-3 sm:text-sm lg:px-3"
            >
              Fee Tiers Table
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('payment-details')}
              className="inline-flex items-center justify-center rounded border border-slate-300 px-1.5 py-1.5 text-center text-xs font-bold text-slate-600 transition-colors hover:border-[#F97316] hover:text-[#F97316] sm:px-3 sm:text-sm lg:px-3"
            >
              Payment Details
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

        {/* ── 1. REGISTRATION CATEGORIES & FEE TIERS (EXACT PHOTO TABLE FORMAT) ── */}
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

        {/* ── 2. PAYMENT DETAILS (LEFT) & PUBLICATION / PAGE GUIDELINES (RIGHT) ── */}
        <div id="payment-details" className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 items-stretch">

          {/* Left Grid: Bank Details */}
          <div className="bg-white border border-slate-200 rounded-xl p-3 sm:p-4 shadow-sm h-full flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-2 pb-2 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316]">Account Remittance</span>
                  <h2 className="text-base sm:text-lg font-bold text-[#17213a]">Payment Details</h2>
                </div>
                <button
                  type="button"
                  onClick={copyAllBankDetails}
                  className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-orange-200 bg-orange-50/70 px-2.5 py-1 text-xs font-bold text-orange-700 shadow-2xs transition hover:bg-orange-100"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Payment Details
                </button>
              </div>

              <div className="overflow-x-auto" role="region" aria-label="Payment details table" tabIndex={0}>
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-800 text-[#17213a] font-bold">
                      <th className="py-1.5 px-2.5 sm:py-2 sm:px-3 w-36 sm:w-44 whitespace-nowrap">Particulars</th>
                      <th className="py-1.5 px-2.5 sm:py-2 sm:px-3">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-1.5 px-2.5 sm:py-2 sm:px-3 font-semibold text-[#17213a] whitespace-nowrap">Bank</td>
                      <td className="py-1.5 px-2.5 sm:py-2 sm:px-3 font-medium text-slate-800">{bankDetails.bank}</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-1.5 px-2.5 sm:py-2 sm:px-3 font-semibold text-[#17213a] whitespace-nowrap">Account Name</td>
                      <td className="py-1.5 px-2.5 sm:py-2 sm:px-3 font-semibold text-slate-900">{bankDetails.accountName}</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-1.5 px-2.5 sm:py-2 sm:px-3 font-semibold text-[#17213a] whitespace-nowrap">Account No.</td>
                      <td className="py-1.5 px-2.5 sm:py-2 sm:px-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 text-xs sm:text-sm">
                            {bankDetails.accountNumber}
                          </span>
                          <button
                            type="button"
                            onClick={() => copyText(bankDetails.accountNumber, 'Account Number')}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#F97316] hover:text-[#ea580c] hover:underline"
                          >
                            Copy
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-1.5 px-2.5 sm:py-2 sm:px-3 font-semibold text-[#17213a] whitespace-nowrap">IFSC</td>
                      <td className="py-1.5 px-2.5 sm:py-2 sm:px-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-[#ea580c] bg-orange-50 px-2 py-0.5 rounded border border-orange-200 text-xs sm:text-sm">
                            {bankDetails.ifsc}
                          </span>
                          <button
                            type="button"
                            onClick={() => copyText(bankDetails.ifsc, 'IFSC Code')}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#F97316] hover:text-[#ea580c] hover:underline"
                          >
                            Copy
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-1.5 px-2.5 sm:py-2 sm:px-3 font-semibold text-[#17213a] whitespace-nowrap">Account Type</td>
                      <td className="py-1.5 px-2.5 sm:py-2 sm:px-3 font-medium text-slate-800">{bankDetails.accountType}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Grid: Publication & Registration Guidelines (Height Balanced, No Tinted BG) */}
          <div className="bg-white border border-slate-200 rounded-xl p-3 sm:p-4 shadow-sm h-full flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-2 pb-2 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316]">Publication &amp; Notes</span>
                  <h2 className="text-base sm:text-lg font-bold text-[#17213a]">Guidelines &amp; Additional Charges</h2>
                </div>
              </div>

              <div className="space-y-2">
                {/* Point 1: Publication with ISBN number */}
                <div className="rounded-lg border border-slate-200 bg-white py-2 px-3 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-[#17213a]">
                      Publication with ISBN Number
                    </h4>
                    <p className="text-xs text-slate-500">
                      (Google Scholar Indexed)
                    </p>
                  </div>
                  <span className="shrink-0 font-bold text-sm sm:text-base text-[#F97316]">
                    ₹2,000
                  </span>
                </div>

                {/* Point 2: Extra page beyond six pages */}
                <div className="rounded-lg border border-slate-200 bg-white py-2 px-3 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-[#17213a]">
                      Extra Page Charges
                    </h4>
                    <p className="text-xs text-slate-500">
                      Beyond six (6) pages
                    </p>
                  </div>
                  <span className="shrink-0 font-bold text-sm sm:text-base text-[#17213a]">
                    ₹1,500 <span className="text-xs font-normal text-slate-500">/ page extra</span>
                  </span>
                </div>

                {/* Additional Remittance Points */}
                <div className="rounded-lg border border-slate-200 bg-white py-2 px-3 text-xs text-slate-600 space-y-1">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />
                    <span>
                      <strong className="text-slate-800">Accepted Transfer Modes:</strong> NEFT, RTGS, IMPS, Net Banking, or UPI to the account on the left.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />
                    <span>
                      <strong className="text-slate-800">Paper Reference:</strong> Mandatorily quote your Paper ID in remarks and retain transaction UTR number / payment proof.
                    </span>
                  </div>
                </div>
              </div>
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
