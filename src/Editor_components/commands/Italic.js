import "./toolbar.css";
import { useMarkdown } from "../../provider/markdown-provider.js";
import React from "react";
import handleSelectedText from  "../../utils/SelectedText.js";
import StartPosition from "../../utils/StarPosition";

function Italic() {
  const [markdown, setMarkdown] = useMarkdown();

  const executeItalic = () => {
    const text = handleSelectedText();
    const indexToReplace = StartPosition();
    const previousMarkdown = markdown;
    var firstCharacter =text.substring(0, 1);
    var lastCharacter = text.substring(text.length - 1);

    if (firstCharacter === "*" && lastCharacter === "*"){
      var modifiedText = text.substring(1, text.length - 1);
      return  text !== "" ? setMarkdown(previousMarkdown.substring(0 , indexToReplace) +  `${modifiedText}` +  markdown.substring(indexToReplace + text.length )): setMarkdown(markdown +`\n**`);
    }
    return  text !== "" ? setMarkdown(previousMarkdown.substring(0 , indexToReplace) +  `*${text}*` +  markdown.substring(indexToReplace + text.length )): setMarkdown(markdown +`\n**`);
    };

  return (
    <React.Fragment>
    <div className="titleBar" onClick={executeItalic}>
      <button aria-label="Add Italic Text" className="btnTools">

        <svg width="15" height="15" viewBox="0 0 384 512">
          <path
            fill="currentColor"
            d="M204.758 416h-33.849l62.092-320h40.725a16 16 0 0 0 
            15.704-12.937l6.242-32C297.599 41.184 290.034 32 279.968 
            32H120.235a16 16 0 0 0-15.704 12.937l-6.242 32C96.362 86.816 
            103.927 96 113.993 96h33.846l-62.09 320H46.278a16 16 0 0 0-15.704
            12.935l-6.245 32C22.402 470.815 29.967 480 40.034 480h158.479a16 16
            0 0 0 15.704-12.935l6.245-32c1.927-9.88-5.638-19.065-15.704-19.065z"
          />
        </svg>
      </button>
    </div>
    </React.Fragment>
  );
}
export default Italic;

