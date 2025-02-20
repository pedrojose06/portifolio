import { lazy } from 'react'
import NavBar from './components/NavBar/NavBar'

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'))
const Footer = lazy(() => import('@/app/components/Footer/Footer'))

export default function Home() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Footer />
    </>
  )
}
