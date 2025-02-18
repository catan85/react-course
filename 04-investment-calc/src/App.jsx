import Header from './components/Header.jsx'
import Results from './components/Results.jsx'
import UserInput from './components/UserInput.jsx'
import {calculateInvestmentResults} from './util/investment.js'
import { useState }  from 'react';

const INITIAL_PARAMETERS = {
  initialInvestment : 10000,
  annualInvestment : 500,
  expectedReturn : 5.5, 
  duration : 12
};

export default function App() {

  const [investmentParameters, setInvestmentParameters] = useState(INITIAL_PARAMETERS);

  function handleInputsChange(source){
    setInvestmentParameters((prevInvestmentParameters)=>{
      return {...prevInvestmentParameters,
        [source.target.name]: parseFloat(source.target.value)
      };
    });
  }

  const results = calculateInvestmentResults(investmentParameters);
  const inputIsValid = investmentParameters.duration > 0;


  return (<>
    <Header ></Header>
    <UserInput initialParameters={investmentParameters} onInputsChange={handleInputsChange}></UserInput>
    {inputIsValid && <Results data={results}></Results> }
    {!inputIsValid && <p className="center">Please insert a valid period of time</p>}
    </>
  );
}