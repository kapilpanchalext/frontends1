import { ChangeEvent } from 'react';

type Props = {
    zoomValue: number;
    setZoomValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ZoomControls = ({zoomValue, setZoomValue}: Props) => {
  return (
    <>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <input type="range" min="50" value={zoomValue} max="200" onChange={setZoomValue} className="slider"></input>
            <div>{zoomValue}%</div>
        </div>
    </>
  )
}

export default ZoomControls;