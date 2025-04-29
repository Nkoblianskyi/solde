export type BlogPost = {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  imageUrl: string // Nueva propiedad para la URL de la imagen
  slug: string
  content: string
  author: string
  tags: string[]
  relatedPosts?: number[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "El impacto de las vallas digitales en la publicidad moderna",
    excerpt:
      "Descubre cómo las vallas digitales están revolucionando el sector de la publicidad exterior y ofreciendo nuevas oportunidades para las marcas.",
    date: "29 de abril, 2025",
    image: "digital billboards city night advertising",
    imageUrl: "/urban-billboard-night.jpg", // URL específica para este artículo
    slug: "impacto-vallas-digitales-publicidad-moderna",
    author: "María Rodríguez",
    tags: ["Vallas publicitarias", "Publicidad digital", "Innovación"],
    content: `
      <p>Las vallas publicitarias digitales han revolucionado el panorama de la publicidad exterior en los últimos años. A diferencia de las vallas tradicionales, las digitales ofrecen una flexibilidad sin precedentes y nuevas posibilidades creativas para las marcas.</p>
      
      <h2>Ventajas de las vallas digitales</h2>
      
      <p>Las vallas digitales presentan numerosas ventajas frente a las tradicionales:</p>
      
      <ul>
        <li><strong>Contenido dinámico:</strong> Permiten mostrar contenido en movimiento, lo que aumenta significativamente la atención del público.</li>
        <li><strong>Programación flexible:</strong> Es posible programar diferentes anuncios según la hora del día o el día de la semana.</li>
        <li><strong>Cambios instantáneos:</strong> No es necesario esperar días para cambiar el contenido, se puede hacer de forma remota e instantánea.</li>
        <li><strong>Mayor impacto visual:</strong> La iluminación y el movimiento generan un mayor impacto, especialmente en horario nocturno.</li>
      </ul>
      
      <h2>El futuro de la publicidad digital exterior</h2>
      
      <p>El futuro de las vallas digitales apunta hacia una mayor interactividad y personalización. Las nuevas tecnologías están permitiendo que estas vallas puedan interactuar con los smartphones de los transeúntes o incluso reconocer patrones demográficos para mostrar anuncios más relevantes.</p>
      
      <p>Además, la integración con campañas de redes sociales está creando experiencias omnicanal que maximizan el impacto de las marcas en su público objetivo.</p>
      
      <h2>Consideraciones medioambientales</h2>
      
      <p>A pesar de sus ventajas, es importante considerar el impacto medioambiental de estas vallas. El consumo energético es significativamente mayor que el de las vallas tradicionales, por lo que muchas empresas están optando por soluciones alimentadas con energía solar o sistemas de eficiencia energética.</p>
      
      <h2>Conclusión</h2>
      
      <p>Las vallas digitales representan el futuro de la publicidad exterior. Su capacidad para ofrecer contenido dinámico, personalizado y programable las convierte en una herramienta invaluable para las marcas que buscan destacar en un entorno urbano cada vez más saturado de estímulos visuales.</p>
    `,
    relatedPosts: [2, 5, 6],
  },
  {
    id: 2,
    title: "5 razones para invertir en publicidad en transporte público",
    excerpt:
      "La publicidad en transporte público ofrece ventajas únicas para las marcas. Te explicamos por qué deberías considerarla en tu estrategia de marketing.",
    date: "25 de abril, 2025",
    image: "bus stop advertising campaign city",
    imageUrl: "/car.jpg", // URL específica para este artículo
    slug: "razones-invertir-publicidad-transporte-publico",
    author: "Carlos Martínez",
    tags: ["Transporte público", "Publicidad móvil", "Estrategia de marketing"],
    content: `
      <p>La publicidad en transporte público es una de las formas más efectivas de llegar a un público amplio y diverso. A continuación, te presentamos cinco razones convincentes para incluir este tipo de publicidad en tu estrategia de marketing.</p>
      
      <h2>1. Alcance masivo</h2>
      
      <p>Millones de personas utilizan el transporte público diariamente. En ciudades como Madrid, Barcelona o Valencia, los autobuses, metros y tranvías transportan a una cantidad enorme de pasajeros cada día, lo que garantiza una exposición significativa para tu marca.</p>
      
      <h2>2. Segmentación geográfica</h2>
      
      <p>La publicidad en transporte te permite segmentar por zonas específicas de la ciudad. Puedes elegir rutas que atraviesen barrios donde se encuentra tu público objetivo, maximizando así la eficacia de tu inversión.</p>
      
      <h2>3. Tiempo de exposición prolongado</h2>
      
      <p>Los pasajeros pasan un tiempo considerable en el transporte público, lo que significa que tienen más tiempo para ver y asimilar tu mensaje. Esto es especialmente valioso en comparación con otros medios donde la exposición puede ser más fugaz.</p>
      
      <h2>4. Relación calidad-precio excepcional</h2>
      
      <p>En comparación con otros medios publicitarios, la publicidad en transporte público ofrece una excelente relación calidad-precio. El coste por impacto es significativamente menor que en medios como la televisión o la radio.</p>
      
      <h2>5. Versatilidad de formatos</h2>
      
      <p>Desde vinilos en el exterior de los vehículos hasta carteles en el interior, marquesinas o incluso publicidad digital, el transporte público ofrece una amplia variedad de formatos que se pueden adaptar a diferentes presupuestos y objetivos de campaña.</p>
      
      <h2>Conclusión</h2>
      
      <p>La publicidad en transporte público sigue siendo una opción altamente efectiva en la era digital. Su capacidad para llegar a un público amplio, con un tiempo de exposición prolongado y a un coste razonable, la convierte en una opción que ninguna marca debería descartar en su estrategia de marketing.</p>
    `,
    relatedPosts: [1, 3, 4],
  },
  {
    id: 3,
    title: "Tendencias en publicidad exterior para 2025",
    excerpt:
      "Analizamos las tendencias que dominarán el sector de la publicidad exterior este año y cómo pueden beneficiar a tu marca.",
    date: "20 de abril, 2025",
    image: "modern outdoor advertising trends city",
    imageUrl: "/city.jpg", // URL específica para este artículo
    slug: "tendencias-publicidad-exterior-2025",
    author: "Laura Sánchez",
    tags: ["Tendencias", "Innovación", "Publicidad exterior"],
    content: `
      <p>El sector de la publicidad exterior está en constante evolución, adaptándose a las nuevas tecnologías y a los cambios en los hábitos de consumo. En este artículo, analizamos las principales tendencias que dominarán el panorama de la publicidad exterior en 2025.</p>
      
      <h2>Integración con tecnología móvil</h2>
      
      <p>La conexión entre publicidad exterior y dispositivos móviles será cada vez más fluida. Las vallas y mupis incorporarán códigos QR, tecnología NFC o beacons que permitirán a los usuarios interactuar con los anuncios desde sus smartphones, ampliando la experiencia y facilitando la conversión inmediata.</p>
      
      <h2>Publicidad programática en exterior</h2>
      
      <p>La compra programática de espacios publicitarios exteriores está ganando terreno rápidamente. Esta tecnología permite a los anunciantes comprar espacio en vallas digitales en tiempo real, optimizando las campañas según variables como el clima, la hora del día o eventos locales.</p>
      
      <h2>Personalización y contextualización</h2>
      
      <p>Las vallas digitales equipadas con sensores y cámaras pueden ahora analizar datos demográficos básicos de los transeúntes y adaptar el contenido mostrado en tiempo real. Esto permite una publicidad más relevante y personalizada, aumentando significativamente su efectividad.</p>
      
      <h2>Sostenibilidad como prioridad</h2>
      
      <p>La preocupación por el medio ambiente está impulsando innovaciones en el sector. Desde vallas alimentadas con energía solar hasta materiales biodegradables para carteles, la sostenibilidad se ha convertido en un factor diferencial valorado tanto por anunciantes como por consumidores.</p>
      
      <h2>Experiencias inmersivas</h2>
      
      <p>La realidad aumentada y otras tecnologías inmersivas están transformando la publicidad exterior tradicional en experiencias interactivas. Estas innovaciones permiten a las marcas crear momentos memorables que generan un mayor engagement y viralidad en redes sociales.</p>
      
      <h2>Medición avanzada de resultados</h2>
      
      <p>Las nuevas tecnologías están mejorando significativamente la capacidad de medir el impacto real de la publicidad exterior. Desde el seguimiento de la atención visual mediante eye-tracking hasta la medición de conversiones atribuibles a exposiciones específicas, los anunciantes disponen ahora de datos más precisos para evaluar el ROI.</p>
      
      <h2>Conclusión</h2>
      
      <p>La publicidad exterior está viviendo una auténtica revolución tecnológica que la está convirtiendo en un medio más dinámico, interactivo y medible. Las marcas que sepan aprovechar estas tendencias encontrarán en la publicidad exterior una herramienta cada vez más potente para conectar con su público objetivo de forma relevante y memorable.</p>
    `,
    relatedPosts: [1, 5, 6],
  },
  {
    id: 4,
    title: "Cómo elegir la ubicación perfecta para tu valla publicitaria",
    excerpt:
      "La ubicación es clave en la publicidad exterior. Te ofrecemos consejos para seleccionar el mejor lugar para tu valla publicitaria.",
    date: "15 de abril, 2025",
    image: "billboard location city intersection",
    imageUrl: "/scene.jpg", // URL específica para este artículo
    slug: "como-elegir-ubicacion-perfecta-valla-publicitaria",
    author: "Javier López",
    tags: ["Vallas publicitarias", "Estrategia", "Ubicación"],
    content: `
      <p>La ubicación es uno de los factores más determinantes en el éxito de una campaña de vallas publicitarias. Una valla con un diseño excelente pero mal ubicada tendrá un impacto limitado, mientras que una ubicación estratégica puede multiplicar exponencialmente el retorno de tu inversión.</p>
      
      <h2>Factores clave para elegir la ubicación</h2>
      
      <p>A la hora de seleccionar la ubicación ideal para tu valla publicitaria, debes considerar varios factores fundamentales:</p>
      
      <h3>Volumen y tipo de tráfico</h3>
      
      <p>El número de personas que verán tu valla es crucial, pero también lo es el tipo de público. Analiza no solo el volumen de tráfico, sino también si ese tráfico corresponde a tu público objetivo. Una vía con menos tráfico pero más específico puede ser más efectiva que una autopista muy transitada pero con un público genérico.</p>
      
      <h3>Velocidad del tráfico</h3>
      
      <p>La velocidad a la que se mueve el tráfico determina el tiempo de exposición a tu mensaje. En vías rápidas, el mensaje debe ser muy conciso y el diseño impactante para captar la atención en segundos. En zonas de tráfico lento o con semáforos, puedes permitirte mensajes algo más elaborados.</p>
      
      <h3>Visibilidad y ángulo de visión</h3>
      
      <p>Evalúa la distancia desde la que se puede ver la valla y durante cuánto tiempo permanece visible. También es importante el ángulo: las vallas perpendiculares a la dirección del tráfico suelen tener mejor visibilidad que las paralelas.</p>
      
      <h3>Entorno y competencia</h3>
      
      <p>El entorno donde se ubica la valla influye en su efectividad. Evita zonas saturadas de publicidad donde tu mensaje se diluiría. También considera la coherencia entre el entorno y tu marca: ciertas ubicaciones pueden reforzar o contradecir los valores que quieres transmitir.</p>
      
      <h2>Tipos de ubicaciones estratégicas</h2>
      
      <p>Dependiendo de tus objetivos, ciertos tipos de ubicaciones pueden ser especialmente efectivos:</p>
      
      <ul>
        <li><strong>Entradas a ciudades:</strong> Ideal para marcas que quieren dar la bienvenida a visitantes o turistas.</li>
        <li><strong>Zonas comerciales:</strong> Perfectas para productos de consumo, especialmente cerca de puntos de venta.</li>
        <li><strong>Áreas de ocio:</strong> Estratégicas para productos relacionados con entretenimiento, restauración o moda.</li>
        <li><strong>Rutas de commuters:</strong> Excelentes para mensajes que requieren repetición y construcción de marca a largo plazo.</li>
      </ul>
      
      <h2>Herramientas para la selección de ubicaciones</h2>
      
      <p>Actualmente existen herramientas avanzadas que facilitan la selección de ubicaciones:</p>
      
      <ul>
        <li><strong>Estudios de tráfico:</strong> Proporcionan datos precisos sobre volumen, tipo y patrones de movimiento.</li>
        <li><strong>Mapas de calor:</strong> Visualizan las zonas de mayor concentración de tu público objetivo.</li>
        <li><strong>Análisis geoespacial:</strong> Cruza datos demográficos con ubicaciones potenciales.</li>
        <li><strong>Simulaciones 3D:</strong> Permiten visualizar cómo se verá tu valla desde diferentes puntos y distancias.</li>
      </ul>
      
      <h2>Conclusión</h2>
      
      <p>La selección de la ubicación perfecta para tu valla publicitaria requiere un análisis detallado de múltiples factores. Invertir tiempo en esta fase de planificación puede marcar la diferencia entre una campaña con resultados mediocres y una con un impacto extraordinario. Recuerda que en publicidad exterior, los tres factores clave son: ubicación, ubicación y ubicación.</p>
    `,
    relatedPosts: [1, 5, 6],
  },
  {
    id: 5,
    title: "Publicidad en marquesinas: una opción efectiva y económica",
    excerpt:
      "Las marquesinas de autobús ofrecen una excelente relación calidad-precio para tu publicidad. Descubre sus ventajas y cómo aprovecharlas.",
    date: "10 de abril, 2025",
    image: "bus shelter advertising city street",
    imageUrl: "/creative.jpg", // URL específica para este artículo
    slug: "publicidad-marquesinas-opcion-efectiva-economica",
    author: "Ana García",
    tags: ["Marquesinas", "Publicidad urbana", "Presupuesto"],
    content: `
      <p>Las marquesinas de autobús se han consolidado como uno de los soportes publicitarios más efectivos y accesibles dentro del ámbito de la publicidad exterior. Su ubicación estratégica en el entorno urbano y su excelente relación calidad-precio las convierten en una opción ideal para marcas de todos los tamaños.</p>
      
      <h2>¿Por qué elegir marquesinas para tu publicidad?</h2>
      
      <p>Las marquesinas ofrecen numerosas ventajas que las hacen especialmente atractivas para los anunciantes:</p>
      
      <h3>Proximidad al consumidor</h3>
      
      <p>A diferencia de las grandes vallas, las marquesinas están situadas a nivel de calle, lo que permite un contacto más cercano e íntimo con el público. Los peatones y usuarios del transporte público pueden observar los anuncios con detenimiento, facilitando la transmisión de mensajes más detallados.</p>
      
      <h3>Tiempo de exposición prolongado</h3>
      
      <p>Las personas que esperan el autobús tienen un tiempo medio de espera de 5-10 minutos, durante los cuales están expuestos a tu mensaje publicitario. Este tiempo de exposición es significativamente mayor que el de otros medios exteriores, aumentando las posibilidades de que el mensaje sea recordado.</p>
      
      <h3>Iluminación integrada</h3>
      
      <p>La mayoría de las marquesinas modernas cuentan con iluminación propia, lo que garantiza la visibilidad de tu anuncio las 24 horas del día. Esto es especialmente valioso durante las horas nocturnas, cuando otros soportes no iluminados pierden efectividad.</p>
      
      <h3>Segmentación geográfica precisa</h3>
      
      <p>Las marquesinas permiten una segmentación geográfica muy precisa, pudiendo seleccionar ubicaciones específicas según zonas residenciales, comerciales, de ocio o empresariales. Esto facilita dirigir tu mensaje exactamente al público que te interesa.</p>
      
      <h2>Optimización de campañas en marquesinas</h2>
      
      <p>Para maximizar la efectividad de tu publicidad en marquesinas, considera estas recomendaciones:</p>
      
      <h3>Diseño adaptado al formato</h3>
      
      <p>El diseño debe estar específicamente adaptado a las características de las marquesinas: tamaño vertical, visibilidad a corta distancia y posibilidad de incluir más texto que en otros formatos exteriores. Un diseño que aproveche estas particularidades tendrá mejores resultados.</p>
      
      <h3>Circuitos estratégicos</h3>
      
      <p>En lugar de seleccionar marquesinas individuales, considera contratar circuitos predefinidos que cubran zonas específicas de la ciudad. Esto garantiza una cobertura óptima y suele ofrecer mejores tarifas que la contratación individual.</p>
      
      <h3>Integración con tecnología</h3>
      
      <p>Muchas marquesinas modernas permiten la integración de elementos interactivos como códigos QR o tecnología NFC. Aprovechar estas posibilidades puede enriquecer la experiencia del usuario y facilitar la conversión.</p>
      
      <h2>Conclusión</h2>
      
      <p>Las marquesinas representan una de las mejores opciones en términos de relación impacto-coste dentro de la publicidad exterior. Su capacidad para conectar con el público a nivel de calle, combinada con tiempos de exposición prolongados y posibilidades de segmentación precisa, las convierte en un soporte publicitario altamente efectivo y accesible para marcas con diferentes presupuestos.</p>
    `,
    relatedPosts: [3, 4, 6],
  },
  {
    id: 6,
    title: "El arte de crear mensajes impactantes para publicidad exterior",
    excerpt: "Aprende a diseñar mensajes concisos y efectivos que capturen la atención del público en movimiento.",
    date: "5 de abril, 2025",
    image: "creative billboard design city",
    imageUrl: "/city-2.jpg", // URL específica para este artículo
    slug: "arte-crear-mensajes-impactantes-publicidad-exterior",
    author: "Daniel Torres",
    tags: ["Diseño creativo", "Copywriting", "Impacto visual"],
    content: `
      <p>La publicidad exterior tiene características únicas que la diferencian de otros medios: debe captar la atención en segundos, comunicar un mensaje claro y memorable, y hacerlo en un entorno donde compite con múltiples estímulos visuales. Crear mensajes efectivos para este medio es todo un arte que combina diseño visual y copywriting estratégico.</p>
      
      <h2>Los principios del mensaje efectivo en exterior</h2>
      
      <p>Para crear mensajes que realmente funcionen en publicidad exterior, es fundamental seguir estos principios básicos:</p>
      
      <h3>Simplicidad ante todo</h3>
      
      <p>En publicidad exterior, menos es más. Un mensaje sobrecargado de texto o elementos visuales será ignorado. La regla general es que tu anuncio debe poder entenderse en menos de 5 segundos, lo que implica ser extremadamente selectivo con cada elemento que incluyes.</p>
      
      <h3>Jerarquía visual clara</h3>
      
      <p>El espectador debe saber instantáneamente dónde mirar primero. Una jerarquía visual bien definida guía la mirada a través de los elementos más importantes: primero el elemento visual dominante, luego el titular principal y finalmente la información secundaria.</p>
      
      <h3>Contraste y legibilidad</h3>
      
      <p>El contraste es esencial para garantizar la legibilidad a distancia. Tanto en la elección de colores como en la tipografía, el contraste determina si tu mensaje podrá leerse correctamente desde lejos o en movimiento. Las tipografías sans-serif y los colores contrastantes son generalmente más efectivos.</p>
      
      <h3>Relevancia contextual</h3>
      
      <p>Los mejores anuncios exteriores aprovechan su contexto físico. Ya sea mediante referencias a la ubicación, al momento del día o incluso a las condiciones climáticas, la relevancia contextual multiplica el impacto y la memorabilidad del mensaje.</p>
      
      <h2>Técnicas creativas de alto impacto</h2>
      
      <p>Más allá de los principios básicos, existen técnicas creativas que pueden elevar significativamente el impacto de tu publicidad exterior:</p>
      
      <h3>Extensión del espacio</h3>
      
      <p>Romper los límites físicos del soporte publicitario mediante elementos que parecen extenderse más allá del marco crea un efecto sorprendente que capta inmediatamente la atención.</p>
      
      <h3>Interacción con el entorno</h3>
      
      <p>Diseñar el anuncio para que interactúe con elementos del entorno (edificios, árboles, cielo) genera una integración que resulta visualmente atractiva y memorable.</p>
      
      <h3>Secuencialidad</h3>
      
      <p>Crear una serie de anuncios secuenciales que cuentan una historia a lo largo de un recorrido puede generar expectación y mantener el interés del público durante más tiempo.</p>
      
      <h3>Ilusiones ópticas</h3>
      
      <p>Las ilusiones ópticas y los efectos 3D pueden crear la sensación de profundidad o movimiento en un soporte estático, generando un impacto visual mucho mayor.</p>
      
      <h2>El poder del copywriting en exterior</h2>
      
      <p>Aunque lo visual es fundamental, el texto sigue siendo un elemento crucial en la publicidad exterior. Un buen copywriting para este medio debe ser:</p>
      
      <ul>
        <li><strong>Conciso:</strong> Idealmente no más de 7 palabras en el titular principal.</li>
        <li><strong>Memorable:</strong> Utilizando recursos como la rima, la aliteración o el juego de palabras.</li>
        <li><strong>Intrigante:</strong> Planteando una pregunta o una afirmación que genere curiosidad.</li>
        <li><strong>Accionable:</strong> Incluyendo un call-to-action claro y sencillo cuando sea apropiado.</li>
      </ul>
      
      <h2>Conclusión</h2>
      
      <p>Crear mensajes impactantes para publicidad exterior es un equilibrio entre simplicidad y creatividad, entre impacto visual y claridad del mensaje. Los anuncios más efectivos son aquellos que logran captar la atención instantáneamente, transmitir su mensaje en segundos y dejar una impresión duradera en la mente del espectador. Dominar este arte puede transformar radicalmente los resultados de tus campañas de publicidad exterior.</p>
    `,
    relatedPosts: [3, 4, 5],
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
