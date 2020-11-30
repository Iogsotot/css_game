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
  console.log(guessEls); // возвращает NodeList с совпадениями
  // добавить элементу/элементам класс 'selected'
  // учесть, что может придти одна нода или их array
  for (let i = 0; i < guessEls.length; i++) {
    guessEls[i].classList.add('selected');
  }
  console.log(guessEls)
  return guessEls;
}

function checkAnswer() {
  
  // проверить есть ли у всех элементов с классом correct класс select
  // проверить есть ли класс correct у элементов без класс correct
  // return true / false 
  let guessEls = makeAGuess();  // возвращает NodeList с совпадениями
  // вставляем селектор в функцию Selected(selector)
}
// если checkAnswer() return true то запускаем win()
// если checkAnswer() return false то запускаем fail()


let table = document.querySelector('#table');
let markup = document.querySelector('#markup');
// создаём объект с данными всех уровней и их состоянием
const levels = createLevels();
// переписать добавление HTML в динамический вид (в зависимости от уровня, на котором сейчас страница)
// уровень можно переключать мышью (щелкая по его представлению в меню уровней)
// уровень автоматически увеличивается после успешного прохождения текущего уровня
// состояние уровней( =прогресс) можно обнулить нажав на кнопку сброса прогресса
table.innerHTML = levels[3].divTemplate;
markup.innerHTML = levels[3].markupTemplate;


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

