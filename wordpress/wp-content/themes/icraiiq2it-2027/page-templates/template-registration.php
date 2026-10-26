<?php
/**
 * Template Name: Registration
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();

$fees = icraiiq2it_get_fee_settings();
$bank = icraiiq2it_get_bank_settings();
$general = icraiiq2it_get_general_settings();
?>

<main class="min-h-screen bg-white text-[#17213a] antialiased pb-12">
    <!-- Header -->
    <section class="bg-white py-5 sm:py-6">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-3xl font-black uppercase tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px]">
                Registration <span class="text-[#F97316]">Guidelines &amp; Fees</span>
            </h1>
            <div class="mx-auto mt-2 h-1 w-24 rounded-full bg-[#F97316]"></div>
            <p class="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                <?php esc_html_e('Review author and attendee fee tiers, calculate registration charges, and generate payment requests.', 'icraiiq2it-2027'); ?>
            </p>
        </div>
    </section>

    <!-- Fee Schedule Tables -->
    <section class="px-4 sm:px-6 lg:px-8 py-4">
        <div class="mx-auto max-w-[1240px]">
            <div class="mb-4">
                <h2 class="text-xl sm:text-2xl font-black text-[#1D315F]">
                    <?php esc_html_e('Official Fee Schedule', 'icraiiq2it-2027'); ?>
                </h2>
            </div>

            <div class="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                <table class="w-full text-left text-xs sm:text-sm">
                    <thead class="bg-slate-50 border-b border-slate-200 text-slate-700 font-extrabold uppercase text-[11px] sm:text-xs">
                        <tr>
                            <th class="p-3 sm:p-4"><?php esc_html_e('Category', 'icraiiq2it-2027'); ?></th>
                            <th class="p-3 sm:p-4 text-center"><?php esc_html_e('India (Author)', 'icraiiq2it-2027'); ?></th>
                            <th class="p-3 sm:p-4 text-center"><?php esc_html_e('India (Listener)', 'icraiiq2it-2027'); ?></th>
                            <th class="p-3 sm:p-4 text-center"><?php esc_html_e('International (Author)', 'icraiiq2it-2027'); ?></th>
                            <th class="p-3 sm:p-4 text-center"><?php esc_html_e('International (Listener)', 'icraiiq2it-2027'); ?></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 text-slate-700">
                        <tr class="hover:bg-slate-50/50">
                            <td class="p-3 sm:p-4 font-semibold text-[#1D315F]"><?php esc_html_e('Students / Research Scholars', 'icraiiq2it-2027'); ?></td>
                            <td class="p-3 sm:p-4 text-center font-bold">₹ <?php echo esc_html(number_format_i18n($fees['in_student'])); ?></td>
                            <td class="p-3 sm:p-4 text-center font-bold">₹ <?php echo esc_html(number_format_i18n($fees['in_student'])); ?></td>
                            <td class="p-3 sm:p-4 text-center font-bold">$<?php echo esc_html($fees['int_student']); ?></td>
                            <td class="p-3 sm:p-4 text-center font-bold">$<?php echo esc_html($fees['int_student']); ?></td>
                        </tr>
                        <tr class="hover:bg-slate-50/50">
                            <td class="p-3 sm:p-4 font-semibold text-[#1D315F]"><?php esc_html_e('Academicians / Faculty', 'icraiiq2it-2027'); ?></td>
                            <td class="p-3 sm:p-4 text-center font-bold">₹ <?php echo esc_html(number_format_i18n($fees['in_academic'])); ?></td>
                            <td class="p-3 sm:p-4 text-center font-bold">₹ <?php echo esc_html(number_format_i18n($fees['in_academic'])); ?></td>
                            <td class="p-3 sm:p-4 text-center font-bold">$<?php echo esc_html($fees['int_academic']); ?></td>
                            <td class="p-3 sm:p-4 text-center font-bold">$<?php echo esc_html($fees['int_academic']); ?></td>
                        </tr>
                        <tr class="hover:bg-slate-50/50 bg-orange-50/30">
                            <td class="p-3 sm:p-4 font-semibold text-[#1D315F]"><?php esc_html_e('Industry Professionals', 'icraiiq2it-2027'); ?></td>
                            <td class="p-3 sm:p-4 text-center font-bold">₹ <?php echo esc_html(number_format_i18n($fees['in_industry'])); ?></td>
                            <td class="p-3 sm:p-4 text-center font-bold">₹ <?php echo esc_html(number_format_i18n($fees['in_industry'])); ?></td>
                            <td class="p-3 sm:p-4 text-center font-bold">$<?php echo esc_html($fees['int_industry']); ?></td>
                            <td class="p-3 sm:p-4 text-center font-bold">$<?php echo esc_html($fees['int_industry']); ?></td>
                        </tr>
                        <tr class="hover:bg-slate-50/50">
                            <td class="p-3 sm:p-4">
                                <div class="font-semibold text-[#1D315F]"><?php esc_html_e('Scopus Indexed Proceedings', 'icraiiq2it-2027'); ?></div>
                                <div class="text-[11px] text-slate-500">(Taylor &amp; Francis / Springer LNCS / AIP)</div>
                            </td>
                            <td class="p-3 sm:p-4 text-center font-bold text-orange-600">₹ <?php echo esc_html(number_format_i18n($fees['in_scopus'])); ?></td>
                            <td class="p-3 sm:p-4 text-center text-slate-400">–</td>
                            <td class="p-3 sm:p-4 text-center font-bold text-orange-600">$<?php echo esc_html($fees['int_scopus']); ?></td>
                            <td class="p-3 sm:p-4 text-center text-slate-400">–</td>
                        </tr>
                        <tr class="hover:bg-slate-50/50">
                            <td class="p-3 sm:p-4">
                                <div class="font-semibold text-[#1D315F]"><?php esc_html_e('Non-Scopus Proceedings with ISBN & DOI', 'icraiiq2it-2027'); ?></div>
                                <div class="text-[11px] text-slate-500">(Indexed by Google Scholar)</div>
                            </td>
                            <td class="p-3 sm:p-4 text-center font-bold">₹ <?php echo esc_html(number_format_i18n($fees['in_non_scopus'])); ?></td>
                            <td class="p-3 sm:p-4 text-center text-slate-400">–</td>
                            <td class="p-3 sm:p-4 text-center font-bold">$<?php echo esc_html($fees['int_non_scopus']); ?></td>
                            <td class="p-3 sm:p-4 text-center text-slate-400">–</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="text-[11px] text-slate-500 mt-2">
                * <?php esc_html_e('Base manuscript length is 6 pages. Additional pages beyond 6 are billed at ₹1,500/page (India) or $20/page (International).', 'icraiiq2it-2027'); ?>
            </p>
        </div>
    </section>

    <!-- Dynamic Payment Reckoner Calculator & Bank Details -->
    <section class="px-4 sm:px-6 lg:px-8 py-8">
        <div class="mx-auto max-w-[1240px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Calculator Form (Col 1-7) -->
            <div class="lg:col-span-7 rounded-2xl border border-orange-200 bg-white p-5 sm:p-7 shadow-sm">
                <div class="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                    <span class="text-[#F97316]"><?php echo icraiiq2it_svg('sparkles', 'w-5 h-5'); ?></span>
                    <h2 class="text-xl font-black text-[#1D315F]">
                        <?php esc_html_e('Fee Reckoner & PDF Generator', 'icraiiq2it-2027'); ?>
                    </h2>
                </div>

                <form id="registration-reckoner-form" class="space-y-4">
                    <!-- Delegate Origin -->
                    <div>
                        <label class="block text-xs font-bold uppercase text-slate-500 mb-1.5"><?php esc_html_e('Delegate Region', 'icraiiq2it-2027'); ?></label>
                        <div class="grid grid-cols-2 gap-2">
                            <label class="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 cursor-pointer hover:border-orange-400">
                                <input type="radio" name="calc_region" value="in" checked class="text-orange-500 focus:ring-orange-500">
                                <span class="text-xs font-bold text-slate-800"><?php esc_html_e('Indian Delegates (₹ INR)', 'icraiiq2it-2027'); ?></span>
                            </label>
                            <label class="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 cursor-pointer hover:border-orange-400">
                                <input type="radio" name="calc_region" value="int" class="text-orange-500 focus:ring-orange-500">
                                <span class="text-xs font-bold text-slate-800"><?php esc_html_e('International ($ USD)', 'icraiiq2it-2027'); ?></span>
                            </label>
                        </div>
                    </div>

                    <!-- Author vs Listener -->
                    <div>
                        <label class="block text-xs font-bold uppercase text-slate-500 mb-1.5"><?php esc_html_e('Participation Mode', 'icraiiq2it-2027'); ?></label>
                        <div class="grid grid-cols-2 gap-2">
                            <label class="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 cursor-pointer hover:border-orange-400">
                                <input type="radio" name="calc_type" value="author" checked class="text-orange-500 focus:ring-orange-500">
                                <span class="text-xs font-bold text-slate-800"><?php esc_html_e('Author (Presenting Paper)', 'icraiiq2it-2027'); ?></span>
                            </label>
                            <label class="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 cursor-pointer hover:border-orange-400">
                                <input type="radio" name="calc_type" value="listener" class="text-orange-500 focus:ring-orange-500">
                                <span class="text-xs font-bold text-slate-800"><?php esc_html_e('Attendee / Listener Only', 'icraiiq2it-2027'); ?></span>
                            </label>
                        </div>
                    </div>

                    <!-- Author-Specific Options -->
                    <div id="calc-author-options" class="space-y-4">
                        <div>
                            <label class="block text-xs font-bold uppercase text-slate-500 mb-1.5"><?php esc_html_e('Author Category', 'icraiiq2it-2027'); ?></label>
                            <div class="grid grid-cols-3 gap-2">
                                <label class="p-2 rounded-xl border border-slate-200 cursor-pointer text-center hover:border-orange-400">
                                    <input type="radio" name="calc_category" value="student" checked class="sr-only peer">
                                    <span class="block text-xs font-bold text-slate-700 peer-checked:text-[#EA580C]"><?php esc_html_e('Student / PhD', 'icraiiq2it-2027'); ?></span>
                                </label>
                                <label class="p-2 rounded-xl border border-slate-200 cursor-pointer text-center hover:border-orange-400">
                                    <input type="radio" name="calc_category" value="academic" class="sr-only peer">
                                    <span class="block text-xs font-bold text-slate-700 peer-checked:text-[#EA580C]"><?php esc_html_e('Academician', 'icraiiq2it-2027'); ?></span>
                                </label>
                                <label class="p-2 rounded-xl border border-slate-200 cursor-pointer text-center hover:border-orange-400">
                                    <input type="radio" name="calc_category" value="industry" class="sr-only peer">
                                    <span class="block text-xs font-bold text-slate-700 peer-checked:text-[#EA580C]"><?php esc_html_e('Industry', 'icraiiq2it-2027'); ?></span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold uppercase text-slate-500 mb-1.5"><?php esc_html_e('Proceedings Publication Route', 'icraiiq2it-2027'); ?></label>
                            <div class="grid grid-cols-2 gap-2">
                                <label class="p-2.5 rounded-xl border border-slate-200 cursor-pointer hover:border-orange-400">
                                    <input type="radio" name="calc_proceedings" value="scopus" checked class="text-orange-500">
                                    <span class="text-xs font-bold text-slate-800 ml-1.5"><?php esc_html_e('Scopus Proceedings', 'icraiiq2it-2027'); ?></span>
                                </label>
                                <label class="p-2.5 rounded-xl border border-slate-200 cursor-pointer hover:border-orange-400">
                                    <input type="radio" name="calc_proceedings" value="non" class="text-orange-500">
                                    <span class="text-xs font-bold text-slate-800 ml-1.5"><?php esc_html_e('Non-Scopus (ISBN/DOI)', 'icraiiq2it-2027'); ?></span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold uppercase text-slate-500 mb-1" for="calc_extra_pages">
                                <?php esc_html_e('Additional Pages (beyond standard 6 pages)', 'icraiiq2it-2027'); ?>
                            </label>
                            <input 
                                type="number" 
                                id="calc_extra_pages" 
                                min="0" 
                                max="15" 
                                value="0" 
                                class="w-full sm:w-48 px-3 py-2 rounded-xl border border-slate-300 text-sm focus:border-orange-500 outline-none"
                            >
                        </div>
                    </div>

                    <!-- Personal Information for PDF -->
                    <div class="pt-3 border-t border-slate-100">
                        <span class="block text-xs font-bold uppercase text-slate-500 mb-2"><?php esc_html_e('Delegate Details (Printed on PDF Request)', 'icraiiq2it-2027'); ?></span>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input type="text" id="calc_name" placeholder="Full Name" class="px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-orange-500 outline-none">
                            <input type="email" id="calc_email" placeholder="Email Address" class="px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-orange-500 outline-none">
                            <input type="text" id="calc_phone" placeholder="Phone Number" class="px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-orange-500 outline-none">
                            <input type="text" id="calc_paper_id" placeholder="Paper ID (e.g. CMT-104)" class="px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-orange-500 outline-none">
                        </div>
                    </div>
                </form>

                <!-- Calculation Summary Box -->
                <div class="mt-6 rounded-2xl bg-orange-50/70 p-4 border border-orange-200/60">
                    <div id="calc-lines-display" class="space-y-1 mb-3"></div>
                    <div class="flex items-center justify-between border-t border-orange-200 pt-2">
                        <span class="text-sm font-black text-[#1D315F]"><?php esc_html_e('Total Amount Payable:', 'icraiiq2it-2027'); ?></span>
                        <span id="calc-total-display" class="text-2xl font-black text-[#EA580C]"></span>
                    </div>

                    <div class="mt-4">
                        <button 
                            type="button" 
                            id="download-payment-pdf-btn" 
                            class="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#1D315F] to-[#2B468B] hover:bg-[#15254a] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                        >
                            <?php echo icraiiq2it_svg('download', 'w-4 h-4'); ?>
                            <span><?php esc_html_e('Generate Payment Request PDF', 'icraiiq2it-2027'); ?></span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Bank Wire Transfer Details (Col 8-12) -->
            <div class="lg:col-span-5 space-y-6">
                <!-- Bank Info Card -->
                <div class="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
                    <h3 class="text-lg font-black text-[#1D315F] mb-3">
                        <?php esc_html_e('Bank Account & Wire Transfer Details', 'icraiiq2it-2027'); ?>
                    </h3>
                    <p class="text-xs text-slate-600 mb-4 leading-relaxed">
                        <?php esc_html_e('Electronic remittances via NEFT / RTGS / IMPS / Wire Transfer may be made to the official institution account below:', 'icraiiq2it-2027'); ?>
                    </p>

                    <div class="space-y-3 text-xs">
                        <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                            <div>
                                <div class="text-[10px] uppercase font-bold text-slate-400"><?php esc_html_e('Bank Name', 'icraiiq2it-2027'); ?></div>
                                <div class="font-bold text-slate-800"><?php echo esc_html($bank['bank_name']); ?></div>
                            </div>
                        </div>

                        <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                            <div>
                                <div class="text-[10px] uppercase font-bold text-slate-400"><?php esc_html_e('Account Name', 'icraiiq2it-2027'); ?></div>
                                <div class="font-bold text-slate-800"><?php echo esc_html($bank['account_name']); ?></div>
                            </div>
                        </div>

                        <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                            <div>
                                <div class="text-[10px] uppercase font-bold text-slate-400"><?php esc_html_e('Account Number', 'icraiiq2it-2027'); ?></div>
                                <div class="font-mono font-bold text-slate-900 text-sm"><?php echo esc_html($bank['account_number']); ?></div>
                            </div>
                            <button type="button" data-copy="<?php echo esc_attr($bank['account_number']); ?>" class="text-[#F97316] font-bold text-[11px] hover:underline flex items-center gap-1">
                                <?php echo icraiiq2it_svg('copy', 'w-3.5 h-3.5'); ?>
                                <span>Copy</span>
                            </button>
                        </div>

                        <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                            <div>
                                <div class="text-[10px] uppercase font-bold text-slate-400"><?php esc_html_e('IFSC / SWIFT Code', 'icraiiq2it-2027'); ?></div>
                                <div class="font-mono font-bold text-slate-900 text-sm"><?php echo esc_html($bank['ifsc_code']); ?></div>
                            </div>
                            <button type="button" data-copy="<?php echo esc_attr($bank['ifsc_code']); ?>" class="text-[#F97316] font-bold text-[11px] hover:underline flex items-center gap-1">
                                <?php echo icraiiq2it_svg('copy', 'w-3.5 h-3.5'); ?>
                                <span>Copy</span>
                            </button>
                        </div>

                        <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                            <div class="text-[10px] uppercase font-bold text-slate-400"><?php esc_html_e('Branch Address', 'icraiiq2it-2027'); ?></div>
                            <div class="text-slate-700"><?php echo esc_html($bank['branch_address']); ?></div>
                        </div>
                    </div>

                    <!-- Bank QR Asset -->
                    <div class="mt-4 pt-4 border-t border-slate-100 text-center">
                        <div class="text-xs font-bold text-slate-700 mb-2"><?php esc_html_e('Instant UPI / Banking QR', 'icraiiq2it-2027'); ?></div>
                        <img 
                            src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/bank-qr.png'); ?>" 
                            alt="<?php esc_attr_e('Bank QR Code', 'icraiiq2it-2027'); ?>" 
                            class="mx-auto h-36 w-36 object-contain rounded-xl border border-slate-200 p-2 shadow-xs"
                        >
                        <p class="text-[11px] text-slate-500 mt-1"><?php esc_html_e('Scan via BHIM / Google Pay / PhonePe', 'icraiiq2it-2027'); ?></p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</main>

<?php
get_footer();
