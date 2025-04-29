"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
    dataConsent: false,
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
    dataConsent: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  const validateForm = () => {
    let valid = true
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      service: "",
      message: "",
      dataConsent: "",
    }

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio"
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio"
      valid = false
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "El email no es válido"
      valid = false
    }

    if (formData.phone && !/^[+\d\s()-]{9,}$/.test(formData.phone)) {
      newErrors.phone = "El número de teléfono no es válido"
      valid = false
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es obligatorio"
      valid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio"
      valid = false
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "El mensaje debe tener al menos 20 caracteres"
      valid = false
    }

    if (!formData.dataConsent) {
      newErrors.dataConsent = "Debes aceptar la política de privacidad"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }))

    if (errors.service) {
      setErrors((prev) => ({
        ...prev,
        service: "",
      }))
    }
  }

  const handleConsentChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      dataConsent: checked,
    }))

    if (errors.dataConsent) {
      setErrors((prev) => ({
        ...prev,
        dataConsent: "",
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setShowDialog(true)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      service: "",
      message: "",
      dataConsent: false,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">
            Nombre <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "border-red-500" : ""}
            placeholder="Tu nombre completo"
          />
          {errors.name && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-red-500" : ""}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "border-red-500" : ""}
            placeholder="+34 XXX XXX XXX"
          />
          {errors.phone && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.phone}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Servicio de interés</Label>
          <Select value={formData.service} onValueChange={handleServiceChange}>
            <SelectTrigger className={errors.service ? "border-red-500" : ""}>
              <SelectValue placeholder="Selecciona un servicio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vallas">Vallas Publicitarias</SelectItem>
              <SelectItem value="transporte">Publicidad en Transporte</SelectItem>
              <SelectItem value="marquesinas">Marquesinas y Mupis</SelectItem>
              <SelectItem value="eventos">Publicidad para Eventos</SelectItem>
              <SelectItem value="diseno">Diseño Creativo</SelectItem>
              <SelectItem value="consultoria">Consultoría Estratégica</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.service}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">
            Asunto <span className="text-red-500">*</span>
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={errors.subject ? "border-red-500" : ""}
            placeholder="Asunto de tu mensaje"
          />
          {errors.subject && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.subject}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">
            Mensaje <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "border-red-500" : ""}
            placeholder="Escribe tu mensaje aquí..."
          />
          {errors.message && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="dataConsent"
              checked={formData.dataConsent}
              onCheckedChange={handleConsentChange}
              className={errors.dataConsent ? "border-red-500 data-[state=unchecked]:bg-red-50" : ""}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="dataConsent"
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                  errors.dataConsent ? "text-red-500" : ""
                }`}
              >
                Acepto la política de privacidad <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500">
                Al marcar esta casilla, acepto que mis datos sean tratados según la{" "}
                <Link href="/politica-privacidad" className="text-primary hover:underline">
                  política de privacidad
                </Link>{" "}
                de Sol de Publicidad.
              </p>
            </div>
          </div>
          {errors.dataConsent && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.dataConsent}
            </p>
          )}
        </div>

        <div className="text-sm text-gray-500">
          Los campos marcados con <span className="text-red-500">*</span> son obligatorios
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Enviar mensaje"
          )}
        </Button>
      </form>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-center">
              <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
              <span className="mx-auto">Mensaje enviado correctamente</span>
            </DialogTitle>
            <DialogDescription className="text-center pt-2">
              Gracias por contactar con Sol de Publicidad. Hemos recibido tu mensaje y nos pondremos en contacto contigo
              lo antes posible, normalmente en un plazo de 24-48 horas laborables.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button onClick={() => setShowDialog(false)}>Aceptar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
