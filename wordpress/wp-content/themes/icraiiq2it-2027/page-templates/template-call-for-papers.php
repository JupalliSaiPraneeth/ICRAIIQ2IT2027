<?php
/**
 * Template Name: Call for Papers
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();

$general = icraiiq2it_get_general_settings();
$dates = icraiiq2it_get_dates_settings();

$topics = [
    ['name' => 'Machine Learning and Deep Learning Applications', 'cat' => 'ai'],
    ['name' => 'Generative AI and Large Language Models (LLMs)', 'cat' => 'ai'],
    ['name' => 'Explainable, Ethical, and Responsible AI Systems', 'cat' => 'ai'],
    ['name' => 'Computer Vision, Pattern Recognition & Image Processing', 'cat' => 'ai'],
    ['name' => 'Natural Language Processing and Speech Technologies', 'cat' => 'ai'],
    ['name' => 'Human–Computer Interaction and Cognitive Computing', 'cat' => 'ai'],
    ['name' => 'Quantum Inspired Computing and Algorithms', 'cat' => 'quantum'],
    ['name' => 'Quantum Cryptography and Secure Key Distribution', 'cat' => 'quantum'],
    ['name' => 'Cybersecurity, Blockchain, and Digital Forensics', 'cat' => 'quantum'],
    ['name' => 'Zero-Trust Architectures & Network Security', 'cat' => 'quantum'],
    ['name' => 'Data Science, Big Data Analytics & Business Intelligence', 'cat' => 'cloud'],
    ['name' => 'Cloud Computing, Distributed & Grid Architectures', 'cat' => 'cloud'],
    ['name' => 'Edge Computing and Intelligent Industrial Automation', 'cat' => 'cloud'],
    ['name' => 'High-Performance Computing and Next-Gen Networks (6G/5G)', 'cat' => 'cloud'],
    ['name' => 'Internet of Things (IoT) and Smart Embedded Systems', 'cat' => 'applications'],
    ['name' => 'Embedded Systems, VLSI and Smart Sensor Technologies', 'cat' => 'applications'],
    ['name' => 'AI in Healthcare, Bioinformatics, and Smart Diagnostics', 'cat' => 'applications'],
    ['name' => 'AI for Sustainable Agriculture and Smart Irrigation', 'cat' => 'applications'],
    ['name' => 'AI for Sustainable Development & Climate Solutions', 'cat' => 'applications'],
    ['name' => 'Deep-Tech Innovations, Robotics and Autonomous Systems', 'cat' => 'applications'],
    ['name' => 'AI Applications in Fintech, Manufacturing, and Logistics', 'cat' => 'applications'],
];

$guidelines = [
    [
        'title' => 'Format & Page Limit',
        'desc'  => 'IEEE standard 2-column layout (A4). Maximum of 6 pages including figures, tables, and bibliography.',
    ],
    [
        'title' => 'Submission Portal',
        'desc'  => 'Submit manuscripts in PDF format exclusively through the Microsoft CMT portal.',
    ],
    [
        'title' => 'Originality & Plagiarism (<10%)',
        'desc'  => 'Unpublished, original research only. Similarity must be strictly below 10% excluding references.',
    ],
    [
        'title' => 'Peer Review Process',
        'desc'  => "All submitted manuscripts are evaluated by two subject experts. If both reviewers recommend acceptance, the manuscript may be accepted, subject to editorial approval. If recommendations differ, a third review will decide.",
    ],
    [
        'title' => 'Registration & Presentation',
        'desc'  => 'At least one author must register by ' . $dates['registration_deadline'] . ' and present the paper during the conference.',
    ],
];
?>

<main class="min-h-screen bg-white text-[#17213a] antialiased pb-12">
    <!-- Header -->
    <section class="bg-white py-5 sm:py-6">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-[clamp(1.15rem,5.8vw,2.25rem)] font-black uppercase tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px]">
                <span class="block whitespace-nowrap lg:inline">Call for Papers &amp; </span>
                <span class="block whitespace-nowrap text-[#F97316] lg:inline">Submission Guidelines</span>
            </h1>
            <div class="mx-auto mt-2 h-1 w-24 rounded-full bg-[#F97316]"></div>

            <!-- Quick Action Buttons -->
            <div class="mt-4 flex flex-wrap items-center justify-center gap-3">
                <a 
                    href="<?php echo esc_url($general['cmt_submission_url'] ?: 'https://cmt3.research.microsoft.com'); ?>" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                >
                    <span><?php esc_html_e('Submit via Microsoft CMT', 'icraiiq2it-2027'); ?></span>
                    <?php echo icraiiq2it_svg('external-link', 'w-4 h-4'); ?>
                </a>

                <button 
                    type="button" 
                    class="open-submission-modal-trigger inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                >
                    <span><?php esc_html_e('Institutional Portal', 'icraiiq2it-2027'); ?></span>
                    <?php echo icraiiq2it_svg('sparkles', 'w-4 h-4 text-brand-400'); ?>
                </button>

                <a 
                    href="<?php echo esc_url($general['ieee_template_url'] ?: 'https://www.ieee.org/conferences/publishing/templates'); ?>" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-orange-500 hover:text-orange-600 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                    <span><?php esc_html_e('IEEE Templates', 'icraiiq2it-2027'); ?></span>
                    <?php echo icraiiq2it_svg('download', 'w-4 h-4'); ?>
                </a>
            </div>
        </div>
    </section>

    <!-- Topics Grid with Category Tabs -->
    <section class="px-4 sm:px-6 lg:px-8 py-4">
        <div class="mx-auto max-w-[1280px]">
            <div class="mb-4">
                <h2 class="text-xl sm:text-2xl font-black text-[#1D315F]">
                    <?php esc_html_e('Frontier Research Topics (21 Tracks)', 'icraiiq2it-2027'); ?>
                </h2>
                <p class="text-xs text-slate-600 mt-1">
                    <?php esc_html_e('Authors are invited to submit prospective original research across these topics.', 'icraiiq2it-2027'); ?>
                </p>
            </div>

            <!-- Filter Buttons -->
            <div class="flex flex-wrap gap-2 mb-6" id="topic-filter-bar">
                <button type="button" class="topic-btn active px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#F97316] text-white" data-filter="all">All (21)</button>
                <button type="button" class="topic-btn px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-700 transition-colors" data-filter="ai">AI &amp; ML</button>
                <button type="button" class="topic-btn px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-700 transition-colors" data-filter="quantum">Quantum &amp; Security</button>
                <button type="button" class="topic-btn px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-700 transition-colors" data-filter="cloud">Cloud &amp; Distributed</button>
                <button type="button" class="topic-btn px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-700 transition-colors" data-filter="applications">Emerging &amp; Applied</button>
            </div>

            <!-- Topics List -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" id="topics-container">
                <?php foreach ($topics as $t) : ?>
                    <div class="topic-card flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 bg-white hover:border-orange-300 hover:shadow-xs transition-all" data-cat="<?php echo esc_attr($t['cat']); ?>">
                        <span class="h-2 w-2 rounded-full bg-[#F97316] shrink-0"></span>
                        <span class="text-xs sm:text-sm font-semibold text-slate-800"><?php echo esc_html($t['name']); ?></span>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Submission Guidelines -->
    <section class="bg-slate-50 px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-200 mt-8">
        <div class="mx-auto max-w-[1280px]">
            <div class="text-center mb-6">
                <h2 class="text-2xl font-black text-[#1D315F]">
                    <?php esc_html_e('Manuscript Submission Guidelines', 'icraiiq2it-2027'); ?>
                </h2>
                <div class="mx-auto mt-2 h-1 w-20 rounded-full bg-[#F97316]"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <?php foreach ($guidelines as $idx => $g) : ?>
                    <div class="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                        <div class="text-xs font-extrabold text-[#F97316] mb-1">
                            0<?php echo esc_html($idx + 1); ?>. GUIDELINE
                        </div>
                        <h3 class="text-base font-bold text-[#1D315F] mb-2">
                            <?php echo esc_html($g['title']); ?>
                        </h3>
                        <p class="text-xs leading-relaxed text-slate-600">
                            <?php echo esc_html($g['desc']); ?>
                        </p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<script>
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.topic-btn');
    var cards = document.querySelectorAll('.topic-card');

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var filter = btn.getAttribute('data-filter');
            buttons.forEach(function (b) {
                b.classList.remove('bg-[#F97316]', 'text-white', 'active');
                b.classList.add('bg-slate-100', 'text-slate-700');
            });
            btn.classList.add('bg-[#F97316]', 'text-white', 'active');
            btn.classList.remove('bg-slate-100', 'text-slate-700');

            cards.forEach(function (c) {
                if (filter === 'all' || c.getAttribute('data-cat') === filter) {
                    c.classList.remove('hidden');
                } else {
                    c.classList.add('hidden');
                }
            });
        });
    });
});
</script>

<?php
get_footer();
