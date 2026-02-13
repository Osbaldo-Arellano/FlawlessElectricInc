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
    address: "Oregon Licensed",
  },

  // ============================================
  // BRAND ASSETS (URLs to data lake / CDN)
  // ============================================
  assets: {
    logo: {
      light: "/Artboard 6.svg",
      dark: "/Artboard 6.svg",
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
    headline: "Union Skill. Family Values.",
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
      { image: "/jobs/IMG_4302.JPG", title: "200A Panel Upgrade", category: "Panel Upgrades" },
      { image: "/jobs/IMG_4328.JPG", title: "Service Panel Install", category: "Panel Upgrades" },
      { image: "/jobs/IMG_1160.jpg", title: "Kitchen Remodel Wiring", category: "Rewiring" },
      { image: "/jobs/IMG_1164.jpg", title: "Whole-Home Rewire", category: "Rewiring" },
      { image: "/jobs/IMG_1165.jpg", title: "Junction Box Work", category: "Rewiring" },
      { image: "/jobs/IMG_1169.jpg", title: "Recessed Lighting Install", category: "Lighting" },
      { image: "/jobs/IMG_2094.jpg", title: "Residential Rough-In", category: "New Construction" },
      { image: "/jobs/IMG_2103.jpg", title: "Attic Run", category: "Rewiring" },
      { image: "/jobs/IMG_2126.jpg", title: "Outlet & Switch Install", category: "General" },
      { image: "/jobs/IMG_2237.jpg", title: "Sub-Panel Addition", category: "Panel Upgrades" },
      { image: "/jobs/IMG_2240.jpg", title: "Conduit Run", category: "New Construction" },
      { image: "/jobs/IMG_2243.jpg", title: "Garage Wiring", category: "Rewiring" },
      { image: "/jobs/IMG_2551.jpg", title: "Breaker Replacement", category: "Panel Upgrades" },
      { image: "/jobs/IMG_2748.jpg", title: "Outdoor Lighting", category: "Lighting" },
      { image: "/jobs/IMG_2749.jpg", title: "Landscape Lighting", category: "Lighting" },
      { image: "/jobs/IMG_2779.jpg", title: "Bathroom Exhaust Fan", category: "General" },
      { image: "/jobs/IMG_2784.jpg", title: "Smoke Detector Install", category: "Safety" },
      { image: "/jobs/IMG_2996.jpg", title: "Crawlspace Wiring", category: "Rewiring" },
      { image: "/jobs/IMG_4332.jpg", title: "Main Disconnect", category: "Panel Upgrades" },
      { image: "/jobs/IMG_4333.jpg", title: "Meter Base Upgrade", category: "Panel Upgrades" },
      { image: "/jobs/IMG_4350.JPG", title: "Finished Panel", category: "Panel Upgrades" },
      { image: "/jobs/IMG_4481.jpg", title: "EV Charger Install", category: "EV Charging" },
      { image: "/jobs/IMG_4530.jpg", title: "Ceiling Fan Wiring", category: "Lighting" },
      { image: "/jobs/IMG_4531.jpg", title: "Chandelier Install", category: "Lighting" },
      { image: "/jobs/IMG_1216.JPG", title: "Code Inspection Ready", category: "Safety" },
      { image: "/jobs/IMG_1217.JPG", title: "Grounding Upgrade", category: "Safety" },
      { image: "/jobs/IMG_1260.jpg", title: "Commercial Rough-In", category: "New Construction" },
      { image: "/jobs/IMG_1326.jpg", title: "Wire Pull", category: "New Construction" },
      { image: "/jobs/IMG_1342.jpg", title: "Trim-Out", category: "General" },
      { image: "/jobs/IMG_1513.jpg", title: "Outdoor Receptacle", category: "General" },
      { image: "/jobs/IMG_1514.jpg", title: "Weatherproof Box", category: "General" },
      { image: "/jobs/IMG_2131.JPG", title: "Service Entrance", category: "Panel Upgrades" },
      { image: "/jobs/IMG_0009.JPG", title: "Job Site Overview", category: "New Construction" },
      { image: "/jobs/IMG_0140.JPG", title: "Finished Project", category: "General" },
      { image: "/jobs/3490CF83-2851-4DF4-800B-E2E28067C802.JPG", title: "On-Site Work", category: "General" },
      { image: "/jobs/62931663139__01437557-0043-4DB4-B76F-283D7BCC1A3B.jpg", title: "Detail Shot", category: "General" },
    ],
    videos: [
      { videoUrl: "/jobs/panel.mp4", title: "Panel Upgrade Walkthrough", category: "Panel Upgrades" },
      { videoUrl: "/jobs/ceiling.MP4", title: "Ceiling Work in Progress", category: "Lighting" },
      { videoUrl: "/jobs/house.MP4", title: "Whole-Home Project Tour", category: "Rewiring" },
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
