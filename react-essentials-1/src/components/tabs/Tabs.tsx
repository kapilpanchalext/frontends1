
type Props = {
    children?: React.ReactNode;
    button: React.ReactNode;
    buttonsContainer: React.ElementType;
}

const Tabs = ({children, button, buttonsContainer}: Props) => {
    const ButtonsContainer = buttonsContainer;
  return (
    <>
        <ButtonsContainer>{button}</ButtonsContainer>
            {children}
    </>
  )
};

export default Tabs;