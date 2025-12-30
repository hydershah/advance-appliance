'use client'

/**
 * Design Provider Component
 * Provides design theme context throughout the application
 */

import { createContext, useContext, useMemo, type ReactNode } from 'react'
import type { DesignTheme, DesignComponents } from '@/lib/getDesignComponents'
import { getDesignComponents, getDesignMetadata } from '@/lib/getDesignComponents'

interface DesignContextValue {
  theme: DesignTheme
  components: DesignComponents
  metadata: ReturnType<typeof getDesignMetadata>
}

const DesignContext = createContext<DesignContextValue | undefined>(undefined)

interface DesignProviderProps {
  children: ReactNode
  theme?: DesignTheme
}

/**
 * Provider component that makes design theme available to all children
 */
export function DesignProvider({ children, theme = '1' }: DesignProviderProps) {
  const contextValue = useMemo<DesignContextValue>(
    () => ({
      theme,
      components: getDesignComponents(theme),
      metadata: getDesignMetadata(theme),
    }),
    [theme]
  )

  return (
    <DesignContext.Provider value={contextValue}>
      {children}
    </DesignContext.Provider>
  )
}

/**
 * Hook to access design theme and components
 * @throws Error if used outside of DesignProvider
 */
export function useDesign() {
  const context = useContext(DesignContext)

  if (context === undefined) {
    throw new Error('useDesign must be used within a DesignProvider')
  }

  return context
}

/**
 * Hook to access only the components from current design
 */
export function useDesignComponents() {
  const { components } = useDesign()
  return components
}

/**
 * Hook to access the current design theme
 */
export function useDesignTheme() {
  const { theme, metadata } = useDesign()
  return { theme, metadata }
}
