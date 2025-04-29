import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getProjectById } from "@/lib/projects"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectById(params.id)

  if (!project) {
    return {
      title: "Proyecto no encontrado - Sol de Publicidad",
      description: "El proyecto que buscas no existe o ha sido movido.",
    }
  }

  return {
    title: `${project.title} - Sol de Publicidad`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 text-sm">
              <Link href="/trabajos" className="text-primary hover:underline">
                ← Volver a trabajos
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-sm font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                {project.year}
              </span>
              <span className="text-sm font-medium px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                {project.client}
              </span>
              <span className="text-sm font-medium px-2 py-1 bg-gray-200 text-gray-700 rounded-full">
                {project.location}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">{project.title}</h1>
            <p className="text-xl text-gray-600">{project.description}</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[500px] mb-12 rounded-lg overflow-hidden">
              <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h2 className="text-lg font-bold mb-3 text-secondary">Cliente</h2>
                <p>{project.client}</p>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-3 text-secondary">Ubicación</h2>
                <p>{project.location}</p>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-3 text-secondary">Año</h2>
                <p>{project.year}</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-secondary">Sobre el proyecto</h2>
              <div className="prose max-w-none">
                <p className="text-lg">{project.longDescription}</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-secondary">Servicios utilizados</h2>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, index) => (
                  <span key={index} className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-secondary">Resultados</h2>
              <ul className="space-y-4">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-lg">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.testimonial && (
              <div className="mb-12 bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-secondary">Testimonial</h2>
                <blockquote className="relative">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.7662 12.86C3.84088 12.86 3.05992 12.5533 2.42332 11.94C1.81229 11.3266 1.50676 10.4467 1.50676 9.29999C1.50676 8.07332 1.93833 6.87332 2.80147 5.69999C3.69018 4.49999 4.86244 3.55332 6.31824 2.85999L7.21694 4.25999C6.13898 4.73999 5.34103 5.27332 4.82308 5.85999C4.33069 6.44666 4.04247 7.12666 3.95841 7.89999C4.2517 7.79332 4.57594 7.73999 4.93113 7.73999C5.65369 7.73999 6.26472 7.97999 6.76521 8.45999C7.26569 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0675 12.86 10.2865 12.5533 9.64991 11.94C9.03888 11.3266 8.73335 10.4467 8.73335 9.29999C8.73335 8.07332 9.16492 6.87332 10.0281 5.69999C10.9168 4.49999 12.089 3.55332 13.5448 2.85999L14.4435 4.25999C13.3656 4.73999 12.5676 5.27332 12.0497 5.85999C11.5573 6.44666 11.2691 7.12666 11.185 7.89999C11.4783 7.79332 11.8025 7.73999 12.1577 7.73999C12.8803 7.73999 13.4913 7.97999 13.9918 8.45999C14.4923 8.93999 14.6242 9.55333 14.6242 10.3Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="relative z-10">
                    <p className="text-lg italic mb-4">{project.testimonial.quote}</p>
                    <footer className="text-sm">
                      <cite className="font-medium text-gray-900 not-italic">
                        {project.testimonial.author}, {project.testimonial.position}
                      </cite>
                    </footer>
                  </div>
                </blockquote>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contacto">Contactar</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/trabajos">Ver más trabajos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">¿Te gustaría un proyecto similar?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contacta con nosotros y cuéntanos tu idea. Juntos crearemos una campaña de publicidad exterior que haga
            brillar tu marca.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/contacto">Solicitar presupuesto</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
