import { useMarkdown } from "../../provider/markdown-provider";
import React from "react";
import Bold from "./Bold";

import Undo from "./Undo";
import Redo from "./Redo";
import Italic from "./Italic";
import Header from "./Header";
import Image from "./Image";
import AddList from "./AddList";
import CodeBlock from "./CodeBlock";
import Link from "./Link";

const All = () => {
  return (
    <div className="all">
      <div className="titleBarWrap">
        <Undo />
        <Redo />
        <Bold />
        <Italic/>
        <Header/>
        <Link/>
        <AddList/>
        <Image/>
        <CodeBlock/>
      </div>
    </div>
  );
};

export default All;
