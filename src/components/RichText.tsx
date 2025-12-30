/**
 * RichText Component
 * Renders Lexical rich text content from PayloadCMS
 */

import type { RichTextContent } from '@/payload-types'

interface RichTextProps {
  content: RichTextContent
  className?: string
}

/**
 * Renders rich text content from Lexical editor
 */
export function RichText({ content, className = '' }: RichTextProps) {
  if (!content?.root?.children) {
    return null
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {content.root.children.map((node, index) => (
        <RichTextNode key={index} node={node} />
      ))}
    </div>
  )
}

/**
 * Renders individual rich text nodes
 */
function RichTextNode({ node }: { node: any }) {
  const { type, children, ...props } = node

  // Paragraph
  if (type === 'paragraph') {
    return (
      <p className="mb-4">
        {children?.map((child: any, index: number) => (
          <RichTextNode key={index} node={child} />
        ))}
      </p>
    )
  }

  // Headings
  if (type === 'heading') {
    const HeadingTag = `h${props.tag || '2'}` as keyof JSX.IntrinsicElements
    return (
      <HeadingTag className="font-bold mb-4 mt-8">
        {children?.map((child: any, index: number) => (
          <RichTextNode key={index} node={child} />
        ))}
      </HeadingTag>
    )
  }

  // Text nodes
  if (type === 'text') {
    let textContent = props.text || ''

    // Apply formatting
    if (props.format) {
      const formats = typeof props.format === 'number' ? [props.format] : props.format

      if (formats.includes(1) || props.bold) {
        textContent = <strong>{textContent}</strong>
      }
      if (formats.includes(2) || props.italic) {
        textContent = <em>{textContent}</em>
      }
      if (formats.includes(4) || props.underline) {
        textContent = <u>{textContent}</u>
      }
      if (formats.includes(8) || props.strikethrough) {
        textContent = <s>{textContent}</s>
      }
      if (formats.includes(16) || props.code) {
        textContent = <code className="bg-gray-100 px-1 rounded">{textContent}</code>
      }
    }

    return <>{textContent}</>
  }

  // Links
  if (type === 'link') {
    return (
      <a
        href={props.url}
        target={props.newTab ? '_blank' : undefined}
        rel={props.newTab ? 'noopener noreferrer' : undefined}
        className="text-gold-500 hover:text-gold-600 underline"
      >
        {children?.map((child: any, index: number) => (
          <RichTextNode key={index} node={child} />
        ))}
      </a>
    )
  }

  // Lists
  if (type === 'list') {
    const ListTag = props.listType === 'number' ? 'ol' : 'ul'
    return (
      <ListTag className="mb-4 ml-6 list-disc">
        {children?.map((child: any, index: number) => (
          <RichTextNode key={index} node={child} />
        ))}
      </ListTag>
    )
  }

  // List items
  if (type === 'listitem') {
    return (
      <li className="mb-2">
        {children?.map((child: any, index: number) => (
          <RichTextNode key={index} node={child} />
        ))}
      </li>
    )
  }

  // Blockquote
  if (type === 'quote') {
    return (
      <blockquote className="border-l-4 border-gold-500 pl-4 italic my-6">
        {children?.map((child: any, index: number) => (
          <RichTextNode key={index} node={child} />
        ))}
      </blockquote>
    )
  }

  // Code block
  if (type === 'code') {
    return (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code>
          {children?.map((child: any, index: number) => (
            <RichTextNode key={index} node={child} />
          ))}
        </code>
      </pre>
    )
  }

  // Horizontal rule
  if (type === 'horizontalrule') {
    return <hr className="my-8 border-gray-300" />
  }

  // Line break
  if (type === 'linebreak') {
    return <br />
  }

  // Default: render children if available
  if (children && Array.isArray(children)) {
    return (
      <>
        {children.map((child: any, index: number) => (
          <RichTextNode key={index} node={child} />
        ))}
      </>
    )
  }

  // Fallback for unknown types
  console.warn('Unknown rich text node type:', type)
  return null
}

/**
 * Utility to extract plain text from rich text content
 */
export function extractPlainText(content: RichTextContent): string {
  if (!content?.root?.children) {
    return ''
  }

  const extractFromNode = (node: any): string => {
    if (node.type === 'text') {
      return node.text || ''
    }

    if (node.children && Array.isArray(node.children)) {
      return node.children.map(extractFromNode).join('')
    }

    return ''
  }

  return content.root.children.map(extractFromNode).join(' ')
}

/**
 * Utility to truncate rich text content to a specific length
 */
export function truncateRichText(
  content: RichTextContent,
  maxLength: number
): string {
  const plainText = extractPlainText(content)

  if (plainText.length <= maxLength) {
    return plainText
  }

  return plainText.substring(0, maxLength).trim() + '...'
}
