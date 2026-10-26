<?php
/**
 * Manuscript Paper Submission Modal
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

$tracks = icraiiq2it_get_fallback_tracks();
?>
<div id="submission-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
    <div class="relative w-full max-w-2xl bg-navy-900 border border-brand-500/40 rounded-2xl shadow-[0_0_50px_rgba(251,146,0,0.3)] overflow-hidden">
        
        <!-- Header -->
        <div class="flex items-center justify-between px-6 py-4 bg-navy-850 border-b border-white/10">
            <div class="flex items-center gap-2">
                <span class="text-brand-400"><?php echo icraiiq2it_svg('sparkles', 'w-5 h-5'); ?></span>
                <h3 class="text-lg font-bold text-white"><?php esc_html_e('Manuscript Submission Portal', 'icraiiq2it-2027'); ?></h3>
            </div>
            <button 
                type="button"
                id="close-submission-modal"
                class="p-1.5 rounded-lg bg-navy-800 text-slate-400 hover:text-white hover:bg-brand-500/20 transition-colors"
                aria-label="<?php esc_attr_e('Close modal', 'icraiiq2it-2027'); ?>"
            >
                <?php echo icraiiq2it_svg('close', 'w-5 h-5'); ?>
            </button>
        </div>

        <!-- Content -->
        <div class="p-6 max-h-[80vh] overflow-y-auto">
            <!-- Success Screen (Hidden by default) -->
            <div id="submission-success-screen" class="hidden py-12 text-center space-y-4">
                <div class="w-16 h-16 rounded-full bg-brand-500/20 border border-brand-500 text-brand-400 mx-auto flex items-center justify-center animate-bounce">
                    <?php echo icraiiq2it_svg('check-circle', 'w-10 h-10'); ?>
                </div>
                <h4 class="text-2xl font-extrabold text-white"><?php esc_html_e('Manuscript Successfully Submitted!', 'icraiiq2it-2027'); ?></h4>
                <p class="text-sm text-slate-300 max-w-md mx-auto">
                    <?php esc_html_e('Your paper has been recorded under official reference', 'icraiiq2it-2027'); ?> 
                    <code id="submission-ref-token" class="px-2 py-1 rounded bg-navy-800 font-mono text-brand-400 font-bold"></code>.
                </p>
                <div class="pt-4">
                    <button
                        type="button"
                        id="dismiss-submission-success"
                        class="px-6 py-2.5 rounded-xl bg-brand-500 text-slate-950 font-bold uppercase text-xs tracking-wider shadow-lg hover:bg-brand-400 transition-colors"
                    >
                        <?php esc_html_e('Close Window', 'icraiiq2it-2027'); ?>
                    </button>
                </div>
            </div>

            <!-- Submission Form -->
            <form id="submission-form" class="space-y-4" enctype="multipart/form-data">
                <input type="hidden" name="action" value="icraiiq2it_submit_paper">
                <input type="hidden" name="nonce" value="<?php echo esc_attr(wp_create_nonce('icraiiq2it_nonce')); ?>">

                <div class="p-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-xs text-brand-300 flex items-center gap-3">
                    <span class="text-brand-400 shrink-0"><?php echo icraiiq2it_svg('lock', 'w-4 h-4'); ?></span>
                    <span><?php esc_html_e('Peer review process. Submissions are evaluated by expert reviewers.', 'icraiiq2it-2027'); ?></span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-mono font-bold text-slate-300 uppercase mb-1" for="sub_author_name"><?php esc_html_e('Corresponding Author Name', 'icraiiq2it-2027'); ?></label>
                        <input
                            type="text"
                            id="sub_author_name"
                            name="authorName"
                            required
                            placeholder="Dr. Jane Doe"
                            class="w-full px-3 py-2 rounded-xl bg-navy-850 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-brand-500 outline-none"
                        >
                    </div>

                    <div>
                        <label class="block text-xs font-mono font-bold text-slate-300 uppercase mb-1" for="sub_email"><?php esc_html_e('Official Email Address', 'icraiiq2it-2027'); ?></label>
                        <input
                            type="email"
                            id="sub_email"
                            name="email"
                            required
                            placeholder="author@university.edu"
                            class="w-full px-3 py-2 rounded-xl bg-navy-850 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-brand-500 outline-none"
                        >
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-mono font-bold text-slate-300 uppercase mb-1" for="sub_affiliation"><?php esc_html_e('Institution / Organization', 'icraiiq2it-2027'); ?></label>
                        <input
                            type="text"
                            id="sub_affiliation"
                            name="affiliation"
                            required
                            placeholder="Dr RVR NRI Institute of Technology"
                            class="w-full px-3 py-2 rounded-xl bg-navy-850 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-brand-500 outline-none"
                        >
                    </div>

                    <div>
                        <label class="block text-xs font-mono font-bold text-slate-300 uppercase mb-1" for="sub_track"><?php esc_html_e('Select Research Track', 'icraiiq2it-2027'); ?></label>
                        <select
                            id="sub_track"
                            name="track"
                            class="w-full px-3 py-2 rounded-xl bg-navy-850 border border-white/10 text-white text-sm focus:border-brand-500 outline-none"
                        >
                            <?php foreach ($tracks as $t) : ?>
                                <option value="<?php echo esc_attr('track-0' . $t['number']); ?>" class="bg-navy-900 text-white">
                                    <?php echo esc_html($t['number'] . ' - ' . $t['title']); ?>
                                </option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-mono font-bold text-slate-300 uppercase mb-1" for="sub_paper_title"><?php esc_html_e('Manuscript Paper Title', 'icraiiq2it-2027'); ?></label>
                    <input
                        type="text"
                        id="sub_paper_title"
                        name="paperTitle"
                        required
                        placeholder="e.g., Quantum Entanglement Networks for Decentralized AI"
                        class="w-full px-3 py-2 rounded-xl bg-navy-850 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-brand-500 outline-none"
                    >
                </div>

                <div>
                    <label class="block text-xs font-mono font-bold text-slate-300 uppercase mb-1" for="sub_abstract"><?php esc_html_e('Abstract (150 - 300 words)', 'icraiiq2it-2027'); ?></label>
                    <textarea
                        id="sub_abstract"
                        name="abstract"
                        rows="4"
                        required
                        placeholder="Paste brief abstract summarizing methodology, results, and innovation..."
                        class="w-full px-3 py-2 rounded-xl bg-navy-850 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-brand-500 outline-none"
                    ></textarea>
                </div>

                <!-- Upload Drop Zone -->
                <div class="relative p-4 rounded-xl bg-navy-850 border-2 border-dashed border-brand-500/40 text-center hover:border-brand-500 transition-colors cursor-pointer">
                    <input type="file" name="manuscript" id="sub_manuscript" accept="application/pdf" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                    <span class="text-brand-400 block mb-2"><?php echo icraiiq2it_svg('upload-cloud', 'w-8 h-8 mx-auto'); ?></span>
                    <div id="file-upload-label" class="text-xs font-bold text-white"><?php esc_html_e('Upload PDF Manuscript (Max 15MB)', 'icraiiq2it-2027'); ?></div>
                    <div class="text-[11px] text-slate-400"><?php esc_html_e('Strictly IEEE standard template format', 'icraiiq2it-2027'); ?></div>
                </div>

                <div id="submission-error-msg" class="hidden p-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-200 text-xs"></div>

                <div class="pt-2 flex items-center justify-end gap-3">
                    <button
                        type="button"
                        id="cancel-submission"
                        class="px-4 py-2 rounded-xl bg-navy-800 text-slate-300 text-xs font-bold uppercase hover:bg-navy-700 transition-colors"
                    >
                        <?php esc_html_e('Cancel', 'icraiiq2it-2027'); ?>
                    </button>
                    <button
                        type="submit"
                        id="submit-paper-btn"
                        class="px-6 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(251,146,0,0.4)] transition-all"
                    >
                        <?php esc_html_e('Submit Paper', 'icraiiq2it-2027'); ?>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
