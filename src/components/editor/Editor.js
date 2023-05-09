import { useState } from "react";
import TitleBar from "../title-bar/TitleBar.js";
import { useMarkdown } from "../../provider/markdown-provider.js";
import './editor.css';
import All from "../commands/All.js";

const Editor = () =>{

    const [markdown, setMarkdown] = useMarkdown();
    const [words , setWords] = useState(0);
    const [chars , setChars] = useState(0);

    const getWordsCount = (str) => {
        return str.match(/(\w+)/g).length;   
    };

    const getCharsCount = (str) =>{
        return str.length;
    };

    const updateMarkdown = (event) =>{
        var value = event.target.value;
        setMarkdown(value);
        value = value !== "" ? value : "0";
        setWords(getWordsCount(value));
        setChars(getCharsCount(value));
    };



    return(
        <div className="editor__wrap">
            <All/>          
            <TitleBar title='Editor' aside={`${words} Words ${chars} Characters`}/>
            <textarea
            className="editor"
            value={markdown}
            onChange={updateMarkdown}/>

        </div>
    );
}

export default Editor;