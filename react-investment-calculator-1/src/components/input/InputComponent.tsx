import React, {  useState } from 'react';

type Props = {}

const InputComponent = (props: Props) => {

    // const[initialInvestment, setInitialInvestment] = useState();
    // const[annualInvestment, setAnnualInvestment] = useState();
    // const[expectedReturn, setExpectedReturn] = useState();
    // const[duration, setDuration] = useState();


  return (
    <div id="user-input">
        <div className='input-group'>
            <div className='input-item'>
                <label htmlFor="initial-investment">Initial Investment</label>
                <input id="initial-investment" type='number'/>
            </div>
            <div className='input-item'>
                <label htmlFor="annual-investment">Annual Investment</label>
                <input id="annual-investment" type='number'/>
            </div>
        </div>

        <div className='input-group'>
            <div className='input-item'>
                <label htmlFor="expected-return">Expected Return</label>
                <input id="expected-return" type='number'/>
            </div>
            <div className='input-item'>
                <label htmlFor="duration">Duration</label>
                <input id="duration" type='number'/>
            </div>
        </div>
    </div>
  )
}

export default InputComponent;