"use client"

import * as React from "react"
import { Home, Hammer, Sparkles, Bath } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export function ServiceHighlights() {
    const { t } = useLanguage()

    const highlights = [
        {
            icon: Bath,
            title: t("bathroom.title", "services"),
            subtitle: t("modern", "hero"),
            color: "bg-primary",
        },
        {
            icon: Hammer,
            title: t("kitchen.title", "services"),
            subtitle: t("elegant", "hero"),
            color: "bg-secondary",
        },
        {
            icon: Sparkles,
            title: t("ceramic.title", "services"),
            subtitle: t("premium", "hero"),
            color: "bg-primary",
        },
        {
            icon: Home,
            title: t("ceiling.title", "services"),
            subtitle: t("unique", "hero"),
            color: "bg-secondary",
        },
    ]

    return (
        <section className="py-12 bg-muted/30 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="p-6 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm lg:text-base">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
                <div className="mt-12 text-center max-w-2xl mx-auto p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
                    <Sparkles className="w-6 h-6 text-primary mx-auto mb-2 animate-pulse" />
                    <h3 className="font-bold text-lg mb-1">{t("qualityGuarantee", "hero")}</h3>
                    <p className="text-sm text-muted-foreground">{t("qualityDescription", "hero")}</p>
                </div>
            </div>
        </section>
    )
}
