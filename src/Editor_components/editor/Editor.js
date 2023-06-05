import React from "react";
import { useState, useRef , useEffect,useContext} from "react";
import { datosContexto } from "../../index_components/Context/Context.js";
import TitleBar from "../title-bar/TitleBar.js";
import { useMarkdown } from "../../provider/markdown-provider.js";
import { useParams } from "react-router-dom";
import './editor.css';
import All from "../commands/All.js";

const Editor = () =>{
    var context = useContext(datosContexto);
    const { fileId } = useParams();

   const url = `http://localhost/api/file/${fileId}`;

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

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await context.getFile(url);
            setMarkdown(response.data.file.content)
            return response.data;
          } catch (error) {
            return error;
          }
        }
        fetchData();
      },[]);
    return(
        <React.Fragment>
        <div className="editor__wrap">
            <All/>          
            <TitleBar title='Editor' aside={`${words} Words ${chars} Characters`}/>
            <textarea
            ref={markdownRef}
            className="editor"
            value={markdown}
            onChange={updateMarkdown}
            />
        </div>
        </React.Fragment>
        
    );
}

export default Editor;