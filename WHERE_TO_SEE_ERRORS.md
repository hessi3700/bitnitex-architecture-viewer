# Where to See GitHub Actions Errors

## 1. Actions Tab - Main Error Location

### Go to Actions Tab:
1. Open your repository on GitHub
2. Click the **"Actions"** tab (top menu)
3. This shows all workflow runs and errors

### What to Look For:

#### A. If Workflow is Listed:
- Click on **"Deploy to GitHub Pages"** workflow
- Look for:
  - ❌ Red X = Failed run
  - ⚠️ Yellow circle = Warning
  - ✅ Green check = Success
- Click on a failed run to see error details

#### B. If You See "Workflows are disabled":
- This means Actions is still disabled
- The issue is the **Workflow permissions** setting (read-only)

#### C. If Workflow Doesn't Appear:
- The workflow file might not be on the correct branch
- Or Actions is disabled

## 2. Check Workflow Run Details

If a workflow ran but failed:

1. Go to **Actions** tab
2. Click on the workflow run (left sidebar)
3. Click on the failed job (e.g., "build-and-deploy")
4. Click on each step to see:
   - ✅ Green = Step succeeded
   - ❌ Red = Step failed (click to see error message)
   - ⏸️ Yellow = Step skipped

## 3. Common Error Messages

### "Workflows are disabled"
**Location**: Actions tab
**Fix**: Change Workflow permissions to "Read and write"

### "Permission denied"
**Location**: In workflow run logs
**Fix**: Change Workflow permissions to "Read and write"

### "Actions is currently unavailable"
**Location**: Settings → Pages
**Fix**: Enable Actions first, then configure Pages

### "Workflow file not found"
**Location**: In workflow run logs
**Fix**: Ensure `.github/workflows/deploy.yml` is on `main` branch

## 4. Check Settings for Errors

### Settings → Actions → General
- Look for any warning messages
- Check if there are restrictions listed

### Settings → Pages
- Look for error messages about Actions
- Check deployment status

## 5. Quick Diagnostic Steps

1. **Actions Tab**:
   - Do you see "Deploy to GitHub Pages" workflow?
   - If yes, click it and check for failed runs
   - If no, Actions is still disabled

2. **Settings → Actions → General**:
   - Is "Workflow permissions" set to **"Read and write"**?
   - If not, that's the problem!

3. **Settings → Pages**:
   - What error message do you see?
   - Does it say "Actions is currently unavailable"?

## 6. Screenshot What You See

To help diagnose, take screenshots of:
1. **Actions tab** - What do you see?
2. **Settings → Actions → General** - Workflow permissions section
3. **Settings → Pages** - Any error messages

## 7. Most Likely Issue

Based on your settings screenshot:
- **Workflow permissions** is set to **"Read repository contents and packages permissions"** (read-only)
- This prevents the workflow from deploying
- **Fix**: Change to **"Read and write permissions"** and click Save

After changing, wait 30 seconds, then:
- Refresh the Actions tab
- The workflow should appear
- Go to Settings → Pages → Source → Select "GitHub Actions"

