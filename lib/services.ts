export type Service = {
  id: string
  title: string
  description: string
  image: string
  imageUrl: string // Nueva propiedad para la URL de la imagen
  content: string
  features: string[]
  longDescription: string
  benefits: { title: string; description: string }[]
  process: { step: number; title: string; description: string }[]
  faq: { question: string; answer: string }[]
}

export const services: Service[] = [
  {
    id: "vallas",
    title: "Vallas Publicitarias",
    description: "Impacto visual a gran escala",
    image: "large billboard advertising in city",
    imageUrl: "/urban-billboard-scene.png", // URL específica para este servicio
    content:
      "Desde vallas tradicionales hasta espectaculares digitales, ofrecemos ubicaciones estratégicas para maximizar la visibilidad de tu marca en las principales vías de la ciudad.",
    features: [
      "Vallas estáticas tradicionales",
      "Vallas digitales LED",
      "Lonas de gran formato",
      "Ubicaciones premium en zonas de alto tráfico",
    ],
    longDescription: `
      Las vallas publicitarias son uno de los medios más efectivos para conseguir visibilidad a gran escala. En Sol de Publicidad ofrecemos una amplia gama de opciones para que tu marca destaque en el entorno urbano.
      
      Nuestras vallas publicitarias están estratégicamente ubicadas en las principales vías de circulación, asegurando un alto impacto visual y una exposición continua a un público amplio y diverso.
      
      Trabajamos con los formatos más innovadores del mercado, desde las tradicionales vallas estáticas hasta los espectaculares digitales con tecnología LED de última generación, que permiten mostrar contenido dinámico y programable.
    `,
    benefits: [
      {
        title: "Visibilidad 24/7",
        description:
          "Tus anuncios estarán visibles las 24 horas del día, los 7 días de la semana, maximizando el retorno de tu inversión.",
      },
      {
        title: "Impacto a gran escala",
        description:
          "El gran formato de las vallas permite crear anuncios impactantes que captan la atención inmediata del público.",
      },
      {
        title: "Ubicaciones estratégicas",
        description:
          "Seleccionamos cuidadosamente las ubicaciones para asegurar la máxima visibilidad y el mayor tráfico posible.",
      },
      {
        title: "Flexibilidad creativa",
        description: "Las vallas ofrecen un lienzo amplio para expresar tu creatividad y transmitir mensajes potentes.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Análisis de necesidades",
        description: "Estudiamos tus objetivos, público objetivo y presupuesto para ofrecerte las mejores opciones.",
      },
      {
        step: 2,
        title: "Selección de ubicaciones",
        description: "Te proponemos las ubicaciones más adecuadas según tu estrategia de marketing.",
      },
      {
        step: 3,
        title: "Diseño creativo",
        description: "Nuestro equipo de diseño crea conceptos impactantes adaptados al formato de valla seleccionado.",
      },
      {
        step: 4,
        title: "Producción e instalación",
        description: "Nos encargamos de la producción de alta calidad y la instalación profesional de tu anuncio.",
      },
      {
        step: 5,
        title: "Seguimiento y mantenimiento",
        description:
          "Realizamos un seguimiento continuo y mantenimiento para asegurar que tu anuncio luzca siempre perfecto.",
      },
    ],
    faq: [
      {
        question: "¿Cuánto tiempo dura una campaña de vallas publicitarias?",
        answer:
          "La duración mínima suele ser de 2 semanas, aunque lo recomendable para obtener buenos resultados es mantener la campaña durante al menos 1 mes. También ofrecemos contratos a largo plazo con tarifas especiales.",
      },
      {
        question: "¿Qué tamaños de vallas ofrecéis?",
        answer:
          "Disponemos de diversos formatos, desde vallas estándar de 8x3 metros hasta espectaculares de gran formato. El tamaño se selecciona en función de la ubicación y tus objetivos de campaña.",
      },
      {
        question: "¿Puedo cambiar el diseño durante la campaña?",
        answer:
          "En vallas tradicionales, el cambio de diseño implica costes adicionales de producción e instalación. En vallas digitales, el contenido puede cambiarse de forma remota con mayor frecuencia y flexibilidad.",
      },
      {
        question: "¿Cómo se mide la efectividad de una campaña de vallas?",
        answer:
          "Utilizamos datos de tráfico, estudios de visibilidad y, en el caso de vallas digitales, también podemos ofrecer métricas de impresiones. Además, podemos implementar códigos QR o URLs específicas para medir la respuesta directa.",
      },
    ],
  },
  {
    id: "transporte",
    title: "Publicidad en Transporte",
    description: "Tu marca en movimiento",
    image: "bus advertising wrap city transport",
    imageUrl: "/urban-transit-wrap.png", // URL específica para este servicio
    content:
      "Lleva tu mensaje por toda la ciudad con nuestras soluciones de publicidad en medios de transporte público y privado.",
    features: [
      "Rotulación integral de autobuses",
      "Publicidad en taxis",
      "Campañas en metro y tranvía",
      "Publicidad interior en vehículos",
    ],
    longDescription: `
      La publicidad en transporte es una forma dinámica y efectiva de llevar tu mensaje a toda la ciudad. En Sol de Publicidad ofrecemos soluciones integrales para que tu marca viaje con los ciudadanos en su día a día.
      
      Nuestras campañas de publicidad en transporte abarcan todos los medios de movilidad urbana: autobuses, taxis, metro, tranvía y más. Esto permite que tu mensaje llegue a un público amplio y diverso en diferentes momentos del día.
      
      Desde rotulaciones integrales que convierten vehículos enteros en anuncios móviles, hasta publicidad interior que acompaña a los pasajeros durante sus trayectos, ofrecemos múltiples formatos adaptados a tus necesidades y presupuesto.
    `,
    benefits: [
      {
        title: "Movilidad y alcance",
        description: "Tu anuncio recorre la ciudad, llegando a diferentes zonas y públicos a lo largo del día.",
      },
      {
        title: "Alta frecuencia de impactos",
        description:
          "Los usuarios habituales del transporte público verán tu anuncio repetidamente, reforzando el recuerdo de marca.",
      },
      {
        title: "Segmentación geográfica",
        description:
          "Puedes seleccionar rutas específicas que atraviesen zonas donde se encuentra tu público objetivo.",
      },
      {
        title: "Tiempo de exposición prolongado",
        description:
          "Los pasajeros pasan un tiempo considerable en el transporte, lo que aumenta la efectividad del mensaje.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Definición de objetivos",
        description: "Analizamos tus necesidades para determinar el tipo de transporte y rutas más adecuadas.",
      },
      {
        step: 2,
        title: "Selección de formatos",
        description: "Te asesoramos sobre los mejores formatos según tu presupuesto y objetivos de comunicación.",
      },
      {
        step: 3,
        title: "Diseño adaptado",
        description: "Creamos diseños específicos para cada tipo de soporte, maximizando su impacto visual.",
      },
      {
        step: 4,
        title: "Producción y aplicación",
        description: "Nos encargamos de la producción de materiales y su correcta aplicación en los vehículos.",
      },
      {
        step: 5,
        title: "Control de calidad",
        description:
          "Realizamos seguimiento continuo para asegurar que tu publicidad se mantiene en perfectas condiciones.",
      },
    ],
    faq: [
      {
        question: "¿Cuánto tiempo dura una campaña de publicidad en transporte?",
        answer:
          "Las campañas suelen tener una duración mínima de un mes, aunque lo recomendable es mantenerla durante al menos 3 meses para obtener resultados óptimos.",
      },
      {
        question: "¿Puedo elegir rutas específicas para mi publicidad?",
        answer:
          "Sí, ofrecemos la posibilidad de seleccionar líneas y rutas específicas que se ajusten a tu público objetivo y zonas de interés.",
      },
      {
        question: "¿Qué tipos de formatos están disponibles para autobuses?",
        answer:
          "Ofrecemos desde rotulación integral (que cubre todo el vehículo), laterales completos, traseras, hasta formatos más pequeños como lunetas o marquesinas.",
      },
      {
        question: "¿La publicidad en transporte resiste las inclemencias del tiempo?",
        answer:
          "Utilizamos materiales de alta calidad y técnicas de aplicación profesionales que garantizan la durabilidad de la publicidad frente a condiciones climáticas adversas y lavados frecuentes.",
      },
    ],
  },
  {
    id: "marquesinas",
    title: "Marquesinas y Mupis",
    description: "Presencia urbana estratégica",
    image: "bus shelter advertising city street",
    imageUrl: "/urban-billboard-night.png", // URL específica para este servicio
    content:
      "Aprovecha la red de marquesinas y mupis ubicados en puntos estratégicos de la ciudad para llegar a tu público objetivo.",
    features: [
      "Marquesinas de autobús",
      "Mupis digitales e iluminados",
      "Circuitos por zonas específicas",
      "Posibilidad de campañas temporales o permanentes",
    ],
    longDescription: `
      Las marquesinas y mupis son elementos integrados en el mobiliario urbano que ofrecen una excelente oportunidad para conectar con el público a nivel de calle. En Sol de Publicidad gestionamos una amplia red de estos soportes ubicados estratégicamente en toda la ciudad.
      
      Las marquesinas de autobús combinan la utilidad para los ciudadanos con un espacio publicitario de gran visibilidad, tanto para peatones como para el tráfico rodado. Los mupis, por su parte, están situados en zonas de alto tránsito peatonal, ofreciendo un impacto directo a los transeúntes.
      
      Ambos formatos están disponibles en versiones tradicionales e iluminadas, así como en innovadores formatos digitales que permiten contenido dinámico y mayor flexibilidad en la programación de campañas.
    `,
    benefits: [
      {
        title: "Proximidad al consumidor",
        description: "Tu mensaje está presente a nivel de calle, cerca de los puntos de decisión de compra.",
      },
      {
        title: "Segmentación geográfica precisa",
        description: "Puedes seleccionar ubicaciones específicas según zonas comerciales, residenciales o de ocio.",
      },
      {
        title: "Formatos iluminados",
        description: "La iluminación garantiza visibilidad las 24 horas, con especial impacto en horario nocturno.",
      },
      {
        title: "Excelente relación calidad-precio",
        description: "Ofrecen un coste por impacto muy competitivo en comparación con otros medios publicitarios.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Planificación estratégica",
        description: "Definimos los objetivos de tu campaña y seleccionamos las ubicaciones más adecuadas.",
      },
      {
        step: 2,
        title: "Selección de circuitos",
        description: "Te ofrecemos circuitos predefinidos por zonas o creamos uno personalizado según tus necesidades.",
      },
      {
        step: 3,
        title: "Diseño adaptado",
        description: "Nuestro equipo creativo desarrolla diseños optimizados para estos formatos específicos.",
      },
      {
        step: 4,
        title: "Producción e instalación",
        description: "Nos encargamos de la impresión de alta calidad y la correcta instalación en cada soporte.",
      },
      {
        step: 5,
        title: "Mantenimiento y seguimiento",
        description: "Realizamos controles periódicos para asegurar el perfecto estado de tu publicidad.",
      },
    ],
    faq: [
      {
        question: "¿Cuál es la duración mínima de una campaña en marquesinas?",
        answer:
          "Las campañas suelen tener una duración mínima de 7 días, aunque lo recomendable para obtener buenos resultados es mantenerla durante al menos 2 semanas.",
      },
      {
        question: "¿Puedo seleccionar marquesinas individuales o debo contratar circuitos completos?",
        answer:
          "Ofrecemos ambas opciones. Puedes seleccionar ubicaciones individuales estratégicas o contratar circuitos predefinidos que cubren zonas específicas de la ciudad.",
      },
      {
        question: "¿Qué diferencia hay entre un mupi tradicional y uno digital?",
        answer:
          "Los mupis digitales permiten mostrar contenido dinámico, programar diferentes creatividades según horarios y realizar cambios de forma remota, mientras que los tradicionales muestran una imagen fija durante toda la campaña.",
      },
      {
        question: "¿Cómo se mide la efectividad de una campaña en marquesinas y mupis?",
        answer:
          "Utilizamos datos de tráfico peatonal y vehicular, estudios de visibilidad y, en el caso de formatos digitales, también podemos ofrecer métricas de impresiones. Además, podemos implementar códigos QR para medir la respuesta directa.",
      },
    ],
  },
  {
    id: "eventos",
    title: "Publicidad para Eventos",
    description: "Soluciones temporales de alto impacto",
    image: "event outdoor advertising festival",
    imageUrl: "/vibrant-city-billboard.png", // URL específica para este servicio
    content:
      "Desarrollamos soluciones publicitarias específicas para eventos, ferias y congresos que maximizan la visibilidad de tu marca.",
    features: ["Estructuras temporales", "Lonas y banderolas", "Señalética personalizada", "Activaciones de marca"],
    longDescription: `
      Los eventos representan oportunidades únicas para conectar con públicos específicos en momentos de alta receptividad. En Sol de Publicidad desarrollamos soluciones publicitarias temporales diseñadas específicamente para maximizar la presencia de tu marca en ferias, congresos, festivales y todo tipo de eventos.
      
      Nuestras soluciones abarcan desde grandes estructuras publicitarias que dominan el espacio del evento, hasta elementos más pequeños pero estratégicos como banderolas, tótems o señalética personalizada que guía a los asistentes mientras refuerza tu mensaje de marca.
      
      Trabajamos en estrecha colaboración con organizadores de eventos para identificar los espacios más estratégicos y desarrollar soluciones que se integren perfectamente con la estética y funcionalidad del evento.
    `,
    benefits: [
      {
        title: "Público altamente segmentado",
        description:
          "Los eventos atraen a públicos con intereses específicos, lo que permite una comunicación más directa y efectiva.",
      },
      {
        title: "Alta receptividad",
        description:
          "Los asistentes a eventos están más abiertos a recibir información y nuevas propuestas relacionadas con la temática.",
      },
      {
        title: "Experiencia inmersiva",
        description:
          "Puedes crear experiencias de marca completas que involucren múltiples sentidos y generen recuerdo.",
      },
      {
        title: "Flexibilidad y personalización",
        description: "Cada solución se diseña específicamente para el evento y tus objetivos particulares.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Análisis del evento",
        description: "Estudiamos las características del evento, perfil de asistentes y espacios disponibles.",
      },
      {
        step: 2,
        title: "Propuesta estratégica",
        description: "Desarrollamos una propuesta integral que maximice la visibilidad de tu marca en el evento.",
      },
      {
        step: 3,
        title: "Diseño creativo",
        description: "Creamos diseños impactantes adaptados a cada soporte y coherentes con tu identidad de marca.",
      },
      {
        step: 4,
        title: "Producción e instalación",
        description: "Gestionamos la producción de todos los elementos y su correcta instalación antes del evento.",
      },
      {
        step: 5,
        title: "Supervisión y desmontaje",
        description: "Supervisamos el estado de los elementos durante todo el evento y nos encargamos del desmontaje.",
      },
    ],
    faq: [
      {
        question: "¿Con cuánta antelación debo planificar la publicidad para un evento?",
        answer:
          "Recomendamos comenzar la planificación al menos 2 meses antes del evento para garantizar la disponibilidad de los mejores espacios y permitir un desarrollo creativo óptimo.",
      },
      {
        question: "¿Qué tipos de eventos son más adecuados para este tipo de publicidad?",
        answer:
          "Cualquier evento con afluencia de público puede beneficiarse de nuestra publicidad: ferias comerciales, congresos, festivales de música, eventos deportivos, inauguraciones, etc.",
      },
      {
        question: "¿Os encargáis de todos los permisos necesarios?",
        answer:
          "Sí, gestionamos todos los permisos necesarios con los organizadores del evento y, si fuera necesario, con las autoridades locales para la instalación de elementos publicitarios.",
      },
      {
        question: "¿Ofrecéis servicios de activación de marca durante el evento?",
        answer:
          "Sí, además de los elementos publicitarios físicos, podemos desarrollar acciones de activación como stands promocionales, equipos de promotores, experiencias interactivas, etc.",
      },
    ],
  },
  {
    id: "diseno",
    title: "Diseño Creativo",
    description: "Creatividad que captura miradas",
    image: "creative design team working billboard",
    imageUrl: "/creative-billboard-session.png", // URL específica para este servicio
    content:
      "Nuestro equipo de diseñadores especializados en publicidad exterior creará conceptos impactantes adaptados a las características específicas de cada soporte.",
    features: [
      "Conceptualización creativa",
      "Diseño adaptado a cada formato",
      "Producción gráfica de alta calidad",
      "Asesoramiento en comunicación visual",
    ],
    longDescription: `
      El diseño es un factor crítico en el éxito de cualquier campaña de publicidad exterior. En Sol de Publicidad contamos con un equipo de diseñadores especializados en crear conceptos visuales impactantes que capturan la atención en segundos y transmiten mensajes memorables.
      
      Entendemos las particularidades de cada formato publicitario exterior y las adaptamos a nuestras creaciones: desde la simplicidad necesaria en vallas vistas a alta velocidad, hasta el detalle posible en soportes más cercanos al peatón.
      
      Nuestro proceso creativo combina estrategia, conocimiento del consumidor y tendencias visuales para desarrollar conceptos que no solo destacan visualmente, sino que también comunican de forma efectiva los valores y mensajes de tu marca.
    `,
    benefits: [
      {
        title: "Diseño especializado",
        description:
          "Nuestros diseñadores están especializados en publicidad exterior y comprenden sus particularidades.",
      },
      {
        title: "Impacto visual garantizado",
        description: "Creamos diseños que captan la atención inmediata incluso en entornos saturados de estímulos.",
      },
      {
        title: "Coherencia de marca",
        description: "Mantenemos la esencia de tu marca mientras la adaptamos óptimamente a cada formato exterior.",
      },
      {
        title: "Mensajes memorables",
        description: "Desarrollamos conceptos que permanecen en la mente del público y generan recuerdo de marca.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Briefing y estrategia",
        description: "Analizamos a fondo tus objetivos, público objetivo y valores de marca.",
      },
      {
        step: 2,
        title: "Conceptualización",
        description: "Desarrollamos varios conceptos creativos alineados con tu estrategia de comunicación.",
      },
      {
        step: 3,
        title: "Presentación de propuestas",
        description: "Te presentamos las mejores ideas con mockups realistas para visualizar el resultado final.",
      },
      {
        step: 4,
        title: "Refinamiento",
        description: "Perfeccionamos el concepto seleccionado según tus comentarios y necesidades.",
      },
      {
        step: 5,
        title: "Adaptación a formatos",
        description: "Adaptamos el diseño a todos los formatos necesarios para tu campaña.",
      },
    ],
    faq: [
      {
        question: "¿Cuánto tiempo lleva desarrollar un concepto creativo?",
        answer:
          "El proceso creativo suele llevar entre 1 y 2 semanas, dependiendo de la complejidad del proyecto y el número de revisiones necesarias.",
      },
      {
        question: "¿Necesito tener claro exactamente lo que quiero antes de contactaros?",
        answer:
          "No es necesario. Parte de nuestro trabajo es ayudarte a definir qué quieres comunicar y cómo hacerlo de la forma más efectiva. Podemos partir de ideas muy generales.",
      },
      {
        question: "¿Puedo solicitar cambios en los diseños propuestos?",
        answer:
          "Por supuesto. Nuestro proceso incluye una fase de refinamiento donde incorporamos tus comentarios y realizamos los ajustes necesarios hasta tu completa satisfacción.",
      },
      {
        question: "¿Adaptáis diseños ya existentes a formatos de publicidad exterior?",
        answer:
          "Sí, podemos adaptar creatividades existentes de tu marca a los diferentes formatos de publicidad exterior, optimizándolas para maximizar su impacto en este medio específico.",
      },
    ],
  },
  {
    id: "consultoria",
    title: "Consultoría Estratégica",
    description: "Maximiza el retorno de tu inversión",
    image: "marketing team meeting office",
    imageUrl: "/cons.jpg", // URL específica para este servicio
    content:
      "Te asesoramos para seleccionar las mejores ubicaciones y formatos según tu público objetivo, presupuesto y objetivos de campaña.",
    features: [
      "Análisis de público objetivo",
      "Selección estratégica de ubicaciones",
      "Planificación de campañas",
      "Medición de resultados",
    ],
    longDescription: `
      La publicidad exterior es una inversión significativa que requiere una planificación estratégica para maximizar su efectividad. En Sol de Publicidad ofrecemos servicios de consultoría especializada para ayudarte a tomar las decisiones más acertadas en cada fase de tu campaña.
      
      Nuestro equipo de consultores combina un profundo conocimiento del sector con herramientas avanzadas de análisis para identificar las mejores oportunidades según tus objetivos específicos, público objetivo y presupuesto disponible.
      
      Desde la selección de ubicaciones y formatos hasta la planificación temporal de la campaña y la medición de resultados, te acompañamos en todo el proceso para asegurar el máximo retorno de tu inversión publicitaria.
    `,
    benefits: [
      {
        title: "Optimización de recursos",
        description:
          "Maximizamos la efectividad de tu presupuesto, seleccionando las opciones con mejor relación impacto-coste.",
      },
      {
        title: "Decisiones basadas en datos",
        description:
          "Utilizamos datos de tráfico, perfiles demográficos y estudios de mercado para fundamentar cada recomendación.",
      },
      {
        title: "Estrategia personalizada",
        description:
          "Desarrollamos una estrategia completamente adaptada a tus objetivos específicos y características de marca.",
      },
      {
        title: "Visión experta",
        description:
          "Te beneficias de nuestra experiencia y conocimiento profundo del sector de la publicidad exterior.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Análisis inicial",
        description: "Estudiamos a fondo tu marca, objetivos, público objetivo y competencia.",
      },
      {
        step: 2,
        title: "Definición de estrategia",
        description: "Desarrollamos una estrategia integral de publicidad exterior adaptada a tus necesidades.",
      },
      {
        step: 3,
        title: "Selección de medios",
        description: "Recomendamos los formatos y ubicaciones óptimos según la estrategia definida.",
      },
      {
        step: 4,
        title: "Planificación temporal",
        description: "Establecemos el calendario ideal para maximizar el impacto de tu campaña.",
      },
      {
        step: 5,
        title: "Análisis de resultados",
        description: "Medimos y analizamos los resultados para optimizar futuras acciones.",
      },
    ],
    faq: [
      {
        question: "¿Qué información necesitáis para desarrollar una estrategia efectiva?",
        answer:
          "Necesitamos información sobre tu marca, objetivos de marketing, público objetivo, presupuesto disponible, calendario comercial y, si es posible, resultados de campañas anteriores.",
      },
      {
        question: "¿Cómo medís la efectividad de una campaña de publicidad exterior?",
        answer:
          "Utilizamos una combinación de métricas: datos de tráfico y exposición, estudios de notoriedad de marca, seguimiento de conversiones a través de códigos o URLs específicas, y en el caso de campañas digitales, métricas de impresiones y engagement.",
      },
      {
        question: "¿Trabajáis con cualquier presupuesto?",
        answer:
          "Sí, adaptamos nuestras recomendaciones a diferentes niveles de presupuesto. Lo importante es definir objetivos realistas según los recursos disponibles y optimizar cada euro invertido.",
      },
      {
        question: "¿Ofrecéis consultoría para campañas internacionales?",
        answer:
          "Sí, a través de nuestra red de colaboradores podemos asesorar en campañas de publicidad exterior en las principales ciudades europeas y algunas internacionales. Cada mercado tiene sus particularidades que conocemos en profundidad.",
      },
    ],
  },
]

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id)
}
