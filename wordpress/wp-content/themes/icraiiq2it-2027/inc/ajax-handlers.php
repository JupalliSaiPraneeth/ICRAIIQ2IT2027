<?php
/**
 * Secure AJAX Handlers for Paper Submissions and Contact Forms
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Handle Paper Submissions via AJAX
 */
function icraiiq2it_handle_paper_submission() {
    // 1. Nonce Verification
    if (!check_ajax_referer('icraiiq2it_nonce', 'nonce', false)) {
        wp_send_json_error([
            'message' => __('Security verification failed. Please refresh the page and try again.', 'icraiiq2it-2027')
        ], 403);
    }

    // 2. Validate Text Inputs
    $author_name = isset($_POST['authorName']) ? sanitize_text_field($_POST['authorName']) : '';
    $email       = isset($_POST['email']) ? sanitize_email($_POST['email']) : '';
    $affiliation = isset($_POST['affiliation']) ? sanitize_text_field($_POST['affiliation']) : '';
    $track       = isset($_POST['track']) ? sanitize_text_field($_POST['track']) : '';
    $paper_title = isset($_POST['paperTitle']) ? sanitize_text_field($_POST['paperTitle']) : '';
    $abstract    = isset($_POST['abstract']) ? sanitize_textarea_field($_POST['abstract']) : '';

    if (empty($author_name) || empty($email) || !is_email($email) || empty($paper_title) || empty($abstract)) {
        wp_send_json_error([
            'message' => __('Please fill in all required fields with valid information.', 'icraiiq2it-2027')
        ], 400);
    }

    // 3. Validate File Upload
    $attachment_id = 0;
    if (!empty($_FILES['manuscript']['name'])) {
        $file = $_FILES['manuscript'];

        // Check file size (max 15MB)
        $max_size = 15 * 1024 * 1024;
        if ($file['size'] > $max_size) {
            wp_send_json_error([
                'message' => __('Uploaded file exceeds the maximum allowed limit of 15MB.', 'icraiiq2it-2027')
            ], 400);
        }

        // Verify file extension & MIME type (strictly PDF only)
        $file_info = wp_check_filetype_and_ext($file['tmp_name'], $file['name'], ['pdf' => 'application/pdf']);
        if ($file_info['ext'] !== 'pdf' || $file_info['type'] !== 'application/pdf') {
            wp_send_json_error([
                'message' => __('Invalid file format. Only PDF manuscripts are accepted.', 'icraiiq2it-2027')
            ], 400);
        }

        // Include WordPress upload helpers
        require_once(ABSPATH . 'wp-admin/includes/image.php');
        require_once(ABSPATH . 'wp-admin/includes/file.php');
        require_once(ABSPATH . 'wp-admin/includes/media.php');

        $attachment_id = media_handle_upload('manuscript', 0);
        if (is_wp_error($attachment_id)) {
            wp_send_json_error([
                'message' => __('Failed to upload manuscript file: ' . $attachment_id->get_error_message(), 'icraiiq2it-2027')
            ], 500);
        }
    }

    // 4. Generate Unique Submission Reference Token
    $token = 'ICRAIQ2IT-2027-' . wp_rand(1000, 9999);

    // 5. Store as Paper Submission Post
    $post_id = wp_insert_post([
        'post_title'   => $token . ' - ' . $paper_title,
        'post_type'    => 'paper_submission',
        'post_status'  => 'publish',
        'post_content' => $abstract,
    ]);

    if (is_wp_error($post_id)) {
        wp_send_json_error([
            'message' => __('Failed to save submission record.', 'icraiiq2it-2027')
        ], 500);
    }

    // Save metadata
    update_post_meta($post_id, '_submission_token', $token);
    update_post_meta($post_id, '_author_name', $author_name);
    update_post_meta($post_id, '_author_email', $email);
    update_post_meta($post_id, '_affiliation', $affiliation);
    update_post_meta($post_id, '_track', $track);
    update_post_meta($post_id, '_paper_title', $paper_title);
    update_post_meta($post_id, '_review_status', 'Pending Review');
    if ($attachment_id) {
        update_post_meta($post_id, '_attachment_id', $attachment_id);
    }

    // 6. Send Email Confirmation
    $general = icraiiq2it_get_general_settings();
    $to = $email;
    $subject = sprintf('[%s] Manuscript Submission Acknowledged (%s)', $general['acronym'], $token);
    $message = sprintf(
        "Dear %s,\n\nThank you for submitting your paper to %s.\n\n" .
        "Submission Reference: %s\n" .
        "Paper Title: %s\n" .
        "Track: %s\n\n" .
        "Your manuscript has been safely received and forwarded to the Technical Program Committee for peer review.\n\n" .
        "Warm regards,\nConference Secretariat\n%s",
        $author_name,
        $general['title'],
        $token,
        $paper_title,
        $track,
        $general['venue_name']
    );

    wp_mail($to, $subject, $message);

    wp_send_json_success([
        'token'      => $token,
        'paperTitle' => $paper_title,
        'message'    => __('Manuscript submitted successfully and registered in the conference review system.', 'icraiiq2it-2027'),
    ]);
}
add_action('wp_ajax_icraiiq2it_submit_paper', 'icraiiq2it_handle_paper_submission');
add_action('wp_ajax_nopriv_icraiiq2it_submit_paper', 'icraiiq2it_handle_paper_submission');

/**
 * Handle Contact Inquiries via AJAX
 */
function icraiiq2it_handle_contact_form() {
    if (!check_ajax_referer('icraiiq2it_nonce', 'nonce', false)) {
        wp_send_json_error(['message' => __('Security verification failed.', 'icraiiq2it-2027')], 403);
    }

    // Honeypot check
    if (!empty($_POST['contact_honey'])) {
        wp_send_json_error(['message' => __('Spam detected.', 'icraiiq2it-2027')], 400);
    }

    $name    = isset($_POST['name']) ? sanitize_text_field($_POST['name']) : '';
    $email   = isset($_POST['email']) ? sanitize_email($_POST['email']) : '';
    $subject = isset($_POST['subject']) ? sanitize_text_field($_POST['subject']) : 'Conference Inquiry';
    $message = isset($_POST['message']) ? sanitize_textarea_field($_POST['message']) : '';

    if (empty($name) || empty($email) || !is_email($email) || empty($message)) {
        wp_send_json_error(['message' => __('Please provide your name, valid email, and message.', 'icraiiq2it-2027')], 400);
    }

    $general = icraiiq2it_get_general_settings();
    $recipient = !empty($general['contact_email']) ? $general['contact_email'] : get_option('admin_email');
    $mail_subject = sprintf('[%s Contact Form] %s', $general['acronym'], $subject);
    $headers = ['Reply-To: ' . $name . ' <' . $email . '>'];

    $mail_sent = wp_mail($recipient, $mail_subject, $message, $headers);

    if ($mail_sent) {
        wp_send_json_success(['message' => __('Your message has been sent to the secretariat. We will respond promptly.', 'icraiiq2it-2027')]);
    } else {
        wp_send_json_error(['message' => __('Unable to send message at this time. Please contact us directly via email.', 'icraiiq2it-2027')], 500);
    }
}
add_action('wp_ajax_icraiiq2it_contact_form', 'icraiiq2it_handle_contact_form');
add_action('wp_ajax_nopriv_icraiiq2it_contact_form', 'icraiiq2it_handle_contact_form');
