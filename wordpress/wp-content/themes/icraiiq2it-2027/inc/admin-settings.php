<?php
/**
 * Conference Administration Settings Dashboard
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register the Conference Settings page.
 */
function icraiiq2it_add_admin_menu() {
    add_menu_page(
        __('Conference Settings', 'icraiiq2it-2027'),
        __('Conference Settings', 'icraiiq2it-2027'),
        'manage_options',
        'icraiiq2it-settings',
        'icraiiq2it_render_settings_page',
        'dashicons-awards',
        30
    );
}
add_action('admin_menu', 'icraiiq2it_add_admin_menu');

/**
 * Register settings, sections, and fields.
 */
function icraiiq2it_register_settings() {
    // 1. General Conference Settings
    register_setting('icraiiq2it_general_group', 'icraiiq2it_general_options', [
        'sanitize_callback' => 'icraiiq2it_sanitize_options',
        'default'           => icraiiq2it_default_general_options(),
    ]);

    // 2. Fee Schedule Settings
    register_setting('icraiiq2it_fee_group', 'icraiiq2it_fee_options', [
        'sanitize_callback' => 'icraiiq2it_sanitize_options',
        'default'           => icraiiq2it_default_fee_options(),
    ]);

    // 3. Bank Account Settings
    register_setting('icraiiq2it_bank_group', 'icraiiq2it_bank_options', [
        'sanitize_callback' => 'icraiiq2it_sanitize_options',
        'default'           => icraiiq2it_default_bank_options(),
    ]);

    // 4. Important Deadlines
    register_setting('icraiiq2it_dates_group', 'icraiiq2it_dates_options', [
        'sanitize_callback' => 'icraiiq2it_sanitize_options',
        'default'           => icraiiq2it_default_dates_options(),
    ]);
}
add_action('admin_init', 'icraiiq2it_register_settings');

function icraiiq2it_sanitize_options($input) {
    if (!is_array($input)) {
        return [];
    }
    $sanitized = [];
    foreach ($input as $key => $val) {
        if (is_array($val)) {
            $sanitized[$key] = array_map('sanitize_text_field', $val);
        } else {
            $sanitized[$key] = sanitize_text_field($val);
        }
    }
    return $sanitized;
}

/**
 * Default options extracted from conferenceData.js
 */
function icraiiq2it_default_general_options() {
    return [
        'acronym'             => 'ICRAIQ2IT - 2027',
        'short_title'         => 'ICRAIQ2IT - 2027',
        'edition'             => '5th',
        'year'                => '2027',
        'title'               => '5th International Conference on Recent Advancements in Artificial Intelligence, Quantum Intelligence and Inclusive Technologies',
        'dates_display'       => '09–10 April 2027',
        'mode'                => 'Blended Mode (Online & In-Person)',
        'venue_name'          => 'Dr RVR NRI Institute of Technology (Deemed to be University)',
        'venue_address'       => 'Pothavarappadu, Agiripalli Mandalam, Eluru District, Vijayawada Rural, Andhra Pradesh, India Pin - 521212',
        'venue_coordinates'   => '16.66327986299729, 80.73777642559249',
        'contact_email'       => 'icraiq2it27@nriit.edu.in',
        'contact_phone'       => '+91 94409 48018',
        'spoc_name'           => 'Jithendra',
        'cmt_submission_url'  => 'https://cmt3.research.microsoft.com',
        'ieee_template_url'   => 'https://www.ieee.org/conferences/publishing/templates',
        'ieee_docx_url'       => 'https://ieee-org.widen.net/content/ge5anzdecd/original/conference-template-a4.docx',
        'brochure_url'        => '',
    ];
}

function icraiiq2it_default_fee_options() {
    return [
        'in_student'      => '3000',
        'in_academic'     => '4000',
        'in_industry'     => '4000',
        'in_listener'     => '2000',
        'in_scopus'       => '6000',
        'in_non_scopus'   => '2000',
        'in_extra_page'   => '1500',
        'int_student'     => '75',
        'int_academic'    => '75',
        'int_industry'    => '75',
        'int_listener'    => '50',
        'int_scopus'      => '100',
        'int_non_scopus'  => '50',
        'int_extra_page'  => '20',
        'base_pages'      => '6',
    ];
}

function icraiiq2it_default_bank_options() {
    return [
        'bank_name'       => 'Bank of Baroda, Benz Circle Branch',
        'account_name'    => 'The Principal, NRI Institute of Technology, Agiripalli',
        'account_number'  => '26360100033044',
        'ifsc_code'       => 'BARB0BENVIJ',
        'account_type'    => 'Savings',
        'branch_address'  => 'Benz Circle, Vijayawada, Krishna District, Andhra Pradesh',
        'qr_image_url'    => '',
    ];
}

function icraiiq2it_default_dates_options() {
    return [
        'submission_deadline'     => '24th Jan, 2027',
        'notification_acceptance' => '24th Feb, 2027',
        'registration_deadline'   => '10th Mar, 2027',
        'camera_ready_deadline'   => '30th Mar, 2027',
        'conference_dates'        => '09–10 Apr, 2027',
    ];
}

/**
 * Accessor functions
 */
function icraiiq2it_get_general_settings() {
    $defaults = icraiiq2it_default_general_options();
    $saved = get_option('icraiiq2it_general_options', []);
    return wp_parse_args($saved, $defaults);
}

function icraiiq2it_get_fee_settings() {
    $defaults = icraiiq2it_default_fee_options();
    $saved = get_option('icraiiq2it_fee_options', []);
    return wp_parse_args($saved, $defaults);
}

function icraiiq2it_get_bank_settings() {
    $defaults = icraiiq2it_default_bank_options();
    $saved = get_option('icraiiq2it_bank_options', []);
    return wp_parse_args($saved, $defaults);
}

function icraiiq2it_get_dates_settings() {
    $defaults = icraiiq2it_default_dates_options();
    $saved = get_option('icraiiq2it_dates_options', []);
    return wp_parse_args($saved, $defaults);
}

/**
 * Render the Admin Settings Page
 */
function icraiiq2it_render_settings_page() {
    if (!current_user_can('manage_options')) {
        return;
    }

    $active_tab = isset($_GET['tab']) ? sanitize_key($_GET['tab']) : 'general';
    $general = icraiiq2it_get_general_settings();
    $fees = icraiiq2it_get_fee_settings();
    $bank = icraiiq2it_get_bank_settings();
    $dates = icraiiq2it_get_dates_settings();
    ?>
    <div class="wrap" style="max-width: 1100px;">
        <h1 style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
            <span class="dashicons dashicons-awards" style="font-size:32px;width:32px;height:32px;color:#fb9200;"></span>
            <?php esc_html_e('ICRAIIQ2IT 2027 — Conference Management Settings', 'icraiiq2it-2027'); ?>
        </h1>

        <nav class="nav-tab-wrapper" style="margin-bottom: 20px;">
            <a href="?page=icraiiq2it-settings&tab=general" class="nav-tab <?php echo $active_tab === 'general' ? 'nav-tab-active' : ''; ?>">
                <?php esc_html_e('General Information', 'icraiiq2it-2027'); ?>
            </a>
            <a href="?page=icraiiq2it-settings&tab=fees" class="nav-tab <?php echo $active_tab === 'fees' ? 'nav-tab-active' : ''; ?>">
                <?php esc_html_e('Registration Fees & Reckoner', 'icraiiq2it-2027'); ?>
            </a>
            <a href="?page=icraiiq2it-settings&tab=bank" class="nav-tab <?php echo $active_tab === 'bank' ? 'nav-tab-active' : ''; ?>">
                <?php esc_html_e('Bank Details & Payment', 'icraiiq2it-2027'); ?>
            </a>
            <a href="?page=icraiiq2it-settings&tab=dates" class="nav-tab <?php echo $active_tab === 'dates' ? 'nav-tab-active' : ''; ?>">
                <?php esc_html_e('Important Deadlines', 'icraiiq2it-2027'); ?>
            </a>
        </nav>

        <?php if ($active_tab === 'general') : ?>
            <form method="post" action="options.php" class="card" style="padding:24px;background:#fff;border-radius:8px;border:1px solid #ccd0d4;">
                <?php
                settings_fields('icraiiq2it_general_group');
                ?>
                <h2><?php esc_html_e('Conference Metadata & Venue Information', 'icraiiq2it-2027'); ?></h2>
                <table class="form-table">
                    <tr>
                        <th scope="row"><label for="title"><?php esc_html_e('Conference Full Title', 'icraiiq2it-2027'); ?></label></th>
                        <td><input type="text" name="icraiiq2it_general_options[title]" id="title" value="<?php echo esc_attr($general['title']); ?>" class="large-text"></td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="acronym"><?php esc_html_e('Conference Acronym', 'icraiiq2it-2027'); ?></label></th>
                        <td><input type="text" name="icraiiq2it_general_options[acronym]" id="acronym" value="<?php echo esc_attr($general['acronym']); ?>" class="regular-text"></td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="dates_display"><?php esc_html_e('Dates Display', 'icraiiq2it-2027'); ?></label></th>
                        <td><input type="text" name="icraiiq2it_general_options[dates_display]" id="dates_display" value="<?php echo esc_attr($general['dates_display']); ?>" class="regular-text"></td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="venue_name"><?php esc_html_e('Host Institution / Venue', 'icraiiq2it-2027'); ?></label></th>
                        <td><input type="text" name="icraiiq2it_general_options[venue_name]" id="venue_name" value="<?php echo esc_attr($general['venue_name']); ?>" class="large-text"></td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="venue_address"><?php esc_html_e('Venue Full Address', 'icraiiq2it-2027'); ?></label></th>
                        <td><textarea name="icraiiq2it_general_options[venue_address]" id="venue_address" rows="3" class="large-text"><?php echo esc_textarea($general['venue_address']); ?></textarea></td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="contact_email"><?php esc_html_e('Secretariat Official Email', 'icraiiq2it-2027'); ?></label></th>
                        <td><input type="email" name="icraiiq2it_general_options[contact_email]" id="contact_email" value="<?php echo esc_attr($general['contact_email']); ?>" class="regular-text"></td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="spoc_name"><?php esc_html_e('SPOC Name & Contact', 'icraiiq2it-2027'); ?></label></th>
                        <td>
                            <input type="text" name="icraiiq2it_general_options[spoc_name]" id="spoc_name" value="<?php echo esc_attr($general['spoc_name']); ?>" placeholder="SPOC Name" class="regular-text">
                            <input type="text" name="icraiiq2it_general_options[contact_phone]" id="contact_phone" value="<?php echo esc_attr($general['contact_phone']); ?>" placeholder="Phone Number" class="regular-text">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="cmt_submission_url"><?php esc_html_e('Microsoft CMT Portal Link', 'icraiiq2it-2027'); ?></label></th>
                        <td><input type="url" name="icraiiq2it_general_options[cmt_submission_url]" id="cmt_submission_url" value="<?php echo esc_attr($general['cmt_submission_url']); ?>" class="large-text"></td>
                    </tr>
                </table>
                <?php submit_button(__('Save Conference Settings', 'icraiiq2it-2027')); ?>
            </form>

        <?php elseif ($active_tab === 'fees') : ?>
            <form method="post" action="options.php" class="card" style="padding:24px;background:#fff;border-radius:8px;border:1px solid #ccd0d4;">
                <?php
                settings_fields('icraiiq2it_fee_group');
                ?>
                <h2><?php esc_html_e('Registration Fees & Calculation Source of Truth', 'icraiiq2it-2027'); ?></h2>
                <p class="description"><?php esc_html_e('These figures update both the public registration fee tables and the dynamic payment fee reckoner calculator instantly.', 'icraiiq2it-2027'); ?></p>
                
                <h3 style="margin-top:24px;border-bottom:1px solid #eee;padding-bottom:8px;"><?php esc_html_e('Indian Delegates (INR ₹)', 'icraiiq2it-2027'); ?></h3>
                <table class="form-table">
                    <tr>
                        <th><?php esc_html_e('Students / Research Scholars', 'icraiiq2it-2027'); ?></th>
                        <td>₹ <input type="number" name="icraiiq2it_fee_options[in_student]" value="<?php echo esc_attr($fees['in_student']); ?>" class="small-text"></td>
                    </tr>
                    <tr>
                        <th><?php esc_html_e('Academicians / Faculty', 'icraiiq2it-2027'); ?></th>
                        <td>₹ <input type="number" name="icraiiq2it_fee_options[in_academic]" value="<?php echo esc_attr($fees['in_academic']); ?>" class="small-text"></td>
                    </tr>
                    <tr>
                        <th><?php esc_html_e('Industry Professionals', 'icraiiq2it-2027'); ?></th>
                        <td>₹ <input type="number" name="icraiiq2it_fee_options[in_industry]" value="<?php echo esc_attr($fees['in_industry']); ?>" class="small-text"></td>
                    </tr>
                    <tr>
                        <th><?php esc_html_e('Attendee / Listener Only', 'icraiiq2it-2027'); ?></th>
                        <td>₹ <input type="number" name="icraiiq2it_fee_options[in_listener]" value="<?php echo esc_attr($fees['in_listener']); ?>" class="small-text"></td>
                    </tr>
                    <tr>
                        <th><?php esc_html_e('Scopus Indexed Proceedings Add-on', 'icraiiq2it-2027'); ?></th>
                        <td>₹ <input type="number" name="icraiiq2it_fee_options[in_scopus]" value="<?php echo esc_attr($fees['in_scopus']); ?>" class="small-text"></td>
                    </tr>
                    <tr>
                        <th><?php esc_html_e('Non-Scopus Proceedings with ISBN & DOI', 'icraiiq2it-2027'); ?></th>
                        <td>₹ <input type="number" name="icraiiq2it_fee_options[in_non_scopus]" value="<?php echo esc_attr($fees['in_non_scopus']); ?>" class="small-text"></td>
                    </tr>
                    <tr>
                        <th><?php esc_html_e('Additional Page Fee (Per Page beyond 6)', 'icraiiq2it-2027'); ?></th>
                        <td>₹ <input type="number" name="icraiiq2it_fee_options[in_extra_page]" value="<?php echo esc_attr($fees['in_extra_page']); ?>" class="small-text"></td>
                    </tr>
                </table>

                <h3 style="margin-top:24px;border-bottom:1px solid #eee;padding-bottom:8px;"><?php esc_html_e('International Delegates (USD $)', 'icraiiq2it-2027'); ?></h3>
                <table class="form-table">
                    <tr>
                        <th><?php esc_html_e('Students / Research Scholars', 'icraiiq2it-2027'); ?></th>
                        <td>$ <input type="number" name="icraiiq2it_fee_options[int_student]" value="<?php echo esc_attr($fees['int_student']); ?>" class="small-text"></td>
                    </tr>
                    <tr>
                        <th><?php esc_html_e('Academicians / Faculty', 'icraiiq2it-2027'); ?></th>
                        <td>$ <input type="number" name="icraiiq2it_fee_options[int_academic]" value="<?php echo esc_attr($fees['int_academic']); ?>" class="small-text"></td>
                    </tr>
                    <tr>
                        <th><?php esc_html_e('Industry Professionals', 'icraiiq2it-2027'); ?></th>
                        <td>$ <input type="number" name="icraiiq2it_fee_options[int_industry]" value="<?php echo esc_attr($fees['int_industry']); ?>" class="small-text"></td>
                    </tr>
                    <tr>
                        <th><?php esc_html_e('Attendee / Listener Only', 'icraiiq2it-2027'); ?></th>
                        <td>$ <input type="number" name="icraiiq2it_fee_options[int_listener]" value="<?php echo esc_attr($fees['int_listener']); ?>" class="small-text"></td>
                    </tr>
                    <tr>
                        <th><?php esc_html_e('Scopus Proceedings (International)', 'icraiiq2it-2027'); ?></th>
                        <td>$ <input type="number" name="icraiiq2it_fee_options[int_scopus]" value="<?php echo esc_attr($fees['int_scopus']); ?>" class="small-text"></td>
                    </tr>
                    <tr>
                        <th><?php esc_html_e('Non-Scopus Proceedings (International)', 'icraiiq2it-2027'); ?></th>
                        <td>$ <input type="number" name="icraiiq2it_fee_options[int_non_scopus]" value="<?php echo esc_attr($fees['int_non_scopus']); ?>" class="small-text"></td>
                    </tr>
                    <tr>
                        <th><?php esc_html_e('Additional Page Fee (Per Page beyond 6)', 'icraiiq2it-2027'); ?></th>
                        <td>$ <input type="number" name="icraiiq2it_fee_options[int_extra_page]" value="<?php echo esc_attr($fees['int_extra_page']); ?>" class="small-text"></td>
                    </tr>
                </table>

                <?php submit_button(__('Save Registration Fee Settings', 'icraiiq2it-2027')); ?>
            </form>

        <?php elseif ($active_tab === 'bank') : ?>
            <form method="post" action="options.php" class="card" style="padding:24px;background:#fff;border-radius:8px;border:1px solid #ccd0d4;">
                <?php
                settings_fields('icraiiq2it_bank_group');
                ?>
                <h2><?php esc_html_e('Bank Account & NEFT / RTGS Wire Transfer Details', 'icraiiq2it-2027'); ?></h2>
                <table class="form-table">
                    <tr>
                        <th scope="row"><label for="bank_name"><?php esc_html_e('Bank Name & Branch', 'icraiiq2it-2027'); ?></label></th>
                        <td><input type="text" name="icraiiq2it_bank_options[bank_name]" id="bank_name" value="<?php echo esc_attr($bank['bank_name']); ?>" class="large-text"></td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="account_name"><?php esc_html_e('Account Beneficiary Name', 'icraiiq2it-2027'); ?></label></th>
                        <td><input type="text" name="icraiiq2it_bank_options[account_name]" id="account_name" value="<?php echo esc_attr($bank['account_name']); ?>" class="large-text"></td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="account_number"><?php esc_html_e('Account Number', 'icraiiq2it-2027'); ?></label></th>
                        <td><input type="text" name="icraiiq2it_bank_options[account_number]" id="account_number" value="<?php echo esc_attr($bank['account_number']); ?>" class="regular-text"></td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="ifsc_code"><?php esc_html_e('IFSC / SWIFT Code', 'icraiiq2it-2027'); ?></label></th>
                        <td><input type="text" name="icraiiq2it_bank_options[ifsc_code]" id="ifsc_code" value="<?php echo esc_attr($bank['ifsc_code']); ?>" class="regular-text"></td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="account_type"><?php esc_html_e('Account Type', 'icraiiq2it-2027'); ?></label></th>
                        <td><input type="text" name="icraiiq2it_bank_options[account_type]" id="account_type" value="<?php echo esc_attr($bank['account_type']); ?>" class="regular-text"></td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="branch_address"><?php esc_html_e('Branch Full Address', 'icraiiq2it-2027'); ?></label></th>
                        <td><textarea name="icraiiq2it_bank_options[branch_address]" id="branch_address" rows="2" class="large-text"><?php echo esc_textarea($bank['branch_address']); ?></textarea></td>
                    </tr>
                </table>
                <?php submit_button(__('Save Bank Account Details', 'icraiiq2it-2027')); ?>
            </form>

        <?php elseif ($active_tab === 'dates') : ?>
            <form method="post" action="options.php" class="card" style="padding:24px;background:#fff;border-radius:8px;border:1px solid #ccd0d4;">
                <?php
                settings_fields('icraiiq2it_dates_group');
                ?>
                <h2><?php esc_html_e('Important Conference Deadlines', 'icraiiq2it-2027'); ?></h2>
                <table class="form-table">
                    <tr>
                        <th scope="row"><label for="submission_deadline"><?php esc_html_e('Manuscript Submission Deadline', 'icraiiq2it-2027'); ?></label></th>
                        <td><input type="text" name="icraiiq2it_dates_options[submission_deadline]" id="submission_deadline" value="<?php echo esc_attr($dates['submission_deadline']); ?>" class="regular-text"></td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="notification_acceptance"><?php esc_html_e('Notification of Acceptance', 'icraiiq2it-2027'); ?></label></th>
                        <td><input type="text" name="icraiiq2it_dates_options[notification_acceptance]" id="notification_acceptance" value="<?php echo esc_attr($dates['notification_acceptance']); ?>" class="regular-text"></td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="registration_deadline"><?php esc_html_e('Author Registration Deadline', 'icraiiq2it-2027'); ?></label></th>
                        <td><input type="text" name="icraiiq2it_dates_options[registration_deadline]" id="registration_deadline" value="<?php echo esc_attr($dates['registration_deadline']); ?>" class="regular-text"></td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="camera_ready_deadline"><?php esc_html_e('Camera Ready Submission Deadline', 'icraiiq2it-2027'); ?></label></th>
                        <td><input type="text" name="icraiiq2it_dates_options[camera_ready_deadline]" id="camera_ready_deadline" value="<?php echo esc_attr($dates['camera_ready_deadline']); ?>" class="regular-text"></td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="conference_dates"><?php esc_html_e('Conference Event Dates', 'icraiiq2it-2027'); ?></label></th>
                        <td><input type="text" name="icraiiq2it_dates_options[conference_dates]" id="conference_dates" value="<?php echo esc_attr($dates['conference_dates']); ?>" class="regular-text"></td>
                    </tr>
                </table>
                <?php submit_button(__('Save Deadlines', 'icraiiq2it-2027')); ?>
            </form>
        <?php endif; ?>
    </div>
    <?php
}
