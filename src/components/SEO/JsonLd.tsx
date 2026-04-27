'use client'

/**
 * JSON-LD Component for injecting structured data
 * Renders schema.org markup for SEO
 */

interface JsonLdProps {
  data: Record<string, any> | Array<Record<string, any>>
}

// Escape `<` so a value containing `</script>` cannot break out of the script
// element. Required defense-in-depth for any field that could ever flow from
// a CMS or untrusted source. `<` parses identically in JSON-LD.
function safeJsonLd(data: unknown): string {
  return JSON.stringify(data, null, 0).replace(/</g, '\\u003c')
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
          dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
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
