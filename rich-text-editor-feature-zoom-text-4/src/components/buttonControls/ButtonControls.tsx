import React, { Dispatch, useRef, useState } from 'react'
import { CMD, CMD_MAP } from '../../utils/Commands';
import { FONT_SIZE_MAP, FontNames, FontSize } from '../../utils/FontNames';
import useFloatingToolbar from '../../hooks/floatingtoolbar/useFloatingToolbar';

type Props = {
  isReadonly: boolean;
  setIsReadonly: Dispatch<React.SetStateAction<boolean>>;
}

const ButtonControls = ({ isReadonly, setIsReadonly }: Props) => {

  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const [fontColor, setFontColor] = useState<boolean>(false);
  const draggableRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useFloatingToolbar({ draggableRef, closeButtonRef, showColorPicker });

  const colorPickerCloseHandler = () => {
    if(fontColor){
      documentExecCommand(CMD.FORECOLOR, false, '#0000ff');
    } else {
      documentExecCommand(CMD.BACKCOLOR, false, '#fcfc03');
    }
    setShowColorPicker(false);
  }

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(fontColor){
      documentExecCommand(CMD.FORECOLOR, false, event.target.value);
    } else {
      documentExecCommand(CMD.BACKCOLOR, false, event.target.value);
    }
  };

  const documentExecCommand = (command: string, showUI: boolean = false, value: string = "") => {    
    document.execCommand(command, showUI, value);
  }

  const applyExecCommandHandler = (command: string, value: string = "") => {
    if(command === CMD.BACKCOLOR) {
      setFontColor(false);
      setShowColorPicker(true);
      return;
    }
    else if(command === CMD.FORECOLOR) {
      setFontColor(true);
      setShowColorPicker(true);
      return;
    }
    else if(command === CMD.CREATE_LINK) {
      const url = prompt("Enter a valid URL");
      if (url) {
        documentExecCommand(command, false, url);
      }
      return;
    } 
    else if (command === CMD.INSERT_IMAGE) {
      const url = prompt("Enter the Image URL");
      if (url) {
        const width = prompt("Enter the Image Width (optional)");
        const height = prompt("Enter the Image Height (optional)");
        const widthAttr = width ? ` width="${width}"` : '';
        const heightAttr = height ? ` height="${height}"` : '';
        const imageHTML = `<img src="${url}"${widthAttr}${heightAttr} />`;
        documentExecCommand(CMD.INSERT_HTML, false, imageHTML);
      }
      return;
    }
    else if (command === CMD.FONTSIZE) {
      const mappedValue = FONT_SIZE_MAP.get(Number(value));
      documentExecCommand(command, false, mappedValue?.toString());
      return;
    }
    else if (command === CMD.INSERT_TEXT) {
      const defaultText = " [" + new Date().toLocaleString() + "]";
      const insertText = prompt("Enter text...", defaultText);
      if (insertText) {
        documentExecCommand(CMD.INSERT_TEXT, false, insertText);
      }
      return;
    }
    else if(command === CMD.FORMATBLOCK){
      const defaultText = "<blockquote>";
      const insertText = prompt("Add an HTML Block <h1..h6, blockquote>: ", defaultText);
      if (insertText) {
        documentExecCommand(CMD.FORMATBLOCK, false, insertText);
      }
      return;
    }
    documentExecCommand(command, false, value);
  }

  const pdfDownloadFileHandler = () => {
    // setSavePdf(true);
  }

  return (
    <>
      <div style={{ backgroundColor:"transparent" }}>
          <div style={{ margin: "5px", justifyContent: 'left', alignItems: 'left', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '2px', alignContent: 'center', justifyItems: 'center' }}>
          <input type="search" style={{ minHeight: '33px' }} placeholder="Search..." />
            {Array.from(CMD_MAP.entries()).map(([key, cmd]) => {
              let inputTypes;
              if(key === CMD.FONTNAME) {
                inputTypes = <select key={key} style={{ minHeight: '33px' }} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => applyExecCommandHandler(key, event.target.value)}>{FontNames.map((font) =><option key={font} value={font}>{font}</option>)}</select>
              } 
              else if(key === CMD.FONTSIZE){
                inputTypes = <select key={key} style={{ minHeight: '33px' }} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => applyExecCommandHandler(key, event.target.value)}>{FontSize.map((size) =><option key={size} value={size}>{size}</option>)}</select>
              } 
              else if(key.startsWith(CMD.EMPTY)) {
                inputTypes = <div key={key} style={{ width: '8px' }}></div>
              }
              else if(key === CMD.PDF_DOWNLOAD) {
                inputTypes = <button key={key} title={cmd.description} onClick={pdfDownloadFileHandler}><span className="material-symbols-outlined" style={{ fontSize: "24px" }}>{cmd.icon}</span></button>
              }
              else if(key === CMD.READONLY) {
                inputTypes = <button key={key} title={cmd.description} onClick={() => setIsReadonly(!isReadonly)}><span className="material-symbols-outlined" style={{ fontSize: "24px" }}>{isReadonly ? cmd.icon : "done_all"}</span></button>
              }
              else {
                inputTypes = <button key={key} title={cmd.description} onClick={() => applyExecCommandHandler(key, String(cmd.value))}><span className="material-symbols-outlined" style={{ fontSize: "24px" }}>{cmd.icon}</span></button>
              }
              return (inputTypes)
            })}
          </div>
          
        {showColorPicker && (
          <div ref={draggableRef} style={{ width: '100px', height: '100px', backgroundColor: 'transparent', position: 'absolute', top: '20%', left: '50%', justifyContent: 'center', alignItems: 'center' }}>
          <input
              type="color"
              defaultValue={fontColor ? '#0000ff' : '#fcfc03'}
              onChange={handleColorChange}
              style={{ margin: '0px', width: '100px', height: '100px', backgroundColor: 'transparent', border:'none', position: 'absolute', opacity: 1, pointerEvents: 'auto', borderWidth: '0px' }} />
          
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              margin: '4px',
              width: '24px',
              height: '24px',
              background: 'black',
              color: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid black',
              borderColor: 'black',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
            onClick={colorPickerCloseHandler}
          >
            X
          </button>
          </div>
        )}
      </div>
    </>
  )
}

export default ButtonControls;