/**
 * RichText Component
 * Renders Portable Text content from Sanity CMS
 */

import React from 'react'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/react'

// Re-export type for backwards compatibility
export type RichTextContent = PortableTextBlock[]

interface RichTextProps {
  content: PortableTextBlock[] | null | undefined
  className?: string
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="font-bold mb-4 mt-8">{children}</h1>,
    h2: ({ children }) => <h2 className="font-bold mb-4 mt-8">{children}</h2>,
    h3: ({ children }) => <h3 className="font-bold mb-4 mt-8">{children}</h3>,
    h4: ({ children }) => <h4 className="font-bold mb-4 mt-8">{children}</h4>,
    h5: ({ children }) => <h5 className="font-bold mb-4 mt-8">{children}</h5>,
    h6: ({ children }) => <h6 className="font-bold mb-4 mt-8">{children}</h6>,
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gold-500 pl-4 italic my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="text-gold-500 hover:text-gold-600 underline"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 px-1 rounded">{children}</code>
    ),
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    'strike-through': ({ children }) => <s>{children}</s>,
  },
  list: {
    bullet: ({ children }) => <ul className="mb-4 ml-6 list-disc">{children}</ul>,
    number: ({ children }) => <ol className="mb-4 ml-6 list-decimal">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
}

/**
 * Renders rich text content from Sanity Portable Text
 */
export function RichText({ content, className = '' }: RichTextProps) {
  if (!content || !Array.isArray(content) || content.length === 0) {
    return null
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <PortableText value={content} components={components} />
    </div>
  )
}

/**
 * Utility to extract plain text from Portable Text content
 */
export function extractPlainText(content: PortableTextBlock[] | null | undefined): string {
  if (!content || !Array.isArray(content)) {
    return ''
  }

  return content
    .filter((block) => block._type === 'block')
    .map((block) => {
      if (!block.children) return ''
      return (block.children as Array<{ text?: string }>)
        .map((child) => child.text || '')
        .join('')
    })
    .join(' ')
}

/**
 * Utility to truncate rich text content to a specific length
 */
export function truncateRichText(
  content: PortableTextBlock[] | null | undefined,
  maxLength: number,
): string {
  const plainText = extractPlainText(content)

  if (plainText.length <= maxLength) {
    return plainText
  }

  return plainText.substring(0, maxLength).trim() + '...'
}
