import "./toolbar.css";
import { useMarkdown } from "../../provider/markdown-provider.js";
import { useState} from "react";



function Undo() {
  const [markdown, setMarkdown] = useMarkdown();
  
  const undo = () => {
    const keydownEvent = new KeyboardEvent('keydown', { key: 'z', code: 'KeyZ', ctrlKey: true });
    //const keyupEvent = new KeyboardEvent('keyup', { key: 'z', code: 'KeyZ', ctrlKey: true });
    keydownEvent.preventDefault();
    // keyupEvent.preventDefault();
    document.dispatchEvent(keydownEvent);
    //document.dispatchEvent(keyupEvent);
    // console.log(typeof (markdown))
    let string = markdown + "";
    // console.log(string.length)
    // console.log(string)
    // console.log(string.substring(0, string.length - 1))
    setMarkdown(string.substring(0, string.length - 1))
    // console.log("undo")
    // setMarkdown(markdown + "\n**Botón por implementar**")
    //alert("estoy entrando")
  };




  return (
    <div className="titleBar" onClick={undo}>
      <button aria-label="Undo Action">
        <svg width="15" height="15" viewBox="0 0 384 512">
          <path
            fill="currentColor"
            d="M448,440a16,16,0,0,1-12.61-6.15c-22.86-29.27-44.07-51.86-73.32-67C335,352.88,301,345.59,256,344.23V424A16,16,0,0,1,229,435.57l-176-168a16,16,0,0,1,0-23.14l176-168A16,16,0,0,1,256,88v80.36c74.14,3.41,129.38,30.91,164.35,81.87C449.32,292.44,464,350.9,464,424a16,16,0,0,1-16,16Z"
          />
        </svg>
      </button>
    </div>
  );
}
export default Undo;
