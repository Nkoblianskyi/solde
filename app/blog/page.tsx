import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog - Sol de Publicidad",
  description:
    "Artículos sobre publicidad exterior, vallas publicitarias, publicidad en transporte y las últimas tendencias del sector.",
}

export default function BlogPage() {
  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-secondary">Blog</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Artículos sobre publicidad exterior, tendencias del sector y consejos para maximizar el impacto de tu
              marca.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col h-full">
                <div className="relative h-[200px]">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardDescription>{post.date}</CardDescription>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
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
        </div>
      </section>
    </>
  )
}
