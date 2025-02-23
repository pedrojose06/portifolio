'use client'

import NavBarItem from '@/app/components/NavBar/NavBarItem'
import NavBarLogo from '@/app/components/NavBar/NavBarLogo'
import { useAtom } from 'jotai'
import { AnimatePresence, motion } from 'motion/react'
import { showNavbarAtom, showNavbarItemsAtom } from './atoms/navbar'
import useDevice from '@/app/hooks/useDevice'

const items = [
  { title: 'home', path: 'hero' },
  { title: 'about', path: 'about' },
  { title: 'experiences', path: 'my-experiences' },
  { title: 'contact', path: 'contact' },
]

const NavBar = () => {
  const [showMenu] = useAtom(showNavbarAtom)
  const [showMenuItens, setShowMenuItens] = useAtom(showNavbarItemsAtom)
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
        className="border2 fixed top-0 z-10 flex w-full flex-col items-center justify-between border-b-[0.5px] border-b-primary border-solid bg-background px-4 py-2 font-fira-code md:h-16 md:flex-row"
      >
        <NavBarLogo />
        <motion.div
          className="w-1/2"
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
