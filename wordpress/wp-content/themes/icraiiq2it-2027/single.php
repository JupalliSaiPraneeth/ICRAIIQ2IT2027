<?php
/**
 * Single Post Template
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

<main class="min-h-screen bg-white text-[#17213a] antialiased py-8 sm:py-12">
    <div class="max-w-[1000px] mx-auto px-5 sm:px-8">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="mb-6">
                    <span class="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                        <?php echo esc_html(get_post_type_object(get_post_type())->labels->singular_name); ?>
                    </span>
                    <h1 class="text-3xl sm:text-4xl font-extrabold text-[#1D315F] mt-1 leading-tight">
                        <?php the_title(); ?>
                    </h1>
                    <div class="h-1 w-16 bg-[#F97316] rounded-full mt-2"></div>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="mb-6 rounded-2xl overflow-hidden shadow-sm">
                        <?php the_post_thumbnail('large', ['class' => 'w-full h-auto object-cover']); ?>
                    </div>
                <?php endif; ?>

                <div class="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; ?>
    </div>
</main>

<?php
get_footer();
