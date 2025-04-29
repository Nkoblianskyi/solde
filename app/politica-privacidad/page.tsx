import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad - Sol de Publicidad",
  description: "Información sobre cómo protegemos y tratamos tus datos personales.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6 text-secondary">Política de Privacidad</h1>

      <div className="prose max-w-none">
        <p>
          En Sol de Publicidad nos comprometemos a proteger la privacidad de nuestros usuarios. Esta política de
          privacidad explica cómo recopilamos, utilizamos y protegemos su información personal.
        </p>

        <h2>Información que recopilamos</h2>
        <p>Podemos recopilar la siguiente información:</p>
        <ul>
          <li>Nombre y apellidos</li>
          <li>Información de contacto, incluyendo dirección de correo electrónico</li>
          <li>Información demográfica como código postal, preferencias e intereses</li>
          <li>Otra información relevante para encuestas y/o ofertas</li>
        </ul>

        <h2>¿Qué hacemos con la información que recopilamos?</h2>
        <p>
          Requerimos esta información para entender sus necesidades y proporcionarle un mejor servicio, y en particular
          por las siguientes razones:
        </p>
        <ul>
          <li>Mantenimiento de registros internos.</li>
          <li>Mejora de nuestros productos y servicios.</li>
          <li>
            Envío de correos electrónicos promocionales sobre nuevos productos, ofertas especiales u otra información
            que creemos que puede encontrar interesante.
          </li>
          <li>Contacto ocasional con fines de investigación de mercado.</li>
        </ul>

        <h2>Seguridad</h2>
        <p>
          Estamos comprometidos a garantizar que su información esté segura. Para evitar el acceso o divulgación no
          autorizados, hemos implementado procedimientos físicos, electrónicos y administrativos adecuados para
          salvaguardar y asegurar la información que recopilamos en línea.
        </p>

        <h2>Cookies</h2>
        <p>
          Utilizamos cookies para mejorar la experiencia de navegación de nuestros usuarios. Puede consultar nuestra{" "}
          <a href="/politica-cookies" className="text-primary hover:underline">
            Política de Cookies
          </a>{" "}
          para obtener más información.
        </p>

        <h2>Enlaces a otros sitios web</h2>
        <p>
          Nuestro sitio web puede contener enlaces a otros sitios de interés. Sin embargo, una vez que haya utilizado
          estos enlaces para salir de nuestro sitio, debe tener en cuenta que no tenemos ningún control sobre ese otro
          sitio web. Por lo tanto, no podemos ser responsables de la protección y privacidad de cualquier información
          que proporcione al visitar dichos sitios, y dichos sitios no están regidos por esta declaración de privacidad.
        </p>

        <h2>Control de su información personal</h2>
        <p>Puede restringir la recopilación o el uso de su información personal de las siguientes maneras:</p>
        <ul>
          <li>
            Cuando se le solicite rellenar un formulario en el sitio web, busque la casilla que puede marcar para
            indicar que no desea que la información sea utilizada por nadie con fines de marketing directo.
          </li>
          <li>
            Si previamente ha aceptado que utilicemos su información personal con fines de marketing directo, puede
            cambiar de opinión en cualquier momento escribiéndonos a mail@soldepublicidad.com.
          </li>
        </ul>

        <p>
          No venderemos, distribuiremos ni arrendaremos su información personal a terceros a menos que tengamos su
          permiso o estemos obligados por ley a hacerlo.
        </p>

        <p>Esta política de privacidad fue actualizada por última vez el 29 de abril de 2025.</p>
      </div>
    </div>
  )
}
