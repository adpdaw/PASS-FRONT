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
        
    }

    const getCharsCount = (str) =>{
        return str.length;
    }

    const updateMarkdown = (event) =>{
        const value = event.target.value;

        setMarkdown(value);
        setWords(getWordsCount(value));
        setChars(getCharsCount(value));
    }

    const downloadFile = () =>{
        const link = document.createElement('a');
        const file = new Blob([markdown], {type: 'text/plain'});
        link.href = URL.createObjectURL(file);
        link.download = 'Untitled.md';
        link.click();
        URL.revokeObjectURL(link.href);
    };

    return(
        <div className="editor__wrap">
            <All/>
            <TitleBar title='Editor' aside={`${words} Words ${chars} Characters`}/>
            <textarea
            className="editor"
            value={markdown}
            onChange={updateMarkdown}/>
            <button className="btn-download" onClick={downloadFile}> Download File </button>
        </div>
    );
}

export default Editor;