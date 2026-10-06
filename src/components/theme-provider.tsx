'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ComponentProps } from 'react'

// next-themes injects an inline script that applies the stored theme before
// first paint. That only matters in the server-rendered HTML; when React
// renders the tree on the client (e.g. recovering from an error) it warns
// about the <script> tag. A non-JS type on the client marks it as a data
// block, which React skips, while the server copy keeps executing.
const scriptProps =
  typeof window === 'undefined' ? undefined : ({ type: 'application/json' } as const)

export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider scriptProps={scriptProps} {...props}>
      {children}
    </NextThemesProvider>
  )
}
