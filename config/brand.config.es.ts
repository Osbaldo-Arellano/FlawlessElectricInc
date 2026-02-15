export const brandConfig = {
  // ============================================
  // COMPANY INFO
  // ============================================
  company: {
    name: "Flawless Electric Inc",
    tagline: "Propiedad de veterano. Entrenamiento sindical. Hecho para durar.",
    description: "Servicios eléctricos residenciales de confianza. Propiedad de veterano, trabajo sindical profesional al servicio del noroeste del Pacífico, con honestidad y calidad.",
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
      { value: "Veterano", label: "Propietario" },
      { value: "IBEW", label: "Entrenamiento Sindical" },
      { value: "1000+", label: "Trabajos Completados" },
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
    credentials: ["Propiedad de Veterano", "IBEW", "NECA", "Oregon CCB", "BBB Acreditado", "Energy Trust de Oregon"],
  },

  // ============================================
  // ABOUT US SECTION
  // ============================================
  about: {
    headline: "Propiedad de Veterano. Habilidad Sindical. Valores Familiares.",
    subheadline: "Propiedad de veterano. Entrenamiento sindical. Negocio familiar. Construido con trabajo duro.",
    description: "Flawless Electric Inc es propiedad y está operado por Gonzalo Arellano, un orgulloso veterano y electricista con entrenamiento sindical y años de experiencia práctica en el oficio. La disciplina y ética de trabajo aprendidas en el servicio militar se reflejan en cada trabajo que hacemos. Somos una empresa de veterano con entrenamiento sindical que sirve al noroeste del Pacífico, y nos enorgullecemos de hacer el trabajo bien desde la primera vez. Desde mejoras de paneles hasta recableados completos, llevamos la tenacidad del trabajo duro y la calidad profesional a cada hogar.",
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
      // --- Página 1: Mejores trabajos (terminados, acción, variedad) ---
      { image: "/jobs/finished-200a-siemens-panel.jpg", title: "Panel Siemens 200A Terminado", category: "Mejoras de Panel" },
      { image: "/jobs/patio-recessed-lights-ceiling-fan.jpg", title: "Luces Empotradas y Ventilador de Patio", category: "Iluminación" },
      { image: "/jobs/electrician-commercial-wire-pull.jpg", title: "Electricista Tendiendo Cable Comercial", category: "Comercial" },
      { image: "/jobs/completed-outdoor-panel.jpg", title: "Panel Exterior Completado", category: "Mejoras de Panel" },
      { image: "/jobs/exterior-meter-panel-combo.jpg", title: "Combo Medidor y Panel Exterior", category: "Mejoras de Panel" },
      { image: "/jobs/new-construction-finished-panel.jpg", title: "Panel Terminado en Obra Nueva", category: "Mejoras de Panel" },

      // --- Página 2: Mejoras de Panel ---
      { image: "/jobs/old-sub-panel-before.jpg", title: "Sub-Panel Antiguo Antes de Mejora", category: "Mejoras de Panel" },
      { image: "/jobs/old-panel-rewire-in-progress.jpg", title: "Recableado de Panel en Progreso", category: "Mejoras de Panel" },
      { image: "/jobs/panel-rough-in-before.jpg", title: "Pre-Instalación de Panel — Antes", category: "Mejoras de Panel" },
      { image: "/jobs/panel-wiring-in-progress.jpg", title: "Cableado de Panel en Progreso", category: "Mejoras de Panel" },
      { image: "/jobs/exterior-meter-base-install.jpg", title: "Instalación de Base de Medidor Exterior", category: "Mejoras de Panel" },
      { image: "/jobs/exterior-panel-meter-installation.jpg", title: "Instalación Exterior de Panel y Medidor", category: "Mejoras de Panel" },

      // --- Página 3: Seguridad ---
      { image: "/jobs/old-residential-panel.jpg", title: "Panel Residencial Antiguo", category: "Mejoras de Panel" },
      { image: "/jobs/burned-breaker-removal.jpg", title: "Remoción de Breaker Quemado", category: "Seguridad" },
      { image: "/jobs/melted-breaker-connection.jpg", title: "Conexión de Breaker Derretida", category: "Seguridad" },
      { image: "/jobs/fire-damaged-panel-interior.jpg", title: "Interior de Panel Dañado por Fuego", category: "Seguridad" },
      { image: "/jobs/corroded-service-lugs.jpg", title: "Terminales de Acometida Corroídas", category: "Seguridad" },
      { image: "/jobs/voltage-testing-with-fluke.jpg", title: "Prueba de Voltaje en Desconector", category: "Seguridad" },

      // --- Página 4: Obra Nueva ---
      { image: "/jobs/new-construction-panel-rough-in.jpg", title: "Pre-Instalación de Panel en Obra Nueva", category: "Obra Nueva" },
      { image: "/jobs/new-build-panel-wiring.jpg", title: "Cableado de Panel en Obra Nueva", category: "Obra Nueva" },
      { image: "/jobs/new-panel-initial-wiring.jpg", title: "Cableado Inicial de Panel Nuevo", category: "Obra Nueva" },
      { image: "/jobs/service-mast-rooftop-install.jpg", title: "Instalación de Mástil en Techo", category: "Obra Nueva" },
      { image: "/jobs/service-mast-complete.jpg", title: "Mástil de Servicio Completo", category: "Obra Nueva" },
      { image: "/jobs/residential-rough-in-wiring.jpg", title: "Cableado Pre-Instalación Residencial", category: "Obra Nueva" },

      // --- Página 5: Obra Nueva + Comercial ---
      { image: "/jobs/residential-rough-in-interior.jpg", title: "Pre-Instalación Interior Residencial", category: "Obra Nueva" },
      { image: "/jobs/new-construction-rough-in-room.jpg", title: "Pre-Instalación en Obra Nueva", category: "Obra Nueva" },
      { image: "/jobs/new-construction-framing-overview.jpg", title: "Vista General del Enmarcado", category: "Obra Nueva" },
      { image: "/jobs/multi-unit-conduit-run.jpg", title: "Tubería y Banco de Medidores Multi-Unidad", category: "Comercial" },
      { image: "/jobs/commercial-conduit-bundle.jpg", title: "Banco de Tubería Comercial", category: "Comercial" },
      { image: "/jobs/rooftop-hvac-disconnect-install.jpg", title: "Instalación de Desconector HVAC en Azotea", category: "Comercial" },

      // --- Página 6: Comercial + Iluminación + En el Trabajo ---
      { image: "/jobs/commercial-cable-support-brackets.jpg", title: "Soportes de Cable Comercial", category: "Comercial" },
      { image: "/jobs/commercial-cable-routing.jpg", title: "Enrutamiento de Cable Comercial", category: "Comercial" },
      { image: "/jobs/damaged-breaker-closeup.jpg", title: "Breaker Dañado de 100A", category: "Seguridad" },
      { image: "/jobs/outdoor-floodlight-install.jpg", title: "Instalación de Reflectores Exteriores", category: "Iluminación" },
      { image: "/jobs/patio-temporary-lighting.jpg", title: "Iluminación Temporal de Patio", category: "Iluminación" },
      { image: "/jobs/fully-stocked-work-van.jpg", title: "Camioneta de Trabajo Equipada", category: "En el Trabajo" },
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
    subheadline: "Obtén una cotización gratis de una empresa eléctrica de veterano con entrenamiento sindical. Servimos a hogares en todo el noroeste del Pacífico.",
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
    description: "Servicios eléctricos residenciales de veterano con entrenamiento sindical sirviendo al noroeste del Pacífico.",
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
