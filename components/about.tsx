"use client"
import { Award, Target, Eye, Heart, Users, Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export function About() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Award,
      title: t("items.0.title", "about.values"),
      description: t("items.0.description", "about.values"),
      color: "primary",
    },
    {
      icon: Users,
      title: t("items.1.title", "about.values"),
      description: t("items.1.description", "about.values"),
      color: "secondary",
    },
    {
      icon: Star,
      title: t("items.2.title", "about.values"),
      description: t("items.2.description", "about.values"),
      color: "primary",
    },
    {
      icon: Heart,
      title: t("items.3.title", "about.values"),
      description: t("items.3.description", "about.values"),
      color: "secondary",
    },
  ]

  const stats = [
    { number: "100+", label: t("0.label", "about.stats") },
    { number: "10+", label: t("1.label", "about.stats") },
    { number: "70+", label: t("2.label", "about.stats") },
    { number: "100%", label: t("3.label", "about.stats") },
  ]

  return (
    <section id="sobre-nosotros" className="py-20 bg-gradient-to-br from-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-primary text-primary">
            <Target className="w-4 h-4 mr-2" />
            {t("badge", "about")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("title", "about")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("subtitle", "about")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-scale">
            <p className="text-lg text-muted-foreground leading-relaxed">{t("description", "about")}</p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-primary bg-primary/5 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("mission.title", "about")}</h3>
                    <p className="text-muted-foreground">{t("mission.description", "about")}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-secondary bg-secondary/5 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("vision.title", "about")}</h3>
                    <p className="text-muted-foreground">{t("vision.description", "about")}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fade-in-scale" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-square relative overflow-hidden rounded-2xl">
              <img src="/modern-home-renovation-team.png" alt="Viera Floors Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center animate-bounce"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float"></div>
            <div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">{t("values.title", "about")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-scale group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      value.color === "primary"
                        ? "bg-primary/10 group-hover:bg-primary"
                        : "bg-secondary/10 group-hover:bg-secondary"
                    } transition-colors duration-300`}
                  >
                    <IconComponent
                      className={`w-8 h-8 ${
                        value.color === "primary"
                          ? "text-primary group-hover:text-primary-foreground"
                          : "text-secondary group-hover:text-secondary-foreground"
                      } transition-colors duration-300`}
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
