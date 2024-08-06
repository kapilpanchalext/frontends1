import React, { Dispatch, useRef, useState, KeyboardEvent, ChangeEvent } from 'react'
import { CMD, CMD_MAP } from '../../utils/Commands';
import { FONT_SIZE_MAP, FontNames, FontSize } from '../../utils/FontNames';
import useFloatingToolbar from '../../hooks/floatingtoolbar/useFloatingToolbar';
import { DownloadFile } from './downloadFile/DownloadFile';

type Props = {
  activeTheme: string;
  data: string;
  isReadonly: boolean;
  setIsReadonly: Dispatch<React.SetStateAction<boolean>>;
  getKeyWords: (keywords: string[]) => void;
  updateTOC: (isEditable: boolean) => void;
}

const ButtonControls = ({ activeTheme, data, isReadonly, setIsReadonly, getKeyWords, updateTOC }: Props) => {
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const [fontColor, setFontColor] = useState<boolean>(false);
  const draggableRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      if (file.name.endsWith('.hdoc') || file.type === 'application/x-hdoc') {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            let insertHTML: string;
            if (typeof e.target.result === 'string') {
              insertHTML = e.target.result;
            } else {
              // Convert ArrayBuffer to string
              insertHTML = new TextDecoder().decode(new Uint8Array(e.target.result));
            }
            documentExecCommand(CMD.INSERT_HTML, false, insertHTML);
            updateTOC(true);
          }
        };
        reader.readAsText(file);
      } else {
        alert('Please select a valid HDOC file.');
      }
    } else {
      alert('No file selected or invalid file.');
    }
  };

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
    else if (command === CMD.INSERT_HTML) {
        fileInputRef.current?.click();
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
    else if(command === CMD.SAVE_FILE){
        DownloadFile({data:data});
      return;
    }
    documentExecCommand(command, false, value);
  }

  const pdfDownloadFileHandler = () => {
    // setSavePdf(true);
  }

  const inputSearchKeywordsHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    // if (event.key === 'Enter') {
    //   getKeyWords(event.currentTarget.value.split(',').map(keywords => keywords.trim()));
    // }
    if (event.key === 'Enter') {
      event.preventDefault();
      const keywords = event.currentTarget.value
        .split(',')
        .map(keyword => keyword.trim())
        .filter(keyword => keyword.length > 0);
  
      if (keywords.length > 0) {
        getKeyWords(keywords);
      } else {
        getKeyWords([]);
      }
    }
  }

  return (
    <>
      <div className={activeTheme}>
        <div style={{ margin: "5px", justifyContent: 'left', alignItems: 'left', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '2px', alignContent: 'center', justifyItems: 'center' }}>
        <input type="search" name="search" style={{ minHeight: '33px' }} placeholder="Search..." onKeyDown={inputSearchKeywordsHandler}/>
          {Array.from(CMD_MAP.entries()).map(([key, cmd]) => {
            let inputTypes;
            if(key === CMD.FONTNAME) {
              inputTypes = <select name='fontName' key={key} style={{ minHeight: '33px' }} onChange={(event: ChangeEvent<HTMLSelectElement>) => applyExecCommandHandler(key, event.target.value)}>{FontNames.map((font) =><option key={font} value={font}>{font}</option>)}</select>
            } 
            else if(key === CMD.FONTSIZE){
              inputTypes = <select name='fontSize' key={key} style={{ minHeight: '33px' }} onChange={(event: ChangeEvent<HTMLSelectElement>) => applyExecCommandHandler(key, event.target.value)}>{FontSize.map((size) =><option key={size} value={size}>{size}</option>)}</select>
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
              // background: 'black',
              // color: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid black',
              borderColor: 'black',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
            onClick={ colorPickerCloseHandler }
          >
            X
          </button>
          </div>
        )}
      </div>
      <input
        type="file"
        accept=".hdoc"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </>
  )
}

export default ButtonControls;