<?php
/**
 * Standard Page Template
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

<main class="min-h-screen bg-white text-[#17213a] antialiased py-8 sm:py-12">
    <div class="max-w-[1100px] mx-auto px-5 sm:px-8">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="text-center mb-8">
                    <h1 class="text-3xl sm:text-4xl font-extrabold text-[#1D315F] leading-tight">
                        <?php the_title(); ?>
                    </h1>
                    <div class="mx-auto mt-2 h-1 w-20 rounded-full bg-[#F97316]"></div>
                </header>

                <div class="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; ?>
    </div>
</main>

<?php
get_footer();
