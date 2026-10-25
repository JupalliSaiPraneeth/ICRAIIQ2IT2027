import React, { useState } from 'react';
import {
  Download,
  Copy,
  Check,
  User,
  Mail,
  Phone,
  FileCode,
  CheckCircle2,
} from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

const DEFAULT_BANK_DETAILS = {
  bank: 'Bank of Baroda, Benz Circle Branch',
  accountName: 'The Principal, NRI Institute of Technology, Agiripalli',
  accountNumber: '26360100033044',
  ifsc: 'BARB0BENVIJ',
  accountType: 'Savings',
  branch: 'Benz Circle, Vijayawada, Krishna District, Andhra Pradesh',
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
    category: 'Scopus Indexed Proceedings',
    subtext: '(Confirmation awaited from M/S Taylor & Francis / Springer LNCS / AIP )',
    indiaAuthor: '6000',
    indiaListener: '–',
    otherAuthor: '$100',
    otherListener: '–',
  },
  {
    category: 'Non-Scopus Proceedings with ISBN & DOI',
    subtext: '(Indexed by Google Scholar)',
    indiaAuthor: '2000',
    indiaListener: '–',
    otherAuthor: '$50',
    otherListener: '–',
  },
];

const RECKONER_FEES = {
  IN: {
    student: 3000,
    academic: 4000,
    industry: 4000,
    listener: 2000,
    scopus: 6000,
    non: 2000,
    extraPage: 1500,
  },
  INT: {
    student: 75,
    academic: 75,
    industry: 75,
    listener: 50,
    scopus: 100,
    non: 50,
    extraPage: 20,
  },
};

const CATEGORY_NAMES = {
  student: 'Student / Research Scholar',
  academic: 'Academician',
  industry: 'Industry Professional',
  listener: 'Attendee / Listener (no paper)',
};

const BASE_PAGES = 6;

const RECKONER_PAY = {
  name: 'The Principal, NRI Institute of Technology, Agiripalli',
  bank: 'BANK OF BARODA',
  acc: '26360100033044',
  ifsc: 'BARB0BENVIJ',
  branch: 'Benz Circle, Vijayawada, Krishna District, Andhra Pradesh',
};

// Client-side PDF Generation without heavy external dependencies
const pdfEsc = (t) =>
  String(t)
    .replace(/[^\x20-\xFF]/g, '?')
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');

function wrapText(t, n) {
  const words = String(t).split(' ');
  const out = [];
  let current = '';
  words.forEach((x) => {
    if ((current + ' ' + x).trim().length > n) {
      out.push(current);
      current = x;
    } else {
      current = (current + ' ' + x).trim();
    }
  });
  out.push(current);
  return out;
}

function makePDF(d) {
  let y = 790;
  const ops = ['0.5 w 0.8 G'];
  const text = (s, x, size, bold) =>
    ops.push(`BT /${bold ? 'F2' : 'F1'} ${size} Tf ${x} ${y} Td (${pdfEsc(s)}) Tj ET`);
  const rule = () => ops.push(`40 ${y} m 555 ${y} l S`);
  const row = (l, v, bold) => {
    text(l, 40, 11, false);
    const c = wrapText(v, 52);
    c.forEach((x) => {
      text(x, 200, 11, bold);
      y -= 16;
    });
    if (!c.length) y -= 16;
  };

  text('ICRAIQ2IT-2027 - Payment Request', 40, 18, true);
  y -= 18;
  text('5th International Conference | 09-10 April 2027 | Vijayawada, India', 40, 10, false);
  y -= 12;
  rule();
  y -= 24;
  row('Reference', d.ref, true);
  row('Date', d.date, false);
  if (d.name) row('Name', d.name, false);
  if (d.email) row('Email', d.email, false);
  if (d.phone) row('Phone', d.phone, false);
  row('Category', d.cat, false);
  if (d.showPid) row('Paper ID', d.pid || 'Not provided', true);
  y -= 8;
  text('Fee details', 40, 13, true);
  y -= 6;
  rule();
  y -= 20;
  d.lines.forEach((l) => {
    text(l[0], 40, 11, false);
    text(l[1], 440, 11, false);
    y -= 16;
  });
  rule();
  y -= 18;
  text('Total payable', 40, 13, true);
  text(d.total, 440, 13, true);
  y -= 30;
  text('Payment address', 40, 13, true);
  y -= 6;
  rule();
  y -= 20;
  d.addr.forEach((r) => row(r[0], r[1], true));

  const content = ops.join('\n');
  const objs = [
    '<</Type/Catalog/Pages 2 0 R>>',
    '<</Type/Pages/Kids[3 0 R]/Count 1>>',
    '<</Type/Page/Parent 2 0 R/MediaBox[0 0 595 842]/Resources<</Font<</F1 4 0 R/F2 5 0 R>>>>/Contents 6 0 R>>',
    '<</Type/Font/Subtype/Type1/BaseFont/Helvetica/Encoding/WinAnsiEncoding>>',
    '<</Type/Font/Subtype/Type1/BaseFont/Helvetica-Bold/Encoding/WinAnsiEncoding>>',
    `<</Length ${content.length}>>\nstream\n${content}\nendstream`,
  ];
  let pdf = '%PDF-1.4\n';
  const off = [];
  objs.forEach((o, i) => {
    off.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${o}\nendobj\n`;
  });
  const xr = pdf.length;
  pdf +=
    `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n` +
    off.map((n) => String(n).padStart(10, '0') + ' 00000 n \n').join('') +
    `trailer\n<</Size ${objs.length + 1}/Root 1 0 R>>\nstartxref\n${xr}\n%%EOF`;

  return new Blob([Uint8Array.from(pdf, (c) => c.charCodeAt(0) & 255)], {
    type: 'application/pdf',
  });
}

const getValue = (value, fallback) =>
  value === undefined || value === null || value === '' ? fallback : value;

export const RegistrationPage = () => {
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const [copiedKey, setCopiedKey] = useState(null);

  // Payment Reckoner State
  const [reckoner, setReckoner] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: 'IN', // 'IN' | 'INT'
    category: 'student', // 'student' | 'academic' | 'industry' | 'listener'
    paperId: '',
    pages: 6,
    proceedings: 'scopus', // 'scopus' | 'non'
  });

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

  const copyInline = (text, key, label) => {
    copyText(text, label);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 1500);
  };

  const copyAllBankDetails = async () => {
    const details = [
      `Beneficiary name: ${RECKONER_PAY.name}`,
      `Bank name: ${RECKONER_PAY.bank}`,
      `Account number: ${RECKONER_PAY.acc}`,
      `IFSC code: ${RECKONER_PAY.ifsc}`,
      `Branch address: ${RECKONER_PAY.branch}`,
    ].join('\n');
    copyText(details, 'Complete payment address');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // --- Payment Reckoner Logic ---
  const formatMoney = (amount, nat) => {
    if (nat === 'IN') {
      return 'Rs. ' + Number(amount).toLocaleString('en-IN');
    }
    return '$' + Number(amount).toLocaleString('en-US');
  };

  const calcFee = () => {
    const f = RECKONER_FEES[reckoner.nationality];
    const cat = reckoner.category;
    const isListener = cat === 'listener';
    const lines = [];

    // Base Registration Fee
    lines.push({
      label: `${CATEGORY_NAMES[cat]} registration`,
      amount: f[cat],
    });

    // Proceedings & Extra Pages (only for authors)
    if (!isListener) {
      lines.push({
        label:
          reckoner.proceedings === 'scopus'
            ? 'Scopus-indexed proceedings'
            : 'Non-Scopus proceedings (ISBN + DOI)',
        amount: f[reckoner.proceedings],
      });

      const p = Math.min(12, Math.max(1, parseInt(reckoner.pages, 10) || BASE_PAGES));
      const extra = Math.max(0, p - BASE_PAGES);
      if (extra > 0) {
        lines.push({
          label: `${extra} extra page${extra > 1 ? 's' : ''} × ${formatMoney(f.extraPage, reckoner.nationality)}`,
          amount: extra * f.extraPage,
        });
      }
    }

    const total = lines.reduce((acc, curr) => acc + curr.amount, 0);
    return { lines, total, isListener };
  };

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
  const isValidPhone = (v, nat) => {
    const clean = v.replace(/[\s-]/g, '');
    return nat === 'IN'
      ? /^(\+91|91|0)?[6-9]\d{9}$/.test(clean)
      : /^\+?\d{7,15}$/.test(clean);
  };

  const getMissingFields = () => {
    const m = [];
    const nm = reckoner.fullName.trim();
    const em = reckoner.email.trim();
    const ph = reckoner.phone.trim();
    const pid = reckoner.paperId.trim();

    if (!nm) m.push('name');
    if (!em) {
      m.push('email');
    } else if (!isValidEmail(em)) {
      m.push('a valid email');
    }

    if (!ph) {
      m.push('phone');
    } else if (!isValidPhone(ph, reckoner.nationality)) {
      m.push(
        reckoner.nationality === 'IN'
          ? 'a valid 10-digit mobile number'
          : 'a valid phone number'
      );
    }

    if (reckoner.category !== 'listener' && !pid) {
      m.push('Paper ID');
    }

    return m;
  };

  const handleDownloadPDF = () => {
    const missing = getMissingFields();
    if (missing.length > 0) return;

    const calc = calcFee();
    const ref = 'ICR27-' + Date.now().toString(36).toUpperCase();
    const dateStr = new Date().toLocaleDateString('en-GB');

    const blob = makePDF({
      ref,
      date: dateStr,
      name: reckoner.fullName.trim(),
      email: reckoner.email.trim(),
      phone: reckoner.phone.trim(),
      cat: CATEGORY_NAMES[reckoner.category],
      showPid: reckoner.category !== 'listener',
      pid: reckoner.paperId.trim(),
      lines: calc.lines.map((l) => [l.label, formatMoney(l.amount, reckoner.nationality)]),
      total: formatMoney(calc.total, reckoner.nationality),
      addr: [
        ['Beneficiary name', RECKONER_PAY.name],
        ['Bank name', RECKONER_PAY.bank],
        ['Account number', RECKONER_PAY.acc],
        ['IFSC code', RECKONER_PAY.ifsc],
        ['Branch address', RECKONER_PAY.branch],
      ],
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Payment_Request_${ref}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    copyText('', 'Payment Request PDF');
  };

  const calculatedFee = calcFee();
  const missingFields = getMissingFields();

  return (
    <main className="min-h-screen bg-white text-[#17213a] antialiased pb-10">
      {/* ── HEADER ── */}
      <section className="bg-white py-5 sm:py-6">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[clamp(1rem,5vw,2rem)] font-black uppercase tracking-tight text-[#17213a] sm:text-[clamp(1.5rem,4.2vw,2rem)] lg:text-[42px]">
            <span className="block whitespace-nowrap lg:inline">Conference Registration &amp; </span>
            <span className="block whitespace-nowrap text-[#F97316] lg:inline">Fee Guidelines</span>
          </h1>
          <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-[#F97316]" />

          {/* Quick Actions */}
          <div className="mt-3.5 grid grid-cols-2 items-stretch justify-center gap-2 lg:flex lg:flex-wrap">
            <button
              type="button"
              onClick={openRegistrationForm}
              className="inline-flex items-center justify-center rounded bg-[#F97316] px-2 py-1.5 text-center text-xs font-bold text-white transition-colors hover:bg-[#ea580c] sm:px-3.5 sm:text-sm"
            >
              Fill Registration Form &rarr;
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('payment-reckoner')}
              className="inline-flex items-center justify-center rounded border border-[#F97316] bg-orange-50/70 px-2 py-1.5 text-center text-xs font-bold text-[#F97316] transition-colors hover:bg-orange-100 sm:px-3.5 sm:text-sm"
            >
              Payment Reckoner
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('fee-schedule')}
              className="inline-flex items-center justify-center rounded border border-slate-300 px-2 py-1.5 text-center text-xs font-bold text-slate-700 transition-colors hover:border-[#F97316] hover:text-[#F97316] sm:px-3.5 sm:text-sm"
            >
              Fee Tiers Table
            </button>
            <span className="inline-flex items-center justify-center rounded bg-orange-100 px-2 py-1.5 text-center text-[10px] font-bold text-[#ea580c] sm:text-xs lg:px-3 lg:text-sm">
              Author Reg. Due: 10th Mar 2027
            </span>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {copyStatus && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-xl bg-[#17213a] px-4 py-2.5 text-xs font-bold text-white shadow-xl border border-orange-400/40">
          <CheckCircle2 className="h-4 w-4 text-[#F97316]" />
          <span>{copyStatus}</span>
        </div>
      )}

      {/* ── MAIN CONTENT CONTAINER (COMPACT SPACING) ── */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-3">
        {/* ── 1. REGISTRATION CATEGORIES & FEE TIERS TABLE ── */}
        <section id="fee-schedule" className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-2.5 pb-2.5 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">Tariff Structure</span>
              <h2 className="text-base sm:text-lg font-bold text-[#17213a]">Registration Categories &amp; Fee Tiers</h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
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
                <tr className="border-b-2 border-slate-800 text-[#17213a] font-bold bg-slate-50/50">
                  <th className="py-2 px-3">Category</th>
                  <th className="py-2 px-3">
                    India &mdash;<br />
                    Author (Rs.)
                  </th>
                  <th className="py-2 px-3">
                    India &mdash;<br />
                    Listener (Rs.)
                  </th>
                  <th className="py-2 px-3">
                    International &mdash;<br />
                    Author (USD)
                  </th>
                  <th className="py-2 px-3">
                    International &mdash;<br />
                    Listener (USD)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {FEE_SCHEDULE_DATA.map((row) => (
                  <tr
                    key={row.category}
                    className={`transition-colors ${
                      row.isHighlight ? 'bg-orange-50/30 font-medium' : 'hover:bg-slate-50/60'
                    }`}
                  >
                    <td className="py-2 px-3 font-semibold text-[#17213a]">
                      <div>{row.category}</div>
                      {row.subtext && (
                        <div className="text-[11px] font-normal text-slate-500 mt-0.5">
                          {row.subtext}
                        </div>
                      )}
                    </td>
                    <td className="py-2 px-3 font-medium">{row.indiaAuthor}</td>
                    <td className="py-2 px-3 font-medium">{row.indiaListener}</td>
                    <td className="py-2 px-3 font-medium">{row.otherAuthor}</td>
                    <td className="py-2 px-3 font-medium">{row.otherListener}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-2.5 pt-2 border-t border-slate-100 text-xs text-slate-500 space-y-0.5">
            <p>
              Accepted and presented papers may be submitted for proceedings consideration; publication and indexing depend on publisher selection, acceptance, and confirmation.
            </p>
            <p className="font-semibold text-slate-700">
              Each additional page beyond 6 pages : ₹1,500 extra
            </p>
          </div>
        </section>

        {/* ── 2. PAYMENT RECKONER (INTERACTIVE CALCULATOR & REMITTANCE) ── */}
        <section
          id="payment-reckoner"
          className="rounded-xl border border-slate-200 bg-white p-3.5 sm:p-4 shadow-xs"
        >
          {/* Reckoner Header - No smart badge, minimal vertical gap */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-2 mb-2.5 border-b border-slate-100">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#17213a] tracking-tight">
                Payment Reckoner
              </h2>
            </div>
            <div className="text-[11px] sm:text-xs font-medium text-slate-500">
              ICRAIQ2IT-2027 · 5th International Conference · 09–10 April 2027 · Vijayawada, India
            </div>
          </div>

          {/* Reckoner 2-Column Responsive Layout - Balanced Height */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
            {/* ── LEFT: Card 1 (Your Particulars) ── */}
            <div className="lg:col-span-6 rounded-lg border border-slate-200 bg-slate-50/60 p-3 sm:p-3.5 flex flex-col justify-between h-full">
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-200/80">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#17213a] text-[11px] font-bold text-white">
                  1
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#17213a]">Your particulars</h3>
              </div>

              <div className="space-y-2">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-0.5">
                    Full name
                  </label>
                  <div className="relative">
                    <User className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                    <input
                      type="text"
                      value={reckoner.fullName}
                      onChange={(e) => setReckoner({ ...reckoner, fullName: e.target.value })}
                      placeholder="e.g. Dr. Jane Doe"
                      className="w-full rounded-md border border-slate-200 bg-white py-1.5 pl-8 pr-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#F97316] focus:outline-none focus:ring-1 focus:ring-[#F97316]"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-0.5">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="email"
                        value={reckoner.email}
                        onChange={(e) => setReckoner({ ...reckoner, email: e.target.value })}
                        placeholder="author@institution.edu"
                        className={`w-full rounded-md border bg-white py-1.5 pl-8 pr-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 ${
                          reckoner.email && !isValidEmail(reckoner.email)
                            ? 'border-red-400 focus:border-red-500 focus:ring-red-400'
                            : 'border-slate-200 focus:border-[#F97316] focus:ring-[#F97316]'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-0.5">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="tel"
                        value={reckoner.phone}
                        onChange={(e) => setReckoner({ ...reckoner, phone: e.target.value })}
                        placeholder={reckoner.nationality === 'IN' ? '10-digit mobile' : '+1 234 567 890'}
                        className={`w-full rounded-md border bg-white py-1.5 pl-8 pr-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 ${
                          reckoner.phone && !isValidPhone(reckoner.phone, reckoner.nationality)
                            ? 'border-red-400 focus:border-red-500 focus:ring-red-400'
                            : 'border-slate-200 focus:border-[#F97316] focus:ring-[#F97316]'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Author Nationality Toggle */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-0.5">
                    Author nationality
                  </label>
                  <div className="grid grid-cols-2 rounded-lg bg-slate-200/80 p-0.5 gap-1 border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setReckoner({ ...reckoner, nationality: 'IN' })}
                      className={`rounded-md py-1.5 px-2 text-xs font-bold transition-all text-center ${
                        reckoner.nationality === 'IN'
                          ? 'bg-white text-[#F97316] shadow-2xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Indian (₹ INR)
                    </button>
                    <button
                      type="button"
                      onClick={() => setReckoner({ ...reckoner, nationality: 'INT' })}
                      className={`rounded-md py-1.5 px-2 text-xs font-bold transition-all text-center ${
                        reckoner.nationality === 'INT'
                          ? 'bg-white text-[#F97316] shadow-2xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      International ($ USD)
                    </button>
                  </div>
                </div>

                {/* Registration Category Dropdown */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-0.5">
                    Registration category
                  </label>
                  <select
                    value={reckoner.category}
                    onChange={(e) => setReckoner({ ...reckoner, category: e.target.value })}
                    className="w-full rounded-md border border-slate-200 bg-white py-1.5 px-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:border-[#F97316] focus:outline-none focus:ring-1 focus:ring-[#F97316]"
                  >
                    <option value="student">Student / Research Scholar</option>
                    <option value="academic">Academician</option>
                    <option value="industry">Industry Professional</option>
                    <option value="listener">Attendee / Listener (no paper)</option>
                  </select>
                </div>

                {/* Paper details (hidden when listener) */}
                {reckoner.category !== 'listener' && (
                  <div className="space-y-2 pt-1 border-t border-slate-200/60">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-0.5">
                          Paper ID (Microsoft CMT)
                        </label>
                        <div className="relative">
                          <FileCode className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <input
                            type="text"
                            value={reckoner.paperId}
                            onChange={(e) => setReckoner({ ...reckoner, paperId: e.target.value })}
                            placeholder="e.g. CMT-1042"
                            className="w-full rounded-md border border-slate-200 bg-white py-1.5 pl-8 pr-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#F97316] focus:outline-none focus:ring-1 focus:ring-[#F97316]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-0.5">
                          Pages (6 included)
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="12"
                          value={reckoner.pages}
                          onChange={(e) =>
                            setReckoner({
                              ...reckoner,
                              pages: parseInt(e.target.value, 10) || 6,
                            })
                          }
                          className="w-full rounded-md border border-slate-200 bg-white py-1.5 px-2.5 text-xs sm:text-sm text-slate-800 focus:border-[#F97316] focus:outline-none focus:ring-1 focus:ring-[#F97316]"
                        />
                      </div>
                    </div>

                    {/* Proceedings Option Toggle */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-0.5">
                        Proceedings option
                      </label>
                      <div className="grid grid-cols-2 rounded-lg bg-slate-200/80 p-0.5 gap-1 border border-slate-200">
                        <button
                          type="button"
                          onClick={() => setReckoner({ ...reckoner, proceedings: 'scopus' })}
                          className={`rounded-md py-1.5 px-2 text-center transition-all ${
                            reckoner.proceedings === 'scopus'
                              ? 'bg-white text-[#F97316] shadow-2xs font-bold'
                              : 'text-slate-600 hover:text-slate-900 font-semibold'
                          }`}
                        >
                          <span className="block text-xs">Scopus-indexed</span>
                          <span className="block text-[10px] text-slate-500 font-normal">
                            (approval awaited)
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setReckoner({ ...reckoner, proceedings: 'non' })}
                          className={`rounded-md py-1.5 px-2 text-center transition-all ${
                            reckoner.proceedings === 'non'
                              ? 'bg-white text-[#F97316] shadow-2xs font-bold'
                              : 'text-slate-600 hover:text-slate-900 font-semibold'
                          }`}
                        >
                          <span className="block text-xs">Non-Scopus</span>
                          <span className="block text-[10px] text-slate-500 font-normal">
                            ISBN + DOI
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom alignment footer note to match Card 3 bottom */}
              <div className="mt-auto pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500 leading-tight">
                <span className="flex items-center gap-1 font-medium">
                  <CheckCircle2 className="h-3 w-3 text-[#F97316] shrink-0" />
                  <span>Standard 6 pages presentation included</span>
                </span>
                <span className="font-semibold text-slate-700">
                  {reckoner.category === 'listener' ? 'Attendee / Listener' : 'Author Delegate'}
                </span>
              </div>
            </div>

            {/* ── RIGHT: Card 2 (Fee Summary) & Card 3 (Payment Address) ── */}
            <div className="lg:col-span-6 flex flex-col gap-2.5 h-full">
              {/* Card 2: Fee Summary */}
              <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3 sm:p-3.5">
                <div className="flex items-center gap-2 mb-1.5 pb-1.5 border-b border-slate-200/80">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#17213a] text-[11px] font-bold text-white">
                    2
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#17213a]">Fee summary</h3>
                </div>

                {/* Line items */}
                <div className="space-y-1 py-0.5 text-xs sm:text-sm">
                  {calculatedFee.lines.map((l, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-2 text-slate-700"
                    >
                      <span className="font-medium text-xs sm:text-sm">{l.label}</span>
                      <span className="font-bold text-[#17213a] shrink-0 text-xs sm:text-sm">
                        {formatMoney(l.amount, reckoner.nationality)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Total Row */}
                <div className="mt-2 flex items-center justify-between rounded-lg bg-orange-50/90 border border-orange-200/80 px-2.5 py-1.5">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#17213a]">
                    Total
                  </span>
                  <span className="text-base sm:text-lg font-black text-[#F97316]">
                    {formatMoney(calculatedFee.total, reckoner.nationality)}
                  </span>
                </div>

                {/* Download PDF button */}
                <button
                  type="button"
                  onClick={handleDownloadPDF}
                  disabled={missingFields.length > 0}
                  className={`mt-2 w-full flex items-center justify-center gap-1.5 rounded-lg py-2 px-3 text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                    missingFields.length > 0
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-[#F97316] hover:bg-[#ea580c] text-white shadow-2xs hover:shadow-xs cursor-pointer'
                  }`}
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download payment request (PDF)</span>
                </button>

                {/* Status / Missing Fields Hint */}
                <p
                  className={`mt-1 text-[11px] font-semibold ${
                    missingFields.length > 0 ? 'text-slate-500' : 'text-emerald-700'
                  }`}
                >
                  {missingFields.length > 0
                    ? `Still needed: ${missingFields.join(', ')}.`
                    : '✓ All set. Download your payment request.'}
                </p>
              </div>

              {/* Card 3: Payment Address */}
              <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-2 mb-1.5 pb-1.5 border-b border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#17213a] text-[11px] font-bold text-white">
                      3
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#17213a]">Payment address</h3>
                  </div>
                  <button
                    type="button"
                    onClick={copyAllBankDetails}
                    className="inline-flex items-center gap-1 rounded border border-slate-300 bg-white px-2 py-0.5 text-[11px] font-bold text-slate-700 hover:border-[#F97316] hover:text-[#F97316] transition-colors"
                  >
                    <Copy className="h-3 w-3" />
                    <span>Copy all</span>
                  </button>
                </div>

                {/* Address Key-Values */}
                <div className="divide-y divide-slate-200/70 text-xs">
                  <div className="py-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="text-slate-500 font-medium sm:w-32 shrink-0">
                      Beneficiary name
                    </span>
                    <span className="font-bold text-[#17213a] text-right sm:text-left">{RECKONER_PAY.name}</span>
                  </div>

                  <div className="py-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="text-slate-500 font-medium sm:w-32 shrink-0">
                      Bank name
                    </span>
                    <span className="font-bold text-[#17213a] text-right sm:text-left">{RECKONER_PAY.bank}</span>
                  </div>

                  <div className="py-1 flex items-center justify-between gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                      <span className="text-slate-500 font-medium sm:w-32 shrink-0">
                        Account number
                      </span>
                      <span className="font-mono font-bold text-[#17213a] bg-white px-1.5 py-0.5 rounded border border-slate-200">
                        {RECKONER_PAY.acc}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyInline(RECKONER_PAY.acc, 'acc', 'Account number')}
                      className="inline-flex items-center gap-1 rounded border border-slate-300 bg-white px-1.5 py-0.5 text-[11px] font-bold text-slate-700 hover:border-[#F97316] hover:text-[#F97316] transition-colors"
                    >
                      {copiedKey === 'acc' ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="py-1 flex items-center justify-between gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                      <span className="text-slate-500 font-medium sm:w-32 shrink-0">
                        IFSC code
                      </span>
                      <span className="font-mono font-bold text-[#ea580c] bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200">
                        {RECKONER_PAY.ifsc}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyInline(RECKONER_PAY.ifsc, 'ifsc', 'IFSC code')}
                      className="inline-flex items-center gap-1 rounded border border-slate-300 bg-white px-1.5 py-0.5 text-[11px] font-bold text-slate-700 hover:border-[#F97316] hover:text-[#F97316] transition-colors"
                    >
                      {copiedKey === 'ifsc' ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="py-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="text-slate-500 font-medium sm:w-32 shrink-0">
                      Branch address
                    </span>
                    <span className="font-medium text-slate-800 text-right sm:text-left">
                      {RECKONER_PAY.branch}
                    </span>
                  </div>
                </div>

                {/* Entered particulars chips */}
                {(reckoner.fullName || reckoner.email || reckoner.phone || reckoner.paperId) && (
                  <div className="mt-1.5 pt-1.5 border-t border-slate-200/80 flex flex-wrap gap-1">
                    {reckoner.fullName && (
                      <span className="inline-flex items-center rounded bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-700 border border-slate-200">
                        <span className="text-slate-400 mr-1 font-semibold">Name:</span>{' '}
                        {reckoner.fullName}
                      </span>
                    )}
                    {reckoner.email && (
                      <span className="inline-flex items-center rounded bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-700 border border-slate-200">
                        <span className="text-slate-400 mr-1 font-semibold">Email:</span>{' '}
                        {reckoner.email}
                      </span>
                    )}
                    {reckoner.phone && (
                      <span className="inline-flex items-center rounded bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-700 border border-slate-200">
                        <span className="text-slate-400 mr-1 font-semibold">Phone:</span>{' '}
                        {reckoner.phone}
                      </span>
                    )}
                    {reckoner.category !== 'listener' && reckoner.paperId && (
                      <span className="inline-flex items-center rounded bg-orange-50 px-1.5 py-0.5 text-[10px] font-bold text-[#ea580c] border border-orange-200">
                        <span className="text-orange-400 mr-1 font-semibold">Paper ID:</span>{' '}
                        {reckoner.paperId}
                      </span>
                    )}
                  </div>
                )}

                {/* Publisher Approval Disclaimer Note */}
                <p className="mt-auto pt-1 text-[10px] text-slate-500 border-t border-slate-200/60 leading-tight">
                  * Scopus indexing is not guaranteed and depends on publisher approval. Fees per the conference brochure.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── MODAL FALLBACK FOR REGISTRATION FORM ── */}
      {isRegistrationFormOpen && !registrationFormUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsRegistrationFormOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base font-bold text-[#17213a]">Registration Form</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              The official Google Registration Form will be provided upon paper acceptance notifications. You may remit the fee and retain your payment reference / UTR number in advance using the Payment Reckoner above.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsRegistrationFormOpen(false)}
                className="bg-[#F97316] hover:bg-[#ea580c] text-white px-4 py-2 text-sm font-bold rounded-lg transition-colors"
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
