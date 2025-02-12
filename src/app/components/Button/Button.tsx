'use client'
import { MouseEventHandler } from 'react'

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <button
      className="rounded-md border-[1px] border-primary border-solid px-16 py-4 text-primary"
      type="button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
export default Button
