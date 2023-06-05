import { React, useState,useContext, useEffect } from "react";
import { useMarkdown } from "../../provider/markdown-provider.js";
import { datosContexto } from "../../index_components/Context/Context.js";
import { useParams } from "react-router-dom";

const AutoSave = () => {
  const context = useContext(datosContexto);
  const { fileId } = useParams();
    const [markdown, setMarkdown] = useMarkdown();
    const [autoSaveEnabled, setAutoSaveEnabled] = useState(false);
    const [button, setButton] = useState("AutoSave Off");
    const [color, setColor] = useState("currentColor");

    const url = `http://localhost/api/file/${fileId}`;

   

    useEffect(() => {
        const handleKeyPress = async (event) => {
          if (event.key === "Enter") {
        
            console.log("Guardando el markdown...");
            context.updateFileContent(markdown)
            const response = await context.updateFile(url,context.file);

            if(response.status !== 200){
                window.alert("Something is wrong");
            }
            // Llamar a una función que guarde el markdown en una base de datos
            
          }
        };
      
        if (autoSaveEnabled) {
          document.addEventListener("keypress", handleKeyPress);
        } else {
          document.removeEventListener("keypress", handleKeyPress);
        }
      
        // Cleanup: remove event listener when component unmounts or autoSaveEnabled changes
        return () => {
          document.removeEventListener("keypress", handleKeyPress);
        };
      }, [autoSaveEnabled, markdown]);

 

    const handleAutoSaveToggle = () => {
        setAutoSaveEnabled(!autoSaveEnabled);
        setButton(!autoSaveEnabled ? "AutoSave On" : "AutoSave Off");
        setColor(!autoSaveEnabled ? "red" : "currentColor");
    };


    return (
       
        <div className="titleBar">
            <button aria-label={button} onClick={handleAutoSaveToggle} className="btnTools">
                <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="ic_fluent_document_autosave_24_regular" fill={color} fillRule="nonzero">
                            <path d="M6.5,12 C9.53756612,12 12,14.4624339 12,17.5 C12,20.5375661 9.53756612,23 
                            6.5,23 C3.46243388,23 1,20.5375661 1,17.5 C1,14.4624339 3.46243388,12 6.5,12 Z M12.1289096,2
                            C12.7254427,2 13.2975605,2.23689125 13.7194834,2.6585934 L16.531355,5.46899352 
                            L19.3390003,8.28086677 C19.7602248,8.70272584 19.996813,9.2745088 19.996813,9.8706591
                            L19.996813,19.75 C19.996813,20.9926407 18.9894537,22 17.746813,22 L11.1896412,22.0008195
                            C11.6160435,21.5566422 11.9799518,21.0520148 12.2672297,20.5010736 L17.746813,20.5 C18.1610266,20.5
                            18.496813,20.1642136 18.496813,19.75 L18.496,10.003 L14.25,10.0038905 C13.059136,10.0038905 
                            12.0843551,9.07872894 12.0051908,7.90793935 L12,7.75389054 L11.999,3.5 L6.25,3.5 C5.83578644,3.5 5.5,3.83578644
                            5.5,4.25 L5.49909108,11.0765886 C4.97586224,11.157457 4.47324006,11.3007258 3.99906694,11.4985525
                            L4,4.25 C4,3.00735931 5.00735931,2 6.25,2 L12.1289096,2 Z M9.5,17.5 L7.5,17.5 L7.41012437,17.5080557
                            C7.17687516,17.5503916 7,17.7545401 7,18 C7,18.2454599 7.17687516,18.4496084 7.41012437,18.4919443
                            L7.5,18.5 L8.37050377,18.5006122 C8.01032916,19.1741569 7.29973837,19.6235886 6.49648802,19.6235886 
                            C5.88270332,19.6235886 5.31221362,19.3624278 4.91135565,18.9131866 C4.85559244,18.8506928 
                            4.80355063,18.7849808 4.75553163,18.7164124 C4.59712759,18.4902205 4.28535099,18.4352676
                            4.0591591,18.5936717 C3.8329672,18.7520757 3.77801428,19.0638523 3.93641832,19.2900442 
                            C4.00694884,19.3907577 4.08335839,19.4872383 4.16521157,19.5789711 C4.75385665,20.2386651
                            5.59469827,20.6235886 6.49648802,20.6235886 C7.44467256,20.6235886 8.30481161,20.1981198 
                            8.88142795,19.5177367 L9.00057773,19.3681007 L9,20 L9.00805567,20.0898756 C9.05039163,20.3231248 
                            9.25454011,20.5 9.5,20.5 C9.74545989,20.5 9.94960837,20.3231248 9.99194433,20.0898756 
                            L10,20 L10,18 L9.99194433,17.9101244 C9.94960837,17.6768752 9.74545989,17.5 9.5,17.5 Z M6.49648802,14.3764114 
                            C5.55080006,14.3764114 4.69274709,14.7996324 4.11618094,15.4768116 L3.99701016,15.6257468 L3.99871227,15 
                            L3.9906566,14.9101244 C3.94832064,14.6768752 3.74417215,14.5 3.49871227,14.5 C3.25325238,14.5
                            3.04910389,14.6768752 3.00676793,14.9101244 L2.99871227,15 L2.99871227,17 L3.00676793,17.0898756
                            C3.0438119,17.2939687 3.20474358,17.4549004 3.40883663,17.4919443 L3.49871227,17.5 L5.5,17.5 L5.58987563,17.4919443
                            C5.82312484,17.4496084 6,17.2454599 6,17 C6,16.7545401 5.82312484,16.5503916 5.58987563,16.5080557 L5.5,16.5 
                            L4.62227181,16.4997633 C4.98236805,15.8260447 5.69304839,15.3764114 6.49648802,15.3764114 C7.10851954,15.3764114 
                            7.67752678,15.6360683 8.07827816,16.0830766 C8.13699297,16.1485686 8.19161005,16.2176171 8.24178059,16.2898029 
                            C8.39937897,16.5165568 8.71095812,16.5726185 8.93771208,16.4150201 C9.16446604,16.2574217 9.22052772,15.9458426
                            9.06292933,15.7190886 C8.98923636,15.6130585 8.90904519,15.5116785 8.82285974,15.4155451 C8.23436623,14.7591245 
                            7.39569596,14.3764114 6.49648802,14.3764114 Z M13.499,4.559 L13.5,7.75389054 C13.5,8.1335863 13.7821539,8.4473815
                            14.1482294,8.49704392 L14.25,8.50389054 L17.441,8.503 L13.499,4.559 Z">
                            </path>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
       
    );
};

export default AutoSave;
