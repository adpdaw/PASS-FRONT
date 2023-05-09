import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./markdownmanual.css";
import "../commands/toolbar.css";
import Quote from "../commands/Quote";

function MarkDownManual() {
    const [showManual, setShowManual] = useState(false);

    function toggleManual() {
        setShowManual((prev) => !prev);
    }

    return (
        <div className="markdown-editor titleBar">
            <button onClick={toggleManual} aria-label="Manual">
                <svg width="20" height="20" viewBox="0 0 50 50">
                    <path
                        fill="currentColor"
                        d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z 
                        M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z 
                        M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"/>
                </svg>
            </button>
            {showManual && (
                <div className="manual">
                    
               
                    <h2>Basic Syntax</h2>
                    
                    <br></br>
                    <p># Heading level 1</p>
                    <p>## Heading level 2</p>
                    <p>### Heading level 3</p>
                    <p>#### Heading level 4</p>
                    <p>##### Heading level 5</p>
                    <p>###### Heading level 6</p>
                    <br></br>
                    <p>*Italic Text*</p>
                    <br></br>
                    <p>**Bold Text**</p>
                    <br></br>
                    <p>Link [w3schools](https://www.w3schools.com/)</p>
                    <br></br>
                    <p>{`>`} Quotation</p>
                    <br></br>
                    <p>``Here your code``</p>
                    <br></br>
                    <p>![Imagen](https://t2.uc.ltmcdn.com/es/posts/5/4/2/como_conocer_los_colores_exactos_de_una_imagen_10245_600_square.jpg)</p>
                    <br></br>
                    <p>- To add a line break</p>
                    <br></br>
                    <p>--- To add a line</p>
                    <p>To add a block of code {`js`}</p>
                    <button className="close-button" onClick={toggleManual}>
                        ✖
                    </button>
                </div>
            )}
        </div>
    );
}

export default MarkDownManual;
