# BrandSync - Project Reference

## Overview
A modular, white-label landing page template built with Next.js and React. Designed to be forked per client with all branding, content, and assets injectable via a single configuration file.

## Architecture

### Deployment Model
- **Fork and Configure**: Template code is copied to a new repo per client
- Update `brand.config.ts` with client-specific branding, content, and asset paths
- Point CSS variables and image references to client's data lake/CDN

### Injection Points
1. **`brand.config.ts`** - Single source of truth for:
   - Company info (name, tagline, contact)
   - Colors (primary, secondary, accent, etc.)
   - Typography preferences
   - Logo and image URLs (pointing to client's data lake)
   - All text content (headlines, descriptions, CTAs)
   - Feature lists, testimonials, pricing tiers
   - Social links, footer content

2. **CSS Variables** - Theme colors injected from config into CSS custom properties

3. **Asset URLs** - All images/logos referenced via config, pointing to external data lake

## Landing Page Sections
1. **Navbar** - Logo, nav links, CTA button
2. **Hero** - Headline, subheadline, CTA buttons, hero image
3. **Logos/Trust Bar** - Client/partner logos
4. **Features** - Grid of feature cards with icons
5. **About/How It Works** - Process steps or company info
6. **Testimonials** - Customer quotes with avatars
7. **Pricing** - Tier cards with feature lists
8. **FAQ** - Expandable accordion
9. **CTA Section** - Final call-to-action banner
10. **Footer** - Links, social icons, legal

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with CSS variables
- **Components**: shadcn/ui base, custom modular components
- **Icons**: Lucide React
- **Theming**: next-themes (light/dark mode)

## File Structure
```
brand-sync/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/              # shadcn/ui primitives
│   ├── landing/         # Landing page sections
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── trust-bar.tsx
│   │   ├── features.tsx
│   │   ├── about.tsx
│   │   ├── testimonials.tsx
│   │   ├── pricing.tsx
│   │   ├── faq.tsx
│   │   ├── cta-section.tsx
│   │   └── footer.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── config/
│   └── brand.config.ts  # All injectable content
└── lib/
    └── utils.ts
```

## How to Customize for New Client
1. Fork/copy this repo
2. Edit `config/brand.config.ts`:
   - Update company name, logo URLs
   - Set brand colors
   - Replace all content (headlines, features, testimonials, etc.)
   - Point image URLs to client's CDN/data lake
3. Optionally adjust `globals.css` for additional styling
4. Deploy

## Design Principles
- **Generic**: No industry-specific language in components
- **Professional**: Clean, modern SaaS-style aesthetic
- **Modular**: Each section is a standalone component
- **Accessible**: Proper semantics, ARIA labels, keyboard navigation
- **Responsive**: Mobile-first, works on all screen sizes
