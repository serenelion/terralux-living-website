# TerraLux Living — Website Options

## Available Landing Pages

You now have **three versions** of the TerraLux Living website, each optimized for different stages and goals:

---

## 1. Original Site (Current Live)
**File:** `index.html` (original)  
**Style:** `src/styles/main.css` (original)

**Use Case:** Generic lifestyle membership introduction

**Pros:**
- Already live
- Familiar to existing visitors

**Cons:**
- Less optimized for conversion
- No clear offer or urgency
- Generic value proposition

**Status:** Currently deployed at your domain

---

## 2. Pre-Sale Optimization (Aggressive Sales)
**File:** `index-v2.html`  
**Style:** `src/styles/main-v2.css`

**Use Case:** Active pre-sale campaign with $29 founding member offer

**Key Features:**
- Hero-level $29 pre-sale offer
- Scarcity (1,000 founding members)
- 9 conversion points throughout page
- Detailed tier breakdown (Scout → Rider → Steward → Partnership)
- FAQ section (8 questions)
- Application form (approval-based)
- How It Works timeline
- Stats and trust signals

**Best For:**
- ✅ You have a confirmed app launch date
- ✅ You need cash flow now ($7K-$29K target)
- ✅ You have warm audiences ready (Inokim, HTH, GKC)
- ✅ You want to validate demand with payment

**Estimated Conversion:** 3-5% (applications per visitor)

**Documentation:**
- `PRESALE_IMPROVEMENTS_SUMMARY.md`
- `DEPLOYMENT_CHECKLIST.md`
- `BEFORE_AFTER_COMPARISON.md`

---

## 3. Waitlist Page (Brand-Aligned, Minimal)
**File:** `waitlist.html`  
**Style:** `src/styles/waitlist.css`

**Use Case:** Build anticipation and collect emails before launch

**Key Features:**
- Official TerraLux branding (logos, patterns, colors)
- Clean, minimal, premium aesthetic
- Simple 4-field form (name, email, location, interest)
- Aspirational positioning ("Founding Members")
- Soft urgency (no pricing, no payment)
- Location preview (15+ locations)
- Benefit overview (6 cards)
- Netlify form integration (instant capture)

**Best For:**
- ✅ App is still in development (no launch date yet)
- ✅ You want to warm up an audience first
- ✅ You prefer email nurture → pre-sale funnel
- ✅ You want simpler, cleaner first impression
- ✅ You're testing product-market fit

**Estimated Conversion:** 5-15% (email captures per visitor)

**Documentation:**
- `WAITLIST_PAGE_SUMMARY.md`

---

## Which Should You Use?

### **Decision Tree:**

```
Do you have a confirmed app launch date?
├─ YES
│  └─ Need cash flow now?
│     ├─ YES → Use PRE-SALE PAGE (index-v2.html)
│     └─ NO  → Use WAITLIST PAGE (waitlist.html)
└─ NO
   └─ Use WAITLIST PAGE (waitlist.html)
```

### **Simple Answer:**

| Your Situation | Recommended Page |
|----------------|------------------|
| App launching in 4-8 weeks + need revenue | **Pre-Sale** |
| App launch date unknown or 12+ weeks away | **Waitlist** |
| Want to build audience before asking for money | **Waitlist** |
| Have warm leads ready to convert now | **Pre-Sale** |
| Testing messaging and product-market fit | **Waitlist** |

---

## Deployment Instructions

### **Option 1: Deploy Pre-Sale Page**

```bash
cd /Users/arye/Documents/terralux-living-website

# Backup original
cp index.html index-original-backup.html
cp src/styles/main.css src/styles/main-original-backup.css

# Deploy pre-sale version
cp index-v2.html index.html
cp src/styles/main-v2.css src/styles/main.css

# Push to Netlify
git add .
git commit -m "Deploy pre-sale page with $29 offer"
git push origin main
```

### **Option 2: Deploy Waitlist Page**

```bash
cd /Users/arye/Documents/terralux-living-website

# Backup original
cp index.html index-original-backup.html

# Deploy waitlist version
cp waitlist.html index.html

# Push to Netlify
git add .
git commit -m "Deploy waitlist page with official branding"
git push origin main
```

### **Option 3: Keep Multiple Pages Live**

```bash
cd /Users/arye/Documents/terralux-living-website

# Keep all versions accessible
# index.html = main page (your choice)
# presale.html = pre-sale version
# waitlist.html = waitlist version

cp index-v2.html presale.html

git add .
git commit -m "Add pre-sale and waitlist pages"
git push origin main
```

Then route traffic:
- Main: `terraluxliving.com` (choose one)
- Pre-sale: `terraluxliving.com/presale.html`
- Waitlist: `terraluxliving.com/waitlist.html`

---

## Recommended: Two-Phase Approach

### **Phase 1: Waitlist (Weeks 1-8)**
1. Deploy `waitlist.html` as homepage
2. Run social media / email campaigns
3. Collect 500-1,000 email addresses
4. Send weekly nurture content
5. Build anticipation with behind-the-scenes updates

**Goal:** Warm, engaged audience ready to buy

### **Phase 2: Pre-Sale (Weeks 9-12)**
1. Switch to `index-v2.html` (pre-sale page)
2. Email waitlist with exclusive $29 offer
3. "You're on the list — here's your early access"
4. Convert 20-40% of waitlist to paying members
5. Close at 1,000 members (or revenue goal)

**Goal:** $7K-$29K pre-sale revenue from warm audience

**Why This Works:**
- Waitlist warms up cold traffic
- Pre-sale converts warm leads at higher rates
- Two-touch approach (interest → commitment)
- Email list becomes asset for future launches

---

## Form Data Access

### **Netlify Forms Dashboard:**
1. Log in to Netlify
2. Go to your site → Forms tab
3. View submissions in real-time
4. Export CSV for email marketing

### **Email Notifications:**
- Configure in Netlify site settings
- Get notified of each submission
- Set up multiple recipients

### **Zapier Integration:**
- Connect Netlify Forms to Mailchimp/ConvertKit
- Auto-add to email sequences
- Tag by interest/location

---

## Key Files Reference

| File | Purpose | Status |
|------|---------|--------|
| `index.html` | Current live page | Active |
| `index-v2.html` | Pre-sale optimized | Ready to deploy |
| `waitlist.html` | Waitlist capture | Ready to deploy |
| `src/styles/main.css` | Original styles | Active |
| `src/styles/main-v2.css` | Pre-sale styles | Ready |
| `src/styles/waitlist.css` | Waitlist styles | Ready |
| `src/assets/*-official.svg` | Official TerraLux logos | Ready |

---

## Testing Before Deploy

### **Test Form Submission:**
1. Open page locally or on staging
2. Fill out form with test data
3. Submit
4. Check Netlify Forms dashboard
5. Verify email notification received

### **Mobile Check:**
```bash
# Open on mobile devices or use browser dev tools
# Test on:
- iOS Safari
- Android Chrome
- Desktop Chrome/Firefox/Edge
```

### **Speed Check:**
```bash
# Run Lighthouse audit in Chrome DevTools
# Target scores:
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90
```

---

## Need Help Deciding?

### **Questions to Ask:**

1. **Timeline:**  
   - When does the TerraLux Home App launch?
   - ⏱️ <8 weeks → Pre-Sale  
   - ⏱️ >8 weeks → Waitlist

2. **Cash Flow:**  
   - Do you need revenue now?
   - 💰 Yes → Pre-Sale  
   - 💰 No → Waitlist

3. **Audience:**  
   - Do you have warm leads (Inokim, HTH, GKC)?
   - 🔥 Yes → Pre-Sale  
   - 🔥 No → Waitlist

4. **Risk Tolerance:**  
   - Comfortable asking for money without finished product?
   - ✅ Yes → Pre-Sale  
   - ⚠️ No → Waitlist

5. **Brand Stage:**  
   - Testing messaging vs. ready to sell?
   - 🧪 Testing → Waitlist  
   - 🚀 Ready → Pre-Sale

---

## Summary

You have three options:

1. **Keep Original** (index.html) — Not recommended (unoptimized)
2. **Deploy Pre-Sale** (index-v2.html) — If you need cash flow now
3. **Deploy Waitlist** (waitlist.html) — If you need to build audience first

**Recommended path:** Start with **Waitlist** → collect 500-1,000 emails → switch to **Pre-Sale** → convert warm leads at 20-40%.

**Quick win:** Deploy waitlist today, collect emails for 4-6 weeks while finishing app development, then launch pre-sale to warm audience.

---

## Deploy Now?

```bash
# Deploy waitlist (recommended for most)
cd /Users/arye/Documents/terralux-living-website
cp waitlist.html index.html
git add .
git commit -m "Deploy waitlist page"
git push origin main
```

**Live in 1-2 minutes.** 🐆

---

## Questions?

See documentation:
- **Waitlist:** `WAITLIST_PAGE_SUMMARY.md`
- **Pre-Sale:** `PRESALE_IMPROVEMENTS_SUMMARY.md`
- **Deployment:** `DEPLOYMENT_CHECKLIST.md`
- **Comparison:** `BEFORE_AFTER_COMPARISON.md`

Or email: arye@terra-lux.org
