import NavBar from '@/app/components/NavBar/NavBar'
import Hero from '../Hero/Hero'
import Divider from '@/app/components/Divider/Divider'
import About from '../About/About'
import MyExperience from '../MyExperience/MyExperience'

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
      </div>
    </>
  )
}
export default HomePage
