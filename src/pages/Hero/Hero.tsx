import Button from '@/app/components/Button/Button'

const Hero = () => {
  return (
    <section className="mt-16 flex min-h-screenDvh w-full flex-col items-start justify-center font-code text-white md:mt-0 md:w-1/2 md:p-0">
      <div className="text-primary text-xs">Hi, my name is</div>
      <div className="py-5 font-fjalla text-6xl text-blue-100">
        Pedro Moraes.
        <br />
        <span className="font-fjalla text-blue-200">
          I'm a ReatJS developer.
        </span>
      </div>
      <div className="text-lg">
        I'm a Frontend Developer with Full Stack experience, specialized in
        building scalable and high-performance web applications. I thrive on
        optimizing processes, modernizing legacy systems, and crafting seamless
        user experiences.
      </div>
      <div className="flex w-full justify-center pt-8 md:justify-start md:pt-16">
        <Button>Download my resume!</Button>
      </div>
    </section>
  )
}

export default Hero
