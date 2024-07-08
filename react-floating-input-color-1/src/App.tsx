import { useRef } from "react";
import useFloatingToolbar from "./hooks/useFloatingToolbar";

function App() {
  const draggableRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useFloatingToolbar({ draggableRef, closeButtonRef });

  return (
    <>
      <div ref={draggableRef} style={{ width: '100px', height: '100px', backgroundColor: 'transparent', position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <input
              type="color"
              defaultValue='#fcfc03'
              className="color-input swatch-wrapper swatch"
              style={{ margin: '0px', width: '100px', height: '100px', backgroundColor: 'transparent', border:'none', position: 'absolute', opacity: 1, pointerEvents: 'auto', borderWidth: '0px' }} />
        </div>
        
      </div>
    </>
  )
}

export default App;
