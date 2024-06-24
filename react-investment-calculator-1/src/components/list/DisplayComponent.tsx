import { UserInputType } from '../../App';
import { calculateInvestmentResults, formatter } from '../../util/investment';

type Props = {
  userInputValues: UserInputType
}

const DisplayComponent = ({userInputValues}: Props) => {
  const investmentResults = calculateInvestmentResults({
    initialInvestment: userInputValues.initialInvestment, 
    annualInvestment: userInputValues.annualInvestment, 
    expectedReturn: userInputValues.expectedReturn, 
    duration: userInputValues.duration
  });

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
          {investmentResults.map((item) => {
            const totalInterest = (item.valueEndOfYear - (item.annualInvestment = item.year)) - userInputValues.initialInvestment;
            return (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(item.annualInvestment)}</td>
              </tr>
          )})}
        </tbody>
      </table>
    </div>
  )
};

export default DisplayComponent;