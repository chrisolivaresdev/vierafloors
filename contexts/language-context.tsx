"use client"

import * as React from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string, section?: string) => any
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

// Translation dictionary
const translations = {
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Sobre Nosotros",
      portfolio: "Proyectos", // Added portfolio translation
      reviews: "Opiniones",
      contact: "Contacto",
      cta: "Consulta Gratis",
      expert: "Expertos en remodelación"
    },
    // Hero Section
    hero: {
      badge: "Empresa Líder en Remodelación",
      title: "Transforma Tu Espacio con",
      titleHighlight: "Viera Floors",
      subtitle: "Expertos en remodelación de baños, cocinas, cerámicas y techos",
      description:
        "Convertimos tus sueños en realidad con más de 10 años de experiencia en construcción y remodelación. Calidad garantizada y resultados excepcionales.",
      cta: "Consulta Gratuita",
      ctaSecondary: "Ver Proyectos",
      modern: "Modernos",
      elegant: "Elegantes",
      premium: "Premium",
      unique: "Únicos",
      qualityGuarantee: "Garantía de Calidad",
      qualityDescription: "Materiales premium y acabados perfectos en cada proyecto",
      stats: {
        projects: "Proyectos Completados",
        experience: "Años de Experiencia",
        satisfaction: "Satisfacción Garantizada",
      },
    },
    // Services Section
    services: {
      badge: "Nuestros Servicios",
      title: "Servicios de Remodelación Premium",
      subtitle: "Transformamos cada espacio con materiales de alta calidad y diseños innovadores",
      cta: "Ver Más Proyectos",
      ctaBottom: "¿No encuentras lo que buscas?",
      ctaBottomDesc:
        "Ofrecemos servicios personalizados para cualquier proyecto de remodelación. Contáctanos para una consulta gratuita.",
      requestQuote: "Solicitar Cotización",
      bathroom: {
        title: "Remodelación de Baños",
        description: "Transformamos tu baño en un oasis de relajación con diseños modernos y funcionales.",
        features: ["Diseño personalizado", "Materiales premium", "Instalación profesional", "Garantía extendida"],
        price: "Desde $8,000",
        duration: "2-3 semanas",
      },
      kitchen: {
        title: "Diseño de Cocinas",
        description: "Creamos cocinas que combinan estilo, funcionalidad y las últimas tendencias en diseño.",
        features: ["Gabinetes a medida", "Encimeras de cuarzo", "Electrodomésticos integrados", "Iluminación LED"],
        price: "Desde $15,000",
        duration: "3-4 semanas",
      },
      ceramic: {
        title: "Instalación de Cerámicas",
        description: "Instalamos cerámicas y porcelana de la más alta calidad con acabados perfectos.",
        features: ["Cerámicas importadas", "Patrones únicos", "Instalación experta", "Sellado profesional"],
        price: "Desde $5,000",
        duration: "1-2 semanas",
      },
      materials: {
        title: "Venta de Materiales",
        description: "Ofrecemos una amplia variedad de materiales de alta calidad para tus proyectos de construcción y remodelación.",
        features: ["Cerámicas y Porcelana", "Materiales de construcción", "Herramientas especializadas", "Asesoría experta"],
        price: "Precios competitivos",
        duration: "Disponibilidad inmediata",
      },
    },
    // About Section
    about: {
      badge: "Sobre Nosotros",
      title: "Más de 10 Años Transformando Espacios",
      subtitle: "Somos una empresa familiar dedicada a convertir tus sueños en realidad",
      description:
        "En Viera Floors, combinamos la tradición artesanal con las técnicas más modernas para crear espacios únicos y funcionales. Nuestro compromiso con la excelencia nos ha convertido en líderes en el sector de la remodelación.",
      mission: {
        title: "Nuestra Misión",
        description: "Transformar espacios con calidad excepcional, superando las expectativas de nuestros clientes.",
      },
      vision: {
        title: "Nuestra Visión",
        description: "Ser la empresa de remodelación más confiable y reconocida en el mercado.",
      },
      values: {
        title: "Nuestros Valores",
        items: [
          { title: "Calidad", description: "Materiales premium y acabados perfectos" },
          { title: "Confianza", description: "Transparencia en cada proyecto" },
          { title: "Innovación", description: "Técnicas y diseños vanguardistas" },
          { title: "Compromiso", description: "Dedicación total a la satisfacción del cliente" },
        ],
      },
      stats: [
        { number: "100+", label: "Proyectos Completados" },
        { number: "10+", label: "Años de Experiencia" },
        { number: "70+", label: "Clientes Satisfechos" },
        { number: "100%", label: "Garantía de Calidad" },
      ],
    },
    // Reviews Section
    reviews: {
      badge: "Opiniones de Clientes",
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "La satisfacción de nuestros clientes es nuestra mayor recompensa",
      cta: "Ver Más Testimonios",
      testimonials: [
        {
          name: "María González",
          role: "Propietaria de Casa",
          rating: 5,
          text: "Viera Floors transformó completamente mi cocina. El trabajo fue impecable y el equipo muy profesional. ¡Altamente recomendados!",
          image: "/client-maria.jpg",
        },
        {
          name: "Carlos Rodríguez",
          role: "Empresario",
          rating: 5,
          text: "Excelente servicio en la remodelación de mi baño. Cumplieron con los tiempos y la calidad superó mis expectativas.",
          image: "/client-carlos.jpg",
        },
        {
          name: "Ana Martínez",
          role: "Arquitecta",
          rating: 5,
          text: "Como profesional del sector, puedo decir que Viera Floors tiene un nivel de calidad excepcional. Trabajo impecable.",
          image: "/client-ana.jpg",
        },
        {
          name: "Roberto Silva",
          role: "Ingeniero",
          rating: 5,
          text: "La instalación de cerámicas fue perfecta. Atención al detalle increíble y acabados de primera calidad.",
          image: "/client-roberto.jpg",
        },
      ],
    },
    // Portfolio Section
    portfolio: {
      title: "Nuestros Proyectos",
      subtitle: "Descubre la calidad y creatividad en cada uno de nuestros trabajos de remodelación",
      backToHome: "Volver al Inicio",
      home: "Inicio",
      projectsFound: "proyectos encontrados",
      searchPlaceholder: "Buscar proyectos...",
      filterBy: "Filtrar por:",
      filterAll: "Todos",
      filterBathroom: "Baños",
      filterKitchen: "Cocinas",
      filterCeramic: "Cerámicas",
      filterRoof: "Techos",
      filterMaterial: "Venta de Materiales",
      client: "Cliente",
      duration: "Duración",
      viewDetails: "Ver Detalles",
      noResults: "No se encontraron proyectos",
      noResultsDesc: "Intenta con diferentes términos de búsqueda o filtros",
      clearFilters: "Limpiar Filtros",
      lang: "es",
      // Project descriptions
      modernBathroom: "Baño Moderno Spa",
      modernBathroomDesc: "Remodelación completa con acabados de lujo y diseño contemporáneo",
      gourmetKitchen: "Cocina Gourmet",
      gourmetKitchenDesc: "Cocina moderna con electrodomésticos de alta gama y diseño funcional",
      ceramicInstallation: "Instalación de Cerámicas Premium",
      ceramicInstallationDesc: "Instalación profesional de cerámicas importadas con patrones únicos",
      roofRenovation: "Renovación de Techos",
      roofRenovationDesc: "Techos modernos con materiales resistentes y diseño arquitectónico",
      luxuryBathroom: "Baño de Lujo",
      luxuryBathroomDesc: "Transformación completa con materiales premium y acabados perfectos",
      modernKitchen: "Cocina Moderna",
      modernKitchenDesc: "Diseño contemporáneo con gabinetes a medida y encimeras de cuarzo",
      premiumMaterials: "Materiales Premium para Construcción",
      premiumMaterialsDesc: "Amplio catálogo de materiales de alta calidad para tus proyectos",
      ceramicTilesSale: "Cerámicas y Porcelana en Venta",
      ceramicTilesSaleDesc: "Venta directa de cerámicas importadas al mejor precio",
      chevronFloor: "Piso de Porcelana Chevron",
      chevronFloorDesc: "Instalación de piso cerámico con diseño tipo porcelana en patrón chevron de alta precisión.",
      blueWall: "Pared Herringbone Azul",
      blueWallDesc: "Revestimiento de pared elegante con cerámica azul en patrón herringbone para espacios modernos.",
      marbleSlab: "Lámina de Mármol Premium",
      marbleSlabDesc: "Porcelana de gran formato con acabado tipo mármol para acabados de lujo.",
      wpcAlaska: "Panel WPC Alaska Gray",
      wpcAlaskaDesc: "Paneles de revestimiento WPC resistentes y con estilo para interiores contemporáneos.",
      stoneWall: "Pared de Piedra Natural",
      stoneWallDesc: "Revestimiento de pared con textura de piedra natural para un ambiente rústico y moderno.",
      wpcChampagne: "Panel WPC Champagne/Black",
      wpcChampagneDesc: "Elegante panel WPC en tono champagne con acentos negros.",
      porcelainWhite: "Porcelana Blanco Pulido",
      porcelainWhiteDesc: "Lámina de porcelana blanco con vetas sutiles para un acabado limpio y luminoso.",
      darkStairs: "Escaleras de Porcelana Oscura",
      darkStairsDesc: "Instalación de peldaños en porcelana oscura con contrahuellas blancas para un contraste moderno.",
      wpcCaramel: "Panel WPC Caramel",
      wpcCaramelDesc: "Revestimiento WPC en tono caramelo con textura de porcelana natural.",
      wpcMelon: "Panel WPC Melon/Black",
      wpcMelonDesc: "Innovador diseño de panel WPC en tono Melon con base negra.",
      wpcLino: "Panel WPC Cream Lino",
      wpcLinoDesc: "Panel WPC con textura tipo lino en color crema para acabados suaves.",
      luxuryStoneTV: "Sala de Lujo con Piedra",
      luxuryStoneTVDesc: "Diseño de sala premium con revestimiento de piedra natural y chimenea integrada.",
      wpcDarkGray: "Panel WPC Dark Gray",
      wpcDarkGrayDesc: "Revestimiento WPC gris oscuro para un estilo industrial y moderno.",
      tileDisplay: "Exhibición de Cerámicas",
      tileDisplayDesc: "Variedad de cerámicas y porcelana importados disponibles en nuestra sala de exhibición.",
      wpcGray099: "Panel WPC Gray 099",
      wpcGray099Desc: "Revestimiento WPC en tono gris veteado con acabado de alta calidad.",
      stoneBedroom: "Habitación con Pared de Piedra",
      stoneBedroomDesc: "Dormitorio de lujo con pared de acento en piedra natural y diseño de iluminación cálida.",
      wpcBlack: "Panel WPC Pure Black",
      wpcBlackDesc: "Panel WPC negro sólido para un acabado elegante y minimalista.",
      lightWood: "Tablones de Porcelana Clara",
      lightWoodDesc: "Selección de tablones cerámicos tipo porcelana clara para ambientes luminosos.",
      showerGlass: "Mampara de Baño Moderna",
      showerGlassDesc: "Instalación de mamparas de vidrio templado para duchas de diseño contemporáneo.",
      showroomSamples: "Centro de Exhibición Viera",
      showroomSamplesDesc: "Explora nuestra amplia gama de muestras: grama artificial, cerámicas y porcelanas en stock.",
      deliveryTruck: "Logística y Entrega",
      deliveryTruckDesc: "Contamos con inventario propio y servicio de transporte para garantizar la entrega de tus materiales.",
      blueMarbleShower: "Ducha de Mármol Azul",
      blueMarbleShowerDesc: "Instalación de lujo con láminas de porcelana tipo mármol azul y grifería dorada.",
      polishedFloor: "Piso de Sala Pulido",
      polishedFloorDesc: "Acabado de alto brillo en sala de estar con porcelana beige de gran formato.",
      glassRailing: "Escaleras con Baranda de Vidrio",
      glassRailingDesc: "Diseño minimalista de escaleras con barandas de vidrio templado y pasamanos negro.",
      wpcChampagneWood: "Panel WPC Champagne Wood",
      wpcChampagneWoodDesc: "Elegante revestimiento WPC con textura de porcelana en tono champagne.",
      wpcBambooFlat: "Panel WPC Bamboo Flat",
      wpcBambooFlatDesc: "Panel WPC de diseño plano con textura de bambú natural.",
      largeStonePanel: "Láminas de Piedra Natural",
      largeStonePanelDesc: "Láminas de gran formato con textura de piedra natural para revestimientos de impacto.",
      calacattaSlab: "Porcelana Calacatta Premium",
      calacattaSlabDesc: "Láminas de porcelana blanco con vetas grises clásicas para un estilo atemporal.",
      luxuryDarkBathroom: "Baño de Lujo Moderno",
      luxuryDarkBathroomDesc: "Diseño de baño con porcelana oscuro y detalles dorados para un ambiente sofisticado.",
      tealMarble: "Porcelana Marmoleado Teal",
      tealMarbleDesc: "Lámina exótica de porcelana con vetas en tonos teal y azul profundo.",
      wpcRedCherry: "Panel WPC Red Cherry",
      wpcRedCherryDesc: "Panel WPC con acabado en porcelana cerezo rojizo para un toque cálido y vibrante.",
      calacattaRack: "Exhibición Calacatta",
      calacattaRackDesc: "Opciones de porcelana Calacatta disponibles en nuestro showroom.",
      calacattaDetail: "Detalle de Veteado Calacatta",
      calacattaDetailDesc: "Primer plano de la textura y acabado premium de nuestras láminas Calacatta.",
      navyBathroom: "Baño Navy & Gold",
      navyBathroomDesc: "Elegante diseño de baño con paredes en azul marino, piso blanco brillante y detalles en dorado.",
      tealMarble2: "Lámina Marmoleada Teal (Vista 2)",
      tealMarble2Desc: "Otra perspectiva de nuestra exótica lámina de porcelana marmoleado teal.",
      richWoodWPC: "Panel WPC Rich Wood",
      richWoodWPCDesc: "Revestimiento WPC con textura de porcelana profunda y rica para ambientes cálidos.",
      porcelainWarehouse: "Almacén de Porcelana",
      porcelainWarehouseDesc: "Amplio inventario de láminas de porcelana de gran formato listas para entrega.",
      blueWhiteSlabs: "Láminas Blue & White",
      blueWhiteSlabsDesc: "Selección de láminas en tonos blancos y azulados para proyectos de diseño.",
      blackBlueSlabs: "Láminas Black & Blue",
      blackBlueSlabsDesc: "Contraste elegante entre láminas de mármol negro veteado y azul profundo.",
      luxuryShowerBlack: "Ducha de Lujo Black Hex",
      luxuryShowerBlackDesc: "Instalación premium con piso hexagonal negro, paredes de porcelana blanco y grifería negra.",
    },
    // Contact Section
    contact: {
      title: "Contáctanos",
      subtitle: "¿Listo para transformar tu espacio? Contáctanos hoy mismo",
      phone: "Teléfono",
      email: "Correo",
      address: "Dirección",
      hours: "Horarios",
      schedule: "Lun - Vie: 8:00 AM - 6:00 PM",
      call: "Llamar",
      sendEmail: "Enviar Email",
      viewMap: "Ver Mapa",
      readyToStart: "¿Listo para Comenzar?",
      contactDescription: "Contáctanos hoy para una consulta gratuita y comencemos a transformar tu espacio",
      callNow: "Llamar Ahora",
      sendMessage: "Enviar Mensaje",
    },
    // Footer
    footer: {
      description: "Transformamos espacios con calidad excepcional y más de 10 años de experiencia en remodelación.",
      services: {
        title: "Servicios",
        items: ["Remodelación de Baños", "Diseño de Cocinas", "Instalación de Cerámicas", "Techos Modernos"],
      },
      contact: {
        title: "Contacto",
        phone: "+1 (347) 984-1247",
        email: "Jeffren_10@hotmail.com",
        address: "12414 stone bark trail Orlando, FL 32824",
      },
      links: {
        title: "Enlaces",
        items: ["Inicio", "Servicios", "Sobre Nosotros", "Opiniones", "Contacto"],
      },
      copyright: "© 2024 Viera Floors. Todos los derechos reservados.",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      portfolio: "Projects", // Added portfolio translation
      reviews: "Reviews",
      contact: "Contact",
      cta: "Free Consultation",
      expert: "Expert Remodeling"
    },
    // Hero Section
    hero: {
      badge: "Leading Remodeling Company",
      title: "Transform Your Space with",
      titleHighlight: "Viera Floors",
      subtitle: "Expert remodeling for bathrooms, kitchens, ceramics, and ceilings",
      description:
        "We turn your dreams into reality with over 10 years of experience in construction and remodeling. Guaranteed quality and exceptional results.",
      cta: "Free Consultation",
      ctaSecondary: "View Projects",
      modern: "Modern",
      elegant: "Elegant",
      premium: "Premium",
      unique: "Unique",
      qualityGuarantee: "Quality Guarantee",
      qualityDescription: "Premium materials and perfect finishes in every project",
      stats: {
        projects: "Completed Projects",
        experience: "Years of Experience",
        satisfaction: "Satisfaction Guaranteed",
      },
    },
    // Services Section
    services: {
      badge: "Our Services",
      title: "Premium Remodeling Services",
      subtitle: "We transform every space with high-quality materials and innovative designs",
      cta: "View More Projects",
      ctaBottom: "Can't find what you're looking for?",
      ctaBottomDesc: "We offer custom services for any remodeling project. Contact us for a free consultation.",
      requestQuote: "Request Quote",
      bathroom: {
        title: "Bathroom Remodeling",
        description: "Transform your bathroom into a relaxation oasis with modern and functional designs.",
        features: ["Custom design", "Premium materials", "Professional installation", "Extended warranty"],
        price: "From $8,000",
        duration: "2-3 weeks",
      },
      kitchen: {
        title: "Kitchen Design",
        description: "We create kitchens that combine style, functionality and the latest design trends.",
        features: ["Custom cabinets", "Quartz countertops", "Integrated appliances", "LED lighting"],
        price: "From $15,000",
        duration: "3-4 weeks",
      },
      ceramic: {
        title: "Ceramic Installation",
        description: "We install the highest quality ceramics and porcelain with perfect finishes.",
        features: ["Imported ceramics", "Unique patterns", "Expert installation", "Professional sealing"],
        price: "From $5,000",
        duration: "1-2 weeks",
      },
      materials: {
        title: "Material Sales",
        description: "We offer a wide variety of high-quality materials for your construction and remodeling projects.",
        features: ["Ceramics & Porcelain", "Construction supplies", "Specialized tools", "Expert advice"],
        price: "Competitive prices",
        duration: "Immediate availability",
      },
    },
    // About Section
    about: {
      badge: "About Us",
      title: "Over 10 Years Transforming Spaces",
      subtitle: "We are a family business dedicated to turning your dreams into reality",
      description:
        "At Viera Floors, we combine traditional craftsmanship with the most modern techniques to create unique and functional spaces. Our commitment to excellence has made us leaders in the remodeling sector.",
      mission: {
        title: "Our Mission",
        description: "Transform spaces with exceptional quality, exceeding our clients' expectations.",
      },
      vision: {
        title: "Our Vision",
        description: "To be the most trusted and recognized remodeling company in the market.",
      },
      values: {
        title: "Our Values",
        items: [
          { title: "Quality", description: "Premium materials and perfect finishes" },
          { title: "Trust", description: "Transparency in every project" },
          { title: "Innovation", description: "Cutting-edge techniques and designs" },
          { title: "Commitment", description: "Total dedication to customer satisfaction" },
        ],
      },
      stats: [
        { number: "100+", label: "Completed Projects" },
        { number: "10+", label: "Years of Experience" },
        { number: "70+", label: "Satisfied Clients" },
        { number: "100%", label: "Quality Guarantee" },
      ],
    },
    // Reviews Section
    reviews: {
      badge: "Client Reviews",
      title: "What Our Clients Say",
      subtitle: "Our clients' satisfaction is our greatest reward",
      cta: "View More Testimonials",
      testimonials: [
        {
          name: "Maria Gonzalez",
          role: "Homeowner",
          rating: 5,
          text: "Viera Floors completely transformed my kitchen. The work was impeccable and the team very professional. Highly recommended!",
          image: "/client-maria.jpg",
        },
        {
          name: "Carlos Rodriguez",
          role: "Business Owner",
          rating: 5,
          text: "Excellent service in remodeling my bathroom. They met the deadlines and the quality exceeded my expectations.",
          image: "/client-carlos.jpg",
        },
        {
          name: "Ana Martinez",
          role: "Architect",
          rating: 5,
          text: "As a professional in the sector, I can say that Viera Floors has an exceptional level of quality. Impeccable work.",
          image: "/client-ana.jpg",
        },
        {
          name: "Roberto Silva",
          role: "Engineer",
          rating: 5,
          text: "The ceramic installation was perfect. Incredible attention to detail and first-class finishes.",
          image: "/client-roberto.jpg",
        },
      ],
    },
    // Portfolio Section
    portfolio: {
      title: "Our Projects",
      subtitle: "Discover the quality and creativity in each of our remodeling works",
      backToHome: "Back to Home",
      home: "Home",
      projectsFound: "projects found",
      searchPlaceholder: "Search projects...",
      filterBy: "Filter by:",
      filterAll: "All",
      filterBathroom: "Bathrooms",
      filterKitchen: "Kitchens",
      filterCeramic: "Ceramics",
      filterRoof: "Roofs",
      filterMaterial: "Materials Sales",
      client: "Client",
      duration: "Duration",
      viewDetails: "View Details",
      noResults: "No projects found",
      noResultsDesc: "Try different search terms or filters",
      clearFilters: "Clear Filters",
      lang: "en",
      // Project descriptions
      modernBathroom: "Modern Spa Bathroom",
      modernBathroomDesc: "Complete remodel with luxury finishes and contemporary design",
      gourmetKitchen: "Gourmet Kitchen",
      gourmetKitchenDesc: "Modern kitchen with high-end appliances and functional design",
      ceramicInstallation: "Premium Ceramic Installation",
      ceramicInstallationDesc: "Professional installation of imported ceramics with unique patterns",
      roofRenovation: "Roof Renovation",
      roofRenovationDesc: "Modern roofs with resistant materials and architectural design",
      luxuryBathroom: "Luxury Bathroom",
      luxuryBathroomDesc: "Complete transformation with premium materials and perfect finishes",
      modernKitchen: "Modern Kitchen",
      modernKitchenDesc: "Contemporary design with custom cabinets and quartz countertops",
      premiumMaterials: "Premium Construction Materials",
      premiumMaterialsDesc: "Wide catalog of high quality materials for your projects",
      ceramicTilesSale: "Ceramics and Porcelain for Sale",
      ceramicTilesSaleDesc: "Direct sale of imported ceramics at the best price",
      chevronFloor: "Chevron Wood Flooring",
      chevronFloorDesc: "High-precision ceramic floor installation with a wood-look chevron pattern.",
      blueWall: "Blue Herringbone Wall",
      blueWallDesc: "Elegant wall cladding with blue ceramics in a herringbone pattern for modern spaces.",
      marbleSlab: "Premium Marble Slab",
      marbleSlabDesc: "Large format porcelain with a marble finish for luxury results.",
      wpcAlaska: "Alaska Gray WPC Panel",
      wpcAlaskaDesc: "Durable and stylish WPC cladding panels for contemporary interiors.",
      stoneWall: "Natural Stone Wall",
      stoneWallDesc: "Wall cladding with natural stone texture for a rustic and modern atmosphere.",
      wpcChampagne: "Champagne/Black WPC Panel",
      wpcChampagneDesc: "Elegant WPC panel in champagne tone with black accents.",
      porcelainWhite: "Polished White Porcelain",
      porcelainWhiteDesc: "White porcelain slab with subtle veins for a clean and bright finish.",
      darkStairs: "Dark Wood Stairs",
      darkStairsDesc: "Installation of dark wood steps with white risers for a modern contrast.",
      wpcCaramel: "Caramel WPC Panel",
      wpcCaramelDesc: "WPC cladding in caramel tone with natural wood texture.",
      wpcMelon: "Melon/Black WPC Panel",
      wpcMelonDesc: "Innovative WPC panel design in Melon tone with black base.",
      wpcLino: "Cream Lino WPC Panel",
      wpcLinoDesc: "WPC panel with cream linen-like texture for soft finishes.",
      luxuryStoneTV: "Luxury Living Room with Stone",
      luxuryStoneTVDesc: "Premium living room design with natural stone cladding and integrated fireplace.",
      wpcDarkGray: "Dark Gray WPC Panel",
      wpcDarkGrayDesc: "Dark gray WPC cladding for an industrial and modern style.",
      tileDisplay: "Ceramic Tile Display",
      tileDisplayDesc: "Variety of imported ceramics and porcelain available in our showroom.",
      wpcGray099: "Gray 099 WPC Panel",
      wpcGray099Desc: "WPC cladding in grained gray tone with high-quality finish.",
      stoneBedroom: "Bedroom with Stone Wall",
      stoneBedroomDesc: "Luxury bedroom with natural stone accent wall and warm lighting design.",
      wpcBlack: "Pure Black WPC Panel",
      wpcBlackDesc: "Solid black WPC panel for an elegant and minimalist finish.",
      lightWood: "Light Wood Planks",
      lightWoodDesc: "Selection of light wood-look ceramic planks for bright environments.",
      showerGlass: "Modern Shower Glass",
      showerGlassDesc: "Installation of tempered glass partitions for contemporary shower designs.",
      showroomSamples: "Viera Showroom Center",
      showroomSamplesDesc: "Explore our wide range of samples: artificial grass, ceramics, and wood in stock.",
      deliveryTruck: "Logistics and Delivery",
      deliveryTruckDesc: "We have our own inventory and transport service to guarantee the delivery of your materials.",
      blueMarbleShower: "Blue Marble Shower",
      blueMarbleShowerDesc: "Luxury installation with blue marble-look porcelain slabs and gold fixtures.",
      polishedFloor: "Polished Living Room Floor",
      polishedFloorDesc: "High-gloss finish in living room with large format beige porcelain.",
      glassRailing: "Stairs with Glass Railing",
      glassRailingDesc: "Minimalist stair design with tempered glass railings and black handrail.",
      wpcChampagneWood: "Champagne Wood WPC Panel",
      wpcChampagneWoodDesc: "Elegant WPC cladding with wood texture in champagne tone.",
      wpcBambooFlat: "Bamboo Flat WPC Panel",
      wpcBambooFlatDesc: "Flat design WPC panel with natural bamboo texture.",
      largeStonePanel: "Natural Stone Slabs",
      largeStonePanelDesc: "Large format slabs with natural stone texture for impactful cladding.",
      calacattaSlab: "Premium Calacatta Porcelain",
      calacattaSlabDesc: "White porcelain slabs with classic gray veins for a timeless style.",
      luxuryDarkBathroom: "Modern Luxury Bathroom",
      luxuryDarkBathroomDesc: "Bathroom design with dark porcelain and gold details for a sophisticated atmosphere.",
      tealMarble: "Teal Marbled Porcelain",
      tealMarbleDesc: "Exotic porcelain slab with veins in teal and deep blue tones.",
      wpcRedCherry: "Red Cherry WPC Panel",
      wpcRedCherryDesc: "WPC panel with red cherry wood finish for a warm and vibrant touch.",
      calacattaRack: "Calacatta Display",
      calacattaRackDesc: "Calacatta porcelain options available in our showroom.",
      calacattaDetail: "Calacatta Vein Detail",
      calacattaDetailDesc: "Close-up of the premium texture and finish of our Calacatta slabs.",
      navyBathroom: "Navy & Gold Bathroom",
      navyBathroomDesc: "Elegant bathroom design with navy blue walls, glossy white floor, and gold accents.",
      tealMarble2: "Teal Marbled Slab (View 2)",
      tealMarble2Desc: "Another perspective of our exotic teal marbled porcelain slab.",
      richWoodWPC: "Rich Wood WPC Panel",
      richWoodWPCDesc: "WPC cladding with deep, rich wood texture for warm atmospheres.",
      porcelainWarehouse: "Porcelain Warehouse",
      porcelainWarehouseDesc: "Large inventory of large-format porcelain slabs ready for delivery.",
      blueWhiteSlabs: "Blue & White Slabs",
      blueWhiteSlabsDesc: "Selection of slabs in white and bluish tones for design projects.",
      blackBlueSlabs: "Black & Blue Slabs",
      blackBlueSlabsDesc: "Elegant contrast between black veined and deep blue marble slabs.",
      luxuryShowerBlack: "Black Hex Luxury Shower",
      luxuryShowerBlackDesc: "Premium installation with black hexagonal floor, white porcelain walls, and black fixtures.",
    },
    // Contact Section
    contact: {
      title: "Contact Us",
      subtitle: "Ready to transform your space? Contact us today",
      phone: "Phone",
      email: "Email",
      address: "Address",
      hours: "Hours",
      schedule: "Mon - Fri: 8:00 AM - 6:00 PM",
      call: "Call",
      sendEmail: "Send Email",
      viewMap: "View Map",
      readyToStart: "Ready to Start?",
      contactDescription: "Contact us today for a free consultation and let's start transforming your space",
      callNow: "Call Now",
      sendMessage: "Send Message",
    },
    // Footer
    footer: {
      description: "We transform spaces with exceptional quality and over 10 years of experience in remodeling.",
      services: {
        title: "Services",
        items: ["Bathroom Remodeling", "Kitchen Design", "Ceramic Installation", "Modern Ceilings"],
      },
      contact: {
        title: "Contact",
        phone: "+1 (347) 984-1247",
        email: "Jeffren_10@hotmail.com",
        address: "12414 stone bark trail Orlando, FL 32824",
      },
      links: {
        title: "Links",
        items: ["Home", "Services", "About Us", "Reviews", "Contact"],
      },
      copyright: "© 2024 Viera Floors. All rights reserved.",
    },
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("en")

  // Load language from localStorage on mount
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem("viera-floors-lang") as Language | null
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  const setLanguage = React.useCallback((newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem("viera-floors-lang", newLanguage)
  }, [])

  // Translation function
  const t = React.useCallback(
    (key: string, section?: string) => {
      const keys = section ? `${section}.${key}` : key
      const keyPath = keys.split(".")
      let value: any = translations[language]

      for (const k of keyPath) {
        value = value?.[k]
      }

      return value || key
    },
    [language],
  )

  const value = React.useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, setLanguage, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
