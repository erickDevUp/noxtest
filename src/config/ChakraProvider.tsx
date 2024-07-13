// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { chakraTheme } from './ChakraTheme'

export function ChakraProviders({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
}