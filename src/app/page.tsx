import { lazy } from 'react'

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'))

export default function Home() {
  return <HomePage />
}
