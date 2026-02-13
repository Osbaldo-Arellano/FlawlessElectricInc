export const brandConfig = {
  // ============================================
  // COMPANY INFO
  // ============================================
  company: {
    name: "Flawless Electric Inc",
    tagline: "Entrenamiento sindical. Hecho para durar.",
    description: "Servicios el\u00e9ctricos residenciales de confianza. Trabajo sindical profesional al servicio del noroeste del Pac\u00edfico, con honestidad y calidad.",
    email: "info@flawlesselectric.com",
    phone: "+1 (503) 555-0172",
    address: "Portland, OR \u2014 Sirviendo al Noroeste del Pac\u00edfico",
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
      imageAlt: "Electricista trabajando en cableado residencial",
    },
    partnerLogos: [
      { name: "IBEW", url: "/ibew.png" },
      { name: "NECA", url: "/neca.png" },
      { name: "Oregon CCB", url: "/ccb.png" },
      { name: "Energy Trust of Oregon", url: "/energytrust.png" },
      { name: "BBB Acreditado", url: "/bbb.png" },
    ],
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { label: "Nosotros", href: "#about" },
      { label: "Servicios", href: "#services" },
      { label: "Nuestro Trabajo", href: "#gallery" },
      { label: "Contacto", href: "#contact" },
    ],
    cta: {
      label: "Cotizaci\u00f3n Gratis",
      href: "#contact",
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: "Trabajo El\u00e9ctrico Honesto para Tu Hogar",
    subheadline: "Gonzalo Arellano y el equipo de Flawless Electric ofrecen servicios el\u00e9ctricos residenciales seguros y conformes al c\u00f3digo en todo el noroeste del Pac\u00edfico. Sin atajos, sin sorpresas \u2014 solo trabajo s\u00f3lido.",
    primaryCta: {
      label: "Cotizaci\u00f3n Gratis",
      href: "#contact",
    },
    secondaryCta: {
      label: "Ver Nuestro Trabajo",
      href: "#gallery",
    },
    stats: [
      { value: "IBEW", label: "Entrenamiento Sindical" },
      { value: "1000+", label: "Trabajos Completados" },
      { value: "Licenciado", label: "y Asegurado" },
    ],
    scrollHint: "Desliza hacia abajo para más",
    overlayCard: {
      eyebrow: "Nuestra Experiencia",
      description: "Gonzalo Arellano y el equipo de Flawless Electric ofrecen servicios el\u00e9ctricos residenciales seguros y conformes al c\u00f3digo en todo el noroeste del Pac\u00edfico. Sin atajos, sin sorpresas \u2014 solo trabajo s\u00f3lido.",
      buttons: [
        { label: "M\u00e1s Sobre Nosotros", href: "#about" },
        { label: "Cont\u00e1ctanos", href: "#contact" },
      ],
    },
  },

  // ============================================
  // TRUST BAR
  // ============================================
  trustBar: {
    headline: "De confianza para los hogares del noroeste del Pac\u00edfico",
    credentials: ["IBEW", "NECA", "Oregon CCB", "BBB Acreditado", "Energy Trust de Oregon"],
  },

  // ============================================
  // ABOUT US SECTION
  // ============================================
  about: {
    headline: "Habilidad sindical. Valores familiares.",
    subheadline: "Entrenamiento sindical. Negocio familiar. Construido con trabajo duro.",
    description: "Flawless Electric Inc es propiedad y est\u00e1 operado por Gonzalo Arellano, un electricista con entrenamiento sindical y a\u00f1os de experiencia pr\u00e1ctica en el oficio. Somos una empresa sindical que sirve al noroeste del Pac\u00edfico, y nos enorgullecemos de hacer el trabajo bien desde la primera vez. Desde mejoras de paneles hasta recableados completos, llevamos la tenacidad del trabajo duro y la calidad profesional a cada hogar.",
    values: [
      {
        title: "Nuestra Misi\u00f3n",
        description: "Proveer trabajo el\u00e9ctrico seguro, confiable y conforme al c\u00f3digo para los hogares a un precio justo \u2014 sin tomar atajos.",
      },
      {
        title: "Oficio Sindical",
        description: "Nuestro equipo tiene entrenamiento sindical IBEW, lo que significa est\u00e1ndares rigurosos de aprendizaje, educaci\u00f3n continua y compromiso con la seguridad en cada obra.",
      },
      {
        title: "Nuestros Valores",
        description: "Trabajo duro, honestidad y respeto. Llegamos a tiempo, mantenemos el \u00e1rea de trabajo limpia y respaldamos todo lo que hacemos.",
      },
    ],
  },

  // ============================================
  // SERVICES SECTION
  // ============================================
  services: {
    headline: "Nuestros Servicios",
    subheadline: "Servicios el\u00e9ctricos residenciales completos para el noroeste del Pac\u00edfico.",
    items: [
      {
        icon: "Zap",
        title: "Mejoras de Panel",
        description: "Actualiza tu panel el\u00e9ctrico para manejar las demandas de energ\u00eda modernas de forma segura y cumplir con el c\u00f3digo actual.",
      },
      {
        icon: "Home",
        title: "Recableado Completo",
        description: "Reemplaza cableado obsoleto o peligroso con sistemas modernos y conformes al c\u00f3digo, hechos para durar.",
      },
      {
        icon: "Lightbulb",
        title: "Instalaci\u00f3n de Iluminaci\u00f3n",
        description: "Dise\u00f1o e instalaci\u00f3n de iluminaci\u00f3n interior y exterior \u2014 empotrada, bajo gabinete, paisajismo y m\u00e1s.",
      },
      {
        icon: "Shield",
        title: "Inspecciones de Seguridad El\u00e9ctrica",
        description: "Inspecciones completas para identificar peligros, violaciones de c\u00f3digo y \u00e1reas de mejora en tu hogar.",
      },
      {
        icon: "Battery",
        title: "Instalaci\u00f3n de Cargador EV",
        description: "Instalaci\u00f3n de cargador EV Nivel 2 en casa para que cargues durante la noche y salgas listo.",
      },
      {
        icon: "Wrench",
        title: "Diagn\u00f3stico y Reparaciones",
        description: "Luces parpadeantes, enchufes muertos, breakers disparados \u2014 diagnosticamos y reparamos problemas el\u00e9ctricos r\u00e1pido.",
      },
    ],
  },

  // ============================================
  // GALLERY SECTION
  // ============================================
  gallery: {
    headline: "Nuestro Trabajo",
    subheadline: "Un vistazo a proyectos residenciales recientes en el noroeste del Pac\u00edfico.",
    tabs: {
      photos: "Fotos",
      videos: "Videos",
    },
    items: [
      { image: "/jobs/IMG_4302.JPG", title: "Mejora de Panel 200A", category: "Mejoras de Panel" },
      { image: "/jobs/IMG_4328.JPG", title: "Instalaci\u00f3n de Panel", category: "Mejoras de Panel" },
      { image: "/jobs/IMG_1160.jpg", title: "Cableado de Cocina", category: "Recableado" },
      { image: "/jobs/IMG_1164.jpg", title: "Recableado Completo", category: "Recableado" },
      { image: "/jobs/IMG_1165.jpg", title: "Caja de Empalme", category: "Recableado" },
      { image: "/jobs/IMG_1169.jpg", title: "Luz Empotrada", category: "Iluminaci\u00f3n" },
      { image: "/jobs/IMG_2094.jpg", title: "Obra Nueva Residencial", category: "Obra Nueva" },
      { image: "/jobs/IMG_2103.jpg", title: "Tendido en \u00c1tico", category: "Recableado" },
      { image: "/jobs/IMG_2126.jpg", title: "Tomacorrientes e Interruptores", category: "General" },
      { image: "/jobs/IMG_2237.jpg", title: "Sub-Panel", category: "Mejoras de Panel" },
      { image: "/jobs/IMG_2240.jpg", title: "Tendido de Tuber\u00eda", category: "Obra Nueva" },
      { image: "/jobs/IMG_2243.jpg", title: "Cableado de Garaje", category: "Recableado" },
      { image: "/jobs/IMG_2551.jpg", title: "Reemplazo de Breaker", category: "Mejoras de Panel" },
      { image: "/jobs/IMG_2748.jpg", title: "Iluminaci\u00f3n Exterior", category: "Iluminaci\u00f3n" },
      { image: "/jobs/IMG_2749.jpg", title: "Iluminaci\u00f3n de Paisaje", category: "Iluminaci\u00f3n" },
      { image: "/jobs/IMG_2779.jpg", title: "Extractor de Ba\u00f1o", category: "General" },
      { image: "/jobs/IMG_2784.jpg", title: "Detector de Humo", category: "Seguridad" },
      { image: "/jobs/IMG_2996.jpg", title: "Cableado Subterr\u00e1neo", category: "Recableado" },
      { image: "/jobs/IMG_4332.jpg", title: "Desconexi\u00f3n Principal", category: "Mejoras de Panel" },
      { image: "/jobs/IMG_4333.jpg", title: "Mejora de Medidor", category: "Mejoras de Panel" },
      { image: "/jobs/IMG_4350.JPG", title: "Panel Terminado", category: "Mejoras de Panel" },
      { image: "/jobs/IMG_4481.jpg", title: "Cargador EV", category: "Carga EV" },
      { image: "/jobs/IMG_4530.jpg", title: "Ventilador de Techo", category: "Iluminaci\u00f3n" },
      { image: "/jobs/IMG_4531.jpg", title: "Instalaci\u00f3n de L\u00e1mpara", category: "Iluminaci\u00f3n" },
      { image: "/jobs/IMG_1216.JPG", title: "Listo para Inspecci\u00f3n", category: "Seguridad" },
      { image: "/jobs/IMG_1217.JPG", title: "Mejora de Tierra", category: "Seguridad" },
      { image: "/jobs/IMG_1260.jpg", title: "Obra Comercial", category: "Obra Nueva" },
      { image: "/jobs/IMG_1326.jpg", title: "Tendido de Cable", category: "Obra Nueva" },
      { image: "/jobs/IMG_1342.jpg", title: "Acabado Final", category: "General" },
      { image: "/jobs/IMG_1513.jpg", title: "Tomacorriente Exterior", category: "General" },
      { image: "/jobs/IMG_1514.jpg", title: "Caja Intemperie", category: "General" },
      { image: "/jobs/IMG_2131.JPG", title: "Acometida El\u00e9ctrica", category: "Mejoras de Panel" },
      { image: "/jobs/IMG_0009.JPG", title: "Vista del Sitio", category: "Obra Nueva" },
      { image: "/jobs/IMG_0140.JPG", title: "Proyecto Terminado", category: "General" },
      { image: "/jobs/3490CF83-2851-4DF4-800B-E2E28067C802.JPG", title: "Trabajo en Sitio", category: "General" },
      { image: "/jobs/62931663139__01437557-0043-4DB4-B76F-283D7BCC1A3B.jpg", title: "Detalle", category: "General" },
    ],
    videos: [
      { videoUrl: "/jobs/panel.mp4", title: "Recorrido de Mejora de Panel", category: "Mejoras de Panel" },
      { videoUrl: "/jobs/ceiling.MP4", title: "Trabajo de Techo en Progreso", category: "Iluminaci\u00f3n" },
      { videoUrl: "/jobs/house.MP4", title: "Recorrido de Proyecto", category: "Recableado" },
    ],
  },

  // ============================================
  // CTA SECTION
  // ============================================
  cta: {
    headline: "\u00bfNecesitas Trabajo El\u00e9ctrico Bien Hecho?",
    subheadline: "Obt\u00e9n una cotizaci\u00f3n gratis de un electricista con entrenamiento sindical. Servimos a hogares en todo el noroeste del Pac\u00edfico.",
    primaryCta: {
      label: "Solicitar Cotizaci\u00f3n Gratis",
      href: "#contact",
    },
    secondaryCta: {
      label: "Ver Nuestro Trabajo",
      href: "#gallery",
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    description: "Servicios el\u00e9ctricos residenciales con entrenamiento sindical sirviendo al noroeste del Pac\u00edfico.",
    columns: [
      {
        title: "Navegaci\u00f3n",
        links: [
          { label: "Nosotros", href: "#about" },
          { label: "Servicios", href: "#services" },
          { label: "Nuestro Trabajo", href: "#gallery" },
          { label: "Contacto", href: "#contact" },
        ],
      },
      {
        title: "Servicios",
        links: [
          { label: "Mejoras de Panel", href: "#services" },
          { label: "Recableado Completo", href: "#services" },
          { label: "Instalaci\u00f3n de Iluminaci\u00f3n", href: "#services" },
          { label: "Instalaci\u00f3n de Cargador EV", href: "#services" },
        ],
      },
      {
        title: "Contacto",
        links: [
          { label: "info@flawlesselectric.com", href: "mailto:info@flawlesselectric.com" },
          { label: "+1 (503) 555-0172", href: "tel:+15035550172" },
          { label: "Portland, OR", href: "#contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Pol\u00edtica de Privacidad", href: "/privacy" },
          { label: "T\u00e9rminos de Servicio", href: "/terms" },
        ],
      },
    ],
    social: [
      { platform: "facebook", url: "https://facebook.com" },
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "youtube", url: "https://youtube.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
    copyright: "\u00a9 2024 Flawless Electric Inc. Todos los derechos reservados.",
  },
} as const;

export type BrandConfig = typeof brandConfig;
