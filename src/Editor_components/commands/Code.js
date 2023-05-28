import "./toolbar.css";
import { useMarkdown } from "../../provider/markdown-provider.js";
import handleSelectedText from  "../../utils/SelectedText.js";
import StartPosition from "../../utils/StarPosition";
import React from "react";

function Code() {
  const [markdown, setMarkdown] = useMarkdown();

  const executeCode = () => {
    const text = handleSelectedText();
    const indexToReplace = StartPosition();
    const previousMarkdown = markdown;
    return  text !== "" ? setMarkdown(previousMarkdown.substring(0 , indexToReplace) + `\`\`${text}\`\`` +
      markdown.substring(indexToReplace + text.length )): setMarkdown(markdown +"\n``Here your code``");
    };

  return (
    <React.Fragment>
    <div className="titleBar" onClick={executeCode}>
      <button aria-label="Insert Code" className="btnTools">

      <svg viewBox="0 0 48 48" fill="none" height="15" width="15">
      <path
        d="M16 13 4 25.432 16 37m16-24 12 12.432L32 37"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m28 4-7 40" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
      </button>
      
    </div>
    </React.Fragment>
  );
}
export default Code;

