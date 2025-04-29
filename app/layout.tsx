"use client"

import { useEffect, useState } from "react"
import { Lora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"

const inter = Lora({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <html lang="es" className="light">
      <body className={inter.className}>
        {isHydrated && (
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <CookieConsent />
          </ThemeProvider>
        )}
      </body>
    </html>
  )
}
