import useDevice from '@/app/hooks/useDevice'
import { motion } from 'motion/react'

interface INavBarItem {
  title: string
  path: string
}

const NavBarItem = ({ title, path }: INavBarItem) => {
  const { isMobile } = useDevice()

  return (
    <motion.a
      href={path}
      initial={{
        backgroundColor: '#112240',
        borderBottom: isMobile ? 'none' : '0.5px solid #64FFDA',
        width: '100%',
      }}
      whileHover={{
        backgroundColor: '#64FFDA',
      }}
      // transition={{ scale: { type: 'spring', stiffness: 500 } }}
      className="flex h-16 w-full items-center justify-center hover:cursor-pointer hover:text-background"
    >
      {title}
    </motion.a>
  )
}

export default NavBarItem
