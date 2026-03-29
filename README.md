# Refresh by Miriam

A one-page, UCLA-focused cleaning and organizing website built with plain HTML, CSS, and JavaScript.

## Project Overview

This site is designed for **Refresh by Miriam**, highlighting dorm cleaning, apartment cleaning, organizing services, and special requests for UCLA students and nearby renters.

The project is intentionally simple and static so it's easy to edit and deploy.

## File Structure

```text
.
├── index.html
├── robots.txt
├── sitemap.xml
├── README.md
├── TODO.txt
├── .gitignore
└── assets
    ├── css
    │   └── style.css
    ├── js
    │   └── main.js
    ├── images
    │   ├── Refresh.png
    │   ├── miriam.png
    │   └── seamless-check-pink-pattern-textile-tartan-plaid-swatch-free-vector.jpg
    └── icons
        ├── favicon.svg
        ├── apple-touch-icon.svg
        ├── site.webmanifest
        └── clipboard-svgrepo-com.svg
```

## How To Edit Content

### 1. Main page content
Edit `index.html` for:
- Hero headline/subheadline
- Services, About, Why Refresh, Contact copy
- Contact details (email, hours, service area)

### 2. Styling
Edit `assets/css/style.css` for:
- Colors, spacing, typography
- Layout and responsive behavior
- Button styles and section visuals

### 3. Interactions
Edit `assets/js/main.js` for:
- Mobile navigation toggle
- Netlify success-message handling
- Live phone number formatting
- Email copy-to-clipboard behavior
- Footer date text

### 4. Images and icons
Place/update files in:
- `assets/images/` for photos and branding graphics
- `assets/icons/` for favicon and icon-related assets

If you replace an image, keep the same filename or update the path in `index.html`.

## Run Locally

Use any static server. Example options:

1. VS Code Live Server
- Open the project folder
- Right-click `index.html`
- Click **Open with Live Server**

2. Python simple server
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deploy (Netlify)

1. Push this repo to GitHub/GitLab/Bitbucket
2. Connect the repo in Netlify
3. Deploy with default settings (static site)

### Netlify form handling
The contact form is configured in `index.html` with:
- `name="contact"`
- `method="POST"`
- `data-netlify="true"`
- hidden `form-name` input

If you want a different post-submit flow later, update:
- form `action` in `index.html`
- success handling logic in `assets/js/main.js`

## SEO/Production Basics Included

- `robots.txt`
- `sitemap.xml`
- Basic favicon references and placeholder icon files
- If your production domain changes, update both:
  - `robots.txt` (`Sitemap:` URL)
  - `sitemap.xml` (`<loc>` value)

## Notes

- This project stays framework-free by design.
- Keep edits practical and incremental to preserve maintainability.
