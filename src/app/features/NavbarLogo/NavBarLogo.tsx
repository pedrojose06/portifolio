import navbarAtom from '@/app/components/NavBar/atoms/navbar'
import { useAtom } from 'jotai'
import { Fragment } from 'react'

const NavBarLogo = () => {
  const [show, setShow] = useAtom(navbarAtom)
  return (
    <Fragment key="logo">
      <a
        href="/"
        className="relative flex h-16 w-full items-center justify-center text-3xl text-primary hover:cursor-pointer md:w-1/6 md:justify-start"
      >
        <span>./pjtm</span>
      </a>
      <button
        type="button"
        className="absolute top-0 right-0 h-0"
        onClick={() => setShow(!show)}
      >
        \/
      </button>
    </Fragment>
  )
}
export default NavBarLogo
