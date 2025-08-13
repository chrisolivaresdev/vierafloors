interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Background circle with gradient */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" className="text-primary" />
              <stop offset="100%" stopColor="currentColor" className="text-secondary" />
            </linearGradient>
          </defs>

          {/* Main circle background */}
          <circle cx="24" cy="24" r="22" fill="url(#logoGradient)" />

          {/* Construction/Floor pattern */}
          <rect x="8" y="20" width="32" height="3" fill="white" opacity="0.9" />
          <rect x="8" y="25" width="32" height="3" fill="white" opacity="0.7" />
          <rect x="8" y="30" width="32" height="3" fill="white" opacity="0.5" />

          {/* VF Letters */}
          <text
            x="24"
            y="18"
            textAnchor="middle"
            className="fill-white font-bold text-sm"
            style={{ fontSize: "14px", fontFamily: "DM Sans, sans-serif" }}
          >
            VF
          </text>

          {/* Tool icon (hammer) */}
          <path d="M16 12L20 8L22 10L18 14L16 12Z" fill="white" opacity="0.8" />
          <rect x="19" y="11" width="2" height="8" fill="white" opacity="0.8" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-bold text-foreground ${size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl"}`}
        >
          Viera Floors
        </span>
        <span className={`text-muted-foreground ${size === "sm" ? "text-xs" : "text-sm"}`}>Expert Remodeling</span>
      </div>
    </div>
  )
}

export function LogoIcon({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="logoIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" className="text-primary" />
            <stop offset="100%" stopColor="currentColor" className="text-secondary" />
          </linearGradient>
        </defs>

        <circle cx="24" cy="24" r="22" fill="url(#logoIconGradient)" />

        <rect x="8" y="20" width="32" height="3" fill="white" opacity="0.9" />
        <rect x="8" y="25" width="32" height="3" fill="white" opacity="0.7" />
        <rect x="8" y="30" width="32" height="3" fill="white" opacity="0.5" />

        <text
          x="24"
          y="18"
          textAnchor="middle"
          className="fill-white font-bold"
          style={{ fontSize: "14px", fontFamily: "DM Sans, sans-serif" }}
        >
          VF
        </text>

        <path d="M16 12L20 8L22 10L18 14L16 12Z" fill="white" opacity="0.8" />
        <rect x="19" y="11" width="2" height="8" fill="white" opacity="0.8" />
      </svg>
    </div>
  )
}
