import RichTextLayout from '../richTextLayout/RichTextLayout';

type Props = {
  layoutHeight: number;
}

const RichTextEditor = ({layoutHeight}: Props) => {

  return (
    <>
      <RichTextLayout layoutHeight={layoutHeight} />
    </>
  )
}

export default RichTextEditor;