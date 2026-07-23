# Daisy Cottage — website (Astro)

Replacement for the Squarespace site at **www.dayscottages.rentals**. Static site built with [Astro](https://astro.build), designed to preserve the existing URLs, page copy, image filenames, and page titles for SEO.

## One-time deploy (GitHub + Netlify)

You're logged into both already. From this folder in Terminal:

### 1. Get the images (they aren't in this zip)
```bash
chmod +x download-images.sh
./download-images.sh          # pulls all 92 photos into public/images/
```

### 2. Preview locally (optional)
```bash
npm install
npm run dev                   # open the printed http://localhost:4321
```

### 3. Push to GitHub
```bash
git init
git add -A
git commit -m "Daisy Cottage site — initial build"
git branch -M main
git remote add origin https://github.com/<your-username>/daisy-website.git
git push -u origin main
```

### 4. Connect Netlify
- Netlify → **Add new site → Import an existing project → GitHub → `daisy-website`**.
- Netlify auto-detects Astro. Confirm: **Build command** `npm run build`, **Publish directory** `dist`.
- **Deploy**. You'll get a `random-name.netlify.app` URL to review the whole site with real photos.

### 5. Point the domain (only when you're happy with the preview)
- In Netlify: **Domain settings → Add custom domain →** `www.dayscottages.rentals`. Netlify shows the exact DNS records.
- In **GoDaddy DNS**: set `www` (CNAME) and the root/apex (A record) to the values Netlify gives you.
- Netlify auto-provisions HTTPS. **Do not cancel Squarespace until this is live and verified.**

## Editing
- Site-wide info (phone, email, Airbnb link, nav): `src/data/site.js`
- Colors & fonts (one place): `src/styles/global.css` (`:root` block)
- Each page: `src/pages/*.astro` — copy is inline, edit in place.
- 301 redirects from old URLs: `public/_redirects`

## Known follow-ups
- **Rental Rates** (`/rent-daisy-cottage`) shows the 2021 rate card — update the numbers.
- **Sunset webcam** (homepage) and **storm/remodel video clips** (blog posts) had live embeds — paste the embed code where the `TODO` comments are.
- **Rental Application** PDF (short-term-rental page) — add the download file if you want it linked.
- Meta descriptions were added on most pages; a few were intentionally deferred.
