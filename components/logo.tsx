import { useLanguage } from "@/contexts/language-context"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

const RemodelingSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Geometric Home / Building Outline */}
    <path d="M24 4L4 18V44H18V30H30V44H44V18L24 4Z" fill="url(#brandGradient)" opacity="0.9" />

    {/* Decorative Interior lines (floors/tiles) */}
    <path d="M12 28L24 20L36 28M12 34L24 26L36 34M12 40L24 32L36 40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Roof/Ceiling accent */}
    <path d="M24 8L8 19V20L24 9L40 20V19L24 8Z" fill="white" opacity="0.8" />

    <defs>
      <linearGradient id="brandGradient" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="currentColor" className="text-secondary" />
        <stop offset="1" stopColor="currentColor" className="text-primary" />
      </linearGradient>
    </defs>
  </svg>
)

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-20 w-20",
  }

  const { t } = useLanguage()

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <RemodelingSVG className={sizeClasses[size]} />
      <div className="flex flex-col">
        <span
          className={`font-bold text-foreground leading-tight ${size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl"}`}
        >
          Viera Floors
        </span>
        <span className={`text-muted-foreground leading-tight ${size === "sm" ? "text-xs" : "text-sm"}`}>{t('expert', 'nav')}</span>
      </div>
    </div>
  )
}

export function LogoIcon({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-20 w-20",
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <RemodelingSVG className="w-full h-full" />
    </div>
  )
}
