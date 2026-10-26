<?php
/**
 * Main Template Fallback (index.php)
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
        <?php if (have_posts()) : ?>
            <div class="space-y-6">
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('p-6 rounded-2xl border border-slate-200 bg-white shadow-xs'); ?>>
                        <h2 class="text-2xl font-bold text-[#1D315F] mb-2">
                            <a href="<?php the_permalink(); ?>" class="hover:text-orange-600 transition-colors">
                                <?php the_title(); ?>
                            </a>
                        </h2>
                        <div class="text-sm text-slate-600 leading-relaxed">
                            <?php the_excerpt(); ?>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
        <?php else : ?>
            <p class="text-center text-slate-500 py-12"><?php esc_html_e('No content available.', 'icraiiq2it-2027'); ?></p>
        <?php endif; ?>
    </div>
</main>

<?php
get_footer();
