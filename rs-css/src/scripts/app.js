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
// import getCompleteStats from './getCompleteStats';
// import updateProgressBar from './updateProgressBar';

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

// level's complete constance
const statusEnum = { cheat: 0, solved: 1 };
let cheatUsed = false;

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
  cheatUsed = false;
  localStorage.setItem('currentLevel', currentLevel);
  setContent();
}

function getCurrentLevelByClick(e) {
  const levelItem = e.currentTarget;
  currentLevel = levelItem.id.replace(/^\D+/g, '');
  cheatUsed = false;
  localStorage.setItem('currentLevel', currentLevel);
  setContent();
}

function clearState() {
  fileWindowEl.classList.remove('wrong');
  fileWindowEl.classList.remove('win');
}

function fail() {
  fileWindowEl.classList.add('wrong');
  // eslint-disable-next-line no-alert
  // alert('ты дурачок');
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

function setCompleteStats() {
  // let mark = levelsList.children[currentLevel].children[0].children[0];
  let completeStats = getCompleteStats();
  if (cheatUsed) {
    levels[currentLevel].isComplete = statusEnum.cheat;
    // красим галку
    // mark.style.borderColor = 'yellow';
    // mark.style.opacity = '1';
    // console.log(mark);
  } else {
    levels[currentLevel].isComplete = statusEnum.solved;
    // mark.style.borderColor = 'green';
    // mark.style.opacity = '1';
  }
  if (completeStats) {
    if (!(currentLevel in completeStats)) {
      // console.log(completeStats[currentLevel]);
      completeStats = { ...completeStats, [currentLevel]: levels[currentLevel].isComplete };
    }
  } else {
    completeStats = { [currentLevel]: levels[currentLevel].isComplete };
  }
  // console.log(completeStats);
  localStorage.setItem('completeStats', JSON.stringify(completeStats));
  // console.log(levels[currentLevel].isComplete);
  // if (levels[currentLevel].isComplete === 0) {
  //   mark.style.borderColor = 'yellow';
  //   mark.style.opacity = '1';
  //   console.log(mark);
  // } else if (levels[currentLevel].isComplete === 1) {
  //   mark.style.borderColor = 'green';
  //   mark.style.opacity = '1';
  // }
}

function win() {
  fileWindowEl.classList.add('win');
  // eslint-disable-next-line no-alert
  alert('вы выиграли!');

  setCompleteStats();
  // console.log(levels[currentLevel].isComplete);
  updateProgressBar();
  updateMarkColor();
  setTimeout(clearState, 900);
}

function makeAGuess() {
  const selector = cssInput.value;
  try {
    guessEls = table.querySelectorAll(selector); // array or null
    for (let i = 0; i < guessEls.length; i++) {
      guessEls[i].classList.add('selected');
    }
  } catch (error) {
    console.log('invalid property in input');
  }
  // console.log(`guess: ${guessEls}`);
  return guessEls;
}

function checkAnswer() {
  // метим классом selected элементы, которые выбрал юзер
  makeAGuess();
  let result = null;
  const tableProgeny = table.querySelectorAll('*');

  for (let j = 0; j < tableProgeny.length; j++) {
    if (tableProgeny[j].classList.contains('selected')) {
      // проверяем есть ли у детей с selected ещё и класс correct
      if (tableProgeny[j].classList.contains('correct') && (result == null || result === true)) {
        result = true;
      } else {
        result = false;
      }
    } else if (tableProgeny[j].classList.contains('correct')) {
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
  cheatUsed = true;
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
}

function updateMarkColor() {
  const completeStats = getCompleteStats();
  if (completeStats) {
    for (let [key, value] of Object.entries(completeStats)) {
      let mark = levelsList.children[key].children[0].children[0];
      if (value == 0) {
        mark.classList.add('cheat');
      } else if (value == 1) {
        mark.classList.add('solved');
      }
    }
  }
}

updateMarkColor();

updateProgressBar(maxLevel);

levelsList.querySelectorAll('li').forEach((li) => {
  li.addEventListener('click', getCurrentLevelByClick);
});

levelNextBtn.addEventListener('click', () => {
  getCurrentLevelByBtn('next');
  setContent();
});
levelPrevBtn.addEventListener('click', () => {
  getCurrentLevelByBtn('prev');
  // setContent();
});

resetBtn.addEventListener('click', () => {
  localStorage.removeItem('completeStats');
  updateProgressBar();
  updateMarkColor();
});

// экспортируем всякую фигню, которая потом нигде не работает
export { table, markup, colorInput };

// hljs.initHighlightingOnLoad();
