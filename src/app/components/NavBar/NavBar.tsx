import NavBarItem from '@/app/features/NavBarItem/NavBarItem'
import NavBarLogo from '@/app/features/NavbarLogo/NavBarLogo'

const items = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
]

const NavBar = () => {
  return (
    <nav className="border2 flex w-full flex-col items-center justify-between border-b-[0.5px] border-b-primary border-solid bg-background md:h-16 md:flex-row">
      <NavBarLogo />
      <div className=" flex w-full flex-col items-center justify-center md:w-5/12 md:flex-row">
        {items.map((item) => (
          <NavBarItem key={item.title} title={item.title} path={item.path} />
        ))}
      </div>
    </nav>
  )
}

export default NavBar
