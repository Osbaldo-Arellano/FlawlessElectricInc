export const brandConfig = {
  // ============================================
  // COMPANY INFO
  // ============================================
  company: {
    name: "Flawless Electric Inc",
    tagline: "Union-trained. Built to last.",
    description: "Residential electrical services you can trust. Union-trained craftsmanship serving the Pacific Northwest with honest, reliable work.",
    email: "info@flawlesselectric.com",
    phone: "+1 (503) 555-0172",
    address: "Portland, OR — Serving the Pacific Northwest",
  },

  // ============================================
  // BRAND ASSETS (URLs to data lake / CDN)
  // ============================================
  assets: {
    logo: {
      light: "/logo.png",
      dark: "/logo.png",
      favicon: "/favicon.ico",
    },
    hero: {
      image: "/pnw.jpg",
      imageAlt: "Electrician working on residential wiring",
    },
    partnerLogos: [
      { name: "IBEW", url: "/ibew.png" },
      { name: "NECA", url: "/neca.png" },
      { name: "Oregon CCB", url: "/ccb.png" },
      { name: "Energy Trust of Oregon", url: "/energytrust.png" },
      { name: "BBB Accredited", url: "/bbb.png" },
    ],
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Our Work", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      label: "Get a Free Estimate",
      href: "#contact",
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: "Honest Electrical Work for Your Home",
    subheadline: "Gonzalo Arellano and the Flawless Electric crew deliver safe, code-compliant residential electrical services across the Pacific Northwest. No shortcuts, no surprises — just solid work.",
    primaryCta: {
      label: "Get a Free Estimate",
      href: "#contact",
    },
    secondaryCta: {
      label: "See Our Work",
      href: "#gallery",
    },
    stats: [
      { value: "IBEW", label: "Union Trained" },
      { value: "1000+", label: "Jobs Completed" },
      { value: "Licensed", label: "& Bonded" },
    ],
    scrollHint: "Scroll down",
    overlayCard: {
      eyebrow: "Our Experience",
      description: "Gonzalo Arellano and the Flawless Electric crew deliver safe, code-compliant residential electrical services across the Pacific Northwest. No shortcuts, no surprises — just solid work.",
      buttons: [
        { label: "More About Us", href: "#about" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
  },

  // ============================================
  // TRUST BAR
  // ============================================
  trustBar: {
    headline: "Trusted by homeowners across the PNW",
    credentials: ["IBEW", "NECA", "Oregon CCB", "BBB Accredited", "Energy Trust of Oregon"],
  },

  // ============================================
  // ABOUT US SECTION
  // ============================================
  about: {
    headline: "About Flawless Electric Inc",
    subheadline: "Union-trained. Family-owned. Built on hard work.",
    description: "Flawless Electric Inc is owned and operated by Gonzalo Arellano, founder of Flawless Electric Inc, a union-trained electrician with years of hands-on experience in the trade. We're a union shop serving the Pacific Northwest, and we take pride in doing the job right the first time. From panel upgrades to full rewires, we bring blue-collar grit and professional-grade quality to every home we work in.",
    values: [
      {
        title: "Our Mission",
        description: "To provide safe, reliable, and code-compliant electrical work for homeowners at a fair price — no cutting corners.",
      },
      {
        title: "Union Craftsmanship",
        description: "Our crew is IBEW union-trained, which means rigorous apprenticeship standards, ongoing education, and a commitment to safety on every job site.",
      },
      {
        title: "Our Values",
        description: "Hard work, honesty, and respect. We show up on time, keep a clean job site, and stand behind everything we do.",
      },
    ],
  },

  // ============================================
  // SERVICES SECTION
  // ============================================
  services: {
    headline: "Our Services",
    subheadline: "Full-service residential electrical for the Pacific Northwest.",
    items: [
      {
        icon: "Zap",
        title: "Panel Upgrades",
        description: "Upgrade your electrical panel to handle modern power demands safely and meet current code requirements.",
      },
      {
        icon: "Home",
        title: "Whole-Home Rewiring",
        description: "Replace outdated or dangerous wiring with modern, code-compliant systems built to last.",
      },
      {
        icon: "Lightbulb",
        title: "Lighting Installation",
        description: "Indoor and outdoor lighting design and installation — recessed, under-cabinet, landscape, and more.",
      },
      {
        icon: "Shield",
        title: "Electrical Safety Inspections",
        description: "Thorough inspections to identify hazards, code violations, and areas for improvement in your home.",
      },
      {
        icon: "Battery",
        title: "EV Charger Installation",
        description: "Level 2 home EV charger installation so you can charge overnight and hit the road ready.",
      },
      {
        icon: "Wrench",
        title: "Troubleshooting & Repairs",
        description: "Flickering lights, dead outlets, tripped breakers — we diagnose and fix electrical problems fast.",
      },
    ],
  },

  // ============================================
  // GALLERY SECTION
  // ============================================
  gallery: {
    headline: "Our Work",
    subheadline: "A look at recent residential projects across the Pacific Northwest.",
    tabs: {
      photos: "Photos",
      videos: "Videos",
    },
    items: [
      {
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop",
        title: "200A Panel Upgrade",
        category: "Panel Upgrades",
      },
      {
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
        title: "Kitchen Remodel Wiring",
        category: "Rewiring",
      },
      {
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
        title: "Recessed Lighting Install",
        category: "Lighting",
      },
      {
        image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&h=400&fit=crop",
        title: "Whole-Home Rewire",
        category: "Rewiring",
      },
      {
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop",
        title: "EV Charger Install",
        category: "EV Charging",
      },
      {
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
        title: "Outdoor Landscape Lighting",
        category: "Lighting",
      },
    ],
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Meet the Team",
        category: "About Us",
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Panel Upgrade Walkthrough",
        category: "How We Work",
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Why Go Union?",
        category: "Union Trades",
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "EV Charger Install Guide",
        category: "Tutorial",
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Customer Testimonial",
        category: "Testimonials",
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Lighting Design Tips",
        category: "Tips",
      },
    ],
  },

  // ============================================
  // CTA SECTION
  // ============================================
  cta: {
    headline: "Need Electrical Work Done Right?",
    subheadline: "Get a free estimate from a union-trained electrician. We serve homeowners across the Pacific Northwest.",
    primaryCta: {
      label: "Request a Free Estimate",
      href: "#contact",
    },
    secondaryCta: {
      label: "See Our Work",
      href: "#gallery",
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    description: "Union-trained residential electrical services serving the Pacific Northwest.",
    columns: [
      {
        title: "Navigation",
        links: [
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Our Work", href: "#gallery" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Panel Upgrades", href: "#services" },
          { label: "Whole-Home Rewiring", href: "#services" },
          { label: "Lighting Installation", href: "#services" },
          { label: "EV Charger Installation", href: "#services" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "info@flawlesselectric.com", href: "mailto:info@flawlesselectric.com" },
          { label: "+1 (503) 555-0172", href: "tel:+15035550172" },
          { label: "Portland, OR", href: "#contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
        ],
      },
    ],
    social: [
      { platform: "facebook", url: "https://facebook.com" },
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "youtube", url: "https://youtube.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
    copyright: "\u00a9 2024 Flawless Electric Inc. All rights reserved.",
  },
} as const;

export type BrandConfig = typeof brandConfig;
