<?php
/**
 * Template Name: Conference Archives
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();

$initial_tab = isset($_GET['tab']) ? sanitize_key($_GET['tab']) : 'conferences';
if (!in_array($initial_tab, ['conferences', 'publications', 'gallery'])) {
    $initial_tab = 'conferences';
}

$previous_conferences = [
    [
        'name'        => 'ICRAIC2IT 2022',
        'year'        => '2022',
        'publisher'   => 'AIP Publishing',
        'badge'       => 'AIP Conference Proceedings (Scopus Indexed)',
        'url'         => 'https://nriit.edu.in/icraic2it-event/',
        'description' => 'International Conference on Recent Advancements in Artificial Intelligence, Computational Intelligence, and Inclusive Technologies.',
    ],
    [
        'name'        => 'ICRAIC2IT 2025',
        'year'        => '2025',
        'publisher'   => 'Taylor & Francis',
        'badge'       => 'Taylor & Francis / CRC Press',
        'url'         => 'https://nriit.edu.in/icraic2it/',
        'description' => 'Advanced computing, deep intelligence, and inclusive engineering paradigms international conference.',
    ],
    [
        'name'        => 'ICRAIQ2IT 2026',
        'year'        => '2026',
        'publisher'   => 'Taylor & Francis',
        'badge'       => 'Taylor & Francis / Routledge',
        'url'         => 'https://www.nriit.edu.in/icraiq2it-2026/',
        'description' => 'Recent Advancements in Artificial Intelligence, Quantum Intelligence, and Inclusive Technologies.',
    ],
    [
        'name'        => 'QUADNEXT 2026',
        'year'        => '2026',
        'publisher'   => 'AICTE & Google Scholar',
        'badge'       => 'Sponsored by AICTE, Govt. of India • Google Scholar',
        'url'         => 'https://nriit.edu.in/quadnext-2026/',
        'description' => 'National & international summit on quantum advancements, next-generation computing, and emerging intelligence.',
    ],
];

$selected_outcomes = [
    [
        'title'       => 'AIP Conference Proceedings',
        'category'    => 'Scopus Indexed Proceedings',
        'publisher'   => 'AIP Publishing',
        'url'         => 'https://pubs.aip.org/aip/acp/article-abstract/2796/1/010001/2902274/Preface-Recent-Advancements-and-Innovations-in',
        'description' => 'Preface & peer-reviewed research papers from the Recent Advancements and Innovations in Computing series published in AIP Conference Proceedings Volume 2796.',
        'badgeText'   => 'Volume 2796',
    ],
    [
        'title'       => 'Routledge Book Publication',
        'category'    => 'Authored Book Volume',
        'publisher'   => 'Routledge (Taylor & Francis)',
        'url'         => 'https://www.routledge.com/Artificial-Intelligence-Computational-Intelligence-and-Inclusive-Technologies/Sambasivarao-RoopaDeviBhima/p/book/9781041240952',
        'description' => 'Artificial Intelligence, Computational Intelligence and Inclusive Technologies — Published by Routledge (Taylor & Francis Group). ISBN: 9781041240952.',
        'badgeText'   => 'ISBN: 9781041240952',
    ],
    [
        'title'       => 'Zenodo Proceedings Archive',
        'category'    => 'CERN Open Access Archive',
        'publisher'   => 'Zenodo / OpenAIRE',
        'url'         => 'https://doi.org/10.5281/zenodo.19349751',
        'description' => 'Permanent digital archive and DOI indexing for proceedings papers and technical summaries hosted on the European Open Science Zenodo repository.',
        'badgeText'   => 'DOI: 10.5281/zenodo.19349751',
    ],
];

// Gallery Images from public directories and CDN
$gallery_conf_1 = [
    'https://nriit.edu.in/icraiq2it-2026/icraic2it-2-scaled.jpg',
    'https://nriit.edu.in/icraiq2it-2026/icraic2it-3-scaled.jpg',
    'https://nriit.edu.in/icraiq2it-2026/icraic2it-4-scaled.jpg',
    'https://nriit.edu.in/icraiq2it-2026/icraic2it-6-scaled.jpg',
    'https://nriit.edu.in/icraiq2it-2026/icraic2it-7-scaled.jpg',
    'https://nriit.edu.in/icraiq2it-2026/icraic2it-8-scaled.jpg',
    'https://nriit.edu.in/icraiq2it-2026/icraic2it-9-scaled.jpg',
    'https://nriit.edu.in/icraiq2it-2026/icraic2it-10-scaled.jpg',
];

$gallery_conf_2 = [
    'https://nriit.edu.in/icraiq2it-2026/2.jpg',
    'https://nriit.edu.in/icraiq2it-2026/3.jpg',
    'https://nriit.edu.in/icraiq2it-2026/4.jpg',
    'https://nriit.edu.in/icraiq2it-2026/5.jpg',
    'https://nriit.edu.in/icraiq2it-2026/6.jpg',
    'https://nriit.edu.in/icraiq2it-2026/7.jpg',
    'https://nriit.edu.in/icraiq2it-2026/8.jpg',
    'https://nriit.edu.in/icraiq2it-2026/9.jpg',
];
?>

<main class="min-h-screen bg-white text-[#17213a] antialiased pb-12">
    <!-- Header -->
    <section class="bg-white px-5 pb-2 pt-5 sm:px-8 sm:pt-6 lg:px-10">
        <div class="mx-auto max-w-[1280px] text-center">
            <h1 class="text-3xl font-black uppercase tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px]">
                Conference <span class="text-[#F97316]">Archives</span>
            </h1>
            <div class="mx-auto mt-2 h-1 w-20 rounded-full bg-[#F97316]"></div>
            <p class="mx-auto mt-2.5 max-w-2xl text-xs text-slate-600 sm:text-sm">
                <?php esc_html_e('Explore past conference editions, indexed proceedings, publications, and photo galleries.', 'icraiiq2it-2027'); ?>
            </p>

            <!-- 3-TAB RESPONSIVE SWITCHER -->
            <div class="mx-auto mt-5 max-w-md sm:max-w-2xl px-2">
                <div class="grid grid-cols-3 items-center rounded-xl bg-slate-100 p-1 sm:p-1.5 border border-slate-200/90 shadow-inner gap-1">
                    <button 
                        type="button" 
                        class="archive-tab-btn flex items-center justify-center rounded-lg py-2 sm:py-2.5 px-1 sm:px-3 text-center transition-all <?php echo $initial_tab === 'conferences' ? 'bg-white text-[#F97316] font-bold shadow-xs' : 'text-slate-600 font-semibold'; ?>"
                        data-tab="conferences"
                    >
                        <span class="text-[11px] sm:text-sm truncate"><?php esc_html_e('Conferences', 'icraiiq2it-2027'); ?></span>
                    </button>

                    <button 
                        type="button" 
                        class="archive-tab-btn flex items-center justify-center rounded-lg py-2 sm:py-2.5 px-1 sm:px-3 text-center transition-all <?php echo $initial_tab === 'publications' ? 'bg-white text-[#F97316] font-bold shadow-xs' : 'text-slate-600 font-semibold'; ?>"
                        data-tab="publications"
                    >
                        <span class="text-[11px] sm:text-sm truncate"><?php esc_html_e('Proceedings', 'icraiiq2it-2027'); ?></span>
                    </button>

                    <button 
                        type="button" 
                        class="archive-tab-btn flex items-center justify-center rounded-lg py-2 sm:py-2.5 px-1 sm:px-3 text-center transition-all <?php echo $initial_tab === 'gallery' ? 'bg-white text-[#F97316] font-bold shadow-xs' : 'text-slate-600 font-semibold'; ?>"
                        data-tab="gallery"
                    >
                        <span class="text-[11px] sm:text-sm truncate"><?php esc_html_e('Photo Gallery', 'icraiiq2it-2027'); ?></span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- TAB 1: PREVIOUS CONFERENCES -->
    <section class="archive-tab-content px-5 py-6 sm:px-8 lg:px-10 <?php echo $initial_tab === 'conferences' ? '' : 'hidden'; ?>" data-content="conferences">
        <div class="mx-auto max-w-[1240px] space-y-4">
            <?php foreach ($previous_conferences as $c) : ?>
                <div class="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs hover:border-orange-300 transition-all">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div>
                            <span class="text-xs font-bold text-orange-600"><?php echo esc_html($c['year']); ?> Edition</span>
                            <h2 class="text-xl font-bold text-[#1D315F]"><?php echo esc_html($c['name']); ?></h2>
                        </div>
                        <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold self-start sm:self-auto">
                            <?php echo esc_html($c['badge']); ?>
                        </span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        <?php echo esc_html($c['description']); ?>
                    </p>
                    <div>
                        <a href="<?php echo esc_url($c['url']); ?>" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#F97316] hover:underline">
                            <span><?php esc_html_e('Visit Archive Portal', 'icraiiq2it-2027'); ?></span>
                            <?php echo icraiiq2it_svg('external-link', 'w-3.5 h-3.5'); ?>
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- TAB 2: PROCEEDINGS & OUTCOMES -->
    <section class="archive-tab-content px-5 py-6 sm:px-8 lg:px-10 <?php echo $initial_tab === 'publications' ? '' : 'hidden'; ?>" data-content="publications">
        <div class="mx-auto max-w-[1240px] space-y-6">
            <!-- Published Volumes -->
            <div class="space-y-4">
                <?php foreach ($selected_outcomes as $o) : ?>
                    <div class="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs hover:border-orange-300 transition-all">
                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <div>
                                <span class="text-xs font-bold text-[#F97316]"><?php echo esc_html($o['category']); ?></span>
                                <h3 class="text-xl font-bold text-[#1D315F]"><?php echo esc_html($o['title']); ?></h3>
                            </div>
                            <span class="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold self-start sm:self-auto">
                                <?php echo esc_html($o['badgeText']); ?>
                            </span>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                            <?php echo esc_html($o['description']); ?>
                        </p>
                        <div>
                            <a href="<?php echo esc_url($o['url']); ?>" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#F97316] hover:underline">
                                <span><?php esc_html_e('View Indexed Records', 'icraiiq2it-2027'); ?></span>
                                <?php echo icraiiq2it_svg('external-link', 'w-3.5 h-3.5'); ?>
                            </a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <!-- Souvenir Downloads -->
            <div class="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
                <h3 class="text-base font-bold text-[#1D315F] mb-3"><?php esc_html_e('Downloadable Conference Souvenirs', 'icraiiq2it-2027'); ?></h3>
                <div class="flex flex-wrap gap-4">
                    <a href="<?php echo esc_url(get_template_directory_uri() . '/assets/docs/sov/1sov.pdf'); ?>" target="_blank" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs hover:border-orange-400">
                        <?php echo icraiiq2it_svg('download', 'w-4 h-4 text-orange-500'); ?>
                        <span><?php esc_html_e('Conference Souvenir Volume 1 (PDF)', 'icraiiq2it-2027'); ?></span>
                    </a>
                    <a href="<?php echo esc_url(get_template_directory_uri() . '/assets/docs/sov/2sov.pdf'); ?>" target="_blank" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs hover:border-orange-400">
                        <?php echo icraiiq2it_svg('download', 'w-4 h-4 text-orange-500'); ?>
                        <span><?php esc_html_e('Conference Souvenir Volume 2 (PDF)', 'icraiiq2it-2027'); ?></span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- TAB 3: PHOTO GALLERY -->
    <section class="archive-tab-content px-5 py-6 sm:px-8 lg:px-10 <?php echo $initial_tab === 'gallery' ? '' : 'hidden'; ?>" data-content="gallery">
        <div class="mx-auto max-w-[1240px]">
            <!-- Conference Switcher Buttons -->
            <div class="flex flex-wrap gap-2 mb-6">
                <button type="button" class="gallery-conf-btn px-4 py-2 rounded-xl text-xs font-bold border border-brand-500 bg-brand-50 text-brand-700" data-conf="conf-1">
                    <?php esc_html_e('1st International Conference', 'icraiiq2it-2027'); ?>
                </button>
                <button type="button" class="gallery-conf-btn px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-600 hover:border-brand-400" data-conf="conf-2">
                    <?php esc_html_e('2nd International Conference', 'icraiiq2it-2027'); ?>
                </button>
            </div>

            <!-- Conference 1 Grid -->
            <div class="gallery-conf-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" data-conf="conf-1">
                <?php foreach ($gallery_conf_1 as $img_url) : ?>
                    <div class="gallery-item-card cursor-pointer overflow-hidden rounded-xl aspect-video bg-slate-100 group shadow-xs hover:shadow-md" data-full-img="<?php echo esc_url($img_url); ?>">
                        <img src="<?php echo esc_url($img_url); ?>" alt="Conference Photo" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
                    </div>
                <?php endforeach; ?>
            </div>

            <!-- Conference 2 Grid -->
            <div class="gallery-conf-grid hidden grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" data-conf="conf-2">
                <?php foreach ($gallery_conf_2 as $img_url) : ?>
                    <div class="gallery-item-card cursor-pointer overflow-hidden rounded-xl aspect-video bg-slate-100 group shadow-xs hover:shadow-md" data-full-img="<?php echo esc_url($img_url); ?>">
                        <img src="<?php echo esc_url($img_url); ?>" alt="Conference Photo" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<!-- Lightbox Modal -->
<div id="gallery-lightbox" class="fixed inset-0 z-[120] hidden items-center justify-center bg-black/90 p-4">
    <button type="button" id="close-lightbox" class="absolute top-4 right-4 text-white hover:text-orange-400 p-2">
        <?php echo icraiiq2it_svg('close', 'w-7 h-7'); ?>
    </button>
    <button type="button" id="prev-lightbox" class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-400 p-3 bg-black/40 rounded-full">
        <?php echo icraiiq2it_svg('arrow-left', 'w-6 h-6'); ?>
    </button>
    <button type="button" id="next-lightbox" class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-400 p-3 bg-black/40 rounded-full">
        <?php echo icraiiq2it_svg('arrow-right', 'w-6 h-6'); ?>
    </button>
    <div class="max-w-4xl max-h-[85vh] flex flex-col items-center">
        <img id="lightbox-img" src="" alt="Gallery Preview" class="max-w-full max-h-[75vh] object-contain rounded-lg">
        <div id="lightbox-caption" class="text-white text-xs mt-3 font-semibold"></div>
    </div>
</div>

<?php
get_footer();
