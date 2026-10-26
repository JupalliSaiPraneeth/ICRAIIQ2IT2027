<?php
/**
 * Template Name: Venue & Location
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();

$general = icraiiq2it_get_general_settings();

$attractions = [
    ['name' => 'Akkanna Madanna Caves', 'cat' => 'heritage', 'desc' => '7th-century rock-cut cave monuments dedicated to Shiva.'],
    ['name' => 'Amaravati Shrine', 'cat' => 'heritage', 'desc' => 'Historic Buddhist stupa site and ancient Amaralingeswara temple.'],
    ['name' => 'AP High Court', 'cat' => 'capital', 'desc' => 'High Court of Andhra Pradesh located at Nelapadu, Amaravati.'],
    ['name' => 'AP Secretariat', 'cat' => 'capital', 'desc' => 'Administrative headquarters of Andhra Pradesh government in Velagapudi.'],
    ['name' => "Asia's Largest Mango Market", 'cat' => 'culture', 'desc' => 'Renowned agricultural trade hub at Nunna operating during mango season.'],
    ['name' => 'Bapu Museum', 'cat' => 'culture', 'desc' => 'State-of-the-art archaeological museum with historic antiquities & art.'],
    ['name' => 'Bhavani Island', 'cat' => 'nature', 'desc' => 'Scenic 133-acre river island on Krishna River with recreation & boating.'],
    ['name' => 'Gandhi Hill', 'cat' => 'culture', 'desc' => 'Historic memorial monument with Gandhi stupa, library & sound-and-light show.'],
    ['name' => 'Gunadala Matha Shrine', 'cat' => 'heritage', 'desc' => 'Prominent Catholic pilgrimage shrine with church carved on hill slopes.'],
    ['name' => 'Hailand', 'cat' => 'culture', 'desc' => 'Sprawling cultural and amusement theme park near Mangalagiri.'],
    ['name' => 'Hazratbal Mosque', 'cat' => 'heritage', 'desc' => 'Prominent Islamic shrine housing a sacred relic visited by thousands.'],
    ['name' => 'Hinkar Thirtha Jain Temple', 'cat' => 'heritage', 'desc' => 'Majestic Jain pilgrimage center with intricate marble carving architecture.'],
    ['name' => 'ISKCON Temple', 'cat' => 'heritage', 'desc' => 'Spiritual cultural center and temple on the banks of Krishna River.'],
    ['name' => 'Kanaka Durga Temple', 'cat' => 'heritage', 'desc' => 'Presiding deity of Vijayawada flanked high atop Indrakeeladri Hills.'],
    ['name' => 'Kolleru Lake', 'cat' => 'nature', 'desc' => 'One of India’s largest freshwater lakes and protected bird sanctuary.'],
    ['name' => 'Kondapalli Fort', 'cat' => 'heritage', 'desc' => '14th-century hill citadel famous for historical bastions and toy craftsmen.'],
    ['name' => 'Kuchipudi Kala Kshetram', 'cat' => 'culture', 'desc' => 'World-renowned village and center of classical Kuchipudi dance heritage.'],
    ['name' => 'Mangalagiri Panakala Swami', 'cat' => 'heritage', 'desc' => 'Historic hill temple of Sri Lakshmi Narasimha Swamy with ancient gopuram.'],
    ['name' => 'Manginapudi Beach', 'cat' => 'nature', 'desc' => 'Historic natural black-sand beach located near Machilipatnam.'],
    ['name' => 'Mogalrajapuram Caves', 'cat' => 'heritage', 'desc' => '5th-century rock architecture featuring shrines of Nataraja and Vinayaka.'],
    ['name' => 'Pavitra Sangamam', 'cat' => 'nature', 'desc' => 'Sacred confluence point where Godavari waters unite with Krishna River.'],
    ['name' => 'Prakasam Barrage', 'cat' => 'nature', 'desc' => '1.2 km road-cum-water regulator structure over the majestic Krishna River.'],
    ['name' => 'Rajiv Gandhi Park', 'cat' => 'culture', 'desc' => 'Horticultural city park featuring musical fountains and mini zoo.'],
    ['name' => 'Scrap Sculpture Park', 'cat' => 'culture', 'desc' => 'Innovative eco-park featuring artistic sculptures crafted from scrap metals.'],
    ['name' => 'Subramanya Swami Temple', 'cat' => 'heritage', 'desc' => 'Revered hill temple in Kothapeta offering scenic city panoramic views.'],
    ['name' => 'Undavalli Caves', 'cat' => 'heritage', 'desc' => 'Famous 4-tiered 7th-century rock sanctuary with colossal Anantasayana Vishnu.'],
    ['name' => 'Uppalapadu Bird Sanctuary', 'cat' => 'nature', 'desc' => 'Protected water wetland sanctuary hosting endangered migratory birds.'],
];
?>

<main class="min-h-screen bg-white text-[#17213a] antialiased pb-12">
    <!-- Header -->
    <section class="bg-white py-5 sm:py-6">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-3xl font-black uppercase tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px]">
                Conference <span class="text-[#F97316]">Venue &amp; City Guide</span>
            </h1>
            <div class="mx-auto mt-2 h-1 w-24 rounded-full bg-[#F97316]"></div>
            <p class="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                <?php echo esc_html($general['venue_name']); ?>
            </p>
        </div>
    </section>

    <!-- Campus & Map Section -->
    <section class="px-4 sm:px-6 lg:px-8 py-4">
        <div class="mx-auto max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div class="space-y-4">
                <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                    <span class="text-xs font-bold text-[#F97316] uppercase"><?php esc_html_e('Host Institution', 'icraiiq2it-2027'); ?></span>
                    <h2 class="text-xl sm:text-2xl font-black text-[#1D315F] mt-1 mb-2">
                        <?php echo esc_html($general['venue_name']); ?>
                    </h2>
                    <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <?php echo esc_html($general['venue_address']); ?>
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2 text-xs">
                        <span class="px-3 py-1 rounded-full bg-slate-100 font-semibold text-slate-700">Deemed to be University</span>
                        <span class="px-3 py-1 rounded-full bg-slate-100 font-semibold text-slate-700">NAAC A+ Grade</span>
                        <span class="px-3 py-1 rounded-full bg-slate-100 font-semibold text-slate-700">AICTE Approved</span>
                        <span class="px-3 py-1 rounded-full bg-slate-100 font-semibold text-slate-700">AICTE IDEA Lab</span>
                    </div>
                </div>

                <!-- Transit Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
                        <div class="text-[#F97316] mb-2"><?php echo icraiiq2it_svg('plane', 'w-6 h-6'); ?></div>
                        <div class="font-bold text-xs text-slate-900"><?php esc_html_e('By Air', 'icraiiq2it-2027'); ?></div>
                        <div class="text-[11px] text-slate-500 mt-1"><?php esc_html_e('Vijayawada Intl. Airport (VGA) ~22 km', 'icraiiq2it-2027'); ?></div>
                    </div>

                    <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
                        <div class="text-[#F97316] mb-2"><?php echo icraiiq2it_svg('train', 'w-6 h-6'); ?></div>
                        <div class="font-bold text-xs text-slate-900"><?php esc_html_e('By Rail', 'icraiiq2it-2027'); ?></div>
                        <div class="text-[11px] text-slate-500 mt-1"><?php esc_html_e('Vijayawada Junction (BZA) ~24 km', 'icraiiq2it-2027'); ?></div>
                    </div>

                    <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
                        <div class="text-[#F97316] mb-2"><?php echo icraiiq2it_svg('bus', 'w-6 h-6'); ?></div>
                        <div class="font-bold text-xs text-slate-900"><?php esc_html_e('By Road', 'icraiiq2it-2027'); ?></div>
                        <div class="text-[11px] text-slate-500 mt-1"><?php esc_html_e('NH-16 & NH-65 Highway Frontage', 'icraiiq2it-2027'); ?></div>
                    </div>
                </div>
            </div>

            <!-- Google Maps Embed -->
            <div class="rounded-2xl border border-slate-200 overflow-hidden shadow-xs h-[380px] bg-slate-100">
                <iframe 
                    title="<?php esc_attr_e('Conference Venue Map', 'icraiiq2it-2027'); ?>"
                    src="https://maps.google.com/maps?q=Dr+RVR+NRI+Institute+of+Technology,+Pothavarappadu,+Agiripalli&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                    class="w-full h-full border-0" 
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    </section>

    <!-- 27 Attractions Grid -->
    <section class="px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-200 mt-6">
        <div class="mx-auto max-w-[1240px]">
            <div class="mb-4">
                <h2 class="text-xl sm:text-2xl font-black text-[#1D315F]">
                    <?php esc_html_e('Vijayawada City Sightseeing & Landmarks (27 Attractions)', 'icraiiq2it-2027'); ?>
                </h2>
                <p class="text-xs text-slate-600 mt-1">
                    <?php esc_html_e('Historic temples, riverfront barrage, caves, parks, and cultural centers.', 'icraiiq2it-2027'); ?>
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <?php foreach ($attractions as $att) : ?>
                    <div class="p-4 rounded-xl border border-slate-200 bg-white hover:border-orange-300 hover:shadow-xs transition-all">
                        <div class="flex items-center justify-between mb-1">
                            <h3 class="text-sm font-bold text-[#1D315F]"><?php echo esc_html($att['name']); ?></h3>
                            <span class="text-[10px] font-bold uppercase tracking-wider text-[#F97316] bg-orange-50 px-2 py-0.5 rounded-full">
                                <?php echo esc_html($att['cat']); ?>
                            </span>
                        </div>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            <?php echo esc_html($att['desc']); ?>
                        </p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
