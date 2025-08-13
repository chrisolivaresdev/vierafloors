"use client"
import { ArrowRight, Hammer, Home, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function Hero() {
  const { t } = useLanguage()

  const stats = [
    { number: "500+", label: t("projects", "hero.stats") },
    { number: "10+", label: t("experience", "hero.stats") },
    { number: "100%", label: t("satisfaction", "hero.stats") },
  ]

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 dark:bg-secondary/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-primary/20 dark:bg-primary/30 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 dark:bg-secondary/20 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rotate-45 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary rotate-45 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rotate-45 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium animate-fade-in-scale">
              <Star className="w-4 h-4" />
              {t("badge", "hero")}
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">{t("title", "hero")}</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
                  {t("titleHighlight", "hero")}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium">{t("subtitle", "hero")}</p>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">{t("description", "hero")}</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <a href="#contacto" className="flex items-center">
                  {t("cta", "hero")}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Link href="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  {t("ctaSecondary", "hero")}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative animate-fade-in-scale" style={{ animationDelay: "0.3s" }}>
            <Card className="p-8 bg-card/80 dark:bg-card/90 backdrop-blur-sm border-2 border-primary/20 dark:border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-primary/10 dark:bg-primary/20 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-300">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Home className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t("bathroom.title", "services")}</div>
                      <div className="text-xs text-muted-foreground">{t("modern", "hero")}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-secondary/10 dark:bg-secondary/20 rounded-lg hover:bg-secondary/20 dark:hover:bg-secondary/30 transition-colors duration-300">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <Hammer className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t("kitchen.title", "services")}</div>
                      <div className="text-xs text-muted-foreground">{t("elegant", "hero")}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-primary/10 dark:bg-primary/20 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-300">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t("ceramic.title", "services")}</div>
                      <div className="text-xs text-muted-foreground">{t("premium", "hero")}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-secondary/10 dark:bg-secondary/20 rounded-lg hover:bg-secondary/20 dark:hover:bg-secondary/30 transition-colors duration-300">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <Home className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t("ceiling.title", "services")}</div>
                      <div className="text-xs text-muted-foreground">{t("unique", "hero")}</div>
                    </div>
                  </div>
                </div>

                <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl">
                  <Sparkles className="w-8 h-8 text-primary mx-auto mb-3 animate-pulse" />
                  <h3 className="font-bold text-lg mb-2">{t("qualityGuarantee", "hero")}</h3>
                  <p className="text-sm text-muted-foreground">{t("qualityDescription", "hero")}</p>
                </div>
              </div>
            </Card>

            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
            <div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 fill-primary/5 dark:fill-primary/10"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  )
}
