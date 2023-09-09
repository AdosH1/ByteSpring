"use client"

import { useTheme } from "next-themes"
import Link from "next/link"
import "./../app/globals.css"

export function Logo() {
  const { theme } = useTheme()

  return (
    <Link href="/">
      <img className="object-contain" width="50%" 
              src={theme === "dark" ? 
              "./../logo/bytespring-full-dark.png" 
              : "./../logo/bytespring-full.png"}/>
    </Link>
  )
}
