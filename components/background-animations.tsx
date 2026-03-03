"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function BackgroundAnimations() {
    const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 })

    React.useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight })
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    if (windowSize.width === 0) return null

    // Geometric shapes representing tiles/construction
    const shapes = [
        { type: "rect", size: 60, left: "10%", top: "20%", duration: 25, delay: 0 },
        { type: "diamond", size: 50, left: "85%", top: "15%", duration: 30, delay: 2 },
        { type: "rect", size: 80, left: "75%", top: "80%", duration: 35, delay: 5 },
        { type: "diamond", size: 45, left: "5%", top: "70%", duration: 24, delay: 8 },
        { type: "rect", size: 55, left: "45%", top: "90%", duration: 40, delay: 3 },
        { type: "diamond", size: 70, left: "90%", top: "50%", duration: 28, delay: 6 },
        { type: "outline", size: 100, left: "15%", top: "40%", duration: 32, delay: 4 },
    ]

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40 dark:opacity-20 translate-z-0">
            {shapes.map((shape, i) => (
                <motion.div
                    key={i}
                    initial={{
                        opacity: 0,
                        scale: 0.8
                    }}
                    animate={{
                        y: [0, 50, 0],
                        rotate: [0, 180, 360],
                        opacity: [0.4, 0.8, 0.4],
                        scale: [0.8, 1.1, 0.8],
                    }}
                    transition={{
                        duration: shape.duration,
                        repeat: Infinity,
                        delay: shape.delay,
                        ease: "easeInOut",
                    }}
                    className="absolute"
                    style={{
                        width: shape.size,
                        height: shape.size,
                        left: shape.left,
                        top: shape.top,
                    }}
                >
                    {shape.type === "rect" ? (
                        <div className="w-full h-full border-4 border-primary/40 rounded-sm shadow-[0_0_20px_rgba(var(--primary),0.2)]" />
                    ) : shape.type === "diamond" ? (
                        <div
                            className="w-full h-full border-4 border-secondary/40 rounded-sm shadow-[0_0_20px_rgba(var(--secondary),0.2)]"
                            style={{ transform: "rotate(45deg)" }}
                        />
                    ) : (
                        <div className="w-full h-full relative">
                            <div className="absolute inset-0 border-2 border-primary/30 rounded-lg" />
                            <div className="absolute inset-4 border-2 border-secondary/20 rounded-lg rotate-45" />
                        </div>
                    )}
                </motion.div>
            ))}

            {/* Floating Light Rays - Enhanced */}
            <motion.div
                animate={{
                    opacity: [0.2, 0.5, 0.2],
                    x: ["-20%", "20%", "-20%"],
                    rotate: [12, 15, 12],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none skew-x-12"
            />
        </div>
    )
}

