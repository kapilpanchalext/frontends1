import { useEffect, useRef, useState } from 'react';
import ResultModal, { ImperativeRef } from '../resultmodal/ResultModal';
import { createPortal } from 'react-dom';

type Props = {
    title: string
    targetTime: number
}

const TimerChallenge = ({title, targetTime}: Props) => {
    const timer = useRef<NodeJS.Timeout>();
    const dialog = useRef<ImperativeRef>(null);
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    const MIN_INTERVAL = 10;

    if(timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current?.open();
    }

    const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setTimeRemaining(targetTime * 1000);
    }

    const handleStart = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - MIN_INTERVAL);
        }, MIN_INTERVAL);
    }

    const handleStop = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        clearInterval(timer.current);
        dialog.current?.open();
    }

    useEffect(() => {
        if (timeRemaining <= MIN_INTERVAL) {
            clearInterval(timer.current);
            dialog.current?.open();
        }
    }, [timeRemaining]);

  return createPortal(
    <>
        {timerIsActive && <ResultModal 
                            ref={dialog} 
                            result={'lost'} 
                            targetTime={targetTime} 
                            remainingTime={timeRemaining}
                            onReset={handleReset}
                            />}
        <section className='challenge'>
            <h2>{title}</h2>
            <p className='challenge-time'>{targetTime} second{targetTime > 1 ? 's' : ''}</p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    </>, document.getElementById('modal') as HTMLElement
  )
};

export default TimerChallenge;