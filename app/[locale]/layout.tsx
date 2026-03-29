import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header/Header'
import PageTransition from '@/components/PageTransition/PageTransition'
import StairTransition from '@/components/StairTransition/StairTransition'
import ErrorBoundary from '@/components/common/ErrorBoundary'
import { Toaster } from '@/components/ui'
import { APP_CONFIG } from '@/config/email'
import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { ThemeProvider } from '@/components/common/ThemeProvider'
import { ThemeWatcher } from '@/components/common/ThemeWatcher'
import { cookies } from 'next/headers'

const jetBrainsMono = JetBrains_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
  subsets: ['latin'],
})

export const metadata = {
  title: APP_CONFIG.name,
  description: `${APP_CONFIG.developerName} - Frontend Developer Portfolio. Showcasing modern web development skills with React, Next.js, TypeScript, and more.`,
  keywords:
    'frontend developer, react, nextjs, typescript, portfolio, web development',
  author: APP_CONFIG.developerName,
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')?.value || 'dark'

  return (
    <html
      lang={locale}
      className={theme}
      style={{ colorScheme: theme }}
    >
      <body className={jetBrainsMono.variable}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme={theme}
            enableSystem
          >
            <ThemeWatcher />
            <ErrorBoundary>
              <Header />
              <Toaster />

              <StairTransition />
              <PageTransition>{children}</PageTransition>
            </ErrorBoundary>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
