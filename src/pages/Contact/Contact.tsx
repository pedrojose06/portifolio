'use client'
import Button from '@/app/components/Button/Button'

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex h-screenDvh w-full flex-col items-center justify-evenly py-24"
    >
      <p className="text-2xl text-blue-100 ">
        I'm a very communicative person and I love to talk, so if you think we
        have something to discuss, let me know!
      </p>
      <Button
        onClick={() => window.open('https://whatsa.me/5511994091820', '_blank')}
      >
        Hey!
      </Button>
    </section>
  )
}
export default Contact
