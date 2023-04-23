import './toolbar.css';
import { useMarkdown } from "../../provider/markdown-provider.js";
import { useContext } from 'react';



function Code (){
    
    const [markdown, setMarkdown] = useMarkdown();

    const executeBold = () =>{
        console.log("hola")
      return setMarkdown(markdown + "\n** **")
    }


return(
    <div className='titleBarWrap'>
      {/*Bold  */}
    <div className='titleBar' onClick={executeBold}>
        <svg width="13" height="13" viewBox="0 0 384 512">
      <path
        fill="currentColor" 
        d="M304.793 243.891c33.639-18.537 53.657-54.16 53.657-95.693 0-48.236-26.25-87.626-68.626-104.179C265.138 34.01 240.849 32 209.661 32H24c-8.837 0-16 7.163-16 16v33.049c0 8.837 7.163 16 16 16h33.113v318.53H24c-8.837 0-16 7.163-16 16V464c0 8.837 7.163 16 16 16h195.69c24.203 0 44.834-1.289 66.866-7.584C337.52 457.193 376 410.647 376 350.014c0-52.168-26.573-91.684-71.207-106.123zM142.217 100.809h67.444c16.294 0 27.536 2.019 37.525 6.717 15.828 8.479 24.906 26.502 24.906 49.446 0 35.029-20.32 56.79-53.029 56.79h-76.846V100.809zm112.642 305.475c-10.14 4.056-22.677 4.907-31.409 4.907h-81.233V281.943h84.367c39.645 0 63.057 25.38 63.057 63.057.001 28.425-13.66 52.483-34.782 61.284z"
      />
    </svg>
    </div>    
       
    <div className='titleBar'>
        <svg viewBox="0 0 48 48" fill="none" height="15" width="15">
      <path
        d="M16 13 4 25.432 16 37m16-24 12 12.432L32 37"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m28 4-7 40" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
    </div>

    <div className='titleBar'>
    <svg viewBox="0 0 48 48" fill="none" height="15" width="15">
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

    </div>

    <div className='titleBar'>
    <svg fill="currentColor" viewBox="0 0 448 512" height="13" width="13">
      <path d="M448 448c0 17.69-14.33 32-32 32h-96c-17.67 0-32-14.31-32-32s14.33-32 32-32h16V272H112v144h16c17.67 0 32 14.31 32 32s-14.33 32-32 32H32c-17.67 0-32-14.31-32-32s14.33-32 32-32h16V96H32C14.33 96 0 81.69 0 64s14.33-32 32-32h96c17.67 0 32 14.31 32 32s-14.33 32-32 32h-16v112h224V96h-16c-17.67 0-32-14.31-32-32s14.33-32 32-32h96c17.67 0 32 14.31 32 32s-14.33 32-32 32h-16v320h16c17.7 0 32 14.3 32 32z" />
    </svg>
    </div>
   
     
    </div>
);
} 
export default Code;