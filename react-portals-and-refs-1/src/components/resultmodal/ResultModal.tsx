import { forwardRef, useImperativeHandle, useRef } from "react";

type Props = {
    result: string
    targetTime: number,
    remainingTime: number,
    onReset: React.ReactEventHandler
}

export interface ImperativeRef {
    open: () => void;
}

const ResultModal = forwardRef<ImperativeRef, Props>(({ result, targetTime, remainingTime, onReset }, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);
    const userLost = remainingTime <= 10;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current?.showModal();
            },
        }
    });

  return (
    <dialog ref={dialog} className='result-modal'>
       {userLost && <h2>You {result}</h2>}
       {!userLost && <h2>Your Score: {score}</h2>}
       <p>Target time was <strong>{targetTime}</strong> seconds.</p>
       <p>You stopped time with <strong>{formattedRemainingTime} seconds left.</strong></p>
       <form method='dialog' onSubmit={onReset}>
        <button type="submit">Close</button>
       </form>
    </dialog>
  )
});

export default ResultModal;