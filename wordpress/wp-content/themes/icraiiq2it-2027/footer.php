<?php
/**
 * Theme Footer
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

$general = icraiiq2it_get_general_settings();
$short_title = $general['short_title'] ?: $general['acronym'];
?>
    </main><!-- #primary -->

    <!-- Site Footer -->
    <footer class="bg-[#f1f3f6] text-[#263653] border-t border-slate-200">
        <div class="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 px-5 py-8 sm:px-8 sm:py-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] lg:gap-8 lg:px-10">
            <!-- Brand Column -->
            <div>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-3.5 group">
                    <img 
                        src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/nrilogo.png'); ?>" 
                        alt="<?php esc_attr_e('NRI Institute of Technology Logo', 'icraiiq2it-2027'); ?>" 
                        class="h-16 sm:h-20 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                    >
                    <div>
                        <div class="text-sm sm:text-base font-extrabold leading-tight text-[#1d315f]">
                            Dr RVR NRI Institute of<br>
                            <span class="text-[#f97316]">Technology</span>
                        </div>
                        <div class="text-[11px] sm:text-xs font-semibold text-slate-500">
                            Deemed to be University • NAAC A+
                        </div>
                    </div>
                </a>

                <div class="mt-4 text-base font-extrabold text-[#1d315f]">
                    <?php echo esc_html($short_title); ?>
                </div>
                <p class="mt-1 text-xs text-slate-500 leading-relaxed max-w-sm">
                    <?php echo esc_html($general['venue_name']); ?>
                </p>
            </div>

            <!-- Navigation Column -->
            <div>
                <h3 class="text-sm font-extrabold uppercase tracking-wider text-[#111827]">
                    <?php esc_html_e('Navigation', 'icraiiq2it-2027'); ?>
                </h3>
                <div class="mt-3 space-y-2 text-sm text-slate-600">
                    <div><a href="<?php echo esc_url(home_url('/')); ?>" class="transition hover:text-[#f97316]"><?php esc_html_e('HOME', 'icraiiq2it-2027'); ?></a></div>
                    <div><a href="<?php echo esc_url(icraiiq2it_page_url('about')); ?>" class="transition hover:text-[#f97316]"><?php esc_html_e('ABOUT', 'icraiiq2it-2027'); ?></a></div>
                    <div><a href="<?php echo esc_url(icraiiq2it_page_url('committee')); ?>" class="transition hover:text-[#f97316]"><?php esc_html_e('COMMITTEES', 'icraiiq2it-2027'); ?></a></div>
                    <div><a href="<?php echo esc_url(icraiiq2it_page_url('venue')); ?>" class="transition hover:text-[#f97316]"><?php esc_html_e('LOCATION', 'icraiiq2it-2027'); ?></a></div>
                    <div><a href="<?php echo esc_url(icraiiq2it_page_url('call-for-papers')); ?>" class="transition hover:text-[#f97316]"><?php esc_html_e('CALL FOR PAPERS', 'icraiiq2it-2027'); ?></a></div>
                    <div><a href="<?php echo esc_url(icraiiq2it_page_url('registration')); ?>" class="transition hover:text-[#f97316]"><?php esc_html_e('REGISTRATION', 'icraiiq2it-2027'); ?></a></div>
                </div>
            </div>

            <!-- Quick Links Column -->
            <div>
                <h3 class="text-sm font-extrabold uppercase tracking-wider text-[#111827]">
                    <?php esc_html_e('Quick Links', 'icraiiq2it-2027'); ?>
                </h3>
                <div class="mt-3 space-y-2 text-sm text-slate-600">
                    <div><a href="<?php echo esc_url(icraiiq2it_page_url('awards')); ?>" class="transition hover:text-[#f97316]"><?php esc_html_e('AWARDS', 'icraiiq2it-2027'); ?></a></div>
                    <div><a href="<?php echo esc_url(icraiiq2it_page_url('accommodation')); ?>" class="transition hover:text-[#f97316]"><?php esc_html_e('ACCOMMODATION', 'icraiiq2it-2027'); ?></a></div>
                    <div><a href="<?php echo esc_url(icraiiq2it_page_url('archives')); ?>" class="transition hover:text-[#f97316]"><?php esc_html_e('CONFERENCE ARCHIVES', 'icraiiq2it-2027'); ?></a></div>
                    <div><a href="<?php echo esc_url(icraiiq2it_page_url('brochure')); ?>" class="transition hover:text-[#f97316]"><?php esc_html_e('BROCHURE', 'icraiiq2it-2027'); ?></a></div>
                    <div><a href="<?php echo esc_url(icraiiq2it_page_url('contact')); ?>" class="transition hover:text-[#f97316]"><?php esc_html_e('CONTACT US', 'icraiiq2it-2027'); ?></a></div>
                </div>
            </div>

            <!-- Secretariat Column -->
            <div>
                <h3 class="text-sm font-extrabold uppercase tracking-wider text-[#111827]">
                    <?php esc_html_e('Conference Secretariat', 'icraiiq2it-2027'); ?>
                </h3>
                <div class="mt-3 space-y-2.5 text-xs text-slate-600 leading-relaxed">
                    <p><?php echo esc_html($general['venue_address']); ?></p>
                    <div class="pt-1">
                        <a href="mailto:<?php echo esc_attr($general['contact_email']); ?>" class="inline-flex items-center gap-1.5 font-semibold text-[#f97316] hover:underline">
                            <?php echo icraiiq2it_svg('mail', 'w-3.5 h-3.5'); ?>
                            <span><?php echo esc_html($general['contact_email']); ?></span>
                        </a>
                    </div>
                    <?php if (!empty($general['contact_phone'])) : ?>
                        <div>
                            <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $general['contact_phone'])); ?>" class="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-[#f97316]">
                                <?php echo icraiiq2it_svg('phone', 'w-3.5 h-3.5 text-[#f97316]'); ?>
                                <span><?php echo esc_html($general['contact_phone']); ?></span>
                            </a>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>

        <!-- Subfooter Bar -->
        <div class="border-t border-slate-200/80 bg-[#e9ecf0] py-4 text-center text-xs text-slate-500">
            <div class="mx-auto max-w-[1240px] px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
                <div>
                    &copy; <?php echo esc_html(date('Y')); ?> <?php echo esc_html($short_title); ?>. <?php esc_html_e('All rights reserved.', 'icraiiq2it-2027'); ?>
                </div>
                <div>
                    <?php echo esc_html($general['venue_name']); ?>
                </div>
            </div>
        </div>
    </footer>

    <!-- Back to Top Floating Button -->
    <button 
        type="button" 
        id="back-to-top" 
        class="fixed bottom-6 right-6 z-40 hidden h-11 w-11 items-center justify-center rounded-full bg-[#1D315F] text-white shadow-xl transition-all duration-300 hover:bg-[#F97316] hover:scale-110 focus:outline-none"
        aria-label="<?php esc_attr_e('Scroll to top', 'icraiiq2it-2027'); ?>"
    >
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7"/>
        </svg>
    </button>
</div><!-- .flex-col -->

<!-- Paper Submission Modal Component -->
<?php get_template_part('template-parts/modal-submission'); ?>

<?php wp_footer(); ?>
</body>
</html>
