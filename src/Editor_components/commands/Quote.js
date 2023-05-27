import "./toolbar.css";
import { useMarkdown } from "../../provider/markdown-provider.js";
import React from "react";
import handleSelectedText from  "../../utils/SelectedText.js";
import StartPosition from "../../utils/StarPosition";

function Quote() {
  const [markdown, setMarkdown] = useMarkdown();

 

  const executeQuote = () => {
    const text = handleSelectedText();
    const indexToReplace = StartPosition();
    const previousMarkdown = markdown;
    return  text !== "" ? setMarkdown(previousMarkdown.substring(0 , indexToReplace) +  `\n>${text}` +
      markdown.substring(indexToReplace + text.length )): setMarkdown(markdown +`\n>`);
    };

  return (
    <React.Fragment>
    <div className="titleBar" onClick={executeQuote}>
      <button aria-label="Add Quote Text">

      <svg fill="currentColor" viewBox="0 0 448 512" height="15" width="15">
      <path d="M96 96c-53.02 0-96 42.1-96 96s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128v-96c0-53.9-43-96-96-96zm352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128v-96z" />
    </svg>
      </button>
    </div>
    </React.Fragment>
  );
}
export default Quote;

