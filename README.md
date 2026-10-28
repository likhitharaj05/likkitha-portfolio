# Likhitha's Developer Portfolio

A responsive, animated personal portfolio built with React and Vite. It uses a dark navy theme, custom CSS illustrations, responsive navigation, project cards, and scroll-reveal animations.

## Requirements

- Node.js 18+ (Node.js 20 LTS recommended)
- npm
- A GitHub account

## Run locally

1. Extract the ZIP file.
2. Open the extracted folder in VS Code.
3. In the terminal, run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Personalize before publishing

Edit `src/App.jsx`:

- Check the project descriptions and technology tags for accuracy.
- Add real GitHub repository/demo URLs to each project's `link` value.
- Add a professional email address in the contact section once you decide which address to publish.
- Confirm experience dates and wording.
- Remove any skills you do not want to claim.

Edit `index.html` to adjust the page title and description if desired.

## Deploy to GitHub Pages

1. Create a **public** GitHub repository named `likkitha-portfolio` (or choose another name).
2. Update `base` in `vite.config.js` to match the repository name, including the slashes:
   - Repository `likkitha-portfolio`: `base: '/likkitha-portfolio/'`
   - Repository `your-repo`: `base: '/your-repo/'`
   - If using a user site repository named `YOUR-USERNAME.github.io`, set `base: '/'`.
3. Push this project to the repository:

   ```bash
   git init
   git add .
   git commit -m "Build developer portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/likkitha-portfolio.git
   git push -u origin main
   ```

4. Install dependencies and deploy:

   ```bash
   npm install
   npm run deploy
   ```

5. In GitHub, open **Settings → Pages** and choose the `gh-pages` branch as the deployment source if GitHub Pages has not already detected it.
6. Wait for the GitHub Pages workflow/deployment to finish. Your live URL will typically be:
   `https://YOUR-USERNAME.github.io/likkitha-portfolio/`

Replace `YOUR-USERNAME` and the repository name with your actual values. The live site will not exist until you complete these steps.

## Notes

- The project uses illustrative CSS art rather than fake screenshots of your applications.
- Project repository links are intentionally blank until you provide the real URLs.
- Google Fonts are loaded from Google Fonts when online; the site uses fallback fonts if unavailable.
- No contact form is connected to an email service; the contact area links to your GitHub and LinkedIn profiles.
