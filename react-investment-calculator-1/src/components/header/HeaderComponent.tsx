import investmentImage from '../../assets/investment-calculator-logo.png';

type Props = {}

const HeaderComponent = (props: Props) => {
  return (
    <header id='header'>
        <img  src={investmentImage} alt="Logo showing money bag" />
        <h1>Investment Calculator</h1>
    </header>
  )
}

export default HeaderComponent;