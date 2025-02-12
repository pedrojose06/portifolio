const About = () => {
  return (
    <section className="flex h-auto min-h-screenDvh flex-col py-24 md:flex-row">
      <div className="flex flex-1 flex-col justify-around">
        <p className="pt-2">
          Hello! I’m Pedro Moraes, a Front-End Developer with Full Stack
          experience, passionate about building user-friendly and
          high-performance applications. I started my journey in web development
          in 2019, and since then, I’ve had the opportunity to work on diverse
          projects across different industries.
        </p>
        <p className="pt-2">
          I worked for the first time as a Front-End Developer in 2019 at
          Moovefy, where I gained hands-on experience in modern web
          technologies. Over the years, I have contributed to scalable
          solutions, optimized processes, and led transitions from legacy
          systems like <span className="text-primary">AngularJS</span> to modern
          frameworks such as <span className="text-primary">React</span>.
        </p>
        <p className="pt-2">
          I’ve also had the opportunity to work with various technologies,
          including <span className="text-primary">React</span>,{' '}
          <span className="text-primary">Vue.js</span>,{' '}
          <span className="text-primary">TypeScript</span>,{' '}
          <span className="text-primary">JavaScript</span>,{' '}
          <span className="text-primary">TailwindCSS</span>,{' '}
          <span className="text-primary">Styled Components</span>,{' '}
          <span className="text-primary">.NET Core</span>,{' '}
          <span className="text-primary">C#</span>,{' '}
          <span className="text-primary">SQL Server</span>,{' '}
          <span className="text-primary">PostgreSQL</span>,{' '}
          <span className="text-primary">Azure</span>,{' '}
          <span className="text-primary">Docker</span>,
          <span className="text-primary">and more</span>. Additionally, I have
          experience with testing frameworks like Vitest and Jest, ensuring code
          quality and performance.
        </p>
        <p className="pt-2">
          Beyond coding, I love collaborating with diverse teams, sharing
          knowledge, and fostering a positive and inclusive work environment.
          For me, teamwork, empathy, and creativity are key elements in building
          great products and impactful solutions.
        </p>
        <p className="pt-2">
          Let’s connect and create something amazing together!
        </p>
      </div>
      <div className=" flex min-h-80 min-w-80 flex-1 items-center justify-center py-8 md:px-8">
        <canvas className=" top-8 left-8 size-80 bg-gray-300 shadow-[10px_10px_0px_0px_rgba(100,_255,_218,_1)]">
          &nbsp
        </canvas>
      </div>
    </section>
  )
}

export default About
