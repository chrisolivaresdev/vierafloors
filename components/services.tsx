"use client"

import * as React from "react"
import { ArrowRight, Bath, ChefHat, Layers, Home, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function Services() {
  const { t } = useLanguage()
  const [hoveredService, setHoveredService] = React.useState<number | null>(null)

  const services = [
    {
      icon: Bath,
      title: t("bathroom.title", "services"),
      description: t("bathroom.description", "services"),
      features: t("bathroom.features", "services") as string[],
      price: t("bathroom.price", "services"),
      duration: t("bathroom.duration", "services"),
      image: "/modern-bathroom-remodel.png",
    },
    {
      icon: ChefHat,
      title: t("kitchen.title", "services"),
      description: t("kitchen.description", "services"),
      features: t("kitchen.features", "services") as string[],
      price: t("kitchen.price", "services"),
      duration: t("kitchen.duration", "services"),
      image: "/modern-kitchen.png",
    },
    {
      icon: Layers,
      title: t("ceramic.title", "services"),
      description: t("ceramic.description", "services"),
      features: t("ceramic.features", "services") as string[],
      price: t("ceramic.price", "services"),
      duration: t("ceramic.duration", "services"),
      image: "/placeholder-g37as.png",
    },
    {
      icon: Home,
      title: t("ceiling.title", "services"),
      description: t("ceiling.description", "services"),
      features: t("ceiling.features", "services") as string[],
      price: t("ceiling.price", "services"),
      duration: t("ceiling.duration", "services"),
      image: "/placeholder-1rq8v.png",
    },
  ]

  return (
    <section
      id="servicios"
      className="py-20 bg-gradient-to-br from-background via-primary/5 to-background dark:via-primary/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            <Star className="w-4 h-4 mr-2" />
            {t("badge", "services")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("title", "services")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("subtitle", "services")}</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`group overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer animate-fade-in-scale ${
                  hoveredService === index
                    ? "border-primary shadow-2xl scale-105"
                    : "border-border hover:border-primary/50 dark:hover:border-primary/70"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative overflow-hidden">
                  {/* Service Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-sm text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {service.price}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Service Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{service.duration}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
                          style={{ transitionDelay: `${featureIndex * 100 + 200}ms` }}
                        >
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 font-semibold bg-transparent"
                    >
                      <a href="#contacto" className="flex items-center justify-center w-full">
                        {t("requestQuote", "services")}
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-scale" style={{ animationDelay: "0.6s" }}>
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 dark:from-primary/20 dark:via-secondary/20 dark:to-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">{t("ctaBottom", "services")}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{t("ctaBottomDesc", "services")}</p>
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                {t("cta", "services")}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
