import createLevels from './task_template.js';

const cssInput = document.querySelector('input');
const enterBtn = document.querySelector('#enter');
let guessEls;
let fileWindowEl = document.querySelector('.css-editor > .file-window');

function clearState() {
  fileWindowEl.classList.remove('wrong');
  fileWindowEl.classList.remove('win');
}

function fail() {
  fileWindowEl.classList.add('wrong');
  setTimeout(clearState, 900);
}

function win() {
  fileWindowEl.classList.add('win');
  alert('вы выиграли!');
  setTimeout(clearState, 900);
}

function makeAGuess() {
  // достать селектор из инпута
  let selector = cssInput.value;
  try {
    // наводится на все эл. внутри table и ищет там selector
    guessEls = table.querySelectorAll(selector);  // array or null
  } catch (error) {
    console.log('invalid property in input');
    fail();
  }
  // console.log(selector);
  // console.log(guessEls); // возвращает NodeList с совпадениями
  // добавить элементу/элементам класс 'selected'
  // учесть, что может придти одна нода или их array
  // учесть ситуацию, когда по предположенному селектору нет Node
  for (let i = 0; i < guessEls.length; i++) {
    guessEls[i].classList.add('selected');
  }
  console.log('guess: ' + guessEls)
  return guessEls;
}

function checkAnswer() {
  // достать из объекта текущего уровня селектор-ответ
  let correctSelector = levels[currentLevel]
  console.log('answer: ' + correctSelector.answer);
  let correctEls = table.querySelectorAll(correctSelector.answer);  // Nodelist
  console.log(correctEls[0].classList)
  // let guessEls = makeAGuess();  // возвращает NodeList с совпадениями
  let result;

  for (let i = 0; i < correctEls.length; i++) {
    correctEls[i].classList.toggle('selected');
  }
  for (let j = 0; j < table.children.length; j++) {
    if (table.children[j].classList.contains('selected')) {
      result = false;
    } else {
      result = true;
    }
  }
  if (result === true) {
    win()
  } else if (result === false) {
    fail()
  }
}


// если checkAnswer() return true то запускаем win()
// если checkAnswer() return false то запускаем fail()


let table = document.querySelector('#table');
let markup = document.querySelector('#markup');
// создаём объект с данными всех уровней и их состоянием
const levels = createLevels();
// console.log(levels)
// переписать добавление HTML в динамический вид (в зависимости от уровня, на котором сейчас страница)
// уровень можно переключать мышью (щелкая по его представлению в меню уровней)
// уровень автоматически увеличивается после успешного прохождения текущего уровня
// состояние уровней( =прогресс) можно обнулить нажав на кнопку сброса прогресса
let currentLevel = 3;
table.innerHTML = levels[currentLevel].divTemplate;
markup.innerHTML = levels[currentLevel].markupTemplate;


// функция setHoveredElements() - берет селектор, на котором мышь(parent)
//вставляет его в querySelector
// применять этот querySelector к table и markup одновременно
// на выбранные элементы вешает класс hover
// let selectedEl;
function setHoveredElements(parent, needUnhover) {
  if(parent.hasChildNodes()) {
    let children = parent.children;
    let mirrorChildren;
    if (parent === table) {
      mirrorChildren = markup.children;
      // console.log(parent, mirrorChildren)
    } else if (parent === markup) {
      mirrorChildren = table.children;
      // console.log(parent)
    }
    if(needUnhover === 'yes') {
      for (let i = 0; i < children.length; i++) {
          mirrorChildren[i].classList.remove('hover');
      }
    } else if (needUnhover === 'no') {
      for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains('hover')) {
          mirrorChildren[i].classList.add('hover');
        }
      }
    }
    // console.log(children);
    // console.log(children[0].compareDocumentPosition(mirrorChildren[0]))
  } else {
    console.log('no children');
  }
}

// setHoveredElements(table)

markup.addEventListener('mouseover', hovered)
markup.addEventListener('mouseout', unhovered)
table.addEventListener('mouseover', hovered)
table.addEventListener('mouseout', unhovered)

function unhovered(e) {
  if (e.target.id == 'table' || e.target.id == 'markup') { return }
  // e.target.classList.remove('hover');
  if (e.target.parentNode.id === 'table') {
    e.target.classList.remove('hover');
    setHoveredElements(table, 'yes');
  } else if (e.target.parentNode.id === 'markup') {
    e.target.classList.remove('hover');
    setHoveredElements(markup, 'yes');
  }
}
function hovered(e) {
  if (e.target.id == 'table' || e.target.id == 'markup') { return }
  // console.log(e.target.parentNode.id)
  if (e.target.parentNode.id === 'table') {
    e.target.classList.add('hover');
    setHoveredElements(table, 'no');
  } else if (e.target.parentNode.id === 'markup') {
    e.target.classList.add('hover');
    setHoveredElements(markup, 'no');
  }
  // console.log('ты трогал меня - ' +  e.target.tagName.toLowerCase(), e.target.classList.value);
  e.target.classList.add('hover');
}

enterBtn.addEventListener('click', checkAnswer);

