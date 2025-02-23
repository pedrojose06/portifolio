import { lazy } from 'react'

const HomePage = lazy(() => import('@/app/[locale]/homePage/page'))
const Footer = lazy(() => import('@/app/components/Footer/Footer'))
const NavBar = lazy(() => import('@/app/components/NavBar/NavBar'))

export default function Home() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Footer />
    </>
  )
}
