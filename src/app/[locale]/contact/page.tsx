'use client'
import Button from '@/app/components/Button/Button'
import ScrollFloat from '@/app/components/ScrollFloat/ScrollFloat'
import { useTranslations } from 'next-intl'

const Contact = () => {
  const t = useTranslations('Contact')
  return (
    <section
      id="contact"
      className="flex h-screenDvh w-full flex-col items-center justify-evenly py-24"
    >
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="top bottom+=10%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.09}
        textClassName="text-center text-2xl text-blue-100"
      >
        {t('content')}
      </ScrollFloat>
      <Button
        onClick={() => window.open('https://whatsa.me/5511994091820', '_blank')}
      >
        Hey!
      </Button>
    </section>
  )
}
export default Contact
