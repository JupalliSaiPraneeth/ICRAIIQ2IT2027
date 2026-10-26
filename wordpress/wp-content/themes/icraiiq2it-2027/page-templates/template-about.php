<?php
/**
 * Template Name: About the Conference
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();

$general = icraiiq2it_get_general_settings();

$objectives = [
    'To discuss recent advancements in Artificial Intelligence, Quantum Inspired Computing, and Deep Technology Innovations.',
    'To provide a global platform for knowledge sharing among academicians, researchers, industry professionals, and students.',
    'To showcase innovative research contributions and emerging applications in intelligent systems, automation, cybersecurity, healthcare, and smart technologies.',
    'To encourage collaborative research and development activities between academia, industry, and research organizations.',
    'To highlight future trends, challenges, ethical considerations, and real-world impacts of AI and Quantum Inspired technologies.',
    'To promote interdisciplinary research and strengthen industry–academia partnerships for next-generation intelligent technology ecosystems.',
];
?>

<main class="min-h-screen bg-white text-[#17213a] antialiased pb-12">
    <!-- Header -->
    <section class="bg-white px-5 py-4 sm:px-8 sm:py-6 lg:px-10">
        <div class="mx-auto max-w-[1240px] text-center">
            <span class="text-xs font-extrabold uppercase tracking-[0.16em] text-[#F97316]">
                <?php esc_html_e('Conference Profile', 'icraiiq2it-2027'); ?>
            </span>
            <h1 class="mt-1 text-3xl font-extrabold tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px] lg:leading-[1.18]">
                <?php esc_html_e('About the Conference', 'icraiiq2it-2027'); ?>
            </h1>
            <div class="mx-auto mt-2 h-1 w-24 rounded-full bg-[#F97316]"></div>
        </div>
    </section>

    <!-- Side-by-Side Content -->
    <section class="px-5 py-2 sm:px-8 sm:py-3 lg:px-10">
        <div class="mx-auto max-w-[1240px]">
            <div class="space-y-4">
                <div class="px-1.5 sm:px-2">
                    <div class="space-y-3 text-justify text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                        <p>
                            The <strong>5<sup>th</sup> International Conference on Recent Advancements in Artificial Intelligence, Quantum Intelligence and Inclusive Technologies (ICRAIQ2IT – 2027)</strong> is scheduled to be held during <strong>09–10 April 2027</strong> in Blended mode at <strong><?php echo esc_html($general['venue_name']); ?></strong>.
                        </p>
                        <p>
                            The conference provides a premier international platform for academicians, scientists, researchers, industry professionals, innovators, and students to exchange ideas, present groundbreaking research outcomes, and debate emerging theoretical models across computational sciences.
                        </p>
                        <p>
                            ICRAIQ2IT – 2027 bridges the gap between foundational laboratory research and practical industry applications by fostering interdisciplinary collaboration among experts across the globe.
                        </p>
                    </div>
                </div>

                <!-- Objectives -->
                <div class="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
                    <h2 class="text-xl font-black text-[#17213a] sm:text-2xl mb-3">
                        <?php esc_html_e('Conference Objectives', 'icraiiq2it-2027'); ?>
                    </h2>

                    <div class="flex flex-col gap-2.5">
                        <?php foreach ($objectives as $idx => $obj) : ?>
                            <div class="flex items-start sm:items-center gap-3 rounded-xl bg-slate-50/80 px-3.5 py-2.5 transition-colors hover:bg-orange-50/50">
                                <span class="mt-0.5 sm:mt-0 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                                    <?php echo esc_html($idx + 1); ?>
                                </span>
                                <p class="flex-1 text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px]">
                                    <?php echo esc_html($obj); ?>
                                </p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- Publication Notice -->
                <div class="rounded-xl bg-orange-50/70 p-4 sm:p-5 text-xs leading-relaxed text-slate-700 sm:text-[13px] border border-orange-200/50">
                    <p>
                        <strong><?php esc_html_e('Publication:', 'icraiiq2it-2027'); ?></strong> <?php esc_html_e('The conference proceedings are proposed for publication in Scopus-indexed proceedings, subject to approval and acceptance by Springer Nature, AIP Publishing, or Taylor & Francis. Microsoft CMT is used as the conference management platform for handling paper submissions and the peer-review process. Proceedings of previous editions of the conference were indexed in Scopus. However, publication and Scopus indexing of the current edition are subject to the respective publisher’s approval and Scopus’s indexing policies.', 'icraiiq2it-2027'); ?>
                    </p>
                    <div class="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-orange-200/60 pt-3 text-xs sm:text-[13px]">
                        <span class="text-slate-700">
                            <?php esc_html_e('Submissions via', 'icraiiq2it-2027'); ?> <strong>Microsoft CMT</strong> • <?php esc_html_e('IEEE format', 'icraiiq2it-2027'); ?>
                        </span>
                        <a href="<?php echo esc_url(icraiiq2it_page_url('call-for-papers')); ?>" class="inline-flex items-center gap-1 font-bold text-[#F97316] hover:underline shrink-0">
                            <span><?php esc_html_e('Submission Guidelines', 'icraiiq2it-2027'); ?></span>
                            <?php echo icraiiq2it_svg('arrow-right', 'w-4 h-4'); ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
