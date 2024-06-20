import React from 'react'

type Props = {
    children: string,
    onSelect: any
}

const TabButton = ({children, onSelect}: Props) => {

  return (
    <li><button onClick={onSelect}>{children}</button></li>
  )
};

export default TabButton;