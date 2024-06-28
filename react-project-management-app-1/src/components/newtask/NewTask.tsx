import React, { useState } from 'react'

type Props = {
    onAdd: (task: string) => void
}

const NewTask = ({onAdd}: Props) => {

    const[enteredTask, setEnteredTask] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredTask(event.target.value);
    }

    const handleClick = () => {
        if(enteredTask){
            onAdd(enteredTask);
        }
        setEnteredTask('');
    }

  return (
    <div className='flex items-center gap-4'>
        <input type='text' 
               className='w-64 px-2 py-1 rounded-md bg-stone-200'
               onChange={handleChange}
               value={enteredTask}
               placeholder='Add Task...'
               />
        <button className='text-stone-700 hover:text-stone-950' 
                onClick={handleClick}>Add Task</button>
    </div>
  )
}

export default NewTask;