# Haracax LLC Website Template

A responsive, editable static website for Haracax LLC. It is built with plain HTML, CSS and JavaScript—no WordPress, build step, database or framework is required.

## Included
- `index.html` — page content and sections
- `css/styles.css` — layout, responsive behavior, colors and typography
- `js/config.js` — business contact details and location
- `js/main.js` — mobile navigation and contact details
- `assets/haracax-logo.png` — original Haracax logo supplied by you
- `assets/sunlast-logo.png` — original SunLast logo supplied by you
- `assets/hero-electronics.png` — generated electronics hero visual

## Before publishing
1. Open `js/config.js`.
2. Replace `REPLACE_WITH_YOUR_BUSINESS_EMAIL` and `REPLACE_WITH_YOUR_PHONE` with your real contact details.
3. Confirm the location text is correct.
4. Review the copy in `index.html` and adjust any service or capability that does not reflect your actual offering.
5. Open `index.html` in a browser to preview the site.

## Upload to hosting
Upload the contents of this folder (not the ZIP file itself) to the public web directory of your hosting account:
- cPanel: `public_html/`
- Many other hosts: the configured site root, often `www/`, `htdocs/` or a deployment directory.
- Netlify / Cloudflare Pages: deploy this folder as a static site. No build command is needed; publish directory is the folder containing `index.html`.

Keep the folder structure intact so the CSS, JavaScript and image paths continue to work.

## Editing
- Text and page sections: `index.html`
- Colors, spacing, fonts and layout: `css/styles.css` (color variables are at the top under `:root`)
- Email, phone and location: `js/config.js`
- Logos and images: replace files in `assets/` using the same filenames, or update their paths in `index.html`.

## Important notes
- The contact links are prepared, but this template does not include a server-side contact form or CRM integration.
- The hero artwork is a visual generated for this mockup. Replace it with your own approved manufacturing photography when available.
- The website uses Google Fonts when internet access is available and falls back to system fonts.
- No actual certification, manufacturing capacity, customer, or performance claims are implied by this template. Review all copy before publishing.
