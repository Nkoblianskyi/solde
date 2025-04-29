import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Contacto - Sol de Publicidad",
  description:
    "Ponte en contacto con nosotros para impulsar tu marca con publicidad exterior. Vallas publicitarias, publicidad en transporte y más.",
}

export default function ContactPage() {
  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-secondary">Contacto</h1>
            <p className="text-lg max-w-2xl mx-auto">
              En Sol de Publicidad llevamos más de 15 años transformando la presencia de marcas en el espacio público.
              Nuestro equipo de expertos está listo para ayudarte a crear campañas de publicidad exterior que capturen
              la atención y generen resultados.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-secondary">Información de Contacto</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Dirección</h3>
                    <p className="text-gray-700">Calle de Alcalá, 24</p>
                    <p className="text-gray-700">28009 Madrid, España</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-gray-700">mail@soldepublicidad.com</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Ubicación</h3>
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image src="/madrid-alcala-24.png" alt="Mapa de ubicación" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-secondary">Envíanos un mensaje</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
