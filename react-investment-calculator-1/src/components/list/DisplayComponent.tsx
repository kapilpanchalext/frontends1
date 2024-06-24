import { calculateInvestmentResults, formatter } from '../../util/investment';

type Props = {
  initialInvestment: number; 
  annualInvestment: number; 
  expectedReturn: number; 
  duration: number; 
}

const DisplayComponent = ({initialInvestment, 
                           annualInvestment, 
                           expectedReturn, 
                           duration}: Props) => {

  const investmentResults = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  });

  console.log(JSON.stringify(investmentResults));
                            
  return (
    <div id="investment-results" className="center">
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Annual Investment</th>
          </tr>
        </thead>
        <tbody>
          {investmentResults.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(item.annualInvestment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DisplayComponent;