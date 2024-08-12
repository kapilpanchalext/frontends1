import { Outlet } from 'react-router-dom';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div>
      Navbar
      <Outlet />
    </div>
  )
}

export default Navbar;