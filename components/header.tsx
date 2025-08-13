"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function Header() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = React.useState(false)

  const navigation = [
    { name: t("home", "nav"), href: "#inicio" },
    { name: t("services", "nav"), href: "#servicios" },
    { name: t("about", "nav"), href: "#sobre-nosotros" },
    { name: t("reviews", "nav"), href: "#opiniones" },
    { name: t("contact", "nav"), href: "#contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-background/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo size="sm" className="animate-fade-in-scale" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <React.Fragment key={item.name}>
                {item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105">
              <a href="#contacto">{t("cta", "nav")}</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 h-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  <Link href="/">
                    <Logo size="md" />
                  </Link>
                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <React.Fragment key={item.name}>
                        {item.href.startsWith("/") ? (
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 py-2"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 py-2"
                          >
                            {item.name}
                          </a>
                        )}
                      </React.Fragment>
                    ))}
                  </nav>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 mt-6">
                    <a href="#contacto">{t("cta", "nav")}</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
