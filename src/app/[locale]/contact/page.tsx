'use client'
import Button from '@/app/components/Button/Button'
import { useTranslations } from 'next-intl'

const Contact = () => {
  const t = useTranslations('Contact')
  return (
    <section
      id="contact"
      className="flex h-screenDvh w-full flex-col items-center justify-evenly py-24"
    >
      <p className="text-center text-2xl text-blue-100">{t('content')}</p>
      <Button
        onClick={() => window.open('https://whatsa.me/5511994091820', '_blank')}
      >
        Hey!
      </Button>
    </section>
  )
}
export default Contact
