import "./toolbar.css";
import { useMarkdown } from "../../provider/markdown-provider.js";
import handleSelectedText from  "../../utils/SelectedText.js";
import StartPosition from "../../utils/StarPosition";
import React from "react";

function CodeBlock() {
  const [markdown, setMarkdown] = useMarkdown();

  const executeCodeBlock = () => {
    const text = handleSelectedText();
    const indexToReplace = StartPosition();
    const previousMarkdown = markdown;
    return  text !== "" ? setMarkdown(previousMarkdown.substring(0 , indexToReplace) + `\n\`\`\`js\n${text}\n\`\`\`\n` +
      markdown.substring(indexToReplace + text.length )): setMarkdown(markdown +`\n\`\`\`js\n\n\`\`\`\n`);
    };

  return (
    <React.Fragment>
    <div className="titleBar" onClick={executeCodeBlock}>
      <button aria-label="Code Block ">

        <svg width="18" height="18" viewBox="0 0 640 512">
          <path
            fill="currentColor"
            d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 
            64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 
            19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 
            76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 
            209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9
             0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 
             33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 
             33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 
             0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>
        </svg>
      </button>
    </div>
    </React.Fragment>
  );
}
export default CodeBlock;

