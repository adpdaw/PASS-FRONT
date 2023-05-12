import "./toolbar.css";
import { useMarkdown } from "../../provider/markdown-provider.js";
import { useContext } from "react";

function CodeBlock() {
  const [markdown, setMarkdown] = useMarkdown();
  const executeCodeBlock = () => {
    return setMarkdown(markdown + "\n**");
  };

  return (
    <div className="titleBar" onClick={executeCodeBlock}>
      <button aria-label="Add CodeBlock Text">

        <svg width="15" height="15" viewBox="0 0 48 48">
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
      </button>
    </div>
  );
}
export default CodeBlock;

