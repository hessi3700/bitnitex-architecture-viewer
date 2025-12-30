# Troubleshooting: GitHub Actions Still Disabled

If Actions is still disabled after changing permissions, try these steps:

## Step 1: Verify Workflow File Exists

Make sure the workflow file is in the repository:
- Path: `.github/workflows/deploy.yml`
- It should be committed and pushed to GitHub

## Step 2: Check Actions Tab

1. Go to the **Actions** tab in your repository
2. If you see "Workflows are disabled", Actions is still not enabled
3. If you see the workflow listed but grayed out, it needs to be enabled

## Step 3: Enable Actions (Multiple Places to Check)

### A. Repository Level
1. **Settings** → **Actions** → **General**
2. Under **Actions permissions**:
   - Select **"Allow all actions and reusable workflows"**
3. Under **Workflow permissions**:
   - Select **"Read and write permissions"**
   - ✅ Check "Allow GitHub Actions to create and approve pull requests"
4. Click **Save**

### B. Organization Level (If Applicable)
If this is an organization repository:
1. Go to **Organization Settings** (not repository settings)
2. **Actions** → **General**
3. Enable Actions for the organization
4. Allow repositories to use Actions

### C. Check Repository Visibility
- **Public repositories**: Actions should work automatically
- **Private repositories**: May require GitHub Pro/Team plan for Actions

## Step 4: Manual Workflow Trigger

After enabling, try to manually trigger:

1. Go to **Actions** tab
2. Click on **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** button (if available)
4. Select branch: `main`
5. Click **"Run workflow"**

## Step 5: Alternative - Use Branch-Based Deployment

If Actions still doesn't work, you can use the old method temporarily:

1. **Settings** → **Pages**
2. Under **Source**, select **"Deploy from a branch"**
3. Branch: `main` or `gh-pages`
4. Folder: `/ (root)` or `/dist`

Then manually deploy:
```bash
npm run build
npm run deploy  # Uses gh-pages to deploy to gh-pages branch
```

## Step 6: Check for Errors

1. Go to **Actions** tab
2. Look for any failed workflow runs
3. Click on a failed run to see error messages
4. Common errors:
   - "Workflow is disabled"
   - "Permissions denied"
   - "Actions not enabled"

## Step 7: Verify Repository Settings

Check these settings:
- [ ] Repository is **Public** (or you have GitHub Pro/Team)
- [ ] Actions is enabled at repository level
- [ ] Actions is enabled at organization level (if org repo)
- [ ] Workflow permissions: **Read and write**
- [ ] Actions permissions: **Allow all actions**

## Step 8: Create a Simple Test Workflow

Create a test workflow to verify Actions works:

Create `.github/workflows/test.yml`:
```yaml
name: Test Actions

on:
  workflow_dispatch:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Test
        run: echo "Actions is working!"
```

1. Commit and push this file
2. Go to **Actions** tab
3. Try to run "Test Actions" workflow
4. If this works, the issue is with the Pages deployment workflow
5. If this doesn't work, Actions is still disabled

## Still Not Working?

If Actions is still disabled after all these steps:

1. **Check GitHub Status**: https://www.githubstatus.com/
2. **Contact GitHub Support**: If it's a private repo, you may need a paid plan
3. **Use Alternative Deployment**: Deploy manually using `gh-pages` package
4. **Check Billing**: Private repos need GitHub Pro for Actions

## Quick Manual Deploy (Workaround)

If Actions won't enable, deploy manually:

```bash
# Build the project
npm run build

# Deploy using gh-pages (creates gh-pages branch)
npm run deploy
```

Then in GitHub:
1. **Settings** → **Pages**
2. **Source**: `gh-pages` branch
3. **Folder**: `/ (root)`

This bypasses Actions entirely.

