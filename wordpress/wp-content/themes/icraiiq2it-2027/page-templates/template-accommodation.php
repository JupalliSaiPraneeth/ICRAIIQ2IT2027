<?php
/**
 * Template Name: Accommodation Guide
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();

$hotels = [
    [
        'name'        => 'Novotel Vijayawada Varun',
        'desc'        => 'Luxury 5-star hotel with rooftop pool, spa, and fine-dining restaurants.',
        'rating'      => '4.5',
        'reviews'     => '2,317 reviews',
        'image'       => 'https://nriit.edu.in/icraiq2it-2026/Novotel.webp',
        'bookingUrl'  => 'https://novotel.accor.com/gb/city/hotels-vijayawada-v5676.shtml',
        'tag'         => '5-Star Luxury',
    ],
    [
        'name'        => 'Lemon Tree Premier',
        'desc'        => 'Elegant rooms, fitness centre, and outdoor pool. Centrally located.',
        'rating'      => '4.4',
        'reviews'     => '1,876 reviews',
        'image'       => 'https://nriit.edu.in/icraiq2it-2026/lemon.webp',
        'bookingUrl'  => 'https://www.lemontreehotels.com/lemon-tree-premier/vijayawada/hotel-vijayawada',
        'tag'         => 'Premier Business',
    ],
    [
        'name'        => 'Fortune Murali Park',
        'desc'        => 'Popular business hotel with conference halls and multi-cuisine restaurant.',
        'rating'      => '4.3',
        'reviews'     => '1,120 reviews',
        'image'       => 'https://nriit.edu.in/icraiq2it-2026/murali.webp',
        'bookingUrl'  => 'https://www.fortunehotels.in/vijayawada-fortune-murali-park.dh.14',
        'tag'         => 'Business Hotel',
    ],
    [
        'name'        => 'Minerva Grand',
        'desc'        => 'Upscale hotel in city centre with stylish rooms, multi-cuisine dining & banquet facilities.',
        'rating'      => '4.2',
        'reviews'     => '1,420 reviews',
        'image'       => 'https://nriit.edu.in/icraiq2it-2026/minverva.webp',
        'bookingUrl'  => 'https://minervahotels.in/',
        'tag'         => 'Upscale City Hub',
    ],
    [
        'name'        => 'Quality Hotel DV Manor',
        'desc'        => 'Excellent mid-range hotel with great dining options and central location.',
        'rating'      => '4.2',
        'reviews'     => '925 reviews',
        'image'       => 'https://nriit.edu.in/icraiq2it-2026/dv.webp',
        'bookingUrl'  => 'http://www.hoteldvmanor.com/',
        'tag'         => 'Mid-Range Classic',
    ],
    [
        'name'        => 'Hotel Manorama',
        'desc'        => 'Comfortable 3-star stay near railway station with easy access to MG Road & Durga Temple.',
        'rating'      => '4.1',
        'reviews'     => '1,230 reviews',
        'image'       => 'https://nriit.edu.in/icraiq2it-2026/manorama.webp',
        'bookingUrl'  => 'https://www.hotelmanorama.com/',
        'tag'         => '3-Star Station Hub',
    ],
    [
        'name'        => 'Swarna Palace',
        'desc'        => 'Modern 3-star hotel in heart of Vijayawada with banquet halls and in-house restaurant.',
        'rating'      => '4.1',
        'reviews'     => '1,150 reviews',
        'image'       => 'https://nriit.edu.in/icraiq2it-2026/swarna.webp',
        'bookingUrl'  => 'https://www.hotelswarnapalace.com/',
        'tag'         => 'Heart of City',
    ],
    [
        'name'        => 'Vivanta Vijayawada',
        'desc'        => 'Modern 5-star hotel on MG Road featuring rooftop restaurant and fitness centre.',
        'rating'      => '4.3',
        'reviews'     => '1,560 reviews',
        'image'       => 'https://nriit.edu.in/icraiq2it-2026/vivanta.webp',
        'bookingUrl'  => 'https://www.tajhotels.com/en-in/gateway/mg-road-vijayawada/',
        'tag'         => '5-Star MG Road',
    ],
    [
        'name'        => 'Hotel Ilapuram',
        'desc'        => 'Boutique 3-star hotel blending heritage with contemporary elegance and veg dining.',
        'rating'      => '3.9',
        'reviews'     => '890 reviews',
        'image'       => 'https://nriit.edu.in/icraiq2it-2026/ilapuram.webp',
        'bookingUrl'  => 'https://www.hotelilapuram.com/',
        'tag'         => 'Boutique Stay',
    ],
];
?>

<main class="min-h-screen bg-white text-[#17213a] antialiased pb-12">
    <!-- Header -->
    <section class="bg-white py-5 sm:py-6">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-3xl font-black uppercase tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px]">
                Accommodation <span class="text-[#F97316]">Guide</span>
            </h1>
            <div class="mx-auto mt-2 h-1 w-24 rounded-full bg-[#F97316]"></div>
            <p class="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                <?php esc_html_e('Curated recommended hotels and lodging options in Vijayawada for conference delegates.', 'icraiiq2it-2027'); ?>
            </p>
        </div>
    </section>

    <!-- Hotel Cards Grid -->
    <section class="px-4 sm:px-6 lg:px-8 py-4">
        <div class="mx-auto max-w-[1240px]">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <?php foreach ($hotels as $h) : ?>
                    <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-orange-300 hover:shadow-md transition-all flex flex-col justify-between">
                        <div>
                            <div class="relative aspect-video w-full overflow-hidden bg-slate-100">
                                <img src="<?php echo esc_url($h['image']); ?>" alt="<?php echo esc_attr($h['name']); ?>" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy">
                                <span class="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-[#1D315F] text-white text-[10px] font-bold">
                                    <?php echo esc_html($h['tag']); ?>
                                </span>
                            </div>

                            <div class="p-4 sm:p-5">
                                <div class="flex items-center justify-between mb-1">
                                    <h3 class="text-base font-bold text-[#1D315F]"><?php echo esc_html($h['name']); ?></h3>
                                    <span class="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                                        ★ <?php echo esc_html($h['rating']); ?>
                                    </span>
                                </div>
                                <div class="text-[11px] text-slate-400 mb-2"><?php echo esc_html($h['reviews']); ?></div>
                                <p class="text-xs text-slate-600 leading-relaxed">
                                    <?php echo esc_html($h['desc']); ?>
                                </p>
                            </div>
                        </div>

                        <div class="p-4 sm:p-5 pt-0">
                            <a 
                                href="<?php echo esc_url($h['bookingUrl']); ?>" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                class="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600 text-slate-700 text-xs font-bold transition-all"
                            >
                                <span><?php esc_html_e('View Hotel & Book', 'icraiiq2it-2027'); ?></span>
                                <?php echo icraiiq2it_svg('external-link', 'w-3.5 h-3.5'); ?>
                            </a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
