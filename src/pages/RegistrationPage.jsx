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
} from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

/*
  ICRAIIQ2IT 2027 — Conference Registration

  Redesigned to match the supplied reference screenshots.

  Layout:
  1. Conference Registration heading + registration-form CTA
  2. Registration explanation
  3. Quick navigation pills
  4. Two-column registration workspace
     - Quick Steps sidebar
     - Two-step Registration panel
  5. Registration notes / publication options
  6. Fees, bank details and organizer statement sections

  Visual direction:
  - White academic layout
  - Pink #F97316 brand
  - Dark navy body text
  - Thin black/silver borders matching the reference
  - No ScientificBackground
  - No dark futuristic dashboard styling
*/

const DEFAULT_BANK_DETAILS = {
  accountName: 'The Principal, Dr RVR NRI Institute of Technology (Deemed to be University), Agiripalli',
  bankName: 'BANK OF BARODA',
  accountNumber: 'Available upon submission / invoice request',
  ifsc: 'BARB0AGIRIP',
  branch: 'Agiripalli / Pothavarappadu',
};

const DEFAULT_FEES = [
  {
    category: 'Conference Registration Fee (Base Participation)',
    indian: '₹ 3,500',
    international: '$ 75 USD',
  },
  {
    category: 'Ph.D Scholars, PG / UG Students (Publication Fee)',
    indian: '₹ 6,500',
    international: '150 USD',
  },
  {
    category: 'Academicians / Faculty Members (Publication Fee)',
    indian: '₹ 7,500',
    international: '150 USD',
  },
  {
    category: 'Industry Professionals (Publication Fee)',
    indian: '₹ 10,000',
    international: '150 USD',
  },
  {
    category: 'International Participants (Publication Fee)',
    indian: '₹ 12,500',
    international: '150 USD',
  },
];

const DEFAULT_NOTES = [
  'Faculty members, research scholars, postgraduate students from AICTE-approved institutions, and industry professionals are eligible to apply.',
  'Conference Registration Fee: ₹ 3,500. Publication Fee: Students/Scholars ₹ 6,500, Academicians ₹ 7,500, Industry Professionals ₹ 10,000, International $150 USD.',
  'The conference proceedings shall be published in Taylor & Francis / American Institute of Physics (AIP) / Springer group / Elsevier / EasyChair subject to approval and confirmation.',
  'All accepted papers will be compiled into the official conference proceedings and will have Scopus indexation.',
  'Mode of Conference: Blended (Online & In-Person).',
  'All participants will be issued a Participation Certificate. Paper presenters will receive a Paper Presentation cum Publication Certificate.'
];

const DEFAULT_ORGANIZER_STATEMENT =
  'Faculty members, research scholars, postgraduate students from AICTE-approved institutions, and industry professionals are eligible to participate. All accepted and presented papers will be published in official proceedings with Scopus indexation.';

const getValue = (value, fallback) =>
  value === undefined || value === null || value === '' ? fallback : value;

const getArray = (value, fallback) =>
  Array.isArray(value) && value.length ? value : fallback;

function SectionHeading({ children }) {
  return (
    <h2 className="text-[22px] font-medium leading-tight text-[#F97316] sm:text-[23px]">
      {children}
    </h2>
  );
}

function QuickStepButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-md px-3.5 py-3.5 text-left text-[16px] transition-all duration-200 ${active
          ? 'border border-[#FB923C] bg-[#FFF7ED] text-[#F97316]'
          : 'border border-transparent bg-white text-[#17213a] hover:border-orange-100 hover:bg-orange-50'
        }`}
    >
      {children}
    </button>
  );
}

function RegistrationStepCard({
  title,
  children,
  className = '',
}) {
  return (
    <div
      className={`rounded-md border border-[#111827] bg-[#FFFBF8] p-4 sm:p-4.5 ${className}`}
    >
      <h3 className="text-[18px] font-normal text-[#405777]">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-xl border border-orange-100 bg-white p-6 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-orange-100 text-slate-600 transition-colors hover:border-[#F97316] hover:text-[#F97316]"
        >
          <X className="h-4 w-4" />
        </button>

        <h2 className="pr-10 text-2xl font-semibold text-[#F97316]">
          {title}
        </h2>

        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}

export const RegistrationPage = () => {
  const [activeSection, setActiveSection] = useState('quick');
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] =
    useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  const data = conferenceData || {};
  const organizer = data.organizer || {};

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
  };

  const fees = getArray(
    data.registrationFees || data.registrationTiers,
    DEFAULT_FEES
  );

  const notes = getArray(
    data.registrationNotes,
    DEFAULT_NOTES
  );

  const organizerStatement = getValue(
    data.organizerStatement,
    DEFAULT_ORGANIZER_STATEMENT
  );

  const conferenceTitle = getValue(
    data.shortTitle || data.title,
    'ICRAIQ2IT - 2027'
  );

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
    if (!bankDetails.accountNumber) {
      setCopyStatus('Account number not configured');
      window.setTimeout(() => setCopyStatus(''), 2200);
      return;
    }

    try {
      await navigator.clipboard.writeText(bankDetails.accountNumber);
      setCopyStatus('Account number copied');
    } catch {
      setCopyStatus('Copy unavailable');
    }

    window.setTimeout(() => setCopyStatus(''), 2200);
  };

  const scrollToSection = (id) => {
    setActiveSection(id);

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
          PAGE INTRODUCTION
         ========================================================= */}
      <section className="bg-white px-5 pb-7 pt-8 sm:px-8 lg:px-10 lg:pt-10">
        <div className="mx-auto max-w-[1540px]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[1050px]">
              <h1 className="text-[34px] font-extrabold leading-tight tracking-[-0.025em] text-[#F97316] sm:text-[38px]">
                Conference Registration
              </h1>

              <p className="mt-2 text-[17px] leading-7 text-[#173c69] sm:text-[18px]">
                The authors must agree that if the paper is accepted for
                oral/ poster presentation, at least one of the authors
                will register for the conference and present the paper
                at conference venue by completing the two step
                registration process as mentioned below. Co–authors and
                other persons intending to attend the conference can
                register as Listeners (Attendee)
              </p>
            </div>

            <button
              type="button"
              onClick={openRegistrationForm}
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-[#F97316] px-4 py-3 text-[17px] font-medium text-white transition-all hover:bg-[#EA580C] hover:shadow-lg"
            >
              Open Registration Form
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>

          {/* Quick action pills */}
          <div className="mt-4 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => scrollToSection('registration-process')}
              className="rounded-full border border-[#FB923C] px-3 py-1.5 text-[14px] text-[#F97316] transition-colors hover:bg-[#FFF7ED]"
            >
              Step 1 — Pay
            </button>

            <button
              type="button"
              onClick={openRegistrationForm}
              className="rounded-full border border-[#FB923C] px-3 py-1.5 text-[14px] text-[#F97316] transition-colors hover:bg-[#FFF7ED]"
            >
              Step 2 — Fill form
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('fees')}
              className="rounded-full border border-[#FB923C] px-3 py-1.5 text-[14px] text-[#F97316] transition-colors hover:bg-[#FFF7ED]"
            >
              Scopus publication option
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN REGISTRATION WORKSPACE
         ========================================================= */}
      <section className="px-5 pb-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[318px_minmax(0,1fr)]">
            {/* -------------------------------------------------
                LEFT QUICK NAVIGATION
               ------------------------------------------------- */}
            <aside className="rounded-lg border border-[#111827] bg-white p-2.5 lg:sticky lg:top-6">
              <QuickStepButton
                active={activeSection === 'quick'}
                onClick={() => scrollToSection('registration-process')}
              >
                Quick Steps
              </QuickStepButton>

              <QuickStepButton
                active={activeSection === 'fees'}
                onClick={() => scrollToSection('fees')}
              >
                Fees (Compact)
              </QuickStepButton>

              <QuickStepButton
                active={activeSection === 'bank'}
                onClick={() => scrollToSection('bank')}
              >
                Bank Details
              </QuickStepButton>

              <QuickStepButton
                active={activeSection === 'organizer'}
                onClick={() => scrollToSection('organizer')}
              >
                Organizer Statement
              </QuickStepButton>
            </aside>

            {/* -------------------------------------------------
                RIGHT REGISTRATION PANEL
               ------------------------------------------------- */}
            <div
              id="registration-process"
              className="scroll-mt-6 rounded-lg border border-[#111827] bg-white p-5 sm:p-6"
            >
              <SectionHeading>
                Two-step Registration (compact)
              </SectionHeading>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* STEP 1 */}
                <RegistrationStepCard title="Step 1 — Fee Submission">
                  <p className="text-[18px] font-semibold leading-7 text-black">
                    {bankDetails.accountName}
                  </p>

                  <p className="mt-1 text-[17px] text-[#405777]">
                    Bank: {bankDetails.bankName}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveSection('bank');
                        setIsBankModalOpen(true);
                      }}
                      className="rounded-md border border-[#FB923C] px-3 py-2 text-[16px] text-[#F97316] transition-colors hover:bg-[#FFF7ED]"
                    >
                      View/Copy Bank Details
                    </button>

                    <button
                      type="button"
                      onClick={copyAccount}
                      className="rounded-md border border-[#111827] px-3 py-2 text-[16px] text-[#111827] transition-colors hover:bg-orange-50"
                    >
                      Copy Account
                    </button>
                  </div>

                  <p className="mt-3 text-[16px] leading-6 text-[#405777]">
                    Keep payment UTR/receipt for the form.
                  </p>

                  {copyStatus && (
                    <div className="mt-2 text-xs font-medium text-[#F97316]">
                      {copyStatus}
                    </div>
                  )}
                </RegistrationStepCard>

                {/* STEP 2 */}
                <RegistrationStepCard title="Step 2 — Fill Form">
                  <button
                    type="button"
                    onClick={openRegistrationForm}
                    className="inline-flex items-center gap-2 rounded-md bg-[#F97316] px-3.5 py-2 text-[16px] font-medium text-white transition-colors hover:bg-[#EA580C]"
                  >
                    Open Registration Form
                    <ExternalLink className="h-4 w-4" />
                  </button>

                  <p className="mt-3 text-[17px] leading-7 text-[#405777]">
                    Upload UTR/transaction reference in the form
                    where requested.
                  </p>
                </RegistrationStepCard>
              </div>

              <div className="mt-5 space-y-3 text-[17px] leading-7 text-[#173c69]">
                <p>
                  * At least one author must register &amp; present the
                  paper at the venue.
                </p>

                <p>
                  * No modification in paper after final submission
                  date.
                </p>

                <p>
                  * Publication options: Scopus indexed proceedings
                  (publication fee) or Online Proceedings with ISBN
                  (non-Scopus).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEES
         ========================================================= */}
      <section
        id="fees"
        className="scroll-mt-6 border-t border-orange-100 bg-[#FFFBF8] px-5 py-12 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-[1540px]">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F97316] text-white">
              <CreditCard className="h-5 w-5" />
            </div>

            <div>
              <SectionHeading>Registration Fees</SectionHeading>
              <p className="mt-1 text-sm text-slate-500">
                Compact registration tariff structure for conference
                delegates.
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto rounded-lg border border-orange-100 bg-white">
            <table className="min-w-[700px] w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#FFF7ED] text-[#F97316]">
                  <th className="border-b border-orange-100 px-5 py-4 text-sm font-bold">
                    Delegate Category
                  </th>
                  <th className="border-b border-orange-100 px-5 py-4 text-sm font-bold">
                    Indian Delegates
                  </th>
                  <th className="border-b border-orange-100 px-5 py-4 text-sm font-bold">
                    International Delegates
                  </th>
                </tr>
              </thead>

              <tbody>
                {fees.map((fee, index) => {
                  const category =
                    fee.category || fee.title || fee.name || 'Delegate';

                  const indian =
                    fee.indian ||
                    fee.feeIndianEarly ||
                    fee.feeIndianRegular ||
                    'To be announced';

                  const international =
                    fee.international ||
                    fee.foreign ||
                    fee.feeForeignEarly ||
                    fee.feeForeignRegular ||
                    'To be announced';

                  return (
                    <tr
                      key={`${category}-${index}`}
                      className="border-b border-orange-100 last:border-b-0"
                    >
                      <td className="px-5 py-4 text-sm font-medium text-[#17213a]">
                        {category}
                      </td>
                      <td className="px-5 py-4 text-sm text-[#405777]">
                        {indian}
                      </td>
                      <td className="px-5 py-4 text-sm text-[#405777]">
                        {international}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================
          BANK DETAILS
         ========================================================= */}
      <section
        id="bank"
        className="scroll-mt-6 bg-white px-5 py-12 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-[1540px]">
          <div className="rounded-lg border border-[#111827] bg-white p-5 sm:p-7">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FFF7ED] text-[#F97316]">
                    <CreditCard className="h-5 w-5" />
                  </div>

                  <SectionHeading>Bank Details</SectionHeading>
                </div>

                <div className="mt-5 space-y-2 text-[16px] leading-7 text-[#405777]">
                  <p>
                    <strong className="text-[#17213a]">
                      Account Name:
                    </strong>{' '}
                    {bankDetails.accountName}
                  </p>

                  <p>
                    <strong className="text-[#17213a]">
                      Bank:
                    </strong>{' '}
                    {bankDetails.bankName}
                  </p>

                  {bankDetails.branch && (
                    <p>
                      <strong className="text-[#17213a]">
                        Branch:
                      </strong>{' '}
                      {bankDetails.branch}
                    </p>
                  )}

                  {bankDetails.accountNumber && (
                    <p>
                      <strong className="text-[#17213a]">
                        Account Number:
                      </strong>{' '}
                      {bankDetails.accountNumber}
                    </p>
                  )}

                  {bankDetails.ifsc && (
                    <p>
                      <strong className="text-[#17213a]">
                        IFSC:
                      </strong>{' '}
                      {bankDetails.ifsc}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setIsBankModalOpen(true)}
                  className="rounded-md border border-[#FB923C] px-4 py-2.5 text-sm font-medium text-[#F97316] hover:bg-[#FFF7ED]"
                >
                  View Full Bank Details
                </button>

                <button
                  type="button"
                  onClick={copyAccount}
                  className="inline-flex items-center gap-2 rounded-md border border-[#111827] px-4 py-2.5 text-sm font-medium text-[#111827] hover:bg-orange-50"
                >
                  <Copy className="h-4 w-4" />
                  Copy Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ORGANIZER STATEMENT
         ========================================================= */}
      <section
        id="organizer"
        className="scroll-mt-6 border-t border-orange-100 bg-[#FFFBF8] px-5 py-12 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-[1540px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-orange-100 bg-white p-6">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-[#F97316]" />
                <SectionHeading>Organizer Statement</SectionHeading>
              </div>

              <p className="mt-5 text-[16px] leading-7 text-[#405777]">
                {organizerStatement}
              </p>
            </div>

            <div className="rounded-lg border border-orange-100 bg-white p-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[#F97316]" />
                <SectionHeading>Registration Requirements</SectionHeading>
              </div>

              <ul className="mt-5 space-y-3 text-[16px] leading-7 text-[#405777]">
                {notes.map((note, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#F97316]" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BANK MODAL
         ========================================================= */}
      {isBankModalOpen && (
        <Modal
          title="Bank Details"
          onClose={() => setIsBankModalOpen(false)}
        >
          <div className="space-y-3 text-[15px] leading-7 text-[#405777]">
            <div>
              <strong className="text-[#17213a]">
                Account Name:
              </strong>
              <div>{bankDetails.accountName}</div>
            </div>

            <div>
              <strong className="text-[#17213a]">
                Bank:
              </strong>
              <div>{bankDetails.bankName}</div>
            </div>

            {bankDetails.branch && (
              <div>
                <strong className="text-[#17213a]">
                  Branch:
                </strong>
                <div>{bankDetails.branch}</div>
              </div>
            )}

            {bankDetails.accountNumber ? (
              <div>
                <strong className="text-[#17213a]">
                  Account Number:
                </strong>
                <div className="break-all">
                  {bankDetails.accountNumber}
                </div>
              </div>
            ) : (
              <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
                Account number has not yet been configured in
                <code className="mx-1">conferenceData</code>.
              </div>
            )}

            {bankDetails.ifsc && (
              <div>
                <strong className="text-[#17213a]">
                  IFSC:
                </strong>
                <div>{bankDetails.ifsc}</div>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={copyAccount}
              className="inline-flex items-center gap-2 rounded-md bg-[#F97316] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#EA580C]"
            >
              <Copy className="h-4 w-4" />
              Copy Account Number
            </button>

            <button
              type="button"
              onClick={() => setIsBankModalOpen(false)}
              className="rounded-md border border-orange-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-orange-50"
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
          title="Registration Form"
          onClose={() => setIsRegistrationFormOpen(false)}
        >
          <div className="rounded-lg border border-orange-100 bg-slate-50 p-5">
            <p className="text-[15px] leading-7 text-[#405777]">
              The registration form link has not yet been configured.
              Add
              <code className="mx-1 rounded bg-white px-1.5 py-0.5">
                registrationFormUrl
              </code>
              to
              <code className="mx-1 rounded bg-white px-1.5 py-0.5">
                conferenceData
              </code>
              to connect the button to your official registration form.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsRegistrationFormOpen(false)}
            className="mt-5 rounded-md bg-[#F97316] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#EA580C]"
          >
            Close
          </button>
        </Modal>
      )}
    </main>
  );
};

export default RegistrationPage;
