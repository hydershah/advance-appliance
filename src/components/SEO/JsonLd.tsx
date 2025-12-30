'use client'

/**
 * JSON-LD Component for injecting structured data
 * Renders schema.org markup for SEO
 */

interface JsonLdProps {
  data: Record<string, any> | Array<Record<string, any>>
}

export function JsonLd({ data }: JsonLdProps) {
  // Handle both single schema and array of schemas
  const schemas = Array.isArray(data) ? data : [data]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0),
          }}
        />
      ))}
    </>
  )
}

/**
 * Multiple schemas wrapper for convenience
 */
interface MultipleJsonLdProps {
  schemas: Array<Record<string, any>>
}

export function MultipleJsonLd({ schemas }: MultipleJsonLdProps) {
  return <JsonLd data={schemas} />
}
