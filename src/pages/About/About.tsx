const About = () => {
  return (
    <section className="flex h-auto min-h-screenDvh flex-col py-24 md:flex-row">
      <div className="flex flex-1 flex-col items-center justify-around">
        <p>
          Hello! I’m Baptiste and my passion is creating all sorts of things
          related to new technologies. I’m passionate about Web development and
          I worked for the first time as a Front-End dev in 2018 at CAUE Du
          Nord.
        </p>
        <p>
          I’ve started university in 2018 at Epitech Lille (school of ….) and
          since then I’ve had a lot of opportunities to work on various
          technologies such as React Native, Swift, VueJs, Unity, C++, C# and a
          lot more. I also have had the opportunity to work as a DevOps during
          my scholarship.
        </p>
        <p>
          This year I had the opportunity to spend 6 month in California at
          CSUSM where my major was Computer Science. I ended this semester with
          the award of the Outstanding studient for my dedication and work in
          this university.
        </p>
        <p>
          And finally I started to stream a part of what I do : my training, my
          projects and my ideas on Twitch. For me it’s a good way to share with
          other people my journey and maybe to change the way people can see
          tech jobs & life.
        </p>
      </div>
      <div className=" flex min-h-80 min-w-80 flex-1 items-center justify-center p-8">
        <canvas className=" top-8 left-8 size-80 bg-gray-300 shadow-[10px_10px_0px_0px_rgba(100,_255,_218,_1)]">
          &nbsp
        </canvas>
      </div>
    </section>
  )
}

export default About
