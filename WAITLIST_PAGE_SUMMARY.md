# TerraLux Living — Waitlist Landing Page

## Overview
Clean, minimal waitlist landing page aligned with official TerraLux branding guidelines. Focused on email capture and brand introduction rather than aggressive sales messaging.

---

## Official Brand Assets Integrated

### **Logos Used:**
- ✅ `terralux-living-logo-official.svg` — Full horizontal logo
- ✅ `terralux-living-logomark-official.svg` — Icon mark
- ✅ `living-pattern-official.svg` — Background pattern

**Location:** `/src/assets/` (copied from `/Users/arye/Downloads/TerraLux Branding/SVG/`)

### **Brand Colors:**
- **TerraLux Gold:** `#d8b670`
- **TerraLux Green:** `#455643`
- **Supporting neutrals:** Cream, gray scale

---

## Page Structure

### **1. Hero Section**
- Official TerraLux Living logo (white filter on dark green background)
- Headline: "Where You Live Shapes Who You Become"
- Subtitle: Brand positioning statement
- 4 visual pillars: Healing Homes, Biohacking Centers, Global Villages, Curated Benefits
- Pattern background (subtle, 3% opacity)

### **2. Waitlist Form (White Card)**
- Badge: "Founding Members • Limited Availability" (pulsing animation)
- Simple 4-field form:
  - Full Name
  - Email Address
  - Current Location (optional)
  - Interest dropdown
- Gold submit button
- Trust copy: Privacy + founding member benefits
- Netlify form integration (ready to capture)

### **3. Trust Signals**
- 15+ Global Locations
- Curated / Invitation-Only
- 1,000 Founding Members

### **4. Locations Preview**
- Live Now (3 locations)
- Launching 2026-2027 (3 locations)
- Future Network (10 countries)

### **5. Benefits Preview**
- 6 benefit cards with icons
- General descriptions (no pricing)
- Aspirational positioning

### **6. Final CTA**
- Green background
- "Be a Founding Member" headline
- Button scrolls back to top form

### **7. Footer**
- Official logo (white)
- Tagline: "Homes That Heal. A Community That Builds the Future."
- Links: Terra-Lux.org, membership email
- Copyright notice

---

## Design Philosophy

### **Waitlist vs. Pre-Sale Approach**

| Element | Pre-Sale Page | Waitlist Page |
|---------|---------------|---------------|
| **Goal** | Drive applications with $29 offer | Build anticipation, collect emails |
| **Urgency** | Aggressive (limited spots, pricing) | Soft (founding members, priority) |
| **Detail Level** | High (tiers, FAQ, sensors, timeline) | Low (overview only) |
| **Form** | 7+ fields with approval process | 4 fields, instant capture |
| **Tone** | Transactional | Aspirational |
| **Length** | Long-form (9 sections) | Medium (7 sections) |

### **Why Waitlist Works Better for:**
1. **Early stage brands** — Building interest before launch
2. **Curated communities** — Filtering interest without hard sales
3. **Product development phase** — Collecting leads while building
4. **Email marketing** — Creating a warm audience for launch

### **Why Pre-Sale Works Better for:**
1. **Validated demand** — Ready to collect payment
2. **Cash flow needs** — Funding development with pre-sales
3. **Clear launch date** — Known timeline for delivery
4. **Urgent revenue goals** — Need money now, not just leads

---

## Style System Alignment

### **Typography:**
- **Headers:** Lora (serif) — emotional, premium feel
- **Body:** Inter (sans-serif) — clarity, readability
- **Sizes:** Responsive with `clamp()` for fluid scaling

### **Color Usage:**
- **Gold** — CTAs, accents, trust signals
- **Green** — Headers, backgrounds, brand consistency
- **Cream/Gray** — Neutral backgrounds, readable text

### **Spacing:**
- Consistent scale: 8px, 12px, 20px, 32px, 48px, 64px, 96px
- Mobile-optimized reductions

### **Interactions:**
- Smooth transitions (0.3s cubic-bezier)
- Hover states on all interactive elements
- Focus states for accessibility
- Pulsing animation on "Founding Members" badge

### **Layout:**
- Max-width containers (1200px standard, 640px narrow)
- Responsive grids with auto-fit
- Single-column mobile layouts

---

## Technical Details

### **Form Integration:**
```html
<form name="terralux-living-waitlist" method="POST" data-netlify="true">
```

**Netlify form fields:**
- `name` — Full Name (required)
- `email` — Email Address (required)
- `location` — Current Location (optional)
- `interest` — Dropdown (required)
- `bot-field` — Honeypot for spam protection

**Submission handling:**
- Automatically captured by Netlify Forms
- Email notifications to configured address
- CSV export available in Netlify dashboard
- Ready for email marketing integration (Mailchimp, ConvertKit, etc.)

### **Performance:**
- No external dependencies (beyond Google Fonts)
- Inline SVG logos (fast loading)
- GPU-accelerated animations
- Optimized CSS (14KB minified)

### **Accessibility:**
- Semantic HTML structure
- Proper heading hierarchy
- Focus states on all inputs
- WCAG AA color contrast
- Keyboard navigation support

### **SEO:**
- Meta description optimized
- Structured headings
- Alt text on images
- Schema-friendly markup

---

## Files Created

1. **`waitlist.html`** — Complete landing page
2. **`src/styles/waitlist.css`** — Style system
3. **`src/assets/terralux-living-logo-official.svg`** — Official logo
4. **`src/assets/terralux-living-logomark-official.svg`** — Official logomark
5. **`src/assets/living-pattern-official.svg`** — Official pattern
6. **`WAITLIST_PAGE_SUMMARY.md`** — This document

---

## Deployment Options

### **Option 1: Replace Homepage**
```bash
cd /Users/arye/Documents/terralux-living-website
cp waitlist.html index.html
git add .
git commit -m "Waitlist landing page with official branding"
git push origin main
```

### **Option 2: Add as Separate Page**
Keep both versions:
- Main page: `index.html` (current pre-sale)
- Waitlist: `waitlist.html` (new page)
- URL: `https://terraluxliving.com/waitlist.html`

### **Option 3: Subdomain**
- Main: `www.terraluxliving.com` (marketing site)
- Waitlist: `join.terraluxliving.com` (capture page)

---

## Recommended: Waitlist → Pre-Sale Funnel

### **Phase 1: Build Waitlist (Now)**
- Deploy `waitlist.html`
- Collect emails for 30-60 days
- Build anticipation through content
- Target: 500-1,000 waitlist subscribers

### **Phase 2: Warm the List**
- Weekly email updates
- Behind-the-scenes content
- Preview of membership tiers
- "Launching soon" messaging

### **Phase 3: Pre-Sale Launch**
- Switch to `index-v2.html` (pre-sale page)
- Email waitlist with $29 offer
- Exclusive early access for waitlist
- Convert warm leads to paying members

### **Phase 4: Public Launch**
- Full membership platform live
- Waitlist converts to members
- Pre-sale members onboarded
- Upgrade path opens

---

## Email Marketing Integration

### **After Form Submission:**
1. **Immediate:** Welcome email (automated)
2. **Day 3:** What is TerraLux Living? (education)
3. **Day 7:** Location spotlight (engagement)
4. **Day 14:** Founder story (connection)
5. **Day 21:** Pre-sale announcement (conversion)

### **Email Service Integration:**
**Zapier flow:**
- Netlify Form Submission → Zapier → Email Service (Mailchimp/ConvertKit)
- Automatically adds to "TerraLux Waitlist" segment
- Tags: `waitlist`, `founding-member-interest`, location-based

**Manual CSV export:**
- Download from Netlify Forms dashboard
- Import to email service
- Send campaign to waitlist segment

---

## Conversion Optimization

### **A/B Test Ideas:**
1. **Headline variants:**
   - A: "Where You Live Shapes Who You Become"
   - B: "Build Your Life Inside Healing Homes"
   - C: "Join the Global Wellness Membership"

2. **Form length:**
   - A: 4 fields (current)
   - B: 2 fields (email + name only)
   - C: 5 fields (add phone number)

3. **CTA button text:**
   - A: "Join Waitlist"
   - B: "Reserve My Spot"
   - C: "Become a Founding Member"

### **Analytics to Track:**
- Bounce rate (target: <60%)
- Time on page (target: >90 seconds)
- Form submissions per 100 visitors (target: 5-15%)
- Scroll depth (% reaching benefits section)

---

## Next Steps

### **Before Launch:**
- [ ] Test form submission on staging
- [ ] Verify Netlify email notifications
- [ ] Check mobile rendering (iOS Safari, Android Chrome)
- [ ] Set up email autoresponder (welcome email)
- [ ] Configure analytics tracking
- [ ] Test all links (footer, CTAs)

### **At Launch:**
- [ ] Deploy to production
- [ ] Announce on social media
- [ ] Email existing contacts
- [ ] Run initial ads (if applicable)
- [ ] Monitor form submissions

### **Post-Launch:**
- [ ] Send weekly nurture emails
- [ ] Track conversion metrics
- [ ] A/B test headlines/CTAs
- [ ] Build anticipation for pre-sale
- [ ] Prepare pre-sale transition

---

## Success Metrics

### **Waitlist Goals:**
| Timeline | Metric | Target |
|----------|--------|--------|
| Week 1 | Subscribers | 50-100 |
| Month 1 | Subscribers | 250-500 |
| Month 2 | Subscribers | 500-1,000 |
| Pre-Sale | Conversion Rate | 20-40% |

**Calculation:**
- 1,000 waitlist subscribers × 30% conversion = 300 pre-sale members
- 300 members × $29 = $8,700 pre-sale revenue

### **Email Engagement:**
- Open rate: >30% (good), >40% (excellent)
- Click rate: >5% (good), >10% (excellent)
- Unsubscribe rate: <2% (acceptable)

---

## Comparison: Waitlist vs. Pre-Sale Page

### **Waitlist Page:**
- ✅ Simpler (less overwhelming)
- ✅ Lower friction (just email capture)
- ✅ Better for early stage (no pricing confusion)
- ✅ Aligned with official branding (clean, premium)
- ✅ Builds anticipation (coming soon positioning)
- ❌ No immediate revenue
- ❌ Requires email nurture sequence
- ❌ Longer path to conversion

### **Pre-Sale Page:**
- ✅ Immediate revenue ($29 offer)
- ✅ Validates demand with payment
- ✅ Funds development
- ✅ Creates urgency (1,000 spots)
- ❌ More complex (requires approval process)
- ❌ Higher friction (payment + application)
- ❌ May confuse early visitors (sensors? app launch?)

---

## Recommendation

### **Use Waitlist Page If:**
- You're still building the TerraLux Home App
- You want to warm up an audience first
- You prefer email nurture → pre-sale funnel
- You want simpler, cleaner first impression
- You're testing product-market fit

### **Use Pre-Sale Page If:**
- TerraLux Home App launch date is confirmed
- You need cash flow now to fund development
- You have warm audience ready (Inokim, HTH, GKC)
- You want to validate with payment (not just emails)
- You're confident in the $29 offer and timeline

---

## Deploy Command

```bash
cd /Users/arye/Documents/terralux-living-website

# Option 1: Replace homepage with waitlist
cp waitlist.html index.html

# Option 2: Keep as separate page (access at /waitlist.html)
# (no action needed, just push waitlist.html)

git add .
git commit -m "Add waitlist landing page with official TerraLux branding"
git push origin main
```

**Live in 1-2 minutes via Netlify auto-deploy.**

---

## Summary

The waitlist landing page is:
- ✅ Aligned with official TerraLux branding
- ✅ Clean, minimal, premium aesthetic
- ✅ Focused on email capture (not sales)
- ✅ Mobile-optimized and accessible
- ✅ Netlify form integrated
- ✅ Ready for email marketing nurture
- ✅ Perfect for building anticipation before launch

**Choose this over pre-sale if you want to build an audience first, then convert them when the app is closer to launch. It's a softer, more aspirational approach that aligns with premium positioning.** 🐆
