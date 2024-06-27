import NoProjectSelectedImage from "../../assets/no-projects.png"
import Button from '../button/Button';

type Props = {
    onStartAddProject: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const NoProjectSelected = ({ onStartAddProject }: Props) => {
  return (
    <div className='mt-24 text-center w-2/3'>
        <img src={NoProjectSelectedImage} alt='An empty task list' className='w-16 h-16 object-contain mx-auto'/>
        <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
        <p className='text-stone-400 mb-4'>Select a project to get started</p>
        <p className='mt-8'>
            <Button onClick={onStartAddProject}>Create New Project</Button>
        </p>
    </div>
  )
}

export default NoProjectSelected;