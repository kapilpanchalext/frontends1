import React from 'react'
import Input from '../input/Input';
import useInput from '../../hooks/useInput';
import { hasMinLength, isEmail, isNotEmpty } from '../../util/Validations';

type Props = {}

const StateLogin = (props: Props) => {

    // const [enteredValues, setEnteredValues] = useState<FormType>({
    //     email: '',
    //     password: '',
    // });

    // const [didEdit, setDidEdit] = useState<FormType>({
    //   email: false,
    //   password: false,
    // });

    const validateEmail = (value: string) => {
      return isEmail(value) && isNotEmpty(value);
    };

    //Use of Custom Hook

    const {value: emailValue, 
            handleInputChange: handleEmailChange, 
            handleInputBlur: handleEmailBlur,
            hasError: emailHasError} = 
            useInput({
              defaultValue:'Email', 
              validationFunction: (value)=>isEmail(value) && isNotEmpty(value)
    }); //, (value: string) =>validateEmail(value)

    const {value: passwordValue, 
            handleInputChange: handlePasswordChange, 
            handleInputBlur: handlePasswordBlur,
            hasError: passwordHasError} = 
            useInput({
              defaultValue:'Password', 
              validationFunction: (value)=>hasMinLength(value, 6),
    });

    // let emailIsInvalid;
    // let passwordIsInvalid;

    // if (typeof enteredValues.email === 'string') {
    //   emailIsInvalid = (didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email)) ;// && !enteredValues.email.includes('@'));
    // }

    // if (typeof enteredValues.password === 'string') {
    //   passwordIsInvalid = (didEdit.password && !hasMinLength(enteredValues.password, 6)); //&& !(enteredValues.password.length < 6));
    // }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if(emailHasError || passwordHasError) {
          return;
        }
        console.log(emailValue, passwordValue);
    }

    // const handleInputChange = (identifier: string, value: string) => {
    //   setEnteredValues(prevValues => ({
    //       ...prevValues,
    //       [identifier]: value
    //   }))

    //   setDidEdit(prevEdit => ({
    //     ...prevEdit,
    //     [identifier]: false
    //   }));
    // }

    // const handleInputBlur = (identifier: string) => {
    //     console.log("Email is blurred")
    //     setDidEdit(prevEdit => ({
    //       ...prevEdit,
    //       [identifier]: true
    //     }));
    // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label={'Email'} 
                id={"email"} 
                type='email' 
                name='email' 
                error={emailHasError ? 'Please enter a valid email':""} 
                onBlur={handleEmailBlur}
                onChange={handleEmailChange}
                value={emailValue}
        />
        
        {/* <div className="control no-margin">
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
        </div> */}

        <Input label={'Password'} 
                id={"password"} 
                type='password' 
                name='password' 
                error={passwordHasError ? 'Please enter a valid password':""} 
                onBlur={handlePasswordBlur}
                onChange={handlePasswordChange}
                value={passwordValue}
        />

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password"
            onChange={(event) => handleInputChange("password", event.target.value)}
            value={typeof enteredValues.password === 'string' ? enteredValues.password : ""}
            />
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  )
}

export default StateLogin;