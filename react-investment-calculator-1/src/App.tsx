import { useState } from "react";
import HeaderComponent from "./components/header/HeaderComponent";
import InputComponent from "./components/input/InputComponent";
import DisplayComponent from "./components/list/DisplayComponent";

export type UserInputType = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

function App() {
    const[userInput, setUserInput] = useState<UserInputType>({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 12,
    });

    const inputIsValid = userInput.duration >= 1;

    const handleChange = (inputIdentifier: string, newValue: number) => {
      setUserInput((prevValue) => {
        const newVal = {...prevValue, [inputIdentifier]: +newValue};
        return newVal;
      });
    }

  return (
    <>
      <HeaderComponent />
      <InputComponent initialValues={userInput} onChangeUser={handleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <DisplayComponent userInputValues={userInput} />}
    </>
  );
}

export default App;