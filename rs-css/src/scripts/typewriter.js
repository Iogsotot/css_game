import hljs from 'highlight.js';

function colorInput() {
  const cssInput = document.querySelector('#input');
  const inputColor = document.querySelector('#inputColor');
  inputColor.innerHTML = cssInput.value;
  try {
    hljs.highlightBlock(inputColor);
  } catch (error) {
    inputColor.style.color = 'rgb(219, 147, 13)';
  }
  cssInput.style.opacity = '0';
}

function typewriterEffect(selector, text, i) {
  const input = document.querySelector(`${selector}`);
  const cssInput = document.querySelector('#input');
  cssInput.addEventListener('change', colorInput);
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

export { colorInput, typewriterEffect };
