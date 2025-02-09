import Link from 'next/link'

interface INavBarItem {
  title: string
  path: string
}

const NavBarItem = ({ title, path }: INavBarItem) => {
  return (
    <Link
      href={path}
      className="flex h-16 w-full items-center justify-center hover:cursor-pointer hover:bg-primary hover:text-background"
    >
      {title}
    </Link>
  )
}

export default NavBarItem
