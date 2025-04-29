import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/lib/services"
import { blogPosts } from "@/lib/blog"
import { projects } from "@/lib/projects"

export default function Home() {
  // Mostrar solo los primeros 2 servicios en la página principal
  const featuredServices = services.slice(0, 2)

  // Mostrar solo los primeros 3 artículos del blog en la página principal
  const featuredPosts = blogPosts.slice(0, 3)

  // Mostrar solo los primeros 3 proyectos en la página principal
  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/urban-billboard-scene.png"
            alt="Publicidad exterior en la ciudad"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Haz que tu marca brille en las calles</h1>
            <p className="text-xl mb-8">
              Somos expertos en publicidad exterior. Vallas publicitarias, publicidad en transporte y mucho más para
              hacer destacar tu marca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link href="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Sobre Nosotros</h2>
              <p className="text-lg mb-4">
                En Sol de Publicidad, llevamos más de 15 años transformando la presencia de marcas en el espacio
                público.
              </p>
              <p className="text-lg mb-6">
                Somos especialistas en publicidad exterior, ofreciendo soluciones creativas y efectivas que captan la
                atención del público en movimiento.
              </p>
              <Button asChild>
                <Link href="/nosotros">Conoce más sobre nosotros</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/creative-billboard-session.png"
                alt="Nuestro equipo trabajando"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary">Nuestros Servicios</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Ofrecemos soluciones completas de publicidad exterior para maximizar la visibilidad de tu marca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={service.id}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-[200px] mb-4 rounded-md overflow-hidden">
                    <Image
                      src={service.imageUrl || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>{service.content}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/servicios/${service.id}`}>Más información</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/servicios">Ver todos los servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary">Nuestros Trabajos</h2>
            <p className="text-lg max-w-2xl mx-auto">Descubre algunos de nuestros proyectos más destacados.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="group relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 flex flex-col justify-end p-6">
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-0.5 bg-primary/20 backdrop-blur-sm rounded-full">
                        {project.year}
                      </span>
                      <span className="text-xs font-medium px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full">
                        {project.client}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-sm text-white/80 mb-4 line-clamp-2">{project.description}</p>
                    <Button asChild size="sm" variant="secondary" className="mt-2">
                      <Link href={`/trabajos/${project.id}`}>Ver proyecto</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/trabajos">Ver todos los trabajos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary">Últimos Artículos</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Mantente al día con las últimas tendencias en publicidad exterior.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={post.id}>
                <div className="relative h-[200px]">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/blog/${post.slug}`}>Leer más</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">Ver todos los artículos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para destacar?</h2>
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
