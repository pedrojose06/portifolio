import { Locale, routing } from '@/i18n/routing'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'

const fjaOne = {
  variable: '--font-fjalla-one',
  subsets: ['latin'],
  weight: '400',
}

export const metadata: Metadata = {
  title: 'Pedro Moraes',
  description: 'See my portifolio!',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang="en">
      <body
        className={`${fjaOne.variable} font- w-dvw overflow-x-hidden bg-background text-secondary antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
