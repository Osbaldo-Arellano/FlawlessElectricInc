export const brandConfig = {
  // ============================================
  // COMPANY INFO
  // ============================================
  company: {
    name: "Flawless Electric Inc",
    tagline: "Veteran-owned. Union-trained. Built to last.",
    description: "Residential electrical services you can trust. Veteran-owned, union-trained craftsmanship serving the Pacific Northwest with honest, reliable work.",
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
      { value: "Veteran", label: "Owned" },
      { value: "IBEW", label: "Union Trained" },
      { value: "1000+", label: "Jobs Completed" },
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
    credentials: ["Veteran Owned", "IBEW", "NECA", "Oregon CCB", "BBB Accredited", "Energy Trust of Oregon"],
  },

  // ============================================
  // ABOUT US SECTION
  // ============================================
  about: {
    headline: "Veteran-Owned. Union Skill. Family Values.",
    subheadline: "Veteran-owned. Union-trained. Family-operated. Built on hard work.",
    description: "Flawless Electric Inc is owned and operated by Gonzalo Arellano, a proud veteran and union-trained electrician with years of hands-on experience in the trade. The discipline and work ethic learned through military service carry into every job we do. We're a veteran-owned, union shop serving the Pacific Northwest, and we take pride in doing the job right the first time. From panel upgrades to full rewires, we bring blue-collar grit and professional-grade quality to every home we work in.",
    values: [
      {
        title: "Our Mission",
        description: "To provide safe, reliable, and code-compliant electrical work for homeowners at a fair price. We don't cut corners. Ever.",
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
      // --- Page 1: Best showcase (finished work, action shots, variety) ---
      { image: "/jobs/finished-200a-siemens-panel.jpg", title: "Finished 200A Siemens Panel", category: "Panel Upgrades" },
      { image: "/jobs/patio-recessed-lights-ceiling-fan.jpg", title: "Patio Recessed Lights & Ceiling Fan", category: "Lighting" },
      { image: "/jobs/electrician-commercial-wire-pull.jpg", title: "Electrician Pulling Commercial Wire", category: "Commercial" },
      { image: "/jobs/completed-outdoor-panel.jpg", title: "Completed Outdoor Panel", category: "Panel Upgrades" },
      { image: "/jobs/exterior-meter-panel-combo.jpg", title: "Exterior Meter & Panel Combo", category: "Panel Upgrades" },
      { image: "/jobs/new-construction-finished-panel.jpg", title: "New Construction Finished Panel", category: "Panel Upgrades" },

      // --- Page 2: Panel Upgrades ---
      { image: "/jobs/old-sub-panel-before.jpg", title: "Old Sub-Panel Before Upgrade", category: "Panel Upgrades" },
      { image: "/jobs/old-panel-rewire-in-progress.jpg", title: "Panel Rewire In Progress", category: "Panel Upgrades" },
      { image: "/jobs/panel-rough-in-before.jpg", title: "Panel Rough-In — Before", category: "Panel Upgrades" },
      { image: "/jobs/panel-wiring-in-progress.jpg", title: "Panel Wiring In Progress", category: "Panel Upgrades" },
      { image: "/jobs/exterior-meter-base-install.jpg", title: "Exterior Meter Base Install", category: "Panel Upgrades" },
      { image: "/jobs/exterior-panel-meter-installation.jpg", title: "Exterior Panel & Meter Installation", category: "Panel Upgrades" },

      // --- Page 3: Safety ---
      { image: "/jobs/old-residential-panel.jpg", title: "Old Residential Panel", category: "Panel Upgrades" },
      { image: "/jobs/burned-breaker-removal.jpg", title: "Burned Breaker Removal", category: "Safety" },
      { image: "/jobs/melted-breaker-connection.jpg", title: "Melted Breaker Connection", category: "Safety" },
      { image: "/jobs/fire-damaged-panel-interior.jpg", title: "Fire-Damaged Panel Interior", category: "Safety" },
      { image: "/jobs/corroded-service-lugs.jpg", title: "Corroded Service Entrance Lugs", category: "Safety" },
      { image: "/jobs/voltage-testing-with-fluke.jpg", title: "Voltage Testing at Disconnect", category: "Safety" },

      // --- Page 4: New Construction ---
      { image: "/jobs/new-construction-panel-rough-in.jpg", title: "New Construction Panel Rough-In", category: "New Construction" },
      { image: "/jobs/new-build-panel-wiring.jpg", title: "New Build Panel Wiring", category: "New Construction" },
      { image: "/jobs/new-panel-initial-wiring.jpg", title: "New Panel Initial Wiring", category: "New Construction" },
      { image: "/jobs/service-mast-rooftop-install.jpg", title: "Service Mast Rooftop Install", category: "New Construction" },
      { image: "/jobs/service-mast-complete.jpg", title: "Service Mast Complete", category: "New Construction" },
      { image: "/jobs/residential-rough-in-wiring.jpg", title: "Residential Rough-In Wiring", category: "New Construction" },

      // --- Page 5: New Construction + Commercial ---
      { image: "/jobs/residential-rough-in-interior.jpg", title: "Residential Rough-In Interior", category: "New Construction" },
      { image: "/jobs/new-construction-rough-in-room.jpg", title: "New Construction Rough-In", category: "New Construction" },
      { image: "/jobs/new-construction-framing-overview.jpg", title: "New Construction Framing Overview", category: "New Construction" },
      { image: "/jobs/multi-unit-conduit-run.jpg", title: "Multi-Unit Conduit & Meter Bank", category: "Commercial" },
      { image: "/jobs/commercial-conduit-bundle.jpg", title: "Commercial Conduit Bundle", category: "Commercial" },
      { image: "/jobs/rooftop-hvac-disconnect-install.jpg", title: "Rooftop HVAC Disconnect Install", category: "Commercial" },

      // --- Page 6: Commercial + Lighting + On the Job ---
      { image: "/jobs/commercial-cable-support-brackets.jpg", title: "Commercial Cable Support Brackets", category: "Commercial" },
      { image: "/jobs/commercial-cable-routing.jpg", title: "Commercial Cable Routing", category: "Commercial" },
      { image: "/jobs/damaged-breaker-closeup.jpg", title: "Damaged 100A Breaker", category: "Safety" },
      { image: "/jobs/outdoor-floodlight-install.jpg", title: "Outdoor Floodlight Install", category: "Lighting" },
      { image: "/jobs/patio-temporary-lighting.jpg", title: "Patio Temporary Lighting", category: "Lighting" },
      { image: "/jobs/fully-stocked-work-van.jpg", title: "Fully Stocked Work Van", category: "On the Job" },
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
    subheadline: "Get a free estimate from a veteran-owned, union-trained electrical company. We serve homeowners across the Pacific Northwest.",
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
    description: "Veteran-owned, union-trained residential electrical services serving the Pacific Northwest.",
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
