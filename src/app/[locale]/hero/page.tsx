'use client'
import Button from '@/app/components/Button/Button'
import Test from '@/app/components/RotatingText/RotatingText'
import { useTranslations } from 'next-intl'

const Hero = () => {
  const t = useTranslations('Hero')
  return (
    <section
      id="hero"
      className="mt-20 mb-8 flex min-h-screenDvh w-full flex-col items-start justify-center font-code text-white md:mt-0 md:h-screenDvh md:p-0"
    >
      <div className="text-primary text-xs">{t('title')}</div>
      <div className="w-full py-5 font-fjalla text-5xl text-blue-100 md:text-6xl">
        Pedro Moraes.
        <br />
        <div className="flex flex-wrap font-fjalla text-blue-200 ">
          {t('currentPosition')}
          <Test
            texts={[
              'Frontend Engineer.',
              'React Developer.',
              'FullStack Engineer.',
            ]}
            mainClassName="font-fjalla text-blue-200 font-bold md:pl-2"
            staggerFrom={'last'}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </div>
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
