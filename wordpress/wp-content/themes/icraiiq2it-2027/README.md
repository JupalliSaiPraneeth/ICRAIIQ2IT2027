# ICRAIIQ2IT 2027 — Official WordPress Theme

**Theme Name:** ICRAIIQ2IT 2027 Conference Theme  
**Target Conference:** 5th International Conference on Recent Advancements in Artificial Intelligence, Quantum Intelligence and Inclusive Technologies  
**Dates:** 09–10 April 2027  
**Host Institution:** Dr RVR NRI Institute of Technology (Deemed to be University), Vijayawada, Andhra Pradesh, India  
**Version:** 1.0.0  
**Tested up to:** WordPress 6.7 | PHP 8.0+  

---

## 1. Overview & Architecture

This is a standalone, performance-optimized custom WordPress theme created to migrate the React.js `ICRAIIQ2IT2027` conference website into a conventional, maintainable WordPress installation.

### Key Highlights
- **Zero Commercial Builder Dependency:** No Elementor, Divi, or bulky page builders required. Built with pure semantic PHP templates, vanilla JavaScript, and scoped Tailwind CSS.
- **Genuine Backend Submissions:** Secure manuscript submission system (`paper_submission` Custom Post Type) with strict PDF validation (MIME-type checking, 15MB size limit), nonce verification, and email acknowledgements via `wp_mail()`.
- **Fee Reckoner & Client-Side PDF Generation:** Fully preserved dynamic calculation engine for Indian and International delegate fees, proceedings add-ons, extra pages, and raw PDF 1.4 payment request generator.
- **Centralized Administration:** Dedicated **"Conference Settings"** menu in the WordPress admin to manage fees, deadlines, bank wire transfer information, and Microsoft CMT portal links without editing code.

---

## 2. Directory Structure

```
icraiiq2it-2027/
├── style.css                  # Theme metadata & WP core alignment styles
├── functions.php              # Module loader
├── index.php                  # Fallback template
├── front-page.php             # Home page (3D carousel, stats, tracks, dates)
├── page.php                   # Generic page template
├── single.php                 # Single post/speaker template
├── archive.php                # Archive listing template
├── header.php                 # Responsive header with desktop bar & mobile drawer
├── footer.php                 # Institutional footer, quick links & back-to-top
├── 404.php                    # Custom 404 page
├── screenshot.png             # Theme screenshot for WP admin
├── theme.json                 # Block editor configuration & color tokens
├── page-templates/
│   ├── template-about.php            # About the Conference
│   ├── template-call-for-papers.php  # Call for Papers & Guidelines
│   ├── template-speakers.php         # Keynote Speakers
│   ├── template-committee.php        # Conference Committees
│   ├── template-registration.php     # Registration & Payment Reckoner
│   ├── template-venue.php            # Venue, Transit & City Attractions
│   ├── template-contact.php          # Secretariat Directory & Contact Form
│   ├── template-awards.php           # Awards & Recognition
│   ├── template-accommodation.php    # Accommodation Guide
│   ├── template-archives.php         # Conference Archives & Gallery
│   └── template-brochure.php         # Official Brochure & PDF Viewer
├── template-parts/
│   └── modal-submission.php   # Paper Submission Modal
├── inc/
│   ├── setup.php              # Theme supports, asset enqueues, auto-page creation
│   ├── admin-settings.php     # Conference Settings admin dashboard
│   ├── custom-post-types.php  # CPTs: Speakers, Committee, Tracks, Submissions
│   ├── template-helpers.php   # SVG helpers, formatters, and data fallbacks
│   └── ajax-handlers.php      # AJAX endpoints for submissions and contact inquiries
└── assets/
    ├── css/
    │   └── main.css           # Compiled, production-ready theme CSS
    ├── js/
    │   ├── navigation.js      # Sticky header, drawer menu, back-to-top
    │   ├── carousel.js        # 3D rolling photo carousel
    │   ├── calculator.js      # Interactive fee reckoner & clipboard helpers
    │   ├── pdf-generator.js   # Client-side payment request PDF generator
    │   ├── gallery.js         # Archive tab switcher & photo lightbox
    │   └── submission.js      # AJAX manuscript upload handler
    ├── images/                # Theme branding, logos, QR codes, and campus assets
    └── docs/                  # Official brochure and souvenir PDF documents
```

---

## 3. Local Development & Installation Instructions

### Option A: Using LocalWP (Recommended)
1. Download and install [LocalWP](https://localwp.com/).
2. Create a new WordPress site (e.g., `icraiiq2it-local`).
3. Click **"Go to site folder"** and navigate to:
   `app/public/wp-content/themes/`
4. Copy the `icraiiq2it-2027` directory into `app/public/wp-content/themes/`.
5. In your WordPress admin (`http://icraiiq2it-local.local/wp-admin/`):
   - Go to **Appearance → Themes** and activate **ICRAIIQ2IT 2027 Conference**.
   - Upon activation, default pages (`about`, `call-for-papers`, `registration`, `committee`, `venue`, `contact`, etc.) and default conference settings will be automatically populated!

### Option B: Deploying to Shared/VPS WordPress Hosting
1. Compress `icraiiq2it-2027` into a `.zip` file:
   ```bash
   cd wordpress/wp-content/themes
   zip -r icraiiq2it-2027.zip icraiiq2it-2027
   ```
2. Log in to your WordPress dashboard.
3. Go to **Appearance → Themes → Add New → Upload Theme**.
4. Upload `icraiiq2it-2027.zip` and click **Activate**.

---

## 4. Post-Activation Configuration Checklist

### 1. Configure Permalinks
- Navigate to **Settings → Permalinks**.
- Select **Post name** (`/%postname%/`).
- Click **Save Changes**.

### 2. Configure Reading Settings
- Navigate to **Settings → Reading**.
- Under **Your homepage displays**, choose **A static page**.
- For **Homepage**, select or create **Home** (uses `front-page.php` automatically).
- Click **Save Changes**.

### 3. Review Conference Settings
- In the admin sidebar, click **Conference Settings**.
- Four tabs are available:
  - **General Information:** Update conference titles, venue address, secretariat email, and Microsoft CMT submission link.
  - **Registration Fees & Reckoner:** Modify Indian (INR) and International (USD) fee schedules and extra page rates.
  - **Bank Details & Payment:** Update account number, IFSC code, and wire transfer beneficiary details.
  - **Important Deadlines:** Update key milestone dates.

### 4. Email Configuration (SMTP)
For reliable delivery of submission acknowledgements and contact form inquiries:
- Install **WP Mail SMTP** or **FluentSMTP** from **Plugins → Add New**.
- Configure SMTP credentials for `icraiq2it27@nriit.edu.in`.
