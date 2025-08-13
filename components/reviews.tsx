"use client"

import * as React from "react"
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function Reviews() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const testimonials = [
    {
      name: t("testimonials.0.name", "reviews"),
      role: t("testimonials.0.role", "reviews"),
      rating: 5,
      text: t("testimonials.0.text", "reviews"),
      image: "/professional-woman-smiling-headshot.png",
    },
    {
      name: t("testimonials.1.name", "reviews"),
      role: t("testimonials.1.role", "reviews"),
      rating: 5,
      text: t("testimonials.1.text", "reviews"),
      image: "/professional-man-smiling-headshot.png",
    },
    {
      name: t("testimonials.2.name", "reviews"),
      role: t("testimonials.2.role", "reviews"),
      rating: 5,
      text: t("testimonials.2.text", "reviews"),
      image: "/smiling-architect.png",
    },
    {
      name: t("testimonials.3.name", "reviews"),
      role: t("testimonials.3.role", "reviews"),
      rating: 5,
      text: t("testimonials.3.text", "reviews"),
      image: "/smiling-engineer.png",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  React.useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="opiniones" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            <Star className="w-4 h-4 mr-2" />
            {t("badge", "reviews")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("title", "reviews")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("subtitle", "reviews")}</p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="relative overflow-hidden border-2 border-primary/20 shadow-2xl animate-fade-in-scale">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl sm:text-2xl font-medium text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="text-left">
                    <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in-scale ${
                index === currentIndex ? "border-2 border-primary shadow-lg scale-105" : "hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="text-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mx-auto mb-3 border-2 border-primary/20"
                />
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <h4 className="font-bold text-sm mb-1">{testimonial.name}</h4>
                <p className="text-xs text-muted-foreground mb-3">{testimonial.role}</p>
                <p className="text-xs text-muted-foreground line-clamp-3">{testimonial.text}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-scale" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {t("cta", "reviews")}
          </Button>
        </div>
      </div>
    </section>
  )
}
