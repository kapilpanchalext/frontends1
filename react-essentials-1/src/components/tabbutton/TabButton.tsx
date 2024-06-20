import React from 'react'

type Props = {
    children: string
}

const TabButton = ({children}: Props) => {
  return (
    <li><button>{children}</button></li>
  )
}

export default TabButton;