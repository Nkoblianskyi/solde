import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Nosotros - Sol de Publicidad",
  description:
    "Conoce a Sol de Publicidad, tu agencia especializada en publicidad exterior en Madrid. Más de 15 años de experiencia en el sector.",
}

export default function AboutPage() {
  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-secondary">Sobre Nosotros</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Somos una agencia especializada en publicidad exterior con más de 15 años de experiencia en el sector.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/creative-billboard-session.png" alt="Nuestro equipo trabajando" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Nuestra Historia</h2>
              <p className="text-lg mb-4">
                Sol de Publicidad nació en 2010 con una visión clara: transformar el paisaje urbano en un lienzo para
                las marcas, respetando siempre el entorno y aportando valor estético a la ciudad.
              </p>
              <p className="text-lg mb-4">
                Desde entonces, hemos trabajado con cientos de empresas, desde pequeños negocios locales hasta grandes
                multinacionales, ayudándoles a aumentar su visibilidad y reconocimiento de marca a través de la
                publicidad exterior.
              </p>
              <p className="text-lg mb-6">
                Nuestro profundo conocimiento del sector, combinado con un enfoque creativo y estratégico, nos ha
                permitido convertirnos en un referente en el mercado de la publicidad exterior en Madrid y toda España.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary">Nuestros Valores</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Estos son los principios que guían nuestro trabajo diario y nuestra relación con los clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Creatividad",
                description:
                  "Buscamos constantemente ideas innovadoras que hagan destacar a nuestros clientes en el entorno urbano.",
                icon: "lightbulb",
              },
              {
                title: "Eficacia",
                description:
                  "Nos centramos en resultados medibles, seleccionando ubicaciones estratégicas para maximizar el impacto.",
                icon: "target",
              },
              {
                title: "Compromiso",
                description: "Tratamos cada proyecto como si fuera nuestro, con dedicación y atención personalizada.",
                icon: "handshake",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Image
                    src={`/placeholder.svg?height=64&width=64&query=${value.icon} icon`}
                    alt={value.title}
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-secondary">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary">¿Por qué elegirnos?</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Estas son algunas de las razones por las que nuestros clientes confían en nosotros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Experiencia probada",
                description:
                  "Más de 15 años en el sector nos avalan, con cientos de campañas exitosas a nuestras espaldas.",
              },
              {
                title: "Ubicaciones premium",
                description: "Contamos con acceso a las mejores ubicaciones en las principales ciudades de España.",
              },
              {
                title: "Equipo multidisciplinar",
                description:
                  "Diseñadores, estrategas y especialistas en marketing trabajan juntos para crear campañas integrales.",
              },
              {
                title: "Soluciones a medida",
                description:
                  "Adaptamos nuestras propuestas a las necesidades específicas de cada cliente y cada campaña.",
              },
            ].map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para trabajar juntos?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contacta con nosotros hoy mismo y descubre cómo podemos ayudarte a aumentar la visibilidad de tu marca.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/contacto">Contáctanos</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
