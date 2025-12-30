# Manual Deployment (No Actions Required)

If GitHub Actions won't enable, you can deploy manually using the `gh-pages` package. This works immediately without needing Actions enabled.

## Quick Manual Deploy

### Step 1: Update package.json Homepage

Edit `package.json` and update the homepage to match your repository:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
}
```

Replace:
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

### Step 2: Deploy

```bash
npm run deploy
```

This will:
1. Build your project
2. Create a `gh-pages` branch
3. Push the built files to that branch

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. **Settings** → **Pages**
3. Under **Source**, select **"Deploy from a branch"**
4. **Branch**: Select `gh-pages`
5. **Folder**: Select `/ (root)`
6. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Update Your Site

Whenever you make changes:

```bash
# Make your changes
git add .
git commit -m "Update diagrams"
git push

# Deploy
npm run deploy
```

The `npm run deploy` command will rebuild and redeploy automatically.

## Advantages of Manual Deploy

✅ Works immediately (no Actions needed)
✅ No configuration required
✅ Simple one-command deploy
✅ Works with private repos (free tier)

## Disadvantages

❌ Manual step (not automatic on push)
❌ Requires running `npm run deploy` after each change

## Make it Automatic (Optional)

If you want automatic deployment later, you can:
1. Set up a GitHub Action (when Actions is enabled)
2. Use a CI/CD service (GitHub Actions, CircleCI, etc.)
3. Use a deployment service (Vercel, Netlify, etc.)

But for now, manual deploy works perfectly!

