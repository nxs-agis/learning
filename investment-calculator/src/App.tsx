import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { InvestmentParams } from "./utils/InvestmentsParams";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState<InvestmentParams>({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid: boolean = userInput.duration > 0;

  function handlerOnChanges(target: string, newValue: string) {
    setUserInput((prev) => {
      return {
        ...prev,
        [target]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handlerOnChanges} />
      {inputIsValid ? (
        <Result userInput={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
