<?php
/**
 * ICRAIIQ2IT 2027 Theme Functions and Definitions
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

// Define theme directory constants
define('ICRAIIQ2IT_VERSION', '1.0.0');
define('ICRAIIQ2IT_DIR', get_template_directory());
define('ICRAIIQ2IT_URI', get_template_directory_uri());

// Include module files
require_once ICRAIIQ2IT_DIR . '/inc/setup.php';
require_once ICRAIIQ2IT_DIR . '/inc/admin-settings.php';
require_once ICRAIIQ2IT_DIR . '/inc/custom-post-types.php';
require_once ICRAIIQ2IT_DIR . '/inc/template-helpers.php';
require_once ICRAIIQ2IT_DIR . '/inc/ajax-handlers.php';
