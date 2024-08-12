import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';

type Props = {}

const RootLayout = (props: Props) => {
  return (
    <div><Sidebar /><Navbar/></div>
  )
}

export default RootLayout;