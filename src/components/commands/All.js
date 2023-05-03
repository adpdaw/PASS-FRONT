import { useMarkdown } from "../../provider/markdown-provider";
import React from "react";
import Bold from "./Bold";
import Code from "./Code";
import Undo from "./Undo";
import Redo from "./Redo";

const All = () => {
  return (
    <div className="all">
      <div className="titleBarWrap">
        <Undo />
        <Redo />

        <Bold />
        <Code />
      </div>
    </div>
  );
};

export default All;
