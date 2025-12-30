# Deploy Now - Manual Method (No Actions Needed!)

Since GitHub Actions is disabled for your account, use manual deployment. It works **immediately**!

## Quick Steps

### 1. Update Homepage in package.json

Edit `package.json` and change line 6:

**Find:**
```json
"homepage": "https://yourusername.github.io/bitnitex",
```

**Replace with your actual repository:**
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
```

**Example:**
- If your repo is: `https://github.com/hessi3700/my-diagram-viewer`
- Then use: `"homepage": "https://hessi3700.github.io/my-diagram-viewer"`

### 2. Deploy

```bash
npm run deploy
```

This will:
- ✅ Build your project
- ✅ Create `gh-pages` branch
- ✅ Push built files to GitHub

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. **Settings** → **Pages**
3. Under **Source**, select **"Deploy from a branch"**
4. **Branch**: Select `gh-pages`
5. **Folder**: Select `/ (root)`
6. Click **Save**

### 4. Wait 1-2 Minutes

GitHub Pages will build your site. Then visit:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

## Update Your Site Later

Whenever you make changes:

```bash
# Make changes and commit
git add .
git commit -m "Update diagrams"
git push

# Deploy the changes
npm run deploy
```

## That's It!

Your site is now live on GitHub Pages without needing Actions!

---

**Note:** If you want Actions enabled later, contact GitHub Support using the link in the error message. But manual deployment works perfectly for now!

