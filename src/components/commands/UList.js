import React from "react";
import "./toolbar.css";
import { useMarkdown } from "../../provider/markdown-provider.js";
import handleSelectedText from  "../../utils/SelectedText.js";
import StartPosition from "../../utils/StarPosition";

function UList() {
  const [markdown, setMarkdown] = useMarkdown();

  const executeUList = () => {
    const text = handleSelectedText();
    const indexToReplace = StartPosition();
    const previousMarkdown = markdown;
    return  text !== "" ? setMarkdown(previousMarkdown.substring(0 , indexToReplace) +  `\n+ ${text}` +
      markdown.substring(indexToReplace + text.length )): setMarkdown(markdown +`\n+ Item 1 `);
    };

  return (
    <React.Fragment>
    <div className="titleBar" onClick={executeUList}>
      <button aria-label="Unordered List">

      <svg viewBox="0 0 512 512" height="15" width="15">
      <path
        fill="currentColor"
        d="M88 48c13.3 0 24 10.75 24 24v48c0 13.3-10.7 24-24 24H40c-13.25 0-24-10.7-24-24V72c0-13.25 10.75-24 24-24h48zm392 16c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32 0-17.67 14.3-32 32-32h288zm0 160c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32h288zm0 160c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32h288zM16 232c0-13.3 10.75-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H40c-13.25 0-24-10.7-24-24v-48zm72 136c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H40c-13.25 0-24-10.7-24-24v-48c0-13.3 10.75-24 24-24h48z"
      />
    </svg>
      </button>
    </div> 
     </React.Fragment>
  );
}
export default UList;
