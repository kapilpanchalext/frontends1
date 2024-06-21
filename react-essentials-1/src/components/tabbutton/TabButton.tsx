import React from 'react'

type Props = {
    children: string,
    onSelect: any,
    isSelected: boolean,
}

const TabButton = ({children, onSelect, isSelected}: Props) => {

  return (
    <li><button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button></li>
  )
};

export default TabButton;