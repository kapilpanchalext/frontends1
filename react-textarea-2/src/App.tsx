import { useRef } from "react";
import useFloatingToolbar from "./hooks/useFloatingToolbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faAlignCenter, faAlignJustify, faAlignRight, faBold, faItalic, faHeading, faParagraph } from "@fortawesome/free-solid-svg-icons";

function App() {

  const draggableRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useFloatingToolbar({ draggableRef, closeButtonRef });

  return (
    <>
      <div ref={draggableRef} className="w-[500px] h-[100px] bg-slate-300 rounded-1xl absolute flex flex-col items-center justify-center">
        <div className="flex gap-2">
          <button><FontAwesomeIcon icon={faAlignLeft} /></button>
          <button><FontAwesomeIcon icon={faAlignCenter} /></button>
          <button><FontAwesomeIcon icon={faAlignJustify} /></button>
          <button><FontAwesomeIcon icon={faAlignRight} /></button>
          <button><FontAwesomeIcon icon={faBold} /></button>
          <button><FontAwesomeIcon icon={faItalic} /></button>
          <button><FontAwesomeIcon icon={faHeading} /></button>
          <button><FontAwesomeIcon icon={faParagraph} /></button>
        </div>
        <button className="bg-slate-600 hover:text-cyan-200" ref={closeButtonRef}>Close</button>
      </div>
    </>
  )
}

export default App;