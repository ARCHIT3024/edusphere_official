# Edusphere Official - Quick Start Guide

This guide will help you get the website up and running in **under 30 minutes**.

---

## ⚡ Quick Setup (5 Minutes)

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 2. Start Development Server
```bash
npm run dev
# or
pnpm dev
```

Visit `http://localhost:5173` - your website is now running! 🎉

---

## 🔑 EmailJS Configuration (15 Minutes)

All forms on your website use EmailJS to send emails. Here's how to set it up:

### Step 1: Create Account
- Go to https://www.emailjs.com/
- Sign up (it's free!)
- Verify your email

### Step 2: Add Email Service
- Click "Email Services" → "Add New Service"
- Choose Gmail, Outlook, or your provider
- Connect your email account
- **Copy your Service ID** (you'll need this!)

### Step 3: Create Email Template

Create a new template with this content:

**Subject:** Welcome to Edusphere - Complete Your Registration

**Body:**
```
Dear {{user_name}},

Thank you for your interest in Edusphere!

Please complete your registration here:
👉 [YOUR GOOGLE FORM LINK]

Contact us:
📞 +91 7004049427
📧 edusphereofficial.india@gmail.com

Best regards,
Team Edusphere Official
```

**Copy your Template ID** (you'll need this!)

### Step 4: Get Public Key
- Go to Account → General
- Copy your **Public Key**

### Step 5: Update the Code

Open these 2 files and update the placeholders:

**File 1: `/src/app/components/LeadCaptureForm.tsx`**
```typescript
// Line 48: Add your public key
emailjs.init("YOUR_PUBLIC_KEY");

// Lines 71-74: Add your service and template IDs
await emailjs.send(
  "YOUR_SERVICE_ID",    // From Step 2
  "YOUR_TEMPLATE_ID",   // From Step 3
  formData
);
```

**File 2: `/src/app/pages/ContactPage.tsx`**
```typescript
// Lines 31-34: Same service ID, but create a separate template for contact form
await emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_CONTACT_TEMPLATE_ID",
  formData
);
```

**Done!** Test the forms - they should now send emails.

---

## 📝 Google Form Setup (10 Minutes)

Create a Google Form for detailed registration:

### Quick Setup:
1. Go to https://forms.google.com
2. Create a new form: "Edusphere Registration"
3. Add these sections:
   - **Basic Info:** Name, Email, Phone
   - **Interest:** Professional courses, Academic tutoring, or Both
   - **Preferences:** Course choices, timing, etc.
4. Get the form link (click "Send" → Link icon)
5. Add the link to your EmailJS template (replace `[YOUR GOOGLE FORM LINK]`)

**Tip:** Use Google Form's "pre-fill" feature to auto-populate name, email, and phone from the initial form.

---

## 🚀 Deploy to Production (5 Minutes)

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project" → Import your repo
4. Click "Deploy" ✨

### Option 2: Netlify
1. Build: `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder
4. Done! ✨

---

## ✅ Testing Checklist

Before going live, test these:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Registration form sends email
- [ ] Contact form sends email
- [ ] FAQ form sends email
- [ ] Course filtering works
- [ ] Mobile menu opens/closes
- [ ] WhatsApp button works
- [ ] All pages are responsive on mobile

---

## 🎨 Basic Customization

### Change Colors
Search for `#2E75B6` (brand blue) and replace with your color:
```bash
# Find all occurrences
grep -r "#2E75B6" src/
```

### Update Contact Info
All contact details are in:
- `/src/app/components/Footer.tsx`
- `/src/app/pages/ContactPage.tsx`
- `/src/app/components/WhatsAppButton.tsx`

### Add Your Logo
Replace the text logo in `/src/app/components/Header.tsx` (lines 42-48) with:
```typescript
<img src="/path/to/logo.png" alt="Edusphere" className="h-10" />
```

---

## 💡 Common Issues

### Forms Not Working?
- Check browser console for errors
- Verify EmailJS keys are correct
- Check EmailJS dashboard for send quota

### Styling Looks Wrong?
- Clear browser cache
- Run `npm run build` and check again
- Ensure Tailwind CSS is installed

### Images Not Loading?
- Check image URLs are valid
- Ensure ImageWithFallback component is used
- Check browser console for 404 errors

---

## 📞 Need Help?

**EmailJS Issues:** https://www.emailjs.com/docs/
**React Router:** https://reactrouter.com/
**Tailwind CSS:** https://tailwindcss.com/docs

---

## 🎯 What's Included

✅ **10+ Pages:** Home, Register, About, Services, Courses, FAQ, Contact, etc.
✅ **Lead Capture Forms:** EmailJS integration
✅ **Mobile Responsive:** Works on all devices
✅ **Modern UI:** Professional EdTech design
✅ **SEO Ready:** Proper meta tags and structure
✅ **Fast Performance:** Optimized for speed
✅ **Easy to Customize:** Well-documented code

---

**You're all set!** 🎉

For detailed documentation, see the full `README.md` file.
