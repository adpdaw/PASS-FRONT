import "./toolbar.css";
import { useMarkdown } from "../../provider/markdown-provider.js";
import { useContext } from "react";

function Header() {
    const [markdown, setMarkdown] = useMarkdown();

    const executeHeader = () => {
        const text = markdown.toString();
        console.log(markdown.toString().length)
        if (text.charAt(text.length - 1) == "#" || text.charAt(text.length - 1) == " " ) {
            setMarkdown(markdown + "#")

        } else {
            
            setMarkdown(markdown + "\n#")
        }
    };

    return (
        <div className="titleBar" onClick={executeHeader}>
            <button aria-label="Add Header Text">
                <svg width="15" height="15" viewBox="0 0 384 512">
                    <path
                    fill="currentColor"
                    d="M448 448c0 17.69-14.33 32-32 32h-96c-17.67 
                                0-32-14.31-32-32s14.33-32 32-32h16V272H112v144h16c17.67
                                0 32 14.31 32 32s-14.33 32-32 32H32c-17.67 
                                0-32-14.31-32-32s14.33-32 32-32h16V96H32C14.33
                                96 0 81.69 0 64s14.33-32 32-32h96c17.67 
                                0 32 14.31 32 32s-14.33 32-32 32h-16v112h224V96h-16c-17.67
                                0-32-14.31-32-32s14.33-32 32-32h96c17.67 
                                0 32 14.31 32 32s-14.33 32-32 32h-16v320h16c17.7 0 32 14.3 32 32z" />
                </svg>
            </button>
        </div>
    );
}
export default Header;

