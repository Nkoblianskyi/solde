import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getServiceById } from "@/lib/services"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const service = await getServiceById(id)

  if (!service) {
    return {
      title: "Servicio no encontrado - Sol de Publicidad",
      description: "Este servicio no existe o ha sido removido.",
    }
  }

  return {
    title: `${service.title} - Sol de Publicidad`,
    description: service.description,
  }
}

export default async function ServicePage(props: Props) {
  const { id } = await props.params
  const service = await getServiceById(id)

  if (!service) {
    notFound()
  }

  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-4 text-sm">
              <Link href="/servicios" className="text-primary hover:underline">
                ← Volver a servicios
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">{service.title}</h1>
            <p className="text-xl text-gray-600">{service.description}</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image src={service.imageUrl || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>

              <div className="prose max-w-none">
                <div className="mb-8">
                  {service.longDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-6 text-secondary">Beneficios</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {service.benefits.map((benefit, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                        <p>{benefit.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-6 text-secondary">Nuestro proceso</h2>
                <div className="space-y-6 mb-12">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-6 text-secondary">Preguntas frecuentes</h2>
                <Accordion type="single" collapsible className="mb-12">
                  {service.faq.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-secondary">¿Interesado en este servicio?</h3>
                <p className="mb-6">
                  Contacta con nosotros para obtener más información sobre nuestro servicio de{" "}
                  {service.title.toLowerCase()} y cómo puede beneficiar a tu marca.
                </p>
                <Button asChild className="w-full mb-4">
                  <Link href={`/contacto?servicio=${service.id}`}>Solicitar información</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/servicios">Ver otros servicios</Link>
                </Button>

                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-bold mb-4">Características principales</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para destacar con {service.title.toLowerCase()}?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contacta con nosotros hoy mismo y descubre cómo podemos ayudarte a aumentar la visibilidad de tu marca.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/contacto">Solicitar presupuesto</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
