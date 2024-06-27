import React from 'react'

type Props = {
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, ...props}: Props) => {
  return (
    <button {...props} className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>{children}</button>
  )
}

export default Button;