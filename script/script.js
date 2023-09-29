$(document).ready(function () {
    const textElement = $("#typing-text");
    const text = "MERAIN Kawther"; 
    let index = 0;
    const typingSpeed = 200;
  
    function typeText() {
      textElement.text(text.substring(0, index));
      index++;
      if (index <= text.length) {
        setTimeout(typeText, 100);
      }
    }
  
    typeText();
  });
  
  $(document).ready(function () {
    const textElement = $("#typing-text1");
    const text = "......"; 
    let index = 0;
    const typingSpeed = 200;
  
    function typeText() {
      textElement.text(text.substring(0, index));
      index++;
      if (index > text.length) {
        index = 0;}
    setTimeout(typeText, typingSpeed);
      
    }
  
    typeText();
  });
  