"use client"

import { useTheme } from "next-themes"
import Link from "next/link"

export function Logo() {
  const { theme } = useTheme()

  return (
    <Link href="/">
        <img className="object-contain" width="50%" 
            src={theme === "dark" ? 
            "./../page/bytespring-logo-dark.png" 
            : "./../page/bytespring-logo.png"}/>
    </Link>
  )
}
