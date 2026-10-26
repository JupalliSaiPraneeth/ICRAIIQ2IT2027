<?php
/**
 * Archive Fallback Template
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

<main class="min-h-screen bg-white text-[#17213a] antialiased py-8 sm:py-12">
    <div class="max-w-[1240px] mx-auto px-5 sm:px-8">
        <header class="text-center mb-8">
            <h1 class="text-3xl sm:text-4xl font-black text-[#1D315F]">
                <?php the_archive_title(); ?>
            </h1>
            <div class="mx-auto mt-2 h-1 w-20 rounded-full bg-[#F97316]"></div>
        </header>

        <?php if (have_posts()) : ?>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <?php while (have_posts()) : the_post(); ?>
                    <article class="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-orange-300 transition-all flex flex-col justify-between">
                        <div>
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="mb-4 rounded-xl overflow-hidden aspect-video bg-slate-100">
                                    <?php the_post_thumbnail('medium_large', ['class' => 'w-full h-full object-cover']); ?>
                                </div>
                            <?php endif; ?>
                            <h2 class="text-lg font-bold text-[#1D315F] mb-2">
                                <a href="<?php the_permalink(); ?>" class="hover:text-orange-600 transition-colors">
                                    <?php the_title(); ?>
                                </a>
                            </h2>
                            <div class="text-xs text-slate-600 leading-relaxed">
                                <?php the_excerpt(); ?>
                            </div>
                        </div>
                        <div class="pt-4 border-t border-slate-100 mt-4">
                            <a href="<?php the_permalink(); ?>" class="inline-flex items-center gap-1 text-xs font-bold text-[#F97316] hover:underline">
                                <span><?php esc_html_e('Read More', 'icraiiq2it-2027'); ?></span>
                                <?php echo icraiiq2it_svg('arrow-right', 'w-3.5 h-3.5'); ?>
                            </a>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
            <div class="mt-8">
                <?php the_posts_pagination(['prev_text' => '← Previous', 'next_text' => 'Next →']); ?>
            </div>
        <?php else : ?>
            <p class="text-center text-slate-500 py-12"><?php esc_html_e('No entries found.', 'icraiiq2it-2027'); ?></p>
        <?php endif; ?>
    </div>
</main>

<?php
get_footer();
