/**
 * Manuscript Submission Modal & AJAX Upload
 *
 * @package ICRAIIQ2IT_2027
 */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var modal = document.getElementById('submission-modal');
        var closeBtn = document.getElementById('close-submission-modal');
        var cancelBtn = document.getElementById('cancel-submission');
        var form = document.getElementById('submission-form');
        var successScreen = document.getElementById('submission-success-screen');
        var dismissSuccessBtn = document.getElementById('dismiss-submission-success');
        var errorMsg = document.getElementById('submission-error-msg');
        var submitBtn = document.getElementById('submit-paper-btn');
        var fileInput = document.getElementById('sub_manuscript');
        var fileLabel = document.getElementById('file-upload-label');
        var refTokenEl = document.getElementById('submission-ref-token');

        if (!modal) return;

        function openModal() {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
            if (form) form.classList.remove('hidden');
            if (successScreen) successScreen.classList.add('hidden');
            if (errorMsg) errorMsg.classList.add('hidden');
        }

        function closeModal() {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
        }

        // Open triggers
        document.querySelectorAll('.open-submission-modal-trigger').forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                openModal();
            });
        });

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
        if (dismissSuccessBtn) dismissSuccessBtn.addEventListener('click', closeModal);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });

        // File selection label update
        if (fileInput && fileLabel) {
            fileInput.addEventListener('change', function () {
                if (fileInput.files && fileInput.files[0]) {
                    fileLabel.textContent = 'Selected: ' + fileInput.files[0].name + ' (' + (fileInput.files[0].size / 1024 / 1024).toFixed(2) + ' MB)';
                } else {
                    fileLabel.textContent = 'Upload PDF Manuscript (Max 15MB)';
                }
            });
        }

        // AJAX Form Submission
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                if (errorMsg) errorMsg.classList.add('hidden');

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Uploading & Validating...';
                }

                var formData = new FormData(form);
                var ajaxUrl = (window.icraiiq2itData && window.icraiiq2itData.ajaxUrl) ? window.icraiiq2itData.ajaxUrl : '/wp-admin/admin-ajax.php';

                fetch(ajaxUrl, {
                    method: 'POST',
                    body: formData
                })
                .then(function (res) {
                    return res.json();
                })
                .then(function (res) {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Submit Paper';
                    }

                    if (res.success && res.data) {
                        if (form) form.classList.add('hidden');
                        if (successScreen) {
                            successScreen.classList.remove('hidden');
                            if (refTokenEl) refTokenEl.textContent = res.data.token;
                        }
                        form.reset();
                        if (fileLabel) fileLabel.textContent = 'Upload PDF Manuscript (Max 15MB)';
                    } else {
                        if (errorMsg) {
                            errorMsg.textContent = (res.data && res.data.message) ? res.data.message : 'Submission failed. Please check your information.';
                            errorMsg.classList.remove('hidden');
                        }
                    }
                })
                .catch(function (err) {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Submit Paper';
                    }
                    if (errorMsg) {
                        errorMsg.textContent = 'Network or server error while submitting manuscript. Please try again.';
                        errorMsg.classList.remove('hidden');
                    }
                });
            });
        }
    });
})();
