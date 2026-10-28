# Likhitha's Developer Portfolio

A responsive, animated personal portfolio built with **React and Vite**. It features a dark navy theme, responsive navigation, project showcases, skills, experience, contact links, and scroll-reveal animations.

## Tech Stack

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Git and GitHub
- GitHub Pages

## Requirements

- Node.js 18 or later
- npm
- Git
- A GitHub account

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/likhitharaj05/likkitha-portfolio.git
   ```

2. Open the project folder in VS Code:

   ```bash
   cd likkitha-portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal, usually `http://localhost:5173`.

## Personalization

Before publishing, review the following files:

- **`src/App.jsx`** — Update your profile details, skills, project descriptions, experience, and contact information.
- **`src/styles.css`** — Customize the portfolio's design, colors, layout, and animations.
- **`index.html`** — Update the browser tab title and page description.
- **`vite.config.js`** — Ensure the base path matches your GitHub repository.

Verify all project descriptions, technologies, experience dates, and contact information before publishing.

## Push Updates to GitHub

From the project folder, run:

```bash
git add .
git commit -m "Update developer portfolio"
git push origin main
```

If this is the first commit, use:

```bash
git add .
git commit -m "Add developer portfolio"
git branch -M main
git remote add origin https://github.com/likhitharaj05/likkitha-portfolio.git
git push -u origin main
```

If the remote already exists, do not add it again. Check it using:

```bash
git remote -v
```

## Deploy to GitHub Pages

### 1. Configure Vite

In `vite.config.js`, ensure the base path is:

```javascript
base: '/likkitha-portfolio/',
```

### 2. Install the deployment dependency

```bash
npm install
npm install --save-dev gh-pages
```

Ensure your `package.json` includes these scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Keep the existing `dev`, `build`, and `preview` scripts.

### 3. Deploy

```bash
npm run deploy
```

### 4. Enable GitHub Pages

1. Open the [likkitha-portfolio repository](https://github.com/likhitharaj05/likkitha-portfolio).
2. Go to **Settings → Pages**.
3. Select **Deploy from a branch** as the source.
4. Select the `gh-pages` branch and the `/ (root)` folder.
5. Save and wait for deployment to complete.

### Live Portfolio

Once deployment succeeds, your website should be available at:

**https://likhitharaj05.github.io/likkitha-portfolio/**

The URL will work after GitHub Pages has successfully published the site.

## Important Notes

- Add actual GitHub repository or live demo links for your projects when available.
- Ensure your published email address is correct.
- Do not include passwords, access tokens, or other secrets in the repository.
- The contact section does not send messages unless an email service or backend is connected.
- Google Fonts require an internet connection; fallback fonts are provided.
- After making changes, push your updates to GitHub and redeploy if necessary.

---

**Created by Lakshmi Likhitha Vasamsetti**

GitHub: https://github.com/likhitharaj05

LinkedIn: https://www.linkedin.com/in/likhitha-vasamsetti/