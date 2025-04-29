import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog"
import { BlogContent } from "@/components/blog/blog-content"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Artículo no encontrado - Sol de Publicidad",
      description: "El artículo que buscas no existe o ha sido movido.",
    }
  }

  return {
    title: `${post.title} - Sol de Publicidad`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // !!! Важливо: беремо тільки існуючі пов'язані пости
  const relatedPosts = getRelatedPosts(post.id).filter(Boolean)

  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-4 text-sm">
              <Link href="/blog" className="text-primary hover:underline">
                ← Volver al blog
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">{post.title}</h1>
            <div className="flex items-center text-gray-500 mb-2">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>Por {post.author}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <article>
              <BlogContent contentJsx={post.contentJsx} />
            </article>

            {relatedPosts.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-xl font-bold mb-6">Artículos relacionados</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={`${relatedPost.id}-${relatedPost.slug}`} className="flex flex-col h-full">
                      <div className="relative h-[150px]">
                        <Image
                          src={relatedPost.imageUrl || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="py-4">
                        <CardTitle className="text-base line-clamp-2">
                          {relatedPost.title}
                        </CardTitle>
                      </CardHeader>
                      <CardFooter className="pt-0">
                        <Button asChild variant="outline" className="w-full" size="sm">
                          <Link href={`/blog/${relatedPost.slug}`}>Leer más</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-bold mb-4">¿Te ha resultado útil este artículo?</h3>
              <p className="mb-6">
                Si estás interesado en implementar estrategias de publicidad exterior para tu marca, no dudes en contactarnos.
              </p>
              <Button asChild>
                <Link href="/contacto">Solicitar información</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
