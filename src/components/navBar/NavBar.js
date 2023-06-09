import { useMarkdown } from "../../provider/markdown-provider";
import React, { useState, useRef} from 'react';
import './navBar.css';
import logo from '../../img/favicon.png';

const NavBar = () =>{

    const [markdown, setMarkdown] = useMarkdown();
    
    const updateMarkdown = (event) =>{
        const value = event.target.value;  
    }

    const handleFileInputChange = (event) => { 
      const reader = new FileReader(); 
      reader.onload = (event) => { 
        setMarkdown(event.target.result); 
      }; 
      reader.readAsText(event.target.files[0]); 
    }; 

    const downloadFile = () =>{
      const link = document.createElement('a');
      const file = new Blob([markdown], {type: 'text/plain'});
      link.href = URL.createObjectURL(file);
      link.download = 'Untitled.md';
      link.click();
      URL.revokeObjectURL(link.href);
  };

    return(
<div className="nav">
<input type="checkbox" id="nav-check"/>
<div className="nav-header">
  <div className="nav-title">

    <img className='logo' src={logo} alt="logo" />
 
    <span className="logoName">PassCode ™</span>
  </div>
</div>
<div className="nav-btn">
  <label htmlFor="nav-check">
    <span></span>
    <span></span>
    <span></span>
  </label>
</div>

<div className="nav-links">

  <ul>
  <label className="file">
    <input className="inputNav" aria-label="File browser" type="file" onChange={handleFileInputChange} />
    <span className="file-custom"></span>
    </label> 
    <label className="file">
    <input className="inputNav" aria-label="File browser" type="'text/plain'" onClick={downloadFile} />
    <span className="file-customDownload"></span>
    </label> 
    <li>Link</li>
    <li>Link</li>
    <li>Link</li>
    <li>Link</li>
  </ul>
</div>
</div>
    );
}

export default NavBar;