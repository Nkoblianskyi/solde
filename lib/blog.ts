export type BlogPost = {
  id: number
  title: string
  excerpt: string
  date: string
  imageUrl: string
  slug: string
  author: string
  tags: string[]
  contentJsx: Array<
    | { type: 'p'; text: string }
    | { type: 'h2'; text: string }
    | { type: 'h3'; text: string }
    | { type: 'ul'; items: string[] }
  >
  relatedPosts?: number[]
}

export const blogPosts: BlogPost[] = [
  {
    "id": 1,
    "title": "El impacto de las vallas digitales en la publicidad moderna",
    "excerpt": "Descubre cómo las vallas digitales están revolucionando el sector de la publicidad exterior y ofreciendo nuevas oportunidades para las marcas.",
    "date": "29 de abril, 2025",
    "imageUrl": "/urban-billboard-night.jpg",
    "slug": "impacto-vallas-digitales-publicidad-moderna",
    "author": "María Rodríguez",
    "tags": ["Vallas publicitarias", "Publicidad digital", "Innovación"],
    "contentJsx": [
      {
        "type": "p",
        "text": "Las vallas publicitarias digitales han revolucionado el panorama de la publicidad exterior en los últimos años. A diferencia de las vallas tradicionales, las digitales ofrecen una flexibilidad sin precedentes y nuevas posibilidades creativas para las marcas."
      },
      {
        "type": "h2",
        "text": "Ventajas de las vallas digitales"
      },
      {
        "type": "p",
        "text": "Las vallas digitales presentan numerosas ventajas frente a las tradicionales:"
      },
      {
        "type": "ul",
        "items": [
          "Contenido dinámico: permiten mostrar contenido en movimiento, aumentando significativamente la atención del público.",
          "Programación flexible: es posible programar diferentes anuncios según la hora del día o el día de la semana.",
          "Cambios instantáneos: no es necesario esperar días para cambiar el contenido, se puede hacer de forma remota e instantánea.",
          "Mayor impacto visual: la iluminación y el movimiento generan un mayor impacto, especialmente en horario nocturno."
        ]
      },
      {
        "type": "h2",
        "text": "El futuro de la publicidad digital exterior"
      },
      {
        "type": "p",
        "text": "El futuro de las vallas digitales apunta hacia una mayor interactividad y personalización. Las nuevas tecnologías están permitiendo que estas vallas puedan interactuar con los smartphones de los transeúntes o incluso reconocer patrones demográficos para mostrar anuncios más relevantes."
      },
      {
        "type": "p",
        "text": "Además, la integración con campañas de redes sociales está creando experiencias omnicanal que maximizan el impacto de las marcas en su público objetivo."
      },
      {
        "type": "h2",
        "text": "Consideraciones medioambientales"
      },
      {
        "type": "p",
        "text": "A pesar de sus ventajas, es importante considerar el impacto medioambiental de estas vallas. El consumo energético es significativamente mayor que el de las vallas tradicionales, por lo que muchas empresas están optando por soluciones alimentadas con energía solar o sistemas de eficiencia energética."
      },
      {
        "type": "h2",
        "text": "Conclusión"
      },
      {
        "type": "p",
        "text": "Las vallas digitales representan el futuro de la publicidad exterior. Su capacidad para ofrecer contenido dinámico, personalizado y programable las convierte en una herramienta invaluable para las marcas que buscan destacar en un entorno urbano cada vez más saturado de estímulos visuales."
      }
    ],
    "relatedPosts": [2, 5, 6]
  },
  {
    "id": 2,
    "title": "5 razones para invertir en publicidad en transporte público",
    "excerpt": "La publicidad en transporte público ofrece ventajas únicas para las marcas.",
    "date": "25 de abril, 2025",
    "imageUrl": "/car.jpg",
    "slug": "razones-invertir-publicidad-transporte-publico",
    "author": "Carlos Martínez",
    "tags": ["Transporte público", "Publicidad móvil", "Estrategia de marketing"],
    "contentJsx": [
      {
        "type": "p",
        "text": "La publicidad en transporte público es una de las formas más efectivas de llegar a un público amplio y diverso."
      },
      {
        "type": "h2",
        "text": "1. Alcance masivo"
      },
      {
        "type": "p",
        "text": "Millones de personas utilizan el transporte público diariamente en grandes ciudades, lo que garantiza una exposición significativa para las marcas."
      },
      {
        "type": "h2",
        "text": "2. Segmentación geográfica"
      },
      {
        "type": "p",
        "text": "Permite elegir rutas específicas que atraviesen barrios donde se encuentra tu público objetivo, optimizando la inversión publicitaria."
      },
      {
        "type": "h2",
        "text": "3. Tiempo de exposición prolongado"
      },
      {
        "type": "p",
        "text": "Los pasajeros pasan varios minutos en el transporte público, proporcionando más tiempo para captar la atención con tus anuncios."
      },
      {
        "type": "h2",
        "text": "4. Relación calidad-precio excepcional"
      },
      {
        "type": "p",
        "text": "La publicidad en transporte público tiene un coste por impacto significativamente menor que otros medios tradicionales como la televisión o la radio."
      },
      {
        "type": "h2",
        "text": "5. Versatilidad de formatos"
      },
      {
        "type": "p",
        "text": "Desde vinilos exteriores hasta carteles interiores y pantallas digitales, el transporte público ofrece múltiples formatos para adaptarse a cualquier estrategia."
      },
      {
        "type": "h2",
        "text": "Conclusión"
      },
      {
        "type": "p",
        "text": "La publicidad en transporte público sigue siendo una opción efectiva y rentable para alcanzar un amplio público objetivo en el entorno urbano moderno."
      }
    ],
    "relatedPosts": [1, 3, 4]
  },
  {
    "id": 3,
    "title": "Tendencias en publicidad exterior para 2025",
    "excerpt": "Analizamos las tendencias que dominarán el sector de la publicidad exterior este año y cómo pueden beneficiar a tu marca.",
    "date": "20 de abril, 2025",
    "imageUrl": "/city.jpg",
    "slug": "tendencias-publicidad-exterior-2025",
    "author": "Laura Sánchez",
    "tags": ["Tendencias", "Innovación", "Publicidad exterior"],
    "contentJsx": [
      { "type": "p", "text": "El sector de la publicidad exterior está en constante evolución, adaptándose a las nuevas tecnologías y a los cambios en los hábitos de consumo." },
      { "type": "h2", "text": "Integración con tecnología móvil" },
      { "type": "p", "text": "Las vallas y mupis incorporarán códigos QR, NFC y beacons para que los usuarios interactúen desde sus smartphones, ampliando la experiencia." },
      { "type": "h2", "text": "Publicidad programática en exterior" },
      { "type": "p", "text": "La compra programática de espacios permitirá optimizar campañas en tiempo real según el clima, la hora o eventos locales." },
      { "type": "h2", "text": "Personalización y contextualización" },
      { "type": "p", "text": "Las vallas digitales podrán adaptar sus anuncios en función de los datos demográficos básicos de los transeúntes." },
      { "type": "h2", "text": "Sostenibilidad como prioridad" },
      { "type": "p", "text": "La publicidad exterior apuesta por soluciones sostenibles como energía solar y materiales biodegradables." },
      { "type": "h2", "text": "Experiencias inmersivas" },
      { "type": "p", "text": "La realidad aumentada y otras tecnologías inmersivas convertirán la publicidad exterior en experiencias interactivas memorables." },
      { "type": "h2", "text": "Medición avanzada de resultados" },
      { "type": "p", "text": "Nuevas tecnologías como eye-tracking permitirán medir el impacto real de las campañas exteriores con datos más precisos." },
      { "type": "h2", "text": "Conclusión" },
      { "type": "p", "text": "La publicidad exterior en 2025 será más dinámica, interactiva y medible, ofreciendo nuevas oportunidades para las marcas innovadoras." }
    ],
    "relatedPosts": [1, 2, 6]
  }
  ,  
  {
    "id": 4,
    "title": "Cómo elegir la ubicación perfecta para tu valla publicitaria",
    "excerpt": "La ubicación es clave en la publicidad exterior. Te ofrecemos consejos para seleccionar el mejor lugar para tu valla publicitaria.",
    "date": "15 de abril, 2025",
    "imageUrl": "/scene.jpg",
    "slug": "como-elegir-ubicacion-perfecta-valla-publicitaria",
    "author": "Javier López",
    "tags": ["Vallas publicitarias", "Estrategia", "Ubicación"],
    "contentJsx": [
      { "type": "p", "text": "La ubicación es uno de los factores más determinantes en el éxito de una campaña de vallas publicitarias. Una mala ubicación puede limitar el impacto incluso del mejor diseño." },
      { "type": "h2", "text": "Factores clave para elegir la ubicación" },
      { "type": "p", "text": "Considera estos factores al seleccionar la ubicación ideal para tu valla:" },
      { "type": "h3", "text": "Volumen y tipo de tráfico" },
      { "type": "p", "text": "No solo importa cuántas personas pasan, sino si son tu público objetivo. Menos tráfico pero más segmentado puede ser más eficaz." },
      { "type": "h3", "text": "Velocidad del tráfico" },
      { "type": "p", "text": "En vías rápidas, tu mensaje debe ser corto e impactante. En zonas lentas puedes comunicar algo más extenso." },
      { "type": "h3", "text": "Visibilidad y ángulo de visión" },
      { "type": "p", "text": "La valla debe verse claramente desde la distancia y estar colocada en un ángulo óptimo respecto al flujo del tráfico." },
      { "type": "h3", "text": "Entorno y competencia" },
      { "type": "p", "text": "Evita áreas con demasiada publicidad y selecciona ubicaciones coherentes con el mensaje de tu marca." },
      { "type": "h2", "text": "Tipos de ubicaciones estratégicas" },
      {
        "type": "ul",
        "items": [
          "Entradas a ciudades: ideales para mensajes de bienvenida o alcance turístico.",
          "Zonas comerciales: efectivas para productos de consumo masivo.",
          "Áreas de ocio: perfectas para sectores como moda o entretenimiento.",
          "Rutas de commuters: ideales para campañas de recordación prolongada."
        ]
      },
      { "type": "h2", "text": "Herramientas para la selección de ubicaciones" },
      {
        "type": "ul",
        "items": [
          "Estudios de tráfico: datos sobre volumen y perfil del flujo vehicular.",
          "Mapas de calor: muestran concentración de tu target por zonas.",
          "Análisis geoespacial: cruzan datos demográficos con ubicaciones.",
          "Simulaciones 3D: visualizaciones de cómo se verá tu valla en contexto."
        ]
      },
      { "type": "h2", "text": "Conclusión" },
      { "type": "p", "text": "Elegir bien la ubicación es clave para maximizar el impacto de tu campaña exterior. Recuerda: ubicación, ubicación y ubicación." }
    ],
    "relatedPosts": [1, 5, 6]
  },
  {
    "id": 5,
    "title": "Publicidad en marquesinas: una opción efectiva y económica",
    "excerpt": "Las marquesinas de autobús ofrecen una excelente relación calidad-precio para tu publicidad. Descubre sus ventajas y cómo aprovecharlas.",
    "date": "10 de abril, 2025",
    "imageUrl": "/creative.jpg",
    "slug": "publicidad-marquesinas-opcion-efectiva-economica",
    "author": "Ana García",
    "tags": ["Marquesinas", "Publicidad urbana", "Presupuesto"],
    "contentJsx": [
      { "type": "p", "text": "Las marquesinas se han consolidado como uno de los soportes más eficaces y accesibles de la publicidad exterior urbana." },
      { "type": "h2", "text": "¿Por qué elegir marquesinas para tu publicidad?" },
      { "type": "h3", "text": "Proximidad al consumidor" },
      { "type": "p", "text": "Su ubicación a pie de calle permite un contacto directo con peatones y usuarios del transporte público, facilitando la lectura del mensaje." },
      { "type": "h3", "text": "Tiempo de exposición prolongado" },
      { "type": "p", "text": "Durante la espera del autobús (5-10 minutos), los usuarios están expuestos de forma prolongada al mensaje, aumentando la recordación." },
      { "type": "h3", "text": "Iluminación integrada" },
      { "type": "p", "text": "La mayoría cuentan con luz propia, garantizando visibilidad continua, incluso durante la noche." },
      { "type": "h3", "text": "Segmentación geográfica precisa" },
      { "type": "p", "text": "Permiten elegir ubicaciones estratégicas según tu audiencia: zonas residenciales, comerciales o de ocio." },
      { "type": "h2", "text": "Optimización de campañas en marquesinas" },
      { "type": "h3", "text": "Diseño adaptado al formato" },
      { "type": "p", "text": "El diseño debe ser claro y atractivo, optimizado para la lectura a corta distancia y formato vertical." },
      { "type": "h3", "text": "Circuitos estratégicos" },
      { "type": "p", "text": "Contratar paquetes de marquesinas por zonas puede mejorar el alcance y reducir costes." },
      { "type": "h3", "text": "Integración con tecnología" },
      { "type": "p", "text": "Muchas permiten elementos interactivos como QR o NFC, conectando el soporte físico con entornos digitales." },
      { "type": "h2", "text": "Conclusión" },
      { "type": "p", "text": "Gracias a su accesibilidad, visibilidad constante y precisión geográfica, las marquesinas son una inversión inteligente para marcas que buscan impacto efectivo en el entorno urbano." }
    ],
    "relatedPosts": [3, 4, 6]
  },
  {
    "id": 6,
    "title": "5 razones para invertir en publicidad en transporte público",
    "excerpt": "La publicidad en transporte público ofrece ventajas únicas para las marcas.",
    "date": "25 de abril, 2025",
    "imageUrl": "/car.jpg",
    "slug": "razones-invertir-publicidad-transporte-publico",
    "author": "Carlos Martínez",
    "tags": ["Transporte público", "Publicidad móvil", "Estrategia de marketing"],
    "contentJsx": [
      {
        "type": "p",
        "text": "La publicidad en transporte público es una de las formas más efectivas de llegar a un público amplio y diverso."
      },
      {
        "type": "h2",
        "text": "1. Alcance masivo"
      },
      {
        "type": "p",
        "text": "Millones de personas utilizan el transporte público diariamente en grandes ciudades, lo que garantiza una exposición significativa para las marcas."
      },
      {
        "type": "h2",
        "text": "2. Segmentación geográfica"
      },
      {
        "type": "p",
        "text": "Permite elegir rutas específicas que atraviesen barrios donde se encuentra tu público objetivo, optimizando la inversión publicitaria."
      },
      {
        "type": "h2",
        "text": "3. Tiempo de exposición prolongado"
      },
      {
        "type": "p",
        "text": "Los pasajeros pasan varios minutos en el transporte público, proporcionando más tiempo para captar la atención con tus anuncios."
      },
      {
        "type": "h2",
        "text": "4. Relación calidad-precio excepcional"
      },
      {
        "type": "p",
        "text": "La publicidad en transporte público tiene un coste por impacto significativamente menor que otros medios tradicionales como la televisión o la radio."
      },
      {
        "type": "h2",
        "text": "5. Versatilidad de formatos"
      },
      {
        "type": "p",
        "text": "Desde vinilos exteriores hasta carteles interiores y pantallas digitales, el transporte público ofrece múltiples formatos para adaptarse a cualquier estrategia."
      },
      {
        "type": "h2",
        "text": "Conclusión"
      },
      {
        "type": "p",
        "text": "La publicidad en transporte público sigue siendo una opción efectiva y rentable para alcanzar un amplio público objetivo en el entorno urbano moderno."
      }
    ],
    "relatedPosts": [1, 3, 4]
  },  
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(postId: number): BlogPost[] {
  const post = blogPosts.find((p) => p.id === postId)
  if (!post || !post.relatedPosts) return []

  return post.relatedPosts.map((id) => blogPosts.find((p) => p.id === id)).filter(Boolean) as BlogPost[]
}
