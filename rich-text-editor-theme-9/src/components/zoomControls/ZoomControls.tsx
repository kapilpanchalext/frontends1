import { ChangeEvent } from 'react';
import './ZoomControls.css';

type Props = {
  zoomValue: number;
  setZoomValue: (event: ChangeEvent<HTMLInputElement>) => void;
  setZoomLevel: (value: number) => void;
}

const ZoomControls = ({zoomValue, setZoomValue, setZoomLevel}: Props) => {

  const onDoubleClickChangeZoomValueHandler = () => {
    const element = document.getElementById("zoomRangeId") as HTMLInputElement | null;
    if (element) {
      element.value = "100";
      setZoomLevel(100);
    }
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <input id="zoomRangeId" type="range" min="50" max="200" onDoubleClick={onDoubleClickChangeZoomValueHandler} value={zoomValue} step={1} onChange={setZoomValue} className="slider"></input>
        <div>{zoomValue}%</div>
      </div>
    </>
  )
}

export default ZoomControls;