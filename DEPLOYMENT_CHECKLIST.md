# TerraLux Living Pre-Sale — Deployment Checklist

## Quick Start (5 Minutes)

### Option 1: Replace Existing Files
```bash
cd /Users/arye/Documents/terralux-living-website

# Backup current version
cp index.html index-old.html
cp src/styles/main.css src/styles/main-old.css

# Deploy new version
cp index-v2.html index.html
cp src/styles/main-v2.css src/styles/main.css

# Commit to git
git add .
git commit -m "Pre-sale optimization: HTH style system + value prop improvements"
git push origin main
```

### Option 2: Side-by-Side Testing
Keep both versions live for A/B testing:
- Current: `https://terraluxliving.com/`
- New: `https://terraluxliving.com/presale.html`

Then compare conversion rates after 100 visitors each.

---

## Pre-Launch Checklist

### ✅ **Content Verification**
- [ ] Confirm $29 pricing is accurate
- [ ] Verify "1,000 founding members" limit is correct
- [ ] Check sensor pricing ($15 mentioned)
- [ ] Confirm "5 business days" response time for applications
- [ ] Review all partner links (9 partners listed)
- [ ] Verify location list accuracy (live + launching + future)
- [ ] Update any outdated dates/timelines

### ✅ **Form Testing**
- [ ] Submit test application (use `bot-field` to test honeypot)
- [ ] Verify Netlify form submissions arrive
- [ ] Check email notifications go to correct address
- [ ] Test form on mobile (iOS Safari, Android Chrome)
- [ ] Confirm all required fields enforce validation
- [ ] Test dropdown select menus work properly

### ✅ **Visual QA**
- [ ] Check logo displays correctly (header + footer)
- [ ] Test all internal anchor links (#join, #tiers, #benefits)
- [ ] Verify all external partner links open in new tabs
- [ ] Test hover states on buttons and cards
- [ ] Check mobile menu (nav links hidden on mobile by design)
- [ ] Verify responsive breakpoints (768px, 1024px)
- [ ] Test in multiple browsers (Chrome, Safari, Firefox, Edge)

### ✅ **Technical**
- [ ] Run Lighthouse audit (aim for 90+ performance)
- [ ] Check accessibility score (WCAG AA compliance)
- [ ] Verify SEO meta tags (title, description)
- [ ] Test page load speed (<3 seconds)
- [ ] Confirm favicon displays
- [ ] Check console for JavaScript errors (there shouldn't be any)

### ✅ **Copy Proofreading**
- [ ] Read through entire page for typos
- [ ] Check consistent capitalization (TerraLux vs. Terralux)
- [ ] Verify all CTAs are action-oriented ("Join Pre-Sale", not "Learn More")
- [ ] Confirm FAQ answers are accurate
- [ ] Check footer copyright year (2026)

---

## Post-Launch Monitoring

### **First 24 Hours**
- Monitor form submissions (expect 0-5 depending on traffic)
- Check for error reports (email, Slack, etc.)
- Watch analytics for bounce rate (should be <70%)
- Track scroll depth (aim for 50%+ reaching benefits section)

### **First Week**
- Conversion rate: Applications per 100 visitors
  - Target: 2-5% (2-5 applications per 100 visitors)
  - Good: 5-10%
  - Excellent: 10%+
- Time on page: Should increase vs. old version
- Mobile vs. desktop performance
- Which CTA drives most conversions (hero vs. scout card vs. final)

### **First Month**
- Total applications received
- Approval rate (how many you approve vs. reject)
- Pre-sale revenue collected
- Feedback from approved members (survey after joining)

---

## Email/Marketing Integration

### **Inokim Riders (4,500 contacts)**
**Subject:** You're Invited: TerraLux Living Founding Member Pre-Sale

**Email body outline:**
1. As an Inokim rider, you're selected for early access
2. $29 pre-sale for first 2 months (50% off)
3. Digital wellness platform + global benefits
4. Limited to 1,000 founding members
5. CTA: Apply now at [link]

### **Homes That Heal Waitlist**
**Subject:** Your Homes That Heal Journey Starts Now — $29 Pre-Sale

**Email body outline:**
1. HTH Starter Kits are coming + digital platform is live
2. Join TerraLux Living Scout membership today
3. Get home wellness monitoring while you plan larger projects
4. 20% discount on all HTH products as member
5. CTA: Become a Founding Scout [link]

### **German Kitchen Center Clients**
**Subject:** The Wellness Kitchen Was Just the Beginning

**Email body outline:**
1. Your kitchen investment was about health + longevity
2. Now monitor your entire home environment
3. TerraLux Living founding member invitation
4. Priority access to Discovery Kit and transformation roadmap
5. CTA: Join the founding community [link]

---

## A/B Test Ideas (After Initial Launch)

### **Hero Headline Variants**
- A: "Your Home Becomes Your Wellness System"
- B: "Turn Your Home Into a Healing System"
- C: "Where You Live Shapes Who You Become"

### **Pricing Presentation**
- A: "$29 pre-sale locks in your first 2 months"
- B: "First 2 months for just $29 (50% off)"
- C: "Join for $29 • Get 2 months for the price of 1"

### **CTA Button Text**
- A: "Join Pre-Sale"
- B: "Become a Founding Scout"
- C: "Lock In $29 Pre-Sale"

### **Badge Urgency**
- A: "Limited to 1,000 founding members"
- B: "Only 1,000 spots available"
- C: "Pre-sale closes when 1,000 members join"

---

## Quick Fixes (Common Issues)

### **Logo Not Showing**
Check paths: `src/assets/terralux-logo.svg` and `src/assets/terralux-logomark.svg`

### **Form Submissions Not Arriving**
1. Verify form name matches Netlify config: `terralux-scout-presale`
2. Check spam folder for notifications
3. Confirm Netlify email notification settings

### **Mobile Layout Broken**
1. Clear browser cache (especially Safari)
2. Check viewport meta tag is present: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
3. Test with Chrome DevTools device emulation

### **Fonts Not Loading**
Google Fonts should load from CDN. If blocked:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### **Anchor Links Not Scrolling Smoothly**
CSS includes `scroll-behavior: smooth;` — may be disabled in browser settings (check accessibility preferences)

---

## Success Metrics

### **Conversion Funnel Goals**

| Stage | Metric | Target |
|-------|--------|--------|
| **Landing** | Bounce rate | <70% |
| **Engagement** | Scroll to benefits | >50% |
| **Interest** | Time on page | >2 min |
| **Action** | Application rate | 2-5% |
| **Quality** | Approval rate | >80% |

### **Pre-Sale Revenue Scenarios**

| Applications | Approval Rate | Members | Revenue |
|--------------|---------------|---------|---------|
| 300 | 80% | 240 | $6,960 |
| 500 | 80% | 400 | $11,600 |
| 750 | 85% | 638 | $18,502 |
| 1,250 | 80% | 1,000 | $29,000 |

**Note:** Overshoot application target by 20-25% to account for declines and no-shows.

---

## Rollback Plan

If something goes wrong:

```bash
# Restore old version
cd /Users/arye/Documents/terralux-living-website
cp index-old.html index.html
cp src/styles/main-old.css src/styles/main.css
git add .
git commit -m "Rollback: reverting to previous version"
git push origin main
```

Netlify will redeploy within 1-2 minutes.

---

## Support Resources

### **Questions or Issues?**
- Email: arye@terra-lux.org
- Docs: This repo (`/PRESALE_IMPROVEMENTS_SUMMARY.md`)
- Design system reference: `/Users/arye/Documents/homes-that-heal-website/`

### **Analytics & Monitoring**
- [ ] Add Google Analytics or Plausible tracking
- [ ] Set up conversion goals (form submissions)
- [ ] Configure heatmap tool (Hotjar, Microsoft Clarity)
- [ ] Track scroll depth and click patterns

---

## Ready to Launch?

✅ **Pre-flight check complete**  
✅ **Forms tested and working**  
✅ **Mobile + desktop verified**  
✅ **Copy proofread and accurate**  
✅ **Analytics configured**  
✅ **Email campaigns drafted**  

**Deploy command:**
```bash
cd /Users/arye/Documents/terralux-living-website
cp index-v2.html index.html
cp src/styles/main-v2.css src/styles/main.css
git add .
git commit -m "Launch: TerraLux Living Scout pre-sale optimization"
git push origin main
```

Then announce to your lists. 🚀

---

## Post-Launch Optimization

After first 100 applications:
1. Review common questions (add to FAQ)
2. Identify friction points (where people drop off)
3. Test headline/CTA variants
4. Optimize for highest-converting traffic sources
5. Gather testimonials from first approved members

**Goal:** Iteratively improve conversion rate from 2% → 5% → 10% over first month.

---

**You're ready to launch the founding Scout pre-sale. The website is optimized for conversion. Good luck! 🐆**
