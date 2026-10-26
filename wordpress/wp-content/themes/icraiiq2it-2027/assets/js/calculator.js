/**
 * Registration Fee Reckoner & Clipboard Helpers
 *
 * @package ICRAIIQ2IT_2027
 */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        // Clipboard helper for all pages
        document.querySelectorAll('[data-copy]').forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                var text = btn.getAttribute('data-copy');
                if (!text) return;

                navigator.clipboard.writeText(text).then(function () {
                    var originalHTML = btn.innerHTML;
                    btn.classList.add('text-green-600');
                    btn.innerHTML = '<svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
                    setTimeout(function () {
                        btn.innerHTML = originalHTML;
                        btn.classList.remove('text-green-600');
                    }, 2000);
                });
            });
        });

        // Registration Reckoner Calculator
        var calcForm = document.getElementById('registration-reckoner-form');
        if (!calcForm) return;

        var data = window.icraiiq2itData || {};
        var fees = data.fees || {};
        var bank = data.bank || {};

        var categoryNames = {
            student: 'Student / Research Scholar',
            academic: 'Academician',
            industry: 'Industry Professional',
            listener: 'Attendee / Listener (no paper)'
        };

        function calculateTotal() {
            var region = calcForm.querySelector('input[name="calc_region"]:checked').value; // 'in' or 'int'
            var delegateType = calcForm.querySelector('input[name="calc_type"]:checked').value; // 'author' or 'listener'
            var extraPagesInput = document.getElementById('calc_extra_pages');
            var extraPages = parseInt(extraPagesInput ? extraPagesInput.value : 0, 10) || 0;
            if (extraPages < 0) extraPages = 0;

            var currency = region === 'in' ? '₹' : '$';
            var lines = [];
            var total = 0;
            var catLabel = '';

            // Handle author vs listener
            var authorSection = document.getElementById('calc-author-options');
            if (delegateType === 'listener') {
                if (authorSection) authorSection.classList.add('hidden');
                catLabel = categoryNames.listener;
                var listenerFee = parseInt(fees[region + '_listener'] || (region === 'in' ? 2000 : 50), 10);
                total += listenerFee;
                lines.push(['Attendee Registration Fee', currency + ' ' + listenerFee.toLocaleString()]);
            } else {
                if (authorSection) authorSection.classList.remove('hidden');
                var catRadio = calcForm.querySelector('input[name="calc_category"]:checked');
                var catKey = catRadio ? catRadio.value : 'student';
                catLabel = categoryNames[catKey] || 'Author';

                var baseFee = parseInt(fees[region + '_' + catKey] || (region === 'in' ? 3000 : 75), 10);
                total += baseFee;
                lines.push([catLabel + ' Base Registration', currency + ' ' + baseFee.toLocaleString()]);

                // Proceedings
                var procRadio = calcForm.querySelector('input[name="calc_proceedings"]:checked');
                var procKey = procRadio ? procRadio.value : 'scopus';
                var procFee = parseInt(fees[region + '_' + (procKey === 'scopus' ? 'scopus' : 'non_scopus')] || (region === 'in' ? 6000 : 100), 10);
                total += procFee;
                var procName = procKey === 'scopus' ? 'Scopus Indexed Proceedings' : 'Non-Scopus Proceedings with ISBN & DOI';
                lines.push([procName, currency + ' ' + procFee.toLocaleString()]);

                // Extra Pages
                if (extraPages > 0) {
                    var pageRate = parseInt(fees[region + '_extra_page'] || (region === 'in' ? 1500 : 20), 10);
                    var extraCost = extraPages * pageRate;
                    total += extraCost;
                    lines.push(['Extra Pages (' + extraPages + ' pages beyond 6)', currency + ' ' + extraCost.toLocaleString()]);
                }
            }

            // Update UI elements
            var totalEl = document.getElementById('calc-total-display');
            if (totalEl) totalEl.textContent = currency + ' ' + total.toLocaleString();

            var linesEl = document.getElementById('calc-lines-display');
            if (linesEl) {
                linesEl.innerHTML = '';
                lines.forEach(function (l) {
                    var row = document.createElement('div');
                    row.className = 'flex justify-between text-xs py-1 text-slate-600 border-b border-slate-100 last:border-0';
                    row.innerHTML = '<span>' + l[0] + '</span><span class="font-bold text-slate-900">' + l[1] + '</span>';
                    linesEl.appendChild(row);
                });
            }

            return {
                region: region,
                delegateType: delegateType,
                catLabel: catLabel,
                currency: currency,
                lines: lines,
                totalFormatted: currency + ' ' + total.toLocaleString(),
                totalNumber: total
            };
        }

        calcForm.addEventListener('change', calculateTotal);
        var extraPagesInput = document.getElementById('calc_extra_pages');
        if (extraPagesInput) extraPagesInput.addEventListener('input', calculateTotal);
        var currentCalc = calculateTotal();

        // Download Payment Request PDF
        var downloadPdfBtn = document.getElementById('download-payment-pdf-btn');
        if (downloadPdfBtn) {
            downloadPdfBtn.addEventListener('click', function () {
                var calc = calculateTotal();
                var name = (document.getElementById('calc_name') || {}).value || '';
                var email = (document.getElementById('calc_email') || {}).value || '';
                var phone = (document.getElementById('calc_phone') || {}).value || '';
                var pid = (document.getElementById('calc_paper_id') || {}).value || '';

                var refNumber = 'ICRAIQ2IT-' + Math.floor(100000 + Math.random() * 900000);
                var today = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

                var bankDetails = [
                    ['Bank Name', bank.bank_name || 'Bank of Baroda, Benz Circle Branch'],
                    ['Account Name', bank.account_name || 'The Principal, NRI Institute of Technology'],
                    ['Account Number', bank.account_number || '26360100033044'],
                    ['IFSC / SWIFT', bank.ifsc_code || 'BARB0BENVIJ'],
                    ['Account Type', bank.account_type || 'Savings'],
                    ['Branch Address', bank.branch_address || 'Benz Circle, Vijayawada, Andhra Pradesh']
                ];

                var pdfBlob = window.Icraiiq2itPDF.generate({
                    ref: refNumber,
                    date: today,
                    name: name,
                    email: email,
                    phone: phone,
                    cat: calc.catLabel,
                    showPid: calc.delegateType === 'author',
                    pid: pid,
                    lines: calc.lines,
                    total: calc.totalFormatted,
                    addr: bankDetails
                });

                var url = URL.createObjectURL(pdfBlob);
                var a = document.createElement('a');
                a.href = url;
                a.download = 'ICRAIQ2IT_2027_Payment_Request_' + refNumber + '.pdf';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            });
        }
    });
})();
