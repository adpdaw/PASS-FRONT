import "./toolbar.css";
import { useMarkdown } from "../../provider/markdown-provider.js";
import { useContext } from "react";

function Code() {
  const [markdown, setMarkdown] = useMarkdown();

  const executeBold = () => {
    return setMarkdown(markdown + "\n****");
  };

  return (
    

    <div className="titleBarWrap">

      <div className="titleBar">
        <svg viewBox="0 0 48 48" fill="none" height="15" width="15">
          <path
            d="M21 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V21M24 34v8"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m32 6-4 4 4 4m6-8 4 4-4 4M14 42h20"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="titleBar">
        <svg fill="currentColor" viewBox="0 0 448 512" height="13" width="13">
          <path d="M448 448c0 17.69-14.33 32-32 32h-96c-17.67 0-32-14.31-32-32s14.33-32 32-32h16V272H112v144h16c17.67 0 32 14.31 32 32s-14.33 32-32 32H32c-17.67 0-32-14.31-32-32s14.33-32 32-32h16V96H32C14.33 96 0 81.69 0 64s14.33-32 32-32h96c17.67 0 32 14.31 32 32s-14.33 32-32 32h-16v112h224V96h-16c-17.67 0-32-14.31-32-32s14.33-32 32-32h96c17.67 0 32 14.31 32 32s-14.33 32-32 32h-16v320h16c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>

      {/*Add to list  */}
      <div className="titleBar" onClick={executeBold}>
        <button aria-label="Add todo List ">
          <svg width="15" height="15" viewBox="0 0 48 48">
            <path
              d="m5 10 3 3 6-6M5 24l3 3 6-6M5 38l3 3 6-6m7-11h22M21 38h22M21 10h22"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Code;
