import React from 'react'

type Props = {
    title: string, 
    message: string, 
    onConfirm?: () => void
}

const Error = ({title, message, onConfirm}: Props) => {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
      {onConfirm && (
        <div id="confirmation-actions">
          <button onClick={onConfirm} className="button">
            Okay
          </button>
        </div>
      )}
    </div>
  )
}

export default Error;