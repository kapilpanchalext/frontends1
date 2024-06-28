import React, { useRef } from 'react'
import Input from './Input';

type Props = {}

const NewProject = (props: Props) => {

  const title = useRef<HTMLInputElement>();
  const description = useRef<HTMLTextAreaElement>();
  const dueDate = useRef<HTMLInputElement>();

  const handleSave = () => {
    const enteredTitle = title.current?.value;
    const enteredDescription = description.current?.value;
    const enteredDueDate = dueDate.current?.value;
  }

  return (
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li>
                <button className='text-stone-800 hover:text-stone-950'>Cancel</button>
            </li>
            <li>
                <button onClick={handleSave} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button>
            </li>
        </menu>
        <div>
           <Input ref={title as React.Ref<HTMLInputElement>} label="Project Name"/>
           <Input ref={description as React.Ref<HTMLTextAreaElement>} label="Description" textArea/>
           <Input ref={dueDate as React.Ref<HTMLInputElement>} label="Due Date"/>
        </div>
    </div>
  )
}

export default NewProject;