import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso Legal - Sol de Publicidad",
  description: "Información legal sobre Sol de Publicidad, sus servicios y el uso de este sitio web.",
}

export default function LegalNoticePage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6 text-secondary">Aviso Legal</h1>

      <div className="prose max-w-none">
        <p>
          En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de
          Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los
          siguientes datos:
        </p>

        <h2>Datos identificativos</h2>
        <p>
          La empresa titular de soldepublicidad.com es Sol de Publicidad, con domicilio a estos efectos en Calle de
          Alcalá, 24, 28009 Madrid, España y con CIF XXXXXXXXX.
        </p>

        <h2>Objeto</h2>
        <p>
          El presente aviso legal regula el uso y utilización del sitio web soldepublicidad.com, del que es titular Sol
          de Publicidad.
        </p>
        <p>
          La navegación por el sitio web de Sol de Publicidad atribuye la condición de usuario del mismo e implica la
          aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que
          pueden sufrir modificaciones.
        </p>

        <h2>Responsabilidad</h2>
        <p>
          Sol de Publicidad se exime de cualquier tipo de responsabilidad derivada de la información publicada en su
          sitio web, siempre que esta información haya sido manipulada o introducida por un tercero ajeno al mismo.
        </p>

        <h2>Propiedad intelectual e industrial</h2>
        <p>
          Sol de Publicidad es titular de todos los derechos de propiedad intelectual e industrial de su página web, así
          como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o
          textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados,
          programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad de Sol de
          Publicidad o bien de sus licenciantes.
        </p>
        <p>
          Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley
          de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación
          pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta
          página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de
          Sol de Publicidad.
        </p>

        <h2>Ley aplicable y jurisdicción</h2>
        <p>
          Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las
          actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente
          las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso
          los Juzgados y Tribunales de Madrid.
        </p>
      </div>
    </div>
  )
}
