# Haracax LLC — Website redesign

A responsive, static HTML/CSS/JavaScript rebuild based on the supplied **Haracax Template Transfer Kit**. No build step, package manager, framework, or server-side runtime is required.

## Preview locally

1. Extract this folder.
2. Open `index.html` in a browser, or run a simple local server from this directory:
   - Python: `python -m http.server 8000`
   - Then visit `http://localhost:8000`.
3. Check desktop, tablet, and mobile widths.

## Change contact information

Edit `js/config.js`:

```js
window.HARACAX_CONFIG = {
  email: "your-real-email@example.com",
  phone: "+1 000 000 0000",
  location: "Your confirmed business location",
  contactSubject: "Haracax website enquiry"
};
```

The email, telephone, and location values are used in the footer and contact links. The hero/contact CTA links open an email draft. There is no server-side contact form in this static build.

**Important:** `info@haracax.com`, `+1 000 000 0000`, and `Wyoming, USA` are copied from/example values in the supplied transfer kit. Confirm or replace them before publishing.

## Deploy to Cloudflare

This is a static site. Upload the contents of this folder to the configured GitHub repository/branch and keep the Cloudflare build output directory set to the repository root (or the directory containing `index.html`). No build command is needed. If your existing Worker uses a custom entry point or Wrangler configuration, preserve and reconcile that configuration before replacing repository files.

## Images and resolution

The supplied transfer kit contains reference crops, not original high-resolution photography. They are included as references and are kept at their source dimensions. The design limits their display size and uses restrained cropping rather than enlarging them into full-bleed hero backgrounds. Replace these files with original or properly licensed high-resolution photographs for the final production site.

## Files

- `index.html` — page structure and copy
- `css/styles.css` — colors, typography, layout, and responsive breakpoints
- `js/config.js` — editable contact details
- `js/main.js` — contact-link population, mobile navigation, and footer year
- `assets/images/` — supplied image references

## Notes

- Fonts are loaded from Google Fonts; a system sans-serif fallback is provided by the browser if unavailable.
- This package is a finished standalone static-site redesign, not a verified modification of the current GitHub repository. The repository could not be cloned in this environment, so compare its existing deployment/Worker configuration before pushing these files.


## Image assets
The low-resolution screenshot crops from the transfer kit have been replaced with newly prepared high-resolution WebP image assets. The six industry cards now each use their own image.


## Latest visual refinement

The latest revision tightens section spacing and brings the layout closer to the supplied Haracax reference:
- More compact "What We Do" capability cards.
- A simpler About Haracax text-and-photography layout.
- Industry labels are placed below each image, with short labels (Agriculture, Water, Industry, Buildings, IoT, Energy) to avoid repeating what's shown in the photographs.
- Larger, more readable partnership copy and checklist.
- Responsive adjustments for desktop, tablet, and mobile widths.


## Visual alignment updates

- Replaced the About-section engineering photo with a distinct electronics prototyping/workbench image so it no longer repeats the homepage hero image.
- Restyled the SunLast image panel with a warm cream/peach background, rounded image corners, and softer shadows to blend with the site's card palette.
- Cropped the baked-in caption strips from all six industry thumbnails; the visible category names now come only from the site's HTML text labels.


## Our Brands image refinement
- Replaced the SunLast controller image with a warm wood-mounted product photograph.
- Replaced the poultry image with a clean, label-free illuminated coop photograph.
- Updated the brand image row to use edge-to-edge crops and proportions closer to the supplied reference mockup.
