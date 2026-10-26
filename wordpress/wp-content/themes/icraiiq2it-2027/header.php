<?php
/**
 * Theme Header
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

$general = icraiiq2it_get_general_settings();
$short_title = $general['short_title'] ?: $general['acronym'];
$full_title = $general['title'];

$nav_items = [
    ['label' => 'HOME', 'url' => home_url('/')],
    ['label' => 'ABOUT', 'url' => icraiiq2it_page_url('about')],
    ['label' => 'COMMITTEES', 'url' => icraiiq2it_page_url('committee')],
    ['label' => 'LOCATION', 'url' => icraiiq2it_page_url('venue')],
    ['label' => 'CALL FOR PAPERS', 'url' => icraiiq2it_page_url('call-for-papers')],
    ['label' => 'REGISTRATION', 'url' => icraiiq2it_page_url('registration')],
    ['label' => 'AWARDS', 'url' => icraiiq2it_page_url('awards')],
    ['label' => 'ACCOMMODATION', 'url' => icraiiq2it_page_url('accommodation')],
    ['label' => 'CONTACT US', 'url' => icraiiq2it_page_url('contact')],
    ['label' => 'CONFERENCE ARCHIVES', 'url' => icraiiq2it_page_url('archives')],
    ['label' => 'BROCHURE', 'url' => icraiiq2it_page_url('brochure')],
];

$current_url = home_url(add_query_arg([], $GLOBALS['wp']->request ?? ''));
if (!str_ends_with($current_url, '/')) {
    $current_url .= '/';
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="scroll-smooth">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover">
    <link rel="icon" type="image/svg+xml" href="<?php echo esc_url(get_template_directory_uri() . '/assets/images/favicon.svg'); ?>">
    <link rel="shortcut icon" href="<?php echo esc_url(get_template_directory_uri() . '/assets/images/nrilogo.png'); ?>">
    <link rel="apple-touch-icon" href="<?php echo esc_url(get_template_directory_uri() . '/assets/images/nrilogo.png'); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-white text-slate-900 font-sans antialiased selection:bg-[#fb9200] selection:text-white'); ?>>
<?php wp_body_open(); ?>

<div class="flex flex-col min-h-screen">
    <!-- Sticky Navigation Header -->
    <header id="site-header" class="sticky top-0 z-50 border-b border-slate-200 bg-white transition-[box-shadow,background-color] duration-200 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
        
        <!-- Mobile/Tablet Layout (Screen < 1280px) -->
        <div class="mx-auto flex max-w-[1500px] items-center gap-3 px-3 py-1.5 sm:px-6 sm:py-2 lg:px-8 xl:hidden">
            <a href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php esc_attr_e('Home', 'icraiiq2it-2027'); ?>" class="shrink-0 flex items-center">
                <img 
                    src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/mainlogo.png'); ?>" 
                    alt="<?php esc_attr_e('Conference Logo', 'icraiiq2it-2027'); ?>" 
                    class="h-12 sm:h-14 w-[68px] sm:w-[78px] object-fill"
                >
            </a>
            <div class="h-8 w-px bg-slate-200 shrink-0" aria-hidden="true"></div>
            <a href="<?php echo esc_url(home_url('/')); ?>" class="group min-w-0 flex-1 text-left">
                <div class="text-base sm:text-lg font-extrabold leading-tight tracking-[-0.02em] text-[#1D315F]">
                    <?php echo esc_html($short_title); ?>
                </div>
                <div class="mt-0.5 flex items-center justify-start gap-1.5 text-[10px] font-extrabold uppercase tracking-wide text-[#EA580C] sm:text-[11px]">
                    <span><?php echo esc_html($general['dates_display'] ?: 'April 9-10'); ?></span>
                    <span class="text-slate-300 font-normal">|</span>
                    <span>Vijayawada</span>
                    <span class="text-slate-300 font-normal">|</span>
                    <span>India</span>
                </div>
            </a>
            <button 
                type="button" 
                id="open-mobile-menu"
                aria-label="<?php esc_attr_e('Open navigation menu', 'icraiiq2it-2027'); ?>" 
                class="inline-flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center text-[#1D315F] transition-colors hover:text-[#E87500] focus:outline-none"
            >
                <?php echo icraiiq2it_svg('menu', 'w-6 h-6'); ?>
            </button>
        </div>

        <!-- Full Conference Title Layout for Laptop & Desktop Screens (Screen >= 1280px) -->
        <div class="hidden py-2 xl:block">
            <div class="mx-auto w-full max-w-[1680px] 2xl:max-w-[1780px] px-6 lg:px-8 2xl:px-10">
                <div class="flex w-full items-center justify-between gap-5 xl:gap-8 min-h-[82px] 2xl:min-h-[92px]">
                    <!-- Prominent Host Institution Logo -->
                    <div class="shrink-0 flex items-center">
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center group transition-transform duration-200 hover:scale-105">
                            <img 
                                src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/mainlogo.png'); ?>" 
                                alt="<?php esc_attr_e('Conference Logo', 'icraiiq2it-2027'); ?>" 
                                class="h-[78px] xl:h-[84px] 2xl:h-[92px] w-[108px] xl:w-[122px] 2xl:w-[134px] object-fill drop-shadow-xs"
                            >
                        </a>
                    </div>

                    <!-- Conference Title Spanning Desktop Header -->
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="group flex-1 min-w-0 text-center px-2">
                        <h1 class="text-[19px] xl:text-[21px] 2xl:text-[24.5px] font-extrabold leading-snug tracking-[0.012em] 2xl:tracking-[0.018em] text-[#1D315F]">
                            <span class="block whitespace-nowrap">
                                <?php echo icraiiq2it_format_with_superscript($full_title); ?>
                            </span>
                        </h1>
                        <div class="mt-1 flex items-center justify-center gap-2 text-[12.5px] 2xl:text-[13.5px] font-extrabold uppercase tracking-[0.16em] text-[#EA580C]">
                            <span><?php echo esc_html($general['dates_display'] ?: 'April 9-10'); ?></span>
                            <span class="font-normal text-slate-300">|</span>
                            <span>Vijayawada</span>
                            <span class="font-normal text-slate-300">|</span>
                            <span>India</span>
                            <span class="ml-2 inline-flex items-center rounded-full border border-[#F59E0B] bg-[#FFF7E6] px-3.5 py-0.5 text-[0.74em] font-black tracking-[0.03em] text-[#E87500] shadow-sm transition-colors group-hover:bg-[#F59E0B] group-hover:text-white">
                                <?php echo esc_html($short_title); ?>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <!-- Desktop Navigation Bar -->
        <nav class="hidden border-t border-slate-100 xl:block" aria-label="<?php esc_attr_e('Primary navigation', 'icraiiq2it-2027'); ?>">
            <div class="mx-auto w-full max-w-[1680px] 2xl:max-w-[1780px] px-6 lg:px-8 2xl:px-10">
                <div class="flex min-h-[42px] w-full flex-nowrap items-center justify-between py-1">
                    <?php foreach ($nav_items as $item) : 
                        $is_active = (rtrim($current_url, '/') === rtrim($item['url'], '/'));
                    ?>
                        <a 
                            href="<?php echo esc_url($item['url']); ?>" 
                            class="group relative flex min-h-[36px] shrink-0 whitespace-nowrap items-center rounded-md px-2 py-1 text-[12px] font-bold tracking-[0.02em] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] lg:text-[12.5px] xl:px-2.5 xl:text-[13.5px] 2xl:px-3 2xl:text-[14.5px] <?php echo $is_active ? 'text-[#E87500]' : 'text-[#344054] hover:text-[#E87500]'; ?>"
                        >
                            <?php echo esc_html($item['label']); ?>
                            <span class="absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#F59E0B] transition-all duration-300 ease-out <?php echo $is_active ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'; ?>"></span>
                        </a>
                    <?php endforeach; ?>
                </div>
            </div>
        </nav>
    </header>

    <!-- Mobile Slide-over Drawer Menu -->
    <div id="mobile-menu-drawer" class="fixed inset-0 z-[100] hidden">
        <!-- Backdrop -->
        <div id="mobile-menu-backdrop" class="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"></div>
        
        <!-- Drawer Panel -->
        <div class="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div class="w-screen max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto">
                <div>
                    <!-- Drawer Header -->
                    <div class="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                        <div class="flex items-center gap-2">
                            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/nrilogo.png'); ?>" alt="NRIIT" class="h-9 w-auto">
                            <span class="font-extrabold text-[#1D315F] text-sm"><?php echo esc_html($short_title); ?></span>
                        </div>
                        <button type="button" id="close-mobile-menu" class="p-2 text-slate-400 hover:text-slate-700">
                            <?php echo icraiiq2it_svg('close', 'w-6 h-6'); ?>
                        </button>
                    </div>

                    <!-- Navigation Links -->
                    <nav class="px-4 py-4 space-y-1">
                        <?php foreach ($nav_items as $item) : 
                            $is_active = (rtrim($current_url, '/') === rtrim($item['url'], '/'));
                        ?>
                            <a 
                                href="<?php echo esc_url($item['url']); ?>" 
                                class="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold transition-colors <?php echo $is_active ? 'bg-orange-50 text-[#E87500]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#E87500]'; ?>"
                            >
                                <span><?php echo esc_html($item['label']); ?></span>
                                <span class="text-xs"><?php echo icraiiq2it_svg('arrow-right', 'w-4 h-4 text-slate-400'); ?></span>
                            </a>
                        <?php endforeach; ?>
                    </nav>
                </div>

                <!-- Drawer Footer Quick Action -->
                <div class="p-6 border-t border-slate-100 bg-slate-50 space-y-3">
                    <button 
                        type="button" 
                        class="open-submission-modal-trigger w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#fb9200] to-[#EA580C] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:opacity-95"
                    >
                        <span><?php esc_html_e('Submit Manuscript', 'icraiiq2it-2027'); ?></span>
                        <?php echo icraiiq2it_svg('external-link', 'w-4 h-4'); ?>
                    </button>
                    <div class="text-center text-[11px] text-slate-500 font-medium">
                        <?php echo esc_html($general['venue_name']); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Content Area -->
    <main id="primary" class="flex-grow">
