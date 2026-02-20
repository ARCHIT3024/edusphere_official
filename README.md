# Edusphere Official - Complete Website

**Beyond Books Into Reality**

A professional, production-ready EdTech website built with React, TypeScript, Tailwind CSS, and modern web technologies.

---

## 🚀 Quick Start

### ⚡ 3-Step Setup

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Add Your Images**
   - See `IMAGE-GUIDE.md` for detailed instructions
   - Create `public/images/` directory and add your images

3. **Run Development Server**
   ```bash
   pnpm dev
   ```
   Visit: http://localhost:5173

📖 **Complete Setup Guide:** See `SETUP-LOCAL.md`
🖼️ **Image Guide:** See `IMAGE-GUIDE.md`
📥 **Download Instructions:** See `DOWNLOAD-INSTRUCTIONS.md`

---

## 🚀 Features

### ✅ Complete Page Structure
- **Homepage** - Hero section, services, featured courses, testimonials, stats
- **Register Now** - 3-step registration process with lead capture form
- **About Us** - Company story, mission/vision, founder bio, achievements
- **Services Pages** - Professional Development & Academic Services
- **Courses Catalog** - Filterable/searchable course listing with 70+ courses
- **Course Detail Pages** - Individual course information pages
- **FAQ** - Accordion-style FAQs with search functionality
- **Contact** - Contact form, info cards, and Google Maps integration
- **Success Stories** - Student testimonials and reviews
- **Legal Pages** - Privacy Policy, Terms & Conditions, Refund Policy
- **404 Page** - Custom error page

### ✅ Interactive Components
- **Responsive Navigation** - Desktop menu with dropdown, mobile hamburger menu
- **Lead Capture Forms** - EmailJS integration for lead collection
- **Testimonials Slider** - Auto-rotating student testimonials
- **Course Filtering** - Search and category-based filtering
- **FAQ Accordion** - Expandable/collapsible questions
- **Floating CTA Button** - Sticky "Register Now" button (appears on scroll)
- **WhatsApp Button** - Direct WhatsApp chat integration
- **Smooth Animations** - Motion/Framer Motion for scroll animations

### ✅ Technical Features
- **React Router v7** - Client-side routing with data mode
- **TypeScript** - Type-safe code
- **Tailwind CSS v4** - Modern styling
- **EmailJS Integration** - Form submissions via email
- **Mobile Responsive** - Optimized for all devices (320px+)
- **SEO Ready** - Semantic HTML, meta tags
- **Fast Performance** - Optimized loading and rendering

---

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v18 or higher)
- npm or pnpm package manager
- EmailJS account (for form functionality)
- Google Form (for detailed registration)

---

## 🛠️ Installation & Setup

### Step 1: Install Dependencies

```bash
npm install
# or
pnpm install
```

### Step 2: Configure EmailJS

**EmailJS is used for all form submissions** (registration forms, contact form, FAQ form).

#### 2.1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

#### 2.2. Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup wizard
5. Note down your **Service ID**

#### 2.3. Create Email Template

Create a template with these variables for the **Registration/Lead Capture Form**:

```
Subject: Welcome to Edusphere - Complete Your Registration

Dear {{user_name}},

Thank you for your interest in Edusphere! We're excited to help you achieve your educational goals.

Please take 2 minutes to complete our detailed registration form:

👉 [CLICK HERE TO COMPLETE REGISTRATION]
[INSERT YOUR GOOGLE FORM LINK HERE]

Your Details Received:
- Name: {{user_name}}
- Email: {{user_email}}
- Phone: {{user_phone}}

This form will help us understand your needs and match you with the perfect program.

Need help? Contact us:
📞 +91 7004049427
📧 edusphereofficial.india@gmail.com

Business Hours: Monday-Saturday, 10:00 AM - 8:00 PM

Best regards,
Team Edusphere Official
Beyond Books Into Reality

---
UDYAM Registration: UDYAM-JH-11-0053233
```

Create a second template for the **Contact Form** with variables:
- {{user_name}}
- {{user_email}}
- {{user_phone}}
- {{subject}}
- {{message}}

#### 2.4. Get Your Public Key
1. In EmailJS dashboard, go to **Account** → **General**
2. Copy your **Public Key**

#### 2.5. Update the Code

**File: `/src/app/components/LeadCaptureForm.tsx`**

Line 48: Replace `YOUR_PUBLIC_KEY` with your actual EmailJS public key
```typescript
emailjs.init("YOUR_PUBLIC_KEY");  // Replace this
```

Lines 71-74: Replace Service ID and Template ID
```typescript
await emailjs.send(
  "YOUR_SERVICE_ID",    // Replace with your Service ID
  "YOUR_TEMPLATE_ID",   // Replace with your Template ID for registration
  formData
);
```

**File: `/src/app/pages/ContactPage.tsx`**

Lines 31-34: Update for contact form
```typescript
await emailjs.send(
  "YOUR_SERVICE_ID",    // Same Service ID
  "YOUR_TEMPLATE_ID",   // Different Template ID for contact form
  formData
);
```

---

### Step 3: Create Google Form

The Google Form collects detailed information after initial lead capture.

#### 3.1. Create the Form
1. Go to [https://forms.google.com](https://forms.google.com)
2. Create a new form titled: **Edusphere Registration Form**

#### 3.2. Add Sections

**Section 1: Basic Information** (Short Answer)
- Full Name
- Email Address
- Phone Number
- Date of Birth
- Current Education/Occupation

**Section 2: Area of Interest** (Multiple Choice)
- Professional Development
- Academic Services (Tutoring)
- Both

**Section 3: Course Preferences** (Checkboxes - show if "Professional Development" selected)
- Technology (Cybersecurity, Data Analytics, Web Development, etc.)
- Business (Digital Marketing, Financial Analysis, Business Analytics, etc.)
- Creative (Graphic Design, Content Writing, etc.)

**Section 4: Academic Services** (show if "Academic Services" selected)
- Class (6-12)
- Board (CBSE/ICSE/State)
- Subjects Needed (Multiple choice)
- Preferred Mode (Online/Offline/Both)

**Section 5: Additional Details**
- Preferred Start Date (Date picker)
- Preferred Learning Mode (Online/Offline/Hybrid)
- How did you hear about us? (Dropdown)
- Any specific questions or requirements? (Paragraph)

#### 3.3. Enable Pre-fill (Optional but Recommended)

To auto-populate name, email, and phone from the initial form:

1. Click the three dots (⋮) in the top-right
2. Select **Get pre-filled link**
3. Fill in the name, email, and phone fields
4. Click **Get Link**
5. Copy the URL - it will look like:
   ```
   https://docs.google.com/forms/d/e/FORM_ID/viewform?usp=pp_url&entry.123456={{user_name}}&entry.789012={{user_email}}&entry.345678={{user_phone}}
   ```
6. Use this URL in your EmailJS template (replace the placeholders with EmailJS variables)

#### 3.4. Add the Link to EmailJS Template

In your EmailJS template, replace `[INSERT YOUR GOOGLE FORM LINK HERE]` with your actual Google Form link.

---

### Step 4: Update Images (Optional)

The website uses placeholder images from Unsplash. To use your own images:

#### Company Logo
Replace the text-based logo in `/src/app/components/Header.tsx` (lines 42-48) with:
```typescript
<img src="/path/to/your/logo.png" alt="Edusphere Official" className="h-10" />
```

#### Founder Photo
Update the image URL in `/src/app/pages/AboutPage.tsx` (line 188)

#### Team Photos
Add team member photos by replacing the Unsplash URLs throughout the site

---

### Step 5: Customize Contact Information

All contact details are already set up, but verify they're correct in:
- `/src/app/components/Footer.tsx`
- `/src/app/pages/ContactPage.tsx`
- `/src/app/pages/RegisterPage.tsx`

**Current Details:**
- Phone: +91 7004049427
- Email: edusphereofficial.india@gmail.com
- WhatsApp: +91 7004049427
- Address: 604, Aryan Tower, New Area, Lohsigna Road, Hazaribagh-825301, Jharkhand, India
- UDYAM: UDYAM-JH-11-0053233

---

### Step 6: Update Google Maps

In `/src/app/pages/ContactPage.tsx` (line 377), replace the map embed URL with your actual location:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your address
3. Click **Share** → **Embed a map**
4. Copy the iframe src URL
5. Replace the placeholder in the code

---

## 🏃 Running the Website

### Development Mode
```bash
npm run dev
# or
pnpm dev
```

The website will be available at `http://localhost:5173`

### Production Build
```bash
npm run build
# or
pnpm build
```

The optimized build will be in the `dist` folder.

---

## 📁 Project Structure

```
edusphere-website/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx              # Navigation bar
│   │   │   ├── Footer.tsx              # Site footer
│   │   │   ├── Layout.tsx              # Page layout wrapper
│   │   │   ├── FloatingCTA.tsx         # Register Now button
│   │   │   ├── WhatsAppButton.tsx      # WhatsApp chat button
│   │   │   ├── LeadCaptureForm.tsx     # EmailJS form component
│   │   │   ├── TestimonialsSlider.tsx  # Testimonials carousel
│   │   │   └── figma/
│   │   │       └── ImageWithFallback.tsx
│   │   ├── pages/
│   │   │   ├── HomePage.tsx            # Landing page
│   │   │   ├── RegisterPage.tsx        # Registration page
│   │   │   ├── AboutPage.tsx           # About us
│   │   │   ├── ContactPage.tsx         # Contact page
│   │   │   ├── FAQPage.tsx             # FAQ page
│   │   │   ├── SuccessStoriesPage.tsx  # Testimonials page
│   │   │   ├── NotFoundPage.tsx        # 404 error page
│   │   │   ├── courses/
│   │   │   │   ├── CoursesPage.tsx     # Course catalog
│   │   │   │   └── CourseDetailPage.tsx # Individual course
│   │   │   ├── services/
│   │   │   │   ├── ProfessionalServicesPage.tsx
│   │   │   │   └── AcademicServicesPage.tsx
│   │   │   └── legal/
│   │   │       ├── PrivacyPolicyPage.tsx
│   │   │       ├── TermsPage.tsx
│   │   │       └── RefundPolicyPage.tsx
│   │   ├── routes.tsx                  # React Router configuration
│   │   └── App.tsx                     # Main app component
│   └── styles/
│       ├── index.css                   # Global styles
│       ├── theme.css                   # Tailwind theme
│       └── fonts.css                   # Font imports
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🎨 Customization Guide

### Colors

The color scheme is defined throughout the components:
- **Brand Blue:** `#2E75B6` (primary brand color)
- **Alert Red:** `#E74C3C` (CTAs, urgency)
- **Success Green:** `#28A745` (success indicators)
- **White:** `#FFFFFF` (backgrounds)
- **Gray shades:** For text and backgrounds

To change colors, search for these hex values and replace them globally.

### Fonts

The website uses system fonts. To add custom fonts:

1. Add font imports to `/src/styles/fonts.css`
2. Update font-family in `/src/styles/theme.css`

### Content

All content is editable directly in the component files. Search for specific text you want to change and update it in the respective page component.

---

## 🔧 Troubleshooting

### EmailJS Not Sending
1. Verify your public key, service ID, and template ID are correct
2. Check EmailJS dashboard for send quota (free plan has limits)
3. Open browser console to see detailed error messages
4. Ensure your email service is properly connected in EmailJS

### Forms Not Submitting
1. Check browser console for errors
2. Verify required fields are filled
3. Test EmailJS directly from their dashboard
4. Ensure no ad-blockers are interfering

### Styling Issues
1. Clear browser cache
2. Rebuild the project: `npm run build`
3. Check for Tailwind class conflicts
4. Ensure Tailwind CSS v4 is properly installed

### Routing Not Working
1. Verify React Router is installed: `react-router@7.13.0`
2. Check console for routing errors
3. Ensure all page imports in `routes.tsx` are correct

---

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints:
- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

Test on different devices using browser DevTools.

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (automatic build configuration for Vite)

### Netlify
1. Run `npm run build`
2. Drag the `dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Or connect your Git repository for automatic deployments

### Other Platforms
- Upload the `dist` folder to any static hosting service
- Ensure the server redirects all routes to `index.html` for client-side routing

---

## 📊 Analytics (Optional)

To add Google Analytics:

1. Get your GA4 Measurement ID
2. Add to `/index.html` in the `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔐 Security Notes

**Important:** This is a frontend-only website. For production use:

1. **Never commit sensitive data** (API keys, credentials) to Git
2. Use environment variables for sensitive config
3. Implement rate limiting on your EmailJS account
4. Add CAPTCHA to forms if you experience spam
5. Regularly update dependencies: `npm update`

**For PII and Sensitive Data:** Consider implementing a proper backend with database if you need to store user data securely. This frontend-only solution sends data via email only.

---

## 📞 Support

For issues or questions about this website:

- **Technical Issues:** Check the troubleshooting section above
- **EmailJS Help:** [EmailJS Documentation](https://www.emailjs.com/docs/)
- **React Router:** [React Router Docs](https://reactrouter.com/)
- **Tailwind CSS:** [Tailwind Docs](https://tailwindcss.com/docs)

---

## 📄 License

This website is proprietary software built for Edusphere Official.

**Company Details:**
- **Name:** Edusphere Official
- **Tagline:** Beyond Books Into Reality
- **UDYAM:** UDYAM-JH-11-0053233
- **Location:** Hazaribagh, Jharkhand, India

---

## ✅ Final Checklist

Before going live, ensure you have:

- [ ] Installed all dependencies
- [ ] Configured EmailJS with your keys
- [ ] Created and linked Google Form
- [ ] Updated EmailJS templates with Google Form link
- [ ] Tested all forms (registration, contact, FAQ)
- [ ] Replaced placeholder images with your own
- [ ] Updated Google Maps location
- [ ] Verified all contact information
- [ ] Tested on mobile devices
- [ ] Tested all navigation links
- [ ] Built for production (`npm run build`)
- [ ] Deployed to hosting platform

---

**Built with ❤️ for Edusphere Official**

*Empowering learners to go beyond books into reality.*