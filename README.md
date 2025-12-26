# Unique Pairing Site (static)

This static site generates cryptographically-random pairing-session tokens and a shareable URL. The URL uses the hash fragment (`#/s/<token>`) so this works on static hosts (GitHub Pages, Netlify, Vercel, etc.) without server routing.

Image used: https://files.catbox.moe/tihrtk.jpg  
Default display name: `virus`

How it guarantees uniqueness
- Tokens are generated with `window.crypto.getRandomValues()` and are 30+ alphanumeric characters long. The chance of collision is astronomically small, so each session you create will be effectively unique and previously unused.

Files
- index.html — main page
- style.css — styling
- app.js — client-side application logic
- README.md — this file

Usage
1. Put all files into a folder.
2. Open `index.html` locally in a browser, or host on a static host.
3. Enter a display name (optional) and TTL (minutes), then click "Create unique pairing session".
4. Share the generated link. The link contains a random token and will display the pairing code + expiry.

Hosting suggestions (to make the public URL unique)
- GitHub Pages: create a repo with a unique name (e.g., `pairing-site-<random-suffix>`) and push these files to the `main` branch. Enable Pages on `main` (root). The resulting URL `https://<username>.github.io/<repo>/` will be unique to your repo name.
- Netlify/Vercel: drag-and-drop the folder to Netlify or connect the repo to Netlify/Vercel. Give the site a unique subdomain name, or set a custom domain you own.
- To make the URL truly unique across the internet, register a custom domain name and point it to your host.

Want me to do it for you?
- I can generate a uniq repo name suggestion and provide exact git commands to create and publish to GitHub Pages.
- I can produce a single self-contained HTML file (all CSS/JS inlined) if you prefer one file for easy sharing.
- I can add a QR-code generator so recipients can scan the link.

Notes & privacy
- This is a client-only static solution: tokens are generated and stored locally (sessionStorage). There is no server-side storage by default. If you need server-side verification or persistent sessions, I can help add a small backend.
- Because tokens are in the URL hash, they are not sent to the server during HTTP requests; the hash is only processed client-side.

Enjoy — tell me if you want a one-file version or help publishing it publicly!