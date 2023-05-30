import "./toolbar.css";
import { useState } from "react";
import React from "react";

function FullScreen() {

  const [button, setButton] = useState("Enter Full Screen");
  const [fullScreen, setFullScreen] = useState(false);




function changeFullScreen() {
  if (!fullScreen) {
    var elemento = document.documentElement;

    if (elemento.requestFullscreen) {
      elemento.requestFullscreen();
    } else if (elemento.webkitRequestFullscreen) {
      elemento.webkitRequestFullscreen();
    } else if (elemento.msRequestFullscreen) {
      elemento.msRequestFullscreen();
    }
   ;
    setButton("Exit Full Screen");
    setFullScreen(true);
    
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    
      setButton("Enter Full Screen");
      setFullScreen(false);
  }
 
};

  return (
    <React.Fragment>
    <div className="titleBar" onClick={changeFullScreen}>
      <button aria-label={button} className="btnTools">
      <svg fill="currentColor" viewBox="0 0 448 512" height="15" width="15">
      <path d="M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32s-14.3-32-32-32zm288 0h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64c0-17.69-14.3-32-32-32zM128 416H64v-64c0-17.69-14.31-32-32-32S0 334.31 0 352v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32s-14.3-32-32-32zm288-96c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96c0-17.7-14.3-32-32-32z" />
    </svg>
      </button>
    </div>
    </React.Fragment>
  );
}
export default FullScreen;

