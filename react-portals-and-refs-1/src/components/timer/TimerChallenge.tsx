import { useEffect, useRef, useState } from 'react';
import ResultModal from '../resultmodal/ResultModal';

type Props = {
    title: string
    targetTime: number
}

const TimerChallenge = ({title, targetTime}: Props) => {
    const timer = useRef<NodeJS.Timeout>();
    const dialog = useRef<HTMLDialogElement>(null);
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    
    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            // dialog.current?.showModal();
        }, 1000 * targetTime);
        setTimerStarted(true);
    }

    const handleStop = () => {
        clearTimeout(timer.current);
    }

    useEffect(() => {
        if (timerExpired) {
          dialog.current?.showModal();
        }
      }, [timerExpired]);

  return (
    <>
        {timerExpired && <ResultModal ref={dialog} result={'lost'} targetTime={targetTime} />}
        <section className='challenge'>
            <h2>{title}</h2>
            <p className='challenge-time'>{targetTime} second{targetTime > 1 ? 's' : ''}</p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    </>
  )
};

export default TimerChallenge;