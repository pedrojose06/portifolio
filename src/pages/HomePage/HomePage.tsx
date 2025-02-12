import NavBar from '@/app/components/NavBar/NavBar'
import Hero from '../Hero/Hero'
import Divider from '@/app/components/Divider/Divider'
import About from '../About/About'
import MyExperience from '../MyExperience/MyExperience'
import Contact from '../Contact/Contact'

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
