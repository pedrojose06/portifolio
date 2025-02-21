import { lazy } from 'react'

const NavBar = lazy(() => import('@/app/components/NavBar/NavBar'))
const Hero = lazy(() => import('../Hero/Hero'))
const Divider = lazy(() => import('@/app/components/Divider/Divider'))
const About = lazy(() => import('../About/About'))
const MyExperience = lazy(() => import('../MyExperience/MyExperience'))
const Contact = lazy(() => import('../Contact/Contact'))

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto h-full w-full p-4">
        <Hero />
        <Divider title="about" />
        <About />
        <Divider title="experiences" />
        <MyExperience />
        <Divider title="contact" />
        <Contact />
      </div>
    </>
  )
}
export default HomePage
