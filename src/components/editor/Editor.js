import { useState, useRef , useEffect} from "react";
import TitleBar from "../title-bar/TitleBar.js";
import { useMarkdown } from "../../provider/markdown-provider.js";
import './editor.css';
import All from "../commands/All.js";

const Editor = () =>{

    const [markdown, setMarkdown] = useMarkdown();
    const [words , setWords] = useState(0);
    const [chars , setChars] = useState(0);
    const markdownRef = useRef(null);


    const getWordsCount = (str) => {
        if (str !== null && str !== undefined) {
            const matches = str.match(/(\w+)/g);
            return matches ? matches.length : 0;
          } else {
            return 0;
          }
    };

    const getCharsCount = (str) =>{
        if(str !== null){
            return str.length;
        }
        
    };

    const updateMarkdown = (event) =>{
        var value = event.target.value;
        if(value === ""){
            setWords(0)
            setChars(0)
        } 
        if(value !== null){
        setMarkdown(value);
        setWords(getWordsCount(value));
        setChars(getCharsCount(value));
        }
    };

    return(
        <div className="editor__wrap">
            <All/>          
            <TitleBar title='Editor' aside={`${words} Words ${chars} Characters`}/>
            <textarea
            ref={markdownRef}
            className="editor"
            value={markdown}
            onChange={updateMarkdown }
            />
        </div>
        
    );
}

export default Editor;