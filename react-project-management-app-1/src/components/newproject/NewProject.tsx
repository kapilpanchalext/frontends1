import React, { useRef } from 'react'
import Input from './Input';
import { ProjectData } from '../../App';
import Modal, { ImperativeRef } from '../modal/Modal';

type Props = {
  onAdd: (task: ProjectData) => void;
  onCancel: () => void
}

const NewProject = ({onAdd, onCancel}: Props) => {
  const modal = useRef<ImperativeRef>(null);
  const title = useRef<HTMLInputElement>();
  const description = useRef<HTMLTextAreaElement>();
  const dueDate = useRef<HTMLInputElement>();

  const handleSave = () => {
    const enteredTitle = title.current?.value;
    const enteredDescription = description.current?.value;
    const enteredDueDate = dueDate.current?.value;
    const dueDateStringToDate = enteredDueDate ? new Date(enteredDueDate) : new Date();
    
    if(enteredTitle?.trim() === '' || enteredDescription?.trim() === '' || enteredDueDate?.trim() === ''){
        modal.current?.open();
      return;
    }

    if(enteredTitle && enteredDescription && enteredDueDate){
      onAdd ({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: dueDateStringToDate
      })    
    }
  }

  return (
    <>
      <Modal ref={modal} buttonCaption='Close'> 
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>Please enter a valid title, description and due date.</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
          <menu className='flex items-center justify-end gap-4 my-4'>
              <li>
                  <button className='text-stone-800 hover:text-stone-950' onClick={onCancel}>Cancel</button>
              </li>
              <li>
                  <button onClick={handleSave} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button>
              </li>
          </menu>
          <div>
            <Input type='text' ref={title as React.Ref<HTMLInputElement>} label="Project Name"/>
            <Input ref={description as React.Ref<HTMLTextAreaElement>} label="Description" textArea/>
            <Input type='date' ref={dueDate as React.Ref<HTMLInputElement>} label="Due Date"/>
          </div>
      </div>
    </>
  )
};

export default NewProject;