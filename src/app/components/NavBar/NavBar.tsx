'use client'

import NavBarItem from '@/app/features/NavBarItem/NavBarItem'
import NavBarLogo from '@/app/features/NavbarLogo/NavBarLogo'
import { useAtom } from 'jotai'
import { AnimatePresence, motion } from 'motion/react'
import navbarAtom from './atoms/navbar'
import useDevice from '@/app/hooks/useDevice'
import { useState } from 'react'

const items = [
  { title: 'home', path: '/' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' },
]

const NavBar = () => {
  const [showMenu] = useAtom(navbarAtom)
  const [showMenuItens, setShowMenuItens] = useState(showMenu)
  const { isMobile } = useDevice()

  const animateNav = isMobile
    ? { height: showMenu ? 64 * (items.length + 1) : 64 }
    : {}
  const transitionNav = isMobile
    ? { duration: 0.5, delay: showMenu ? 0 : 0.5 }
    : {}

  return (
    <AnimatePresence>
      <motion.nav
        key="box"
        animate={animateNav}
        transition={transitionNav}
        className="border2 fixed top-0 flex w-full flex-col items-center justify-between border-b-[0.5px] border-b-primary border-solid bg-background px-4 py-2 md:h-16 md:flex-row"
      >
        <NavBarLogo />
        <motion.div
          className="w-1/4"
          animate={isMobile ? { opacity: showMenu ? 1 : 0 } : {}}
          onAnimationComplete={() =>
            setTimeout(() => {
              setShowMenuItens(showMenu)
            })
          }
          transition={
            isMobile
              ? {
                  duration: showMenu ? 0.2 : 0.5,
                  delay: showMenu ? 0.5 : 0,
                  ease: [0, 0.71, 0.2, 1.01],
                }
              : {}
          }
        >
          {isMobile ? (
            showMenuItens && (
              <div className=" flex w-full flex-col items-center justify-center md:flex-row">
                {items.map((item) => (
                  <NavBarItem
                    key={item.title}
                    title={item.title}
                    path={item.path}
                  />
                ))}
              </div>
            )
          ) : (
            <div className=" flex w-full flex-col items-center justify-center md:flex-row">
              {items.map((item) => (
                <NavBarItem
                  key={item.title}
                  title={item.title}
                  path={item.path}
                />
              ))}
            </div>
          )}
        </motion.div>
      </motion.nav>
    </AnimatePresence>
  )
}

export default NavBar
