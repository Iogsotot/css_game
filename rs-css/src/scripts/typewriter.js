export default function typewriterEffect(selector, text, i) {
  let input = document.querySelector(`${selector}`);
  input.value = text.substring(0, i);
  i += 1;
  // console.log('нутро инпута: ' + input.value);
  // console.log(`${levels[currentLevel].answer}`);
  // console.log(text);
  if (i > text.length) {
    return;
  }
  setTimeout(typewriterEffect, 200, selector,text,i);
}

