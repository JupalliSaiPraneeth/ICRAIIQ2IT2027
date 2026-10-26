<?php
/**
 * 404 Error Page
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

<main class="min-h-[70vh] flex items-center justify-center bg-white text-[#17213a] px-5 py-12">
    <div class="text-center max-w-lg space-y-4">
        <div class="text-6xl font-black text-[#EA580C]">404</div>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-[#1D315F]">
            <?php esc_html_e('Conference Page Not Found', 'icraiiq2it-2027'); ?>
        </h1>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <?php esc_html_e('The requested page may have been moved, renamed, or is unavailable. Please check the URL or return to the conference homepage.', 'icraiiq2it-2027'); ?>
        </p>
        <div class="pt-2">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1D315F] hover:bg-[#15254a] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md">
                <?php echo icraiiq2it_svg('arrow-left', 'w-4 h-4'); ?>
                <span><?php esc_html_e('Back to Home', 'icraiiq2it-2027'); ?></span>
            </a>
        </div>
    </div>
</main>

<?php
get_footer();
