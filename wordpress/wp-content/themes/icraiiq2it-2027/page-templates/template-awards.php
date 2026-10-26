<?php
/**
 * Template Name: Awards & Recognition
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();

$awards = [
    [
        'id'          => 'oral',
        'title'       => 'Best Oral Presentation Award',
        'category'    => 'Oral Presentation',
        'description' => 'For clear, rigorous, and engaging delivery of research in an oral technical session.',
        'eligibility' => 'Accepted and presented oral papers.',
        'recognition' => 'Certificate of merit and plaque.',
        'highlight'   => true,
    ],
    [
        'id'          => 'poster',
        'title'       => 'Best Poster Presentation Award',
        'category'    => 'Poster Presentation',
        'description' => 'For an effective poster that communicates sound research with clarity.',
        'eligibility' => 'Papers accepted and presented in the poster track.',
        'recognition' => 'Poster merit certificate and digital gallery recognition.',
        'highlight'   => false,
    ],
];
?>

<main class="min-h-screen bg-white text-[#17213a] antialiased pb-12">
    <!-- Header -->
    <section class="bg-white py-5 sm:py-6">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-3xl font-black uppercase tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px]">
                Awards &amp; <span class="text-[#F97316]">Recognition</span>
            </h1>
            <div class="mx-auto mt-2 h-1 w-24 rounded-full bg-[#F97316]"></div>
            <p class="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                <?php esc_html_e('Encouraging meaningful scholarly contributions and recognizing exemplary research delivery.', 'icraiiq2it-2027'); ?>
            </p>
        </div>
    </section>

    <!-- Award Categories Grid -->
    <section class="px-4 sm:px-6 lg:px-8 py-4">
        <div class="mx-auto max-w-[1240px]">
            <div class="mb-4">
                <h2 class="text-xl sm:text-2xl font-black text-[#1D315F]">
                    <?php esc_html_e('Award Categories', 'icraiiq2it-2027'); ?>
                </h2>
                <p class="mt-0.5 text-xs text-slate-600">
                    <?php esc_html_e('Awards are assessed during technical tracks by Session Chairs and Editorial Committee members.', 'icraiiq2it-2027'); ?>
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <?php foreach ($awards as $a) : ?>
                    <div class="rounded-2xl bg-white p-5 sm:p-6 transition-all <?php echo $a['highlight'] ? 'border-l-4 border-[#F97316] shadow-sm ring-1 ring-slate-200' : 'border border-slate-200 hover:border-orange-300'; ?>">
                        <div>
                            <span class="text-xs font-semibold text-[#F97316]"><?php echo esc_html($a['category']); ?></span>
                            <h3 class="mt-1 text-lg sm:text-xl font-bold text-[#17213a]"><?php echo esc_html($a['title']); ?></h3>
                        </div>
                        <p class="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                            <?php echo esc_html($a['description']); ?>
                        </p>
                        <div class="mt-4 grid gap-2 border-t border-slate-100 pt-3 text-xs leading-relaxed sm:grid-cols-2">
                            <p><strong class="font-semibold text-slate-700"><?php esc_html_e('Eligibility: ', 'icraiiq2it-2027'); ?></strong><?php echo esc_html($a['eligibility']); ?></p>
                            <p><strong class="font-semibold text-slate-700"><?php esc_html_e('Recognition: ', 'icraiiq2it-2027'); ?></strong><?php echo esc_html($a['recognition']); ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
