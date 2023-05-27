
function handleSelectedText() {
    const textarea = document.querySelector('.editor');
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const text = textarea.value.substring(startPos, endPos);
    return text;
  
  };




  export default handleSelectedText;