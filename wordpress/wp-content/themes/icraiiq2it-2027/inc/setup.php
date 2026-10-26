<?php
/**
 * Theme Setup and Asset Enqueues
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function icraiiq2it_setup() {
    // Make theme available for translation.
    load_theme_textdomain('icraiiq2it-2027', get_template_directory() . '/languages');

    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');
    add_image_size('conference-card', 600, 400, true);
    add_image_size('speaker-avatar', 400, 400, true);
    add_image_size('gallery-thumb', 800, 600, false);

    // Switch default core markup for search form, comment form, and comments to output valid HTML5.
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ]);

    // Add support for core custom logo.
    add_theme_support('custom-logo', [
        'height'      => 100,
        'width'       => 300,
        'flex-width'  => true,
        'flex-height' => true,
    ]);

    // Add support for full and wide align images.
    add_theme_support('align-wide');

    // Register navigation menus.
    register_nav_menus([
        'primary'   => __('Primary Navigation Menu', 'icraiiq2it-2027'),
        'footer'    => __('Footer Navigation Menu', 'icraiiq2it-2027'),
        'secondary' => __('Secondary Menu (Archives / Brochure)', 'icraiiq2it-2027'),
    ]);
}
add_action('after_setup_theme', 'icraiiq2it_setup');

/**
 * Enqueue scripts and styles.
 */
function icraiiq2it_scripts() {
    $theme_version = wp_get_theme()->get('Version');

    // Google Fonts: Plus Jakarta Sans, Inter, JetBrains Mono
    wp_enqueue_style(
        'icraiiq2it-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap',
        [],
        null
    );

    // Main Theme Compiled Stylesheet
    wp_enqueue_style(
        'icraiiq2it-main',
        get_template_directory_uri() . '/assets/css/main.css',
        [],
        $theme_version
    );

    // Theme root stylesheet for WP standards & child theme compatibility
    wp_enqueue_style(
        'icraiiq2it-style',
        get_stylesheet_uri(),
        ['icraiiq2it-main'],
        $theme_version
    );

    // Core Theme JavaScript
    wp_enqueue_script(
        'icraiiq2it-navigation',
        get_template_directory_uri() . '/assets/js/navigation.js',
        [],
        $theme_version,
        true
    );

    wp_enqueue_script(
        'icraiiq2it-carousel',
        get_template_directory_uri() . '/assets/js/carousel.js',
        [],
        $theme_version,
        true
    );

    wp_enqueue_script(
        'icraiiq2it-calculator',
        get_template_directory_uri() . '/assets/js/calculator.js',
        [],
        $theme_version,
        true
    );

    wp_enqueue_script(
        'icraiiq2it-pdf-generator',
        get_template_directory_uri() . '/assets/js/pdf-generator.js',
        [],
        $theme_version,
        true
    );

    wp_enqueue_script(
        'icraiiq2it-gallery',
        get_template_directory_uri() . '/assets/js/gallery.js',
        [],
        $theme_version,
        true
    );

    wp_enqueue_script(
        'icraiiq2it-submission',
        get_template_directory_uri() . '/assets/js/submission.js',
        [],
        $theme_version,
        true
    );

    // Localize data for frontend calculators, AJAX submissions, and nonces
    $fee_settings = icraiiq2it_get_fee_settings();
    $bank_settings = icraiiq2it_get_bank_settings();
    $general_settings = icraiiq2it_get_general_settings();

    wp_localize_script('icraiiq2it-calculator', 'icraiiq2itData', [
        'ajaxUrl'        => admin_url('admin-ajax.php'),
        'nonce'          => wp_create_nonce('icraiiq2it_nonce'),
        'fees'           => $fee_settings,
        'bank'           => $bank_settings,
        'general'        => $general_settings,
        'themeUrl'       => get_template_directory_uri(),
        'siteUrl'        => home_url('/'),
    ]);
}
add_action('wp_enqueue_scripts', 'icraiiq2it_scripts');

/**
 * Automatically create default conference pages upon theme activation if they don't exist.
 */
function icraiiq2it_create_default_pages() {
    $pages = [
        'about' => [
            'title'    => 'About the Conference',
            'template' => 'page-templates/template-about.php',
        ],
        'call-for-papers' => [
            'title'    => 'Call for Papers',
            'template' => 'page-templates/template-call-for-papers.php',
        ],
        'speakers' => [
            'title'    => 'Keynote Speakers',
            'template' => 'page-templates/template-speakers.php',
        ],
        'committee' => [
            'title'    => 'Conference Committees',
            'template' => 'page-templates/template-committee.php',
        ],
        'registration' => [
            'title'    => 'Registration',
            'template' => 'page-templates/template-registration.php',
        ],
        'venue' => [
            'title'    => 'Venue & Location',
            'template' => 'page-templates/template-venue.php',
        ],
        'contact' => [
            'title'    => 'Contact the Secretariat',
            'template' => 'page-templates/template-contact.php',
        ],
        'awards' => [
            'title'    => 'Awards & Recognition',
            'template' => 'page-templates/template-awards.php',
        ],
        'accommodation' => [
            'title'    => 'Accommodation Guide',
            'template' => 'page-templates/template-accommodation.php',
        ],
        'archives' => [
            'title'    => 'Conference Archives',
            'template' => 'page-templates/template-archives.php',
        ],
        'brochure' => [
            'title'    => 'Official Brochure',
            'template' => 'page-templates/template-brochure.php',
        ],
    ];

    foreach ($pages as $slug => $page_info) {
        $existing = get_page_by_path($slug);
        if (!$existing) {
            $page_id = wp_insert_post([
                'post_title'     => $page_info['title'],
                'post_name'      => $slug,
                'post_status'    => 'publish',
                'post_type'      => 'page',
                'comment_status' => 'closed',
            ]);
            if ($page_id && !is_wp_error($page_id) && !empty($page_info['template'])) {
                update_post_meta($page_id, '_wp_page_template', $page_info['template']);
            }
        }
    }
}
add_action('after_switch_theme', 'icraiiq2it_create_default_pages');
