"use client"

import * as React from "react"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  const [language, setLanguage] = React.useState<"es" | "en">("es")

  React.useEffect(() => {
    const savedLang = localStorage.getItem("viera-floors-lang") as "es" | "en" | null
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  const content = {
    es: {
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
    en: {
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
  }

  const currentContent = content[language]

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-muted-foreground text-sm leading-relaxed">{currentContent.description}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{currentContent.services.title}</h3>
            <ul className="space-y-2">
              {currentContent.services.items.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{currentContent.contact.title}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">{currentContent.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">{currentContent.contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">{currentContent.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{currentContent.links.title}</h3>
            <ul className="space-y-2">
              {currentContent.links.items.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">{currentContent.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
