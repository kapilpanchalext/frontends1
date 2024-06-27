import React, { forwardRef, useImperativeHandle, useRef } from "react";

type Props = {
    result: string
    targetTime: number
}

export interface ImperativeRef {
    open: () => void;
}

const ResultModal = forwardRef<ImperativeRef, Props>(({ result, targetTime }, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current?.showModal();
            }
        }
    });

  return (
    <dialog ref={dialog} className='result-modal'>
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