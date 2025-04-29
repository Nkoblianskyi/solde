import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies - Sol de Publicidad",
  description: "Información sobre cómo utilizamos las cookies en nuestro sitio web.",
}

export default function CookiePolicyPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6 text-secondary">Política de Cookies</h1>

      <div className="prose max-w-none">
        <p>
          En Sol de Publicidad utilizamos cookies para mejorar la experiencia de navegación de nuestros usuarios y
          optimizar el funcionamiento de nuestra web.
        </p>

        <h2>¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestra página
          web. Estas cookies nos ayudan a recordar sus preferencias y a entender cómo interactúa con nuestro sitio.
        </p>

        <h2>Tipos de cookies que utilizamos</h2>
        <ul>
          <li>
            <strong>Cookies técnicas:</strong> Son necesarias para el funcionamiento del sitio web y no pueden ser
            desactivadas en nuestros sistemas.
          </li>
          <li>
            <strong>Cookies analíticas:</strong> Nos permiten contar las visitas y fuentes de tráfico para poder medir y
            mejorar el rendimiento de nuestro sitio.
          </li>
          <li>
            <strong>Cookies de preferencias:</strong> Permiten que la página web recuerde información que cambia la
            forma en que la página se comporta o se ve.
          </li>
        </ul>

        <h2>¿Cómo gestionar las cookies?</h2>
        <p>
          Puede configurar su navegador para que rechace todas las cookies o para que le avise cuando se envía una
          cookie. Sin embargo, si rechaza las cookies, es posible que algunas partes de nuestro sitio web no funcionen
          correctamente.
        </p>

        <h2>Más información</h2>
        <p>
          Si desea obtener más información sobre cómo utilizamos las cookies, puede contactarnos a través de
          mail@soldepublicidad.com.
        </p>

        <p>Esta política de cookies fue actualizada por última vez el 29 de abril de 2025.</p>
      </div>
    </div>
  )
}
