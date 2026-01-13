# RDY Enterprise Website

A modern, responsive React website for RDY Enterprise - a global trading and export firm.

## Features

- **Responsive Design**: Built with Tailwind CSS for mobile-first, responsive layouts
- **SEO Optimized**: Includes meta tags, structured data, sitemap, and robots.txt
- **Accessibility**: WCAG-aligned with proper semantic HTML, ARIA labels, and keyboard navigation
- **Cookie Consent**: Privacy-compliant cookie consent banner with preference management
- **Contact Form**: Validated contact form with JSON storage (localStorage)
- **Data Storage**: Simple JSON-based storage for contact form submissions
- **Admin Panel**: View and export contact form submissions
- **Legal Pages**: Privacy Policy, Cookie Policy, Terms of Use, and Accessibility Statement

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Inter & Source Sans 3** - Typography

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── Layout.jsx      # Main layout wrapper
│   ├── CookieBanner.jsx # Cookie consent banner
│   └── SEO.jsx         # SEO meta tags component
├── lib/                # Utility libraries
│   └── contactStorage.js  # Contact form storage service (JSON/localStorage)
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Products.jsx
│   ├── Markets.jsx
│   ├── Compliance.jsx
│   ├── Contact.jsx
│   ├── ContactThanks.jsx
│   ├── ContactAdmin.jsx
│   ├── PrivacyPolicy.jsx
│   ├── CookiePolicy.jsx
│   ├── TermsOfUse.jsx
│   └── Accessibility.jsx
├── App.jsx             # Main app component with routing
├── main.jsx            # App entry point
└── index.css           # Global styles and Tailwind imports

public/
├── sitemap.xml         # SEO sitemap
└── robots.txt          # Search engine directives
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to static hosting services like Netlify, Vercel, or GitHub Pages.

## Deployment

This site is designed to be deployed as a static site. Recommended hosting options:

- **Netlify** - Free tier with custom domain support
- **Vercel** - Free tier with excellent performance
- **GitHub Pages** - Free hosting for public repositories

### Deployment Steps

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting service
3. Configure custom domain and SSL/TLS
4. Update `sitemap.xml` with your actual domain URL
5. Set up email forwarding for `inquiries@yourdomain.com`
6. Test the contact form
7. Access `/contact-admin` to view submissions (stored in browser localStorage)

## Configuration

### Update Domain URLs

Before deploying, update the following files with your actual domain:

- `public/sitemap.xml` - Replace `https://www.rdyenterprise.com` with your domain
- `public/robots.txt` - Update sitemap URL
- `src/components/SEO.jsx` - Update base URL if needed

### Email Configuration

Update the contact email in:
- `src/pages/Contact.jsx`
- All legal pages
- Footer component (if needed)

### Analytics Integration

To integrate analytics (Google Analytics, Plausible, or Matomo):

1. Update `src/components/CookieBanner.jsx` in the `applyConsent` function
2. Add your analytics script initialization code
3. Ensure scripts only load after user consent

### Contact Form Storage

The contact form uses **localStorage** to store submissions in the browser. This is a simple solution that works without any backend setup.

**Viewing Submissions**:
- Visit `/contact-admin` in your browser to view all submissions
- Click "Export JSON" to download all submissions as a JSON file
- Submissions are stored in the browser's localStorage

**Note**: For production, you may want to:
- Set up a simple backend API to store submissions
- Use a service like Formspree, Netlify Forms, or similar
- Integrate with an email service to send notifications

### reCAPTCHA Integration

To add reCAPTCHA to the contact form:

1. Get reCAPTCHA keys from Google
2. Install react-google-recaptcha: `npm install react-google-recaptcha`
3. Update `src/pages/Contact.jsx` to include reCAPTCHA component

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette. The current theme uses:
- Primary blue: `#0B3D91` (blue-900)
- Gray scale for text and backgrounds
- Accessible contrast ratios

### Typography

Fonts are loaded from Google Fonts in `src/index.css`. To change fonts:
1. Update the Google Fonts import
2. Update the `fontFamily` in `tailwind.config.js`

### Logo

Replace the text logo in `src/components/Header.jsx` with your actual logo image when available.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright © 2024 RDY Enterprise. All rights reserved.

## Support

For questions or issues, contact: inquiries@rdyenterprise.com
