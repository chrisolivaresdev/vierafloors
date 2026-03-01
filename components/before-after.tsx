"use client"

import { Sparkles, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function BeforeAfter() {
    const { t } = useLanguage()

    const transformations = [
        {
            id: 1,
            before: "/projects/before_after/before_1.jpg",
            after: "/projects/before_after/after_2.jpg",
        },
        {
            id: 2,
            before: "/projects/before_after/before_3.jpg",
            after: "/projects/before_after/after_3.jpg",
        },
        {
            id: 3,
            before: "/projects/before_after/before_4.jpg",
            after: "/projects/before_after/after_1.jpg",
        },
    ]

    return (
        <section id="transformaciones" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-slide-in-up">
                    <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-primary text-primary">
                        <Sparkles className="w-4 h-4 mr-2" />
                        {t("badge", "beforeAfter")}
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {t("title", "beforeAfter")}
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {t("subtitle", "beforeAfter")}
                    </p>
                </div>

                <div className="space-y-16">
                    {transformations.map((item, index) => (
                        <div key={item.id} className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto animate-fade-in-scale" style={{ animationDelay: `${index * 0.2}s` }}>
                            {/* Before image */}
                            <Card className="relative overflow-hidden border-2 border-muted group rounded-2xl h-[300px] sm:h-[400px]">
                                <div className="absolute top-4 left-4 z-10">
                                    <Badge variant="secondary" className="bg-black/70 text-white backdrop-blur-md border-none px-4 py-1.5 text-sm font-semibold tracking-wide shadow-lg">
                                        {t("before", "beforeAfter")}
                                    </Badge>
                                </div>
                                <Image src={item.before} alt="Before" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                            </Card>

                            {/* After image */}
                            <Card className="relative overflow-hidden border-2 border-primary/40 shadow-2xl group rounded-2xl h-[300px] sm:h-[400px]">
                                <div className="absolute top-4 right-4 z-10">
                                    <Badge className="bg-primary hover:bg-primary text-primary-foreground backdrop-blur-md border-none px-4 py-1.5 text-sm font-semibold tracking-wide shadow-lg flex items-center gap-2">
                                        <Sparkles className="w-3.5 h-3.5" />
                                        {t("after", "beforeAfter")}
                                    </Badge>
                                </div>
                                <Image src={item.after} alt="After" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
