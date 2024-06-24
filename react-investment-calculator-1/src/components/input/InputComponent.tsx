import React from 'react';

type Props = {
    onInitialInvestmentChange: (value: number) => void;
    onAnnualInvestmentChange: (value: number) => void;
    onExpectedReturnChange: (value: number) => void;
    onDurationChange: (value: number) => void;
}

const InputComponent = ({onInitialInvestmentChange,
    onAnnualInvestmentChange,
    onExpectedReturnChange,
    onDurationChange}: Props) => {

    const initialInvestmentChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInitialInvestmentChange(Number(event.target.value));
    }

    const annualInvestmentChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onAnnualInvestmentChange(Number(event.target.value));
    }

    const expectedReturnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onExpectedReturnChange(Number(event.target.value));
    }

    const durationChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onDurationChange(Number(event.target.value));
    }

  return (
    <div id="user-input">
        <div className='input-group'>
            <div className='input-item'>
                <label htmlFor="initial-investment">Initial Investment</label>
                <input id="initial-investment" type='number' onChange={initialInvestmentChangeHandler}/>
            </div>
            <div className='input-item'>
                <label htmlFor="annual-investment">Annual Investment</label>
                <input id="annual-investment" type='number' onChange={annualInvestmentChangeHandler}/>
            </div>
        </div>

        <div className='input-group'>
            <div className='input-item'>
                <label htmlFor="expected-return">Expected Return</label>
                <input id="expected-return" type='number' onChange={expectedReturnChangeHandler}/>
            </div>
            <div className='input-item'>
                <label htmlFor="duration">Duration</label>
                <input id="duration" type='number' onChange={durationChangeHandler}/>
            </div>
        </div>
    </div>
  )
}

export default InputComponent;