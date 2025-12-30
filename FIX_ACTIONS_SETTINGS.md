# Fix GitHub Actions Settings

Your GitHub Actions is disabled because the **Workflow permissions** are set to read-only. Here's how to fix it:

## Critical Fix: Workflow Permissions

### Current Problem:
- **Workflow permissions** is set to: "Read repository contents and packages permissions" (READ-ONLY)
- This prevents the workflow from deploying to GitHub Pages

### Solution:

1. **Go to**: Repository → **Settings** → **Actions** → **General**

2. **Scroll to "Workflow permissions"** section

3. **Change to**:
   - ✅ Select **"Read and write permissions"** (NOT read-only)
   - ✅ Check the box: **"Allow GitHub Actions to create and approve pull requests"**

4. **Click "Save"** at the bottom

## Optional: Actions Permissions

Your current setting is:
- "Allow hessi3700, and select non-hessi3700, actions and reusable workflows"

This should work, but for easier deployment, you can change to:
- ✅ **"Allow all actions and reusable workflows"** (recommended for public repos)

## After Making Changes

1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The "Deploy to GitHub Pages" workflow should now appear
4. Push a commit to trigger the workflow:
   ```bash
   git add .
   git commit -m "Fix workflow permissions"
   git push
   ```

## Why This Is Needed

The deployment workflow needs to:
- ✅ Write to GitHub Pages (deploy files)
- ✅ Upload artifacts
- ✅ Configure Pages settings

Read-only permissions prevent all of these operations.

---

**Quick Fix Checklist:**
- [ ] Settings → Actions → General
- [ ] Workflow permissions: Change to **"Read and write permissions"**
- [ ] Check: "Allow GitHub Actions to create and approve pull requests"
- [ ] Click **Save**
- [ ] Go to Pages → Source → Select **GitHub Actions**

