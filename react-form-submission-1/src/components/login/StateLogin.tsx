import React, { useState } from 'react'

type Props = {}

type FormType = {
  email: string | boolean,
  password: string | boolean,
}

const StateLogin = (props: Props) => {

    const [enteredValues, setEnteredValues] = useState<FormType>({
        email: '',
        password: '',
    });

    const [didEdit, setDidEdit] = useState<FormType>({
      email: false,
      password: false,
    });

    let emailIsInvalid;

    if (typeof enteredValues.email === 'string') {
      emailIsInvalid = (didEdit.email && !enteredValues.email.includes('@'));
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(enteredValues)
    }

    const handleInputChange = (identifier: string, value: string) => {
      setEnteredValues(prevValues => ({
          ...prevValues,
          [identifier]: value
      }))

      setDidEdit(prevEdit => ({
        ...prevEdit,
        [identifier]: false
      }));
    }

    const handleInputBlur = (identifier: string) => {
        console.log("Email is blurred")
        setDidEdit(prevEdit => ({
          ...prevEdit,
          [identifier]: true
        }));
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={typeof enteredValues.email === 'string' ? enteredValues.email : ""}
           />
           <div className='control-error'>{emailIsInvalid && <p>Please enter a valid email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password"
            onChange={(event) => handleInputChange("password", event.target.value)}
            value={typeof enteredValues.password === 'string' ? enteredValues.password : ""}
            />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  )
}

export default StateLogin;