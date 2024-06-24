import React from 'react';
import { UserInputType } from '../../App';

type Props = {
    // onInitialInvestmentChange: (value: number) => void;
    // onAnnualInvestmentChange: (value: number) => void;
    // onExpectedReturnChange: (value: number) => void;
    // onDurationChange: (value: number) => void;
    initialValues: UserInputType;
    onChangeUser: (inputIdentifier: string, newValue: number) => void;
    
}

const InputComponent = ({initialValues, onChangeUser}: Props) => {

    const initialInvestmentChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeUser('initialInvestment', Number(event.target.value));
    }

    const annualInvestmentChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeUser('annualInvestment', Number(event.target.value));
    }

    const expectedReturnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeUser('expectedReturn', Number(event.target.value));
    }

    const durationChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeUser('duration', Number(event.target.value));
    }

  return (
    <section id="user-input">
        <div className='input-group'>
            <div className='input-item'>
                <label htmlFor="initial-investment">Initial Investment</label>
                <input id="initial-investment" type='number' value={initialValues.initialInvestment}  onChange={initialInvestmentChangeHandler} required/>
            </div>
            <div className='input-item'>
                <label htmlFor="annual-investment">Annual Investment</label>
                <input id="annual-investment" type='number' value={initialValues.annualInvestment} onChange={annualInvestmentChangeHandler} required/>
            </div>
        </div>

        <div className='input-group'>
            <div className='input-item'>
                <label htmlFor="expected-return">Expected Return</label>
                <input id="expected-return" type='number' value={initialValues.expectedReturn} onChange={expectedReturnChangeHandler} required/>
            </div>
            <div className='input-item'>
                <label htmlFor="duration">Duration</label>
                <input id="duration" min={1} type='number' value={initialValues.duration} onChange={durationChangeHandler} required/>
            </div>
        </div>
    </section>
  )
}

export default InputComponent;