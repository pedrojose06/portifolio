import { showNavbarAtom } from '@/app/components/NavBar/atoms/navbar'
import { useAtom } from 'jotai'
import { Fragment } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { motion } from 'motion/react'
import useDevice from '@/app/hooks/useDevice'

const NavBarLogo = () => {
  const [show, setShow] = useAtom(showNavbarAtom)
  const { isMobile } = useDevice()

  return (
    <Fragment key="logo">
      <a
        href="/"
        className="relative flex h-16 w-full items-center justify-center text-3xl text-primary hover:cursor-pointer md:w-1/6 md:justify-start"
      >
        <span>./pjtm</span>
      </a>
      {isMobile && (
        <button
          type="button"
          className="absolute top-0 right-0 h-16"
          onClick={() => setShow(!show)}
        >
          <motion.div animate={{ rotate: show ? 180 : 0 }}>
            <MdKeyboardArrowDown className="text-4xl text-primary" />
          </motion.div>
        </button>
      )}
    </Fragment>
  )
}
export default NavBarLogo
