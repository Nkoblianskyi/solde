import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/lib/services"

export const metadata: Metadata = {
  title: "Servicios - Sol de Publicidad",
  description:
    "Descubre nuestros servicios de publicidad exterior: vallas publicitarias, publicidad en transporte, marquesinas y más.",
}

export default function ServicesPage() {
  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-secondary">Nuestros Servicios</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Ofrecemos soluciones completas de publicidad exterior para maximizar la visibilidad de tu marca en el
              espacio urbano.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} id={service.id} className="flex flex-col h-full">
                <div className="relative h-[200px]">
                  <Image
                    src={service.imageUrl || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">{service.content}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/servicios/${service.id}`}>Ver más detalles</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas una solución personalizada?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contacta con nosotros y te ayudaremos a diseñar la estrategia de publicidad exterior perfecta para tu marca.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/contacto">Solicitar presupuesto</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
