import type { Metadata } from 'next'
import { Fjalla_One } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const fjallaOne = Fjalla_One({
  variable: '--font-fjalla-one',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Pedro Moraes',
  description: 'See my portifolio!',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = await getMessages()

  return (
    <html lang="en">
      <body
        className={`${fjallaOne.variable} font- w-dvw overflow-x-hidden bg-background text-secondary antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
