import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Nuestros Trabajos - Sol de Publicidad",
  description:
    "Descubre los proyectos más destacados de Sol de Publicidad. Campañas de publicidad exterior para las marcas más reconocidas.",
}

export default function WorksPage() {
  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-secondary">Nuestros Trabajos</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Descubre algunos de nuestros proyectos más destacados. Cada campaña es única y está diseñada para
              maximizar el impacto de la marca en el espacio público.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {project.year}
                    </span>
                    <span className="text-sm font-medium px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                      {project.client}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-secondary">{project.title}</h2>
                  <p className="text-gray-700 mb-4">{project.description}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 mb-2">Servicios utilizados</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <Link href={`/trabajos/${project.id}`}>Ver detalles</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/contacto">Contactar</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres ser nuestro próximo caso de éxito?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contacta con nosotros y descubre cómo podemos ayudarte a destacar tu marca en el espacio público.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/contacto">Solicitar presupuesto</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
