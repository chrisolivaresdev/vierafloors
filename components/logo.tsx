import Image from "next/image"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-16 w-auto",
    md: "h-20 w-auto",
    lg: "h-28 w-auto",
  }

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Viera Floors Logo"
        width={300}
        height={100}
        className={`${sizeClasses[size]} object-contain`}
        priority
      />
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
      <Image
        src="/logo.png"
        alt="Viera Floors Logo Icon"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}
