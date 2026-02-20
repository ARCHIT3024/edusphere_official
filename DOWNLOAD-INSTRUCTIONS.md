

## 📦 Building for Production

When ready to deploy:

### 1. Create Production Build
```bash
pnpm build
```

This creates an optimized build in the `dist/` folder.

### 2. Test Production Build Locally
```bash
pnpm preview
```

### 3. Deploy to Hosting
Upload the `dist/` folder contents to:
- **Netlify** (drag & drop)
- **Vercel** (GitHub integration)
- **Hostinger** / **GoDaddy** (FTP upload)
- Any static hosting service

---



## 🗂️ Project Structure

```
```
edusphere-official/
├── public/
│   └── images/                    ← CREATE THIS & ADD IMAGES
│       ├── hero-students-learning.jpg
│       ├── about-team-collaboration.jpg
│       ├── about-founder-portrait.jpg
│       └── testimonials/
│           ├── priya-sharma.jpg
│           ├── rajesh-kumar.jpg
│           ├── anjali-mehta.jpg
│           ├── arjun-patel.jpg
│           ├── vikram-singh.jpg
│           ├── kavya-reddy.jpg
│           ├── neha-gupta.jpg
│           └── amit-desai.jpg
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── routes.tsx
│   └── styles/
├── package.json
├── vite.config.ts
├── README.md                      ← Full documentation
├── SETUP-LOCAL.md                 ← Local setup guide
├── IMAGE-GUIDE.md                 ← Image requirements
├── DOWNLOAD-INSTRUCTIONS.md       ← Quick start
├── EMAILJS-SETUP.md              ← Email configuration
├── FEATURES.md                    ← Feature list
└── REACT_AUDIT_REPORT.md         ← Code quality report


**Build errors?**
- Clear cache: `pnpm clean` (if available)
- Delete `node_modules` and reinstall

