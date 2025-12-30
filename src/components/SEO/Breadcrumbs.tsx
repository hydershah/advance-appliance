'use client'

import Link from 'next/link'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { JsonLd } from './JsonLd'

/**
 * Breadcrumb component with Schema.org markup
 * Provides navigation trail and SEO benefits
 */

export interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Always include Home as first item
  const allItems: BreadcrumbItem[] = [
    { name: 'Home', url: '/' },
    ...items,
  ]

  const schema = generateBreadcrumbSchema(allItems)

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1

            return (
              <li key={item.url} className="flex items-center gap-2">
                {!isLast ? (
                  <>
                    <Link
                      href={item.url}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.name}
                    </Link>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </>
                ) : (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {item.name}
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

/**
 * Minimal breadcrumb for mobile
 */
export function BreadcrumbsMobile({ items }: BreadcrumbsProps) {
  if (items.length === 0) return null

  const previousPage = items[items.length - 2] || { name: 'Home', url: '/' }

  return (
    <nav aria-label="Breadcrumb" className="lg:hidden">
      <Link
        href={previousPage.url}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to {previousPage.name}
      </Link>
    </nav>
  )
}
