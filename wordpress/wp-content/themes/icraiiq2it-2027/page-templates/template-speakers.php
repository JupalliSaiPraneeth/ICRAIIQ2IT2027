<?php
/**
 * Template Name: Keynote Speakers
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();

$speakers_query = new WP_Query([
    'post_type'      => 'conference_speaker',
    'posts_per_page' => -1,
    'orderby'        => 'menu_order title',
    'order'          => 'ASC',
]);
?>

<main class="min-h-screen bg-white text-[#17213a] py-8 sm:py-12">
    <div class="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <!-- Section Header -->
        <div class="text-center mb-10">
            <span class="text-xs font-extrabold uppercase tracking-widest text-[#F97316]">
                <?php esc_html_e('PLENARY KEYNOTES', 'icraiiq2it-2027'); ?>
            </span>
            <h1 class="mt-1 text-3xl sm:text-4xl lg:text-[42px] font-black text-[#1D315F]">
                <?php esc_html_e('World-Renowned Keynote Speakers', 'icraiiq2it-2027'); ?>
            </h1>
            <div class="mx-auto mt-2 h-1 w-24 rounded-full bg-[#F97316]"></div>
            <p class="mt-3 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                <?php esc_html_e('Learn from leading international professors, scientists, and industry research directors.', 'icraiiq2it-2027'); ?>
            </p>
        </div>

        <?php if ($speakers_query->have_posts()) : ?>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <?php while ($speakers_query->have_posts()) : $speakers_query->the_post(); 
                    $designation = get_post_meta(get_the_ID(), '_speaker_designation', true);
                    $institution = get_post_meta(get_the_ID(), '_speaker_institution', true);
                    $country     = get_post_meta(get_the_ID(), '_speaker_country', true);
                    $topic       = get_post_meta(get_the_ID(), '_speaker_topic', true);
                    $thumb_url   = get_the_post_thumbnail_url(get_the_ID(), 'speaker-avatar');
                ?>
                    <div class="speaker-card cursor-pointer rounded-2xl border border-slate-200 bg-navy-900 p-4 shadow-sm transition-all duration-300 hover:border-brand-500/60 hover:shadow-[0_0_35px_rgba(251,146,0,0.2)] group"
                         data-name="<?php the_title_attribute(); ?>"
                         data-designation="<?php echo esc_attr($designation); ?>"
                         data-institution="<?php echo esc_attr($institution . ($country ? ', ' . $country : '')); ?>"
                         data-topic="<?php echo esc_attr($topic); ?>"
                         data-bio="<?php echo esc_attr(wp_strip_all_tags(get_the_content())); ?>"
                         data-img="<?php echo esc_url($thumb_url); ?>"
                    >
                        <div class="relative mb-4 overflow-hidden rounded-xl aspect-square bg-navy-850 border border-brand-500/20">
                            <?php if ($thumb_url) : ?>
                                <img src="<?php echo esc_url($thumb_url); ?>" alt="<?php the_title_attribute(); ?>" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            <?php else : ?>
                                <div class="w-full h-full flex items-center justify-center text-slate-500 bg-navy-800">
                                    <span class="dashicons dashicons-businessman" style="font-size:64px;width:64px;height:64px;"></span>
                                </div>
                            <?php endif; ?>
                            <span class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-brand-500 text-slate-950 font-mono text-[9px] font-extrabold uppercase">
                                KEYNOTE
                            </span>
                        </div>

                        <h2 class="text-base font-bold text-white group-hover:text-brand-400 transition-colors leading-snug">
                            <?php the_title(); ?>
                        </h2>
                        <div class="text-xs font-semibold text-brand-400 mt-0.5">
                            <?php echo esc_html($designation); ?>
                        </div>
                        <div class="text-xs text-slate-400 mt-1 line-clamp-1">
                            <?php echo esc_html($institution); ?><?php echo $country ? ', ' . esc_html($country) : ''; ?>
                        </div>

                        <?php if ($topic) : ?>
                            <div class="mt-3 pt-3 border-t border-white/10">
                                <div class="text-[10px] font-mono font-bold text-brand-300 uppercase">
                                    <?php esc_html_e('Plenary Topic:', 'icraiiq2it-2027'); ?>
                                </div>
                                <p class="text-xs text-slate-300 italic line-clamp-2 mt-0.5">
                                    "<?php echo esc_html($topic); ?>"
                                </p>
                            </div>
                        <?php endif; ?>
                    </div>
                <?php endwhile; wp_reset_postdata(); ?>
            </div>
        <?php else : ?>
            <div class="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-12 text-center text-slate-600 max-w-xl mx-auto">
                <span class="text-brand-500 block mb-2"><?php echo icraiiq2it_svg('sparkles', 'w-8 h-8 mx-auto'); ?></span>
                <h3 class="text-lg font-bold text-slate-800"><?php esc_html_e('Keynote Speakers Announcement', 'icraiiq2it-2027'); ?></h3>
                <p class="mt-1 text-sm text-slate-600">
                    <?php esc_html_e('The keynote speakers lineup and plenary session abstracts are being finalized and will be published shortly.', 'icraiiq2it-2027'); ?>
                </p>
            </div>
        <?php endif; ?>
    </div>
</main>

<!-- Speaker Modal -->
<div id="speaker-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
    <div class="relative w-full max-w-lg bg-navy-900 border border-brand-500/40 rounded-2xl shadow-2xl overflow-hidden text-white p-6">
        <button type="button" id="close-speaker-modal" class="absolute top-4 right-4 text-slate-400 hover:text-white">
            <?php echo icraiiq2it_svg('close', 'w-5 h-5'); ?>
        </button>
        <div class="flex items-center gap-4 mb-4">
            <img id="speaker-modal-img" src="" alt="" class="w-16 h-16 rounded-xl object-cover bg-navy-800 border border-brand-500/30">
            <div>
                <h3 id="speaker-modal-name" class="text-lg font-bold text-white"></h3>
                <div id="speaker-modal-desig" class="text-xs text-brand-400"></div>
                <div id="speaker-modal-inst" class="text-xs text-slate-400"></div>
            </div>
        </div>
        <div class="mb-3 p-3 rounded-xl bg-navy-850 border border-white/5">
            <div class="text-[10px] font-mono uppercase text-brand-300 font-bold mb-1"><?php esc_html_e('Topic', 'icraiiq2it-2027'); ?></div>
            <div id="speaker-modal-topic" class="text-xs italic text-slate-200"></div>
        </div>
        <div>
            <div class="text-[10px] font-mono uppercase text-slate-400 font-bold mb-1"><?php esc_html_e('Biography', 'icraiiq2it-2027'); ?></div>
            <p id="speaker-modal-bio" class="text-xs text-slate-300 leading-relaxed max-h-48 overflow-y-auto"></p>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('speaker-modal');
    var closeBtn = document.getElementById('close-speaker-modal');

    document.querySelectorAll('.speaker-card').forEach(function (card) {
        card.addEventListener('click', function () {
            document.getElementById('speaker-modal-name').textContent = card.getAttribute('data-name');
            document.getElementById('speaker-modal-desig').textContent = card.getAttribute('data-designation');
            document.getElementById('speaker-modal-inst').textContent = card.getAttribute('data-institution');
            document.getElementById('speaker-modal-topic').textContent = card.getAttribute('data-topic');
            document.getElementById('speaker-modal-bio').textContent = card.getAttribute('data-bio');
            document.getElementById('speaker-modal-img').src = card.getAttribute('data-img');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });
    }
});
</script>

<?php
get_footer();
