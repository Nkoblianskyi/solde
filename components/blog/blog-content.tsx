import type React from "react"

type BlogContentProps = {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  // Dividir el contenido en secciones basadas en etiquetas HTML
  const sections = parseContent(content)

  return <div className="prose max-w-none">{sections.map((section, index) => renderSection(section, index))}</div>
}

type Section = {
  type: string
  content: string | Section[]
}

function parseContent(content: string): Section[] {
  // Esta es una implementación simplificada que maneja los casos básicos
  // En un caso real, se podría usar una librería de parsing HTML más robusta

  const sections: Section[] = []

  // Dividir por párrafos
  const paragraphs = content.split("<p>").filter(Boolean)

  paragraphs.forEach((p) => {
    if (p.startsWith("<h2>")) {
      const endIndex = p.indexOf("</h2>")
      if (endIndex !== -1) {
        sections.push({
          type: "h2",
          content: p.substring(4, endIndex).trim(),
        })

        // Procesar el resto del contenido después del h2
        const rest = p.substring(endIndex + 5).trim()
        if (rest) {
          if (rest.startsWith("<ul>")) {
            // Procesar lista
            const listContent = rest.substring(4, rest.indexOf("</ul>"))
            const items = listContent
              .split("<li>")
              .filter(Boolean)
              .map((item) => {
                return {
                  type: "li",
                  content: item.replace("</li>", "").trim(),
                }
              })

            sections.push({
              type: "ul",
              content: items,
            })
          } else {
            // Procesar como párrafo normal
            sections.push({
              type: "p",
              content: rest.replace("</p>", "").trim(),
            })
          }
        }
      }
    } else if (p.startsWith("<h3>")) {
      const endIndex = p.indexOf("</h3>")
      if (endIndex !== -1) {
        sections.push({
          type: "h3",
          content: p.substring(4, endIndex).trim(),
        })

        // Procesar el resto del contenido después del h3
        const rest = p.substring(endIndex + 5).trim()
        if (rest) {
          sections.push({
            type: "p",
            content: rest.replace("</p>", "").trim(),
          })
        }
      }
    } else if (p.startsWith("<ul>")) {
      // Procesar lista
      const listContent = p.substring(4, p.indexOf("</ul>"))
      const items = listContent
        .split("<li>")
        .filter(Boolean)
        .map((item) => {
          return {
            type: "li",
            content: item.replace("</li>", "").trim(),
          }
        })

      sections.push({
        type: "ul",
        content: items,
      })
    } else {
      // Párrafo normal
      sections.push({
        type: "p",
        content: p.replace("</p>", "").trim(),
      })
    }
  })

  return sections
}

function renderSection(section: Section, index: number): React.ReactNode {
  switch (section.type) {
    case "h2":
      return (
        <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
          {processInlineElements(section.content as string)}
        </h2>
      )
    case "h3":
      return (
        <h3 key={index} className="text-xl font-bold mt-6 mb-3">
          {processInlineElements(section.content as string)}
        </h3>
      )
    case "p":
      return (
        <p key={index} className="mb-4">
          {processInlineElements(section.content as string)}
        </p>
      )
    case "ul":
      return (
        <ul key={index} className="list-disc pl-6 mb-4">
          {(section.content as Section[]).map((item, itemIndex) => (
            <li key={itemIndex} className="mb-2">
              {processInlineElements(item.content as string)}
            </li>
          ))}
        </ul>
      )
    default:
      return null
  }
}

function processInlineElements(text: string): React.ReactNode[] {
  // Procesar elementos inline como <strong>
  if (!text.includes("<strong>")) {
    return [text]
  }

  const parts = []
  let currentIndex = 0

  while (currentIndex < text.length) {
    const strongStart = text.indexOf("<strong>", currentIndex)

    if (strongStart === -1) {
      // No hay más etiquetas strong
      parts.push(text.substring(currentIndex))
      break
    }

    // Añadir el texto antes del strong
    if (strongStart > currentIndex) {
      parts.push(text.substring(currentIndex, strongStart))
    }

    const strongEnd = text.indexOf("</strong>", strongStart)

    if (strongEnd === -1) {
      // Etiqueta strong mal formada
      parts.push(text.substring(currentIndex))
      break
    }

    // Añadir el contenido del strong
    const strongContent = text.substring(strongStart + 8, strongEnd)
    parts.push(<strong key={strongStart}>{strongContent}</strong>)

    currentIndex = strongEnd + 9 // Longitud de </strong>
  }

  return parts
}
