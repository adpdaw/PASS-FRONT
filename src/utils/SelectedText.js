



function handleSelectedText() {
    const textarea = document.querySelector('.editor');
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const text = textarea.value.substring(startPos, endPos);
    console.log(text)
    return text;
  
  };

  function endPosition (){
    const textarea = document.querySelector('.editor');
    const endPos = textarea.selectionEnd;
    return endPos;

  };


  export default handleSelectedText;