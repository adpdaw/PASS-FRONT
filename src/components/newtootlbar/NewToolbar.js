import { useMarkdown } from "../../provider/markdown-provider";
import React from "react";
import './newtoolbar.css';

const NewToolbar = () =>{

    const [markdown, setMarkdown] = useMarkdown();
    
    const updateMarkdown = (event) =>{
        const value = event.target.value;

       
    }



    return(
        <div className='container' >
     <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      JoGeek
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="//github.io/jo_geek" target="_blank">Github</a>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
  </div>
</div>
      </div>
    );
}

export default NewToolbar;