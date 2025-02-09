import Link from 'next/link'

interface INavBarItem {
  title: string
  path: string
}

const NavBarItem = ({ title, path }: INavBarItem) => {
  return (
    <Link href={path} className="nav-bar-item">
      {title}
    </Link>
  )
}

export default NavBarItem
