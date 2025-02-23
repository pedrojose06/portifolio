import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

const About = async () => {
  const t = await getTranslations('About')

  return (
    <section
      className="flex h-auto min-h-screenDvh flex-col py-12 md:flex-row md:py-24"
      id="about"
    >
      <div className="flex flex-1 flex-col justify-around">
        <p className="pt-2 md:text-justify">{t('firstParagraph')}</p>
        <p className="pt-2 md:text-justify">
          {t.rich('secondParagraph', {
            textprimary: (html) => <span className="text-primary">{html}</span>,
          })}
        </p>
        <p className="pt-2 md:text-justify">
          {t.rich('thirdParagraph', {
            textprimary: (html) => <span className="text-primary">{html}</span>,
          })}
        </p>
        <p className="pt-2 md:text-justify">{t('fourthParagraph')}</p>
      </div>
      <div className="flex min-h-80 min-w-80 flex-1 items-center justify-center py-8 md:px-8">
        <Image
          src="/images/me.jpeg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="top-8 left-8 size-80 shadow-[10px_10px_0px_0px_rgba(100,_255,_218,_1)]"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default About
