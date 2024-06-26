import React, { forwardRef } from "react";

type Props = {
    result: string
    targetTime: number
}

const ResultModal = forwardRef<HTMLDialogElement, Props>(({ result, targetTime }, ref) => {
    
  return (
    <dialog ref={ref} className='result-modal'>
       <h2>You {result} </h2>
       <p>Target time was <strong>{targetTime}</strong> seconds.</p>
       <p>You stopped time with <strong>X seconds left.</strong></p>
       <form method='dialog'>
        <button>Close</button>
       </form>
    </dialog>
  )
});

export default ResultModal;