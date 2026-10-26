<?php
/**
 * Template Name: Contact the Secretariat
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();

$general = icraiiq2it_get_general_settings();
?>

<main class="min-h-screen bg-white text-[#17213a] antialiased pb-12">
    <!-- Header -->
    <section class="bg-white py-5 sm:py-6">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-3xl font-black uppercase tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px]">
                Contact the <span class="text-[#F97316]">Secretariat</span>
            </h1>
            <div class="mx-auto mt-2 h-1 w-20 rounded-full bg-[#F97316]"></div>
            <p class="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                <?php esc_html_e('Reach out to conference leadership, editorial chairs, and the single point of contact.', 'icraiiq2it-2027'); ?>
            </p>
        </div>
    </section>

    <!-- Content Grid -->
    <section class="px-4 sm:px-6 lg:px-8 py-4">
        <div class="mx-auto max-w-[1240px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Key Contacts Directory (Col 1-7) -->
            <div class="lg:col-span-7 space-y-3">
                <h2 class="text-xl font-bold text-[#17213a] mb-2"><?php esc_html_e('Key Academic Contacts', 'icraiiq2it-2027'); ?></h2>

                <!-- Contact 1: Dr. K. V. Sambasiva Rao -->
                <div class="rounded-xl border border-slate-200 bg-white p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:border-orange-200 transition-colors shadow-xs">
                    <div>
                        <div class="flex flex-wrap items-baseline gap-2">
                            <h3 class="text-base font-bold text-[#17213a]">Dr. K. V. Sambasiva Rao</h3>
                            <span class="text-xs font-semibold text-[#F97316]">Professor &amp; Dean, R &amp; D</span>
                        </div>
                        <p class="text-xs text-slate-500">Dr RVR NRIIT (DTBU)</p>
                        <p class="text-xs text-slate-600 mt-1">
                            <?php esc_html_e('Academic papers, peer review, and publication inquiries.', 'icraiiq2it-2027'); ?>
                        </p>
                    </div>
                    <div class="shrink-0 border-t border-slate-100 pt-2 sm:border-t-0 sm:pt-0">
                        <a href="mailto:kvsrao@nriit.edu.in" class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F97316] hover:underline">
                            <?php echo icraiiq2it_svg('mail', 'w-3.5 h-3.5'); ?>
                            <span>kvsrao@nriit.edu.in</span>
                        </a>
                    </div>
                </div>

                <!-- Contact 2: Dr. D. Sunitha -->
                <div class="rounded-xl border border-slate-200 bg-white p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:border-orange-200 transition-colors shadow-xs">
                    <div>
                        <div class="flex flex-wrap items-baseline gap-2">
                            <h3 class="text-base font-bold text-[#17213a]">Dr. D. Sunitha</h3>
                            <span class="text-xs font-semibold text-[#F97316]">HOD &amp; Dean : School of Computer Studies</span>
                        </div>
                        <p class="text-xs text-slate-500">Dr RVR NRIIT (DTBU)</p>
                        <p class="text-xs text-slate-600 mt-1">
                            <?php esc_html_e('Conference operations, scheduling, and delegate assistance.', 'icraiiq2it-2027'); ?>
                        </p>
                    </div>
                    <div class="shrink-0 border-t border-slate-100 pt-2 sm:border-t-0 sm:pt-0">
                        <a href="mailto:sunitha@nriit.edu.in" class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F97316] hover:underline">
                            <?php echo icraiiq2it_svg('mail', 'w-3.5 h-3.5'); ?>
                            <span>sunitha@nriit.edu.in</span>
                        </a>
                    </div>
                </div>

                <!-- Contact 3: Jithendra (SPOC) -->
                <div class="rounded-xl border border-slate-200 bg-white p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:border-orange-200 transition-colors shadow-xs">
                    <div>
                        <div class="flex flex-wrap items-baseline gap-2">
                            <h3 class="text-base font-bold text-[#17213a]">Jithendra</h3>
                            <span class="text-xs font-semibold text-[#F97316]">SPOC (Single Point of Contact)</span>
                        </div>
                        <p class="text-xs text-slate-500">Dr RVR NRIIT (DTBU)</p>
                        <p class="text-xs text-slate-600 mt-1">
                            <?php esc_html_e('General conference inquiries, registration assistance, and attendee queries.', 'icraiiq2it-2027'); ?>
                        </p>
                    </div>
                    <div class="shrink-0 border-t border-slate-100 pt-2 sm:border-t-0 sm:pt-0 flex flex-col sm:items-end gap-1">
                        <a href="mailto:jithendra@nriit.edu.in" class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F97316] hover:underline">
                            <?php echo icraiiq2it_svg('mail', 'w-3.5 h-3.5'); ?>
                            <span>jithendra@nriit.edu.in</span>
                        </a>
                        <a href="tel:+919440948018" class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#F97316]">
                            <?php echo icraiiq2it_svg('phone', 'w-3.5 h-3.5 text-[#F97316]'); ?>
                            <span>+91 94409 48018</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Online Inquiry Form (Col 8-12) -->
            <div class="lg:col-span-5 rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
                <h3 class="text-lg font-black text-[#1D315F] mb-1">
                    <?php esc_html_e('Send Direct Message', 'icraiiq2it-2027'); ?>
                </h3>
                <p class="text-xs text-slate-500 mb-4">
                    <?php esc_html_e('Inquiries are delivered immediately to the conference secretariat.', 'icraiiq2it-2027'); ?>
                </p>

                <form id="contact-inquiry-form" class="space-y-3">
                    <input type="hidden" name="action" value="icraiiq2it_contact_form">
                    <input type="hidden" name="nonce" value="<?php echo esc_attr(wp_create_nonce('icraiiq2it_nonce')); ?>">
                    
                    <!-- Honeypot -->
                    <div style="display:none !important;">
                        <input type="text" name="contact_honey" tabindex="-1" autocomplete="off">
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-700 uppercase mb-1" for="c_name"><?php esc_html_e('Full Name', 'icraiiq2it-2027'); ?></label>
                        <input type="text" id="c_name" name="name" required class="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:border-orange-500 outline-none">
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-700 uppercase mb-1" for="c_email"><?php esc_html_e('Email Address', 'icraiiq2it-2027'); ?></label>
                        <input type="email" id="c_email" name="email" required class="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:border-orange-500 outline-none">
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-700 uppercase mb-1" for="c_subject"><?php esc_html_e('Subject / Inquired Topic', 'icraiiq2it-2027'); ?></label>
                        <input type="text" id="c_subject" name="subject" placeholder="Registration, Paper, Accommodation..." class="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:border-orange-500 outline-none">
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-700 uppercase mb-1" for="c_message"><?php esc_html_e('Message', 'icraiiq2it-2027'); ?></label>
                        <textarea id="c_message" name="message" rows="4" required class="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:border-orange-500 outline-none"></textarea>
                    </div>

                    <div id="contact-feedback" class="hidden p-3 rounded-lg text-xs"></div>

                    <button 
                        type="submit" 
                        id="contact-submit-btn" 
                        class="w-full py-2.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                    >
                        <?php esc_html_e('Send Message to Secretariat', 'icraiiq2it-2027'); ?>
                    </button>
                </form>
            </div>

        </div>
    </section>
</main>

<script>
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-inquiry-form');
    var btn = document.getElementById('contact-submit-btn');
    var feedback = document.getElementById('contact-feedback');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            btn.disabled = true;
            btn.textContent = 'Sending...';
            feedback.className = 'hidden';

            var formData = new FormData(form);
            var ajaxUrl = (window.icraiiq2itData && window.icraiiq2itData.ajaxUrl) ? window.icraiiq2itData.ajaxUrl : '/wp-admin/admin-ajax.php';

            fetch(ajaxUrl, {
                method: 'POST',
                body: formData
            })
            .then(function (res) { return res.json(); })
            .then(function (res) {
                btn.disabled = false;
                btn.textContent = 'Send Message to Secretariat';
                feedback.classList.remove('hidden');
                if (res.success) {
                    feedback.className = 'p-3 rounded-lg text-xs bg-green-50 text-green-800 border border-green-200';
                    feedback.textContent = res.data.message;
                    form.reset();
                } else {
                    feedback.className = 'p-3 rounded-lg text-xs bg-red-50 text-red-800 border border-red-200';
                    feedback.textContent = (res.data && res.data.message) ? res.data.message : 'Error sending message.';
                }
            })
            .catch(function () {
                btn.disabled = false;
                btn.textContent = 'Send Message to Secretariat';
                feedback.className = 'p-3 rounded-lg text-xs bg-red-50 text-red-800 border border-red-200';
                feedback.textContent = 'Network error. Please try emailing directly.';
            });
        });
    }
});
</script>

<?php
get_footer();
