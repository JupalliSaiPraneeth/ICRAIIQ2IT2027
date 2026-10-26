/**
 * Gallery Lightbox & Archive Tab Switcher
 *
 * @package ICRAIIQ2IT_2027
 */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        // Tab switcher
        var tabBtns = document.querySelectorAll('.archive-tab-btn');
        var tabContents = document.querySelectorAll('.archive-tab-content');

        tabBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var target = btn.getAttribute('data-tab');

                tabBtns.forEach(function (b) {
                    b.classList.remove('bg-white', 'text-[#F97316]', 'font-bold', 'shadow-xs');
                    b.classList.add('text-slate-600', 'font-semibold');
                });
                btn.classList.add('bg-white', 'text-[#F97316]', 'font-bold', 'shadow-xs');
                btn.classList.remove('text-slate-600', 'font-semibold');

                tabContents.forEach(function (tc) {
                    if (tc.getAttribute('data-content') === target) {
                        tc.classList.remove('hidden');
                    } else {
                        tc.classList.add('hidden');
                    }
                });

                // Update URL parameter without full reload
                if (window.history.pushState) {
                    var newUrl = window.location.pathname + '?tab=' + encodeURIComponent(target);
                    window.history.pushState({ path: newUrl }, '', newUrl);
                }
            });
        });

        // Gallery conference picker
        var confBtns = document.querySelectorAll('.gallery-conf-btn');
        var confGrids = document.querySelectorAll('.gallery-conf-grid');

        confBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var confId = btn.getAttribute('data-conf');

                confBtns.forEach(function (b) {
                    b.classList.remove('border-brand-500', 'bg-brand-50', 'text-brand-700', 'font-bold');
                    b.classList.add('border-slate-200', 'bg-white', 'text-slate-600');
                });
                btn.classList.add('border-brand-500', 'bg-brand-50', 'text-brand-700', 'font-bold');
                btn.classList.remove('border-slate-200', 'bg-white', 'text-slate-600');

                confGrids.forEach(function (g) {
                    if (g.getAttribute('data-conf') === confId) {
                        g.classList.remove('hidden');
                    } else {
                        g.classList.add('hidden');
                    }
                });
            });
        });

        // Lightbox Modal
        var lightbox = document.getElementById('gallery-lightbox');
        var lightboxImg = document.getElementById('lightbox-img');
        var lightboxCaption = document.getElementById('lightbox-caption');
        var closeLightboxBtn = document.getElementById('close-lightbox');
        var prevLightboxBtn = document.getElementById('prev-lightbox');
        var nextLightboxBtn = document.getElementById('next-lightbox');

        if (!lightbox) return;

        var currentImages = [];
        var currentImgIndex = 0;

        function openLightbox(images, index) {
            currentImages = images;
            currentImgIndex = index;
            updateLightboxContent();
            lightbox.classList.remove('hidden');
            lightbox.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.classList.add('hidden');
            lightbox.classList.remove('flex');
            document.body.style.overflow = '';
        }

        function updateLightboxContent() {
            if (!currentImages.length) return;
            var src = currentImages[currentImgIndex];
            if (lightboxImg) lightboxImg.src = src;
            if (lightboxCaption) {
                lightboxCaption.textContent = 'Image ' + (currentImgIndex + 1) + ' of ' + currentImages.length;
            }
        }

        function nextLightbox() {
            if (!currentImages.length) return;
            currentImgIndex = (currentImgIndex + 1) % currentImages.length;
            updateLightboxContent();
        }

        function prevLightbox() {
            if (!currentImages.length) return;
            currentImgIndex = (currentImgIndex - 1 + currentImages.length) % currentImages.length;
            updateLightboxContent();
        }

        document.querySelectorAll('.gallery-item-card').forEach(function (card) {
            card.addEventListener('click', function () {
                var grid = card.closest('.gallery-conf-grid');
                if (!grid) return;
                var allCards = Array.from(grid.querySelectorAll('.gallery-item-card'));
                var imgs = allCards.map(function (c) { return c.getAttribute('data-full-img'); });
                var idx = allCards.indexOf(card);
                openLightbox(imgs, idx);
            });
        });

        if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
        if (nextLightboxBtn) nextLightboxBtn.addEventListener('click', nextLightbox);
        if (prevLightboxBtn) prevLightboxBtn.addEventListener('click', prevLightbox);

        document.addEventListener('keydown', function (e) {
            if (lightbox && !lightbox.classList.contains('hidden')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') nextLightbox();
                if (e.key === 'ArrowLeft') prevLightbox();
            }
        });
    });
})();
