'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Suspense } from 'react'

import Loading from '@/app/loading'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/sonner'

export default function RootProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<Loading />}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        <Navbar />
        {children}
        <Toaster
          position="bottom-center"
          duration={5000}
          theme="system"
          closeButton
          style={{ width: 'auto' }}
        />
      </NextThemesProvider>
    </Suspense>
  )
}
