import { useState } from 'react';
import RichTextLayout from '../richTextLayout/RichTextLayout';
import "../../theme/theme.css";

type Props = {
  layoutHeight: number;
}

const RichTextEditor = ({layoutHeight}: Props) => {
  const[activeTheme, setActiveTheme] = useState<string>("dark-mode");

  return (
    <>
      <div className={activeTheme}>
        <RichTextLayout layoutHeight={layoutHeight} activeTheme={activeTheme} />
        <button onClick={() => setActiveTheme(activeTheme === "dark-mode" ? "light-mode" : "dark-mode")}>ChangeTheme</button>
      </div>
    </>
  )
}

export default RichTextEditor;