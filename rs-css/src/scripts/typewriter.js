import codeColor from './codeColor.js';
// import colorInput from './app.js';

let cssInput = document.querySelector('#input');
let inputColor = document.querySelector('#inputColor');

function colorInput() {
  inputColor.innerHTML = cssInput.value;
  console.log(inputColor.innerHTML)
  codeColor(document.getElementById("inputColor"), 'css');
  input.style.opacity = "0";
}



export default function typewriterEffect(selector, text, i) {
  let input = document.querySelector(`${selector}`);
  input.value = text.substring(0, i);
  // console.log(input.value);
  i += 1;
  if (i > text.length) {
    colorInput();
    return;
  }
  setTimeout(typewriterEffect, 200, selector,text,i);
}

// export default function typewriterEffect(selector, text, i) {
//   return new Promise((resolve) => {
//     let input = document.querySelector(`${selector}`);
//     input.innerHTML = text.substring(0, i);
//     i += 1;
    
//     if (i > text.length) {
//       resolve();
//       return;
//     }
//     setTimeout(typewriterEffect, 200, selector,text,i);
//   })
// }

