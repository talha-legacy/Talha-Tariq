# 🚀 Talha Tariq Portfolio

A modern, interactive portfolio website with dark/light theme toggle and custom cursor effects.

---

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── style.css           # All styling and design
├── script.js           # All JavaScript functionality
└── README.md          # This file
```

---

## ✨ Features

### 1. **Separated File Structure**
- ✅ Clean separation of HTML, CSS, and JavaScript
- ✅ Easy to find and modify specific parts
- ✅ Better load distribution and organization
- ✅ Professional development practice

### 2. **Smooth Scroll Navigation**
- ✅ All navbar links scroll to sections on the same page
- ✅ No page redirects or refreshes
- ✅ Smooth, professional scrolling animation
- ✅ Automatically accounts for navbar height

### 3. **Interactive Animated Logo**
- ✅ Rotating "RW" logo in a gradient circle
- ✅ Hover effects with rotation and scale
- ✅ Shimmer animation on hover
- ✅ Splits and rotates on interaction

### 4. **Custom Cursor Effects**
- ✅ **Light Mode**: Soft blue shadow follows cursor
- ✅ **Dark Mode**: Glowing star effect with multiple halos
- ✅ Smooth following animation (easing effect)
- ✅ Grows when hovering over interactive elements
- ✅ Disappears when mouse leaves window

### 5. **Theme Toggle**
- ✅ Separated from logo with proper spacing
- ✅ Shows sun icon in dark mode, moon in light mode
- ✅ Saves preference to localStorage
- ✅ Smooth transitions between themes

### 6. **Responsive Design**
- ✅ Works on all screen sizes
- ✅ Mobile-friendly navigation
- ✅ Adaptive layouts

---

## 🎨 Design Highlights

### Color Scheme
- **Primary Accent**: Blue (#3b82f6)
- **Secondary Accent**: Purple (#8b5cf6)
- **Zinc Tones**: For backgrounds and borders
- **Dark Mode**: Deep navy backgrounds
- **Light Mode**: Clean white backgrounds

### Cursor Effects
- **Light Mode Cursor**: 
  - Soft radial gradient glow
  - Subtle blue shadow
  - Blends naturally with light background
  
- **Dark Mode Cursor**:
  - Multi-layer star glow effect
  - Blue and purple halos
  - More pronounced and magical appearance
  - Mimics star properties with light diffusion

---

## 🚀 How to Get It Live on GitHub Pages

### Step 1: Update Your GitHub Username
1. Open `index.html`
2. Find all instances of `talhatariq`
3. Replace with your **actual GitHub username**

### Step 2: Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New Repository" (green button)
3. Name it: `YOUR-USERNAME.github.io`
   - ⚠️ Replace `YOUR-USERNAME` with your actual GitHub username
   - ⚠️ Must be exactly this format!
4. Set to **Public**
5. Click "Create Repository"

### Step 3: Upload Your Files
1. In your new repository, click "Upload files"
2. Drag and drop ALL THREE files:
   - `index.html`
   - `style.css`
   - `script.js`
3. Scroll down and click "Commit changes"

### Step 4: Enable GitHub Pages
1. In your repository, click "Settings"
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select **main** branch
4. Click "Save"

### Step 5: Visit Your Live Site!
- Wait 2-3 minutes for GitHub to build your site
- Visit: `https://YOUR-USERNAME.github.io`
- Your portfolio is now LIVE! 🎉

---

## 📝 How to Modify Your Portfolio

### Change Your Information

**Update Name/Bio:**
- File: `index.html`
- Find the `<!-- HERO SECTION -->` comment
- Change text between the tags

**Update Email:**
- File: `index.html`
- Find `rozlanwayu@email.com`
- Replace with your email

### Add a Skill

**File: `index.html`**
1. Find `<!-- SKILLS SECTION -->`
2. Copy this block:
```html
<div class="skill-card">
    <h3>Your Skill Name</h3>
</div>
```
3. Paste it in the skills grid
4. Change "Your Skill Name" to your skill

### Add Your First Project

**File: `index.html`**
1. Find `<!-- PROJECTS SECTION -->`
2. Delete the entire `<div class="coming-soon">` section
3. Add this:
```html
<div class="projects-grid">
    <div class="project-card">
        <h3>Project Name</h3>
        <p>Description of what this project does and technologies used.</p>
        <a href="https://github.com/yourusername/repo" class="project-link" target="_blank">
            View on GitHub →
        </a>
    </div>
</div>
```
4. Fill in your project details
5. Copy the `project-card` block to add more projects

### Change Colors

**File: `style.css`**
1. Find the `:root` section at the top
2. Change color values:
```css
--accent: #3b82f6;  /* Change this hex code */
```

### Modify Cursor Effect

**File: `style.css`**
- Find `.cursor-glow` section
- Adjust:
  - `width` and `height` for size
  - `background` gradients for colors
  - `box-shadow` for glow intensity

**File: `script.js`**
- Find `const ease = 0.15;`
- Change value (0.1 = slower, 0.3 = faster)

---

## 🔧 Troubleshooting

### Portfolio Not Showing Up?
1. Check repository name is exactly: `username.github.io`
2. Ensure files are in the **root** directory (not in a folder)
3. Wait 5-10 minutes after first upload
4. Check GitHub Pages settings are enabled

### Cursor Not Working?
1. Make sure all three files are in the same folder
2. Check browser console for errors (F12)
3. Cursor effect won't work on mobile devices (intentional)

### Smooth Scroll Not Working?
1. Ensure `script.js` is properly linked in `index.html`
2. Check that section IDs match navbar href values:
   - `href="#about"` needs `id="about"` in section

### Theme Toggle Not Saving?
1. Check browser allows localStorage
2. Try in a different browser
3. Clear browser cache and try again

---

## 📱 Mobile Optimization

The portfolio automatically adjusts for mobile:
- Navbar links become smaller
- Logo scales down
- Sections adjust padding
- Cursor effect is hidden on touch devices

---

## 🎯 Future Enhancements

Ready to add more features? Here are ideas:

1. **Add Blog Section**
2. **Contact Form Integration**
3. **Project Filter by Technology**
4. **Particle.js Background Effect**
5. **Resume Download Button**
6. **Testimonials Section**

Want help adding any of these? Just ask in the "Talha Tariq" project!

---

## 📬 Contact

Built by Talha Tariq

- Email: talhaatariq234@gmail.com
- GitHub: [@talha-legacy](https://github.com/talha-legacy)

---

## 📄 License

MIT License

Copyright (c) 2026 talha-legacy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

**Remember**: This portfolio grows with you! Start simple, add features as you learn. Every great developer's portfolio started as a single HTML page.

Good luck! 🚀