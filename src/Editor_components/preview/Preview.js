import React from "react";
import TitleBar from "../title-bar/TitleBar";
import ReactMarkdown from 'react-markdown';
import { useMarkdown } from "../../provider/markdown-provider";
import './preview.css';
import { useEffect,useRef } from "react";



const Preview = () =>{
    const [markdown, setMarkdown] = useMarkdown();
    const previewRef = useRef(null);

    //useEffect que añade una separación a los párrafos.
    useEffect(() => {
      let lastParagraph = null;
 

      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          const previewContainer = previewRef.current;
          const paragraphs = previewContainer.querySelectorAll('p');
          const lastTag = document.querySelector('.preview__scroll');
          
          if(lastTag.lastElementChild.tagName === 'P' &&  paragraphs.childElementCount !== 0){
          paragraphs.forEach((paragraph) => {
            paragraph.classList.remove('last'); // Quita la clase 'last' de los párrafos previos
          });
  
          // Agrega la clase 'last' al último párrafo
          lastParagraph = paragraphs[paragraphs.length - 1];
          lastParagraph.classList.add('last');
  
          if (lastParagraph) {
            const br = document.createElement('br');
            lastParagraph.appendChild(br);
          }
        }
     
        }
        
      };
  
      const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
          if (lastParagraph) {
            lastParagraph.classList.remove('last'); // Quita la clase 'last' al soltar la tecla Enter
            lastParagraph = null;
          }
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }, []);



    const handleChange = (event) => {
      setMarkdown(event.target.value);
    };

    return (
        <React.Fragment>
        <div className="preview">
            <TitleBar title='Preview'/>
            <div className="preview__scroll" ref={previewRef}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>  
        </div>
        </React.Fragment>
    );
}

export default Preview;