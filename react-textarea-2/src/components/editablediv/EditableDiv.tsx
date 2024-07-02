import React from 'react'

type Props = {}

const EditableDiv = ({...props}: Props) => {
  return (
    <div
      contentEditable={true}
      className="w-full h-full p-2 bg-white border border-gray-300 rounded-md"
      {...props}
    ></div>
  )
}

export default EditableDiv;