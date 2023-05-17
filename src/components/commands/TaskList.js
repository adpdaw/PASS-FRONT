import "./toolbar.css";
import { useMarkdown } from "../../provider/markdown-provider.js";
import React from "react";

function TaskList() {
  const [markdown, setMarkdown] = useMarkdown();
  const executeTaskList = () => {
    return setMarkdown(markdown + "\n- [X] Not implemented");
  };

  return (
    <React.Fragment>
    <div className="titleBar" onClick={executeTaskList}>
      <button aria-label="Task List">

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
    </React.Fragment>
  );
}
export default TaskList;

