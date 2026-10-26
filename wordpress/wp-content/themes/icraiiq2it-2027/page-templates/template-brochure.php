<?php
/**
 * Template Name: Official Brochure
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();

$general = icraiiq2it_get_general_settings();
$brochure_url = !empty($general['brochure_url']) 
    ? $general['brochure_url'] 
    : get_template_directory_uri() . '/assets/docs/brocher/ICRAIQ2IT_2027_Brochure_3pages_updated%20%281%29.pdf';

$features = [
    'Conference overview, vision and objectives',
    'Call for Papers, publication tracks and submission links',
    'Distinguished keynote speakers & steering committee',
    'Registration categories, delegate fee structure and deadlines',
    'Dr RVR NRI Institute of Technology venue, transit & accommodation guide',
];
?>

<main class="min-h-screen bg-white text-slate-900 px-5 py-8 sm:px-8 sm:py-12 lg:px-10">
    <div class="mx-auto max-w-[1280px] space-y-10">
        <!-- Page Header -->
        <div class="text-center space-y-3">
            <div class="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#F97316]">
                <?php echo icraiiq2it_svg('sparkles', 'w-3.5 h-3.5'); ?>
                <span><?php esc_html_e('Official Conference Brochure', 'icraiiq2it-2027'); ?></span>
            </div>

            <h1 class="text-3xl font-extrabold leading-tight text-[#1d315f] sm:text-4xl lg:text-[42px]">
                ICRAIQ2IT - 2027 Information Brochure
            </h1>

            <p class="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                <?php esc_html_e('Access and download the official comprehensive conference brochure for complete information about key dates, submission guidelines, registration fees, and event schedules.', 'icraiiq2it-2027'); ?>
            </p>
        </div>

        <!-- Brochure Card -->
        <div class="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-[0_12px_35px_rgba(249,115,22,0.10)]">
            <div class="grid grid-cols-1 lg:grid-cols-5">
                <!-- Visual Preview Cover -->
                <div class="flex min-h-[340px] items-center justify-center bg-[#FFF7ED] p-8 lg:col-span-2">
                    <div class="w-full max-w-[270px] rounded-2xl border border-orange-100 bg-white p-7 text-center shadow-[0_12px_30px_rgba(249,115,22,0.14)]">
                        <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#EA580C] to-[#F97316] text-white shadow-md">
                            <?php echo icraiiq2it_svg('file-text', 'w-8 h-8'); ?>
                        </div>
                        <div class="mt-5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#F97316]">
                            <?php esc_html_e('Printable Brochure', 'icraiiq2it-2027'); ?>
                        </div>
                        <h2 class="mt-2 text-xl font-extrabold leading-tight text-[#1d315f]">
                            ICRAIQ2IT <span class="text-[#EA580C]">2027</span>
                        </h2>
                        <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F97316]"></div>
                        <p class="mt-4 text-xs leading-5 text-slate-500">
                            5<sup>th</sup> International Conference on Recent Advancements in AI, Quantum Intelligence &amp; Inclusive Technologies
                        </p>
                        <div class="mt-5 inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-[11px] font-bold text-orange-700">
                            <span>PDF Document • 2.4 MB (3 Pages)</span>
                        </div>
                    </div>
                </div>

                <!-- Brochure Information -->
                <div class="space-y-6 p-8 sm:p-10 lg:col-span-3 lg:p-12">
                    <div>
                        <div class="flex items-center gap-3">
                            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#F97316]">
                                <?php echo icraiiq2it_svg('file-text', 'w-5 h-5'); ?>
                            </div>
                            <div>
                                <div class="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                                    <?php esc_html_e('Official Document', 'icraiiq2it-2027'); ?>
                                </div>
                                <h3 class="mt-0.5 text-2xl font-extrabold text-[#1d315f]">
                                    ICRAIQ2IT - 2027 Brochure
                                </h3>
                            </div>
                        </div>
                        <p class="mt-4 text-sm leading-6 text-slate-600">
                            <?php esc_html_e('The official English information brochure contains complete guidelines for authors, track taxonomies, keynote digests, and institutional background of Dr RVR NRI Institute of Technology.', 'icraiiq2it-2027'); ?>
                        </p>
                    </div>

                    <!-- Highlights -->
                    <div class="rounded-2xl border border-orange-100 bg-[#FFFBF8] p-5">
                        <h4 class="mb-3 text-xs font-extrabold uppercase tracking-wider text-[#1d315f]">
                            <?php esc_html_e('Brochure Highlights', 'icraiiq2it-2027'); ?>
                        </h4>
                        <div class="space-y-2">
                            <?php foreach ($features as $f) : ?>
                                <div class="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                                    <span class="text-[#F97316] shrink-0 mt-0.5"><?php echo icraiiq2it_svg('check-circle', 'w-4 h-4'); ?></span>
                                    <span><?php echo esc_html($f); ?></span>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <!-- Actions -->
                    <div class="flex flex-wrap items-center gap-3 pt-2">
                        <a 
                            href="<?php echo esc_url($brochure_url); ?>" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            class="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1d315f] to-[#2b468b] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#15254a] transition-all"
                        >
                            <?php echo icraiiq2it_svg('external-link', 'w-4 h-4'); ?>
                            <span><?php esc_html_e('Open PDF in New Tab', 'icraiiq2it-2027'); ?></span>
                        </a>

                        <a 
                            href="<?php echo esc_url($brochure_url); ?>" 
                            download="ICRAIQ2IT_2027_Brochure.pdf" 
                            class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-extrabold text-white shadow-md hover:bg-[#EA580C] transition-all"
                        >
                            <?php echo icraiiq2it_svg('download', 'w-4 h-4'); ?>
                            <span><?php esc_html_e('Download PDF', 'icraiiq2it-2027'); ?></span>
                        </a>

                        <button 
                            type="button" 
                            id="toggle-brochure-preview"
                            class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 shadow-xs hover:border-[#F97316] hover:bg-orange-50 hover:text-[#F97316] transition-all"
                        >
                            <?php echo icraiiq2it_svg('eye', 'w-4 h-4'); ?>
                            <span id="preview-toggle-text"><?php esc_html_e('Hide Preview', 'icraiiq2it-2027'); ?></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Embedded Interactive PDF Viewer -->
        <div id="brochure-viewer-container" class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
            <div class="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-3.5">
                <div class="flex items-center gap-2">
                    <span class="text-[#F97316]"><?php echo icraiiq2it_svg('file-text', 'w-4 h-4'); ?></span>
                    <span class="text-xs font-bold uppercase tracking-wider text-slate-700">
                        <?php esc_html_e('Online Brochure Document Viewer', 'icraiiq2it-2027'); ?>
                    </span>
                </div>
                <a 
                    href="<?php echo esc_url($brochure_url); ?>" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="inline-flex items-center gap-1.5 text-xs font-bold text-[#F97316] hover:underline"
                >
                    <span><?php esc_html_e('Fullscreen', 'icraiiq2it-2027'); ?></span>
                    <?php echo icraiiq2it_svg('external-link', 'w-3.5 h-3.5'); ?>
                </a>
            </div>

            <div class="relative h-[800px] w-full bg-slate-100">
                <iframe 
                    src="<?php echo esc_url($brochure_url); ?>#toolbar=1&navpanes=0" 
                    title="ICRAIQ2IT - 2027 Conference Brochure" 
                    class="h-full w-full border-0"
                ></iframe>
            </div>
        </div>
    </div>
</main>

<script>
document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('toggle-brochure-preview');
    var container = document.getElementById('brochure-viewer-container');
    var label = document.getElementById('preview-toggle-text');

    if (toggleBtn && container) {
        toggleBtn.addEventListener('click', function () {
            if (container.classList.contains('hidden')) {
                container.classList.remove('hidden');
                label.textContent = 'Hide Preview';
            } else {
                container.classList.add('hidden');
                label.textContent = 'Preview Online';
            }
        });
    }
});
</script>

<?php
get_footer();
