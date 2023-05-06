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
import OList from "./OList";
import UList from "./UList";
import Quote from "./Quote";
import Code from "./Code";

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
        <Quote/>
        <Code/>
        <AddList/>
        <OList/>
        <UList/>
        <Image/>
        <CodeBlock/>
      </div>
    </div>
  );
};

export default All;
