<?php
/**
 * Custom Post Types & Taxonomies
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register all Custom Post Types and Taxonomies.
 */
function icraiiq2it_register_post_types() {
    // 1. Keynote Speakers
    register_post_type('conference_speaker', [
        'labels' => [
            'name'               => __('Speakers', 'icraiiq2it-2027'),
            'singular_name'      => __('Speaker', 'icraiiq2it-2027'),
            'add_new'            => __('Add New Speaker', 'icraiiq2it-2027'),
            'add_new_item'       => __('Add New Keynote Speaker', 'icraiiq2it-2027'),
            'edit_item'          => __('Edit Speaker', 'icraiiq2it-2027'),
            'all_items'          => __('All Speakers', 'icraiiq2it-2027'),
        ],
        'public'       => true,
        'has_archive'  => false,
        'show_in_menu' => true,
        'menu_icon'    => 'dashicons-businessperson',
        'supports'     => ['title', 'editor', 'thumbnail', 'custom-fields', 'page-attributes'],
        'show_in_rest' => true,
        'rewrite'      => ['slug' => 'speaker'],
    ]);

    // 2. Committee Members
    register_post_type('committee_member', [
        'labels' => [
            'name'               => __('Committee Members', 'icraiiq2it-2027'),
            'singular_name'      => __('Committee Member', 'icraiiq2it-2027'),
            'add_new'            => __('Add Member', 'icraiiq2it-2027'),
            'add_new_item'       => __('Add New Committee Member', 'icraiiq2it-2027'),
            'edit_item'          => __('Edit Committee Member', 'icraiiq2it-2027'),
            'all_items'          => __('All Committee Members', 'icraiiq2it-2027'),
        ],
        'public'       => true,
        'has_archive'  => false,
        'show_in_menu' => true,
        'menu_icon'    => 'dashicons-groups',
        'supports'     => ['title', 'thumbnail', 'custom-fields', 'page-attributes'],
        'show_in_rest' => true,
    ]);

    // Taxonomy: Committee Categories
    register_taxonomy('committee_category', ['committee_member'], [
        'labels' => [
            'name'              => __('Committee Categories', 'icraiiq2it-2027'),
            'singular_name'     => __('Committee Category', 'icraiiq2it-2027'),
            'search_items'      => __('Search Categories', 'icraiiq2it-2027'),
            'all_items'         => __('All Categories', 'icraiiq2it-2027'),
            'edit_item'         => __('Edit Category', 'icraiiq2it-2027'),
            'update_item'       => __('Update Category', 'icraiiq2it-2027'),
            'add_new_item'      => __('Add New Category', 'icraiiq2it-2027'),
            'new_item_name'     => __('New Category Name', 'icraiiq2it-2027'),
            'menu_name'         => __('Categories', 'icraiiq2it-2027'),
        ],
        'hierarchical'      => true,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'show_in_rest'      => true,
    ]);

    // 3. Research Tracks
    register_post_type('conference_track', [
        'labels' => [
            'name'               => __('Research Tracks', 'icraiiq2it-2027'),
            'singular_name'      => __('Research Track', 'icraiiq2it-2027'),
            'add_new'            => __('Add Track', 'icraiiq2it-2027'),
            'add_new_item'       => __('Add New Research Track', 'icraiiq2it-2027'),
            'edit_item'          => __('Edit Research Track', 'icraiiq2it-2027'),
            'all_items'          => __('All Research Tracks', 'icraiiq2it-2027'),
        ],
        'public'       => true,
        'has_archive'  => false,
        'show_in_menu' => true,
        'menu_icon'    => 'dashicons-networking',
        'supports'     => ['title', 'editor', 'custom-fields', 'page-attributes'],
        'show_in_rest' => true,
    ]);

    // 4. Paper Submissions (Private administrative CPT)
    register_post_type('paper_submission', [
        'labels' => [
            'name'               => __('Paper Submissions', 'icraiiq2it-2027'),
            'singular_name'      => __('Paper Submission', 'icraiiq2it-2027'),
            'all_items'          => __('All Submissions', 'icraiiq2it-2027'),
            'edit_item'          => __('Review Submission', 'icraiiq2it-2027'),
        ],
        'public'              => false,
        'publicly_queryable'  => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'query_var'           => false,
        'rewrite'             => false,
        'capability_type'     => 'post',
        'capabilities'        => [
            'create_posts' => 'do_not_allow', // Only created via AJAX endpoint
        ],
        'map_meta_cap'        => true,
        'has_archive'         => false,
        'hierarchical'        => false,
        'menu_icon'           => 'dashicons-media-document',
        'supports'            => ['title', 'custom-fields'],
        'show_in_rest'        => false,
    ]);
}
add_action('init', 'icraiiq2it_register_post_types');

/**
 * Populate default taxonomy terms on theme activation.
 */
function icraiiq2it_populate_default_terms() {
    $categories = [
        'chief-patrons'       => 'Chief Patrons',
        'patrons'             => 'Patrons',
        'general-chair'       => 'General Chair',
        'conveners'           => 'Convener & Co-Convener',
        'advisory'            => 'Advisory Committee (International)',
        'technical-programme' => 'Technical Program Committee',
        'national-advisory'   => 'Advisory Committee / National Advisory',
        'editorial'           => 'Editorial Committee',
    ];

    foreach ($categories as $slug => $name) {
        if (!term_exists($slug, 'committee_category')) {
            wp_insert_term($name, 'committee_category', ['slug' => $slug]);
        }
    }
}
add_action('after_switch_theme', 'icraiiq2it_populate_default_terms');

/**
 * Custom columns in Admin for Paper Submissions
 */
function icraiiq2it_submission_columns($columns) {
    return [
        'cb'           => $columns['cb'],
        'title'        => __('Reference / Paper Title', 'icraiiq2it-2027'),
        'author'       => __('Author & Email', 'icraiiq2it-2027'),
        'affiliation'  => __('Institution', 'icraiiq2it-2027'),
        'track'        => __('Track', 'icraiiq2it-2027'),
        'manuscript'   => __('Manuscript PDF', 'icraiiq2it-2027'),
        'status'       => __('Status', 'icraiiq2it-2027'),
        'date'         => __('Submitted Date', 'icraiiq2it-2027'),
    ];
}
add_filter('manage_paper_submission_posts_columns', 'icraiiq2it_submission_columns');

function icraiiq2it_render_submission_columns($column, $post_id) {
    switch ($column) {
        case 'author':
            $name = get_post_meta($post_id, '_author_name', true);
            $email = get_post_meta($post_id, '_author_email', true);
            echo esc_html($name) . '<br><a href="mailto:' . esc_attr($email) . '">' . esc_html($email) . '</a>';
            break;
        case 'affiliation':
            echo esc_html(get_post_meta($post_id, '_affiliation', true));
            break;
        case 'track':
            echo esc_html(get_post_meta($post_id, '_track', true));
            break;
        case 'manuscript':
            $attach_id = get_post_meta($post_id, '_attachment_id', true);
            if ($attach_id) {
                $url = wp_get_attachment_url($attach_id);
                echo '<a href="' . esc_url($url) . '" target="_blank" class="button button-small button-primary"><span class="dashicons dashicons-download" style="vertical-align:middle;font-size:16px;"></span> Download PDF</a>';
            } else {
                echo '<span style="color:#999;">No file attached</span>';
            }
            break;
        case 'status':
            $status = get_post_meta($post_id, '_review_status', true) ?: 'Pending Review';
            $badge_style = 'padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 11px; ';
            if ($status === 'Accepted') {
                $badge_style .= 'background: #d4edda; color: #155724;';
            } elseif ($status === 'Under Review') {
                $badge_style .= 'background: #fff3cd; color: #856404;';
            } elseif ($status === 'Rejected') {
                $badge_style .= 'background: #f8d7da; color: #721c24;';
            } else {
                $badge_style .= 'background: #e2e3e5; color: #383d41;';
            }
            echo '<span style="' . esc_attr($badge_style) . '">' . esc_html($status) . '</span>';
            break;
    }
}
add_action('manage_paper_submission_posts_custom_column', 'icraiiq2it_render_submission_columns', 10, 2);
