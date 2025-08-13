"use client"

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export function Contact() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Phone,
      title: t("phone", "contact"),
      value: "+1 (555) 123-4567",
      color: "text-primary",
      bgColor: "bg-primary/10",
      action: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: t("email", "contact"),
      value: "info@vierafloors.com",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      action: "mailto:info@vierafloors.com",
    },
    {
      icon: MapPin,
      title: t("address", "contact"),
      value: "123 Construction Ave, Miami, FL 33101",
      color: "text-primary",
      bgColor: "bg-primary/10",
      action: "https://maps.google.com/?q=123+Construction+Ave,+Miami,+FL+33101",
    },
    {
      icon: Clock,
      title: t("hours", "contact"),
      value: t("schedule", "contact"),
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      action: null,
    },
  ]

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5 dark:from-background dark:via-primary/10 dark:to-secondary/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("title", "contact")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("subtitle", "contact")}</p>
        </motion.div>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 dark:bg-card/30 h-full">
                <CardContent className="p-6 text-center flex flex-col justify-between min-h-[200px]">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-16 h-16 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className={`w-8 h-8 ${info.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{info.value}</p>
                  </div>
                  {info.action && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10"
                      onClick={() => window.open(info.action, info.action.startsWith("http") ? "_blank" : "_self")}
                    >
                      {info.icon === Phone && t("call", "contact")}
                      {info.icon === Mail && t("sendEmail", "contact")}
                      {info.icon === MapPin && t("viewMap", "contact")}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/20 dark:from-primary/20 dark:via-secondary/20 dark:to-primary/20">
            <CardContent className="p-8">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">{t("readyToStart", "contact")}</h3>
              <p className="text-muted-foreground mb-6">{t("contactDescription", "contact")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("tel:+15551234567")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {t("callNow", "contact")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105 bg-transparent"
                  onClick={() => window.open("mailto:info@vierafloors.com")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {t("sendMessage", "contact")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
