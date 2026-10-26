<?php
/**
 * Template Helper Functions
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Format string replacing '5th' with '5<sup>th</sup>'
 */
function icraiiq2it_format_with_superscript($text) {
    if (!is_string($text) || empty($text)) {
        return $text;
    }
    return preg_replace('/(5th)/i', '5<sup>th</sup>', esc_html($text));
}

/**
 * Helper to generate page links
 */
function icraiiq2it_page_url($slug) {
    $page = get_page_by_path($slug);
    if ($page) {
        return get_permalink($page->ID);
    }
    return home_url('/' . ltrim($slug, '/') . '/');
}

/**
 * SVG Icon Helper
 */
function icraiiq2it_svg($icon, $class = 'w-5 h-5') {
    $icons = [
        'mail' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
        'phone' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
        'download' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
        'external-link' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
        'copy' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
        'check' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
        'check-circle' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
        'calendar' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
        'sparkles' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
        'map-pin' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
        'file-text' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>',
        'arrow-right' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
        'arrow-left' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
        'eye' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
        'close' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
        'menu' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
        'plane' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
        'train' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/></svg>',
        'bus' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4C2.9 6 1.9 6.8 1.6 7.8l-1.4 5c-.1.4-.2.8-.2 1.2 0 .4.1.8.2 1.2.3 1.1.8 2.8.8 2.8h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg>',
        'lock' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
        'upload-cloud' => '<svg class="' . esc_attr($class) . '" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>',
    ];

    return isset($icons[$icon]) ? $icons[$icon] : '';
}

/**
 * Fallback Research Tracks data
 */
function icraiiq2it_get_fallback_tracks() {
    return [
        [
            'number' => '1',
            'title' => 'Artificial Intelligence and Intelligent Systems',
            'description' => 'Machine learning, deep neural paradigms, generative models, and intelligent automated systems.',
            'topics' => [
                'Machine Learning and Deep Learning Applications',
                'Generative AI and Large Language Models',
                'Explainable, Ethical, and Responsible AI',
                'Human–Computer Interaction and Cognitive Computing',
            ],
        ],
        [
            'number' => '2',
            'title' => 'Quantum Inspired Computing and Security',
            'description' => 'Quantum algorithms, quantum cryptography, and deep mathematical computing architectures.',
            'topics' => [
                'Quantum Inspired Computing and Algorithms',
                'Quantum Cryptography and Intelligent Security Systems',
                'Interdisciplinary Applications of AI and Quantum Inspired Technologies',
            ],
        ],
        [
            'number' => '3',
            'title' => 'Data Science, Analytics & Cloud Computing',
            'description' => 'Big data analytics, distributed systems, business intelligence, and high-performance infrastructure.',
            'topics' => [
                'Data Science, Big Data Analytics, and Business Intelligence',
                'Cloud Computing and Distributed Systems',
                'High-Performance Computing and Next-Generation Networks',
            ],
        ],
        [
            'number' => '4',
            'title' => 'Edge Computing, IoT and Smart Systems',
            'description' => 'Embedded micro-architectures, sensor technologies, IoT infrastructure, and intelligent automation.',
            'topics' => [
                'Edge Computing and Intelligent Automation',
                'Internet of Things (IoT) and Smart Systems',
                'Embedded Systems and Smart Sensor Technologies',
            ],
        ],
        [
            'number' => '5',
            'title' => 'Cybersecurity, Blockchain & Digital Forensics',
            'description' => 'Defensive architectures, smart contracts, tamper-proof systems, and cyber-threat investigation.',
            'topics' => [
                'Cybersecurity, Blockchain, and Digital Forensics',
                'Ethical AI in Digital Forensics',
                'Cryptographic Protocols and Trust Architectures',
            ],
        ],
        [
            'number' => '6',
            'title' => 'Computer Vision & Speech Technologies',
            'description' => 'Image processing, spatial perception, natural language processing, and multimodal speech synthesis.',
            'topics' => [
                'Computer Vision and Image Processing',
                'Natural Language Processing and Speech Technologies',
                'Multimodal Perception Systems',
            ],
        ],
        [
            'number' => '7',
            'title' => 'Applied AI in Societal & Industrial Domains',
            'description' => 'Transformative applications in healthcare, smart agriculture, climate sustainability, and logistics.',
            'topics' => [
                'AI in Healthcare, Education, Agriculture, and Smart Cities',
                'AI for Sustainable Development and Climate Solutions',
                'AI Applications in Finance, Manufacturing, and Logistics',
            ],
        ],
        [
            'number' => '8',
            'title' => 'Deep-Tech Innovations & Entrepreneurship',
            'description' => 'Emerging deep-tech paradigms, technological incubation, innovation ecosystems, and tech entrepreneurship.',
            'topics' => [
                'Deep-Tech Innovations and Emerging Technologies',
                'Innovation Ecosystems, Startups, and Technology Entrepreneurship',
                'Interdisciplinary Applications of AI and Quantum Inspired Technologies',
            ],
        ],
    ];
}
