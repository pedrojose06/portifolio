'use client'

import NavBarItem from '@/app/features/NavBarItem/NavBarItem'
import NavBarLogo from '@/app/features/NavbarLogo/NavBarLogo'
import { useAtom } from 'jotai'
import { AnimatePresence, motion } from 'motion/react'
import navbarAtom from './atoms/navbar'

const items = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
]

const NavBar = () => {
  const [show] = useAtom(navbarAtom)
  // const [show, setShow] = useState(false)
  return (
    <AnimatePresence>
      <NavBarLogo />
      <motion.nav
        key="box"
        animate={{ height: show ? 'auto' : 0 }}
        transition={{ duration: 0.5, delay: show ? 0 : 0.5 }}
        className="border2 flex w-full flex-col items-center justify-between border-b-[0.5px] border-b-primary border-solid bg-background md:h-16 md:flex-row"
      >
        <motion.div
          animate={{ opacity: show ? 1 : 0 }}
          transition={{
            duration: show ? 0.2 : 0.5,
            delay: show ? 0.5 : 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className=" flex w-full flex-col items-center justify-center md:w-5/12 md:flex-row">
            {items.map((item) => (
              <NavBarItem
                key={item.title}
                title={item.title}
                path={item.path}
              />
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </AnimatePresence>
  )
}

export default NavBar
