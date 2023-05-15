import "./toolbar.css";
import { useMarkdown } from "../../provider/markdown-provider.js";
import { React, useState} from "react";
import useUndoableState from "../../customHooks/useUndoableState";




function Redo() {
  const [markdown, setMarkdown] = useMarkdown();
  const [states, setStates] = useState([markdown]);
 
  const  redo = ()  =>{
    // var evt = new KeyboardEvent('keydown', {'key': 'y', 'ctrlKey': true});
    // document.dispatchEvent(evt);
    let estado = markdown;
    //console.log("redo")
    //setMarkdown(markdown)
    setStates([...markdown , estado]) 
    console.log(states)
    if(states[0] !== ""){
      states.forEach(state => {
        
      });
      setMarkdown(states[states.length-1])
    }
    //setMarkdown(markdown + "\n**Botón por implementar**"
  }


  // const init = {text: markdown};
  // const {
  //   state: doc,
  //   setState: setDoc,
  //   resetState: resetDoc,
  //   index: docStateIndex,
  //   lastIndex: docStateLastIndex,
  //   goBack: undoDoc,
  //   goForward: redoDoc
  // } = useUndoableState(init);

  // const canUndo = docStateIndex > 0;
  // const canRedo = docStateIndex < docStateLastIndex;


  // // const executeRedo = () => {
  // //   document.execCommand("redo",false,null);
  // // };

  // const handleOnChange = (e) =>{
  //  setDoc = setMarkdown(markdown + e.target.value)
  // }

  return (
    <div className="titleBar" onClick={redo}>
      <button aria-label="Redo Action" >
        <svg width="15" height="15" viewBox="0 0 384 512">
          <path
            fill="currentColor"
            d="M58.79,439.13A16,16,0,0,1,48,424c0-73.1,14.68-131.56,43.65-173.77,35-51,90.21-78.46,164.35-81.87V88a16,16,0,0,1,27.05-11.57l176,168a16,16,0,0,1,0,23.14l-176,168A16,16,0,0,1,256,424V344.23c-45,1.36-79,8.65-106.07,22.64-29.25,15.12-50.46,37.71-73.32,67a16,16,0,0,1-17.82,5.28Z"
          />
        </svg>
      </button>
    </div>
  );
}
export default Redo;
