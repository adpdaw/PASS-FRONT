import React, { useState } from "react";
import "./markdownmanual.css";
import "../commands/toolbar.css";

function MarkDownManual() {
    const [showManual, setShowManual] = useState(false);

    function toggleManual() {
        setShowManual((prev) => !prev);
    };

    return (
        <React.Fragment>
        <div className="markdown-editor titleBar">
            <button onClick={toggleManual} aria-label="Manual" className="btnTools">
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
                    <h2 className="titleH">PassCode ™</h2> 
                    <br></br>
                    <h1 className="headerManual"># Header 1</h1>
                    <h2 className="headerManual">## Header 2</h2>
                    <h3 className="headerManual">### Header 3</h3>
                   
                    <br></br>
                    <p><em>*Italic Text*</em> </p>
                    <br></br>
                    <p><strong>**Bold Text**</strong></p>
                    <br></br>
                    <p>Link [w3schools](https://www.w3schools.com/)</p>
                    <br></br>
                    <p>{`>`} Quotation</p>
                    <br></br>
                    <p>``Here your code``</p>
                    <br></br>
                    <p>```Here your block of code```</p>
                    <br></br>
                    <p>![elefante](https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg)</p>
                    <br></br>
                    <p>To create a line break or new line {`<br>`}, end a line with two or more spaces, and then type return. </p>
                    <br></br>
                    <p>--- To add a line</p>
                    <br></br>
                    <p>1. Ordered List</p>
                    <br></br>
                    <p>+ Unodered List. <span className="spanManual">Also - and * can be used</span></p>
                    <button className="close-button" onClick={toggleManual}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                    </button>

                </div>
            )}
        </div>
        </React.Fragment>
    );
}

export default MarkDownManual;
