const cssInput = document.querySelector('input');
const enterBtn = document.querySelector('#enter');
let guessEls;
let fileWindowEl = document.querySelector('.css-editor > .file-window');
// EnterBtn.style.border = '5px solid black'

function clearState() {
  fileWindowEl.classList.remove('wrong');
}

function fail() {
  fileWindowEl.classList.add('wrong');
  setTimeout(clearState, 900);
}

function makeAGuess() {
  // достать селектор из инпута
  // навестисть на элемент с таким селектором (если не нулл)
  // добавить элементу класс 'select'
  let selector = cssInput.value;
  try {
    guessEls = document.querySelectorAll(selector);  // array or null
  } catch (error) {
    console.log('invalid property in input');
    fail();
    
  }
  console.log(selector)
  return guessEls;
}



function checkAnswer() {
  // навестись на все элементы внутри table 
  // проверить есть ли у всех элементов с классом correct класс select
  // проверить есть ли класс correct у элементов без класс correct
  // return true / false 
  
  makeAGuess()
}

// если checkAnswer() return true то запускаем win()
// если checkAnswer() return false то запускаем fail()





let table = document.querySelector('.table');
let selectedEl;
table.addEventListener('mouseover', hovered)
table.addEventListener('mouseout', unhovered)

function unhovered(e) {
  if (e.target.id == 'parent') { return }
  e.target.classList.remove('hover');
}
function hovered(e) {
  if (e.target.id == 'parent') { return }
  console.log('ты трогал меня - ' +  e.target, e.target.tagName.toLowerCase(), e.target.classList.value);
  e.target.classList.add('hover');
}

enterBtn.addEventListener('click', checkAnswer);

