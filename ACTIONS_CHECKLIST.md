# GitHub Actions Enable Checklist

The workflow file is on GitHub. Follow this checklist to enable Actions:

## ✅ Step-by-Step Checklist

### 1. Verify Workflow File is on GitHub
- [x] ✅ Workflow file exists: `.github/workflows/deploy.yml`
- [x] ✅ File is committed and pushed
- [ ] Go to GitHub → Your repo → `.github/workflows/deploy.yml`
- [ ] Verify you can see the file content on GitHub

### 2. Enable Actions at Repository Level

Go to: **Repository** → **Settings** → **Actions** → **General**

#### A. Actions Permissions
- [ ] Select: **"Allow all actions and reusable workflows"**
  - OR keep your current setting if it allows the actions we need
- [ ] Click **Save** (if you changed it)

#### B. Workflow Permissions ⚠️ CRITICAL
- [ ] **MUST CHANGE**: Select **"Read and write permissions"**
  - Currently set to: "Read repository contents and packages permissions" (read-only)
  - This is why Actions is disabled!
- [ ] ✅ Check the box: **"Allow GitHub Actions to create and approve pull requests"**
- [ ] Click **Save**

### 3. Check Organization Settings (If Applicable)

If this is an organization repository:

- [ ] Go to: **Organization Settings** (not repository settings)
- [ ] **Actions** → **General**
- [ ] Enable: **"Allow all actions and reusable workflows"**
- [ ] Save

### 4. Verify Repository Type

- [ ] Is repository **Public**? (Actions work automatically)
- [ ] Is repository **Private**? (May need GitHub Pro/Team plan)

### 5. Check Actions Tab

After changing settings:

1. Go to **Actions** tab
2. You should see:
   - ✅ **"Deploy to GitHub Pages"** workflow listed
   - ✅ **"Run workflow"** button available
3. If you still see "Workflows are disabled":
   - Wait 1-2 minutes (settings may take time to propagate)
   - Refresh the page
   - Check if there's an error message

### 6. Test the Workflow

1. Go to **Actions** tab
2. Click **"Deploy to GitHub Pages"**
3. Click **"Run workflow"** button (top right)
4. Select branch: `main`
5. Click green **"Run workflow"** button
6. Watch it run!

### 7. Configure Pages Source

After workflow runs successfully:

1. Go to **Settings** → **Pages**
2. Under **Source**, you should see:
   - ✅ **"GitHub Actions"** option available
3. Select **"GitHub Actions"**
4. Your site will deploy automatically on every push!

## 🔴 Common Issues

### Issue: "Workflows are disabled"
**Solution**: Check Step 2B above - Workflow permissions must be "Read and write"

### Issue: "Actions not available"
**Solution**: 
- Check if repository is private (may need paid plan)
- Check organization settings if org repo
- Verify Actions is enabled at both repo and org level

### Issue: Workflow file not showing
**Solution**: 
- Verify file is pushed: `git push origin main`
- Check file path: `.github/workflows/deploy.yml`
- File must be on `main` or `master` branch

### Issue: "Permission denied"
**Solution**: 
- Change Workflow permissions to "Read and write"
- Enable "Allow GitHub Actions to create and approve pull requests"

## 🎯 Quick Test

After making changes, test with a simple push:

```bash
git add .
git commit -m "Test Actions deployment"
git push
```

Then check:
- **Actions** tab → Should show workflow running
- **Settings** → **Pages** → Should show deployment status

## 📞 Still Not Working?

If Actions is still disabled after all steps:

1. **Screenshot the error**: Take a screenshot of what you see in Actions tab
2. **Check GitHub Status**: https://www.githubstatus.com/
3. **Use Manual Deploy**: See `MANUAL_DEPLOY.md` for immediate deployment

---

**Most Common Fix**: Change **Workflow permissions** from "Read" to **"Read and write"** in Settings → Actions → General

