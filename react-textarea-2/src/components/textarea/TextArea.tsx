import { TextareaHTMLAttributes } from 'react'

type Props = {} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({...props}: Props) => {
  return (
    <textarea {...props}></textarea>
  )
}

export default TextArea;