import type { Metadata } from 'next'
import { Fjalla_One } from 'next/font/google'
import './globals.css'

const fjallaOne = Fjalla_One({
  variable: '--font-fjalla-one',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Pedro Moraes',
  description: 'See my portifolio!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${fjallaOne.variable} font- w-dvw overflow-x-hidden bg-background text-secondary antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
