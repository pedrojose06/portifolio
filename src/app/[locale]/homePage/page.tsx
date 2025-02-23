import { lazy } from 'react'

const NavBar = lazy(() => import('@/app/components/NavBar/NavBar'))
const Hero = lazy(() => import('../hero/page'))
const Divider = lazy(() => import('@/app/components/Divider/Divider'))
const About = lazy(() => import('../about/page'))
const MyExperience = lazy(() => import('../myExperience/page'))
const Contact = lazy(() => import('../contact/page'))

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto h-full w-full p-4">
        <Hero />
        <Divider title="About" />
        <About />
        <Divider title="My experiences" />
        <MyExperience />
        <Divider title="Wanna Talk ?" />
        <Contact />
      </div>
    </>
  )
}
export default HomePage
