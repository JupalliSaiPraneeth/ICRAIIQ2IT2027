/**
 * Pure Client-Side PDF Stream Generator
 * Reimplemented from RegistrationPage.jsx (Zero external library dependencies)
 *
 * @package ICRAIIQ2IT_2027
 */

(function () {
    'use strict';

    function pdfEsc(text) {
        return String(text || '')
            .replace(/[^\x20-\xFF]/g, '?')
            .replace(/\\/g, '\\\\')
            .replace(/\(/g, '\\(')
            .replace(/\)/g, '\\)');
    }

    function wrapText(text, maxChars) {
        var words = String(text || '').split(' ');
        var out = [];
        var current = '';
        words.forEach(function (w) {
            if ((current + ' ' + w).trim().length > maxChars) {
                out.push(current);
                current = w;
            } else {
                current = (current + ' ' + w).trim();
            }
        });
        if (current) out.push(current);
        return out;
    }

    function createPaymentRequestPDF(d) {
        var y = 790;
        var ops = ['0.5 w 0.8 G'];

        function addText(s, x, size, bold) {
            ops.push('BT /' + (bold ? 'F2' : 'F1') + ' ' + size + ' Tf ' + x + ' ' + y + ' Td (' + pdfEsc(s) + ') Tj ET');
        }

        function addRule() {
            ops.push('40 ' + y + ' m 555 ' + y + ' l S');
        }

        function addRow(l, v, bold) {
            addText(l, 40, 11, false);
            var wrapped = wrapText(v, 52);
            wrapped.forEach(function (line) {
                addText(line, 200, 11, bold);
                y -= 16;
            });
            if (!wrapped.length) y -= 16;
        }

        // Header
        addText('ICRAIQ2IT-2027 - Payment Request', 40, 18, true);
        y -= 18;
        addText('5th International Conference | 09-10 April 2027 | Vijayawada, India', 40, 10, false);
        y -= 12;
        addRule();
        y -= 24;

        // Details
        addRow('Reference', d.ref, true);
        addRow('Date', d.date, false);
        if (d.name) addRow('Name', d.name, false);
        if (d.email) addRow('Email', d.email, false);
        if (d.phone) addRow('Phone', d.phone, false);
        addRow('Category', d.cat, false);
        if (d.showPid) addRow('Paper ID', d.pid || 'Not provided', true);

        y -= 8;
        addText('Fee details', 40, 13, true);
        y -= 6;
        addRule();
        y -= 20;

        d.lines.forEach(function (line) {
            addText(line[0], 40, 11, false);
            addText(line[1], 440, 11, false);
            y -= 16;
        });

        addRule();
        y -= 18;
        addText('Total payable', 40, 13, true);
        addText(d.total, 440, 13, true);

        y -= 30;
        addText('Payment address', 40, 13, true);
        y -= 6;
        addRule();
        y -= 20;

        d.addr.forEach(function (r) {
            addRow(r[0], r[1], true);
        });

        var content = ops.join('\n');
        var objs = [
            '<</Type/Catalog/Pages 2 0 R>>',
            '<</Type/Pages/Kids[3 0 R]/Count 1>>',
            '<</Type/Page/Parent 2 0 R/MediaBox[0 0 595 842]/Resources<</Font<</F1 4 0 R/F2 5 0 R>>>>/Contents 6 0 R>>',
            '<</Type/Font/Subtype/Type1/BaseFont/Helvetica/Encoding/WinAnsiEncoding>>',
            '<</Type/Font/Subtype/Type1/BaseFont/Helvetica-Bold/Encoding/WinAnsiEncoding>>',
            '<</Length ' + content.length + '>>\nstream\n' + content + '\nendstream'
        ];

        var pdf = '%PDF-1.4\n';
        var off = [];
        objs.forEach(function (o, i) {
            off.push(pdf.length);
            pdf += (i + 1) + ' 0 obj\n' + o + '\nendobj\n';
        });

        var xr = pdf.length;
        pdf += 'xref\n0 ' + (objs.length + 1) + '\n0000000000 65535 f \n' +
            off.map(function (n) {
                return String(n).padStart(10, '0') + ' 00000 n \n';
            }).join('') +
            'trailer\n<</Size ' + (objs.length + 1) + '/Root 1 0 R>>\nstartxref\n' + xr + '\n%%EOF';

        return new Blob([Uint8Array.from(pdf, function (c) { return c.charCodeAt(0) & 255; })], {
            type: 'application/pdf'
        });
    }

    window.Icraiiq2itPDF = {
        generate: createPaymentRequestPDF
    };
})();
