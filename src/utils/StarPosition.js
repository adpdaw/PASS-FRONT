function StartPosition (){
    const textarea = document.querySelector('.editor');
    const startPos = textarea.selectionStart;
    return startPos;

  };

  export default StartPosition;