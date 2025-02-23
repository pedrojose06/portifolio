import { lazy } from 'react'

const Hero = lazy(() => import('../hero/page'))
const Divider = lazy(() => import('../../components/Divider/Divider'))
const About = lazy(() => import('../about/page'))
const MyExperience = lazy(() => import('../myExperience/page'))
const Contact = lazy(() => import('../contact/page'))

const HomePage = () => {
  return (
    <>
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
