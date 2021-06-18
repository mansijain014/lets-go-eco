import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CTA from "../Homepage/CTA";
import NavBar1 from "../Homepage/NavBar1";

const UploadPopup = ({ onClose, onCapture }) => {

  const browseRef = React.createRef();
  const cameraRef = React.createRef();

  const getDeviceType = () => {
    const userAgent = navigator.userAgent;

    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
      return "tablet";
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
      return "mobile";
    }
    return "desktop";
  }

  const deviceType = getDeviceType();

  return (
    <>
      <div>
      <NavBar1 />
      </div>
      <div className="popup">
        <h1 style={{fontFamily: 'var(--sf-pro-bold-font-family)'}}>Disease Detection</h1>
        <p style={{textAlign: 'center', fontFamily: 'var(--sf-pro-light-font-family)'}}>
            Take a picture of your plant leaf and upload it here. 
            The app will analyze the leaf and will report you if your plant leaf is diseased
            along with some curing practices for the same.
        </p>
        <FontAwesomeIcon icon="images" />
        <CTA icon="folder-open" text="Add Photo" onClick={() => { browseRef.current.click() }} />
        {
          deviceType !== "desktop" ?
            <CTA icon="camera" text="Camera" onClick={() => { cameraRef.current.click() }} />
            :
            null
        }
        <input ref={browseRef} type="file" style={{ display: 'none' }} accept="image/*" onChange={(event) => { onCapture(event.target.files[0]) }} />
        <input ref={cameraRef} type="file" style={{ display: 'none' }} accept="image/*" capture="environment" onChange={(event) => { onCapture(event.target.files[0]) }} />
      </div>
      <FontAwesomeIcon className="close-button" icon="window-close" onClick={onClose} />
    </>
  );
};

export default UploadPopup;
