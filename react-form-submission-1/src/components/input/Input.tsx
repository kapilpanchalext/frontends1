import React from 'react'

type Props = {
    label: string
    id: string
    error: string
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({label, id, error, ...props}: Props) => {
  return (
    <div className="control no-margin">
          <label htmlFor={id}>{label}</label>
          <input 
            id={id} 
            {...props} 
           />
           <div className='control-error'>{error && <p>{error}</p>}</div>
        </div>
  )
}

export default Input;