'use client'
import { motion } from 'motion/react'
import { MouseEventHandler } from 'react'

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <motion.button
      className="box-border rounded-md border border-primary border-b-[0.5px] border-b-primary border-solid px-16 py-4 text-primary"
      type="button"
      onClick={onClick}
      {...props}
      initial={{
        backgroundColor: '#112240',
      }}
      whileHover={{
        color: '#112240',
        backgroundColor: '#64FFDA',
      }}
      whileTap={{
        color: '#112240',
        backgroundColor: '#64FFDA',
      }}
    >
      {children}
    </motion.button>
  )
}
export default Button
