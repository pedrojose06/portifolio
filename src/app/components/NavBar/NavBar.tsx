import NavBarItem from '@/app/features/NavBarItem/NavBarItem'

const items = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
]

const NavBar = () => {
  return (
    <nav className="border2 flex h-16 items-center justify-evenly border-b-[0.5px] border-b-primary border-solid bg-background">
      {items.map((item) => (
        <NavBarItem key={item.title} title={item.title} path={item.path} />
      ))}
    </nav>
  )
}

export default NavBar
