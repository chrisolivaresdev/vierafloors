"use client"

import * as React from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string, section?: string) => string
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
        description: "Instalamos cerámicas y porcelanatos de la más alta calidad con acabados perfectos.",
        features: ["Cerámicas importadas", "Patrones únicos", "Instalación experta", "Sellado profesional"],
        price: "Desde $5,000",
        duration: "1-2 semanas",
      },
      ceiling: {
        title: "Techos Modernos",
        description: "Diseñamos e instalamos techos que añaden elegancia y valor a tu propiedad.",
        features: ["Diseños arquitectónicos", "Materiales resistentes", "Aislamiento térmico", "Acabados únicos"],
        price: "Desde $6,000",
        duration: "1-2 semanas",
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
        { number: "500+", label: "Proyectos Completados" },
        { number: "10+", label: "Años de Experiencia" },
        { number: "50+", label: "Clientes Satisfechos" },
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
      client: "Cliente",
      duration: "Duración",
      viewDetails: "Ver Detalles",
      noResults: "No se encontraron proyectos",
      noResultsDesc: "Intenta con diferentes términos de búsqueda o filtros",
      clearFilters: "Limpiar Filtros",
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
        phone: "+1 (555) 123-4567",
        email: "info@vierafloors.com",
        address: "123 Construction Ave, Miami, FL",
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
      ceiling: {
        title: "Modern Ceilings",
        description: "We design and install ceilings that add elegance and value to your property.",
        features: ["Architectural designs", "Resistant materials", "Thermal insulation", "Unique finishes"],
        price: "From $6,000",
        duration: "1-2 weeks",
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
        { number: "500+", label: "Completed Projects" },
        { number: "10+", label: "Years of Experience" },
        { number: "50+", label: "Satisfied Clients" },
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
      client: "Client",
      duration: "Duration",
      viewDetails: "View Details",
      noResults: "No projects found",
      noResultsDesc: "Try different search terms or filters",
      clearFilters: "Clear Filters",
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
        phone: "+1 (555) 123-4567",
        email: "info@vierafloors.com",
        address: "123 Construction Ave, Miami, FL",
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
  const [language, setLanguageState] = React.useState<Language>("es")

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
