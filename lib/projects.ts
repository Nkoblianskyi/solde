export type Project = {
  id: string
  title: string
  client: string
  description: string
  longDescription: string
  image: string
  imageUrl: string // Nueva propiedad para la URL de la imagen
  location: string
  year: number
  services: string[]
  results: string[]
  testimonial?: {
    quote: string
    author: string
    position: string
  }
}

export const projects: Project[] = [
  {
    id: "campana-verano-refrescante",
    title: "Campaña de Verano Burbujas Frescas",
    client: "Refrescos Solaris",
    description:
      "Campaña integral de vallas publicitarias y publicidad en transporte para la temporada de verano 2025.",
    longDescription:
      "Para la campaña de verano 2025 de Refrescos Solaris, desarrollamos una estrategia integral de publicidad exterior que abarcó las principales ciudades costeras de España. El objetivo era reforzar la asociación de la marca con los momentos de disfrute estival y aumentar la visibilidad en zonas de alto tránsito turístico. Implementamos vallas de gran formato en accesos a playas, rotulación integral de autobuses urbanos y una red de mupis digitales interactivos que permitían a los usuarios compartir sus momentos de verano de verano en redes sociales.",
    image: "summer campaign billboard beach refreshing drink",
    imageUrl: "/1.jpg", // URL específica para este proyecto
    location: "Madrid, Barcelona, Valencia, Málaga y Palma de Mallorca",
    year: 2025,
    services: ["Vallas publicitarias", "Publicidad en transporte", "Mupis digitales"],
    results: [
      "Incremento del 24% en reconocimiento de campaña",
      "Aumento del 18% en ventas en zonas de implementación",
      "Más de 50.000 interacciones con mupis digitales",
    ],
    testimonial: {
      quote:
        "Sol de Publicidad logró capturar perfectamente la esencia de nuestra campaña estival y llevarla al espacio urbano de forma impactante y memorable.",
      author: "María Rodríguez",
      position: "Directora de Marketing, Refrescos Solaris",
    },
  },
  {
    id: "lanzamiento-nuevo-modelo-automovil",
    title: "Lanzamiento Nuevo Veloz Eléctrico",
    client: "AutoIberia",
    description: "Campaña de lanzamiento del nuevo modelo Veloz Eléctrico 2025 con énfasis en su tecnología híbrida.",
    longDescription:
      "El lanzamiento del nuevo Veloz Eléctrico 2025 requería una estrategia de alto impacto que destacara las innovaciones tecnológicas y el compromiso medioambiental de la marca. Diseñamos una campaña de publicidad exterior que combinaba vallas espectaculares en ubicaciones estratégicas con una presencia dominante en el transporte público de las principales ciudades. La campaña se centró en el mensaje 'Tecnología que transforma', resaltando el sistema híbrido del vehículo y su conectividad avanzada. Utilizamos iluminación especial en las vallas nocturnas para destacar el diseño distintivo de los faros LED del nuevo modelo.",
    image: "hybrid car billboard city night electric vehicle",
    imageUrl: "/2.jpg", // URL específica para este proyecto
    location: "Nacional (15 ciudades principales)",
    year: 2025,
    services: ["Vallas espectaculares", "Publicidad en metro", "Marquesinas premium"],
    results: [
      "Más de 15 millones de impactos estimados",
      "Incremento del 32% en visitas a concesionarios",
      "Aumento del 28% en pruebas de conducción solicitadas",
    ],
    testimonial: {
      quote:
        "La visibilidad que conseguimos con esta campaña superó todas nuestras expectativas. El impacto visual de las vallas y la presencia en transporte público fueron determinantes para el éxito del lanzamiento.",
      author: "Carlos Martínez",
      position: "Jefe de Publicidad, AutoIberia",
    },
  },
  {
    id: "festival-internacional-cine",
    title: "Festival Internacional de Cine de Madrid",
    client: "Fundación Cultural Madrileña",
    description: "Campaña integral para la promoción de la 47ª edición del Festival Internacional de Cine de Madrid.",
    longDescription:
      "Para la 47ª edición del Festival Internacional de Cine de Madrid, creamos una campaña de publicidad exterior que transformó la ciudad en una extensión del festival. El concepto creativo 'Madrid respira cine' se materializó en intervenciones urbanas que convertían elementos cotidianos de la ciudad en referencias cinematográficas. Desarrollamos vallas secuenciales que contaban una historia a lo largo de las principales avenidas, marquesinas interactivas que permitían ver tráilers de las películas mediante códigos QR, y una espectacular lona en la Plaza de Callao que se iluminaba de forma especial durante la noche, recreando la magia del cine.",
    image: "film festival outdoor advertising plaza callao madrid",
    imageUrl: "/3.jpg", // URL específica para este proyecto
    location: "Madrid",
    year: 2025,
    services: ["Lonas de gran formato", "Marquesinas interactivas", "Vallas secuenciales"],
    results: [
      "Incremento del 35% en venta de entradas respecto al año anterior",
      "Más de 120.000 visualizaciones de tráilers vía códigos QR",
      "Cobertura mediática valorada en más de 300.000€",
    ],
    testimonial: {
      quote:
        "La campaña no solo promocionó el festival, sino que lo extendió a toda la ciudad, creando una experiencia inmersiva que comenzaba en las calles y culminaba en las salas de proyección.",
      author: "Laura Sánchez",
      position: "Directora, Festival Internacional de Cine de Madrid",
    },
  },
  {
    id: "campana-concienciacion-medioambiental",
    title: "Campaña de Concienciación Medioambiental",
    client: "Ministerio para la Transición Ecológica",
    description:
      "Campaña de concienciación sobre el cambio climático y la importancia de reducir la huella de carbono.",
    longDescription:
      "Desarrollamos para el Ministerio para la Transición Ecológica una innovadora campaña de concienciación medioambiental que utilizaba la publicidad exterior como medio para transmitir un mensaje de sostenibilidad. La campaña 'Pequeñas acciones, grandes cambios' se implementó utilizando materiales 100% sostenibles y tintas ecológicas. Creamos vallas especiales que incorporaban pequeños jardines verticales y sistemas de purificación de aire, convirtiendo así los soportes publicitarios en elementos que contribuían activamente a mejorar el entorno urbano mientras transmitían el mensaje de sostenibilidad.",
    image: "environmental awareness campaign green billboard city",
    imageUrl: "/4.jpg", // URL específica para este proyecto
    location: "Nacional (25 ciudades)",
    year: 2025,
    services: ["Vallas ecológicas", "Mupis con jardines verticales", "Publicidad en transporte eléctrico"],
    results: [
      "Reducción estimada de 15 toneladas de CO2 gracias a los sistemas de purificación",
      "Aumento del 42% en visitas al portal de consejos sostenibles",
      "Premio Internacional de Publicidad Sostenible 2025",
    ],
    testimonial: {
      quote:
        "Esta campaña demuestra que la publicidad exterior puede ser parte de la solución, no solo transmitiendo mensajes de sostenibilidad sino incorporándola en su propia ejecución.",
      author: "Javier López",
      position: "Secretario de Estado de Medio Ambiente",
    },
  },
  {
    id: "apertura-tienda-insignia-moda",
    title: "Apertura Tienda Insignia Estilo Urbano",
    client: "ModaExpress",
    description: "Campaña para la inauguración de la nueva tienda insignia de ModaExpress en el centro de Madrid.",
    longDescription:
      "La apertura de la nueva tienda insignia de ModaExpress en la Gran Vía madrileña requería una campaña que estuviera a la altura de la espectacularidad del espacio. Diseñamos una estrategia de 'cuenta atrás' que generó expectación durante las semanas previas a la inauguración. Utilizamos una combinación de vallas digitales sincronizadas que mostraban el tiempo restante para la apertura junto con avances de la colección exclusiva para la inauguración. El edificio se cubrió parcialmente con una lona arquitectónica que respetaba los elementos históricos de la fachada mientras creaba un impacto visual único. Complementamos la campaña con intervenciones en el pavimento que creaban un camino visual hacia la tienda desde las principales zonas comerciales y turísticas.",
    image: "fashion store opening gran via madrid flagship",
    imageUrl: "/5.jpg", // URL específica para este proyecto
    location: "Madrid",
    year: 2025,
    services: ["Lona arquitectónica", "Vallas digitales sincronizadas", "Street marketing"],
    results: [
      "Más de 25.000 visitantes durante el primer fin de semana",
      "Cobertura en medios internacionales especializados en moda y retail",
      "Incremento del 45% en ventas respecto a las proyecciones iniciales",
    ],
    testimonial: {
      quote:
        "La campaña logró crear un evento en torno a la apertura que trascendió lo comercial para convertirse en un acontecimiento cultural en la ciudad.",
      author: "Ana García",
      position: "Directora de Expansión, ModaExpress",
    },
  },
  {
    id: "campana-turistica-andalucia",
    title: "Campaña Turística Andalucía",
    client: "Junta de Andalucía",
    description:
      "Campaña nacional e internacional para promocionar Andalucía como destino turístico durante todo el año.",
    longDescription:
      "La Junta de Andalucía nos confió el desarrollo de una ambiciosa campaña para posicionar la región como destino turístico para todas las estaciones del año, más allá del tradicional turismo de sol y playa. Bajo el concepto 'Andalucía, un mundo en cada estación', desarrollamos una campaña que mostraba la diversidad de experiencias que ofrece la región en cada época del año. Implementamos vallas espectaculares en las principales capitales europeas, con fotografías inmersivas de alta calidad que transportaban visualmente al espectador a los paisajes andaluces. En aeropuertos internacionales, instalamos experiencias sensoriales que incluían aromas característicos de la región y proyecciones envolventes. La campaña se complementó con una fuerte presencia en estaciones de tren y metro, creando corredores temáticos que representaban las diferentes provincias andaluzas.",
    image: "andalucia tourism campaign international airport",
    imageUrl: "/6.jpg", // URL específica para este proyecto
    location: "España, Reino Unido, Alemania, Francia e Italia",
    year: 2025,
    services: [
      "Vallas internacionales",
      "Experiencias sensoriales en aeropuertos",
      "Corredores temáticos en transporte",
    ],
    results: [
      "Incremento del 22% en reservas turísticas internacionales",
      "Aumento del 18% en búsquedas online sobre destinos andaluces",
      "Crecimiento del 15% en turismo de temporada baja",
    ],
    testimonial: {
      quote:
        "Esta campaña ha conseguido transmitir la esencia de Andalucía y su diversidad, logrando atraer a un perfil de turista interesado en experiencias culturales y naturales durante todo el año.",
      author: "Daniel Torres",
      position: "Consejero de Turismo, Junta de Andalucía",
    },
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
