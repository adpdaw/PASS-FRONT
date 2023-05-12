function StartPosition (){
    const textarea = document.querySelector('.editor');
    const startPos = textarea.selectionStart;
    return startPos;

  };

  function endPosition (){
    const textarea = document.querySelector('.editor');
    const endPos = textarea.selectionEnd;
    return endPos;

  };

  export default StartPosition;