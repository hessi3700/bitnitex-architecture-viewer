# Enable GitHub Actions for Your Repository

GitHub Actions needs to be enabled for automatic deployment to work.

## Steps to Enable GitHub Actions

### 1. Go to Repository Settings

1. Navigate to your GitHub repository
2. Click on **Settings** (top menu bar)
3. Scroll down to **Actions** in the left sidebar
4. Click on **Actions** → **General**

### 2. Enable Actions

Under **Actions permissions**, you'll see options:

1. Select **"Allow all actions and reusable workflows"** (recommended)
   - OR
2. Select **"Allow local actions and reusable workflows"** (if you want more control)

3. Scroll down to **Workflow permissions**
   - Select **"Read and write permissions"**
   - Check **"Allow GitHub Actions to create and approve pull requests"** (optional but recommended)

4. Click **Save** at the bottom

### 3. Alternative: Enable via Repository Settings

If Actions is disabled at the organization level:

1. Go to **Settings** → **Actions** → **General**
2. Look for a message about organization settings
3. You may need to:
   - Contact your organization admin to enable Actions
   - Or use a personal repository instead

### 4. Verify Actions is Enabled

1. Go to the **Actions** tab in your repository
2. You should see workflows listed (including "Deploy to GitHub Pages")
3. If you see "Workflows are disabled", Actions is still not enabled

### 5. After Enabling

1. Go back to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow should now be available

## Troubleshooting

### If Actions Still Not Available

**For Personal Repositories:**
- Actions should be enabled by default
- Check if there's a billing issue (Actions are free for public repos)

**For Organization Repositories:**
- Organization admin needs to enable Actions
- Go to Organization Settings → Actions → General
- Enable "Allow all actions and reusable workflows"

**For Enterprise/Private Repositories:**
- May require GitHub Enterprise plan
- Contact your organization admin

## Quick Checklist

- [ ] Repository Settings → Actions → General
- [ ] Actions permissions: "Allow all actions"
- [ ] Workflow permissions: "Read and write"
- [ ] Save changes
- [ ] Go to Pages → Source → Select "GitHub Actions"
- [ ] Push code to trigger workflow

Once enabled, your workflow will automatically deploy on every push to `main`!

