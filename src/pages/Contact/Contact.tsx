'use client'
import Button from '@/app/components/Button/Button'

const handleClick = () => {
  alert('Hey! I would love to talk to you!')
}

const Contact = () => {
  return (
    <section className="flex h-screenDvh w-full flex-col items-center justify-evenly py-24">
      <p className="text-2xl text-blue-100 ">
        I'm a very communicative person and I love to talk, so if you think we
        have something to discuss, let me know!
      </p>
      <Button onClick={handleClick}>Hey!</Button>
    </section>
  )
}
export default Contact
