'use client'
import Button from '@/app/components/Button/Button'
import { useTranslations } from 'next-intl'

const Hero = () => {
  const t = useTranslations('Hero')
  return (
    <section
      id="hero"
      className="mt-20 mb-8 flex min-h-screenDvh w-full flex-col items-start justify-center font-code text-white md:mt-0 md:h-screenDvh md:w-1/2 md:p-0"
    >
      <div className="text-primary text-xs">{t('title')}</div>
      <div className="py-5 font-fjalla text-6xl text-blue-100">
        Pedro Moraes.
        <br />
        <span className="font-fjalla text-blue-200">
          {t('currentPosition')}
        </span>
      </div>
      <div className="text-lg">{t('synopsis')}</div>
      <div className="flex w-full justify-center pt-8 md:justify-start md:pt-16">
        <Button
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/15S0UVnO_MqhmPbRpqIOdhzAebsN-sGY2/view?usp=sharing',
              '_blank'
            )
          }
        >
          {t('downloadCVButton')}
        </Button>
      </div>
    </section>
  )
}

export default Hero
