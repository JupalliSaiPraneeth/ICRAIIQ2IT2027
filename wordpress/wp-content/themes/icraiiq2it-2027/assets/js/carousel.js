/**
 * 3D Rolling Stack Photo Carousel
 *
 * @package ICRAIIQ2IT_2027
 */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var carousel = document.querySelector('.hero-3d-carousel');
        if (!carousel) return;

        var slides = carousel.querySelectorAll('.carousel-slide');
        var prevBtn = carousel.querySelector('.carousel-prev');
        var nextBtn = carousel.querySelector('.carousel-next');
        var indicators = carousel.querySelectorAll('.carousel-indicator');

        if (!slides.length) return;

        var activeIndex = 0;
        var total = slides.length;
        var autoTimer = null;

        function updateSlidePositions() {
            slides.forEach(function (slide, idx) {
                var diff = idx - activeIndex;
                if (diff > total / 2) diff -= total;
                if (diff < -total / 2) diff += total;

                // Reset standard styles
                slide.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

                if (diff === 0) {
                    // Center active card
                    slide.style.zIndex = '30';
                    slide.style.opacity = '1';
                    slide.style.transform = 'translate3d(0, 0, 0) scale(1)';
                    slide.style.pointerEvents = 'auto';
                } else if (diff === 1) {
                    // Right card
                    slide.style.zIndex = '20';
                    slide.style.opacity = '0.65';
                    slide.style.transform = 'translate3d(32%, 0, -80px) scale(0.88)';
                    slide.style.pointerEvents = 'none';
                } else if (diff === -1) {
                    // Left card
                    slide.style.zIndex = '20';
                    slide.style.opacity = '0.65';
                    slide.style.transform = 'translate3d(-32%, 0, -80px) scale(0.88)';
                    slide.style.pointerEvents = 'none';
                } else {
                    // Hidden background cards
                    slide.style.zIndex = '10';
                    slide.style.opacity = '0';
                    slide.style.transform = 'translate3d(0, 0, -150px) scale(0.7)';
                    slide.style.pointerEvents = 'none';
                }
            });

            // Update indicators if present
            indicators.forEach(function (ind, idx) {
                if (idx === activeIndex) {
                    ind.classList.add('bg-[#F97316]', 'w-6');
                    ind.classList.remove('bg-slate-300', 'w-2');
                } else {
                    ind.classList.remove('bg-[#F97316]', 'w-6');
                    ind.classList.add('bg-slate-300', 'w-2');
                }
            });
        }

        function nextSlide() {
            activeIndex = (activeIndex + 1) % total;
            updateSlidePositions();
        }

        function prevSlide() {
            activeIndex = (activeIndex - 1 + total) % total;
            updateSlidePositions();
        }

        function startAutoPlay() {
            stopAutoPlay();
            autoTimer = setInterval(nextSlide, 2000); // 2 seconds rotation
        }

        function stopAutoPlay() {
            if (autoTimer) {
                clearInterval(autoTimer);
                autoTimer = null;
            }
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function () {
                stopAutoPlay();
                nextSlide();
                startAutoPlay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function () {
                stopAutoPlay();
                prevSlide();
                startAutoPlay();
            });
        }

        indicators.forEach(function (ind, idx) {
            ind.addEventListener('click', function () {
                stopAutoPlay();
                activeIndex = idx;
                updateSlidePositions();
                startAutoPlay();
            });
        });

        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);

        // Touch swipe support for mobile
        var touchStartX = 0;
        var touchEndX = 0;

        carousel.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', function (e) {
            touchEndX = e.changedTouches[0].screenX;
            var swipeThreshold = 50;
            if (touchStartX - touchEndX > swipeThreshold) {
                nextSlide();
            } else if (touchEndX - touchStartX > swipeThreshold) {
                prevSlide();
            }
        }, { passive: true });

        // Initialize
        updateSlidePositions();
        startAutoPlay();
    });
})();
