"use client"

import * as React from "react"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {

  const { t } = useLanguage()

  const itemsServices = [
    t("items.0", "footer.services"),
    t("items.1", "footer.services"),
    t("items.2", "footer.services"),
    t("items.3", "footer.services"),
  ]

    const itemsLinks = [
    t("items.0", "footer.links"),
    t("items.1", "footer.links"),
    t("items.2", "footer.links"),
    t("items.3", "footer.links"),
    t("items.4", "footer.links"),
  ]

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-muted-foreground text-sm leading-relaxed">{ t('description', 'footer') }</p>
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
            <h3 className="font-bold text-lg">{ t('title', 'footer.services') }</h3>
            <ul className="space-y-2">
              {itemsServices.map((item, index) => (
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
            <h3 className="font-bold text-lg">{ t('title', 'footer.contact') }</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">{ t('phone', 'footer.contact') }</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">{ t('email', 'footer.contact') }</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">{ t('address', 'footer.contact') }</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{ t('title', 'footer.links') }</h3>
            <ul className="space-y-2">
              {itemsLinks.map((item, index) => (
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
          <p className="text-muted-foreground text-sm">{ t('copyright', 'footer') }</p>
        </div>
      </div>
    </footer>
  )
}
