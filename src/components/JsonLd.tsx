interface JsonLdProps {
  data: Record<string, unknown>
}

/**
 * JSON-LD structured data component for Schema.org.
 *
 * Escapes `<` so a value containing `</script>` cannot break out of the
 * script element — required when any field can ever flow from a CMS or
 * other untrusted source. JSON.stringify alone does not escape it.
 * `<` is valid JSON and parses identically to `<`.
 */
function safeJsonLd(data: unknown): string {
  return JSON.stringify(data, null, 0).replace(/</g, '\\u003c')
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  )
}
