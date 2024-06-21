import React from 'react';

type Props = {
    children?: string,
    isSelected: boolean,
} & React.HTMLAttributes<HTMLButtonElement>;

const TabButton = ({children, isSelected, ...props}: Props) => {

  return (
    <li><button className={isSelected ? "active" : undefined} {...props}>{children}</button></li>
  )
};

export default TabButton;