import codeColor from './codeColor';

const cssInput = document.querySelector('#input');
const inputColor = document.querySelector('#inputColor');

function colorInput() {
  inputColor.innerHTML = cssInput.value;
  codeColor(document.getElementById('inputColor'), 'css');
  cssInput.style.opacity = '0';
}

export default function typewriterEffect(selector, text, i) {
  const input = document.querySelector(`${selector}`);
  input.value = text.substring(0, i);
  // eslint-disable-next-line no-param-reassign
  i += 1;
  if (i > text.length) {
    colorInput();
    return;
  }
  setTimeout(typewriterEffect, 200, selector, text, i);
}
