import NavBar from '@/app/components/NavBar/NavBar'
import Hero from '../Hero/Hero'
import Divider from '@/app/components/Divider/Divider'
import About from '../About/About'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4">
        <Hero />
        <Divider title="About" />
        <About />
      </div>
    </>
  )
}
export default HomePage
