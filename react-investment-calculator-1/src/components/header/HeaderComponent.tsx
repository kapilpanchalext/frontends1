import investmentImage from '../../assets/investment-calculator-logo.png';

type Props = {}

const HeaderComponent = (props: Props) => {
  return (
    <div id='header'>
        <img  src={investmentImage} width={"100px"} height={"100px"} alt="Stylized atom" />
    </div>
  )
}

export default HeaderComponent;