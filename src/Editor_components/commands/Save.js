import { React, useState, useEffect } from "react";
import { useMarkdown } from "../../provider/markdown-provider.js";
import "./toolbar.css";


const Save = () => {
    const [markdown, setMarkdown] = useMarkdown();
    
    const handleSave = () => {
        console.log('Guardar Markdown')
        console.log(markdown)
    };

    return (
        <div className="titleBar">
            <button aria-label="Save" onClick={handleSave} className="btnTools">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 width="18px" height="18px" viewBox="0 0 612 612" fill="currentColor">
	<g id="_x32__13_">
		<g>
			<path d="M363.375,191.25c10.557,0,19.125-8.568,19.125-19.125v-76.5c0-10.557-8.568-19.125-19.125-19.125
				s-19.125,8.568-19.125,19.125v76.5C344.25,182.682,352.818,191.25,363.375,191.25z M535.5,0h-459C34.253,0,0,34.253,0,76.5v459
				C0,577.747,34.253,612,76.5,612h459c42.247,0,76.5-34.253,76.5-76.5v-459C612,34.253,577.747,0,535.5,0z M153,38.25h306v172.125
				c0,10.557-8.568,19.125-19.125,19.125h-267.75c-10.557,0-19.125-8.568-19.125-19.125V38.25z M573.75,535.5
				c0,21.133-17.117,38.25-38.25,38.25h-459c-21.133,0-38.25-17.117-38.25-38.25v-459c0-21.133,17.117-38.25,38.25-38.25h38.25
				V229.5c0,21.114,17.117,38.25,38.25,38.25h306c21.133,0,38.25-17.136,38.25-38.25V38.25h38.25c21.133,0,38.25,17.136,38.25,38.25
				V535.5z"/>
		</g>
	</g>

</svg>
            </button>
        </div>
       
    );
};

export default Save;
