// import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css';
// import { levelsList } from './variables';
import '../styles/style.scss';
import createLevels from './task_template';
import { hovered, unhovered } from './setHoveredElements';
import typewriterEffect from './typewriter';
import codeColor from './codeColor';
// import cssColor from './cssColor.js';
import { levelsMenuClose, levelsMenuOpen } from './levelsMenu';
import setLevelsName from './setLevelsName';
// import { levelsList } from './variables';

const cssInput = document.querySelector('.css-input');
const inputColor = document.querySelector('#inputColor');
const enterBtn = document.querySelector('#enter');
let guessEls;
const fileWindowEl = document.querySelector('.css-editor > .file-window');
const taskField = document.querySelector('#task');
const resetBtn = document.querySelector('#resetBtn');

const table = document.querySelector('#table');
const markup = document.querySelector('#markup');
const colorMarkup = document.querySelector('#colorMarkup');

const iconClose = document.querySelector('.icon--close');
const burgerOpen = document.querySelector('#burgerOpen');

iconClose.addEventListener('click', levelsMenuClose);
burgerOpen.addEventListener('click', levelsMenuOpen);

// создаём объект с данными всех уровней и их состоянием
const levels = createLevels();

// переписать добавление HTML в динамический вид
// (в зависимости от уровня, на котором сейчас страница)
// уровень можно переключать мышью (щелкая по его представлению в меню уровней)
// уровень автоматически увеличивается после успешного прохождения текущего уровня
// состояние уровней( =прогресс) можно обнулить нажав на кнопку сброса прогресса
// eslint-disable-next-line prefer-const
let currentLevel = getCurrentLevel();
const maxLevel = 20;
const levelPrevBtn = document.querySelector('#levelPrev');
const levelNextBtn = document.querySelector('#levelNext');
const levelCurrentEls = document.querySelectorAll('.level--current');
const maxLevelEls = document.querySelectorAll('.level--total');

const levelsList = document.querySelector('#levelsList');

// всё, что связано с переключением уровня (ну кроме контента, он отдельно)
function getCurrentLevelByBtn(direction) {
  let integerLever = parseInt(currentLevel, 10);
  if (direction === 'next') {
    if (parseInt(currentLevel, 10) === maxLevel) {
      currentLevel = maxLevel;
    } else {
      integerLever += 1;
      currentLevel = integerLever;
    }
  } else if (direction === 'prev') {
    if (currentLevel === 1) {
      currentLevel = 1;
    } else {
      integerLever -= 1;
      currentLevel = integerLever;
    }
  }
  localStorage.setItem('currentLevel', currentLevel);
  // console.log(currentLevel, typeof currentLevel);
  // return currentLevel;
}

function getCurrentLevelByClick(e) {
  // console.log(e.target);
  const levelItem = e.currentTarget;
  currentLevel = levelItem.id.replace(/^\D+/g, '');
  // console.log('current: ', levelItem.id.replace(/^\D+/g, ''));
  // console.log(currentLevel);
  localStorage.setItem('currentLevel', currentLevel);
  setContent();
  // return currentLevel;
}

// levelsList.addEventListener('click', getCurrentLevelByClick);

function clearState() {
  fileWindowEl.classList.remove('wrong');
  fileWindowEl.classList.remove('win');
}

function fail() {
  fileWindowEl.classList.add('wrong');
  alert('ты дурачок');
  setTimeout(clearState, 900);
}

function getCurrentLevel() {
  const currentLevelFromStorage = localStorage.getItem('currentLevel');
  return currentLevelFromStorage ? parseInt(currentLevelFromStorage, 10) : 1;
}

function getCompleteStats() {
  const completeStats = localStorage.getItem('completeStats');
  return JSON.parse(completeStats);
}

function win() {
  fileWindowEl.classList.add('win');
  // eslint-disable-next-line no-alert
  alert('вы выиграли!');
  levels[currentLevel].isComplete = true;
  let completeStats = getCompleteStats();
  // non inverted boolean so true boolean representation
  // eslint-disable-next-line no-extra-boolean-cast
  if (!!completeStats) {
    completeStats = { ...completeStats, [currentLevel]: levels[currentLevel].isComplete };
  } else {
    completeStats = { [currentLevel]: levels[currentLevel].isComplete };
    // console.log(completeStats);
  }
  localStorage.setItem('completeStats', JSON.stringify(completeStats));
  updateProgressBar();
  setTimeout(clearState, 900);
}

function makeAGuess() {
  const selector = cssInput.value;
  try {
    // наводится на все эл. внутри table и ищет там selector
    guessEls = table.querySelectorAll(selector); // array or null
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
  // console.log(`guess: ${guessEls}`);
  return guessEls;
}

function checkAnswer() {
  // метим классом selected элементы, которые выбрал юзер
  makeAGuess();
  let result = null;

  for (let j = 0; j < table.children.length; j++) {
    if (table.children[j].classList.contains('selected')) {
      // проверяем есть ли у детей с selected ещё и класс correct
      if (table.children[j].classList.contains('correct') && (result == null || result === true)) {
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
    table.querySelectorAll('*').forEach((el) => el.classList.remove('selected'));
  } else if (result === false) {
    fail();
    table.querySelectorAll('*').forEach((el) => el.classList.remove('selected'));
  }
}

function addClassCorrect() {
  const correctSelector = levels[currentLevel].answer;
  // console.log(table);
  const correctEls = table.querySelectorAll(correctSelector);
  for (let i = 0; i < correctEls.length; i++) {
    correctEls[i].classList.add('correct');
  }
}

function setContent() {
  table.innerHTML = levels[currentLevel].divTemplate;
  markup.innerHTML = levels[currentLevel].markupTemplate;
  colorMarkup.innerHTML = levels[currentLevel].markupTemplate;
  taskField.innerHTML = levels[currentLevel].task;
  levelCurrentEls[0].innerHTML = currentLevel;
  maxLevelEls[0].innerHTML = maxLevel;
  levelCurrentEls[1].innerHTML = currentLevel;
  maxLevelEls[1].innerHTML = maxLevel;
  highlightSelectedLevel(levelsList, currentLevel);
  addClassCorrect();
  // подсветка кода
  codeColor(document.getElementById('colorMarkup'));
}

markup.addEventListener('mouseover', hovered);
markup.addEventListener('mouseout', unhovered);
table.addEventListener('mouseover', hovered);
table.addEventListener('mouseout', unhovered);
enterBtn.addEventListener('click', checkAnswer);

function showMeAnswer() {
  cssInput.style.opacity = '1';
  inputColor.innerHTML = '';
  typewriterEffect('#input', `${levels[currentLevel].answer}`, 0);
}

// моя самописная обертка вокруг codeColor функции
function colorInput() {
  cssInput.style.opacity = '0';
  inputColor.innerHTML = '';
  inputColor.innerHTML = cssInput.value;
  // console.log(inputColor.innerHTML);
  codeColor(document.getElementById('inputColor'), 'css');
}

function highlightSelectedLevel() {
  Array.from(levelsList.children).forEach((element) => {
    element.classList.remove('hover');
  });
  levelsList.children[currentLevel].classList.add('hover');
}

// возможно есть вариант переписать лисенер на перезапуск функции при каждом
// нажатии клавиши и/или каждом изменении длины .value
cssInput.addEventListener('change', colorInput);

const helpBtn = document.querySelector('#help_btn');
helpBtn.addEventListener('click', showMeAnswer);

setLevelsName(maxLevel, levels);
setContent(levelsList);

const progressBar = document.querySelector('#progressBar');
function updateProgressBar() {
  const completeStats = getCompleteStats();
  const progress = completeStats ? Object.keys(completeStats).length : 0;
  progressBar.style.width = `${progress * (100 / maxLevel)}%`;
  // console.log(progress, progressBar.style.width);
}

updateProgressBar();

levelsList.querySelectorAll('li').forEach((li) => {
  li.addEventListener('click', getCurrentLevelByClick);
});

levelNextBtn.addEventListener('click', () => {
  getCurrentLevelByBtn('next');
  setContent();
});
levelPrevBtn.addEventListener('click', () => {
  getCurrentLevelByBtn('prev');
  setContent();
});

resetBtn.addEventListener('click', () => {
  localStorage.removeItem('completeStats');
  updateProgressBar();
});

function showMeTarget(e) {
  if (e.target.id === 'table' || e.target.id === 'markup') { return; }
  // console.log(target);
  console.log(e.target);
  // console.log(currentTarget);
  console.log(e.currentTarget);
}

table.addEventListener('click', showMeTarget);

// экспортируем всякую фигню, которая потом нигде не работает
export { table, markup, colorInput };

// hljs.initHighlightingOnLoad();
