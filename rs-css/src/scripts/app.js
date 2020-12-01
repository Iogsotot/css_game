import createLevels from './task_template.js';
import { hovered, unhovered } from './setHoveredElements.js';
import typewriterEffect from './typewriter.js';

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
  // учесть, что может придти одна нода или их array
  // учесть ситуацию, когда по предположенному селектору нет Node
  for (let i = 0; i < guessEls.length; i++) {
    guessEls[i].classList.add('selected');
  }
  console.log('guess: ' + guessEls)
  return guessEls;
}

// добавить сброс состояния после win() / fail()
function checkAnswer() {
  makeAGuess();
  // достать из объекта текущего уровня селектор-ответ
  let correctSelector = levels[currentLevel]
  // console.log('answer: ' + correctSelector.answer);
  let correctEls = table.querySelectorAll(correctSelector.answer);  // Nodelist
  // console.log(correctEls[0].classList)
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




markup.addEventListener('mouseover', hovered)
markup.addEventListener('mouseout', unhovered)
table.addEventListener('mouseover', hovered)
table.addEventListener('mouseout', unhovered)

enterBtn.addEventListener('click', checkAnswer);


// typewriterEffect('input', levels[currentLevel].answer, 0);
// typewriterEffect(selector, text, i)


function showMeAnswer() {
  typewriterEffect('input', `${levels[currentLevel].answer}`, 0)
}

let helpBtn = document.querySelector('#help_btn');
helpBtn.addEventListener('click', showMeAnswer);

export { table, markup }