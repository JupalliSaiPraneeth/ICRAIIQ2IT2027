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
        'status'       => __('Review Status & Decision', 'icraiiq2it-2027'),
        'date'         => __('Submitted Date', 'icraiiq2it-2027'),
    ];
}
add_filter('manage_paper_submission_posts_columns', 'icraiiq2it_submission_columns');

function icraiiq2it_render_submission_columns($column, $post_id) {
    switch ($column) {
        case 'author':
            $name = get_post_meta($post_id, '_author_name', true);
            $email = get_post_meta($post_id, '_author_email', true);
            echo esc_html($name) . '<br><a href="mailto:' . esc_attr($email) . '" style="text-decoration:none;color:#0073aa;">' . esc_html($email) . '</a>';
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
                echo '<a href="' . esc_url($url) . '" target="_blank" class="button button-small" style="background:#1D315F;color:#fff;border:none;"><span class="dashicons dashicons-pdf" style="vertical-align:middle;font-size:15px;margin-right:2px;"></span> Download PDF</a>';
            } else {
                echo '<span style="color:#999;font-size:11px;">No file attached</span>';
            }
            break;
        case 'status':
            $status = get_post_meta($post_id, '_review_status', true) ?: 'Pending Review';
            $badge_style = 'display:inline-block;padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 11px; margin-bottom:6px;';
            if ($status === 'Accepted') {
                $badge_style .= 'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;';
            } elseif ($status === 'Under Review') {
                $badge_style .= 'background: #fff3cd; color: #856404; border: 1px solid #ffeeba;';
            } elseif ($status === 'Rejected') {
                $badge_style .= 'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;';
            } else {
                $badge_style .= 'background: #e2e3e5; color: #383d41; border: 1px solid #d6d8db;';
            }
            echo '<span style="' . esc_attr($badge_style) . '">' . esc_html($status) . '</span><br>';

            // 1-Click Action Buttons with Nonce
            $accept_url = wp_nonce_url(
                admin_url('admin-post.php?action=icraiiq2it_update_status&post_id=' . $post_id . '&new_status=Accepted'),
                'icraiiq2it_status_' . $post_id
            );
            $reject_url = wp_nonce_url(
                admin_url('admin-post.php?action=icraiiq2it_update_status&post_id=' . $post_id . '&new_status=Rejected'),
                'icraiiq2it_status_' . $post_id
            );
            $review_url = wp_nonce_url(
                admin_url('admin-post.php?action=icraiiq2it_update_status&post_id=' . $post_id . '&new_status=Under+Review'),
                'icraiiq2it_status_' . $post_id
            );

            echo '<div style="display:inline-flex;gap:4px;flex-wrap:wrap;margin-top:2px;">';
            if ($status !== 'Accepted') {
                echo '<a href="' . esc_url($accept_url) . '" class="button button-small" style="background:#28a745;color:#fff;border-color:#28a745;font-weight:600;font-size:11px;padding:0 6px;" title="Accept Manuscript">✓ Accept</a>';
            }
            if ($status !== 'Rejected') {
                echo '<a href="' . esc_url($reject_url) . '" class="button button-small" style="background:#dc3545;color:#fff;border-color:#dc3545;font-weight:600;font-size:11px;padding:0 6px;" title="Reject Manuscript">✕ Reject</a>';
            }
            if ($status !== 'Under Review') {
                echo '<a href="' . esc_url($review_url) . '" class="button button-small" style="background:#ffc107;color:#212529;border-color:#ffc107;font-weight:600;font-size:11px;padding:0 6px;" title="Mark Under Review">⏳ Review</a>';
            }
            echo '</div>';
            break;
    }
}
add_action('manage_paper_submission_posts_custom_column', 'icraiiq2it_render_submission_columns', 10, 2);

/**
 * Handle 1-Click Status Update Actions from Admin Table
 */
function icraiiq2it_handle_admin_status_update() {
    if (!current_user_can('edit_posts')) {
        wp_die(__('Unauthorized user capability.', 'icraiiq2it-2027'));
    }

    $post_id    = isset($_GET['post_id']) ? intval($_GET['post_id']) : 0;
    $new_status = isset($_GET['new_status']) ? sanitize_text_field($_GET['new_status']) : '';

    check_admin_referer('icraiiq2it_status_' . $post_id);

    if ($post_id && in_array($new_status, ['Accepted', 'Rejected', 'Under Review', 'Pending Review'])) {
        update_post_meta($post_id, '_review_status', $new_status);

        // Send Email Notification to Author if Accepted or Rejected
        $author_email = get_post_meta($post_id, '_author_email', true);
        $author_name  = get_post_meta($post_id, '_author_name', true);
        $paper_title  = get_post_meta($post_id, '_paper_title', true);
        $token        = get_post_meta($post_id, '_submission_token', true);
        $general      = icraiiq2it_get_general_settings();

        if (!empty($author_email) && is_email($author_email)) {
            if ($new_status === 'Accepted') {
                $subject = sprintf('[%s] Official Acceptance Notification — %s', $general['acronym'], $token);
                $body    = sprintf(
                    "Dear %s,\n\nWe are pleased to inform you that your manuscript \"%s\" (Reference: %s) has been ACCEPTED for presentation at the %s.\n\n" .
                    "Please proceed with the author registration before the deadline (%s) via the conference website: %s\n\n" .
                    "Congratulations and warm regards,\n" .
                    "Editorial & Technical Program Committee\n%s",
                    $author_name,
                    $paper_title,
                    $token,
                    $general['title'],
                    $general['registration_deadline'] ?? '10th Mar, 2027',
                    home_url('/registration/'),
                    $general['venue_name']
                );
                wp_mail($author_email, $subject, $body);
            } elseif ($new_status === 'Rejected') {
                $subject = sprintf('[%s] Manuscript Review Decision — %s', $general['acronym'], $token);
                $body    = sprintf(
                    "Dear %s,\n\nThank you for submitting your paper \"%s\" (Reference: %s) to %s.\n\n" .
                    "After rigorous peer review by the Technical Program Committee, we regret to inform you that your manuscript was not accepted for inclusion in this edition.\n\n" .
                    "We appreciate your scholarly contribution and wish you success in your future research endeavors.\n\n" .
                    "Warm regards,\n" .
                    "Conference Secretariat\n%s",
                    $author_name,
                    $paper_title,
                    $token,
                    $general['title'],
                    $general['venue_name']
                );
                wp_mail($author_email, $subject, $body);
            }
        }
    }

    wp_safe_redirect(admin_url('edit.php?post_type=paper_submission&status_updated=1'));
    exit;
}
add_action('admin_post_icraiiq2it_update_status', 'icraiiq2it_handle_admin_status_update');

/**
 * Display Admin Notice when Status Updated
 */
function icraiiq2it_submission_admin_notices() {
    global $pagenow, $post_type;
    if ($pagenow === 'edit.php' && $post_type === 'paper_submission' && isset($_GET['status_updated'])) {
        echo '<div class="notice notice-success is-dismissible"><p><strong>' . esc_html__('Manuscript review decision updated and author notified.', 'icraiiq2it-2027') . '</strong></p></div>';
    }
}
add_action('admin_notices', 'icraiiq2it_submission_admin_notices');

/**
 * Add Manuscript Review Meta Box to Edit Screen
 */
function icraiiq2it_add_submission_metabox() {
    add_meta_box(
        'icraiiq2it_submission_metabox',
        __('Manuscript Details & Editorial Review Actions', 'icraiiq2it-2027'),
        'icraiiq2it_render_submission_metabox',
        'paper_submission',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'icraiiq2it_add_submission_metabox');

function icraiiq2it_render_submission_metabox($post) {
    wp_nonce_field('icraiiq2it_save_metabox', 'icraiiq2it_metabox_nonce');

    $author_name  = get_post_meta($post->ID, '_author_name', true);
    $author_email = get_post_meta($post->ID, '_author_email', true);
    $affiliation  = get_post_meta($post->ID, '_affiliation', true);
    $track        = get_post_meta($post->ID, '_track', true);
    $paper_title  = get_post_meta($post->ID, '_paper_title', true);
    $token        = get_post_meta($post->ID, '_submission_token', true);
    $status       = get_post_meta($post->ID, '_review_status', true) ?: 'Pending Review';
    $notes        = get_post_meta($post->ID, '_reviewer_notes', true);
    $attach_id    = get_post_meta($post->ID, '_attachment_id', true);
    ?>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;">
        <div style="background:#f9f9f9;padding:15px;border-radius:6px;border:1px solid #e5e5e5;">
            <h4 style="margin-top:0;border-bottom:1px solid #ddd;padding-bottom:6px;"><?php esc_html_e('Author & Paper Details', 'icraiiq2it-2027'); ?></h4>
            <p><strong><?php esc_html_e('Reference Token:', 'icraiiq2it-2027'); ?></strong> <code style="font-weight:bold;color:#EA580C;"><?php echo esc_html($token); ?></code></p>
            <p><strong><?php esc_html_e('Author Name:', 'icraiiq2it-2027'); ?></strong> <?php echo esc_html($author_name); ?></p>
            <p><strong><?php esc_html_e('Email Address:', 'icraiiq2it-2027'); ?></strong> <a href="mailto:<?php echo esc_attr($author_email); ?>"><?php echo esc_html($author_email); ?></a></p>
            <p><strong><?php esc_html_e('Institution:', 'icraiiq2it-2027'); ?></strong> <?php echo esc_html($affiliation); ?></p>
            <p><strong><?php esc_html_e('Track:', 'icraiiq2it-2027'); ?></strong> <?php echo esc_html($track); ?></p>
            <p><strong><?php esc_html_e('Manuscript Title:', 'icraiiq2it-2027'); ?></strong> <?php echo esc_html($paper_title); ?></p>
            <?php if ($attach_id) : ?>
                <p>
                    <strong><?php esc_html_e('Uploaded PDF:', 'icraiiq2it-2027'); ?></strong><br>
                    <a href="<?php echo esc_url(wp_get_attachment_url($attach_id)); ?>" target="_blank" class="button button-primary" style="margin-top:5px;background:#1D315F;">
                        <span class="dashicons dashicons-pdf" style="vertical-align:middle;margin-right:3px;"></span> <?php esc_html_e('Download Submitted Manuscript', 'icraiiq2it-2027'); ?>
                    </a>
                </p>
            <?php endif; ?>
        </div>

        <div style="background:#fff;padding:15px;border-radius:6px;border:1px solid #e5e5e5;">
            <h4 style="margin-top:0;border-bottom:1px solid #ddd;padding-bottom:6px;"><?php esc_html_e('Review Decision Actions', 'icraiiq2it-2027'); ?></h4>
            <p><strong><?php esc_html_e('Current Status:', 'icraiiq2it-2027'); ?></strong> <span style="font-size:14px;font-weight:bold;color:#EA580C;"><?php echo esc_html($status); ?></span></p>

            <div style="margin:15px 0;">
                <label style="font-weight:bold;display:block;margin-bottom:6px;"><?php esc_html_e('Set Review Decision:', 'icraiiq2it-2027'); ?></label>
                <label style="margin-right:15px;color:#155724;">
                    <input type="radio" name="icraiiq2it_review_status" value="Accepted" <?php checked($status, 'Accepted'); ?>>
                    <strong>✓ <?php esc_html_e('Accepted', 'icraiiq2it-2027'); ?></strong>
                </label>
                <label style="margin-right:15px;color:#721c24;">
                    <input type="radio" name="icraiiq2it_review_status" value="Rejected" <?php checked($status, 'Rejected'); ?>>
                    <strong>✕ <?php esc_html_e('Rejected', 'icraiiq2it-2027'); ?></strong>
                </label>
                <label style="margin-right:15px;color:#856404;">
                    <input type="radio" name="icraiiq2it_review_status" value="Under Review" <?php checked($status, 'Under Review'); ?>>
                    <strong>⏳ <?php esc_html_e('Under Review', 'icraiiq2it-2027'); ?></strong>
                </label>
                <label style="color:#383d41;">
                    <input type="radio" name="icraiiq2it_review_status" value="Pending Review" <?php checked($status, 'Pending Review'); ?>>
                    <strong><?php esc_html_e('Pending Review', 'icraiiq2it-2027'); ?></strong>
                </label>
            </div>

            <div style="margin:15px 0;">
                <label for="icraiiq2it_reviewer_notes" style="font-weight:bold;display:block;margin-bottom:4px;"><?php esc_html_e('Reviewer Comments / Internal Notes:', 'icraiiq2it-2027'); ?></label>
                <textarea id="icraiiq2it_reviewer_notes" name="icraiiq2it_reviewer_notes" rows="3" style="width:100%;"><?php echo esc_textarea($notes); ?></textarea>
            </div>

            <p class="description"><?php esc_html_e('Saving with "Accepted" or "Rejected" will trigger the official decision email to the author.', 'icraiiq2it-2027'); ?></p>
        </div>
    </div>

    <div>
        <h4><?php esc_html_e('Submitted Abstract', 'icraiiq2it-2027'); ?></h4>
        <div style="background:#f1f5f9;padding:12px;border-radius:6px;font-size:13px;line-height:1.6;color:#334155;">
            <?php echo esc_html($post->post_content ?: 'No abstract provided.'); ?>
        </div>
    </div>
    <?php
}

function icraiiq2it_save_submission_metabox($post_id) {
    if (!isset($_POST['icraiiq2it_metabox_nonce']) || !wp_verify_nonce($_POST['icraiiq2it_metabox_nonce'], 'icraiiq2it_save_metabox')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (isset($_POST['icraiiq2it_review_status'])) {
        $old_status = get_post_meta($post_id, '_review_status', true);
        $new_status = sanitize_text_field($_POST['icraiiq2it_review_status']);
        update_post_meta($post_id, '_review_status', $new_status);

        // If status changed to Accepted or Rejected, send notification email
        if ($old_status !== $new_status && in_array($new_status, ['Accepted', 'Rejected'])) {
            $author_email = get_post_meta($post_id, '_author_email', true);
            $author_name  = get_post_meta($post_id, '_author_name', true);
            $paper_title  = get_post_meta($post_id, '_paper_title', true);
            $token        = get_post_meta($post_id, '_submission_token', true);
            $general      = icraiiq2it_get_general_settings();

            if (!empty($author_email) && is_email($author_email)) {
                if ($new_status === 'Accepted') {
                    $subject = sprintf('[%s] Official Acceptance Notification — %s', $general['acronym'], $token);
                    $body    = sprintf(
                        "Dear %s,\n\nWe are pleased to inform you that your manuscript \"%s\" (Reference: %s) has been ACCEPTED for presentation at the %s.\n\n" .
                        "Please proceed with the author registration before the deadline (%s) via the conference website: %s\n\n" .
                        "Congratulations and warm regards,\n" .
                        "Editorial & Technical Program Committee\n%s",
                        $author_name,
                        $paper_title,
                        $token,
                        $general['title'],
                        $general['registration_deadline'] ?? '10th Mar, 2027',
                        home_url('/registration/'),
                        $general['venue_name']
                    );
                    wp_mail($author_email, $subject, $body);
                } elseif ($new_status === 'Rejected') {
                    $subject = sprintf('[%s] Manuscript Review Decision — %s', $general['acronym'], $token);
                    $body    = sprintf(
                        "Dear %s,\n\nThank you for submitting your paper \"%s\" (Reference: %s) to %s.\n\n" .
                        "After rigorous peer review by the Technical Program Committee, we regret to inform you that your manuscript was not accepted for inclusion in this edition.\n\n" .
                        "We appreciate your scholarly contribution and wish you success in your future research endeavors.\n\n" .
                        "Warm regards,\n" .
                        "Conference Secretariat\n%s",
                        $author_name,
                        $paper_title,
                        $token,
                        $general['title'],
                        $general['venue_name']
                    );
                    wp_mail($author_email, $subject, $body);
                }
            }
        }
    }

    if (isset($_POST['icraiiq2it_reviewer_notes'])) {
        update_post_meta($post_id, '_reviewer_notes', sanitize_textarea_field($_POST['icraiiq2it_reviewer_notes']));
    }
}
add_action('save_post_paper_submission', 'icraiiq2it_save_submission_metabox');
