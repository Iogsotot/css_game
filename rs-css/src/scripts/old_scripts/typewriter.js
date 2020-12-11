// import codeColor from './codeColor';
import hljs from 'highlight.js';

const cssInput = document.querySelector('#input');
const inputColor = document.querySelector('#inputColor');

function colorInput() {
  inputColor.innerHTML = cssInput.value;
  try {
    hljs.highlightBlock(inputColor);
  } catch (error) {
    inputColor.style.color = 'rgb(219, 147, 13)';
  }
  cssInput.style.opacity = '0';
}

export default function typewriterEffect(selector, text, i) {
  const input = document.querySelector(`${selector}`);
  input.value = text.substring(0, i);
  // I disabled eslint, because I need this param re-assign,
  // I can't imagine how  this can be rewritten
  // eslint-disable-next-line no-param-reassign
  i += 1;
  if (i > text.length) {
    colorInput();
    return;
  }
  setTimeout(typewriterEffect, 200, selector, text, i);
}
