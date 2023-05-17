import "./toolbar.css";
import { useMarkdown } from "../../provider/markdown-provider.js";
import handleSelectedText from "../../utils/SelectedText.js";
import StartPosition from "../../utils/StarPosition";
import EmojiPicker, { Emoji, EmojiStyle,EmojiClickData } from "emoji-picker-react";
import React, { useState } from "react";

function Emoticon() {
  const [markdown, setMarkdown] = useMarkdown();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    const selectedEmoji = emojiData.emoji;
    insertEmoji(selectedEmoji);
  };
  

  const insertEmoji = (selectedEmoji: string) => {
    const text = handleSelectedText();
    const indexToReplace = StartPosition();
    const previousMarkdown = markdown;
    const newMarkdown =
      text !== ""
        ? previousMarkdown.substring(0, indexToReplace) +
          `${selectedEmoji}` +
          markdown.substring(indexToReplace + text.length)
        : previousMarkdown + `${selectedEmoji}`;
    setMarkdown(newMarkdown);
  };

  return (
    <React.Fragment>
      <div className="container">
      <div className="titleBar dropdown">
        <button aria-label="Emoji" className="emoji" onClick={handleToggle}>😀</button>
        {isOpen && (
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        )}
      </div>
      </div>
    </React.Fragment>
  );
}

export default Emoticon;
