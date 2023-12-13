import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { GoogleAnalytics } from "@/components/google-analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { Logo } from "@/components/logo"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ByteSpring",
  description: "A blog for software engineering, career development and project management topics",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics/>
        <link rel="canonical" href="https://www.bytespring.io/" />
      </head>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <div>
                  <Logo/>
                </div>
                <div className="flex items-center justify-between">
                  <nav className="ml-auto text-sm font-medium space-x-6">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                  </nav>
                  <div className="pl-4">
                    <ModeToggle/>
                  </div>
                </div>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
