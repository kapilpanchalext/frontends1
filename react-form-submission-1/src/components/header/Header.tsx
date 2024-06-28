import logoImg from '../../assets/logo.jpg';

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h1>React Forms</h1>
    </header>
  )
}

export default Header;