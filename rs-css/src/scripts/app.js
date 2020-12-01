import createLevels from './task_template.js';
import { hovered, unhovered } from './setHoveredElements.js';
import typewriterEffect from './typewriter.js';
import codeColor from './codeColor.js';

const cssInput = document.querySelector('input');
const enterBtn = document.querySelector('#enter');
let guessEls;
let fileWindowEl = document.querySelector('.css-editor > .file-window');
let taskField = document.querySelector('#task');

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
  // метим классом selected элементы, которые выбрал юзер
  makeAGuess();
  let result = null;

  // for (let i = 0; i < correctEls.length; i++) {
  //   correctEls[i].classList.toggle('selected');
  // }

  for (let j = 0; j < table.children.length; j++) {
    if (table.children[j].classList.contains('selected')) {
      // проверяем есть ли у детей с selected ещё и класс correct
      if (table.children[j].classList.contains('correct') && result == null) {
        // если последний элемент проходит все проверки, то результат получается true, 
        // даже если другие эл. возвращали false - это баг, его надо пофиксить
        // можно попробовать чекать каждый элемент на корректность и составить массив ответов, 
        // который потом проверять на наличие false
        result = true;
      } else {
        result = false;
      }
    } else if (table.children[j].classList.contains('correct')) {
      result = false;
     }
  }

  if (result === true) {
    win();
    // очищаем состояние (возможно, стоит это вынести в отдельную функцию - clearState)
    table.querySelectorAll('*').forEach(el => el.classList.remove('selected'));
  } else if (result === false) {
    fail();
    table.querySelectorAll('*').forEach(el => el.classList.remove('selected'));
  }
}

function addClassCorrect() {
  let correctSelector = levels[currentLevel].answer;
  let correctEls  = table.querySelectorAll(correctSelector);
  for (let i = 0; i < correctEls.length; i++) {
    correctEls[i].classList.add('correct');
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
// мб иннеры тоже все в одну функцию стоит засунуть?
table.innerHTML = levels[currentLevel].divTemplate;
markup.innerHTML = levels[currentLevel].markupTemplate;
taskField.innerHTML = levels[currentLevel].task;


markup.addEventListener('mouseover', hovered);
markup.addEventListener('mouseout', unhovered);
table.addEventListener('mouseover', hovered);
table.addEventListener('mouseout', unhovered);
enterBtn.addEventListener('click', checkAnswer);

// typewriterEffect(selector, text, i)
function showMeAnswer() {
  typewriterEffect('input', `${levels[currentLevel].answer}`, 0)
}

let helpBtn = document.querySelector('#help_btn');
helpBtn.addEventListener('click', showMeAnswer);


addClassCorrect();
// codeColor(document.getElementById("markup"));
export { table, markup }

// подсветка кода (ниработает =( )
// document.addEventListener('click', (event) => {
//   document.querySelectorAll('markup').forEach((block) => {
//     console.log('свечу')
//     hljs.highlightBlock(block);
//   });
// });