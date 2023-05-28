import "./toolbar.css";
import { useMarkdown } from "../../provider/markdown-provider.js";
import React from "react";


function Refresh() {

    const [markdown, setMarkdown] = useMarkdown();

    const executeRefresh = () => {
        setMarkdown("");
        //Ver de poner a cero el contador de palabras
    };

    return (
        <React.Fragment>
        <div className="titleBar" onClick={executeRefresh}>
            <button aria-label="Refresh Text" className="btnTools">
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"
                    fill="currentColor"
                    d="M2.05939 10.8927C2.59723 5.90964 6.72911 2 11.7875 2C14.6474 2 17.2148
                    3.25301 19 5.23997V4C19 3.44772 19.4477 3 20 3C20.5523 3 21 3.44772 
                    21 4V8C21 8.26522 20.8946 8.51957 20.7071 8.70711C20.5195 8.89464 
                    20.2652 9 20 9L16 9C15.4477 9 15 8.55228 15 8C15 7.44771 15.4477 
                    7 16 7L17.867 7C16.4351 5.16504 14.2403 4 11.7875 4C7.79954 4 4.4814 
                    7.09046 4.04784 11.1073C3.98857 11.6564 3.4954 12.0535 2.9463 
                    11.9942C2.3972 11.935 2.00012 11.4418 2.05939 10.8927ZM21.0537 
                    12.0058C21.6028 12.065 21.9999 12.5582 21.9406 13.1073C21.4028 
                    18.0904 17.2709 22 12.2125 22C9.35262 22 6.78516 20.747 4.99998 
                    18.76V20C4.99998 20.5523 4.55227 21 3.99998 21C3.4477 21 2.99998
                    20.5523 2.99998 20L2.99998 16C2.99998 15.7348 3.10534 15.4804
                    3.29287 15.2929C3.48041 15.1054 3.73476 15 3.99998 15L7.99998 
                    15C8.55227 15 8.99998 15.4477 8.99998 16C8.99998 16.5523 8.55227 
                    17 7.99998 17H6.13297C7.56485 18.835 9.75975 20 12.2125 20C16.2005 
                    20 19.5186 16.9095 19.9522 12.8927C20.0114 12.3436 20.5046 11.9465 
                    21.0537 12.0058Z"/>
                </svg>
            </button>
        </div>
        </React.Fragment>
    );
}
export default Refresh;
