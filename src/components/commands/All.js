import React from "react";
import Bold from "./Bold";
import Undo from "./Undo";
import Redo from "./Redo";
import Italic from "./Italic";
import Image from "./Image";
import TaskList from "./TaskList";
import CodeBlock from "./CodeBlock";
import Link from "./Link";
import OList from "./OList";
import UList from "./UList";
import Quote from "./Quote";
import Code from "./Code";
import FullScreen from "./FullScreen";
import MarkDownManual from '../markDownManual/MarkDownManual';
import HeaderDropdown from "./HeaderDropdown";
import Refresh from "./Refresh";
import AutoSave from "../autosave/AutoSave";

const All = () => {

  return (
    <React.Fragment>
    <div className="all">
      <div className="titleBarWrap" >
        <Undo />
        <Redo />
        <Bold />
        <Italic/>
        <HeaderDropdown/>
        <Link/>
        <Quote/>
        <Code/>
        <TaskList/>
        <OList/>
        <UList/>
        <Image/>
        <CodeBlock/>
        <FullScreen/>
        <Refresh/>
        <AutoSave/>
        <MarkDownManual/>
      </div>
    </div>
    </React.Fragment>
  );
};

export default All;
