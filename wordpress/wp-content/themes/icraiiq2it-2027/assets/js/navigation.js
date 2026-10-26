/**
 * Navigation, Sticky Header & Back-to-Top
 *
 * @package ICRAIIQ2IT_2027
 */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var header = document.getElementById('site-header');
        var mobileDrawer = document.getElementById('mobile-menu-drawer');
        var openBtn = document.getElementById('open-mobile-menu');
        var closeBtn = document.getElementById('close-mobile-menu');
        var backdrop = document.getElementById('mobile-menu-backdrop');
        var backToTopBtn = document.getElementById('back-to-top');

        // Sticky header box shadow on scroll
        function handleScroll() {
            var scrollY = window.pageYOffset || document.documentElement.scrollTop;
            if (header) {
                if (scrollY > 25) {
                    header.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-[0_4px_20px_rgba(15,23,42,0.08)]');
                    header.classList.remove('shadow-[0_2px_12px_rgba(15,23,42,0.04)]');
                } else {
                    header.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-[0_4px_20px_rgba(15,23,42,0.08)]');
                    header.classList.add('shadow-[0_2px_12px_rgba(15,23,42,0.04)]');
                }
            }

            if (backToTopBtn) {
                if (scrollY > 300) {
                    backToTopBtn.classList.remove('hidden');
                    backToTopBtn.classList.add('flex');
                } else {
                    backToTopBtn.classList.add('hidden');
                    backToTopBtn.classList.remove('flex');
                }
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        // Smooth scroll to top
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Mobile drawer handlers
        function openDrawer() {
            if (mobileDrawer) {
                mobileDrawer.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        }

        function closeDrawer() {
            if (mobileDrawer) {
                mobileDrawer.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }

        if (openBtn) openBtn.addEventListener('click', openDrawer);
        if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
        if (backdrop) backdrop.addEventListener('click', closeDrawer);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && mobileDrawer && !mobileDrawer.classList.contains('hidden')) {
                closeDrawer();
            }
        });
    });
})();
