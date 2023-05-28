import React, { useState } from 'react';
import handleSelectedText from "../../utils/SelectedText.js";
import StartPosition from "../../utils/StarPosition";
import { useMarkdown } from "../../provider/markdown-provider.js";

const HeaderDropdown = () => {

    const [markdown, setMarkdown] = useMarkdown();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleHeaderClick = (e) => {
        e.preventDefault();
        setIsOpen(false);
    };

    
    const executeHeader = (e) => {
        e.preventDefault();
        const clickedLinkClass = e.target.className;
       
        const text = handleSelectedText();
        const indexToReplace = StartPosition();
        const previousMarkdown = markdown;
        var hearderText = "";
        var header = "\n#"

        if(clickedLinkClass === "h1"){
            hearderText =  `#${" " + text}`;
        }else if (clickedLinkClass === "h2"){
            hearderText =  `##${" " + text}`;
            header = "\n##";
        }else if (clickedLinkClass === "h3"){
            hearderText =  `###${" " + text}`;
            header = "\n###";
        }else if (clickedLinkClass === "h4"){
            hearderText =  `####${" " + text}`;
            header = "\n####";
        }else if (clickedLinkClass === "h5"){
            hearderText =  `#####${" " + text}`;
            header = "\n#####";
        }else if (clickedLinkClass === "h6"){
            hearderText =  `######${" " + text}`;
            header = "\n######";
        }
        return text !== "" ? setMarkdown(previousMarkdown.substring(0, indexToReplace) +
         hearderText + markdown.substring(indexToReplace + text.length)) : setMarkdown(markdown + header);
    };


    return (
        <React.Fragment>
        <div className="titleBar">
            <button aria-label="Dropdown Header" onClick={toggleDropdown} className="btnTools">
                <svg width="15" height="15" viewBox="0 0 384 512">
                    <path
                        fill="currentColor"
                        d="M448 448c0 17.69-14.33 32-32 32h-96c-17.67 
                                0-32-14.31-32-32s14.33-32 32-32h16V272H112v144h16c17.67
                                0 32 14.31 32 32s-14.33 32-32 32H32c-17.67 
                                0-32-14.31-32-32s14.33-32 32-32h16V96H32C14.33
                                96 0 81.69 0 64s14.33-32 32-32h96c17.67 
                                0 32 14.31 32 32s-14.33 32-32 32h-16v112h224V96h-16c-17.67
                                0-32-14.31-32-32s14.33-32 32-32h96c17.67 
                                0 32 14.31 32 32s-14.33 32-32 32h-16v320h16c17.7 0 32 14.3 32 32z" />
                </svg>
            </button>

            {isOpen && (
                <div className='container'>
                <div className="dropdown-menu">
                    <ul>
                        <li onClick={executeHeader} >
                            <a href="/" className='h1' onClick={(e) => handleHeaderClick(e, 1)}>
                                H1
                            </a>
                        </li>
                        <li onClick={executeHeader} >
                            <a href="/" className='h2' onClick={(e) => handleHeaderClick(e, 2)}>
                                H2
                            </a>
                        </li>
                        <li onClick={executeHeader}>
                            <a href="/" className='h3' onClick={(e) => handleHeaderClick(e, 3)}>
                                H3
                            </a>
                        </li>
                        <li onClick={executeHeader}>
                            <a href="/" className='h4' onClick={(e) => handleHeaderClick(e, 4)}>
                                H4
                            </a>
                        </li>
                        <li onClick={executeHeader}>
                            <a href="/" className='h5' onClick={(e) => handleHeaderClick(e, 5)}>
                                H5
                            </a>
                        </li>
                        <li onClick={executeHeader}>
                            <a href="/" className='h6' onClick={(e) => handleHeaderClick(e, 6)}>
                                H6
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            )}
        </div>
        </React.Fragment>
    );
};

export default HeaderDropdown;
