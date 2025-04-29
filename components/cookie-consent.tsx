"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Comprobar si el usuario ya ha dado su consentimiento
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowConsent(false)
    router.push("/politica-cookies")
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-700">
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta nuestra
          política de cookies.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={declineCookies}>
            Rechazar
          </Button>
          <Button variant="default" size="sm" onClick={acceptCookies}>
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  )
}
