interface JsonLdProps {
  data: Record<string, unknown>
}

/**
 * JSON-LD structured data component for Schema.org
 * Renders a script tag with JSON-LD structured data for SEO
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0),
      }}
    />
  )
}
