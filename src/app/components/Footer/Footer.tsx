'use client'
import { useTranslations } from 'next-intl'
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'

const socialMedias = [
  {
    name: 'Github',
    url: 'https://github.com/pedrojose06',
    icon: <IoLogoGithub size={30} />,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/ondetaoronaldo',
    icon: <IoLogoInstagram size={30} />,
  },
  {
    name: 'Linkedin',
    url: 'https://linkedin.com/in/pedro-jt-moraes',
    icon: <IoLogoLinkedin size={30} />,
  },
]

const Footer = () => {
  const t = useTranslations('Footer')
  return (
    <footer>
      <article className="flex min-h-72 flex-col items-center justify-around gap-44 border-t border-t-primary border-solid px-16 md:flex-row">
        <div className="flex-1 py-4">
          <h4 className="text-blue-100">{t('aboutMe')}</h4>
          <p>{t('aboutMeContent')}</p>
        </div>
        <div className="flex-1 py-4">
          <h4 className="text-blue-100">{t('contact')}</h4>
          <ul>
            <li>Email: contact@example.com</li>
            <li>{t('phone')}: +123 456 7890</li>
          </ul>
        </div>
        <div className="flex-1 py-4">
          <h4 className="pb-2 text-center text-blue-100">{t('followme')}</h4>
          <div className="flex w-full justify-evenly space-x-4">
            {socialMedias.map((socialMedia) => (
              <a
                href={socialMedia.url}
                target="_blank"
                rel="noopener noreferrer"
                key={socialMedia.name}
                aria-label={`Follow me on ${socialMedia.name}`}
              >
                {socialMedia.icon}
              </a>
            ))}
          </div>
        </div>
      </article>
      <div className=" py-4 text-center text-blue-200 text-sm">
        &copy; {new Date().getFullYear()} PEDRO JOSE TRINDADE DE MORAES LTDA.
        {t('allRights')}
      </div>
    </footer>
  )
}
export default Footer
