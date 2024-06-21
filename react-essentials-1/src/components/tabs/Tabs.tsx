
type Props = {
    children?: React.ReactNode;
    button: React.ReactNode;
    ButtonsContainer: React.ElementType;
}

const Tabs = ({children, button, ButtonsContainer = 'menu'}: Props) => {
  return (
    <>
        <ButtonsContainer>{button}</ButtonsContainer>
            {children}
    </>
  )
};

export default Tabs;