import TitleBar from "../title-bar/TitleBar";
import ReactMarkdown from 'react-markdown';
import { useMarkdown } from "../../provider/markdown-provider";
import './preview.css';

const Preview = () =>{
    const [markdown] = useMarkdown();

    return (
        <div className="preview">
            <TitleBar title='Preview'/>
            <div className="preview__scroll">
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

export default Preview;