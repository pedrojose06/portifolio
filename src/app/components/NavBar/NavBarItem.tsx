'use client'
import {
  showNavbarAtom,
  showNavbarItemsAtom,
} from '@/app/components/NavBar/atoms/navbar'
import useDevice from '@/app/hooks/useDevice'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import { useTranslations } from 'next-intl'
interface INavBarItem {
  title: string
  path: string
}

const NavBarItem = ({ title, path }: INavBarItem) => {
  const { isMobile } = useDevice()
  const [, setShowMenuItems] = useAtom(showNavbarItemsAtom)
  const [, setShowMenu] = useAtom(showNavbarAtom)
  const t = useTranslations('NavBar')

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const sectionPath = document.getElementById(path)
    sectionPath?.scrollIntoView({ behavior: 'smooth' })
    setShowMenu(false)
    setShowMenuItems(false)
  }

  return (
    <motion.a
      onClick={handleClick}
      initial={{
        backgroundColor: '#112240',
        borderBottom: isMobile ? 'none' : '0.5px solid #64FFDA',
        width: '100%',
      }}
      whileHover={{
        backgroundColor: '#64FFDA',
      }}
      className="flex h-14 w-full items-center justify-center border-b-[0.5px] border-b-primary p-1 text-sm hover:cursor-pointer hover:text-background"
    >
      {t(title)}
    </motion.a>
  )
}

export default NavBarItem
