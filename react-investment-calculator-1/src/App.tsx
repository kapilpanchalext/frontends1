import { useState } from "react";
import HeaderComponent from "./components/header/HeaderComponent";
import InputComponent from "./components/input/InputComponent";
import DisplayComponent from "./components/list/DisplayComponent";

function App() {
    const[initialInvestment, setInitialInvestment] = useState<number>(0);
    const[annualInvestment, setAnnualInvestment] = useState<number>(0);
    const[expectedReturn, setExpectedReturn] = useState<number>(0);
    const[duration, setDuration] = useState<number>(0);

    console.log(initialInvestment);
    console.log(annualInvestment);
    console.log(expectedReturn);
    console.log(duration);

  return (
    <>
      <HeaderComponent />
      <InputComponent onInitialInvestmentChange={setInitialInvestment} 
                      onAnnualInvestmentChange={setAnnualInvestment} 
                      onExpectedReturnChange={setExpectedReturn} 
                      onDurationChange={setDuration}/>
      <DisplayComponent initialInvestment={initialInvestment} 
                        annualInvestment={annualInvestment} 
                        expectedReturn={expectedReturn} 
                        duration={duration} />
    </>
  );
}

export default App;