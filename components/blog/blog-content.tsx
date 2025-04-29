import type React from "react";

export type BlogContentProps = {
  contentJsx: (
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
  )[];
};

export function BlogContent({ contentJsx }: BlogContentProps) {
  return (
    <div className="prose max-w-none">
      {contentJsx.map((section, index) => {
        switch (section.type) {
          case "p":
            return <p key={index}>{section.text}</p>;
          case "h2":
            return (
              <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                {section.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                {section.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={index} className="list-disc pl-6 mb-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
