<?php
/**
 * Front Page Template (Home)
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();

$general = icraiiq2it_get_general_settings();
$dates = icraiiq2it_get_dates_settings();
$tracks = icraiiq2it_get_fallback_tracks();

$slides = [
    [
        'image' => get_template_directory_uri() . '/assets/images/newblock.png',
        'alt'   => 'NRI University Campus in Vijayawada',
        'title' => 'NRI UNIVERSITY',
        'sub'   => 'A Center for Education, Research and Innovation',
        'pills' => ['Modern Campus', 'Academic Excellence', 'Research & Innovation'],
    ],
    [
        'image' => 'https://nriit.edu.in/icraiq2it-2026/icraic2it-29-scaled.jpg',
        'alt'   => 'Prakasam Barrage and Krishna River in Vijayawada',
        'title' => 'PRAKASAM BARRAGE',
        'sub'   => 'Iconic Landmark on the Krishna River',
        'pills' => ['Scenic Beauty', 'Cultural Heritage', 'Riverfront Landmark'],
    ],
    [
        'image' => 'https://nriit.edu.in/icraiq2it-2026/icraic2it-4-scaled.jpg',
        'alt'   => 'Vijayawada Cityscape, Krishna River and Prakasam Barrage at Sunset',
        'title' => 'VIJAYAWADA',
        'sub'   => 'A City Shaped by the Krishna River',
        'pills' => ['Scenic Beauty', 'Riverfront Heritage', 'Urban Growth'],
    ],
    [
        'image' => 'https://nriit.edu.in/icraiq2it-2026/32.jpg',
        'alt'   => 'Aerial View of Vijayawada with Krishna River and Hills',
        'title' => 'VIJAYAWADA',
        'sub'   => 'A City of Heritage, Nature and Innovation',
        'pills' => ['Natural Beauty', 'Cultural Heritage', 'Urban Landscape'],
    ],
    [
        'image' => 'https://nriit.edu.in/icraiq2it-2026/43.jpg',
        'alt'   => 'Prakasam Barrage and Krishna River with Vijayawada Hills',
        'title' => 'KRISHNA RIVER',
        'sub'   => 'A Serene Riverfront Landmark of Vijayawada',
        'pills' => ['Scenic Beauty', 'Cultural Heritage', 'Riverfront'],
    ],
    [
        'image' => 'https://nriit.edu.in/icraiq2it-2026/53.jpg',
        'alt'   => 'NRI University Academic Campus in Vijayawada',
        'title' => 'NRI UNIVERSITY',
        'sub'   => 'Where Education Meets Research and Innovation',
        'pills' => ['Academic Excellence', 'Modern Infrastructure', 'Research & Innovation'],
    ],
];
?>

<div class="bg-white text-slate-800 antialiased selection:bg-orange-500 selection:text-white">

    <!-- HERO SECTION: 3D ROLLING STACK PHOTO CAROUSEL -->
    <section class="bg-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8">
        <div class="mx-auto max-w-[1320px]">
            <!-- Mobile Conference Title Banner -->
            <h1 class="mx-auto mb-2 max-w-4xl text-center text-xl font-extrabold leading-tight tracking-tight text-[#1D315F] sm:mb-3 sm:text-2xl md:text-3xl xl:hidden">
                <?php echo icraiiq2it_format_with_superscript($general['title']); ?>
            </h1>

            <!-- 3D Card Stack Viewport -->
            <div class="hero-3d-carousel relative mx-auto h-[220px] w-full max-w-[1050px] sm:h-[300px] md:h-[370px] lg:h-[460px] xl:h-[490px]" style="perspective: 1200px;">
                <?php foreach ($slides as $idx => $s) : ?>
                    <article 
                        class="carousel-slide absolute inset-0 mx-auto w-full max-w-[960px] overflow-hidden rounded-2xl md:rounded-3xl border border-white/30 shadow-2xl"
                        style="transform-style: preserve-3d;"
                    >
                        <img 
                            src="<?php echo esc_url($s['image']); ?>" 
                            alt="<?php echo esc_attr($s['alt']); ?>" 
                            class="h-full w-full object-cover select-none"
                            loading="<?php echo $idx === 0 ? 'eager' : 'lazy'; ?>"
                        >
                        <div class="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent"></div>
                        
                        <!-- Slide Content Overlay -->
                        <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                            <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-2">
                                <?php foreach ($s['pills'] as $pill) : ?>
                                    <span class="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold backdrop-blur-md">
                                        <?php echo esc_html($pill); ?>
                                    </span>
                                <?php endforeach; ?>
                            </div>
                            <h2 class="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
                                <?php echo esc_html($s['title']); ?>
                            </h2>
                            <p class="text-xs sm:text-sm text-slate-200 mt-0.5 line-clamp-1">
                                <?php echo esc_html($s['sub']); ?>
                            </p>
                        </div>
                    </article>
                <?php endforeach; ?>

                <!-- Controls -->
                <button 
                    type="button" 
                    class="carousel-prev absolute left-2 top-1/2 -translate-y-1/2 z-40 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-navy-900/60 text-white backdrop-blur-md hover:bg-brand-500 hover:text-slate-950 transition-all focus:outline-none"
                    aria-label="<?php esc_attr_e('Previous photo', 'icraiiq2it-2027'); ?>"
                >
                    <?php echo icraiiq2it_svg('arrow-left', 'w-5 h-5'); ?>
                </button>
                <button 
                    type="button" 
                    class="carousel-next absolute right-2 top-1/2 -translate-y-1/2 z-40 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-navy-900/60 text-white backdrop-blur-md hover:bg-brand-500 hover:text-slate-950 transition-all focus:outline-none"
                    aria-label="<?php esc_attr_e('Next photo', 'icraiiq2it-2027'); ?>"
                >
                    <?php echo icraiiq2it_svg('arrow-right', 'w-5 h-5'); ?>
                </button>
            </div>

            <!-- Carousel Indicators -->
            <div class="mt-3 flex items-center justify-center gap-1.5">
                <?php foreach ($slides as $idx => $s) : ?>
                    <button 
                        type="button" 
                        class="carousel-indicator h-2 rounded-full transition-all duration-300 <?php echo $idx === 0 ? 'bg-[#F97316] w-6' : 'bg-slate-300 w-2'; ?>"
                        aria-label="<?php echo esc_attr(sprintf(__('Go to slide %d', 'icraiiq2it-2027'), $idx + 1)); ?>"
                    ></button>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- STATS STRIP -->
    <section class="bg-slate-50 border-y border-slate-200/80 px-4 py-6 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-[1280px]">
            <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                <article class="group rounded-2xl border border-orange-100 bg-white p-4 sm:p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-[#F97316]/50 hover:shadow-lg">
                    <div class="text-3xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#F97316] sm:text-4xl">
                        5<sup>th</sup>
                    </div>
                    <div class="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F97316]">
                        <?php esc_html_e('EDITION', 'icraiiq2it-2027'); ?>
                    </div>
                    <p class="mt-1 text-xs text-slate-500">
                        <?php esc_html_e('International Landmark Gathering', 'icraiiq2it-2027'); ?>
                    </p>
                </article>

                <article class="group rounded-2xl border border-orange-100 bg-white p-4 sm:p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-[#F97316]/50 hover:shadow-lg">
                    <div class="text-3xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#F97316] sm:text-4xl">
                        21
                    </div>
                    <div class="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F97316]">
                        <?php esc_html_e('CONFERENCE TOPICS', 'icraiiq2it-2027'); ?>
                    </div>
                    <p class="mt-1 text-xs text-slate-500">
                        <?php esc_html_e('Frontier Emerging Disciplines', 'icraiiq2it-2027'); ?>
                    </p>
                </article>

                <article class="group rounded-2xl border border-orange-100 bg-white p-4 sm:p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-[#F97316]/50 hover:shadow-lg">
                    <div class="text-3xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#F97316] sm:text-4xl">
                        09–10
                    </div>
                    <div class="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F97316]">
                        <?php esc_html_e('CONFERENCE DATES', 'icraiiq2it-2027'); ?>
                    </div>
                    <p class="mt-1 text-xs text-slate-500">
                        <?php esc_html_e('April 2027 | Blended Mode', 'icraiiq2it-2027'); ?>
                    </p>
                </article>

                <article class="group rounded-2xl border border-orange-100 bg-white p-4 sm:p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-[#F97316]/50 hover:shadow-lg">
                    <div class="text-3xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#F97316] sm:text-4xl">
                        70+
                    </div>
                    <div class="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F97316]">
                        <?php esc_html_e('GLOBAL COMMITTEE', 'icraiiq2it-2027'); ?>
                    </div>
                    <p class="mt-1 text-xs text-slate-500">
                        <?php esc_html_e('Distinguished Academicians & Leaders', 'icraiiq2it-2027'); ?>
                    </p>
                </article>
            </div>
        </div>
    </section>

    <!-- ABOUT SECTION SUMMARY -->
    <section class="px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <div class="mx-auto max-w-[1240px]">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div class="space-y-4">
                    <div class="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#F97316]">
                        <span class="h-[2px] w-6 bg-[#F97316]"></span>
                        <span><?php esc_html_e('About The Conference', 'icraiiq2it-2027'); ?></span>
                    </div>
                    <h2 class="text-2xl sm:text-3xl font-black text-[#1D315F] leading-tight">
                        5<sup>th</sup> International Conference on Recent Advancements in AI, Quantum &amp; Inclusive Technologies
                    </h2>
                    <p class="text-sm leading-relaxed text-slate-600 text-justify">
                        The <strong>ICRAIQ2IT – 2027</strong> is scheduled to be held during <strong>09–10 April 2027</strong> at Dr RVR NRI Institute of Technology (Deemed to be University), Vijayawada, India. The conference aims to provide a premier international platform for academicians, scientists, researchers, industry professionals, innovators, and students to exchange ideas, present research outcomes, and discuss emerging trends in Artificial Intelligence, Quantum-Inspired Computing, and Deep Technology Innovations.
                    </p>
                    <div class="pt-2 flex flex-wrap gap-3">
                        <a href="<?php echo esc_url(icraiiq2it_page_url('about')); ?>" class="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#1D315F] hover:bg-[#15254a] text-white font-bold text-xs uppercase tracking-wider transition-colors">
                            <span><?php esc_html_e('Read Full Profile', 'icraiiq2it-2027'); ?></span>
                            <?php echo icraiiq2it_svg('arrow-right', 'w-4 h-4'); ?>
                        </a>
                        <a href="<?php echo esc_url(icraiiq2it_page_url('brochure')); ?>" class="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-orange-500 hover:text-orange-600 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors">
                            <span><?php esc_html_e('Download Brochure', 'icraiiq2it-2027'); ?></span>
                            <?php echo icraiiq2it_svg('download', 'w-4 h-4'); ?>
                        </a>
                    </div>
                </div>

                <!-- Important Dates Card -->
                <div class="rounded-2xl border border-orange-100 bg-[#FFFBF8] p-6 shadow-sm">
                    <h3 class="text-lg font-black text-[#1D315F] mb-4 flex items-center gap-2">
                        <span class="text-[#F97316]"><?php echo icraiiq2it_svg('calendar', 'w-5 h-5'); ?></span>
                        <span><?php esc_html_e('Key Milestones & Deadlines', 'icraiiq2it-2027'); ?></span>
                    </h3>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-100">
                            <div>
                                <div class="text-xs font-bold text-slate-800"><?php esc_html_e('Submission of Manuscripts', 'icraiiq2it-2027'); ?></div>
                                <div class="text-[11px] text-slate-500"><?php esc_html_e('Full paper submission deadline', 'icraiiq2it-2027'); ?></div>
                            </div>
                            <span class="px-2.5 py-1 rounded-full bg-orange-100 text-[#EA580C] text-xs font-extrabold font-mono">
                                <?php echo esc_html($dates['submission_deadline']); ?>
                            </span>
                        </div>

                        <div class="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-100">
                            <div>
                                <div class="text-xs font-bold text-slate-800"><?php esc_html_e('Notification of Acceptance', 'icraiiq2it-2027'); ?></div>
                                <div class="text-[11px] text-slate-500"><?php esc_html_e('Official peer-review outcome', 'icraiiq2it-2027'); ?></div>
                            </div>
                            <span class="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-extrabold font-mono">
                                <?php echo esc_html($dates['notification_acceptance']); ?>
                            </span>
                        </div>

                        <div class="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-100">
                            <div>
                                <div class="text-xs font-bold text-slate-800"><?php esc_html_e('Registration Deadline', 'icraiiq2it-2027'); ?></div>
                                <div class="text-[11px] text-slate-500"><?php esc_html_e('Author registration due date', 'icraiiq2it-2027'); ?></div>
                            </div>
                            <span class="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-extrabold font-mono">
                                <?php echo esc_html($dates['registration_deadline']); ?>
                            </span>
                        </div>

                        <div class="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-100">
                            <div>
                                <div class="text-xs font-bold text-slate-800"><?php esc_html_e('Conference Dates', 'icraiiq2it-2027'); ?></div>
                                <div class="text-[11px] text-slate-500"><?php esc_html_e('Two days technical sessions', 'icraiiq2it-2027'); ?></div>
                            </div>
                            <span class="px-2.5 py-1 rounded-full bg-orange-500 text-white text-xs font-extrabold font-mono">
                                <?php echo esc_html($dates['conference_dates']); ?>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FEATURED RESEARCH TRACKS PREVIEW -->
    <section class="bg-slate-50 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 border-t border-slate-200">
        <div class="mx-auto max-w-[1240px]">
            <div class="text-center mb-8">
                <span class="text-xs font-extrabold uppercase tracking-widest text-[#F97316]">
                    <?php esc_html_e('CALL FOR PAPERS', 'icraiiq2it-2027'); ?>
                </span>
                <h2 class="mt-1 text-2xl sm:text-3xl font-black text-[#1D315F]">
                    <?php esc_html_e('Conference Research Tracks', 'icraiiq2it-2027'); ?>
                </h2>
                <div class="mx-auto mt-2 h-1 w-20 rounded-full bg-[#F97316]"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <?php foreach (array_slice($tracks, 0, 6) as $t) : ?>
                    <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:border-orange-300 hover:shadow-md">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-xs font-extrabold text-[#EA580C]">
                                0<?php echo esc_html($t['number']); ?>
                            </span>
                            <h3 class="text-base font-bold text-[#1D315F] leading-snug">
                                <?php echo esc_html($t['title']); ?>
                            </h3>
                        </div>
                        <p class="text-xs text-slate-600 line-clamp-2 mb-3">
                            <?php echo esc_html($t['description']); ?>
                        </p>
                        <div class="space-y-1">
                            <?php foreach (array_slice($t['topics'], 0, 2) as $top) : ?>
                                <div class="text-[11px] text-slate-500 flex items-center gap-1.5">
                                    <span class="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                                    <span class="truncate"><?php echo esc_html($top); ?></span>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <div class="mt-8 text-center">
                <a href="<?php echo esc_url(icraiiq2it_page_url('call-for-papers')); ?>" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#fb9200] to-[#EA580C] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all">
                    <span><?php esc_html_e('Explore All 8 Tracks & Submission Guidelines', 'icraiiq2it-2027'); ?></span>
                    <?php echo icraiiq2it_svg('arrow-right', 'w-4 h-4'); ?>
                </a>
            </div>
        </div>
    </section>

</div>

<?php
get_footer();
