import log from '../../log';
import RichTextLayout from '../richTextLayout/RichTextLayout';

type Props = {
  layoutHeight: number;
}

const RichTextEditor = ({layoutHeight}: Props) => {
  log("<RichTextEditor /> rendered");

  return (
    <>
      <RichTextLayout layoutHeight={layoutHeight} />
    </>
  )
}

export default RichTextEditor;